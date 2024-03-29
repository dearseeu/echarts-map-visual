// 地图数据
var province = {
  yunnan: '../static/map/province/yunnan.json',
}

var country = {
  大理白族自治州: '../static/map/country/大理白族自治州.geoJson'
}

var village = {
  大理市: '../static/map/village/大理市.json'
}

// 市级数据

// 监管对象
var mapDataJgdx = [
  { name: "大理白族自治州", value: 452 },
  { name: "昆明市", value: 432 },
  { name: "玉溪市", value: 412 },
  { name: "保山市", value: 392 },
  { name: "昭通市", value: 372 },
  { name: "丽江市", value: 352 },
  { name: "曲靖市", value: 332 },
  { name: "普洱市", value: 312 },
  { name: "临沧市", value: 302 },
  { name: "楚雄彝族自治州", value: 282 },
  { name: "红河哈尼族彝族自治州", value: 262 },
  { name: "文山壮族苗族自治州", value: 242 },
  { name: "德宏傣族景颇族自治州", value: 222 },
  { name: "怒江傈僳族自治州", value: 202 },
  { name: "迪庆藏族自治州", value: 182 },
  { name: "西双版纳傣族自治州", value: 162 }
];
// 隐患
var mapDataYh = [
  { name: "大理白族自治州", value: 4520 },
  { name: "昆明市", value: 4320 },
  { name: "玉溪市", value: 4120 },
  { name: "保山市", value: 3920 },
  { name: "昭通市", value: 3720 },
  { name: "丽江市", value: 3520 },
  { name: "曲靖市", value: 3320 },
  { name: "普洱市", value: 3120 },
  { name: "临沧市", value: 3020 },
  { name: "楚雄彝族自治州", value: 2820 },
  { name: "红河哈尼族彝族自治州", value: 2620 },
  { name: "文山壮族苗族自治州", value: 2420 },
  { name: "德宏傣族景颇族自治州", value: 2220 },
  { name: "怒江傈僳族自治州", value: 2020 },
  { name: "迪庆藏族自治州", value: 1820 },
  { name: "西双版纳傣族自治州", value: 1620 }
];
// 事故
var mapDataSg = [
  { name: "大理白族自治州", value: 22 },
  { name: "昆明市", value: 20 },
  { name: "玉溪市", value: 24 },
  { name: "保山市", value: 18 },
  { name: "昭通市", value: 19 },
  { name: "丽江市", value: 16 },
  { name: "曲靖市", value: 15 },
  { name: "普洱市", value: 26 },
  { name: "临沧市", value: 23 },
  { name: "楚雄彝族自治州", value: 6 },
  { name: "红河哈尼族彝族自治州", value: 21 },
  { name: "文山壮族苗族自治州", value: 30 },
  { name: "德宏傣族景颇族自治州", value: 14 },
  { name: "怒江傈僳族自治州", value: 12 },
  { name: "迪庆藏族自治州", value: 10 },
  { name: "西双版纳傣族自治州", value: 8 }
];
// 风险
var mapDataFx = [
  { name: "大理白族自治州", value: 452 * 7 },
  { name: "昆明市", value: 432 * 7 },
  { name: "玉溪市", value: 412 * 7 },
  { name: "保山市", value: 392 * 7 },
  { name: "昭通市", value: 372 * 7 },
  { name: "丽江市", value: 352 * 7 },
  { name: "曲靖市", value: 332 * 7 },
  { name: "普洱市", value: 312 * 7 },
  { name: "临沧市", value: 302 * 7 },
  { name: "楚雄彝族自治州", value: 282 * 7 },
  { name: "红河哈尼族彝族自治州", value: 262 * 7 },
  { name: "文山壮族苗族自治州", value: 242 * 7 },
  { name: "德宏傣族景颇族自治州", value: 222 * 7 },
  { name: "怒江傈僳族自治州", value: 202 * 7 },
  { name: "迪庆藏族自治州", value: 182 * 7 },
  { name: "西双版纳傣族自治州", value: 162 * 7 }
];
// 危险源
var mapDataWxy = [
  { name: "大理白族自治州", value: parseInt(452 / 60) },
  { name: "昆明市", value: parseInt(432 / 60) },
  { name: "玉溪市", value: parseInt(412 / 60) },
  { name: "保山市", value: parseInt(392 / 60) },
  { name: "昭通市", value: parseInt(372 / 60) },
  { name: "丽江市", value: parseInt(352 / 60) },
  { name: "曲靖市", value: parseInt(332 / 60) },
  { name: "普洱市", value: parseInt(312 / 60) },
  { name: "临沧市", value: parseInt(302 / 60) },
  { name: "楚雄彝族自治州", value: parseInt(282 / 60) },
  { name: "红河哈尼族彝族自治州", value: parseInt(262 / 60) },
  { name: "文山壮族苗族自治州", value: parseInt(242 / 60) },
  { name: "德宏傣族景颇族自治州", value: parseInt(222 / 60) },
  { name: "怒江傈僳族自治州", value: parseInt(202 / 60) },
  { name: "迪庆藏族自治州", value: parseInt(182 / 60) },
  { name: "西双版纳傣族自治州", value: parseInt(162 / 60) }
];
// 监督检查
var mapDataJdjc = [
  { name: "大理白族自治州", value: parseInt(452 / 8) },
  { name: "昆明市", value: parseInt(432 / 8) },
  { name: "玉溪市", value: parseInt(412 / 8) },
  { name: "保山市", value: parseInt(392 / 8) },
  { name: "昭通市", value: parseInt(372 / 8) },
  { name: "丽江市", value: parseInt(352 / 8) },
  { name: "曲靖市", value: parseInt(332 / 8) },
  { name: "普洱市", value: parseInt(312 / 8) },
  { name: "临沧市", value: parseInt(302 / 8) },
  { name: "楚雄彝族自治州", value: parseInt(282 / 8) },
  { name: "红河哈尼族彝族自治州", value: parseInt(262 / 8) },
  { name: "文山壮族苗族自治州", value: parseInt(242 / 8) },
  { name: "德宏傣族景颇族自治州", value: parseInt(222 / 8) },
  { name: "怒江傈僳族自治州", value: parseInt(202 / 8) },
  { name: "迪庆藏族自治州", value: parseInt(182 / 8) },
  { name: "西双版纳傣族自治州", value: parseInt(162 / 8) }
];


