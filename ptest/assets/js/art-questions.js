const artQuestions = [
    {
        id: 1,
        dimension: "differentiation",
        dimensionName: "菜单广度",
        question: "打开你的音乐App年度报告，你的歌单类型分布是怎样的？",
        options: [
            { text: "横跨摇滚、古典、电子、民谣等多种迥异风格，甚至有些类型我自己都想不到会喜欢", value: -1, label: "Z" },
            { text: "高度集中在两三种风格，比如就爱听摇滚和民谣，其他类型很少涉猎", value: 1, label: "S" }
        ]
    },
    {
        id: 2,
        dimension: "differentiation",
        dimensionName: "菜单广度",
        question: "朋友推荐了一个你从未听过的音乐类型（比如后摇、蒸汽波），你的第一反应是？",
        options: [
            { text: "立刻去搜来听听看，没准会发现新大陆", value: -1, label: "Z" },
            { text: "先问问这是什么风格，判断一下是否属于自己会喜欢的领域", value: 1, label: "S" }
        ]
    },
    {
        id: 3,
        dimension: "differentiation",
        dimensionName: "菜单广度",
        question: "你的视频网站首页推荐内容通常呈现什么特点？",
        options: [
            { text: "五花八门，美食、科技、游戏、纪录片什么都有，算法似乎猜不透我", value: -1, label: "Z" },
            { text: "风格统一，一眼就能看出我的用户画像，比如全是游戏或全是美食内容", value: 1, label: "S" }
        ]
    },
    {
        id: 4,
        dimension: "hierarchy",
        dimensionName: "品味阶梯",
        question: "有人说「听歌剧和听喊麦本质上没什么区别，都是娱乐」，你怎么看？",
        options: [
            { text: "确实如此，艺术形式没有高下之分，只是选择不同", value: -1, label: "P" },
            { text: "不太认同，客观上某些艺术形式确实更具审美价值和深度", value: 1, label: "J" }
        ]
    },
    {
        id: 5,
        dimension: "hierarchy",
        dimensionName: "品味阶梯",
        question: "如果你有孩子，在艺术教育方面你会怎么选择？",
        options: [
            { text: "架子鼓、街舞、吉他都可以，孩子开心最重要", value: -1, label: "P" },
            { text: "钢琴、芭蕾、小提琴这类更能培养气质和审美", value: 1, label: "J" }
        ]
    },
    {
        id: 6,
        dimension: "hierarchy",
        dimensionName: "品味阶梯",
        question: "看到国家交响乐团在短视频平台演奏流行歌曲，你的感受是？",
        options: [
            { text: "挺好的，雅俗共赏，让更多人接触古典音乐", value: -1, label: "P" },
            { text: "有点掉价，高雅艺术应该保持自己的格调", value: 1, label: "J" }
        ]
    },
    {
        id: 7,
        dimension: "universality",
        dimensionName: "圈层意识",
        question: "在社交平台上刷到一个陌生的流派标签（如「数学摇滚」「蒸汽波」），你会？",
        options: [
            { text: "立刻去搜索了解，甚至找来听听看", value: -1, label: "T" },
            { text: "大概率划走，感觉不是我的菜", value: 1, label: "H" }
        ]
    },
    {
        id: 8,
        dimension: "universality",
        dimensionName: "圈层意识",
        question: "你如何看待圈内人常用的「行话」或专业术语？",
        options: [
            { text: "有时候挺排外的，像是在设置门槛", value: -1, label: "T" },
            { text: "这是归属感的体现，不懂说明不是同路人", value: 1, label: "H" }
        ]
    },
    {
        id: 9,
        dimension: "universality",
        dimensionName: "圈层意识",
        question: "当别人问起你的音乐/阅读/观影品味时，通常会发生什么？",
        options: [
            { text: "大多数人都能接上话，我们聊得很开心", value: -1, label: "T" },
            { text: "经常需要解释「这到底是啥」，对方一脸茫然", value: 1, label: "H" }
        ]
    },
    {
        id: 10,
        dimension: "boundary",
        dimensionName: "跨界容忍",
        question: "你一直喜欢的歌手突然宣布转型，风格大变（比如从民谣变成电子），你会？",
        options: [
            { text: "勇于突破自我，必须支持！期待新作品", value: -1, label: "R" },
            { text: "感觉被背叛了，这不是我认识的那个人了", value: 1, label: "C" }
        ]
    },
    {
        id: 11,
        dimension: "boundary",
        dimensionName: "跨界容忍",
        question: "经典文学作品被改编成通俗商业电影，你的态度是？",
        options: [
            { text: "挺好玩的，艺术就是用来打破和重新诠释的", value: -1, label: "R" },
            { text: "有点尴尬，有些经典还是保持原味比较好", value: 1, label: "C" }
        ]
    },
    {
        id: 12,
        dimension: "boundary",
        dimensionName: "跨界容忍",
        question: "看到京剧和说唱融合的表演节目，你的感受是？",
        options: [
            { text: "时代趋势，传统需要新生命才能延续", value: -1, label: "R" },
            { text: "四不像，两边都不纯粹了", value: 1, label: "C" }
        ]
    }
];
