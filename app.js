const categories = [
  { id: "all", name: "全部" },
  { id: "acid", name: "酸" },
  { id: "base", name: "碱" },
  { id: "salt", name: "盐" },
  { id: "metal", name: "金属" },
  { id: "indicator", name: "指示剂" },
  { id: "organic", name: "有机" }
];

const reagents = [
  { id: "hcl", name: "稀盐酸", formula: "HCl", category: "acid", color: "#88d3ff", hazard: "corrosive", hazardLabel: "腐蚀", risk: 3, note: "避免接触皮肤和眼睛。" },
  { id: "h2so4", name: "稀硫酸", formula: "H2SO4", category: "acid", color: "#9fd6ff", hazard: "corrosive", hazardLabel: "腐蚀", risk: 3, note: "加酸入水，禁止反向操作。" },
  { id: "naoh", name: "氢氧化钠", formula: "NaOH", category: "base", color: "#6ee7b7", hazard: "corrosive", hazardLabel: "腐蚀", risk: 3, note: "强碱，佩戴手套。" },
  { id: "caoh2", name: "澄清石灰水", formula: "Ca(OH)2", category: "base", color: "#d9f99d", hazard: "irritant", hazardLabel: "刺激", risk: 2, note: "可用于检验二氧化碳。" },
  { id: "cuso4", name: "硫酸铜溶液", formula: "CuSO4", category: "salt", color: "#2dd4bf", hazard: "harmful", hazardLabel: "有害", risk: 2, note: "铜盐不可入口，废液分类回收。" },
  { id: "nacl", name: "氯化钠溶液", formula: "NaCl", category: "salt", color: "#e0f2fe", hazard: "low", hazardLabel: "低", risk: 1, note: "常规低风险盐溶液。" },
  { id: "agno3", name: "硝酸银溶液", formula: "AgNO3", category: "salt", color: "#e5e7eb", hazard: "oxidizer", hazardLabel: "氧化", risk: 3, note: "避光保存，避免接触皮肤。" },
  { id: "bacl2", name: "氯化钡溶液", formula: "BaCl2", category: "salt", color: "#f8fafc", hazard: "toxic", hazardLabel: "有毒", risk: 4, note: "钡盐有毒，实验后集中处理。" },
  { id: "na2so4", name: "硫酸钠溶液", formula: "Na2SO4", category: "salt", color: "#dbeafe", hazard: "low", hazardLabel: "低", risk: 1, note: "常规盐溶液。" },
  { id: "na2co3", name: "碳酸钠溶液", formula: "Na2CO3", category: "salt", color: "#bae6fd", hazard: "irritant", hazardLabel: "刺激", risk: 2, note: "弱碱性，避免入眼。" },
  { id: "kmno4", name: "高锰酸钾", formula: "KMnO4", category: "salt", color: "#b084f5", hazard: "oxidizer", hazardLabel: "氧化", risk: 3, note: "强氧化剂，远离还原剂和可燃物。" },
  { id: "h2o2", name: "过氧化氢", formula: "H2O2", category: "salt", color: "#c7f9ff", hazard: "oxidizer", hazardLabel: "氧化", risk: 3, note: "浓度未知时按高风险处理。" },
  { id: "zn", name: "锌粒", formula: "Zn", category: "metal", color: "#cbd5e1", hazard: "flammable", hazardLabel: "放氢", risk: 2, note: "与酸反应会产生氢气。" },
  { id: "mg", name: "镁条", formula: "Mg", category: "metal", color: "#f1f5f9", hazard: "flammable", hazardLabel: "易燃", risk: 3, note: "燃烧强光，勿直视。" },
  { id: "fe", name: "铁粉", formula: "Fe", category: "metal", color: "#94a3b8", hazard: "irritant", hazardLabel: "粉尘", risk: 2, note: "避免吸入粉尘。" },
  { id: "phenol", name: "酚酞", formula: "C20H14O4", category: "indicator", color: "#ff8bc7", hazard: "irritant", hazardLabel: "刺激", risk: 2, note: "酸碱指示剂，碱性显红。" },
  { id: "litmus", name: "石蕊", formula: "Indicator", category: "indicator", color: "#818cf8", hazard: "low", hazardLabel: "低", risk: 1, note: "酸红碱蓝。" },
  { id: "ethanol", name: "乙醇", formula: "C2H5OH", category: "organic", color: "#fde68a", hazard: "flammable", hazardLabel: "易燃", risk: 3, note: "远离火源，注意通风。" },
  { id: "water", name: "蒸馏水", formula: "H2O", category: "salt", color: "#93c5fd", hazard: "low", hazardLabel: "低", risk: 1, note: "用于稀释、洗涤和空白对照。" }
];