// 县级数据

// 监管对象
// 监管总览
var mapDataJgdxTotal = [
  { name: '大理市', value: [100.237672, 25.601795, 40] },
  { name: '漾濞县', value: [99.907291, 25.607376, 38] },
  { name: '祥云县', value: [100.758026, 25.387692, 36] },
  { name: '宾川县', value: [100.479028, 25.804175, 34] },
  { name: '弥渡县', value: [100.507588, 25.240788, 33] },
  { name: '南涧县', value: [100.477845, 24.975069, 35] },
  { name: '巍山县', value: [100.204612, 25.308073, 30] },
  { name: '永平县', value: [99.608645, 25.259588, 28] },
  { name: '云龙县', value: [99.338569, 25.784522, 26] },
  { name: '洱源县', value: [99.999213, 26.072185, 24] },
  { name: '剑川县', value: [99.613815, 26.325193, 22] },
  { name: '鹤庆县', value: [100.283064, 26.159394, 20] },
];
// 监管分布
//旅游包车
var mapDataJgdxScatterA = [
  { name: "大理快速汽车客运站", value: [100.2371, 25.58913] },
  { name: "大理汽车客运站新站", value: [100.2594, 25.5979] },
  { name: "大理古城旅游汽车客运站", value: [100.1754, 25.69312] },
  { name: "大理兴盛客运站", value: [100.2308, 25.57857] },
  { name: "火车客运站", value: [100.2566, 25.59592] },
  {
    name: "云南大理交通运输集团公司南涧分公司客运站",
    value: [100.5312, 25.05227]
  },
  { name: "辛屯客运站", value: [100.2229, 26.6558] },
  { name: "凤羽客运站", value: [99.93466, 25.99489] },
  { name: "黄坪客运站", value: [100.2657, 26.10981] },
  { name: "力角客运站", value: [100.5951, 25.92905] },
  { name: "弥沙客运站", value: [99.68227, 26.34332] },
  { name: "苗尾客运站", value: [99.13371, 26.08343] },
  { name: "拉乌客运站", value: [100.8647, 25.92667] },
  { name: "漾濞客运站", value: [99.96477, 25.67226] },
  { name: "杉阳客运站", value: [99.39613, 25.32229] },
  { name: "青华客运站", value: [100.2278, 25.02615] },
  { name: "松桂镇客运站", value: [100.2123, 26.35735] }
];
//班线客运
var mapDataJgdxScatterB = [
  { name: "福利小车汽修站", value: [100.2885, 25.30934] },
  { name: "大理市正源汽车修理站", value: [100.2259, 25.62709] },
  { name: "丽昌汽车修理服务站", value: [99.6086, 26.44687] },
  { name: "老禇汽修", value: [100.1821, 26.55117] },
  { name: "白氏汽修", value: [100.606, 25.83914] },
  { name: "恒誉汽修", value: [100.1955, 25.67667] },
  { name: "阿五汽修", value: [100.2265, 25.62744] },
  { name: "康达汽修", value: [100.5839, 25.82419] },
  { name: "延丰汽修", value: [99.98997, 26.13274] },
  { name: "宏达汽修厂", value: [100.5689, 25.81885] },
  { name: "宏发汽配汽修", value: [100.1834, 26.55649] },
  { name: "宾川眼镜汽修", value: [100.5677, 25.81709] },
  { name: "大理顺兴汽修", value: [100.1715, 25.71564] },
  { name: "大众汽车修理中心", value: [100.2262, 25.57809] },
  { name: "大理市永辉汽车修理部", value: [100.1759, 25.68256] },
  { name: "江都汽车修理厂", value: [100.2117, 26.35005] },
  { name: "兴达汽车修理厂", value: [100.5934, 25.92185] },
  { name: "万成汽车修理厂", value: [99.56658, 26.59386] }
];
//客运站场
var mapDataJgdxScatterC = [
  { name: "祥云客运站", value: [100.5599, 25.48689] },
  { name: "双廊客运站", value: [100.1942, 25.92862] },
  { name: "弥渡客运站", value: [100.4942, 25.35555] },
  { name: "鹤庆客运站", value: [100.1847, 26.56651] },
  { name: "曲硐客运站", value: [99.53685, 25.43289] },
  { name: "剑川客运站", value: [99.91241, 26.53198] },
  { name: "喜洲客运站", value: [100.1346, 25.85553] },
  { name: "富恒客运站", value: [99.68832, 25.65314] },
  { name: "禾甸客运站", value: [100.7575, 25.69094] },
  { name: "乔后客运站", value: [99.77411, 26.10169] },
  { name: "炼铁客运站", value: [99.81273, 25.98958] },
  { name: "永平县城乡客运站", value: [99.53248, 25.46336] },
  { name: "三营客运站", value: [100.0044, 26.22605] },
  { name: "龙街客运站", value: [99.78757, 25.33623] },
  { name: "红岩客运站", value: [100.4315, 25.43211] },
  { name: "大仓客运站", value: [100.2283, 25.4215] }
];
// 危险货物运输
var mapDataJgdxScatterD = [
  { name: "牛街客运站", value: [100.087, 25.03978] },
  { name: "庙街客运站", value: [100.2822, 25.31521] },
  { name: "沙溪客运站", value: [99.85734, 26.32327] },
  { name: "宾川县客运站", value: [100.5893, 25.82785] },
  { name: "龙门乡客运站", value: [99.51625, 25.52311] },
  { name: "云龙县客运站", value: [99.37659, 25.88862] },
  { name: "北斗乡客运站", value: [99.6971, 25.54494] },
  { name: "德苴乡客运站", value: [100.657, 25.12202] },
  {
    name: "大理交通运输集团公司弥渡分公司红星客运站",
    value: [100.5787, 25.36381]
  },
  { name: "洱源汽车客运站", value: [99.96693, 26.1166] },
  { name: "永建农村客运站", value: [100.2214, 25.43136] },
  { name: "米甸汽车客运站", value: [100.7575, 25.69094] },
  { name: "巍山汽车客运站", value: [100.3068, 25.23552] },
  { name: "南涧县拥翠乡农村客运站", value: [100.3926, 24.94099] },
  { name: "宾川县钟英农村客运站", value: [100.7663, 26.16344] },
  { name: "水泄乡客运站", value: [99.74638, 25.14841] },
  {
    name: "巍山县客货运输服务有限公司紫金客运站",
    value: [99.74638, 25.14841]
  }
];

