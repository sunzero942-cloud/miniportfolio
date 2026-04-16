// PHILOS哲学人格测试 - 计分算法

const scoring = {
    // 人格类型库 - 16种哲学人格
    personalityTypes: {
        "URGO": {
            code: "URGO",
            name: "山脉型",
            academicName: "本质理性的目的整体主义者",
            symbol: "⛰️",
            icon: "mountain.svg",
            color: "#F97316",
            description: "本质主义+理性+目的论+整体观",
            philosophers: [
                {name: "柏拉图", era: "古希腊", thought: "理念论 - 相信永恒不变的理念世界"},
                {name: "亚里士多德", era: "古希腊", thought: "实体论 - 重视本质和目的因"},
                {name: "笛卡尔", era: "近代哲学", thought: "理性主义 - 通过逻辑推理认识世界"}
            ],
            analysis: {
                traits: ["稳定", "理性", "目标导向", "重视整体"],
                strengths: ["善于规划", "坚持原则", "重视秩序", "具有全局观"],
                weaknesses: ["可能固执", "缺乏灵活", "对变化适应慢", "可能忽视个体"],
                careers: ["科学家", "工程师", "律师", "教师", "管理者"]
            }
        },
        "URDO": {
            code: "URDO",
            name: "神庙型",
            academicName: "本质理性的义务整体主义者",
            symbol: "🛕",
            icon: "temple.svg",
            color: "#6B7280",
            description: "本质主义+理性+义务论+整体观",
            philosophers: [
                {name: "康德", era: "近代哲学", thought: "义务论 - 强调道德法则的普遍性"},
                {name: "苏格拉底", era: "古希腊", thought: "德性即知识 - 重视道德自我省察"},
                {name: "孔子", era: "中国古代", thought: "仁 - 强调道德责任和义务"}
            ],
            analysis: {
                traits: ["原则性强", "理性严谨", "重视责任", "集体意识强"],
                strengths: ["道德观念强烈", "坚持原则", "重视传统", "具有责任感"],
                weaknesses: ["可能教条", "缺乏灵活", "对新观念保守", "可能忽视实际效果"],
                careers: ["法官", "教师", "宗教工作者", "社会工作者", "公务员"]
            }
        },
        "URGM": {
            code: "URGM",
            name: "灯塔型",
            academicName: "本质理性的目的多元主义者",
            symbol: "💡",
            icon: "lighthouse.svg",
            color: "#F97316",
            description: "本质主义+理性+目的论+多元观",
            philosophers: [
                {name: "培根", era: "近代哲学", thought: "经验主义 - 强调知识的实用性"},
                {name: "霍布斯", era: "近代哲学", thought: "社会契约论 - 重视个人权利"},
                {name: "洛克", era: "近代哲学", thought: "白板说 - 强调经验的重要性"}
            ],
            analysis: {
                traits: ["理性", "实用", "目标明确", "尊重个体"],
                strengths: ["理性思考", "注重实际效果", "尊重个人权利", "善于创新"],
                weaknesses: ["可能功利", "忽视情感", "对传统重视不够", "可能缺乏集体意识"],
                careers: ["企业家", "科学家", "咨询师", "技术专家", "媒体人"]
            }
        },
        "URDM": {
            code: "URDM",
            name: "法典型",
            academicName: "本质理性的义务多元主义者",
            symbol: "⚖️",
            icon: "scale.svg",
            color: "#6B7280",
            description: "本质主义+理性+义务论+多元观",
            philosophers: [
                {name: "西塞罗", era: "古罗马", thought: "自然法 - 强调法律的理性基础"},
                {name: "洛克", era: "近代哲学", thought: "自然权利 - 强调个人自由"},
                {name: "孟德斯鸠", era: "近代哲学", thought: "三权分立 - 强调权力制衡"}
            ],
            analysis: {
                traits: ["公正", "理性", "重视规则", "尊重个体权利"],
                strengths: ["公正客观", "理性思考", "尊重法律", "保护个人权利"],
                weaknesses: ["可能过于强调规则", "缺乏灵活", "对情感考虑不足", "可能忽视社会整体"],
                careers: ["律师", "法官", "政治家", "人力资源", "社会学家"]
            }
        },
        "UXGO": {
            code: "UXGO",
            name: "河流型",
            academicName: "本质体验的目的整体主义者",
            symbol: "🌊",
            icon: "river.svg",
            color: "#F97316",
            description: "本质主义+体验+目的论+整体观",
            philosophers: [
                {name: "赫拉克利特", era: "古希腊", thought: "流变说 - 万物皆流"},
                {name: "尼采", era: "现代哲学", thought: "权力意志 - 强调生命的活力"},
                {name: "柏格森", era: "现代哲学", thought: "生命哲学 - 强调直觉和绵延"}
            ],
            analysis: {
                traits: ["适应性强", "富有创造力", "注重实际", "善于合作"],
                strengths: ["适应性强", "富有创造力", "注重实际效果", "善于团队合作"],
                weaknesses: ["可能缺乏稳定性", "容易冲动", "对理论重视不够", "可能忽视长远规划"],
                careers: ["艺术家", "设计师", "营销人员", "教师", "社会工作者"]
            }
        },
        "UXDO": {
            code: "UXDO",
            name: "家族徽章型",
            academicName: "本质体验的义务整体主义者",
            symbol: "🏛️",
            icon: "badge.svg",
            color: "#6B7280",
            description: "本质主义+体验+义务论+整体观",
            philosophers: [
                {name: "黑格尔", era: "德国古典哲学", thought: "辩证法 - 强调历史的发展"},
                {name: "维科", era: "近代哲学", thought: "历史哲学 - 强调文化传统"},
                {name: "孔子", era: "中国古代", thought: "礼 - 强调文化传承"}
            ],
            analysis: {
                traits: ["重视传统", "善于理解", "具有责任感", "注重人际关系"],
                strengths: ["重视传统", "善于理解文化差异", "具有社会责任感", "注重人际关系"],
                weaknesses: ["可能保守", "对新观念接受度低", "缺乏创新", "可能忽视个人权利"],
                careers: ["教师", "文化工作者", "社会工作者", "管理者", "咨询师"]
            }
        },
        "UXGM": {
            code: "UXGM",
            name: "花园型",
            academicName: "本质体验的目的多元主义者",
            symbol: "🌷",
            icon: "garden.svg",
            color: "#F97316",
            description: "本质主义+体验+目的论+多元观",
            philosophers: [
                {name: "休谟", era: "近代哲学", thought: "经验主义 - 强调感觉经验"},
                {name: "卢梭", era: "近代哲学", thought: "自然状态 - 强调自然情感"},
                {name: "庄子", era: "中国古代", thought: "自然无为 - 强调顺应自然"}
            ],
            analysis: {
                traits: ["开放包容", "富有创造力", "注重个人体验", "善于适应"],
                strengths: ["开放包容", "富有创造力", "注重个人体验", "善于适应变化"],
                weaknesses: ["可能缺乏稳定性", "容易随波逐流", "对理论重视不够", "可能忽视社会规则"],
                careers: ["艺术家", "设计师", "媒体人", "营销人员", "旅行者"]
            }
        },
        "UXDM": {
            code: "UXDM",
            name: "手工艺型",
            academicName: "本质体验的义务多元主义者",
            symbol: "🛠️",
            icon: "craft.svg",
            color: "#6B7280",
            description: "本质主义+体验+义务论+多元观",
            philosophers: [
                {name: "亚里士多德", era: "古希腊", thought: "实践智慧 - 强调具体情境中的判断"},
                {name: "马克思", era: "现代哲学", thought: "实践唯物主义 - 强调劳动的重要性"},
                {name: "墨子", era: "中国古代", thought: "兼爱 - 强调实际效用"}
            ],
            analysis: {
                traits: ["动手能力强", "注重实际", "富有创造力", "尊重差异"],
                strengths: ["动手能力强", "注重实际效果", "富有创造力", "尊重个人差异"],
                weaknesses: ["可能缺乏理论深度", "对抽象思考不感兴趣", "可能忽视长远规划", "容易满足于现状"],
                careers: ["手工艺人", "设计师", "技术专家", "创业者", "教师"]
            }
        },
        "VRGO": {
            code: "VRGO",
            name: "季风型",
            academicName: "流变理性的目的整体主义者",
            symbol: "🌪️",
            icon: "monsoon.svg",
            color: "#DC2626",
            description: "流变论+理性+目的论+整体观",
            philosophers: [
                {name: "马克思", era: "现代哲学", thought: "历史唯物主义 - 强调社会变革"},
                {name: "黑格尔", era: "德国古典哲学", thought: "辩证法 - 强调历史发展"},
                {name: "卢梭", era: "近代哲学", thought: "社会契约 - 强调民主变革"}
            ],
            analysis: {
                traits: ["富有洞察力", "善于分析", "注重进步", "具有变革精神"],
                strengths: ["富有洞察力", "善于分析问题", "注重社会进步", "具有变革精神"],
                weaknesses: ["可能激进", "对传统重视不够", "容易理想化", "可能忽视个体差异"],
                careers: ["政治家", "社会活动家", "教师", "媒体人", "咨询师"]
            }
        },
        "VRDO": {
            code: "VRDO",
            name: "日晷型",
            academicName: "流变理性的义务整体主义者",
            symbol: "⏳",
            icon: "sundial.svg",
            color: "#374151",
            description: "流变论+理性+义务论+整体观",
            philosophers: [
                {name: "斯宾诺莎", era: "近代哲学", thought: "泛神论 - 强调宇宙的必然法则"},
                {name: "莱布尼茨", era: "近代哲学", thought: "单子论 - 强调宇宙的和谐"},
                {name: "老子", era: "中国古代", thought: "道 - 强调自然法则"}
            ],
            analysis: {
                traits: ["思维深邃", "善于系统思考", "重视秩序", "具有整体观念"],
                strengths: ["思维深邃", "善于系统思考", "重视宇宙秩序", "具有整体观念"],
                weaknesses: ["可能过于抽象", "对实际问题关注不够", "缺乏行动力", "可能忽视个体需求"],
                careers: ["哲学家", "科学家", "宗教工作者", "教师", "研究员"]
            }
        },
        "VRGM": {
            code: "VRGM",
            name: "航海图型",
            academicName: "理性流变的实用多元主义者",
            symbol: "🧭",
            icon: "compass.svg",
            color: "#DC2626",
            description: "流变论+理性+目的论+多元观",
            philosophers: [
                {name: "笛卡儿", era: "近代哲学", thought: "怀疑方法 - 强调理性的探索"},
                {name: "培根", era: "近代哲学", thought: "归纳法 - 强调科学探索"},
                {name: "伽利略", era: "近代科学", thought: "实验方法 - 强调观察和验证"}
            ],
            analysis: {
                traits: ["富有探索精神", "善于解决问题", "注重实际", "尊重自由"],
                strengths: ["富有探索精神", "善于解决问题", "注重实际效果", "尊重个人自由"],
                weaknesses: ["可能过于理性化", "对情感考虑不足", "容易忽视传统", "可能缺乏耐心"],
                careers: ["科学家", "技术专家", "创业者", "咨询师", "探险家"]
            }
        },
        "VRDM": {
            code: "VRDM",
            name: "弈棋型",
            academicName: "流变理性的义务多元主义者",
            symbol: "♟️",
            icon: "chess.svg",
            color: "#374151",
            description: "流变论+理性+义务论+多元观",
            philosophers: [
                {name: "马基雅维利", era: "近代哲学", thought: "君主论 - 强调政治策略"},
                {name: "霍布斯", era: "近代哲学", thought: "利维坦 - 强调权力的逻辑"},
                {name: "尼采", era: "现代哲学", thought: "权力意志 - 强调生命的竞争"}
            ],
            analysis: {
                traits: ["善于策略思考", "逻辑分析能力强", "富有竞争精神", "尊重个人能力"],
                strengths: ["善于策略思考", "逻辑分析能力强", "富有竞争精神", "尊重个人能力"],
                weaknesses: ["可能过于冷酷", "对道德考虑不足", "容易忽视合作", "可能产生过度竞争"],
                careers: ["商人", "律师", "政治家", "运动员", "军事战略家"]
            }
        },
        "VXGO": {
            code: "VXGO",
            name: "潮汐型",
            academicName: "流变体验的目的整体主义者",
            symbol: "🌅",
            icon: "tide.svg",
            color: "#DC2626",
            description: "流变论+体验+目的论+整体观",
            philosophers: [
                {name: "席勒", era: "德国古典哲学", thought: "审美教育 - 强调美感"},
                {name: "叔本华", era: "现代哲学", thought: "意志哲学 - 强调情感体验"},
                {name: "克尔凯郭尔", era: "现代哲学", thought: "存在主义 - 强调个人体验"}
            ],
            analysis: {
                traits: ["富有艺术感", "善于理解情感", "注重美感", "具有同情心"],
                strengths: ["富有艺术感", "善于理解他人情感", "注重美感体验", "具有同情心"],
                weaknesses: ["可能过于情绪化", "对理性思考重视不够", "容易受外界影响", "可能缺乏稳定性"],
                careers: ["艺术家", "文学家", "心理学家", "教师", "社会工作者"]
            }
        },
        "VXDO": {
            code: "VXDO",
            name: "篝火型",
            academicName: "流变体验的义务整体主义者",
            symbol: "🔥",
            icon: "bonfire.svg",
            color: "#374151",
            description: "流变论+体验+义务论+整体观",
            philosophers: [
                {name: "克尔凯郭尔", era: "现代哲学", thought: "信仰跳跃 - 强调个人信仰"},
                {name: "陀思妥耶夫斯基", era: "现代文学", thought: "存在主义 - 强调精神探索"},
                {name: "奥古斯丁", era: "中世纪", thought: "忏悔录 - 强调精神皈依"}
            ],
            analysis: {
                traits: ["富有精神追求", "善于反思", "注重道德修养", "具有奉献精神"],
                strengths: ["富有精神追求", "善于反思自我", "注重道德修养", "具有奉献精神"],
                weaknesses: ["可能过于内向", "对物质世界关注不够", "容易陷入精神困扰", "可能忽视现实问题"],
                careers: ["宗教工作者", "教师", "心理咨询师", "社会工作者", "文学家"]
            }
        },
        "VXGM": {
            code: "VXGM",
            name: "集市型",
            academicName: "流变体验的目的多元主义者",
            symbol: "🛒",
            icon: "market.svg",
            color: "#DC2626",
            description: "流变论+体验+目的论+多元观",
            philosophers: [
                {name: "伊壁鸠鲁", era: "古希腊", thought: "快乐主义 - 强调生活的快乐"},
                {name: "边沁", era: "近代哲学", thought: "功利主义 - 强调最大幸福"},
                {name: "密尔", era: "近代哲学", thought: "功利主义 - 强调质量的快乐"}
            ],
            analysis: {
                traits: ["开放包容", "善于享受生活", "注重实际幸福", "尊重个人选择"],
                strengths: ["开放包容", "善于享受生活", "注重实际幸福", "尊重个人选择"],
                weaknesses: ["可能过于注重享乐", "对精神追求重视不够", "容易缺乏目标", "可能忽视长远规划"],
                careers: ["市场营销", "娱乐业", "旅游业", "餐饮业", "媒体人"]
            }
        },
        "VXDM": {
            code: "VXDM",
            name: "万花筒型",
            academicName: "流变体验的义务多元主义者",
            symbol: "🔮",
            icon: "kaleidoscope.svg",
            color: "#374151",
            description: "流变论+体验+义务论+多元观",
            philosophers: [
                {name: "德勒兹", era: "当代哲学", thought: "差异哲学 - 强调多样性"},
                {name: "德里达", era: "当代哲学", thought: "解构主义 - 强调文本的开放性"},
                {name: "福柯", era: "当代哲学", thought: "知识考古学 - 强调话语的多样性"}
            ],
            analysis: {
                traits: ["开放创新", "善于接受新观念", "注重个体差异", "富有想象力"],
                strengths: ["开放创新", "善于接受新观念", "注重个体差异", "富有想象力"],
                weaknesses: ["可能过于碎片化", "对传统价值缺乏尊重", "容易陷入相对主义", "可能缺乏稳定性"],
                careers: ["艺术家", "设计师", "媒体人", "学者", "创意产业工作者"]
            }
        }
    },

    // 计算得分
    calculateScore: function(answers, questions) {
        const scores = {
            U: 0, V: 0,
            R: 0, X: 0,
            G: 0, D: 0,
            O: 0, M: 0
        };

        // 统计得分
        for (let i = 0; i < questions.length; i++) {
            if (answers[i]) {
                const optionIndex = answers[i] === 'A' ? 0 : 1;
                const value = questions[i].options[optionIndex].value;
                scores[value]++;
            }
        }

        return scores;
    },

    // 生成人格代码
    generatePersonalityCode: function(scores) {
        let code = '';
        code += scores.U > scores.V ? 'U' : 'V';
        code += scores.R > scores.X ? 'R' : 'X';
        code += scores.G > scores.D ? 'G' : 'D';
        code += scores.O > scores.M ? 'O' : 'M';
        return code;
    },

    // 获取人格类型
    getPersonalityType: function(code) {
        return this.personalityTypes[code] || null;
    },

    // 计算维度百分比
    calculatePercentages: function(scores) {
        return {
            reality: {
                type: scores.U > scores.V ? 'U' : 'V',
                percentage: Math.round((Math.max(scores.U, scores.V) / (scores.U + scores.V)) * 100)
            },
            cognition: {
                type: scores.R > scores.X ? 'R' : 'X',
                percentage: Math.round((Math.max(scores.R, scores.X) / (scores.R + scores.X)) * 100)
            },
            ethics: {
                type: scores.G > scores.D ? 'G' : 'D',
                percentage: Math.round((Math.max(scores.G, scores.D) / (scores.G + scores.D)) * 100)
            },
            society: {
                type: scores.O > scores.M ? 'O' : 'M',
                percentage: Math.round((Math.max(scores.O, scores.M) / (scores.O + scores.M)) * 100)
            }
        };
    },

    // 完整的测试评估
    evaluateTest: function(answers, questions, version) {
        // 计算得分
        const scores = this.calculateScore(answers, questions);
        
        // 生成人格代码
        const code = this.generatePersonalityCode(scores);
        
        // 获取人格类型
        const personalityType = this.getPersonalityType(code);
        
        // 计算百分比
        const percentages = this.calculatePercentages(scores);
        
        return {
            code: code,
            scores: scores,
            percentages: percentages,
            personality: personalityType,
            version: version,
            timestamp: new Date().toISOString()
        };
    }
};