const instruments = [
  { id: "burner", name: "酒精灯", icon: "♨", condition: "heat", description: "提供温和加热。" },
  { id: "stir", name: "玻璃棒", icon: "↻", condition: "stir", description: "加快混合和溶解。" },
  { id: "cool", name: "冰水浴", icon: "❄", condition: "cool", description: "降低反应温度。" },
  { id: "power", name: "直流电源", icon: "⎍", condition: "power", description: "进行电解实验。" },
  { id: "stand", name: "铁架台", icon: "┤", condition: "stand", description: "固定加热装置。" },
  { id: "funnel", name: "漏斗", icon: "▽", condition: "funnel", description: "用于过滤和转移液体。" },
  { id: "wash", name: "洗瓶", icon: "≈", condition: "wash", description: "冲洗容器，降低残留。" }
];

const experiments = [
  {
    id: "neutralization",
    title: "酸碱中和与指示剂",
    brief: "加入稀盐酸、氢氧化钠和酚酞，观察颜色与 pH 变化。",
    required: ["hcl", "naoh", "phenol"],
    hint: "先加酚酞，再分别加入酸和碱，对比颜色变化。"
  },
  {
    id: "precipitation",
    title: "沉淀生成实验",
    brief: "用硫酸铜和氢氧化钠生成蓝色沉淀。",
    required: ["cuso4", "naoh"],
    hint: "加入后轻轻搅拌，沉淀更明显。"
  },
  {
    id: "gas",
    title: "酸与碳酸盐放气",
    brief: "碳酸钠遇稀盐酸会产生二氧化碳气泡。",
    required: ["hcl", "na2co3"],
    hint: "可加入澄清石灰水理解 CO2 检验。"
  },
  {
    id: "metal-acid",
    title: "金属与酸制氢",
    brief: "锌粒与稀盐酸反应产生氢气，需要远离明火。",
    required: ["hcl", "zn"],
    hint: "观察气泡，注意氢气可燃。"
  },
  {
    id: "electrolysis",
    title: "水的电解演示",
    brief: "加入蒸馏水并通电，模拟氢气和氧气析出。",
    required: ["water"],
    conditions: ["power"],
    hint: "点击直流电源或通电按钮。"
  }
];