// 隐患
// 隐患总览
var mapDataYhTotal = [
  { name: '大理市', value: [100.237672, 25.601795, 40 * 10] },
  { name: '漾濞县', value: [99.907291, 25.607376, 38 * 10] },
  { name: '祥云县', value: [100.758026, 25.387692, 36 * 10] },
  { name: '宾川县', value: [100.479028, 25.804175, 34 * 10] },
  { name: '弥渡县', value: [100.507588, 25.240788, 33 * 10] },
  { name: '南涧县', value: [100.477845, 24.975069, 35 * 10] },
  { name: '巍山县', value: [100.204612, 25.308073, 30 * 10] },
  { name: '永平县', value: [99.608645, 25.259588, 28 * 10] },
  { name: '云龙县', value: [99.338569, 25.784522, 26 * 10] },
  { name: '洱源县', value: [99.999213, 26.072185, 24 * 10] },
  { name: '剑川县', value: [99.613815, 26.325193, 22 * 10] },
  { name: '鹤庆县', value: [100.283064, 26.159394, 20 * 10] },
];
// 隐患分布
//一般隐患
var mapDataYhScatterA = [
  { name: "大理快速汽车客运站", value: [100.2371, 25.58913, 10] },
  { name: "大理汽车客运站新站", value: [100.2594, 25.5979, 9] },
  { name: "大理古城旅游汽车客运站", value: [100.1754, 25.69312, 8] },
  { name: "大理兴盛客运站", value: [100.2308, 25.57857, 7] },
  { name: "火车客运站", value: [100.2566, 25.59592, 2] },
  { name: "云南大理交通运输集团公司南涧分公司客运站", value: [100.5312, 25.05227, 6] },
  { name: "辛屯客运站", value: [100.2229, 26.6558, 5] },
  { name: "凤羽客运站", value: [99.93466, 25.99489, 6] },
  { name: "祥云客运站", value: [100.5599, 25.48689, 7] },
  { name: "双廊客运站", value: [100.1942, 25.92862, 8] },
  { name: "弥渡客运站", value: [100.4942, 25.35555, 9] },
  { name: "鹤庆客运站", value: [100.1847, 26.56651, 10] },
  { name: "曲硐客运站", value: [99.53685, 25.43289, 11] },
  { name: "剑川客运站", value: [99.91241, 26.53198, 12] },
  { name: "喜洲客运站", value: [100.1346, 25.85553, 13] },
  { name: "富恒客运站", value: [99.68832, 25.65314, 14] },
  { name: "禾甸客运站", value: [100.7575, 25.69094, 15] },
  { name: "北斗乡客运站", value: [99.6971, 25.54494, 12] },
  { name: "德苴乡客运站", value: [100.657, 25.12202, 11] },
  { name: "大理交通运输集团公司弥渡分公司红星客运站", value: [100.5787, 25.36381, 10] },
  { name: "洱源汽车客运站", value: [99.96693, 26.1166, 9] },
  { name: "永建农村客运站", value: [100.2214, 25.43136, 8] },
  { name: "米甸汽车客运站", value: [100.7575, 25.69094, 7] },
  { name: "巍山汽车客运站", value: [100.3068, 25.23552, 6] },
  { name: "南涧县拥翠乡农村客运站", value: [100.3926, 24.94099, 5] },
  { name: "宾川县钟英农村客运站", value: [100.7663, 26.16344, 15] },
  { name: "水泄乡客运站", value: [99.74638, 25.14841, 20] },
  { name: "巍山县客货运输服务有限公司紫金客运站", value: [99.74638, 25.14841, 25] },
  { name: "福利小车汽修站", value: [100.2885, 25.30934, 15] },
  { name: "大理市正源汽车修理站", value: [100.2259, 25.62709, 20] },
  { name: "丽昌汽车修理服务站", value: [99.6086, 26.44687, 25] },
  { name: "老禇汽修", value: [100.1821, 26.55117, 23] },
  { name: "白氏汽修", value: [100.606, 25.83914, 21] },
  { name: "恒誉汽修", value: [100.1955, 25.67667, 19] },
  { name: "阿五汽修", value: [100.2265, 25.62744, 17] },
  { name: "康达汽修", value: [100.5839, 25.82419, 15] },
  { name: "延丰汽修", value: [99.98997, 26.13274, 13] },
  { name: "宏达汽修厂", value: [100.5689, 25.81885, 11] },
  { name: "宏发汽配汽修", value: [100.1834, 26.55649, 9] },
  { name: "宾川眼镜汽修", value: [100.5677, 25.81709, 7] },
  { name: "大理顺兴汽修", value: [100.1715, 25.71564, 8] },
  { name: "大众汽车修理中心", value: [100.2262, 25.57809, 10] },
  { name: "大理市永辉汽车修理部", value: [100.1759, 25.68256, 12] },
  { name: "江都汽车修理厂", value: [100.2117, 26.35005, 14] },
  { name: "兴达汽车修理厂", value: [100.5934, 25.92185, 16] },
  { name: "万成汽车修理厂", value: [99.56658, 26.59386, 18] }
]
//重大隐患
var mapDataYhScatterB = [
  { name: "大理快速汽车客运站", value: [100.2371, 25.58913, 2] },
  { name: "大理汽车客运站新站", value: [100.2594, 25.5979, 1] },
  { name: "大理古城旅游汽车客运站", value: [100.1754, 25.69312, 3] },
  { name: "大理兴盛客运站", value: [100.2308, 25.57857, 2] },
  { name: "火车客运站", value: [100.2566, 25.59592, 2] },
  { name: "云南大理交通运输集团公司南涧分公司客运站", value: [100.5312, 25.05227, 2] },
  { name: "辛屯客运站", value: [100.2229, 26.6558, 1] },
  { name: "凤羽客运站", value: [99.93466, 25.99489, 3] },
  { name: "祥云客运站", value: [100.5599, 25.48689, 2] },
  { name: "喜洲客运站", value: [100.1346, 25.85553, 3] },
  { name: "富恒客运站", value: [99.68832, 25.65314, 2] },
  { name: "禾甸客运站", value: [100.7575, 25.69094, 1] },
  { name: "北斗乡客运站", value: [99.6971, 25.54494, 4] },
  { name: "德苴乡客运站", value: [100.657, 25.12202, 2] },
  { name: "洱源汽车客运站", value: [99.96693, 26.1166, 2] },
  { name: "永建农村客运站", value: [100.2214, 25.43136, 1] },
  { name: "米甸汽车客运站", value: [100.7575, 25.69094, 3] },
  { name: "巍山汽车客运站", value: [100.3068, 25.23552, 2] },
  { name: "南涧县拥翠乡农村客运站", value: [100.3926, 24.94099, 3] },
  { name: "宾川县钟英农村客运站", value: [100.7663, 26.16344, 4] },
  { name: "水泄乡客运站", value: [99.74638, 25.14841, 1] },
  { name: "巍山县客货运输服务有限公司紫金客运站", value: [99.74638, 25.14841, 2] },
  { name: "福利小车汽修站", value: [100.2885, 25.30934, 2] },
  { name: "大理市正源汽车修理站", value: [100.2259, 25.62709, 1] },
  { name: "丽昌汽车修理服务站", value: [99.6086, 26.44687, 2] },
  { name: "老禇汽修", value: [100.1821, 26.55117, 2] },
  { name: "白氏汽修", value: [100.606, 25.83914, 2] },
  { name: "恒誉汽修", value: [100.1955, 25.67667, 3] },
  { name: "阿五汽修", value: [100.2265, 25.62744, 1] },
  { name: "大理市永辉汽车修理部", value: [100.1759, 25.68256, 1] },
  { name: "江都汽车修理厂", value: [100.2117, 26.35005, 2] },
  { name: "兴达汽车修理厂", value: [100.5934, 25.92185, 2] },
  { name: "万成汽车修理厂", value: [99.56658, 26.59386, 1] }
]


