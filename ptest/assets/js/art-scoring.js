const artScoring = {
    dimensionLabels: {
        differentiation: {
            name: "菜单广度",
            left: { code: "Z", name: "杂食派", description: "涉猎极广，歌单/书单/片单类型混杂，对新类型持开放态度" },
            right: { code: "S", name: "专食派", description: "深耕少数领域，品味高度集中，对新类型谨慎筛选" }
        },
        hierarchy: {
            name: "品味阶梯",
            left: { code: "P", name: "平权派", description: "认为所有艺术形式价值平等，没有高下之分，反感鄙视链" },
            right: { code: "J", name: "阶梯派", description: "内心承认某些艺术形式客观上更高级、更有深度" }
        },
        universality: {
            name: "圈层意识",
            left: { code: "T", name: "通识派", description: "消费的文化内容大众熟悉，分类标准与主流共识一致" },
            right: { code: "H", name: "黑话派", description: "偏好小众圈层，常用行话区分内外，不介意他人听不懂" }
        },
        boundary: {
            name: "跨界容忍",
            left: { code: "R", name: "熔炉派", description: "乐于看到跨界融合，认为边界是用来打破的" },
            right: { code: "C", name: "洁癖派", description: "认为流派应有边界，过度融合是背叛或不伦不类" }
        }
    },

    personalityTypes: {
        "ZPTR": {
            code: "ZPTR",
            name: "好奇海豚",
            emoji: "🐬",
            color: "#06B6D4",
            tagline: "什么都听、什么都说好、跟谁都能聊，最恨分类标签",
            description: "你是艺术世界里的探险家，对一切新鲜事物充满好奇。你的歌单可能同时包含古典、电子、民谣和世界音乐。你相信艺术没有高低之分，乐于和任何人分享你的发现。跨界融合对你来说是兴奋点而非威胁。",
            traits: ["开放包容", "好奇心强", "善于社交", "厌恶标签"],
            strengths: ["能快速发现新内容", "社交圈广泛", "适应能力强", "思维活跃"],
            weaknesses: ["可能缺乏深度", "容易分散精力", "难以形成专业见解", "可能被批评为没有品味"],
            recommendations: ["保持你的开放心态", "尝试建立几个深耕领域", "记录你的发现之旅", "与不同圈层的人交流"]
        },
        "ZPTC": {
            code: "ZPTC",
            name: "温和杂食者",
            emoji: "🦊",
            color: "#F59E0B",
            tagline: "品味宽但认为有些东西确实更好，跨界谨慎",
            description: "你是一位有品位的杂食者，涉猎广泛但内心有一杆秤。虽然你欣赏各种艺术形式，但你相信某些作品确实更具价值。对于跨界融合，你持审慎态度，认为创新需要尊重传统。",
            traits: ["品味广泛", "有判断力", "尊重传统", "审慎开放"],
            strengths: ["视野开阔", "有独立判断", "平衡传统与创新", "善于筛选"],
            weaknesses: ["可能显得矛盾", "难以完全融入任何圈子", "决策时可能犹豫", "容易两头不讨好"],
            recommendations: ["相信你的直觉", "不要害怕表达偏好", "在开放和坚守间找平衡", "建立自己的评价体系"]
        },
        "ZPHR": {
            code: "ZPHR",
            name: "游牧混音师",
            emoji: "🎵",
            color: "#8B5CF6",
            tagline: "什么都听，圈子小众，热衷融合，活在边界之外",
            description: "你是艺术世界的混音师，游走于各种小众圈层之间。你的品味独特而广泛，热衷于发现不同风格的融合可能。你不在乎大众是否理解，只在乎自己是否享受探索的过程。",
            traits: ["小众品味", "跨界思维", "独立特行", "创新精神"],
            strengths: ["发现独特组合", "不受主流影响", "创新能力极强", "有独特视角"],
            weaknesses: ["可能过于边缘", "难以找到同好", "容易被误解", "可能脱离现实"],
            recommendations: ["记录你的发现", "寻找志同道合者", "适度分享你的发现", "保持你的独特性"]
        },
        "ZPHC": {
            code: "ZPHC",
            name: "圈地杂食家",
            emoji: "🦉",
            color: "#6366F1",
            tagline: "涉猎广但只在自己圈内玩，对跨界有洁癖",
            description: "你是一位有边界的杂食者，在小众圈层中如鱼得水。你广泛涉猎各种风格，但都在自己认可的框架内。对于跨界融合，你有着明确的底线，认为某些边界不应该被打破。",
            traits: ["圈层归属", "品味独特", "边界意识", "选择性开放"],
            strengths: ["圈层内影响力", "有明确品味", "忠诚度高", "深度了解特定领域"],
            weaknesses: ["可能排斥新事物", "圈层局限", "错过跨界机会", "可能显得封闭"],
            recommendations: ["偶尔走出舒适圈", "保持开放心态", "分享你的专业知识", "尝试理解不同观点"]
        },
        "ZJTR": {
            code: "ZJTR",
            name: "雅痞沙龙主",
            emoji: "🎭",
            color: "#EC4899",
            tagline: "涉猎广，内心有高下之分，乐于输出标准，容忍跨界",
            description: "你是艺术世界的沙龙主人，见多识广且有自己的品味标准。你相信艺术有高低之分，乐于向他人分享你的见解。对于跨界融合，你持开放态度，只要它能产出高质量的作品。",
            traits: ["品味高雅", "乐于分享", "有标准", "开放创新"],
            strengths: ["有权威性", "善于引导他人", "知识面广", "有影响力"],
            weaknesses: ["可能显得傲慢", "标准可能过严", "容易引起争议", "可能忽视草根文化"],
            recommendations: ["保持谦逊", "倾听不同声音", "适度调整标准", "欣赏多元价值"]
        },
        "ZJTC": {
            code: "ZJTC",
            name: "精英守门人",
            emoji: "🦁",
            color: "#DC2626",
            tagline: "什么都懂但门禁森严，认为好东西就该有门槛",
            description: "你是艺术殿堂的守门人，博学多才但门槛分明。你了解各种艺术形式，但坚信真正优秀的作品需要一定的鉴赏能力。你认为保持边界是维护艺术品质的必要条件。",
            traits: ["精英意识", "博学多才", "门槛观念", "品质至上"],
            strengths: ["保护艺术品质", "有深度见解", "能识别真正价值", "有引导能力"],
            weaknesses: ["可能过于排外", "门槛可能过高", "错过草根创新", "容易显得势利"],
            recommendations: ["适度降低门槛", "培养新爱好者", "保持开放心态", "分享你的知识"]
        },
        "ZJHR": {
            code: "ZJHR",
            name: "地下策展人",
            emoji: "🎨",
            color: "#7C3AED",
            tagline: "涉猎广、等级感强、圈子小众、但乐于融合推广",
            description: "你是地下艺术世界的策展人，在小众圈层中推广你认为有价值的作品。你有明确的品味标准，但不局限于主流认可的形式。你热衷于发现和推广跨界融合的创新作品。",
            traits: ["小众推广", "有品味标准", "跨界思维", "推广能力"],
            strengths: ["发现被忽视的宝藏", "有独特眼光", "善于推广", "连接不同圈层"],
            weaknesses: ["可能过于小众", "推广效果有限", "资源可能不足", "难以获得主流认可"],
            recommendations: ["建立推广渠道", "寻找合作伙伴", "记录你的发现", "适度向主流靠拢"]
        },
        "ZJHC": {
            code: "ZJHC",
            name: "孤高鉴赏家",
            emoji: "🦅",
            color: "#4F46E5",
            tagline: "涉猎广、等级分明、小众圈子、边界严格",
            description: "你是艺术世界的隐士鉴赏家，博学而孤高。你广泛涉猎各种艺术形式，但内心有明确的等级划分。你活跃在小众圈层，对跨界融合持保守态度，认为某些边界是神圣不可侵犯的。",
            traits: ["孤高独立", "博学多才", "品味独特", "边界分明"],
            strengths: ["有深度见解", "不受主流影响", "知识渊博", "有独立判断"],
            weaknesses: ["可能过于孤僻", "难以找到同好", "可能错过新趋势", "容易被误解"],
            recommendations: ["适度分享见解", "寻找志同道合者", "保持开放心态", "记录你的思考"]
        },
        "SPTR": {
            code: "SPTR",
            name: "地下广播员",
            emoji: "📻",
            color: "#10B981",
            tagline: "品味专一，平视一切，致力于向大众安利小众爱好",
            description: "你是小众文化的传播者，深耕某一领域但态度开放。你专注于自己热爱的领域，但相信所有艺术形式都有其价值。你热衷于向大众介绍你的小众爱好，希望更多人能欣赏它们。",
            traits: ["专注深耕", "平等开放", "传播热情", "大众导向"],
            strengths: ["专业深度", "传播能力强", "能连接小众与大众", "有感染力"],
            weaknesses: ["可能过于单一", "推广可能受阻", "可能被圈内人质疑", "精力分散"],
            recommendations: ["保持你的热情", "寻找合适的传播渠道", "培养更多爱好者", "记录你的发现"]
        },
        "SPTC": {
            code: "SPTC",
            name: "温和专食者",
            emoji: "🐢",
            color: "#14B8A6",
            tagline: "只听这一亩三分地，平权但跨界保守",
            description: "你是一位温和的专食者，深耕自己热爱的领域，同时对其他艺术形式保持尊重。你相信艺术没有高低之分，但对于跨界融合持审慎态度，认为专注才能深入。",
            traits: ["专注深耕", "平权观念", "审慎保守", "温和理性"],
            strengths: ["专业深度", "态度平和", "有独立判断", "不被外界干扰"],
            weaknesses: ["可能视野局限", "错过跨界机会", "可能显得保守", "难以接受新形式"],
            recommendations: ["保持专注", "偶尔了解其他领域", "分享你的专业知识", "保持开放心态"]
        },
        "SPHR": {
            code: "SPHR",
            name: "孤岛隐士",
            emoji: "🏝️",
            color: "#0EA5E9",
            tagline: "专一、平权、小众、但不排斥融合",
            description: "你是艺术世界里的孤岛隐士，专注于小众领域但心态开放。你深耕自己热爱的领域，相信所有艺术形式都有价值。虽然你活跃在小众圈层，但对跨界融合持开放态度。",
            traits: ["专注小众", "平权观念", "独立特行", "开放融合"],
            strengths: ["专业深度", "不受主流影响", "有独特视角", "接受创新"],
            weaknesses: ["可能过于孤立", "难以找到同好", "可能被忽视", "资源有限"],
            recommendations: ["寻找志同道合者", "分享你的发现", "保持开放心态", "记录你的思考"]
        },
        "SPHC": {
            code: "SPHC",
            name: "堡垒守护者",
            emoji: "🏰",
            color: "#64748B",
            tagline: "品味专一，平视但圈地自萌，跨界洁癖",
            description: "你是小众领域的守护者，深耕并保护自己热爱的领域。你相信艺术没有高低之分，但认为每个领域都应该保持纯粹。对于跨界融合，你持保守态度，担心它会稀释原有的价值。",
            traits: ["专注守护", "平权观念", "圈层归属", "边界意识"],
            strengths: ["保护领域纯粹性", "专业深度", "忠诚度高", "有归属感"],
            weaknesses: ["可能过于封闭", "错过创新机会", "可能显得保守", "难以接受变化"],
            recommendations: ["适度开放边界", "理解创新的价值", "分享你的专业知识", "保持领域活力"]
        },
        "SJTR": {
            code: "SJTR",
            name: "神殿祭司",
            emoji: "🏛️",
            color: "#D97706",
            tagline: "专一、有等级感、面向大众、但容忍跨界",
            description: "你是艺术神殿的祭司，专注于高雅艺术并致力于向大众传播。你相信艺术有高低之分，但不排斥跨界融合，只要它能产出高质量的作品。你希望更多人能欣赏真正优秀的艺术。",
            traits: ["高雅品味", "等级观念", "大众传播", "开放创新"],
            strengths: ["有权威性", "传播能力强", "有深度见解", "能引导大众"],
            weaknesses: ["可能显得傲慢", "标准可能过严", "可能忽视草根", "推广可能受阻"],
            recommendations: ["保持谦逊", "倾听不同声音", "适度降低门槛", "欣赏多元价值"]
        },
        "SJTC": {
            code: "SJTC",
            name: "经典卫士",
            emoji: "⚔️",
            color: "#B91C1C",
            tagline: "专一、有等级、大众化、边界严格",
            description: "你是经典艺术的卫士，坚守传统价值并保护艺术边界。你专注于经典领域，相信艺术有客观的高下之分。对于跨界融合，你持保守态度，认为某些边界是维护艺术品质的必要条件。",
            traits: ["经典品味", "等级观念", "传统守护", "边界分明"],
            strengths: ["保护传统价值", "有深度见解", "有权威性", "引导能力强"],
            weaknesses: ["可能过于保守", "错过创新机会", "可能显得势利", "难以接受新形式"],
            recommendations: ["适度接受创新", "培养新一代爱好者", "保持传统活力", "分享你的知识"]
        },
        "SJHR": {
            code: "SJHR",
            name: "宗派掌门",
            emoji: "🏯",
            color: "#7C2D12",
            tagline: "专一、有等级、小众圈子、但欢迎融合",
            description: "你是小众艺术宗派的掌门人，在小众圈层中推广你认为有价值的作品。你有明确的品味标准，相信艺术有高低之分。你热衷于发现和推广跨界融合的创新作品，只要它们符合你的标准。",
            traits: ["小众领袖", "等级观念", "推广融合", "有标准"],
            strengths: ["圈层影响力", "有独特眼光", "推广能力强", "连接不同领域"],
            weaknesses: ["可能过于小众", "标准可能过严", "资源可能有限", "难以获得主流认可"],
            recommendations: ["扩大影响力", "培养新一代", "保持开放心态", "记录你的发现"]
        },
        "SJHC": {
            code: "SJHC",
            name: "教条隐士",
            emoji: "🏔️",
            color: "#1E293B",
            tagline: "专一、等级森严、小众圈层、边界不可逾越",
            description: "你是艺术世界的隐士，在小众领域坚守严格的品味标准。你专注于自己热爱的领域，相信艺术有客观的等级之分。对于跨界融合，你持最保守的态度，认为某些边界是神圣不可侵犯的。",
            traits: ["孤高独立", "等级森严", "小众深耕", "边界严格"],
            strengths: ["有深度见解", "不受主流影响", "知识渊博", "有独立判断"],
            weaknesses: ["可能过于孤僻", "难以找到同好", "错过所有新趋势", "容易被误解"],
            recommendations: ["适度分享见解", "尝试理解不同观点", "保持领域活力", "记录你的思考"]
        }
    },

    calculateScore: function(answers) {
        const scores = {
            differentiation: 0,
            hierarchy: 0,
            universality: 0,
            boundary: 0
        };

        for (let i = 0; i < artQuestions.length; i++) {
            if (answers[i] !== undefined) {
                const question = artQuestions[i];
                const optionIndex = answers[i] === 'A' ? 0 : 1;
                const value = question.options[optionIndex].value;
                scores[question.dimension] += value;
            }
        }

        return scores;
    },

    generateCode: function(scores) {
        let code = '';
        code += scores.differentiation <= 0 ? 'Z' : 'S';
        code += scores.hierarchy <= 0 ? 'P' : 'J';
        code += scores.universality <= 0 ? 'T' : 'H';
        code += scores.boundary <= 0 ? 'R' : 'C';
        return code;
    },

    getPersonalityType: function(code) {
        return this.personalityTypes[code] || null;
    },

    getDimensionResult: function(dimension, score) {
        const dimInfo = this.dimensionLabels[dimension];
        if (score <= 0) {
            return {
                code: dimInfo.left.code,
                name: dimInfo.left.name,
                description: dimInfo.left.description,
                score: Math.abs(score),
                direction: 'left'
            };
        } else {
            return {
                code: dimInfo.right.code,
                name: dimInfo.right.name,
                description: dimInfo.right.description,
                score: score,
                direction: 'right'
            };
        }
    },

    evaluateTest: function(answers) {
        const scores = this.calculateScore(answers);
        const code = this.generateCode(scores);
        const personality = this.getPersonalityType(code);
        
        const dimensions = {
            differentiation: this.getDimensionResult('differentiation', scores.differentiation),
            hierarchy: this.getDimensionResult('hierarchy', scores.hierarchy),
            universality: this.getDimensionResult('universality', scores.universality),
            boundary: this.getDimensionResult('boundary', scores.boundary)
        };

        return {
            code: code,
            scores: scores,
            dimensions: dimensions,
            personality: personality,
            timestamp: new Date().toISOString()
        };
    }
};