const reactions = [
  {
    id: "neutralization",
    inputs: ["hcl", "naoh"],
    equation: "HCl + NaOH → NaCl + H2O",
    title: "酸碱中和反应",
    observation: "溶液趋于中性，轻微放热。若加入酚酞，碱性时呈粉红色，中和后颜色变浅。",
    resultColor: "linear-gradient(180deg, rgba(153, 246, 228, 0.58), rgba(94, 234, 212, 0.52))",
    effects: ["heat"],
    risk: 2,
    safety: "酸碱均有腐蚀性，操作时佩戴护目镜并少量多次加入。"
  },
  {
    id: "copper-hydroxide",
    inputs: ["cuso4", "naoh"],
    equation: "CuSO4 + 2NaOH → Cu(OH)2↓ + Na2SO4",
    title: "蓝色沉淀生成",
    observation: "生成蓝色絮状氢氧化铜沉淀，静置后沉降到底部。",
    resultColor: "linear-gradient(180deg, rgba(45, 212, 191, 0.55), rgba(20, 184, 166, 0.46))",
    precipitate: "#49b6ff",
    effects: ["precipitate"],
    risk: 2,
    safety: "铜盐废液不能直接倒入水槽，应集中收集。"
  },
  {
    id: "silver-chloride",
    inputs: ["agno3", "nacl"],
    equation: "AgNO3 + NaCl → AgCl↓ + NaNO3",
    title: "白色沉淀生成",
    observation: "产生白色氯化银沉淀，光照下可能逐渐变暗。",
    resultColor: "linear-gradient(180deg, rgba(226, 232, 240, 0.58), rgba(203, 213, 225, 0.48))",
    precipitate: "#f8fafc",
    effects: ["precipitate"],
    risk: 3,
    safety: "硝酸银有氧化性并会染色皮肤，建议避光操作。"
  },
  {
    id: "barium-sulfate",
    inputs: ["bacl2", "na2so4"],
    equation: "BaCl2 + Na2SO4 → BaSO4↓ + 2NaCl",
    title: "硫酸根检验",
    observation: "出现白色硫酸钡沉淀，可用于识别硫酸根离子。",
    resultColor: "linear-gradient(180deg, rgba(224, 242, 254, 0.56), rgba(241, 245, 249, 0.5))",
    precipitate: "#f5f7fb",
    effects: ["precipitate"],
    risk: 4,
    safety: "氯化钡有毒，必须避免入口和皮肤接触。"
  },
  {
    id: "carbonate-acid",
    inputs: ["hcl", "na2co3"],
    equation: "Na2CO3 + 2HCl → 2NaCl + H2O + CO2↑",
    title: "二氧化碳生成",
    observation: "迅速产生大量气泡，生成的 CO2 可使澄清石灰水变浑浊。",
    resultColor: "linear-gradient(180deg, rgba(186, 230, 253, 0.58), rgba(125, 211, 252, 0.45))",
    effects: ["gas"],
    risk: 2,
    safety: "避免密闭容器中大量反应，防止压力升高。"
  },
  {
    id: "limewater-co2",
    inputs: ["caoh2", "na2co3", "hcl"],
    equation: "Ca(OH)2 + CO2 → CaCO3↓ + H2O",
    title: "二氧化碳检验",
    observation: "通入 CO2 后澄清石灰水变浑浊，出现白色碳酸钙悬浊物。",
    resultColor: "linear-gradient(180deg, rgba(217, 249, 157, 0.48), rgba(241, 245, 249, 0.5))",
    precipitate: "#f8fafc",
    effects: ["gas", "precipitate"],
    risk: 2,
    safety: "少量演示即可，避免喷溅。"
  },
  {
    id: "zinc-acid",
    inputs: ["hcl", "zn"],
    equation: "Zn + 2HCl → ZnCl2 + H2↑",
    title: "锌与酸反应",
    observation: "锌粒表面产生连续气泡，生成氢气。",
    resultColor: "linear-gradient(180deg, rgba(191, 219, 254, 0.58), rgba(147, 197, 253, 0.44))",
    effects: ["gas", "heat"],
    risk: 3,
    safety: "氢气易燃，严禁靠近明火。"
  },
  {
    id: "peroxide",
    inputs: ["h2o2", "kmno4"],
    equation: "2KMnO4 + 3H2O2 → 2MnO2↓ + 2KOH + 3O2↑ + 2H2O",
    title: "过氧化氢分解",
    observation: "出现明显气泡和深色固体，释放氧气。",
    resultColor: "linear-gradient(180deg, rgba(192, 132, 252, 0.52), rgba(109, 40, 217, 0.45))",
    precipitate: "#5b4636",
    effects: ["gas", "precipitate", "sparks"],
    risk: 4,
    safety: "氧化剂混合反应较剧烈，仅做小量虚拟演示。"
  },
  {
    id: "ethanol-flame",
    inputs: ["ethanol"],
    requiredCondition: "heat",
    equation: "C2H5OH + 3O2 → 2CO2 + 3H2O",
    title: "乙醇燃烧",
    observation: "加热后模拟蓝色火焰，生成二氧化碳和水。",
    resultColor: "linear-gradient(180deg, rgba(253, 230, 138, 0.42), rgba(251, 191, 36, 0.32))",
    effects: ["flame", "heat"],
    risk: 4,
    safety: "乙醇易燃，真实实验需远离其它可燃物并控制用量。"
  },
  {
    id: "electrolysis-water",
    inputs: ["water"],
    requiredCondition: "power",
    equation: "2H2O → 2H2↑ + O2↑",
    title: "水的电解",
    observation: "通电后两极产生气泡，阴极氢气约为阳极氧气体积的两倍。",
    resultColor: "linear-gradient(180deg, rgba(147, 197, 253, 0.55), rgba(56, 189, 248, 0.42))",
    effects: ["gas", "sparks"],
    risk: 2,
    safety: "真实实验需使用低压直流电源并避免点燃混合气体。"
  }
];