// 事故
// 总览数据
var mapDataSgTotal = [
  { name: '大理市', value: [100.237672, 25.601795, parseInt(40 / 8)] },
  { name: '漾濞县', value: [99.907291, 25.607376, parseInt(38 / 8)] },
  { name: '祥云县', value: [100.758026, 25.387692, parseInt(36 / 8)] },
  { name: '宾川县', value: [100.479028, 25.804175, parseInt(34 / 8)] },
  { name: '弥渡县', value: [100.507588, 25.240788, parseInt(33 / 8)] },
  { name: '南涧县', value: [100.477845, 24.975069, parseInt(35 / 8)] },
  { name: '巍山县', value: [100.204612, 25.308073, parseInt(30 / 8)] },
  { name: '永平县', value: [99.608645, 25.259588, parseInt(28 / 8)] },
  { name: '云龙县', value: [99.338569, 25.784522, parseInt(26 / 8)] },
  { name: '洱源县', value: [99.999213, 26.072185, parseInt(24 / 8)] },
  { name: '剑川县', value: [99.613815, 26.325193, parseInt(22 / 8)] },
  { name: '鹤庆县', value: [100.283064, 26.159394, parseInt(20 / 8)] },
];
//  分布数据
//一般事故
var mapDataSgScatterA = [
  { name: "大理快速汽车客运站", value: [100.2371, 25.58913, 6] },
  { name: "大理汽车客运站新站", value: [100.2594, 25.5979, 7] },
  { name: "大理古城旅游汽车客运站", value: [100.1754, 25.69312, 8] },
  { name: "大理兴盛客运站", value: [100.2308, 25.57857, 5] },
  { name: "火车客运站", value: [100.2566, 25.59592, 4] },
  { name: "水泄乡客运站", value: [99.74638, 25.14841, 3] },
  { name: "巍山县客货运输服务有限公司紫金客运站", value: [99.74638, 25.14841, 4] },
  { name: "福利小车汽修站", value: [100.2885, 25.30934, 5] },
  { name: "大理市正源汽车修理站", value: [100.2259, 25.62709, 6] },
  { name: "丽昌汽车修理服务站", value: [99.6086, 26.44687, 9] },
  { name: "祥云客运站", value: [100.5599, 25.48689, 7] },
  { name: "喜洲客运站", value: [100.1346, 25.85553, 5] },
]
//较大事故
var mapDataSgScatterB = [
  { name: "富恒客运站", value: [99.68832, 25.65314, 1] },
  { name: "禾甸客运站", value: [100.7575, 25.69094, 2] },
  { name: "巍山汽车客运站", value: [100.3068, 25.23552, 1] },
  { name: "南涧县拥翠乡农村客运站", value: [100.3926, 24.94099, 2] },
  { name: "云南大理交通运输集团公司南涧分公司客运站", value: [100.5312, 25.05227, 1] },
  { name: "辛屯客运站", value: [100.2229, 26.6558, 2] },
  { name: "凤羽客运站", value: [99.93466, 25.99489, 1] },
]
//重大事故
var mapDataSgScatterC = [
  { name: "北斗乡客运站", value: [99.6971, 25.54494, 1] },
  { name: "德苴乡客运站", value: [100.657, 25.12202, 1] },
  { name: "洱源汽车客运站", value: [99.96693, 26.1166, 1] },
  { name: "永建农村客运站", value: [100.2214, 25.43136, 1] },
  { name: "米甸汽车客运站", value: [100.7575, 25.69094, 1] },
]
// 特别重大事故
var mapDataSgScatterD = [
  { name: "宾川县钟英农村客运站", value: [100.7663, 26.16344, 1] },
]


