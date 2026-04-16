// PHILOS哲学人格测试 - 题目数据库

const questions = {
    "simple": [
        // 简易版测试 - 25题
        {
            id: 1,
            category: "reality",
            question: "当你遇到一个新的社会现象时，你更倾向于认为？",
            options: [
                {text: "它背后有固定的规律和本质", value: "U"},
                {text: "它是不断变化的，需要具体分析", value: "V"}
            ]
        },
        {
            id: 2,
            category: "cognition",
            question: "在规划一次旅行时，你通常会？",
            options: [
                {text: "详细研究攻略，制定周密计划", value: "R"},
                {text: "大致了解后，随心情探索", value: "X"}
            ]
        },
        {
            id: 3,
            category: "ethics",
            question: "当朋友向你借钱但可能无法按时归还时，你会？",
            options: [
                {text: "考虑他的困难和还钱能力，决定是否借", value: "G"},
                {text: "基于友谊的责任，尽量帮助他", value: "D"}
            ]
        },
        {
            id: 4,
            category: "society",
            question: "在团队合作中，你更重视？",
            options: [
                {text: "团队的整体目标和和谐", value: "O"},
                {text: "个人的独特贡献和自由发挥", value: "M"}
            ]
        },
        {
            id: 5,
            category: "reality",
            question: "当你学习一门新技术时，你认为？",
            options: [
                {text: "掌握其基本原理比具体操作更重要", value: "U"},
                {text: "通过实际操作和经验积累更有效", value: "V"}
            ]
        },
        {
            id: 6,
            category: "cognition",
            question: "在选择职业时，你更看重？",
            options: [
                {text: "理性分析行业前景和自身优势", value: "R"},
                {text: "个人兴趣和工作中的感受", value: "X"}
            ]
        },
        {
            id: 7,
            category: "ethics",
            question: "当你看到有人插队时，你会？",
            options: [
                {text: "视情况而定，可能选择容忍或提醒", value: "G"},
                {text: "认为这是不道德的，应该指出", value: "D"}
            ]
        },
        {
            id: 8,
            category: "society",
            question: "你认为学校教育应该更注重？",
            options: [
                {text: "统一的知识体系和纪律", value: "O"},
                {text: "学生的个性发展和创造力", value: "M"}
            ]
        },
        {
            id: 9,
            category: "reality",
            question: "当你与他人产生分歧时，你会？",
            options: [
                {text: "寻找客观事实和逻辑来解决", value: "U"},
                {text: "理解对方的立场和感受", value: "V"}
            ]
        },
        {
            id: 10,
            category: "cognition",
            question: "在评价一部电影时，你更关注？",
            options: [
                {text: "剧情的逻辑和结构", value: "R"},
                {text: "观影时的感受和情感共鸣", value: "X"}
            ]
        },
        {
            id: 11,
            category: "ethics",
            question: "当你需要在工作和家庭之间平衡时，你会？",
            options: [
                {text: "根据具体情况权衡，选择当前更重要的", value: "G"},
                {text: "认为家庭责任优先，尽量兼顾工作", value: "D"}
            ]
        },
        {
            id: 12,
            category: "society",
            question: "你如何看待社交媒体上的不同观点？",
            options: [
                {text: "希望通过讨论达成共识", value: "O"},
                {text: "欣赏多元化的声音", value: "M"}
            ]
        },
        {
            id: 13,
            category: "reality",
            question: "当你面对生活中的变化时，你会？",
            options: [
                {text: "坚持自己的原则和价值观", value: "U"},
                {text: "调整自己适应新情况", value: "V"}
            ]
        },
        {
            id: 14,
            category: "cognition",
            question: "在解决问题时，你更倾向于？",
            options: [
                {text: "分析问题的根本原因", value: "R"},
                {text: "尝试不同方法，从经验中学习", value: "X"}
            ]
        },
        {
            id: 15,
            category: "ethics",
            question: "你认为保护环境的主要原因是？",
            options: [
                {text: "为了人类的可持续发展", value: "G"},
                {text: "自然本身有其内在价值", value: "D"}
            ]
        },
        {
            id: 16,
            category: "society",
            question: "在组织活动时，你更倾向于？",
            options: [
                {text: "制定详细计划，确保顺利进行", value: "O"},
                {text: "保持灵活性，让大家自由参与", value: "M"}
            ]
        },
        {
            id: 17,
            category: "reality",
            question: "你认为成功的关键是什么？",
            options: [
                {text: "明确的目标和坚持", value: "U"},
                {text: "适应变化和抓住机会", value: "V"}
            ]
        },
        {
            id: 18,
            category: "cognition",
            question: "当你学习新事物时，你更喜欢？",
            options: [
                {text: "先了解理论基础", value: "R"},
                {text: "直接动手实践", value: "X"}
            ]
        },
        {
            id: 19,
            category: "ethics",
            question: "你认为对待动物的态度应该是？",
            options: [
                {text: "考虑人类的需要和动物的福利", value: "G"},
                {text: "认为动物有生存权，应该被尊重", value: "D"}
            ]
        },
        {
            id: 20,
            category: "society",
            question: "你如何看待财富分配？",
            options: [
                {text: "应该兼顾效率和公平", value: "O"},
                {text: "应该尊重个人的劳动成果", value: "M"}
            ]
        },
        {
            id: 21,
            category: "reality",
            question: "当你阅读一本小说时，你更关注？",
            options: [
                {text: "故事的主题和深层含义", value: "U"},
                {text: "情节的发展和人物的命运", value: "V"}
            ]
        },
        {
            id: 22,
            category: "cognition",
            question: "在做决定时，你更相信？",
            options: [
                {text: "冷静的分析和理性判断", value: "R"},
                {text: "直觉和内心的感受", value: "X"}
            ]
        },
        {
            id: 23,
            category: "ethics",
            question: "你认为说谎在什么情况下可以接受？",
            options: [
                {text: "当说谎可以避免更大的伤害时", value: "G"},
                {text: "说谎始终是不道德的", value: "D"}
            ]
        },
        {
            id: 24,
            category: "society",
            question: "你如何看待传统文化？",
            options: [
                {text: "传承其中的精华，保持文化根脉", value: "O"},
                {text: "文化应该随时代发展，不断创新", value: "M"}
            ]
        },
        {
            id: 25,
            category: "reality",
            question: "当你面对挑战时，你认为？",
            options: [
                {text: "挑战背后有成长的机会", value: "U"},
                {text: "挑战是生活的常态，需要灵活应对", value: "V"}
            ]
        }
    ],
    "complex": [
        // 完整版测试 - 55题
        {
            id: 1,
            category: "reality",
            question: "当你面对工作中的新挑战时，你更倾向于？",
            options: [
                {text: "寻找类似情况的处理方法和规律", value: "U"},
                {text: "根据具体情况灵活应对", value: "V"}
            ]
        },
        {
            id: 2,
            category: "cognition",
            question: "在学习一门新技能时，你通常会？",
            options: [
                {text: "先了解原理和方法，再实践", value: "R"},
                {text: "直接动手尝试，从错误中学习", value: "X"}
            ]
        },
        {
            id: 3,
            category: "ethics",
            question: "当你发现同事在工作中犯错时，你会？",
            options: [
                {text: "考虑他的处境和错误的影响，决定如何处理", value: "G"},
                {text: "基于诚实和责任，及时指出错误", value: "D"}
            ]
        },
        {
            id: 4,
            category: "society",
            question: "在家庭决策中，你更重视？",
            options: [
                {text: "全家的整体利益和和谐", value: "O"},
                {text: "每个家庭成员的个人需求", value: "M"}
            ]
        },
        {
            id: 5,
            category: "reality",
            question: "当你购买一件商品时，你更关注？",
            options: [
                {text: "商品的质量和性价比", value: "U"},
                {text: "购买时的体验和个人喜好", value: "V"}
            ]
        },
        {
            id: 6,
            category: "cognition",
            question: "在解决人际关系问题时，你更依赖？",
            options: [
                {text: "理性沟通和分析问题根源", value: "R"},
                {text: "直觉和情感共鸣", value: "X"}
            ]
        },
        {
            id: 7,
            category: "ethics",
            question: "当你需要在个人利益和他人利益之间选择时，你会？",
            options: [
                {text: "权衡双方的需求和后果", value: "G"},
                {text: "优先考虑他人的需要", value: "D"}
            ]
        },
        {
            id: 8,
            category: "society",
            question: "你认为社区活动的意义在于？",
            options: [
                {text: "增强社区凝聚力和共同价值观", value: "O"},
                {text: "提供个人发展和社交的机会", value: "M"}
            ]
        },
        {
            id: 9,
            category: "reality",
            question: "当你制定长期计划时，你更倾向于？",
            options: [
                {text: "设定明确的目标和步骤", value: "U"},
                {text: "保持灵活性，适应变化", value: "V"}
            ]
        },
        {
            id: 10,
            category: "cognition",
            question: "在评价他人时，你更注重？",
            options: [
                {text: "客观事实和具体行为", value: "R"},
                {text: "直觉感受和整体印象", value: "X"}
            ]
        },
        {
            id: 11,
            category: "ethics",
            question: "当你看到有人需要帮助但可能会耽误自己的时间时，你会？",
            options: [
                {text: "根据自己的时间安排和帮助的紧急程度决定", value: "G"},
                {text: "尽可能提供帮助，即使会占用自己的时间", value: "D"}
            ]
        },
        {
            id: 12,
            category: "society",
            question: "你认为企业文化应该强调？",
            options: [
                {text: "团队合作和共同目标", value: "O"},
                {text: "个人创新和独立思考", value: "M"}
            ]
        },
        {
            id: 13,
            category: "reality",
            question: "当你面对生活中的挫折时，你会？",
            options: [
                {text: "坚持自己的信念和目标", value: "U"},
                {text: "调整自己的期望和方法", value: "V"}
            ]
        },
        {
            id: 14,
            category: "cognition",
            question: "在阅读一本书时，你更关注？",
            options: [
                {text: "书中的逻辑结构和核心观点", value: "R"},
                {text: "阅读时的感受和个人启发", value: "X"}
            ]
        },
        {
            id: 15,
            category: "ethics",
            question: "你认为教育孩子的重点应该是？",
            options: [
                {text: "培养他们的责任感和适应社会的能力", value: "G"},
                {text: "培养他们的道德观念和价值观", value: "D"}
            ]
        },
        {
            id: 16,
            category: "society",
            question: "在社交媒体上，你更倾向于？",
            options: [
                {text: "分享有价值的信息和观点", value: "O"},
                {text: "表达个人感受和生活瞬间", value: "M"}
            ]
        },
        {
            id: 17,
            category: "reality",
            question: "当你选择朋友时，你更看重？",
            options: [
                {text: "共同的价值观和性格匹配", value: "U"},
                {text: "相处时的感觉和默契", value: "V"}
            ]
        },
        {
            id: 18,
            category: "cognition",
            question: "在规划未来时，你更倾向于？",
            options: [
                {text: "制定详细的计划和目标", value: "R"},
                {text: "保持开放心态，接受各种可能性", value: "X"}
            ]
        },
        {
            id: 19,
            category: "ethics",
            question: "你认为对待弱势群体的态度应该是？",
            options: [
                {text: "提供必要的帮助，促进社会公平", value: "G"},
                {text: "基于人道主义，无条件关怀", value: "D"}
            ]
        },
        {
            id: 20,
            category: "society",
            question: "你如何看待社会福利制度？",
            options: [
                {text: "应该保障基本需求，促进社会稳定", value: "O"},
                {text: "应该尊重个人努力，避免养懒人", value: "M"}
            ]
        },
        {
            id: 21,
            category: "reality",
            question: "当你评价一件艺术品时，你更关注？",
            options: [
                {text: "作品的技巧和内涵", value: "U"},
                {text: "作品带给你的感受和体验", value: "V"}
            ]
        },
        {
            id: 22,
            category: "cognition",
            question: "在做购物决策时，你更依赖？",
            options: [
                {text: "产品信息和性价比分析", value: "R"},
                {text: "个人偏好和购物体验", value: "X"}
            ]
        },
        {
            id: 23,
            category: "ethics",
            question: "你认为网络言论的边界应该是？",
            options: [
                {text: "言论自由但需负责任，避免伤害他人", value: "G"},
                {text: "无论何时都应尊重事实和他人权利", value: "D"}
            ]
        },
        {
            id: 24,
            category: "society",
            question: "你如何看待代际差异？",
            options: [
                {text: "应该传承优秀传统，保持文化连续性", value: "O"},
                {text: "应该尊重年轻一代的创新和变化", value: "M"}
            ]
        },
        {
            id: 25,
            category: "reality",
            question: "当你面对健康问题时，你更倾向于？",
            options: [
                {text: "遵循医生的专业建议和治疗方案", value: "U"},
                {text: "结合个人体验和多种疗法", value: "V"}
            ]
        },
        {
            id: 26,
            category: "cognition",
            question: "在解决技术问题时，你更倾向于？",
            options: [
                {text: "查阅资料，理解原理后解决", value: "R"},
                {text: "尝试不同方法，直到解决问题", value: "X"}
            ]
        },
        {
            id: 27,
            category: "ethics",
            question: "当你需要在工作和个人生活之间平衡时，你会？",
            options: [
                {text: "根据具体情况调整，兼顾两者", value: "G"},
                {text: "优先考虑家庭责任", value: "D"}
            ]
        },
        {
            id: 28,
            category: "society",
            question: "你认为公共空间的使用应该？",
            options: [
                {text: "遵循规则，保持秩序", value: "O"},
                {text: "灵活使用，满足个人需求", value: "M"}
            ]
        },
        {
            id: 29,
            category: "reality",
            question: "当你规划假期时，你更倾向于？",
            options: [
                {text: "提前制定详细行程", value: "U"},
                {text: "留出足够的自由时间，随机安排", value: "V"}
            ]
        },
        {
            id: 30,
            category: "cognition",
            question: "在学习历史时，你更关注？",
            options: [
                {text: "历史事件的原因和影响", value: "R"},
                {text: "历史人物的故事和情感", value: "X"}
            ]
        },
        {
            id: 31,
            category: "ethics",
            question: "你认为慈善行为的意义在于？",
            options: [
                {text: "帮助需要的人，改善社会状况", value: "G"},
                {text: "体现人类的 compassion和道德责任", value: "D"}
            ]
        },
        {
            id: 32,
            category: "society",
            question: "你如何看待职场竞争？",
            options: [
                {text: "适度竞争可以促进整体进步", value: "O"},
                {text: "竞争应该尊重个人权利和公平原则", value: "M"}
            ]
        },
        {
            id: 33,
            category: "reality",
            question: "当你面对选择时，你更倾向于？",
            options: [
                {text: "分析利弊，做出最合理的选择", value: "U"},
                {text: "跟随内心的感觉和直觉", value: "V"}
            ]
        },
        {
            id: 34,
            category: "cognition",
            question: "在团队讨论中，你更倾向于？",
            options: [
                {text: "提出逻辑清晰的观点和建议", value: "R"},
                {text: "倾听他人意见，表达个人感受", value: "X"}
            ]
        },
        {
            id: 35,
            category: "ethics",
            question: "你认为对待传统文化的态度应该是？",
            options: [
                {text: "取其精华，去其糟粕，适应现代社会", value: "G"},
                {text: "尊重传统，保持文化的连续性", value: "D"}
            ]
        },
        {
            id: 36,
            category: "society",
            question: "你如何看待社会志愿服务？",
            options: [
                {text: "是促进社会和谐的重要方式", value: "O"},
                {text: "是个人成长和实现价值的途径", value: "M"}
            ]
        },
        {
            id: 37,
            category: "reality",
            question: "当你学习历史时，你认为？",
            options: [
                {text: "历史有规律可循，能给我们启示", value: "U"},
                {text: "历史是独特的，每个时代都不同", value: "V"}
            ]
        },
        {
            id: 38,
            category: "cognition",
            question: "在解决冲突时，你更倾向于？",
            options: [
                {text: "分析问题，寻找双赢的解决方案", value: "R"},
                {text: "理解对方感受，建立情感连接", value: "X"}
            ]
        },
        {
            id: 39,
            category: "ethics",
            question: "你认为企业的社会责任应该包括？",
            options: [
                {text: "创造就业，促进经济发展", value: "G"},
                {text: "保护环境，回馈社会", value: "D"}
            ]
        },
        {
            id: 40,
            category: "society",
            question: "你如何看待城市化进程？",
            options: [
                {text: "应该注重城市的整体规划和可持续发展", value: "O"},
                {text: "应该尊重每个城市的特色和居民需求", value: "M"}
            ]
        },
        {
            id: 41,
            category: "reality",
            question: "当你评价一部电影时，你更关注？",
            options: [
                {text: "电影的剧情结构和主题表达", value: "U"},
                {text: "电影带给你的情感体验", value: "V"}
            ]
        },
        {
            id: 42,
            category: "cognition",
            question: "在制定个人目标时，你更倾向于？",
            options: [
                {text: "设定具体、可衡量的目标", value: "R"},
                {text: "设定方向和愿景，灵活调整", value: "X"}
            ]
        },
        {
            id: 43,
            category: "ethics",
            question: "你认为对待工作的态度应该是？",
            options: [
                {text: "认真负责，追求卓越", value: "G"},
                {text: "尽职尽责，遵守职业道德", value: "D"}
            ]
        },
        {
            id: 44,
            category: "society",
            question: "你如何看待社会不平等问题？",
            options: [
                {text: "应该通过政策和制度减少不平等", value: "O"},
                {text: "应该保障每个人的机会平等", value: "M"}
            ]
        },
        {
            id: 45,
            category: "reality",
            question: "当你面对压力时，你更倾向于？",
            options: [
                {text: "制定计划，有条理地应对", value: "U"},
                {text: "调整心态，适应压力", value: "V"}
            ]
        },
        {
            id: 46,
            category: "cognition",
            question: "在学习语言时，你更倾向于？",
            options: [
                {text: "学习语法规则和词汇", value: "R"},
                {text: "通过对话和语境学习", value: "X"}
            ]
        },
        {
            id: 47,
            category: "ethics",
            question: "你认为对待隐私的态度应该是？",
            options: [
                {text: "在保护个人隐私的同时，考虑公共利益", value: "G"},
                {text: "隐私是基本权利，应该得到尊重", value: "D"}
            ]
        },
        {
            id: 48,
            category: "society",
            question: "你如何看待教育资源的分配？",
            options: [
                {text: "应该均衡分配，确保每个孩子都有受教育的机会", value: "O"},
                {text: "应该允许一定的差异，鼓励竞争和创新", value: "M"}
            ]
        },
        {
            id: 49,
            category: "reality",
            question: "当你评价一个人的成功时，你更关注？",
            options: [
                {text: "他的成就和社会贡献", value: "U"},
                {text: "他的个人成长和幸福感", value: "V"}
            ]
        },
        {
            id: 50,
            category: "cognition",
            question: "在处理财务问题时，你更倾向于？",
            options: [
                {text: "制定预算，理性规划", value: "R"},
                {text: "根据需求和感受灵活安排", value: "X"}
            ]
        },
        {
            id: 51,
            category: "ethics",
            question: "你认为对待知识产权的态度应该是？",
            options: [
                {text: "保护创新，促进知识传播", value: "G"},
                {text: "尊重创作者的权利", value: "D"}
            ]
        },
        {
            id: 52,
            category: "society",
            question: "你如何看待科技发展？",
            options: [
                {text: "科技应该服务于人类的整体福祉", value: "O"},
                {text: "科技应该增强个人能力和自由", value: "M"}
            ]
        },
        {
            id: 53,
            category: "reality",
            question: "当你面对人生重大决策时，你更倾向于？",
            options: [
                {text: "考虑长远影响和后果", value: "U"},
                {text: "跟随内心的声音和直觉", value: "V"}
            ]
        },
        {
            id: 54,
            category: "cognition",
            question: "在评价他人的观点时，你更关注？",
            options: [
                {text: "观点的逻辑和证据", value: "R"},
                {text: "观点背后的动机和情感", value: "X"}
            ]
        },
        {
            id: 55,
            category: "ethics",
            question: "你认为人生的意义在于？",
            options: [
                {text: "实现个人价值，为社会做出贡献", value: "G"},
                {text: "遵循道德准则，追求内心的平静", value: "D"}
            ]
        }
    ]
};