const hazardColors = {
  low: "#62d392",
  irritant: "#f3c05a",
  corrosive: "#ff7d8a",
  oxidizer: "#b89cff",
  toxic: "#ff5374",
  harmful: "#f7a24b",
  flammable: "#ff9f43"
};

const state = {
  activeCategory: "all",
  query: "",
  contents: [],
  conditions: new Set(),
  activeExperiment: null,
  score: Number(localStorage.getItem("lab-score") || 0),
  log: JSON.parse(localStorage.getItem("lab-log") || "[]"),
  note: localStorage.getItem("lab-note") || ""
};

const $ = (selector) => document.querySelector(selector);

const dom = {
  categoryTabs: $("#categoryTabs"),
  reagentGrid: $("#reagentGrid"),
  instrumentGrid: $("#instrumentGrid"),
  experimentList: $("#experimentList"),
  searchInput: $("#searchInput"),
  reagentCount: $("#reagentCount"),
  contentChips: $("#contentChips"),
  liquid: $("#liquid"),
  precipitate: $("#precipitate"),
  bubbles: $("#bubbles"),
  reactionAura: $("#reactionAura"),
  reactionOutput: $("#reactionOutput"),
  riskLevel: $("#riskLevel"),
  taskProgress: $("#taskProgress"),
  tempStatus: $("#tempStatus"),
  modeStatus: $("#modeStatus"),
  scoreStatus: $("#scoreStatus"),
  stageSubtitle: $("#stageSubtitle"),
  vesselDrop: $("#vesselDrop"),
  flame: $("#flame"),
  steam: $("#steam"),
  sparks: $("#sparks"),
  stand: $("#stand"),
  funnel: $("#funnel"),
  powerLeads: $("#powerLeads"),
  safetySign: $("#safetySign"),
  logList: $("#logList"),
  noteInput: $("#noteInput"),
  installBtn: $("#installBtn")
};

let deferredInstallPrompt = null;
let lastReactionId = "";

function renderCategories() {
  dom.categoryTabs.innerHTML = "";
  categories.forEach((category) => {
    const button = document.createElement("button");
    button.className = "segment";
    button.type = "button";
    button.role = "tab";
    button.setAttribute("aria-selected", String(category.id === state.activeCategory));
    button.textContent = category.name;
    button.addEventListener("click", () => {
      state.activeCategory = category.id;
      renderCategories();
      renderReagents();
    });
    dom.categoryTabs.append(button);
  });
}