//风险
//总览数据
var mapDataFxTotal = [
  { name: '大理市', value: [100.237672, 25.601795, 40 * 7] },
  { name: '漾濞县', value: [99.907291, 25.607376, 38 * 7] },
  { name: '祥云县', value: [100.758026, 25.387692, 36 * 7] },
  { name: '宾川县', value: [100.479028, 25.804175, 34 * 7] },
  { name: '弥渡县', value: [100.507588, 25.240788, 33 * 7] },
  { name: '南涧县', value: [100.477845, 24.975069, 35 * 7] },
  { name: '巍山县', value: [100.204612, 25.308073, 30 * 7] },
  { name: '永平县', value: [99.608645, 25.259588, 28 * 7] },
  { name: '云龙县', value: [99.338569, 25.784522, 26 * 7] },
  { name: '洱源县', value: [99.999213, 26.072185, 24 * 7] },
  { name: '剑川县', value: [99.613815, 26.325193, 22 * 7] },
  { name: '鹤庆县', value: [100.283064, 26.159394, 20 * 7] },
];
//分布数据
//较小风险
var mapDataFxScatterA = [
  { name: "大理快速汽车客运站", value: [100.2371, 25.58913, 10] },
  { name: "大理汽车客运站新站", value: [100.2594, 25.5979, 9] },
  { name: "大理古城旅游汽车客运站", value: [100.1754, 25.69312, 8] },
  { name: "大理兴盛客运站", value: [100.2308, 25.57857, 7] },
  { name: "火车客运站", value: [100.2566, 25.59592, 2] },
  { name: "云南大理交通运输集团公司南涧分公司客运站", value: [100.5312, 25.05227, 6] },
  { name: "辛屯客运站", value: [100.2229, 26.6558, 5] },
  { name: "凤羽客运站", value: [99.93466, 25.99489, 6] },
  { name: "祥云客运站", value: [100.5599, 25.48689, 7] },
  { name: "双廊客运站", value: [100.1942, 25.92862, 8] },
  { name: "弥渡客运站", value: [100.4942, 25.35555, 9] },
]
//一般风险
var mapDataFxScatterB = [
  { name: "鹤庆客运站", value: [100.1847, 26.56651, 10] },
  { name: "曲硐客运站", value: [99.53685, 25.43289, 11] },
  { name: "剑川客运站", value: [99.91241, 26.53198, 12] },
  { name: "喜洲客运站", value: [100.1346, 25.85553, 13] },
  { name: "富恒客运站", value: [99.68832, 25.65314, 14] },
  { name: "禾甸客运站", value: [100.7575, 25.69094, 15] },
  { name: "北斗乡客运站", value: [99.6971, 25.54494, 12] },
  { name: "德苴乡客运站", value: [100.657, 25.12202, 11] },
  { name: "大理交通运输集团公司弥渡分公司红星客运站", value: [100.5787, 25.36381, 10] },
  { name: "洱源汽车客运站", value: [99.96693, 26.1166, 9] },
  { name: "永建农村客运站", value: [100.2214, 25.43136, 8] },
  { name: "米甸汽车客运站", value: [100.7575, 25.69094, 7] },
  { name: "巍山汽车客运站", value: [100.3068, 25.23552, 6] },
  { name: "南涧县拥翠乡农村客运站", value: [100.3926, 24.94099, 5] },
  { name: "宾川县钟英农村客运站", value: [100.7663, 26.16344, 15] },
  { name: "水泄乡客运站", value: [99.74638, 25.14841, 20] },
]
//较大风险
var mapDataFxScatterC = [
  { name: "巍山县客货运输服务有限公司紫金客运站", value: [99.74638, 25.14841, 25] },
  { name: "福利小车汽修站", value: [100.2885, 25.30934, 15] },
  { name: "大理市正源汽车修理站", value: [100.2259, 25.62709, 20] },
  { name: "丽昌汽车修理服务站", value: [99.6086, 26.44687, 25] },
  { name: "老禇汽修", value: [100.1821, 26.55117, 23] },
  { name: "白氏汽修", value: [100.606, 25.83914, 21] },
  { name: "恒誉汽修", value: [100.1955, 25.67667, 19] },
  { name: "阿五汽修", value: [100.2265, 25.62744, 17] },
  { name: "康达汽修", value: [100.5839, 25.82419, 15] },
  { name: "延丰汽修", value: [99.98997, 26.13274, 13] },
  { name: "宏达汽修厂", value: [100.5689, 25.81885, 11] },
  { name: "宏发汽配汽修", value: [100.1834, 26.55649, 9] },
  { name: "宾川眼镜汽修", value: [100.5677, 25.81709, 7] },
]
// 重大风险
var mapDataFxScatterD = [
  { name: "大理顺兴汽修", value: [100.1715, 25.71564, 8] },
  { name: "大众汽车修理中心", value: [100.2262, 25.57809, 10] },
  { name: "大理市永辉汽车修理部", value: [100.1759, 25.68256, 12] },
  { name: "江都汽车修理厂", value: [100.2117, 26.35005, 14] },
  { name: "兴达汽车修理厂", value: [100.5934, 25.92185, 16] },
  { name: "万成汽车修理厂", value: [99.56658, 26.59386, 18] }
]


