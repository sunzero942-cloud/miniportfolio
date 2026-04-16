class GameApp {
  constructor() {
    this.engine = new GameEngine();
    this.init();
  }

  init() {
    this.bindEvents();
    this.updateAttributeUI();
  }

  bindEvents() {
    document.getElementById('start-btn').addEventListener('click', () => {
      this.showPage('attribute');
    });

    document.querySelectorAll('.attr-slider').forEach(slider => {
      slider.addEventListener('input', (e) => {
        const attr = e.target.dataset.attr;
        const value = parseInt(e.target.value);
        this.handleSliderChange(attr, value);
      });
    });

    document.getElementById('random-attrs-btn').addEventListener('click', () => {
      this.randomizeAttributes();
    });

    document.getElementById('confirm-attrs-btn').addEventListener('click', () => {
      if (this.engine.getRemainingPoints() === 0) {
        this.showPage('family');
        this.renderFamilyOptions();
      } else {
        alert(`请分配完所有点数！还剩 ${this.engine.getRemainingPoints()} 点`);
      }
    });

    document.getElementById('confirm-family-btn').addEventListener('click', () => {
      if (this.engine.state.selectedFamily) {
        this.showPage('game');
        this.startGame();
      }
    });

    document.getElementById('restart-btn').addEventListener('click', () => {
      this.engine.reset();
      this.showPage('disclaimer');
      this.updateAttributeUI();
    });
  }

  handleSliderChange(attr, newValue) {
    const currentAttrs = this.engine.getAttributes();
    const oldValue = currentAttrs[attr];
    const diff = newValue - oldValue;
    const remaining = this.engine.getRemainingPoints();
    
    if (diff > remaining) {
      newValue = oldValue + remaining;
    }
    
    const min = 5;
    const max = 50;
    newValue = Math.max(min, Math.min(max, newValue));
    
    this.engine.state.attributes[attr] = newValue;
    this.engine.state.usedPoints = Object.values(this.engine.state.attributes).reduce((a, b) => a + b, 0) - 20;
    
    this.updateAttributeUI();
  }

  randomizeAttributes() {
    const totalPoints = 100;
    const minEach = 5;
    const maxEach = 50;
    const attrs = ['intelligence', 'physique', 'charm', 'luck'];
    
    let remaining = totalPoints - (minEach * attrs.length);
    const values = {};
    
    attrs.forEach(attr => {
      values[attr] = minEach;
    });
    
    while (remaining > 0) {
      const attr = attrs[Math.floor(Math.random() * attrs.length)];
      if (values[attr] < maxEach) {
        values[attr]++;
        remaining--;
      }
    }
    
    attrs.forEach(attr => {
      this.engine.state.attributes[attr] = values[attr];
      document.getElementById(`${attr}-slider`).value = values[attr];
    });
    
    this.engine.state.usedPoints = totalPoints;
    this.updateAttributeUI();
  }

  showPage(pageName) {
    document.querySelectorAll('.page').forEach(page => {
      page.classList.remove('active');
    });
    document.getElementById(`${pageName}-page`).classList.add('active');
    this.engine.state.currentPage = pageName;
  }

  updateAttributeUI() {
    const attrs = this.engine.getAttributes();
    const remaining = this.engine.getRemainingPoints();

    document.getElementById('total-points').textContent = remaining;

    Object.keys(attrs).forEach(attr => {
      const value = attrs[attr];
      const slider = document.getElementById(`${attr}-slider`);
      const percentage = ((value - 5) / 45) * 100;
      
      document.getElementById(`${attr}-value`).textContent = value;
      
      if (slider && slider.value != value) {
        slider.value = value;
      }
      
      const fill = document.getElementById(`${attr}-fill`);
      if (fill) {
        fill.style.width = `${percentage}%`;
      }
    });
    
    const confirmBtn = document.getElementById('confirm-attrs-btn');
    if (remaining === 0) {
      confirmBtn.disabled = false;
      confirmBtn.textContent = '确认属性';
    } else {
      confirmBtn.disabled = false;
      confirmBtn.textContent = `确认属性 (剩余 ${remaining} 点)`;
    }
  }

  renderFamilyOptions() {
    const container = document.getElementById('family-options');
    const families = this.engine.getFamilies();

    container.innerHTML = families.map(family => `
      <div class="family-option" data-family="${family.id}">
        <div class="family-header">
          <span class="family-icon">${family.icon}</span>
          <span class="family-name">${family.name}</span>
        </div>
        <p class="family-desc">${family.desc}</p>
        <div class="family-stats">
          <span class="family-stat ${family.baseStats.wealth >= 50 ? 'positive' : ''}">
            💰 ${family.baseStats.wealth}
          </span>
          <span class="family-stat ${family.baseStats.knowledge >= 50 ? 'positive' : ''}">
            📚 ${family.baseStats.knowledge}
          </span>
          <span class="family-stat ${family.baseStats.happiness >= 50 ? 'positive' : ''}">
            😊 ${family.baseStats.happiness}
          </span>
          <span class="family-stat ${family.baseStats.health >= 50 ? 'positive' : ''}">
            ❤️ ${family.baseStats.health}
          </span>
        </div>
      </div>
    `).join('');

    container.querySelectorAll('.family-option').forEach(option => {
      option.addEventListener('click', () => {
        container.querySelectorAll('.family-option').forEach(o => o.classList.remove('selected'));
        option.classList.add('selected');
        
        const familyId = option.dataset.family;
        const result = this.engine.selectFamily(familyId);
        
        this.showTalentPreview(result.talent);
        document.getElementById('confirm-family-btn').disabled = false;
      });
    });
  }

  showTalentPreview(talent) {
    const preview = document.getElementById('talent-preview');
    preview.style.display = 'block';
    
    document.getElementById('talent-icon').textContent = talent.icon;
    document.getElementById('talent-name').textContent = talent.name;
    document.getElementById('talent-desc').textContent = talent.desc;
  }

  startGame() {
    this.updateGameUI();
    this.renderStory();
  }

  updateGameUI() {
    const stage = this.engine.getCurrentStage();
    const stats = this.engine.getGameStats();
    const talent = this.engine.getTalent();

    if (stage) {
      document.getElementById('stage-icon').textContent = stage.icon;
      document.getElementById('stage-name').textContent = stage.name;
      document.getElementById('current-age').textContent = stage.age;
    }

    const statMap = {
      wealth: { value: 'wealth-value', bar: 'wealth-bar' },
      knowledge: { value: 'knowledge-value', bar: 'knowledge-bar' },
      happiness: { value: 'happiness-value', bar: 'happiness-bar' },
      health: { value: 'health-value', bar: 'health-bar' }
    };

    Object.keys(stats).forEach(stat => {
      const value = stats[stat];
      const ids = statMap[stat];
      if (ids) {
        const valueEl = document.getElementById(ids.value);
        const barEl = document.getElementById(ids.bar);
        if (valueEl) valueEl.textContent = value;
        if (barEl) barEl.style.width = `${value}%`;
      }
    });

    if (talent) {
      const talentEl = document.getElementById('character-talent');
      if (talentEl) talentEl.textContent = talent.name;
    }
  }

  renderStory() {
    const story = this.engine.getCurrentStory();
    if (!story) return;

    const storyArea = document.getElementById('story-text');
    storyArea.innerHTML = '';
    
    let speakerHtml = '';
    if (story.speaker && story.speakerIcon) {
      speakerHtml = `<div class="story-speaker"><span class="speaker-icon">${story.speakerIcon}</span><span class="speaker-name">${story.speaker}</span></div>`;
    }
    
    storyArea.innerHTML = speakerHtml + '<div class="story-content"></div>';
    const contentArea = storyArea.querySelector('.story-content');
    
    this.typeWriter(story.text, contentArea, 0, () => {
      this.renderChoices(story.choices);
    });
  }

  typeWriter(text, element, index, callback) {
    if (index < text.length) {
      element.innerHTML += text.charAt(index);
      setTimeout(() => this.typeWriter(text, element, index + 1, callback), 30);
    } else if (callback) {
      callback();
    }
  }

  renderChoices(choices) {
    const container = document.getElementById('choices-area');
    
    container.innerHTML = choices.map((choice, index) => {
      const effectsHtml = Object.entries(choice.effects)
        .map(([key, value]) => {
          const icon = this.getStatIcon(key);
          const sign = value > 0 ? '+' : '';
          const className = value > 0 ? 'positive' : 'negative';
          return `<span class="${className}">${icon}${sign}${value}</span>`;
        })
        .join(' ');
      
      return `
        <button class="choice-btn slide-in" data-choice="${index}">
          <div class="choice-text">${choice.text}</div>
          <div class="choice-effect">${effectsHtml}</div>
        </button>
      `;
    }).join('');

    container.querySelectorAll('.choice-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const choiceIndex = parseInt(btn.dataset.choice);
        this.handleChoice(choiceIndex);
      });
    });
  }

  getStatIcon(stat) {
    const icons = {
      wealth: '💰',
      knowledge: '📚',
      happiness: '😊',
      health: '❤️'
    };
    return icons[stat] || '';
  }

  handleChoice(choiceIndex) {
    const result = this.engine.makeChoice(choiceIndex);
    
    if (!result) {
      console.error('No result from choice');
      return;
    }

    if (result.type === 'early_ending' || result.type === 'ending') {
      this.showEnding(result.ending);
    } else if (result.type === 'next_stage') {
      this.updateGameUI();
      setTimeout(() => {
        this.renderStory();
      }, 300);
    } else {
      this.updateGameUI();
      setTimeout(() => {
        this.renderStory();
      }, 300);
    }
  }

  showEnding(ending) {
    this.showPage('ending');
    
    const stats = this.engine.getGameStats();
    
    document.getElementById('ending-icon').textContent = ending.icon;
    document.getElementById('ending-name').textContent = ending.name;
    document.getElementById('ending-desc').textContent = ending.desc;
    
    document.getElementById('final-wealth').textContent = stats.wealth;
    document.getElementById('final-knowledge').textContent = stats.knowledge;
    document.getElementById('final-happiness').textContent = stats.happiness;
    document.getElementById('final-health').textContent = stats.health;
    
    document.getElementById('ending-message').innerHTML = `<p>${ending.message}</p>`;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new GameApp();
});