function renderReagents() {
  const query = state.query.trim().toLowerCase();
  const filtered = reagents.filter((item) => {
    const categoryMatch = state.activeCategory === "all" || item.category === state.activeCategory;
    const keyword = `${item.name} ${item.formula} ${item.hazardLabel} ${item.note}`.toLowerCase();
    return categoryMatch && keyword.includes(query);
  });

  dom.reagentCount.textContent = String(filtered.length);
  dom.reagentGrid.innerHTML = "";
  const template = $("#reagentTemplate");

  filtered.forEach((item) => {
    const node = template.content.firstElementChild.cloneNode(true);
    node.dataset.reagentId = item.id;
    node.style.setProperty("--vial-color", item.color);
    node.style.setProperty("--hazard-color", hazardColors[item.hazard] || hazardColors.low);
    node.querySelector("strong").textContent = item.name;
    node.querySelector("small").textContent = `${item.formula} · ${item.hazardLabel}`;
    node.title = `${item.name} ${item.formula}｜${item.note}`;
    node.addEventListener("click", () => addReagent(item.id));
    node.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData("text/reagent", item.id);
      event.dataTransfer.effectAllowed = "copy";
    });
    dom.reagentGrid.append(node);
  });
}

function renderInstruments() {
  dom.instrumentGrid.innerHTML = "";
  instruments.forEach((instrument) => {
    const button = document.createElement("button");
    button.className = "instrument-card";
    button.type = "button";
    button.draggable = true;
    button.innerHTML = `<span aria-hidden="true">${instrument.icon}</span><strong>${instrument.name}</strong>`;
    button.title = instrument.description;
    button.addEventListener("click", () => applyCondition(instrument.condition));
    button.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData("text/condition", instrument.condition);
      event.dataTransfer.effectAllowed = "copy";
    });
    dom.instrumentGrid.append(button);
  });
}

function renderExperiments() {
  dom.experimentList.innerHTML = "";
  experiments.forEach((experiment) => {
    const button = document.createElement("button");
    button.className = "experiment-card";
    button.type = "button";
    button.dataset.experimentId = experiment.id;
    if (state.activeExperiment?.id === experiment.id) {
      button.classList.add("active");
    }
    button.innerHTML = `<strong>${experiment.title}</strong><small>${experiment.brief}</small>`;
    button.addEventListener("click", () => startExperiment(experiment.id));
    dom.experimentList.append(button);
  });
}

function startExperiment(id) {
  state.activeExperiment = experiments.find((item) => item.id === id) || null;
  state.conditions.clear();
  state.contents = [];
  lastReactionId = "";
  log(`开始任务：${state.activeExperiment.title}。${state.activeExperiment.hint}`);
  renderAll();
}

function addReagent(id) {
  const item = reagents.find((reagent) => reagent.id === id);
  if (!item) return;

  const existing = state.contents.find((entry) => entry.id === id);
  if (existing) {
    existing.amount += 1;
  } else {
    state.contents.push({ id, amount: 1 });
  }

  log(`加入 ${item.name}（${item.formula}）。`);
  const reaction = findReaction();
  updateExperimentProgress();
  renderAll(reaction);
}

function applyCondition(condition) {
  if (condition === "wash") {
    state.contents = [];
    state.conditions.clear();
    lastReactionId = "";
    log("使用洗瓶清洗容器，实验台已恢复初始状态。");
    renderAll();
    return;
  }

  if (state.conditions.has(condition)) {
    state.conditions.delete(condition);
    log(`撤销条件：${conditionName(condition)}。`);
  } else {
    state.conditions.add(condition);
    log(`启用条件：${conditionName(condition)}。`);
  }

  const reaction = findReaction();
  updateExperimentProgress();
  renderAll(reaction);
}

function conditionName(condition) {
  const names = {
    heat: "加热",
    stir: "搅拌",
    cool: "冷却",
    power: "通电",
    stand: "铁架台",
    funnel: "漏斗"
  };
  return names[condition] || condition;
}

function findReaction() {
  const ids = new Set(state.contents.map((entry) => entry.id));
  const matches = reactions
    .filter((reaction) => reaction.inputs.every((id) => ids.has(id)))
    .filter((reaction) => !reaction.requiredCondition || state.conditions.has(reaction.requiredCondition))
    .sort((a, b) => b.inputs.length - a.inputs.length);

  return matches[0] || null;
}