// 危险源
//  总览数据
var mapDataWxyTotal = [
  { name: '大理市', value: [100.237672, 25.601795, parseInt(40 / 3)] },
  { name: '漾濞县', value: [99.907291, 25.607376, parseInt(38 / 3)] },
  { name: '祥云县', value: [100.758026, 25.387692, parseInt(36 / 3)] },
  { name: '宾川县', value: [100.479028, 25.804175, parseInt(34 / 3)] },
  { name: '弥渡县', value: [100.507588, 25.240788, parseInt(33 / 3)] },
  { name: '南涧县', value: [100.477845, 24.975069, parseInt(35 / 3)] },
  { name: '巍山县', value: [100.204612, 25.308073, parseInt(30 / 3)] },
  { name: '永平县', value: [99.608645, 25.259588, parseInt(28 / 3)] },
  { name: '云龙县', value: [99.338569, 25.784522, parseInt(26 / 3)] },
  { name: '洱源县', value: [99.999213, 26.072185, parseInt(24 / 3)] },
  { name: '剑川县', value: [99.613815, 26.325193, parseInt(22 / 3)] },
  { name: '鹤庆县', value: [100.283064, 26.159394, parseInt(20 / 3)] },
];
// 分布数据
var mapDataWxyScatter = [
  { name: "大理快速汽车客运站", value: [100.2371, 25.58913, 1] },
  { name: "禾甸客运站", value: [100.7575, 25.69094, 1] },
  { name: "鹤庆客运站", value: [100.1847, 26.56651, 1] },
  { name: "曲硐客运站", value: [99.53685, 25.43289, 1] },
  { name: "杉阳客运站", value: [99.39613, 25.32229, 1] },
  { name: "巍山县客货运输服务有限公司紫金客运站", value: [99.74638, 25.14841, 1] }
]


