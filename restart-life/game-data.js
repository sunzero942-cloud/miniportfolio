const GAME_DATA = {
  
  families: [
    {
      id: 'working',
      name: '工薪家庭',
      icon: '👨‍👩‍👧',
      desc: '爸妈都是社畜，996是福报，007是常态。房贷车贷压得喘不过气，但至少一家人整整齐齐。',
      baseStats: { wealth: 30, knowledge: 40, happiness: 60, health: 50 }
    },
    {
      id: 'scholar',
      name: '书香门第',
      icon: '📚',
      desc: '爸妈都是大学教授，家里书比钱多。从小就被迫卷，不卷不行。别人家的孩子，说的就是你。',
      baseStats: { wealth: 50, knowledge: 70, happiness: 50, health: 50 }
    },
    {
      id: 'wealthy',
      name: '富豪之家',
      icon: '💎',
      desc: '投胎是门技术活，而你技术满分。含着金汤匙出生，但爸妈比你还忙。家里保姆比亲人还亲，这就是有钱人的烦恼。',
      baseStats: { wealth: 80, knowledge: 50, happiness: 40, health: 50 }
    },
    {
      id: 'single',
      name: '单亲家庭',
      icon: '💪',
      desc: '跟单亲家长相依为命，穷是穷了点，但爱是真的。一个人当两个人用，这就是爱的力量。',
      baseStats: { wealth: 25, knowledge: 35, happiness: 45, health: 55 }
    },
    {
      id: 'rural',
      name: '农村家庭',
      icon: '🌾',
      desc: '山沟沟里长大的娃，物质是匮乏，但身体倍儿棒，心态超稳。穷且益坚，不坠青云之志。',
      baseStats: { wealth: 15, knowledge: 25, happiness: 55, health: 65 }
    },
    {
      id: 'orphan',
      name: '孤儿',
      icon: '🕊️',
      desc: '开局地狱模式，没有爸妈，但你有你自己。逆风翻盘，才是真王者。系统：检测到玩家选择困难模式，奖励隐藏buff！',
      baseStats: { wealth: 10, knowledge: 30, happiness: 30, health: 45 }
    }
  ],

  talents: [
    { id: 'genius', name: '天才少年', icon: '🧠', desc: '智商碾压，学啥都快，考试从不复习还能拿第一，同学都想打你', condition: { family: 'scholar', intelligence: 35 }, effects: { knowledgeBonus: 1.2 } },
    { id: 'athlete', name: '运动健将', icon: '🏃', desc: '身体是革命的本钱，你是革命的本金', condition: { physique: 35 }, effects: { healthBonus: 1.2 } },
    { id: 'socialite', name: '社交达人', icon: '✨', desc: '人缘好到离谱，社恐的天敌，社牛的偶像', condition: { charm: 35 }, effects: { happinessBonus: 1.1 } },
    { id: 'lucky_star', name: '天选之子', icon: '⭐', desc: '欧皇附体，想啥来啥，抽卡必出金，买彩票必中奖（大概）', condition: { luck: 35 }, effects: { luckBonus: 1.3 } },
    { id: 'self_made', name: '白手起家', icon: '🔥', desc: '穷，但志不穷。穷且益坚，不坠青云之志', condition: { family: 'working', intelligence: 25, physique: 25 }, effects: { wealthBonus: 1.2 } },
    { id: 'silver_spoon', name: '含着金汤匙', icon: '👑', desc: '投胎是门技术活，而你技术满分', condition: { family: 'wealthy' }, effects: { wealthBonus: 1.1, happinessBonus: 0.9 } },
    { id: 'resilient', name: '打不死的小强', icon: '🌱', desc: '越挫越勇，永不服输，生命值-1，意志力+999', condition: { family: 'single', physique: 25 }, effects: { healthBonus: 1.1, happinessBonus: 1.1 } },
    { id: 'balanced', name: '六边形战士', icon: '⚖️', desc: '没有短板，也没有长板，主打一个稳', condition: { intelligence: 20, physique: 20, charm: 20, luck: 20 }, effects: { allBonus: 1.05 } },
    { id: 'prodigy', name: '神童', icon: '🌟', desc: '老天爷赏饭吃，不卷也能赢', condition: { intelligence: 38 }, effects: { knowledgeBonus: 1.3, happinessBonus: 0.9 } },
    { id: 'underdog', name: '逆袭之王', icon: '💪', desc: '开局一条狗，结局当大佬，爽文男主剧本', condition: { family: 'single', luck: 20 }, effects: { luckBonus: 1.2, wealthBonus: 1.15 } },
    { id: 'country_star', name: '乡村少年', icon: '🌻', desc: '吃苦耐劳，身体倍儿棒，城里人看了都说好', condition: { family: 'rural', physique: 20 }, effects: { healthBonus: 1.25, wealthBonus: 1.1 } },
    { id: 'self_reliant', name: '独立自强', icon: '🔥', desc: '靠山山倒，靠自己最好，人生没有捷径，但你有双腿', condition: { family: 'orphan' }, effects: { allBonus: 1.08, luckBonus: 1.15 } },
    { id: 'farm_work', name: '农活好手', icon: '🚜', desc: '从小干农活，一身腱子肉，健身房看了都流泪', condition: { family: 'rural', physique: 25 }, effects: { healthBonus: 1.3 } },
    { id: 'street_smart', name: '街头智慧', icon: '🧩', desc: '社会大学优秀毕业生，人情世故满分', condition: { family: 'orphan', intelligence: 20 }, effects: { luckBonus: 1.25, knowledgeBonus: 1.1 } }
  ],

  stages: [
    {
      id: 'childhood',
      name: '童年',
      icon: '👶',
      age: '6岁',
      getStories: function(family) {
        const stories = [];
        
        if (family === 'orphan') {
          stories.push({
            speaker: '福利院阿姨',
            speakerIcon: '👩',
            text: '"孩子们，今天有人来领养了~" 阿姨的话让你心里咯噔一下。你看着其他小朋友一个个被领走，最后...又剩你一个。系统提示：您触发了隐藏成就【孤独患者】，获得buff【独立+10%】',
            choices: [
              { text: '鼓起勇气问："阿姨，我是不是哪里不好？"（卑微）', effects: { happiness: -5, knowledge: 5 } },
              { text: '无所谓，回房间玩积木去了（佛系）', effects: { happiness: -3, health: 3 } },
              { text: '暗暗发誓：靠别人不如靠自己！我要逆风翻盘！（热血）', effects: { happiness: 5, knowledge: 3 } }
            ]
          });
          
          stories.push({
            speaker: '院霸',
            speakerIcon: '😈',
            text: '福利院有个大孩子，专挑软柿子捏。今天他把你午饭抢了，还狞笑着说："想吃？跪下来叫爸爸！" 系统提示：检测到敌对NPC，请选择应对策略。',
            choices: [
              { text: '忍了，饿一顿又不会死（怂了）', effects: { happiness: -10, health: -5 } },
              { text: '跟他拼了！大不了挨顿打！（硬刚）', effects: { health: -8, happiness: 8 } },
              { text: '机智应对："阿姨在后面看着你呢~"（智取）', effects: { happiness: 5, knowledge: 5 } }
            ]
          });
        } else if (family === 'rural') {
          stories.push({
            speaker: '老爸',
            speakerIcon: '👨‍🌾',
            text: '"娃儿！天还没亮，下地干活了！" 老爸的大嗓门把你从梦中惊醒。你看了看窗外——漆黑一片。系统提示：您已进入【农活副本】，难度：普通。',
            choices: [
              { text: '立刻起床，跟着老爸下地（勤劳）', effects: { health: 8, happiness: -3, knowledge: -2 } },
              { text: '装肚子疼，今天想偷个懒（摸鱼）', effects: { happiness: 5, health: -5 } },
              { text: '边干活边背书，卷起来！（卷王）', effects: { health: 5, knowledge: 5 } }
            ]
          });
          
          stories.push({
            speaker: '村长',
            speakerIcon: '👴',
            text: '"这娃脑子灵光，该送去镇上读书！" 村长对老爸说。老爸沉默了——家里那点钱，连学费的零头都不够。系统提示：检测到关键抉择点，您的选择将影响后续剧情走向。',
            choices: [
              { text: '"我不读了，帮家里干活！"（牺牲）', effects: { happiness: -5, health: 5 } },
              { text: '偷偷攒钱，自己交学费（自立）', effects: { knowledge: 5, happiness: 3 } },
              { text: '"村长爷爷，能不能帮帮我？"（求助）', effects: { knowledge: 8, happiness: 5 } }
            ]
          });
        } else if (family === 'wealthy') {
          stories.push({
            speaker: '保姆阿姨',
            speakerIcon: '👩‍🍳',
            text: '"小少爷/小姐，爸爸妈妈又出差了..." 保姆阿姨叹了口气。你环顾这个几百平的大房子——只有你和一堆玩具。系统提示：您触发了隐藏成就【有钱人的烦恼】，获得debuff【孤独+5%】',
            choices: [
              { text: '发脾气摔东西，让爸妈注意到我！（叛逆）', effects: { happiness: -8, wealth: -5 } },
              { text: '习惯了，默默玩玩具（佛系）', effects: { happiness: -3, knowledge: 3 } },
              { text: '给爸妈打电话："你们什么时候回来？"（温情）', effects: { happiness: 5, knowledge: 2 } }
            ]
          });
          
          stories.push({
            speaker: '管家',
            speakerIcon: '🤵',
            text: '"恭喜！您被天才儿童培训班录取了！" 管家递来一张金灿灿的通知书。据说这个班的学费，够普通人活一辈子。系统提示：检测到氪金玩家专属福利。',
            choices: [
              { text: '太棒了！我要去！（氪金）', effects: { knowledge: 10, happiness: 5 } },
              { text: '"去了是不是更见不到爸妈了？"（清醒）', effects: { happiness: -5, knowledge: 5 } },
              { text: '无所谓，反正都是别人安排的（躺平）', effects: { happiness: -3 } }
            ]
          });
        } else if (family === 'single') {
          stories.push({
            speaker: '妈妈',
            speakerIcon: '👩',
            text: '"宝贝，妈妈今天要加班，你自己乖乖吃饭哦。" 妈妈匆匆出门了。你知道，她一个人打三份工，就为了让你过得好一点。系统提示：检测到【单亲buff】，您的坚韧值+10。',
            choices: [
              { text: '自己做饭，等妈妈回来（懂事）', effects: { happiness: 5, knowledge: 3 } },
              { text: '偷偷帮妈妈洗衣服、打扫卫生（贴心）', effects: { happiness: 8, health: 3 } },
              { text: '看着电视发呆，等妈妈（普通）', effects: { happiness: 0 } }
            ]
          });
          
          stories.push({
            speaker: '同学',
            speakerIcon: '👦',
            text: '"你爸爸呢？为什么只有你妈妈来接你？" 同学好奇地问。你不知道该怎么回答...系统提示：检测到敏感话题，请谨慎选择。',
            choices: [
              { text: '"我爸爸去很远的地方工作了"（善意的谎言）', effects: { happiness: -3 } },
              { text: '"关你什么事！"（硬刚）', effects: { happiness: -5, knowledge: -2 } },
              { text: '沉默，假装没听到（逃避）', effects: { happiness: -5 } }
            ]
          });
        } else {
          stories.push({
            speaker: '妈妈',
            speakerIcon: '👩',
            text: '"宝贝，今天想做什么呢？" 妈妈温柔地问。阳光透过窗户洒进来，是个美好的早晨——至少现在是。系统提示：您已进入【普通家庭剧本】，难度：简单。',
            choices: [
              { text: '让妈妈教我认字读书（好学）', effects: { knowledge: 8, happiness: 3 } },
              { text: '想和小朋友一起玩！（活泼）', effects: { happiness: 8, health: 3 } },
              { text: '帮妈妈做家务（懂事）', effects: { happiness: 5, knowledge: 2 } }
            ]
          });
          
          stories.push({
            speaker: '老师',
            speakerIcon: '👩‍🏫',
            text: '"小朋友，你画的画真棒！" 幼儿园老师举起你的画，全班同学都看过来。系统提示：检测到【艺术天赋】，您的创造力+5。',
            choices: [
              { text: '一幅美丽的风景画（文艺）', effects: { knowledge: 5, happiness: 5 } },
              { text: '一家人在一起的温馨画面（温馨）', effects: { happiness: 10 } },
              { text: '自己成为超级英雄的画面（中二）', effects: { happiness: 8, knowledge: 2 } }
            ]
          });
        }
        
        return stories;
      }
    },
    {
      id: 'teenager',
      name: '少年',
      icon: '👦',
      age: '14岁',
      getStories: function(family) {
        const stories = [];
        
        if (family === 'orphan') {
          stories.push({
            speaker: '班主任',
            speakerIcon: '👨‍🏫',
            text: '"你成绩很好，但是...高中学费..." 老师欲言又止。福利院只资助到初中毕业，高中怎么办？系统警告：检测到【经济危机】，您的学业可能中断！',
            choices: [
              { text: '"老师，我会想办法的！"（坚定）', effects: { happiness: 5, knowledge: 5 } },
              { text: '沉默，心里已经打算辍学打工（放弃）', effects: { happiness: -10, wealth: 5 } },
              { text: '"有没有奖学金或助学金？"（机智）', effects: { knowledge: 8, happiness: 3 } }
            ]
          });
        } else if (family === 'rural') {
          stories.push({
            speaker: '老爸',
            speakerIcon: '👨‍🌾',
            text: '"娃，隔壁二狗去城里打工了，一个月三千！" 老爸眼里闪着光。三千块，够家里半年的开销了。系统提示：检测到【人生岔路口】，您的选择将决定命运走向！',
            choices: [
              { text: '坚定地说："我要考高中！"（坚持）', effects: { knowledge: 8, happiness: -3 } },
              { text: '犹豫了，打工确实能帮家里...（动摇）', effects: { wealth: 5, knowledge: -5 } },
              { text: '"能不能边打工边读书？"（折中）', effects: { knowledge: 3, wealth: 3, health: -3 } }
            ]
          });
        } else if (family === 'wealthy') {
          stories.push({
            speaker: '同学',
            speakerIcon: '👧',
            text: '"听说你爸公司要上市了？太牛了吧！" 同学们围着你，眼里满是羡慕。但你心里清楚——你已经三个月没见过爸爸了。系统提示：您触发了【有钱人的烦恼】，金钱≠幸福。',
            choices: [
              { text: '骄傲地说："那当然！"（装逼）', effects: { happiness: -5, wealth: 5 } },
              { text: '苦笑："有钱有什么用，他根本不回家"（清醒）', effects: { happiness: 3, wealth: -3 } },
              { text: '转移话题，不想聊这个（回避）', effects: { happiness: 0 } }
            ]
          });
        } else if (family === 'single') {
          stories.push({
            speaker: '妈妈',
            speakerIcon: '👩',
            text: '"妈最近身体不太好..." 妈妈咳嗽着说。你知道她一个人打三份工，早就透支了。系统警告：检测到【家庭危机】，请尽快做出应对！',
            choices: [
              { text: '"妈，我来打工帮你！"（牺牲）', effects: { wealth: 5, knowledge: -5, health: -3 } },
              { text: '偷偷在网上查怎么赚钱（机智）', effects: { knowledge: 5, wealth: 3 } },
              { text: '更加努力学习，以后报答妈妈（长远）', effects: { knowledge: 10, happiness: -3 } }
            ]
          });
        } else {
          stories.push({
            speaker: '死党',
            speakerIcon: '👦',
            text: '"兄弟，听说隔壁班的小美/小帅对你有意思！" 死党神秘兮兮地凑过来。青春期的心跳突然加速了。系统提示：检测到【青春悸动】，您的荷尔蒙正在飙升！',
            choices: [
              { text: '害羞地说："真的假的？"（纯情）', effects: { happiness: 8 } },
              { text: '装酷："没兴趣，学习要紧"（高冷）', effects: { knowledge: 5, happiness: -3 } },
              { text: '鼓起勇气去表白！（勇敢）', effects: { happiness: 10, knowledge: -3 } }
            ]
          });
        }
        
        stories.push({
          speaker: '命运',
          speakerIcon: '⚡',
          text: '中考成绩出来了！你紧张地查分，手心全是汗...这一刻，仿佛整个世界都静止了。系统提示：命运骰子正在投掷中...',
          choices: [
            { text: '考得很好！重点高中稳了！（欧皇附体）', effects: { knowledge: 15, happiness: 10 } },
            { text: '一般般，普通高中吧（正常发挥）', effects: { knowledge: 5, happiness: 3 } },
            { text: '没考好...要复读或职高了（非酋降临）', effects: { happiness: -10, knowledge: -5 } }
          ]
        });
        
        return stories;
      }
    },
    {
      id: 'youth',
      name: '青年',
      icon: '🧑',
      age: '22岁',
      getStories: function(family) {
        const stories = [];
        
        if (family === 'orphan') {
          stories.push({
            speaker: '福利院院长',
            speakerIcon: '👴',
            text: '"孩子，你大学毕业了，以后...就要靠自己了。" 院长的眼眶有些湿润。二十多年了，这里是你唯一的"家"。系统提示：您已完成【孤儿剧本】第一阶段，即将进入【社会生存模式】。',
            choices: [
              { text: '跪下来给院长磕头："谢谢您这些年的照顾！"（感恩）', effects: { happiness: 10 } },
              { text: '笑着说："我会常回来看看的"（温情）', effects: { happiness: 5, knowledge: 3 } },
              { text: '默默转身离开，不想让他们看到眼泪（坚强）', effects: { happiness: -5, health: 3 } }
            ]
          });
        } else if (family === 'rural') {
          stories.push({
            speaker: '村支书',
            speakerIcon: '👨‍💼',
            text: '"大学生回来了！咱们村终于出大学生了！" 全村人都来迎接你。老爸站在人群后面，偷偷抹眼泪。系统提示：您触发了隐藏成就【村里之光】，全村好感度+100！',
            choices: [
              { text: '大声说："我要让咱们村富起来！"（豪言壮语）', effects: { happiness: 15, knowledge: 5 } },
              { text: '低调地说："还是多亏了大家的帮助"（谦虚）', effects: { happiness: 10, knowledge: 3 } },
              { text: '心里想：我要去大城市，不回来了（现实）', effects: { happiness: -5, wealth: 5 } }
            ]
          });
        } else if (family === 'wealthy') {
          stories.push({
            speaker: '老爸',
            speakerIcon: '👨‍💼',
            text: '"公司给你安排好位置了，直接当副总。" 老爸的语气不容置疑。你学的是艺术，但老爸从不在意。系统提示：检测到【富二代困境】，您的自由意志正在受到挑战！',
            choices: [
              { text: '接受安排，毕竟是家族企业（顺从）', effects: { wealth: 20, happiness: -10 } },
              { text: '拒绝："我想做自己喜欢的事！"（反抗）', effects: { happiness: 10, wealth: -10 } },
              { text: '表面答应，暗地准备创业（腹黑）', effects: { knowledge: 5, wealth: 5 } }
            ]
          });
        } else {
          stories.push({
            speaker: 'HR',
            speakerIcon: '👩‍💼',
            text: '"恭喜你通过面试！但是..." HR犹豫了一下，"这个岗位竞争很激烈，你确定能承受压力吗？" 系统提示：欢迎来到【职场副本】，难度：困难。警告：996福报正在逼近！',
            choices: [
              { text: '自信地说："没问题，我能行！"（自信）', effects: { wealth: 10, happiness: 5 } },
              { text: '犹豫："我...我试试看"（忐忑）', effects: { wealth: 5, happiness: -3 } },
              { text: '"能具体说说是什么压力吗？"（谨慎）', effects: { knowledge: 5, wealth: 3 } }
            ]
          });
        }
        
        stories.push({
          speaker: '前任',
          speakerIcon: '💔',
          text: '"我们...分手吧。" 这句话像晴天霹雳。你们在一起三年了，为什么？系统警告：检测到【情感暴击】，您的san值正在下降！爱情这东西，果然是玄学。',
          choices: [
            { text: '崩溃大哭，求对方不要走（卑微）', effects: { happiness: -15, health: -5 } },
            { text: '强忍泪水说："好，祝你幸福"（体面）', effects: { happiness: -10, knowledge: 5 } },
            { text: '冷静问清楚原因（理性）', effects: { happiness: -5, knowledge: 8 } }
          ]
        });
        
        return stories;
      }
    },
    {
      id: 'middle',
      name: '中年',
      icon: '👨',
      age: '40岁',
      getStories: function(family) {
        const stories = [];
        
        stories.push({
          speaker: '医生',
          speakerIcon: '👨‍⚕️',
          text: '"您的体检报告出来了..." 医生推了推眼镜，"有些指标不太乐观，建议您..." 系统警告：检测到【健康危机】，您的身体正在发出求救信号！中年人的身体，开始报警了。',
          choices: [
            { text: '紧张地问："严重吗？"（慌张）', effects: { happiness: -10, health: -5 } },
            { text: '淡定地说："没事，我身体好着呢"（否认）', effects: { happiness: 3, health: -8 } },
            { text: '认真听取建议，决定改变生活方式（行动）', effects: { health: 10, happiness: 5 } }
          ]
        });
        
        if (family === 'orphan' || family === 'rural') {
          stories.push({
            speaker: '老朋友',
            speakerIcon: '👨',
            text: '"还记得咱们当年吗？你现在可是大人物了！" 老朋友感慨道。回首往事，恍如隔世。系统提示：您触发了隐藏成就【逆袭人生】，从底层爬上来的人，最懂得珍惜。',
            choices: [
              { text: '感慨："都是命啊..."（认命）', effects: { happiness: 5 } },
              { text: '谦虚："运气好而已"（低调）', effects: { happiness: 8, knowledge: 3 } },
              { text: '"我付出了多少，只有自己知道"（真实）', effects: { knowledge: 5, happiness: 3 } }
            ]
          });
        } else if (family === 'wealthy') {
          stories.push({
            speaker: '律师',
            speakerIcon: '👨‍⚖️',
            text: '"您父亲的公司...出现了一些问题。" 律师递来一叠文件，"可能面临巨额赔偿。" 系统警告：检测到【家族危机】，您的财富值可能大幅下降！富二代的生活，原来这么脆弱。',
            choices: [
              { text: '震惊："怎么会这样？！"（慌乱）', effects: { happiness: -15, wealth: -20 } },
              { text: '冷静分析："让我看看具体情况"（理智）', effects: { knowledge: 10, wealth: -10 } },
              { text: '"不管怎样，我来扛"（担当）', effects: { happiness: -5, wealth: -15 } }
            ]
          });
        } else {
          stories.push({
            speaker: '孩子',
            speakerIcon: '👧',
            text: '"爸爸/妈妈，你能不能不要总是加班？" 孩子的话让你心头一紧。你想起自己的童年...系统提示：检测到【代际循环】，历史总是惊人的相似。',
            choices: [
              { text: '愧疚地说："对不起，以后我多陪你"（改变）', effects: { happiness: 10, wealth: -5 } },
              { text: '无奈地说："爸爸/妈妈也是为了这个家"（解释）', effects: { happiness: -5, wealth: 5 } },
              { text: '沉默，不知道该怎么回答（逃避）', effects: { happiness: -8 } }
            ]
          });
        }
        
        return stories;
      }
    },
    {
      id: 'elderly',
      name: '晚年',
      icon: '👴',
      age: '65岁',
      getStories: function(family) {
        const stories = [];
        
        stories.push({
          speaker: '时光',
          speakerIcon: '⏳',
          text: '退休那天，你站在镜子前，看着满头白发的自己。这一生，值得吗？系统提示：您的人生即将进入【结算阶段】，请回顾您的精彩旅程。人生如戏，戏如人生。',
          choices: [
            { text: '值得，我无怨无悔（圆满）', effects: { happiness: 15 } },
            { text: '有遗憾，但这就是人生（释然）', effects: { happiness: 5, knowledge: 5 } },
            { text: '如果能重来...（不甘）', effects: { happiness: -10, knowledge: 10 } }
          ]
        });
        
        stories.push({
          speaker: '命运',
          speakerIcon: '🌟',
          text: '回首这一生，你觉得最珍贵的是什么？系统提示：最终抉择即将到来，您的选择将决定结局走向。人生的意义，到底是什么？',
          choices: [
            { text: '事业上的成就（功名）', effects: { wealth: 10, happiness: 5 } },
            { text: '家人的陪伴（亲情）', effects: { happiness: 15, health: 5 } },
            { text: '内心的平静（淡然）', effects: { happiness: 10, health: 10 } },
            { text: '那些跌宕起伏的经历（故事）', effects: { knowledge: 10, happiness: 5 } }
          ]
        });
        
        return stories;
      }
    }
  ],

  endings: [
    { id: 'ordinary', name: '平凡一生', icon: '🌸', desc: '你度过了平凡而安稳的一生。没有大起大落，也没有惊天动地。但平凡，也是一种幸福。系统评价：您的人生已完成【普通结局】，感谢游玩！', condition: { type: 'default' }, message: '平凡也是一种幸福，每个人的人生都有独特的价值。' },
    { id: 'scholar', name: '学术泰斗', icon: '🎓', desc: '你一生致力于学术研究，成为了某个领域的权威专家。虽然物质生活不算富裕，但精神世界无比充实。系统评价：恭喜达成【知识改变命运】成就！', condition: { type: 'stat', stat: 'knowledge', min: 85 }, message: '知识的力量是无穷的，你用智慧点亮了自己的人生。' },
    { id: 'tycoon', name: '商界巨子', icon: '💰', desc: '你白手起家，凭借敏锐的商业嗅觉和不懈努力，建立了自己的商业帝国。从底层逆袭到顶层，你的人生就是一部励志大片。系统评价：恭喜达成【财富自由】成就！', condition: { type: 'stat', stat: 'wealth', min: 90 }, message: '财富不是人生的全部，但你证明了努力可以改变命运。' },
    { id: 'happy', name: '幸福达人', icon: '😊', desc: '你一生都在追求快乐，也成功找到了属于自己的幸福。无论境遇如何，你总能保持乐观积极的心态。系统评价：恭喜达成【人生赢家】成就！这才是人生的终极奥义。', condition: { type: 'stat', stat: 'happiness', min: 90 }, message: '快乐是一种能力，你已经掌握了人生的真谛。' },
    { id: 'healthy', name: '长寿之星', icon: '🏃', desc: '你注重健康，坚持锻炼，晚年依然精神矍铄。你成为了大家眼中的健康榜样，活成了别人羡慕的样子。系统评价：恭喜达成【养生达人】成就！', condition: { type: 'stat', stat: 'health', min: 90 }, message: '健康是最大的财富，你用行动诠释了这个道理。' },
    { id: 'early_death', name: '英年早逝', icon: '🕯️', desc: '由于长期忽视健康，你在中年时便离开了这个世界。虽然人生短暂，但你留下了深刻的印记。系统评价：触发【BE结局】，人生没有重来，请珍惜当下。', condition: { type: 'stat', stat: 'health', max: 15 }, message: '生命是脆弱的，愿你在另一个世界找到安宁。如遇心理困扰，请寻求专业帮助。', isEarly: true, triggerStage: 'middle' },
    { id: 'depression', name: '郁郁寡欢', icon: '🌧️', desc: '长期的压抑和不快乐让你陷入了困境。虽然人生不尽如人意，但每个故事都值得被倾听。系统评价：触发【BE结局】，黑暗中也有光，请相信希望。', condition: { type: 'stat', stat: 'happiness', max: 15 }, message: '人生总有低谷，但这不代表失败。如遇心理困扰，请拨打心理援助热线：400-161-9995', isEarly: true, triggerStage: 'youth' },
    { id: 'bankrupt', name: '穷困潦倒', icon: '💔', desc: '命运多舛，你经历了人生的低谷。虽然物质匮乏，但你依然保持着尊严。系统评价：触发【困难结局】，人生的价值，不由财富定义。', condition: { type: 'stat', stat: 'wealth', max: 10 }, message: '人生的价值不由财富定义，每个认真生活的人都值得尊重。' },
    { id: 'balanced', name: '圆满人生', icon: '⭐', desc: '你的人生各方面都很均衡，没有明显的短板。这种平衡本身就是一种难得的成就。系统评价：恭喜达成【六边形战士】成就！不偏科的人生，才是真正的人生赢家。', condition: { type: 'balanced', min: 60 }, message: '平衡是一种智慧，你找到了人生的最佳状态。' },
    { id: 'legend', name: '传奇人生', icon: '🏆', desc: '你的人生堪称传奇！在多个领域都取得了非凡成就，成为了后人传颂的对象。系统评价：恭喜达成【隐藏结局·传奇】！你活成了别人想都不敢想的样子。', condition: { type: 'multi', stats: ['wealth', 'knowledge', 'happiness', 'health'], min: 75, count: 3 }, message: '你已经超越了大多数人，但你一定知道，真正的传奇在于活出自己。' }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = GAME_DATA;
}