function renderContents() {
  dom.contentChips.innerHTML = "";
  if (state.contents.length === 0) {
    const empty = document.createElement("span");
    empty.className = "info-tag";
    empty.textContent = "容器为空";
    dom.contentChips.append(empty);
    return;
  }

  state.contents.forEach((entry) => {
    const item = reagents.find((reagent) => reagent.id === entry.id);
    if (!item) return;
    const chip = document.createElement("span");
    chip.className = "chip";
    chip.style.setProperty("--chip-color", item.color);
    chip.textContent = `${item.formula}${entry.amount > 1 ? ` ×${entry.amount}` : ""}`;
    dom.contentChips.append(chip);
  });
}

function renderVessel(reaction = findReaction()) {
  const volume = Math.min(74, state.contents.length * 16 + 10);
  dom.liquid.style.height = `${volume}%`;

  const colors = state.contents
    .map((entry) => reagents.find((item) => item.id === entry.id)?.color)
    .filter(Boolean);
  dom.liquid.style.background = reaction?.resultColor || blendGradient(colors);

  const hasGas = reaction?.effects?.includes("gas");
  const hasPrecipitate = reaction?.effects?.includes("precipitate");
  const hasFlame = reaction?.effects?.includes("flame") || state.conditions.has("heat") && state.contents.some((entry) => entry.id === "ethanol");
  const hasHeat = reaction?.effects?.includes("heat") || state.conditions.has("heat");
  const hasSparks = reaction?.effects?.includes("sparks") || state.conditions.has("power");

  dom.bubbles.classList.toggle("active", Boolean(hasGas));
  dom.precipitate.classList.toggle("active", Boolean(hasPrecipitate));
  dom.precipitate.style.setProperty("--precipitate-color", reaction?.precipitate || "#f8fafc");
  dom.flame.classList.toggle("active", Boolean(hasFlame));
  dom.steam.classList.toggle("active", Boolean(hasHeat && state.contents.length > 0));
  dom.sparks.classList.toggle("active", Boolean(hasSparks && state.contents.length > 0));
  dom.reactionAura.classList.toggle("active", Boolean(reaction));
  dom.reactionAura.style.background = auraColor(reaction);
  dom.stand.classList.toggle("active", state.conditions.has("stand"));
  dom.funnel.classList.toggle("active", state.conditions.has("funnel"));
  dom.powerLeads.classList.toggle("active", state.conditions.has("power"));
}

function blendGradient(colors) {
  if (colors.length === 0) {
    return "linear-gradient(180deg, rgba(77, 209, 231, 0.62), rgba(38, 111, 178, 0.72))";
  }
  const first = colors[0];
  const last = colors[colors.length - 1];
  return `linear-gradient(180deg, ${first}cc, ${last}88)`;
}

function auraColor(reaction) {
  if (!reaction) return "radial-gradient(circle, rgba(73, 214, 232, 0.18), transparent 64%)";
  if (reaction.risk >= 4) return "radial-gradient(circle, rgba(255, 125, 138, 0.28), transparent 64%)";
  if (reaction.effects?.includes("gas")) return "radial-gradient(circle, rgba(243, 192, 90, 0.26), transparent 64%)";
  if (reaction.effects?.includes("precipitate")) return "radial-gradient(circle, rgba(126, 208, 255, 0.25), transparent 64%)";
  return "radial-gradient(circle, rgba(98, 211, 146, 0.24), transparent 64%)";
}