// 监督检查
//  总览数据
var mapDataJdjcTotal = [
  { name: '大理市', value: [100.237672, 25.601795, parseInt(40 / 5)] },
  { name: '漾濞县', value: [99.907291, 25.607376, parseInt(38 / 5)] },
  { name: '祥云县', value: [100.758026, 25.387692, parseInt(36 / 5)] },
  { name: '宾川县', value: [100.479028, 25.804175, parseInt(34 / 5)] },
  { name: '弥渡县', value: [100.507588, 25.240788, parseInt(33 / 5)] },
  { name: '南涧县', value: [100.477845, 24.975069, parseInt(35 / 5)] },
  { name: '巍山县', value: [100.204612, 25.308073, parseInt(30 / 5)] },
  { name: '永平县', value: [99.608645, 25.259588, parseInt(28 / 5)] },
  { name: '云龙县', value: [99.338569, 25.784522, parseInt(26 / 5)] },
  { name: '洱源县', value: [99.999213, 26.072185, parseInt(24 / 5)] },
  { name: '剑川县', value: [99.613815, 26.325193, parseInt(22 / 5)] },
  { name: '鹤庆县', value: [100.283064, 26.159394, parseInt(20 / 5)] },
];
// 分布数据
//旅游包车
var mapDataJdjcScatterA = [
  { name: "大理快速汽车客运站", value: [100.2371, 25.58913, 3] },
  { name: "大理汽车客运站新站", value: [100.2594, 25.5979, 2] },
  { name: "大理古城旅游汽车客运站", value: [100.1754, 25.69312, 3] },
  { name: "大理兴盛客运站", value: [100.2308, 25.57857, 1] },
  { name: "火车客运站", value: [100.2566, 25.59592, 4] },
  { name: "云南大理交通运输集团公司南涧分公司客运站", value: [100.5312, 25.05227, 2] },
  { name: "辛屯客运站", value: [100.2229, 26.6558, 1] },
  { name: "凤羽客运站", value: [99.93466, 25.99489, 2] },
  { name: "黄坪客运站", value: [100.2657, 26.10981, 5] },
  { name: "力角客运站", value: [100.5951, 25.92905, 4] },
  { name: "弥沙客运站", value: [99.68227, 26.34332, 3] },
  { name: "苗尾客运站", value: [99.13371, 26.08343, 4] },
  { name: "拉乌客运站", value: [100.8647, 25.92667, 6] },
  { name: "漾濞客运站", value: [99.96477, 25.67226, 7] },
  { name: "杉阳客运站", value: [99.39613, 25.32229, 8] },
  { name: "青华客运站", value: [100.2278, 25.02615, 9] },
  { name: "松桂镇客运站", value: [100.2123, 26.35735, 5] },
]
//班线客运
var mapDataJdjcScatterB = [
  { name: "福利小车汽修站", value: [100.2885, 25.30934, 5] },
  { name: "大理市正源汽车修理站", value: [100.2259, 25.62709, 6] },
  { name: "丽昌汽车修理服务站", value: [99.6086, 26.44687, 7] },
  { name: "老禇汽修", value: [100.1821, 26.55117, 8] },
  { name: "白氏汽修", value: [100.606, 25.83914, 4] },
  { name: "恒誉汽修", value: [100.1955, 25.67667, 5] },
  { name: "阿五汽修", value: [100.2265, 25.62744, 6] },
  { name: "康达汽修", value: [100.5839, 25.82419, 7] },
  { name: "延丰汽修", value: [99.98997, 26.13274, 3] },
  { name: "宏达汽修厂", value: [100.5689, 25.81885, 5] },
  { name: "宏发汽配汽修", value: [100.1834, 26.55649, 6] },
  { name: "宾川眼镜汽修", value: [100.5677, 25.81709, 7] },
  { name: "大理顺兴汽修", value: [100.1715, 25.71564, 8] },
  { name: "大众汽车修理中心", value: [100.2262, 25.57809, 2] },
  { name: "大理市永辉汽车修理部", value: [100.1759, 25.68256, 3] },
  { name: "江都汽车修理厂", value: [100.2117, 26.35005, 4] },
  { name: "兴达汽车修理厂", value: [100.5934, 25.92185, 5] },
  { name: "万成汽车修理厂", value: [99.56658, 26.59386, 5] }
]
//客运站场
var mapDataJdjcScatterC = [
  { name: "祥云客运站", value: [100.5599, 25.48689, 3] },
  { name: "双廊客运站", value: [100.1942, 25.92862, 5] },
  { name: "弥渡客运站", value: [100.4942, 25.35555, 4] },
  { name: "鹤庆客运站", value: [100.1847, 26.56651, 3] },
  { name: "曲硐客运站", value: [99.53685, 25.43289, 6] },
  { name: "剑川客运站", value: [99.91241, 26.53198, 4] },
  { name: "喜洲客运站", value: [100.1346, 25.85553, 2] },
  { name: "富恒客运站", value: [99.68832, 25.65314, 4] },
  { name: "禾甸客运站", value: [100.7575, 25.69094, 6] },
  { name: "乔后客运站", value: [99.77411, 26.10169, 5] },
  { name: "炼铁客运站", value: [99.81273, 25.98958, 4] },
  { name: "永平县城乡客运站", value: [99.53248, 25.46336, 2] },
  { name: "三营客运站", value: [100.0044, 26.22605, 2] },
  { name: "龙街客运站", value: [99.78757, 25.33623, 5] },
  { name: "红岩客运站", value: [100.4315, 25.43211, 8] },
  { name: "大仓客运站", value: [100.2283, 25.4215, 3] },
]
// 危险货物运输
var mapDataJdjcScatterD = [
  { name: "牛街客运站", value: [100.087, 25.03978, 3] },
  { name: "庙街客运站", value: [100.2822, 25.31521, 4] },
  { name: "沙溪客运站", value: [99.85734, 26.32327, 5] },
  { name: "宾川县客运站", value: [100.5893, 25.82785, 6] },
  { name: "龙门乡客运站", value: [99.51625, 25.52311, 7] },
  { name: "云龙县客运站", value: [99.37659, 25.88862, 6] },
  { name: "北斗乡客运站", value: [99.6971, 25.54494, 5] },
  { name: "德苴乡客运站", value: [100.657, 25.12202, 4] },
  { name: "大理交通运输集团公司弥渡分公司红星客运站", value: [100.5787, 25.36381,] },
  { name: "洱源汽车客运站", value: [99.96693, 26.1166, 8] },
  { name: "永建农村客运站", value: [100.2214, 25.43136, 6] },
  { name: "米甸汽车客运站", value: [100.7575, 25.69094, 4] },
  { name: "巍山汽车客运站", value: [100.3068, 25.23552, 5] },
  { name: "南涧县拥翠乡农村客运站", value: [100.3926, 24.94099, 2] },
  { name: "宾川县钟英农村客运站", value: [100.7663, 26.16344, 5] },
  { name: "水泄乡客运站", value: [99.74638, 25.14841, 3] },
  { name: "巍山县客货运输服务有限公司紫金客运站", value: [99.74638, 25.14841, 4] },
]


// 区县级数据
var mapDataJdjcDetailA = [
  { name: "大理快速汽车客运站", value: [100.2371, 25.58913, 3] },
  { name: "大理汽车客运站新站", value: [100.2594, 25.5979, 0] },
  { name: "大理古城旅游汽车客运站", value: [100.1754, 25.69312, 2] },
  { name: "大理兴盛客运站", value: [100.2308, 25.57857, 1] },
  { name: "火车客运站", value: [100.2566, 25.59592, 3] },
  { name: "双廊客运站", value: [100.1942, 25.92862, 0] },
  { name: "喜洲客运站", value: [100.1346, 25.85553, 4] },
]

//工作督查
var mapDataJdjcDetailB = [
  { name: "恒誉汽修", value: [100.1955, 25.67667, 1] },
  { name: "阿五汽修", value: [100.2265, 25.62744, 0] },
  { name: "大理市永辉汽车修理部", value: [100.1759, 25.68256, 0] },
  { name: "大理顺兴汽修", value: [100.1715, 25.71564, 1] },
]


