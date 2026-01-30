const graphes = {
  node: [
    {
      bsm: 185,
      name: "安全",
      type: "一级",
    },
    {
      bsm: 186,
      name: "水安全",
      type: "二级",
    },
    {
      bsm: 187,
      name: "人均年用水量",
      type: "三级",
    },
    {
      bsm: 188,
      name: "地下水水位",
      type: "三级",
    },
    {
      bsm: 189,
      name: "粮食安全",
      type: "二级",
    },
    {
      bsm: 190,
      name: "永久基本农田保护面积",
      type: "三级",
    },
    {
      bsm: 191,
      name: "永久基本农田图斑",
      type: "四级",
    },
    {
      bsm: 192,
      name: "耕地保有量",
      type: "三级",
    },
    {
      bsm: 193,
      name: "二调地类图斑",
      type: "四级",
    },
    {
      bsm: 194,
      name: "三调地类图斑",
      type: "四级",
    },
    {
      bsm: 195,
      name: "生态安全",
      type: "二级",
    },
    {
      bsm: 196,
      name: "生态保护红线面积",
      type: "三级",
    },
    {
      bsm: 197,
      name: "生态保护红线",
      type: "四级",
    },
    {
      bsm: 198,
      name: "文化安全",
      type: "二级",
    },
    {
      bsm: 199,
      name: "历史文化保护线面积",
      type: "三级",
    },
    {
      bsm: 200,
      name: "历史文化街区",
      type: "四级",
    },
    {
      bsm: 201,
      name: "现状历史文化遗存分布",
      type: "四级",
    },
    {
      bsm: 202,
      name: "城市紫线",
      type: "四级",
    },
    {
      bsm: 203,
      name: "城市韧性",
      type: "二级",
    },
    {
      bsm: 204,
      name: "人均应急避难场所面积 m2",
      type: "三级",
    },
    {
      bsm: 205,
      name: "城区范围",
      type: "四级",
    },
    {
      bsm: 206,
      name: "应急避难场所",
      type: "四级",
    },
    {
      bsm: 207,
      name: "人口规模",
      type: "四级",
    },
    {
      bsm: 208,
      name: "消防救援5分钟可达覆盖率",
      type: "三级",
    },
    {
      bsm: 209,
      name: "城区范围",
      type: "四级",
    },
    {
      bsm: 210,
      name: "消防站点/POI兴趣点",
      type: "四级",
    },
    {
      bsm: 211,
      name: "城市道路",
      type: "四级",
    },
    {
      bsm: 212,
      name: "城区透水表面占比",
      type: "三级",
    },
    {
      bsm: 213,
      name: "城区范围",
      type: "四级",
    },
    {
      bsm: 214,
      name: "不透水表面范围",
      type: "四级",
    },
    {
      bsm: 215,
      name: "城市内涝积水点数量",
      type: "三级",
    },
    {
      bsm: 216,
      name: "超高层建筑数量",
      type: "三级",
    },
    {
      bsm: 217,
      name: "规划管控",
      type: "二级",
    },
    {
      bsm: 218,
      name: "违法违规调整规划、用地用海等事件数量",
      type: "三级",
    },
    {
      bsm: 219,
      name: "重要江河湖泊水功能区水质达标率",
      type: "三级",
    },
    {
      bsm: 220,
      name: "用水总量",
      type: "三级",
    },
    {
      bsm: 221,
      name: "水资源开发利用率",
      type: "三级",
    },
    {
      bsm: 222,
      name: "湿地面积",
      type: "三级",
    },
    {
      bsm: 223,
      name: "二调地类图斑",
      type: "四级",
    },
    {
      bsm: 224,
      name: "三调地类图斑",
      type: "四级",
    },
    {
      bsm: 225,
      name: "河湖水面率",
      type: "三级",
    },
    {
      bsm: 226,
      name: "行政区划",
      type: "四级",
    },
    {
      bsm: 227,
      name: "二调地类图斑",
      type: "四级",
    },
    {
      bsm: 228,
      name: "三调地类图斑",
      type: "四级",
    },
    {
      bsm: 229,
      name: "地下水供水量占总供水量比例",
      type: "三级",
    },
    {
      bsm: 230,
      name: "再生水利用率",
      type: "三级",
    },
    {
      bsm: 231,
      name: "高标准农田面积占比",
      type: "三级",
    },
    {
      bsm: 232,
      name: "高标准农田验收",
      type: "四级",
    },
    {
      bsm: 233,
      name: "生态保护红线范围内城乡建设用地面积",
      type: "三级",
    },
    {
      bsm: 234,
      name: "生态保护红线",
      type: "四级",
    },
    {
      bsm: 235,
      name: "二调地类图斑",
      type: "四级",
    },
    {
      bsm: 236,
      name: "三调地类图斑",
      type: "四级",
    },
    {
      bsm: 237,
      name: "自然和文化遗产",
      type: "三级",
    },
    {
      bsm: 238,
      name: "破坏历史文化遗存本体及其环境事件数量",
      type: "三级",
    },
    {
      bsm: 239,
      name: "综合减灾示范社区比例",
      type: "三级",
    },
    {
      bsm: 240,
      name: "年平均地面沉降量",
      type: "三级",
    },
    {
      bsm: 241,
      name: "经过治理的地质灾害隐患点数量",
      type: "三级",
    },
    {
      bsm: 242,
      name: "防洪堤防达标率",
      type: "三级",
    },
    {
      bsm: 243,
      name: "创新",
      type: "一级",
    },
    {
      bsm: 244,
      name: "发展模式",
      type: "二级",
    },
    {
      bsm: 245,
      name: "闲置土地处置率",
      type: "三级",
    },
    {
      bsm: 246,
      name: "存量土地供应比例",
      type: "三级",
    },
    {
      bsm: 247,
      name: "土地供应信息",
      type: "四级",
    },
    {
      bsm: 248,
      name: "城乡工业用地占城乡建设用地的比例",
      type: "三级",
    },
    {
      bsm: 249,
      name: "二调地类图斑",
      type: "四级",
    },
    {
      bsm: 250,
      name: "三调地类图斑",
      type: "四级",
    },
    {
      bsm: 251,
      name: "土地出让收人占政府预算收入比例",
      type: "三级",
    },
    {
      bsm: 252,
      name: "城区道路网密度",
      type: "三级",
    },
    {
      bsm: 253,
      name: "城区范围",
      type: "四级",
    },
    {
      bsm: 254,
      name: "城市道路",
      type: "四级",
    },
    {
      bsm: 255,
      name: "智慧城市",
      type: "二级",
    },
    {
      bsm: 256,
      name: "“统一平台”建设及应用的县级单元比例",
      type: "三级",
    },
    {
      bsm: 257,
      name: "投入产出",
      type: "二级",
    },
    {
      bsm: 258,
      name: "社会劳动生产率",
      type: "三级",
    },
    {
      bsm: 259,
      name: "研究与试验发展经费投人强度",
      type: "三级",
    },
    {
      bsm: 260,
      name: "万人发明专利拥有量",
      type: "三级",
    },
    {
      bsm: 261,
      name: "高等学校数量",
      type: "三级",
    },
    {
      bsm: 262,
      name: "每10万人中具有大学文化程度人口数量",
      type: "三级",
    },
    {
      bsm: 263,
      name: "批而未供土地处置率",
      type: "三级",
    },
    {
      bsm: 264,
      name: "新增城市更新改造用地面积",
      type: "三级",
    },
    {
      bsm: 265,
      name: "城乡居住用地占城乡建设用地的比例",
      type: "三级",
    },
    {
      bsm: 266,
      name: "城乡职住用地比例",
      type: "三级",
    },
    {
      bsm: 267,
      name: "城市建设用地综合地价",
      type: "三级",
    },
    {
      bsm: 268,
      name: "共享",
      type: "一级",
    },
    {
      bsm: 269,
      name: "宜业",
      type: "二级",
    },
    {
      bsm: 270,
      name: "工作日平均通勤时间",
      type: "三级",
    },
    {
      bsm: 271,
      name: "手机信令（ 职住通勤OD与通勤时长数据）",
      type: "四级",
    },
    {
      bsm: 272,
      name: "宜居",
      type: "二级",
    },
    {
      bsm: 273,
      name: "15分钟社区生活圈覆盖率",
      type: "三级",
    },
    {
      bsm: 274,
      name: "城区范围",
      type: "四级",
    },
    {
      bsm: 275,
      name: "消防站点",
      type: "四级",
    },
    {
      bsm: 276,
      name: "社区卫生服务设施",
      type: "四级",
    },
    {
      bsm: 277,
      name: "社区小学",
      type: "四级",
    },
    {
      bsm: 278,
      name: "社区中学 ",
      type: "四级",
    },
    {
      bsm: 279,
      name: "社区养老设施",
      type: "四级",
    },
    {
      bsm: 280,
      name: "社区文化活动设施",
      type: "四级",
    },
    {
      bsm: 281,
      name: "菜市场",
      type: "四级",
    },
    {
      bsm: 282,
      name: "社区体育设施",
      type: "四级",
    },
    {
      bsm: 283,
      name: "林地图斑",
      type: "四级",
    },
    {
      bsm: 284,
      name: "二调地类图斑",
      type: "四级",
    },
    {
      bsm: 285,
      name: "三调地类图斑",
      type: "四级",
    },
    {
      bsm: 286,
      name: "每千人口医疗卫生机构床位数",
      type: "三级",
    },
    {
      bsm: 287,
      name: "每千名老年人养老床位数",
      type: "三级",
    },
    {
      bsm: 288,
      name: "城镇人均住房面积",
      type: "三级",
    },
    {
      bsm: 289,
      name: "宜游",
      type: "二级",
    },
    {
      bsm: 290,
      name: "人均公园绿地面积",
      type: "三级",
    },
    {
      bsm: 291,
      name: "城区范围",
      type: "四级",
    },
    {
      bsm: 292,
      name: "人口规模",
      type: "四级",
    },
    {
      bsm: 293,
      name: "二调地类图斑",
      type: "四级",
    },
    {
      bsm: 294,
      name: "三调地类图斑",
      type: "四级",
    },
    {
      bsm: 295,
      name: "城镇年新增就业人数",
      type: "三级",
    },
    {
      bsm: 296,
      name: "45分钟通勤时间内居民占比",
      type: "三级",
    },
    {
      bsm: 297,
      name: "都市圈1小时人口覆盖率",
      type: "三级",
    },
    {
      bsm: 298,
      name: "轨道交通站点 800 米半径服务覆盖率",
      type: "三级",
    },
    {
      bsm: 299,
      name: "社区卫生服务设施步行15分钟覆盖率",
      type: "三级",
    },
    {
      bsm: 300,
      name: "市区级医院2公里覆盖率",
      type: "三级",
    },
    {
      bsm: 301,
      name: "每万人拥有幼儿园班数",
      type: "三级",
    },
    {
      bsm: 302,
      name: "社区小学步行10分钟覆盖率",
      type: "三级",
    },
    {
      bsm: 303,
      name: "社区中学步行15分钟覆盖率",
      type: "三级",
    },
    {
      bsm: 304,
      name: "社区养老设施步行5分钟覆盖率",
      type: "三级",
    },
    {
      bsm: 305,
      name: "殡葬用地面积",
      type: "三级",
    },
    {
      bsm: 306,
      name: "社区文化活动设施步行15分钟覆盖率",
      type: "三级",
    },
    {
      bsm: 307,
      name: "菜市场（生鲜超市）步行 10 分钟覆盖率",
      type: "三级",
    },
    {
      bsm: 308,
      name: "年新增政策性住房占比",
      type: "三级",
    },
    {
      bsm: 309,
      name: "公共租赁住房套数",
      type: "三级",
    },
    {
      bsm: 310,
      name: "宜乐",
      type: "二级",
    },
    {
      bsm: 311,
      name: "社区体育设施步行15分钟覆盖率",
      type: "三级",
    },
    {
      bsm: 312,
      name: "足球场地设施步行15分钟覆盖率",
      type: "三级",
    },
    {
      bsm: 313,
      name: "每10万人拥有的博物馆、图书馆、科技馆、艺术馆等文化艺术场馆数量",
      type: "三级",
    },
    {
      bsm: 314,
      name: "每万人拥有的咖啡馆、茶舍等的数量",
      type: "三级",
    },
    {
      bsm: 315,
      name: "公园绿地、广场用地步行5分钟覆盖率",
      type: "三级",
    },
    {
      bsm: 316,
      name: "人均绿道长度",
      type: "三级",
    },
    {
      bsm: 317,
      name: "森林步行15分钟覆盖率",
      type: "三级",
    },
    {
      bsm: 318,
      name: "年空气质量优良天数",
      type: "三级",
    },
    {
      bsm: 319,
      name: "开放",
      type: "一级",
    },
    {
      bsm: 320,
      name: "对外交往",
      type: "二级",
    },
    {
      bsm: 321,
      name: "城市对外日均人流联系量",
      type: "三级",
    },
    {
      bsm: 322,
      name: "手机信令（城际跨域流动数据）",
      type: "四级",
    },
    {
      bsm: 323,
      name: "网络联通",
      type: "二级",
    },
    {
      bsm: 324,
      name: "定期国际通航城市数量",
      type: "三级",
    },
    {
      bsm: 325,
      name: "定期国内通航城市数量",
      type: "三级",
    },
    {
      bsm: 326,
      name: "1小时到达中心城市国际机场或干线机场的县级单元比例",
      type: "三级",
    },
    {
      bsm: 327,
      name: "铁路年客运量",
      type: "三级",
    },
    {
      bsm: 328,
      name: "机场年旅客吞吐量",
      type: "三级",
    },
    {
      bsm: 329,
      name: "国内旅游人数",
      type: "三级",
    },
    {
      bsm: 330,
      name: "入境旅游人数",
      type: "三级",
    },
    {
      bsm: 331,
      name: "国际会议、展览、体育赛事数量",
      type: "三级",
    },
    {
      bsm: 332,
      name: "对外贸易",
      type: "二级",
    },
    {
      bsm: 333,
      name: "机场年货邮吞吐量",
      type: "三级",
    },
    {
      bsm: 334,
      name: "对外贸易进出口总额",
      type: "三级",
    },
    {
      bsm: 335,
      name: "高速公路网密度",
      type: "三级",
    },
    {
      bsm: 336,
      name: "铁路网密度",
      type: "三级",
    },
    {
      bsm: 337,
      name: "市场开放度",
      type: "三级",
    },
    {
      bsm: 338,
      name: "实际利用外资",
      type: "三级",
    },
    {
      bsm: 339,
      name: "绿色",
      type: "一级",
    },
    {
      bsm: 340,
      name: "生态保护",
      type: "二级",
    },
    {
      bsm: 341,
      name: "森林覆盖率",
      type: "三级",
    },
    {
      bsm: 342,
      name: "行政区划",
      type: "四级",
    },
    {
      bsm: 343,
      name: "二调地类图斑",
      type: "四级",
    },
    {
      bsm: 344,
      name: "三调地类图斑",
      type: "四级",
    },
    {
      bsm: 345,
      name: "森林蓄积量",
      type: "三级",
    },
    {
      bsm: 346,
      name: "绿色低碳生产",
      type: "二级",
    },
    {
      bsm: 347,
      name: "每万元GDP地耗",
      type: "三级",
    },
    {
      bsm: 348,
      name: "林地保有量",
      type: "三级",
    },
    {
      bsm: 349,
      name: "草地面积",
      type: "三级",
    },
    {
      bsm: 350,
      name: "新增生态修复面积",
      type: "三级",
    },
    {
      bsm: 351,
      name: "本地指示性物种种类",
      type: "三级",
    },
    {
      bsm: 352,
      name: "每万元GDP水耗",
      type: "三级",
    },
    {
      bsm: 353,
      name: "每万元GDP能耗",
      type: "三级",
    },
    {
      bsm: 354,
      name: "单位GDP二氧化碳排放降低比例",
      type: "三级",
    },
    {
      bsm: 355,
      name: "分布式清洁能源设施覆盖面积",
      type: "三级",
    },
    {
      bsm: 356,
      name: "工业用地地均增加值",
      type: "三级",
    },
    {
      bsm: 357,
      name: "综合管廊长",
      type: "三级",
    },
    {
      bsm: 358,
      name: "绿色低碳生活",
      type: "二级",
    },
    {
      bsm: 359,
      name: "城镇生活垃圾回收利用率",
      type: "三级",
    },
    {
      bsm: 360,
      name: "农村生活垃圾处理率",
      type: "三级",
    },
    {
      bsm: 361,
      name: "绿色交通出行比例",
      type: "三级",
    },
    {
      bsm: 362,
      name: "新建改建建筑中绿色建筑比例",
      type: "三级",
    },
    {
      bsm: 363,
      name: "协调",
      type: "一级",
    },
    {
      bsm: 364,
      name: "集聚集约",
      type: "二级",
    },
    {
      bsm: 365,
      name: "常住人口数量",
      type: "三级",
    },
    {
      bsm: 366,
      name: "人口规模",
      type: "四级",
    },
    {
      bsm: 367,
      name: "城区常住人口密度",
      type: "三级",
    },
    {
      bsm: 368,
      name: "城区范围",
      type: "四级",
    },
    {
      bsm: 369,
      name: "人口规模",
      type: "四级",
    },
    {
      bsm: 370,
      name: "建设用地总面积",
      type: "三级",
    },
    {
      bsm: 371,
      name: "二调地类图斑",
      type: "四级",
    },
    {
      bsm: 372,
      name: "三调地类图斑",
      type: "四级",
    },
    {
      bsm: 373,
      name: "城乡建设用地面积",
      type: "三级",
    },
    {
      bsm: 374,
      name: "二调地类图斑",
      type: "四级",
    },
    {
      bsm: 375,
      name: "三调地类图斑",
      type: "四级",
    },
    {
      bsm: 376,
      name: "城区建筑密度",
      type: "三级",
    },
    {
      bsm: 377,
      name: "城区范围",
      type: "四级",
    },
    {
      bsm: 378,
      name: "建筑物基底",
      type: "四级",
    },
    {
      bsm: 379,
      name: "实际服务管理人口数量",
      type: "三级",
    },
    {
      bsm: 380,
      name: "人口自然增长率",
      type: "三级",
    },
    {
      bsm: 381,
      name: "常住人口城镇化率",
      type: "三级",
    },
    {
      bsm: 382,
      name: "城镇开发边界范围内城乡建设用地面积",
      type: "三级",
    },
    {
      bsm: 383,
      name: "城区建筑总量",
      type: "三级",
    },
    {
      bsm: 384,
      name: "城乡融合",
      type: "二级",
    },
    {
      bsm: 385,
      name: "人均城镇建设用地面积",
      type: "三级",
    },
    {
      bsm: 386,
      name: "人均城镇住宅用地面积",
      type: "三级",
    },
    {
      bsm: 387,
      name: "人均村庄建设用地面积",
      type: "三级",
    },
    {
      bsm: 388,
      name: "等级医院交通30分钟行政村覆盖率",
      type: "三级",
    },
    {
      bsm: 389,
      name: "行政村等级公路通达率",
      type: "三级",
    },
    {
      bsm: 390,
      name: "农村自来水普及率",
      type: "三级",
    },
    {
      bsm: 391,
      name: "城乡居民人均可支配收入比",
      type: "三级",
    },
    {
      bsm: 392,
      name: "地上地下统筹",
      type: "二级",
    },
    {
      bsm: 393,
      name: "人均地下空间面积",
      type: "三级",
    },
  ],
  relation: [
    {
      source: 269,
      target: 298,
      value: "包含",
    },
    {
      source: 272,
      target: 299,
      value: "包含",
    },
    {
      source: 272,
      target: 300,
      value: "包含",
    },
    {
      source: 272,
      target: 301,
      value: "包含",
    },
    {
      source: 272,
      target: 302,
      value: "包含",
    },
    {
      source: 272,
      target: 303,
      value: "包含",
    },
    {
      source: 272,
      target: 304,
      value: "包含",
    },
    {
      source: 272,
      target: 305,
      value: "包含",
    },
    {
      source: 272,
      target: 306,
      value: "包含",
    },
    {
      source: 272,
      target: 307,
      value: "包含",
    },
    {
      source: 272,
      target: 308,
      value: "包含",
    },
    {
      source: 272,
      target: 309,
      value: "包含",
    },
    {
      source: 268,
      target: 310,
      value: "包含",
    },
    {
      source: 310,
      target: 311,
      value: "包含",
    },
    {
      source: 310,
      target: 312,
      value: "包含",
    },
    {
      source: 310,
      target: 313,
      value: "包含",
    },
    {
      source: 310,
      target: 314,
      value: "包含",
    },
    {
      source: 289,
      target: 315,
      value: "包含",
    },
    {
      source: 289,
      target: 316,
      value: "包含",
    },
    {
      source: 289,
      target: 317,
      value: "包含",
    },
    {
      source: 289,
      target: 318,
      value: "包含",
    },
    {
      source: 319,
      target: 320,
      value: "包含",
    },
    {
      source: 320,
      target: 321,
      value: "包含",
    },
    {
      source: 321,
      target: 322,
      value: "包含",
    },
    {
      source: 319,
      target: 323,
      value: "包含",
    },
    {
      source: 323,
      target: 324,
      value: "包含",
    },
    {
      source: 323,
      target: 325,
      value: "包含",
    },
    {
      source: 323,
      target: 326,
      value: "包含",
    },
    {
      source: 320,
      target: 327,
      value: "包含",
    },
    {
      source: 320,
      target: 328,
      value: "包含",
    },
    {
      source: 320,
      target: 329,
      value: "包含",
    },
    {
      source: 320,
      target: 330,
      value: "包含",
    },
    {
      source: 320,
      target: 331,
      value: "包含",
    },
    {
      source: 319,
      target: 332,
      value: "包含",
    },
    {
      source: 332,
      target: 333,
      value: "包含",
    },
    {
      source: 332,
      target: 334,
      value: "包含",
    },
    {
      source: 323,
      target: 335,
      value: "包含",
    },
    {
      source: 323,
      target: 336,
      value: "包含",
    },
    {
      source: 332,
      target: 337,
      value: "包含",
    },
    {
      source: 332,
      target: 338,
      value: "包含",
    },
    {
      source: 339,
      target: 340,
      value: "包含",
    },
    {
      source: 340,
      target: 341,
      value: "包含",
    },
    {
      source: 341,
      target: 342,
      value: "包含",
    },
    {
      source: 341,
      target: 343,
      value: "包含",
    },
    {
      source: 341,
      target: 344,
      value: "包含",
    },
    {
      source: 340,
      target: 345,
      value: "包含",
    },
    {
      source: 339,
      target: 346,
      value: "包含",
    },
    {
      source: 346,
      target: 347,
      value: "包含",
    },
    {
      source: 340,
      target: 348,
      value: "包含",
    },
    {
      source: 340,
      target: 349,
      value: "包含",
    },
    {
      source: 340,
      target: 350,
      value: "包含",
    },
    {
      source: 340,
      target: 351,
      value: "包含",
    },
    {
      source: 346,
      target: 352,
      value: "包含",
    },
    {
      source: 346,
      target: 353,
      value: "包含",
    },
    {
      source: 346,
      target: 354,
      value: "包含",
    },
    {
      source: 346,
      target: 355,
      value: "包含",
    },
    {
      source: 185,
      target: 186,
      value: "包含",
    },
    {
      source: 186,
      target: 187,
      value: "包含",
    },
    {
      source: 186,
      target: 188,
      value: "包含",
    },
    {
      source: 185,
      target: 189,
      value: "包含",
    },
    {
      source: 189,
      target: 190,
      value: "包含",
    },
    {
      source: 190,
      target: 191,
      value: "包含",
    },
    {
      source: 189,
      target: 192,
      value: "包含",
    },
    {
      source: 192,
      target: 193,
      value: "包含",
    },
    {
      source: 192,
      target: 194,
      value: "包含",
    },
    {
      source: 185,
      target: 195,
      value: "包含",
    },
    {
      source: 195,
      target: 196,
      value: "包含",
    },
    {
      source: 196,
      target: 197,
      value: "包含",
    },
    {
      source: 185,
      target: 198,
      value: "包含",
    },
    {
      source: 198,
      target: 199,
      value: "包含",
    },
    {
      source: 199,
      target: 200,
      value: "包含",
    },
    {
      source: 199,
      target: 201,
      value: "包含",
    },
    {
      source: 199,
      target: 202,
      value: "包含",
    },
    {
      source: 185,
      target: 203,
      value: "包含",
    },
    {
      source: 203,
      target: 204,
      value: "包含",
    },
    {
      source: 204,
      target: 205,
      value: "包含",
    },
    {
      source: 204,
      target: 206,
      value: "包含",
    },
    {
      source: 204,
      target: 207,
      value: "包含",
    },
    {
      source: 203,
      target: 208,
      value: "包含",
    },
    {
      source: 208,
      target: 209,
      value: "包含",
    },
    {
      source: 208,
      target: 210,
      value: "包含",
    },
    {
      source: 208,
      target: 211,
      value: "包含",
    },
    {
      source: 203,
      target: 212,
      value: "包含",
    },
    {
      source: 212,
      target: 213,
      value: "包含",
    },
    {
      source: 212,
      target: 214,
      value: "包含",
    },
    {
      source: 203,
      target: 215,
      value: "包含",
    },
    {
      source: 203,
      target: 216,
      value: "包含",
    },
    {
      source: 185,
      target: 217,
      value: "包含",
    },
    {
      source: 217,
      target: 218,
      value: "包含",
    },
    {
      source: 186,
      target: 219,
      value: "包含",
    },
    {
      source: 186,
      target: 220,
      value: "包含",
    },
    {
      source: 186,
      target: 221,
      value: "包含",
    },
    {
      source: 186,
      target: 222,
      value: "包含",
    },
    {
      source: 222,
      target: 223,
      value: "包含",
    },
    {
      source: 222,
      target: 224,
      value: "包含",
    },
    {
      source: 186,
      target: 225,
      value: "包含",
    },
    {
      source: 225,
      target: 226,
      value: "包含",
    },
    {
      source: 225,
      target: 227,
      value: "包含",
    },
    {
      source: 225,
      target: 228,
      value: "包含",
    },
    {
      source: 186,
      target: 229,
      value: "包含",
    },
    {
      source: 186,
      target: 230,
      value: "包含",
    },
    {
      source: 189,
      target: 231,
      value: "包含",
    },
    {
      source: 231,
      target: 232,
      value: "包含",
    },
    {
      source: 195,
      target: 233,
      value: "包含",
    },
    {
      source: 233,
      target: 234,
      value: "包含",
    },
    {
      source: 233,
      target: 235,
      value: "包含",
    },
    {
      source: 233,
      target: 236,
      value: "包含",
    },
    {
      source: 198,
      target: 237,
      value: "包含",
    },
    {
      source: 198,
      target: 238,
      value: "包含",
    },
    {
      source: 203,
      target: 239,
      value: "包含",
    },
    {
      source: 203,
      target: 240,
      value: "包含",
    },
    {
      source: 203,
      target: 241,
      value: "包含",
    },
    {
      source: 203,
      target: 242,
      value: "包含",
    },
    {
      source: 243,
      target: 244,
      value: "包含",
    },
    {
      source: 244,
      target: 245,
      value: "包含",
    },
    {
      source: 244,
      target: 246,
      value: "包含",
    },
    {
      source: 246,
      target: 247,
      value: "包含",
    },
    {
      source: 244,
      target: 248,
      value: "包含",
    },
    {
      source: 248,
      target: 249,
      value: "包含",
    },
    {
      source: 248,
      target: 250,
      value: "包含",
    },
    {
      source: 244,
      target: 251,
      value: "包含",
    },
    {
      source: 244,
      target: 252,
      value: "包含",
    },
    {
      source: 252,
      target: 253,
      value: "包含",
    },
    {
      source: 252,
      target: 254,
      value: "包含",
    },
    {
      source: 243,
      target: 255,
      value: "包含",
    },
    {
      source: 255,
      target: 256,
      value: "包含",
    },
    {
      source: 243,
      target: 257,
      value: "包含",
    },
    {
      source: 257,
      target: 258,
      value: "包含",
    },
    {
      source: 257,
      target: 259,
      value: "包含",
    },
    {
      source: 257,
      target: 260,
      value: "包含",
    },
    {
      source: 257,
      target: 261,
      value: "包含",
    },
    {
      source: 257,
      target: 262,
      value: "包含",
    },
    {
      source: 244,
      target: 263,
      value: "包含",
    },
    {
      source: 244,
      target: 264,
      value: "包含",
    },
    {
      source: 244,
      target: 265,
      value: "包含",
    },
    {
      source: 244,
      target: 266,
      value: "包含",
    },
    {
      source: 244,
      target: 267,
      value: "包含",
    },
    {
      source: 268,
      target: 269,
      value: "包含",
    },
    {
      source: 269,
      target: 270,
      value: "包含",
    },
    {
      source: 270,
      target: 271,
      value: "包含",
    },
    {
      source: 268,
      target: 272,
      value: "包含",
    },
    {
      source: 272,
      target: 273,
      value: "包含",
    },
    {
      source: 273,
      target: 274,
      value: "包含",
    },
    {
      source: 273,
      target: 275,
      value: "包含",
    },
    {
      source: 273,
      target: 276,
      value: "包含",
    },
    {
      source: 273,
      target: 277,
      value: "包含",
    },
    {
      source: 273,
      target: 278,
      value: "包含",
    },
    {
      source: 273,
      target: 279,
      value: "包含",
    },
    {
      source: 273,
      target: 280,
      value: "包含",
    },
    {
      source: 273,
      target: 281,
      value: "包含",
    },
    {
      source: 273,
      target: 282,
      value: "包含",
    },
    {
      source: 273,
      target: 283,
      value: "包含",
    },
    {
      source: 273,
      target: 284,
      value: "包含",
    },
    {
      source: 273,
      target: 285,
      value: "包含",
    },
    {
      source: 272,
      target: 286,
      value: "包含",
    },
    {
      source: 272,
      target: 287,
      value: "包含",
    },
    {
      source: 272,
      target: 288,
      value: "包含",
    },
    {
      source: 268,
      target: 289,
      value: "包含",
    },
    {
      source: 289,
      target: 290,
      value: "包含",
    },
    {
      source: 290,
      target: 291,
      value: "包含",
    },
    {
      source: 290,
      target: 292,
      value: "包含",
    },
    {
      source: 290,
      target: 293,
      value: "包含",
    },
    {
      source: 290,
      target: 294,
      value: "包含",
    },
    {
      source: 269,
      target: 295,
      value: "包含",
    },
    {
      source: 269,
      target: 296,
      value: "包含",
    },
    {
      source: 269,
      target: 297,
      value: "包含",
    },
    {
      source: 346,
      target: 356,
      value: "包含",
    },
    {
      source: 346,
      target: 357,
      value: "包含",
    },
    {
      source: 339,
      target: 358,
      value: "包含",
    },
    {
      source: 358,
      target: 359,
      value: "包含",
    },
    {
      source: 358,
      target: 360,
      value: "包含",
    },
    {
      source: 358,
      target: 361,
      value: "包含",
    },
    {
      source: 358,
      target: 362,
      value: "包含",
    },
    {
      source: 363,
      target: 364,
      value: "包含",
    },
    {
      source: 364,
      target: 365,
      value: "包含",
    },
    {
      source: 365,
      target: 366,
      value: "包含",
    },
    {
      source: 364,
      target: 367,
      value: "包含",
    },
    {
      source: 367,
      target: 368,
      value: "包含",
    },
    {
      source: 367,
      target: 369,
      value: "包含",
    },
    {
      source: 364,
      target: 370,
      value: "包含",
    },
    {
      source: 370,
      target: 371,
      value: "包含",
    },
    {
      source: 370,
      target: 372,
      value: "包含",
    },
    {
      source: 364,
      target: 373,
      value: "包含",
    },
    {
      source: 373,
      target: 374,
      value: "包含",
    },
    {
      source: 373,
      target: 375,
      value: "包含",
    },
    {
      source: 364,
      target: 376,
      value: "包含",
    },
    {
      source: 376,
      target: 377,
      value: "包含",
    },
    {
      source: 376,
      target: 378,
      value: "包含",
    },
    {
      source: 364,
      target: 379,
      value: "包含",
    },
    {
      source: 364,
      target: 380,
      value: "包含",
    },
    {
      source: 364,
      target: 381,
      value: "包含",
    },
    {
      source: 364,
      target: 382,
      value: "包含",
    },
    {
      source: 364,
      target: 383,
      value: "包含",
    },
    {
      source: 363,
      target: 384,
      value: "包含",
    },
    {
      source: 384,
      target: 385,
      value: "包含",
    },
    {
      source: 384,
      target: 386,
      value: "包含",
    },
    {
      source: 384,
      target: 387,
      value: "包含",
    },
    {
      source: 384,
      target: 388,
      value: "包含",
    },
    {
      source: 384,
      target: 389,
      value: "包含",
    },
    {
      source: 384,
      target: 390,
      value: "包含",
    },
    {
      source: 384,
      target: 391,
      value: "包含",
    },
    {
      source: 363,
      target: 392,
      value: "包含",
    },
    {
      source: 392,
      target: 393,
      value: "包含",
    },
  ],
};