function renderReaction(reaction = findReaction()) {
  const maxRisk = Math.max(1, ...state.contents.map((entry) => reagents.find((item) => item.id === entry.id)?.risk || 1), reaction?.risk || 1);
  const riskLabel = maxRisk >= 4 ? "高风险" : maxRisk >= 3 ? "中高风险" : maxRisk >= 2 ? "中风险" : "低风险";
  dom.riskLevel.textContent = riskLabel;
  dom.riskLevel.style.color = maxRisk >= 4 ? "#ff9dad" : maxRisk >= 3 ? "#ffd18a" : "#9cf0c1";
  dom.safetySign.textContent = maxRisk >= 3 ? "护目镜 + 手套 + 通风" : "佩戴护目镜";

  if (!reaction) {
    const hints = state.activeExperiment ? `<p><strong>当前任务提示：</strong>${state.activeExperiment.hint}</p>` : "";
    dom.reactionOutput.innerHTML = `
      <p class="empty-text">尚未匹配到完整反应。继续加入相关试剂或改变实验条件。</p>
      ${hints}
      <div class="tag-row">${state.contents.map((entry) => {
        const item = reagents.find((reagent) => reagent.id === entry.id);
        return `<span class="info-tag">${item?.name || entry.id}</span>`;
      }).join("")}</div>
    `;
    return;
  }

  if (lastReactionId !== reaction.id) {
    lastReactionId = reaction.id;
    state.score += reaction.risk >= 4 ? 16 : 10;
    localStorage.setItem("lab-score", String(state.score));
    log(`识别反应：${reaction.title}。${reaction.observation}`);
  }

  const included = reaction.inputs.map((id) => reagents.find((item) => item.id === id)?.formula || id).join(" + ");
  dom.reactionOutput.innerHTML = `
    <strong>${reaction.title}</strong>
    <div class="equation">${reaction.equation}</div>
    <p><strong>观察：</strong>${reaction.observation}</p>
    <p><strong>安全：</strong>${reaction.safety}</p>
    <div class="tag-row">
      <span class="info-tag">反应物：${included}</span>
      <span class="info-tag">风险：${riskLabel}</span>
      <span class="info-tag">得分 +${reaction.risk >= 4 ? 16 : 10}</span>
    </div>
  `;
}

function updateExperimentProgress() {
  if (!state.activeExperiment) return;
  const ids = new Set(state.contents.map((entry) => entry.id));
  const conditionOk = (state.activeExperiment.conditions || []).every((condition) => state.conditions.has(condition));
  const reagentOk = state.activeExperiment.required.every((id) => ids.has(id));
  if (reagentOk && conditionOk) {
    state.score += 25;
    localStorage.setItem("lab-score", String(state.score));
    log(`任务完成：${state.activeExperiment.title}。获得 25 分。`);
    toast(`任务完成：${state.activeExperiment.title}`);
    state.activeExperiment = null;
  }
}

function renderExperimentProgress() {
  if (!state.activeExperiment) {
    dom.taskProgress.textContent = `0/${experiments.length}`;
    dom.modeStatus.textContent = "开放实验";
    return;
  }

  const ids = new Set(state.contents.map((entry) => entry.id));
  const got = state.activeExperiment.required.filter((id) => ids.has(id)).length;
  const total = state.activeExperiment.required.length + (state.activeExperiment.conditions?.length || 0);
  const gotConditions = (state.activeExperiment.conditions || []).filter((condition) => state.conditions.has(condition)).length;
  dom.taskProgress.textContent = `${got + gotConditions}/${total}`;
  dom.modeStatus.textContent = state.activeExperiment.title;
}

function renderConditions() {
  const heatText = state.conditions.has("cool") ? "冷却中" : state.conditions.has("heat") ? "加热中" : "室温";
  dom.tempStatus.textContent = heatText;
  dom.scoreStatus.textContent = `${state.score} 分`;

  document.querySelectorAll(".action-button").forEach((button) => {
    const condition = button.dataset.condition;
    button.classList.toggle("active", state.conditions.has(condition));
  });
}

function log(message) {
  const item = {
    message,
    time: new Date().toLocaleString("zh-CN", { hour12: false })
  };
  state.log.unshift(item);
  state.log = state.log.slice(0, 80);
  localStorage.setItem("lab-log", JSON.stringify(state.log));
}

