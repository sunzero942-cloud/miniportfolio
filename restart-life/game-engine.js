class GameEngine {
  constructor() {
    this.state = {
      currentPage: 'disclaimer',
      attributes: {
        intelligence: 10,
        physique: 10,
        charm: 10,
        luck: 10
      },
      totalPoints: 100,
      usedPoints: 20,
      selectedFamily: null,
      talent: null,
      gameStats: {
        wealth: 50,
        knowledge: 50,
        happiness: 50,
        health: 50
      },
      currentStageIndex: 0,
      currentStoryIndex: 0,
      ending: null
    };
  }

  getAttributes() {
    return this.state.attributes;
  }

  setAttribute(attr, value) {
    const min = 5;
    const max = 50;
    const oldValue = this.state.attributes[attr];
    const newValue = Math.max(min, Math.min(max, value));
    const diff = newValue - oldValue;
    
    if (this.state.usedPoints + diff <= this.state.totalPoints) {
      this.state.attributes[attr] = newValue;
      this.state.usedPoints += diff;
      return true;
    }
    return false;
  }

  getRemainingPoints() {
    return this.state.totalPoints - this.state.usedPoints;
  }

  getFamilies() {
    return GAME_DATA.families;
  }

  selectFamily(familyId) {
    const family = GAME_DATA.families.find(f => f.id === familyId);
    if (!family) return null;
    
    this.state.selectedFamily = family;
    this.state.gameStats = { ...family.baseStats };
    
    this.state.talent = this.calculateTalent(family);
    
    return {
      family,
      talent: this.state.talent
    };
  }

  calculateTalent(family) {
    const attrs = this.state.attributes;
    
    const matchedTalents = GAME_DATA.talents.filter(talent => {
      const cond = talent.condition;
      
      if (cond.family && cond.family !== family.id) {
        return false;
      }
      
      if (cond.intelligence && attrs.intelligence < cond.intelligence) {
        return false;
      }
      if (cond.physique && attrs.physique < cond.physique) {
        return false;
      }
      if (cond.charm && attrs.charm < cond.charm) {
        return false;
      }
      if (cond.luck && attrs.luck < cond.luck) {
        return false;
      }
      
      return true;
    });

    if (matchedTalents.length === 0) {
      return GAME_DATA.talents.find(t => t.id === 'balanced');
    }

    matchedTalents.sort((a, b) => {
      const aScore = this.calculateTalentMatchScore(a);
      const bScore = this.calculateTalentMatchScore(b);
      return bScore - aScore;
    });

    return matchedTalents[0];
  }

  calculateTalentMatchScore(talent) {
    let score = 0;
    const cond = talent.condition;
    const attrs = this.state.attributes;
    
    if (cond.intelligence) {
      score += attrs.intelligence >= cond.intelligence ? 10 : 5;
    }
    if (cond.physique) {
      score += attrs.physique >= cond.physique ? 10 : 5;
    }
    if (cond.charm) {
      score += attrs.charm >= cond.charm ? 10 : 5;
    }
    if (cond.luck) {
      score += attrs.luck >= cond.luck ? 10 : 5;
    }
    if (cond.family) {
      score += 5;
    }
    
    return score;
  }

  getCurrentStage() {
    return GAME_DATA.stages[this.state.currentStageIndex];
  }

  getCurrentStory() {
    const stage = this.getCurrentStage();
    if (!stage) return null;
    
    const stories = stage.getStories(this.state.selectedFamily.id);
    return stories[this.state.currentStoryIndex];
  }

  makeChoice(choiceIndex) {
    const story = this.getCurrentStory();
    if (!story) return null;
    
    const choice = story.choices[choiceIndex];
    if (!choice) return null;

    const effects = { ...choice.effects };

    Object.keys(effects).forEach(key => {
      if (this.state.gameStats.hasOwnProperty(key)) {
        this.state.gameStats[key] = Math.max(0, Math.min(100, 
          this.state.gameStats[key] + effects[key]));
      }
    });

    this.state.currentStoryIndex++;
    
    const stage = this.getCurrentStage();
    const stories = stage.getStories(this.state.selectedFamily.id);
    
    if (this.state.currentStoryIndex >= stories.length) {
      const earlyEnding = this.checkEarlyEnding();
      if (earlyEnding) {
        return { type: 'early_ending', ending: earlyEnding };
      }
      
      this.state.currentStageIndex++;
      this.state.currentStoryIndex = 0;
      
      if (this.state.currentStageIndex >= GAME_DATA.stages.length) {
        return { type: 'ending', ending: this.calculateEnding() };
      }
      
      return { type: 'next_stage', stage: this.getCurrentStage() };
    }

    return { type: 'next_story', story: this.getCurrentStory() };
  }

  checkEarlyEnding() {
    const stage = this.getCurrentStage();
    if (!stage) return null;
    
    for (const ending of GAME_DATA.endings) {
      if (!ending.isEarly) continue;
      
      if (ending.triggerStage && ending.triggerStage !== stage.id) {
        continue;
      }
      
      if (ending.condition.type === 'stat') {
        const stat = this.state.gameStats[ending.condition.stat];
        if (ending.condition.max !== undefined && stat <= ending.condition.max) {
          this.state.ending = ending;
          return ending;
        }
      }
    }
    
    return null;
  }

  calculateEnding() {
    const stats = this.state.gameStats;
    
    const sortedEndings = [...GAME_DATA.endings].sort((a, b) => {
      const aPriority = this.getEndingPriority(a);
      const bPriority = this.getEndingPriority(b);
      return bPriority - aPriority;
    });

    for (const ending of sortedEndings) {
      if (this.matchesEnding(ending)) {
        this.state.ending = ending;
        return ending;
      }
    }

    const defaultEnding = GAME_DATA.endings.find(e => e.id === 'ordinary');
    this.state.ending = defaultEnding;
    return defaultEnding;
  }

  getEndingPriority(ending) {
    let priority = 0;
    
    if (ending.condition.type === 'multi') {
      priority = 100;
    } else if (ending.condition.type === 'balanced') {
      priority = 90;
    } else if (ending.condition.type === 'stat') {
      priority = 80 - (ending.condition.min || 0);
    } else {
      priority = 0;
    }
    
    return priority;
  }

  matchesEnding(ending) {
    const stats = this.state.gameStats;
    const cond = ending.condition;

    if (cond.type === 'default') {
      return false;
    }

    if (cond.type === 'stat') {
      const stat = stats[cond.stat];
      if (cond.min !== undefined && stat >= cond.min) {
        return true;
      }
      if (cond.max !== undefined && stat <= cond.max) {
        return true;
      }
      return false;
    }

    if (cond.type === 'balanced') {
      const values = Object.values(stats);
      const min = Math.min(...values);
      return min >= cond.min;
    }

    if (cond.type === 'multi') {
      let count = 0;
      for (const stat of cond.stats) {
        if (stats[stat] >= cond.min) {
          count++;
        }
      }
      return count >= cond.count;
    }

    return false;
  }

  getGameStats() {
    return this.state.gameStats;
  }

  getTalent() {
    return this.state.talent;
  }

  getEnding() {
    return this.state.ending;
  }

  reset() {
    this.state = {
      currentPage: 'disclaimer',
      attributes: {
        intelligence: 10,
        physique: 10,
        charm: 10,
        luck: 10
      },
      totalPoints: 100,
      usedPoints: 20,
      selectedFamily: null,
      talent: null,
      gameStats: {
        wealth: 50,
        knowledge: 50,
        happiness: 50,
        health: 50
      },
      currentStageIndex: 0,
      currentStoryIndex: 0,
      ending: null
    };
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = GameEngine;
}