// svg path
// 总览
var svg_total = "path://M764.867148 249.793136 259.0735 249.793136c-143.070486 0-259.052011 115.984594-259.052011 259.052011 0 143.07151 115.982548 259.050987 259.052011 259.050987l505.793648 0c143.067416 0 259.050987-115.979478 259.050987-259.050987C1023.917112 365.778754 907.933541 249.793136 764.867148 249.793136zM259.0735 745.516428c-130.501216 0-236.671281-106.172111-236.671281-236.671281 0-130.501216 106.170065-236.671281 236.671281-236.671281S495.744781 378.344954 495.744781 508.84617C495.744781 639.34534 389.574716 745.516428 259.0735 745.516428z";
// 地名
var svg_label = "path://M432.45,595.444c0,2.177-4.661,6.82-11.305,6.82c-6.475,0-11.306-4.567-11.306-6.82s4.852-6.812,11.306-6.812C427.841,588.632,432.452,593.191,432.45,595.444L432.45,595.444z M421.155,589.876c-3.009,0-5.448,2.495-5.448,5.572s2.439,5.572,5.448,5.572c3.01,0,5.449-2.495,5.449-5.572C426.604,592.371,424.165,589.876,421.155,589.876L421.155,589.876z M421.146,591.891c-1.916,0-3.47,1.589-3.47,3.549c0,1.959,1.554,3.548,3.47,3.548s3.469-1.589,3.469-3.548C424.614,593.479,423.062,591.891,421.146,591.891L421.146,591.891zM421.146,591.891"
// 返回
var svg_back = "path://M700.371228 394.525472 174.028569 394.525472l255.952416-227.506551c12.389168-11.011798 13.505595-29.980825 2.492774-42.369993-11.011798-12.386098-29.977755-13.506619-42.367947-2.492774L76.425623 400.975371c-6.960529 5.496178-11.434423 14.003945-11.434423 23.561625 0 0.013303 0.001023 0.026606 0.001023 0.039909 0 0.01228-0.001023 0.025583-0.001023 0.037862 0 0.473791 0.01535 0.946558 0.037862 1.418302 0.001023 0.016373 0.001023 0.032746 0.001023 0.049119 0.39295 8.030907 3.992941 15.595186 10.034541 20.962427l315.040163 280.028764c5.717212 5.083785 12.83533 7.580652 19.925818 7.580652 8.274454 0 16.514115-3.403516 22.442128-10.07445 11.011798-12.387122 9.896394-31.357172-2.492774-42.367947l-256.128425-227.665163 526.518668 0c109.219517 0 198.075241 88.855724 198.075241 198.075241s-88.855724 198.075241-198.075241 198.075241L354.324888 850.696955c-16.57449 0-30.011524 13.437034-30.011524 30.011524s13.437034 30.011524 30.011524 30.011524l346.046341 0c142.31631 0 258.098289-115.783003 258.098289-258.098289S842.686515 394.525472 700.371228 394.525472z"
// 分布
var svg_other = "path://M366 294.504c-132 0-240 107.104-240 238s108 238 240 238h304c132 0 240-107.104 240-238s-108-238-240-238h-304z m308 442.16c-111.28 0-201.504-91.408-201.504-204.168s90.224-204.16 201.504-204.16 201.504 91.408 201.504 204.168-90.224 204.16-201.504 204.16z"
// 展开
var svg_detail = "path://M288.791 65.583L735.21 512 288.79 958.417z"
// 收回
var svg_withdraw = "path://M735.209 65.583L288.79 512 735.21 958.417z"
// 放大
var svg_bigger = "path://M426.656 64q78.016 0 149.152 30.496t122.496 81.824 81.824 122.496 30.496 149.152q0 67.008-21.824 128.32t-62.176 111.328l242.336 242.016q12.32 12.32 12.32 30.336 0 18.336-12.16 30.496t-30.496 12.16q-18.016 0-30.336-12.32l-242.016-242.336q-50.016 40.32-111.328 62.176t-128.32 21.824q-78.016 0-149.152-30.496t-122.496-81.824-81.824-122.496-30.496-149.152 30.496-149.152 81.824-122.496 122.496-81.824 149.152-30.496zM426.656 149.344q-60.672 0-116 23.68t-95.328 63.68-63.68 95.328-23.68 116 23.68 116 63.68 95.328 95.328 63.68 116 23.68 116-23.68 95.328-63.68 63.68-95.328 23.68-116-23.68-116-63.68-95.328-95.328-63.68-116-23.68zM426.656 277.344q17.664 0 30.176 12.512t12.512 30.176l0 85.344 85.344 0q17.664 0 30.176 12.512t12.512 30.176-12.512 30.176-30.176 12.512l-85.344 0 0 85.344q0 17.664-12.512 30.176t-30.176 12.512-30.176-12.512-12.512-30.176l0-85.344-85.344 0q-17.664 0-30.176-12.512t-12.512-30.176 12.512-30.176 30.176-12.512l85.344 0 0-85.344q0-17.664 12.512-30.176t30.176-12.512z"
// 缩小
var svg_small = "path://M426.656 64q78.016 0 149.152 30.496t122.496 81.824 81.824 122.496 30.496 149.152q0 67.008-21.824 128.32t-62.176 111.328l242.336 242.016q12.32 12.32 12.32 30.336 0 18.336-12.16 30.496t-30.496 12.16q-18.016 0-30.336-12.32l-242.016-242.336q-50.016 40.32-111.328 62.176t-128.32 21.824q-78.016 0-149.152-30.496t-122.496-81.824-81.824-122.496-30.496-149.152 30.496-149.152 81.824-122.496 122.496-81.824 149.152-30.496zM426.656 149.344q-60.672 0-116 23.68t-95.328 63.68-63.68 95.328-23.68 116 23.68 116 63.68 95.328 95.328 63.68 116 23.68 116-23.68 95.328-63.68 63.68-95.328 23.68-116-23.68-116-63.68-95.328-95.328-63.68-116-23.68zM298.656 405.344l256 0q17.664 0 30.176 12.512t12.512 30.176-12.512 30.176-30.176 12.512l-256 0q-17.664 0-30.176-12.512t-12.512-30.176 12.512-30.176 30.176-12.512z"