function renderLog() {
  dom.logList.innerHTML = "";
  if (state.log.length === 0) {
    const empty = document.createElement("div");
    empty.className = "log-item";
    empty.textContent = "暂无记录。开始实验后会自动生成操作日志。";
    dom.logList.append(empty);
    return;
  }

  state.log.slice(0, 18).forEach((item) => {
    const row = document.createElement("div");
    row.className = "log-item";
    row.innerHTML = `<time>${item.time}</time>${item.message}`;
    dom.logList.append(row);
  });
}

function renderAll(reaction = findReaction()) {
  renderExperiments();
  renderContents();
  renderVessel(reaction);
  renderReaction(reaction);
  renderExperimentProgress();
  renderConditions();
  renderLog();
}

function resetLab() {
  state.contents = [];
  state.conditions.clear();
  state.activeExperiment = null;
  lastReactionId = "";
  log("清空实验台，重新开始。");
  renderAll();
}

function exportNotes() {
  const lines = [
    "虚拟化学实验室实验记录",
    `导出时间：${new Date().toLocaleString("zh-CN", { hour12: false })}`,
    "",
    "一、手写笔记",
    dom.noteInput.value.trim() || "（无）",
    "",
    "二、自动日志",
    ...state.log.map((item) => `[${item.time}] ${item.message}`)
  ];
  const blob = new Blob([lines.join("\n")], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `virtual-chemistry-lab-${Date.now()}.txt`;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  toast("实验记录已导出");
}

async function copyLog() {
  const text = state.log.map((item) => `[${item.time}] ${item.message}`).join("\n");
  try {
    await navigator.clipboard.writeText(text || "暂无实验记录");
    toast("实验日志已复制");
  } catch {
    toast("当前浏览器不允许复制，请使用导出");
  }
}

function toast(message) {
  const box = document.createElement("div");
  box.className = "toast";
  box.textContent = message;
  document.body.append(box);
  requestAnimationFrame(() => box.classList.add("show"));
  setTimeout(() => {
    box.classList.remove("show");
    setTimeout(() => box.remove(), 220);
  }, 2100);
}

function bindEvents() {
  dom.searchInput.addEventListener("input", (event) => {
    state.query = event.target.value;
    renderReagents();
  });

  dom.vesselDrop.addEventListener("dragover", (event) => {
    event.preventDefault();
    dom.vesselDrop.classList.add("drop-ready");
  });

  dom.vesselDrop.addEventListener("dragleave", () => {
    dom.vesselDrop.classList.remove("drop-ready");
  });

  dom.vesselDrop.addEventListener("drop", (event) => {
    event.preventDefault();
    dom.vesselDrop.classList.remove("drop-ready");
    const reagentId = event.dataTransfer.getData("text/reagent");
    const condition = event.dataTransfer.getData("text/condition");
    if (reagentId) addReagent(reagentId);
    if (condition) applyCondition(condition);
  });

  document.querySelectorAll("[data-condition]").forEach((button) => {
    button.addEventListener("click", () => applyCondition(button.dataset.condition));
  });

  $("#resetBtn").addEventListener("click", resetLab);
  $("#clearContentsBtn").addEventListener("click", () => {
    state.contents = [];
    lastReactionId = "";
    log("清空容器内容，保留实验条件。");
    renderAll();
  });
  $("#exportBtn").addEventListener("click", exportNotes);
  $("#copyLogBtn").addEventListener("click", copyLog);

  dom.noteInput.value = state.note;
  dom.noteInput.addEventListener("input", () => {
    localStorage.setItem("lab-note", dom.noteInput.value);
  });

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredInstallPrompt = event;
    dom.installBtn.disabled = false;
  });

  dom.installBtn.addEventListener("click", async () => {
    if (!deferredInstallPrompt) {
      toast("浏览器菜单中也可以选择“安装应用”");
      return;
    }
    deferredInstallPrompt.prompt();
    await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
  });
}

function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("sw.js").catch(() => {
        // Offline support is optional; ignore browsers that block service workers.
      });
    });
  }
}

renderCategories();
renderReagents();
renderInstruments();
renderAll();
bindEvents();
registerServiceWorker();
