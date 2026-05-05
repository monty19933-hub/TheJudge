const realms = [
  {
    name: "Mossglow Grove",
    sky: ["#7bcba7", "#234c45"],
    ground: "#2d5b38",
    accent: "#d5f07a",
    creatures: [
      "Fern Imp",
      "Bramble Sprite",
      "Mushroom Knave",
      "Thornback Boarling",
      "Glowcap Shaman",
      "Rootbound Sentry",
      "Clover Harrier",
      "Mossscale Drake",
      "Vineblade Warden",
      "Elder Stag Chimera"
    ]
  },
  {
    name: "Emberglass Dunes",
    sky: ["#ffa95f", "#603323"],
    ground: "#8d5a2b",
    accent: "#ffe079",
    creatures: [
      "Cinder Scarab",
      "Quartz Jackal",
      "Dune Wisp",
      "Sunfang Lizard",
      "Mirage Duelist",
      "Ash Plume Roc",
      "Glasshide Scorpion",
      "Obsidian Nomad",
      "Saffron Ifrit",
      "Molten Sphinx"
    ]
  },
  {
    name: "Frostvein Peaks",
    sky: ["#9fdcff", "#273f68"],
    ground: "#5f7fa0",
    accent: "#e2fbff",
    creatures: [
      "Snowmote Sprite",
      "Rimewolf Cub",
      "Shardling Miner",
      "Icehook Gobbler",
      "Crystal Yeti",
      "Hailwing Harpy",
      "Frostbrand Knight",
      "Glacier Basilisk",
      "Aurora Witch",
      "Crowned Ice Wyrm"
    ]
  },
  {
    name: "Moonlit Marsh",
    sky: ["#6e78b7", "#1d273f"],
    ground: "#274b44",
    accent: "#a7ffcf",
    creatures: [
      "Lantern Leech",
      "Bog Pixie",
      "Mireling Trapper",
      "Reedcloak Archer",
      "Croakmancer",
      "Fen Hydra Whelp",
      "Willowshade Rogue",
      "Mooncap Hag",
      "Siltplate Guardian",
      "Blackwater Kelpie"
    ]
  },
  {
    name: "Stormforge Cliffs",
    sky: ["#8aa0b8", "#2d3345"],
    ground: "#4b5660",
    accent: "#ffe66b",
    creatures: [
      "Spark Bat",
      "Copper Kobold",
      "Anvil Gargoyle",
      "Thunder Ram",
      "Magnetite Mender",
      "Chainbolt Raider",
      "Cloudhorn Wyvern",
      "Runesteel Golem",
      "Tempest Valkyrie",
      "Skybreaker Titan"
    ]
  },
  {
    name: "Starfall Abyss",
    sky: ["#6451aa", "#14152c"],
    ground: "#2b2148",
    accent: "#ff80d5",
    creatures: [
      "Void Mite",
      "Comet Slug",
      "Astral Shade",
      "Nebula Seer",
      "Meteor Mantid",
      "Eclipse Duelist",
      "Starlace Siren",
      "Gravity Maw",
      "Cosmic Lich",
      "Abyssal Seraph"
    ]
  }
];

const LEVELS_PER_ZONE = 10;
const MOB_LEVELS_PER_ZONE = 9;
const MIN_MOBS_PER_LEVEL = 7;
const MAX_MOBS_PER_LEVEL = 10;
const weapons = ["", "with a bronze spear", "with twin knives", "with a lantern staff", "with a rune hammer", "with crystal armor"];
const palettes = ["#f06c64", "#f0b35a", "#6bd17d", "#5ec6f0", "#a274ff", "#f072bd"];
const realmVfx = [
  { kind: "firefly", color: "#d8ff8d", accent: "#74ff9f", aura: "rgba(126, 255, 149, 0.26)" },
  { kind: "ember", color: "#ffb547", accent: "#ff5a22", aura: "rgba(255, 102, 34, 0.25)" },
  { kind: "snow", color: "#dff8ff", accent: "#8fe7ff", aura: "rgba(143, 231, 255, 0.24)" },
  { kind: "marsh", color: "#9dfff0", accent: "#c288ff", aura: "rgba(146, 255, 230, 0.2)" },
  { kind: "spark", color: "#ffe66b", accent: "#82e8ff", aura: "rgba(255, 230, 107, 0.22)" },
  { kind: "star", color: "#ff9cf0", accent: "#7cc7ff", aura: "rgba(188, 122, 255, 0.26)" }
];
const zoneLevelArt = [
  "assets/art/zone-level-mossglow.png",
  "assets/art/zone-level-emberglass.png",
  "assets/art/zone-level-frostvein.png",
  "assets/art/zone-level-moonlit.png",
  "assets/art/zone-level-stormforge.png",
  "assets/art/zone-level-starfall.png"
];
const ICON_ATLAS_COLUMNS = 4;
const ICON_ATLAS_ROWS = 3;
const upgradeDefs = [
  {
    key: "pick",
    name: "Prospector Pick",
    description: "Raises tap damage",
    baseCost: 15,
    costGrowth: 1.34,
    iconIndex: 0
  },
  {
    key: "miner",
    name: "Clockwork Miner",
    description: "Adds automatic DPS",
    baseCost: 50,
    costGrowth: 1.42,
    iconIndex: 1
  },
  {
    key: "guild",
    name: "Adventurer Guild",
    description: "Boosts Ether rewards",
    baseCost: 250,
    costGrowth: 1.58,
    iconIndex: 2
  },
  {
    key: "charm",
    name: "Lucky Crit Charm",
    description: "Raises tap crit chance",
    baseCost: 520,
    costGrowth: 1.48,
    maxLevel: 10,
    iconIndex: 3
  },
  {
    key: "alchemist",
    name: "Alchemist Vial",
    description: "Raises tap crit damage",
    baseCost: 900,
    costGrowth: 1.52,
    iconIndex: 4
  },
  {
    key: "drill",
    name: "Diamond Drill",
    description: "Multiplies tap damage",
    baseCost: 1800,
    costGrowth: 1.62,
    iconIndex: 5
  },
  {
    key: "treasury",
    name: "Royal Treasury",
    description: "Increases all Ether finds",
    baseCost: 5200,
    costGrowth: 1.66,
    iconIndex: 6
  },
  {
    key: "standard",
    name: "Battle Standard",
    description: "Raises tap and DPS power",
    baseCost: 14000,
    costGrowth: 1.72,
    iconIndex: 7
  },
  {
    key: "compass",
    name: "Astral Compass",
    description: "Extends boss timers",
    baseCost: 50000,
    costGrowth: 1.82,
    iconIndex: 8
  }
];

const rebornUpgradeDefs = [
  {
    key: "emberMight",
    name: "Ember Might",
    description: "Permanently raises tap damage",
    baseCost: 1,
    costGrowth: 1.65,
    iconIndex: 9
  },
  {
    key: "ancientCrew",
    name: "Ancient Crew",
    description: "Permanently raises DPS",
    baseCost: 2,
    costGrowth: 1.7,
    iconIndex: 10
  },
  {
    key: "goldenMemory",
    name: "Ether Memory",
    description: "Permanently raises Ether gains",
    baseCost: 2,
    costGrowth: 1.72,
    iconIndex: 11
  }
];

const buffDefs = [
  {
    key: "tapFrenzy",
    stackKey: "tapFrenzyStacks",
    name: "Tap Frenzy",
    description: "2x tap damage for 10s. Each stack adds 10s up to 40s; 5 stacks becomes 3x for 1:30.",
    duration: 10_000,
    maxStacks: 5,
    maxDuration: 40_000,
    empoweredDuration: 90_000,
    baseCost: 4,
    levelScale: 0.35,
    rewardScale: 0.42,
    lateRewardScale: 0.6
  },
  {
    key: "etherGain",
    stackKey: "etherGainStacks",
    name: "Increased Ether Gain",
    description: "+100% all Ether gains per stack for 1m",
    duration: 60_000,
    maxStacks: 2,
    baseCost: 180,
    levelScale: 24,
    rewardScale: 12,
    iconKey: "ether"
  },
  {
    key: "flare",
    name: "Solar Flare",
    description: "10x tap damage for 20s",
    duration: 20_000,
    costType: "diamond",
    cost: 8,
    boostKey: "flareUntil",
    flameClass: "relic-flame"
  },
  {
    key: "magnet",
    name: "Ether Magnet",
    description: "3x Ether for 60s",
    duration: 60_000,
    costType: "diamond",
    cost: 12,
    boostKey: "magnetUntil",
    flameClass: "relic-flame"
  }
];

const INVENTORY_SIZE = 60;
const JUDGMENT_COOLDOWN_MS = 15 * 60_000;
const HAMMER_RESET_COST = 5;
const NORMAL_GEAR_DROP_CHANCE = 0.6;
const GEAR_STAT_VERSION = 2;
const IS_ANDROID = /Android/i.test(navigator.userAgent);
const ACTIVE_FRAME_MS = IS_ANDROID ? 1000 / 36 : 1000 / 60;
const IDLE_FRAME_MS = IS_ANDROID ? 1000 / 6 : 1000 / 40;
const DIALOG_FRAME_MS = IS_ANDROID ? 1000 / 8 : 1000 / 20;
const MAX_CANVAS_DPR = IS_ANDROID ? 1 : 1.5;
const MAX_AMBIENT_PARTICLES = IS_ANDROID ? 3 : 22;
const MAX_LOOT_PARTICLES = IS_ANDROID ? 38 : 96;
const MAX_FLOATERS = IS_ANDROID ? 10 : 18;
const MAX_SLASH_EFFECTS = IS_ANDROID ? 3 : 5;
const EFFECT_QUALITY = IS_ANDROID ? 0.58 : 1;
const PASSIVE_HEALTH_FRAME_MS = IS_ANDROID ? 420 : 120;
const TIMER_FRAME_MS = IS_ANDROID ? 750 : 160;
const RELIC_TIMER_FRAME_MS = 500;
if (IS_ANDROID) document.documentElement.classList.add("android-power-save");
const equipmentSlots = [
  { key: "helm", label: "Helm" },
  { key: "chest", label: "Chest" },
  { key: "legs", label: "Legs" },
  { key: "gloves", label: "Gloves" }
];
const gearInventoryTabs = [
  { key: "helm", label: "Helms" },
  { key: "chest", label: "Chestplates" },
  { key: "legs", label: "Leggings" },
  { key: "gloves", label: "Gloves" }
];
const itemDefs = {
  trailwardHelm: {
    key: "trailwardHelm",
    type: "gear",
    slot: "helm",
    flavor: "A sturdy browguard shaped for long hunts through shifting realms."
  },
  oathboundChest: {
    key: "oathboundChest",
    type: "gear",
    slot: "chest",
    flavor: "Layered plates that hum faintly after a clean strike."
  },
  pathfinderLegs: {
    key: "pathfinderLegs",
    type: "gear",
    slot: "legs",
    flavor: "Flexible guards built for chasing treasure across old roads."
  },
  stonegripGloves: {
    key: "stonegripGloves",
    type: "gear",
    slot: "gloves",
    flavor: "Heavy knuckles with a miner's charm tucked under the wrist."
  }
};
const normalGearKeys = Object.keys(itemDefs);
const itemQualityDefs = [
  { key: "common", label: "Common", chance: 0.8, color: "#f4f4f4", statScale: 1, minRoll: 0.86, maxRoll: 1.05 },
  { key: "rare", label: "Rare", chance: 0.15, color: "#4ea4ff", statScale: 1.55, minRoll: 0.92, maxRoll: 1.12 },
  { key: "epic", label: "Epic", chance: 0.03, color: "#b86cff", statScale: 2.35, minRoll: 0.96, maxRoll: 1.18 },
  { key: "legendary", label: "Legendary", chance: 0.02, color: "#ff9c2f", statScale: 3.4, minRoll: 1, maxRoll: 1.24 }
];
const mythicQualityDef = { key: "mythic", label: "Mythic", chance: 0, color: "#ff4646", statScale: 5.2, minRoll: 1.04, maxRoll: 1.32 };
const qualityByKey = Object.fromEntries([...itemQualityDefs, mythicQualityDef].map((quality) => [quality.key, quality]));
const dustResourceDefs = [
  { key: "commonDust", quality: "common", label: "Common Dust", color: "#f4f4f4" },
  { key: "rareDust", quality: "rare", label: "Rare Dust", color: "#4ea4ff" },
  { key: "epicDust", quality: "epic", label: "Epic Dust", color: "#b86cff" },
  { key: "legendaryDust", quality: "legendary", label: "Legendary Dust", color: "#ff9c2f" },
  { key: "mythicDust", quality: "mythic", label: "Mythic Dust", color: "#ff4646" }
];
const dustResourceByQuality = Object.fromEntries(dustResourceDefs.map((resource) => [resource.quality, resource]));
const defaultInventoryResources = Object.fromEntries(dustResourceDefs.map((resource) => [resource.key, 0]));
function emptyInventoryBags() {
  return Object.fromEntries(equipmentSlots.map((slot) => [slot.key, Array(INVENTORY_SIZE).fill(null)]));
}
const gearNameParts = [
  {
    common: { prefix: "Moss-Stitched", noun: "Grove" },
    rare: { prefix: "Glowbark", noun: "Verdant" },
    epic: { prefix: "Elderbloom", noun: "Wildheart" },
    legendary: { title: "Heartroot" }
  },
  {
    common: { prefix: "Sandworn", noun: "Dune" },
    rare: { prefix: "Emberglass", noun: "Sunforged" },
    epic: { prefix: "Miragefire", noun: "Cinderlord" },
    legendary: { title: "Sunsunder" }
  },
  {
    common: { prefix: "Frostworn", noun: "Peak" },
    rare: { prefix: "Rimeguard", noun: "Icebound" },
    epic: { prefix: "Aurora", noun: "Glacier" },
    legendary: { title: "Wintercrown" }
  },
  {
    common: { prefix: "Reedwoven", noun: "Marsh" },
    rare: { prefix: "Moonmire", noun: "Lanternlit" },
    epic: { prefix: "Blackwater", noun: "Fenlord" },
    legendary: { title: "Kelpshadow" }
  },
  {
    common: { prefix: "Stormscuffed", noun: "Cliff" },
    rare: { prefix: "Voltsteel", noun: "Thunderforged" },
    epic: { prefix: "Runebolt", noun: "Skybreaker" },
    legendary: { title: "Tempestforge" }
  },
  {
    common: { prefix: "Star-Etched", noun: "Abyss" },
    rare: { prefix: "Astral", noun: "Cometborn" },
    epic: { prefix: "Voidglass", noun: "Eclipse" },
    legendary: { title: "Starfall" }
  }
];
const gearSlotNames = {
  helm: { common: "Cap", rare: "Helm", epic: "Crown", legendary: "Crown" },
  chest: { common: "Vest", rare: "Chestguard", epic: "Cuirass", legendary: "Aegis" },
  legs: { common: "Greaves", rare: "Legguards", epic: "Treads", legendary: "Sabatons" },
  gloves: { common: "Grips", rare: "Gauntlets", epic: "Handwraps", legendary: "Fists" }
};
const gearRealmIconKeys = ["mossglow", "emberglass", "frostvein", "moonlit", "stormforge", "starfall"];
const gearSlotFlavor = {
  helm: {
    common: "A plain helm with a few travel dents.",
    rare: "A reinforced helm shaped by a careful realm-smith.",
    epic: "A crested helm built to hold a little old magic.",
    legendary: "A crownlike helm made for a champion's last stand."
  },
  chest: {
    common: "A simple chestpiece patched for another hard fight.",
    rare: "A balanced chestguard with stronger plates than it first suggests.",
    epic: "An ornate cuirass layered with protective charms.",
    legendary: "A storied aegis said to turn fate aside for a heartbeat."
  },
  legs: {
    common: "Practical leg guards made for rough ground.",
    rare: "Sturdy legguards tuned for long hunts and quick retreats.",
    epic: "Finely worked treads that seem lighter than their weight.",
    legendary: "Ancient sabatons that carry the echo of forgotten roads."
  },
  gloves: {
    common: "Plain grips with worn palms and serviceable stitching.",
    rare: "Weighted gauntlets made to bite harder into every strike.",
    epic: "Rune-laced handwraps that warm when treasure is near.",
    legendary: "Relic fists made for breaking impossible things."
  }
};
const realmQualityLore = [
  {
    common: "Bits of moss and bark still cling to its seams.",
    rare: "Glowcap resin seals the edges, giving it a soft green pulse.",
    epic: "Elderbloom spores drift inside the metalwork like sleeping fireflies.",
    legendary: "Heartroot sap runs through it, a relic of the grove's oldest guardian."
  },
  {
    common: "Its surface is scratched by sand and dull desert glass.",
    rare: "Emberglass shards catch the light along the rim.",
    epic: "Mirage heat shimmers across it even when the air is still.",
    legendary: "Sunsunder flame burns beneath the plates without consuming them."
  },
  {
    common: "Frost has settled into the cracks and refuses to melt.",
    rare: "Rime crystals line the edges with a cold blue sheen.",
    epic: "Aurora light bends through the icework in quiet waves.",
    legendary: "Wintercrown crystal sings softly, as if the peak itself remembers it."
  },
  {
    common: "Reed fibers and marsh silt are worked into the binding.",
    rare: "Moonmire lacquer gives it a faint lantern glow.",
    epic: "Blackwater charms ripple across the surface like midnight rain.",
    legendary: "Kelpshadow whispers coil around it when the moon is hidden."
  },
  {
    common: "The metal is pitted from cliff rain and forge soot.",
    rare: "Voltsteel studs hum faintly before each strike.",
    epic: "Runebolt marks crawl across it in sharp yellow arcs.",
    legendary: "Tempestforge thunder is trapped inside, waiting for a worthy blow."
  },
  {
    common: "Tiny star marks are etched unevenly into the finish.",
    rare: "Astral dust glints in the joints like a faraway sky.",
    epic: "Voidglass veins bend starlight around the piece.",
    legendary: "Starfall light burns from within, older than the abyss around it."
  }
];

const defaultState = {
  gold: 0,
  diamonds: 0,
  realm: 0,
  encounter: 0,
  levelKills: 0,
  levelGoal: 8,
  levelTappedGold: 0,
  maxLevel: 1,
  enemyHp: 0,
  maxHp: 0,
  bosses: 0,
  taps: 0,
  upgrades: {
    pick: 0,
    miner: 0,
    guild: 0,
    charm: 0,
    alchemist: 0,
    drill: 0,
    treasury: 0,
    standard: 0,
    compass: 0
  },
  boosts: {
    flareUntil: 0,
    magnetUntil: 0,
    tapFrenzyStacks: [],
    etherGainStacks: []
  },
  relics: {
    gildedLens: 0
  },
  cooldowns: {
    judgmentReadyAt: 0
  },
  reborn: {
    sparks: 0,
    upgrades: {
      emberMight: 0,
      ancientCrew: 0,
      goldenMemory: 0
    }
  },
  inventory: {
    nextItemId: 1,
    resources: { ...defaultInventoryResources },
    pendingDrop: null,
    equipment: {
      helm: null,
      chest: null,
      legs: null,
      gloves: null
    },
    bags: emptyInventoryBags()
  },
  lastSeen: Date.now()
};

let state = loadState();
let enemy = null;
let bossStartedAt = Date.now();
let lastFrame = performance.now();
let lastRenderAt = 0;
let frameDelta = 1 / 60;
let animationFrameId = 0;
let animationTimerId = 0;
let activeRenderUntil = performance.now() + 2500;
let canvasSizeCache = { width: 0, height: 0, dpr: 1 };
let hitPulse = 0;
let floaters = [];
let lootParticles = [];
let slashEffects = [];
let judgmentEffects = [];
let enemySpawnSerial = 0;
let ambientParticles = [];
let ambientRealm = -1;
let lastPassiveHealthUpdate = 0;
let lastBossTimerUpdate = 0;
let lastRelicTimerUpdate = 0;
let backgroundCache = { realm: -1, width: 0, height: 0, dpr: 1, canvas: null };
const generatedSpriteFrames = new WeakMap();
let bird = null;
let nextBirdAt = performance.now() + randomInitialBirdDelay();
let diamondFlyby = null;
let nextDiamondAt = performance.now() + randomDiamondDelay(true);
let selectedInventoryIndex = null;
let selectedEquipmentSlot = null;
let selectedOverflowItem = false;
let pendingOverflowItem = state.inventory.pendingDrop;
let activeInventoryView = "gear";
let activeGearSlotView = "helm";
let pendingMassDisenchantQualities = [];
let modalOpenedAt = 0;
let lastInventorySlotActivation = 0;
let lastEquipmentSlotActivation = 0;

const els = {
  gold: document.querySelector("#goldValue"),
  diamonds: document.querySelector("#diamondValue"),
  rebornWallet: document.querySelector("#rebornWalletValue"),
  hudPanel: document.querySelector(".hud-panel"),
  hudHitBlocker: document.querySelector("#hudHitBlocker"),
  stageBand: document.querySelector("#stageBand"),
  optionsToggle: document.querySelector("#optionsToggle"),
  shopToggle: document.querySelector("#shopToggle"),
  shopDialog: document.querySelector("#shopDialog"),
  shopBackdrop: document.querySelector("#shopBackdrop"),
  closeShop: document.querySelector("#closeShop"),
  optionsDialog: document.querySelector("#optionsDialog"),
  optionsBackdrop: document.querySelector("#optionsBackdrop"),
  closeOptions: document.querySelector("#closeOptions"),
  sfxVolume: document.querySelector("#sfxVolume"),
  sfxVolumeValue: document.querySelector("#sfxVolumeValue"),
  musicVolume: document.querySelector("#musicVolume"),
  musicVolumeValue: document.querySelector("#musicVolumeValue"),
  bgMusic: document.querySelector("#bgMusic"),
  levelTrack: document.querySelector("#levelTrack"),
  zoneLevel: document.querySelector("#zoneLevelLabel"),
  mobProgress: document.querySelector("#mobProgressLabel"),
  enemyName: document.querySelector("#enemyName"),
  bossTimer: document.querySelector("#bossTimer"),
  canvas: document.querySelector("#battleCanvas"),
  judgmentCooldown: document.querySelector("#judgmentCooldown"),
  judgmentCooldownTimer: document.querySelector("#judgmentCooldownTimer"),
  inventoryToggle: document.querySelector("#inventoryToggle"),
  inventoryBackdrop: document.querySelector("#inventoryBackdrop"),
  inventoryDialog: document.querySelector("#inventoryDialog"),
  closeInventory: document.querySelector("#closeInventory"),
  inventoryTabs: document.querySelectorAll("[data-inventory-view]"),
  gearSlotTabs: document.querySelectorAll("[data-gear-slot-view]"),
  gearInventoryView: document.querySelector("#gearInventoryView"),
  resourcesInventoryView: document.querySelector("#resourcesInventoryView"),
  equipmentGrid: document.querySelector("#equipmentGrid"),
  inventoryGrid: document.querySelector("#inventoryGrid"),
  resourcesGrid: document.querySelector("#resourcesGrid"),
  openMassDisenchant: document.querySelector("#openMassDisenchant"),
  massDisenchantBackdrop: document.querySelector("#massDisenchantBackdrop"),
  massDisenchantDialog: document.querySelector("#massDisenchantDialog"),
  massDisenchantQualityList: document.querySelector("#massDisenchantQualityList"),
  confirmMassDisenchantSelection: document.querySelector("#confirmMassDisenchantSelection"),
  cancelMassDisenchant: document.querySelector("#cancelMassDisenchant"),
  massDisenchantConfirmDialog: document.querySelector("#massDisenchantConfirmDialog"),
  massDisenchantConfirmText: document.querySelector("#massDisenchantConfirmText"),
  performMassDisenchant: document.querySelector("#performMassDisenchant"),
  cancelMassDisenchantConfirm: document.querySelector("#cancelMassDisenchantConfirm"),
  fullBagBackdrop: document.querySelector("#fullBagBackdrop"),
  fullBagDialog: document.querySelector("#fullBagDialog"),
  fullBagItemIcon: document.querySelector("#fullBagItemIcon"),
  fullBagItemName: document.querySelector("#fullBagItemName"),
  fullBagItemQuality: document.querySelector("#fullBagItemQuality"),
  fullBagItemStats: document.querySelector("#fullBagItemStats"),
  destroyOverflowItem: document.querySelector("#destroyOverflowItem"),
  keepOverflowItem: document.querySelector("#keepOverflowItem"),
  itemDetailBackdrop: document.querySelector("#itemDetailBackdrop"),
  itemDetailDialog: document.querySelector("#itemDetailDialog"),
  itemDetailIcon: document.querySelector("#itemDetailIcon"),
  itemDetailName: document.querySelector("#itemDetailName"),
  itemDetailQuality: document.querySelector("#itemDetailQuality"),
  itemDetailSlot: document.querySelector("#itemDetailSlot"),
  itemDetailStats: document.querySelector("#itemDetailStats"),
  itemDetailFlavor: document.querySelector("#itemDetailFlavor"),
  equipItemButton: document.querySelector("#equipItemButton"),
  dustItemButton: document.querySelector("#dustItemButton"),
  cancelItemDetail: document.querySelector("#cancelItemDetail"),
  itemTooltip: document.querySelector("#itemTooltip"),
  rebornCurrency: document.querySelector("#rebornCurrencyValue"),
  rebornList: document.querySelector("#rebornList"),
  rebornButton: document.querySelector("#rebornButton"),
  rebornBackdrop: document.querySelector("#rebornBackdrop"),
  rebornDialog: document.querySelector("#rebornDialog"),
  rebornReward: document.querySelector("#rebornRewardValue"),
  confirmReborn: document.querySelector("#confirmReborn"),
  cancelReborn: document.querySelector("#cancelReborn"),
  healthFill: document.querySelector("#healthFill"),
  healthText: document.querySelector("#healthText"),
  tapCount: document.querySelector("#tapCountValue"),
  tapDamage: document.querySelector("#tapDamageValue"),
  dps: document.querySelector("#dpsValue"),
  bossCount: document.querySelector("#bossCountValue"),
  upgradeList: document.querySelector("#upgradeList"),
  buffList: document.querySelector("#buffList"),
  toast: document.querySelector("#toast")
};

const ctx = els.canvas.getContext("2d");
const artAssets = {
  backgrounds: loadArt("assets/art/realm-background-atlas.png"),
  encounterEnemies: loadArt("assets/art/enemy-encounter-atlas.png"),
  enemies: loadArt("assets/art/enemy-sprite-atlas.png"),
  wingedChest: loadArt("assets/art/winged-treasure-chest-clean.png"),
  diamondGem: loadArt("assets/art/flying-diamond-spin-clean.png"),
  etherOrb: loadArt("assets/art/ether-icon.png"),
  tapGavel: loadArt("assets/art/tap-gavel.png"),
  greenFlame: loadArt("assets/art/green-flame.png"),
  righteousHammer: loadArt("assets/art/righteous-hammer-strike.png")
};
const generatedSpriteBounds = new WeakMap();
const arenaCenters = [
  { x: 0.5, y: 0.655 },
  { x: 0.5, y: 0.645 },
  { x: 0.5, y: 0.675 },
  { x: 0.5, y: 0.705 },
  { x: 0.5, y: 0.718 },
  { x: 0.5, y: 0.705 }
];

const realmMusicTracks = [
  "assets/audio/Mossglow Path.wav",
  null,
  "assets/audio/Frostbite Idle Run.wav",
  "assets/audio/Swamp.wav",
  null,
  "assets/audio/Orbital Idle Run.wav"
];
const bossMusicTrack = "assets/audio/Boss.wav";

const audio = {
  context: null,
  master: null,
  sfx: null,
  sfxVolume: storedVolume("nugget-realms-sfx-volume", 0.75),
  musicVolume: storedVolume("nugget-realms-music-volume", 0.35),
  musicTrack: "",
  musicMode: ""
};

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem("nugget-realms-save"));
    const merged = saved
      ? {
          ...defaultState,
          ...saved,
          upgrades: { ...defaultState.upgrades, ...saved.upgrades },
          boosts: { ...defaultState.boosts, ...saved.boosts },
          relics: { ...defaultState.relics, ...saved.relics },
          cooldowns: { ...defaultState.cooldowns, ...saved.cooldowns },
          reborn: {
            ...defaultState.reborn,
            ...saved.reborn,
            upgrades: { ...defaultState.reborn.upgrades, ...saved.reborn?.upgrades }
          },
          inventory: normalizeInventory(saved.inventory)
        }
      : { ...defaultState };
    return normalizeLoadedState(merged);
  } catch {
    return normalizeLoadedState({ ...defaultState });
  }
}

function normalizeLoadedState(loaded) {
  const currentLevel = levelFromParts(loaded.realm, loaded.encounter);
  loaded.maxLevel = Math.max(1, currentLevel, Math.floor(Number(loaded.maxLevel) || currentLevel));
  loaded.levelGoal = sanitizeLevelGoal(loaded.levelGoal);
  loaded.levelKills = Math.max(0, Math.min(loaded.levelGoal, Math.floor(Number(loaded.levelKills) || 0)));
  loaded.levelTappedGold = Math.max(0, Math.floor(Number(loaded.levelTappedGold) || 0));
  loaded.boosts = normalizeBoosts(loaded.boosts);
  loaded.cooldowns = normalizeCooldowns(loaded.cooldowns);
  loaded.inventory = normalizeInventory(loaded.inventory);
  return loaded;
}

function normalizeCooldowns(cooldowns) {
  return {
    ...defaultState.cooldowns,
    ...cooldowns,
    judgmentReadyAt: Math.max(0, Number(cooldowns?.judgmentReadyAt) || 0)
  };
}

function normalizeBoosts(boosts) {
  const now = Date.now();
  return {
    ...defaultState.boosts,
    ...boosts,
    flareUntil: Math.max(0, Number(boosts?.flareUntil) || 0),
    magnetUntil: Math.max(0, Number(boosts?.magnetUntil) || 0),
    tapFrenzyStacks: normalizeBuffStack(boosts?.tapFrenzyStacks, now),
    etherGainStacks: normalizeBuffStack(boosts?.etherGainStacks, now)
  };
}

function normalizeBuffStack(stack, now = Date.now()) {
  return Array.isArray(stack)
    ? stack.map((time) => Number(time) || 0).filter((time) => time > now).sort((a, b) => a - b)
    : [];
}

function normalizeInventory(inventory) {
  const bags = emptyInventoryBags();
  if (inventory?.bags && typeof inventory.bags === "object") {
    for (const slot of equipmentSlots) {
      const sourceBag = Array.isArray(inventory.bags?.[slot.key]) ? inventory.bags[slot.key] : [];
      for (let index = 0; index < INVENTORY_SIZE; index += 1) {
        const item = normalizeItem(sourceBag[index]);
        bags[slot.key][index] = item && itemDefs[item.defKey]?.slot === slot.key ? item : null;
      }
    }
  } else {
    const sourceBag = Array.isArray(inventory?.bag) ? inventory.bag : [];
    for (const rawItem of sourceBag) {
      const item = normalizeItem(rawItem);
      const slotKey = itemDefs[item?.defKey]?.slot;
      const targetBag = bags[slotKey];
      if (!item || !targetBag) continue;
      const openIndex = targetBag.findIndex((bagItem) => !bagItem);
      if (openIndex !== -1) targetBag[openIndex] = item;
    }
  }

  const equipment = {};
  for (const slot of equipmentSlots) {
    const item = normalizeItem(inventory?.equipment?.[slot.key]);
    equipment[slot.key] = item && itemDefs[item.defKey]?.slot === slot.key ? item : null;
  }

  const pendingDrop = normalizeItem(inventory?.pendingDrop);
  const highestId = [...Object.values(bags).flat(), ...Object.values(equipment), pendingDrop].reduce((highest, item) => Math.max(highest, Number(item?.id) || 0), 0);
  return {
    nextItemId: Math.max(highestId + 1, Math.floor(Number(inventory?.nextItemId) || 1)),
    resources: normalizeInventoryResources(inventory?.resources),
    pendingDrop,
    equipment,
    bags
  };
}

function normalizeInventoryResources(resources) {
  return Object.fromEntries(dustResourceDefs.map((resource) => [
    resource.key,
    Math.max(0, Math.floor(Number(resources?.[resource.key]) || 0))
  ]));
}

function normalizeItem(item) {
  if (!item || !itemDefs[item.defKey]) return null;
  const source = item.source === "boss" || item.source === "crafted" ? item.source : "normal";
  const quality = item.quality === "mythic" && source === "normal"
    ? "legendary"
    : qualityByKey[item.quality] ? item.quality : "common";
  const dropLevel = itemDropLevel(item);
  const qualityDef = qualityByKey[quality] ?? qualityByKey.common;
  const shouldRebalance = Number(item.gearStatVersion) !== GEAR_STAT_VERSION;
  return {
    id: Math.max(1, Math.floor(Number(item.id) || 0)),
    defKey: item.defKey,
    quality,
    source,
    realm: itemRealmIndex(item),
    dropLevel,
    gearStatVersion: GEAR_STAT_VERSION,
    bonuses: shouldRebalance ? rebalanceItemBonuses(item, qualityDef, dropLevel) : normalizeItemBonuses(item.bonuses)
  };
}

function itemRealmIndex(item) {
  return Math.max(0, Math.floor(Number(item?.realm) || 0)) % realms.length;
}

function itemDropLevel(item) {
  const savedLevel = Math.floor(Number(item?.dropLevel) || Number(item?.level) || 0);
  if (savedLevel > 0) return savedLevel;
  return itemRealmIndex(item) * LEVELS_PER_ZONE + 1;
}

function normalizeItemBonuses(bonuses) {
  return {
    tapDamage: Math.max(0, Math.floor(Number(bonuses?.tapDamage) || 0)),
    dpsMultiplier: Math.max(0, Number(bonuses?.dpsMultiplier) || 0),
    killNuggetMultiplier: Math.max(0, Number(bonuses?.killNuggetMultiplier) || 0),
    tapNuggetMultiplier: Math.max(0, Number(bonuses?.tapNuggetMultiplier) || 0)
  };
}

function storedVolume(key, fallback) {
  const saved = Number.parseFloat(localStorage.getItem(key));
  return Number.isFinite(saved) ? Math.max(0, Math.min(1, saved)) : fallback;
}

function loadArt(src) {
  const image = new Image();
  image.loaded = false;
  image.addEventListener("load", () => {
    image.loaded = true;
  });
  image.src = src;
  return image;
}

function saveState() {
  state.lastSeen = Date.now();
  state.inventory.pendingDrop = pendingOverflowItem;
  localStorage.setItem("nugget-realms-save", JSON.stringify(state));
}

function getRealm() {
  return realms[state.realm % realms.length];
}

function isBoss() {
  return state.encounter === 9;
}

function randomMobGoal() {
  return MIN_MOBS_PER_LEVEL + Math.floor(Math.random() * (MAX_MOBS_PER_LEVEL - MIN_MOBS_PER_LEVEL + 1));
}

function sanitizeLevelGoal(goal) {
  return Math.max(MIN_MOBS_PER_LEVEL, Math.min(MAX_MOBS_PER_LEVEL, Math.floor(Number(goal) || randomMobGoal())));
}

function levelFromParts(realm, encounter) {
  return Math.max(1, Math.floor(Number(realm) || 0) * LEVELS_PER_ZONE + Math.floor(Number(encounter) || 0) + 1);
}

function currentGlobalLevel() {
  return levelFromParts(state.realm, state.encounter);
}

function partsFromLevel(level) {
  const index = Math.max(0, Math.floor(level) - 1);
  return {
    realm: Math.floor(index / LEVELS_PER_ZONE),
    encounter: index % LEVELS_PER_ZONE
  };
}

function enterLevel(level) {
  const parts = partsFromLevel(level);
  state.realm = parts.realm;
  state.encounter = parts.encounter;
  state.levelTappedGold = 0;
  updateTapNuggetReadout(false);
  if (isBoss()) bossStartedAt = Date.now();
}

function ensureFreshLevelGoal() {
  state.levelKills = 0;
  state.levelGoal = randomMobGoal();
}

function canNavigateToLevel(level) {
  const current = currentGlobalLevel();
  if (level < 1 || level > state.maxLevel || Math.abs(level - current) !== 1) return false;
  if (level < current && current < state.maxLevel && !isBoss()) return false;
  return true;
}

function navigateToLevel(level) {
  if (!canNavigateToLevel(level)) return;
  enterLevel(level);
  spawnEnemy(false);
  updateUI();
  saveState();
}

function tapDamage() {
  const allDamage = 1 + state.upgrades.standard * 0.12;
  const drill = 1 + state.upgrades.drill * 0.36;
  const rebornPower = 1 + state.reborn.upgrades.emberMight * 0.15;
  const base = (1 + state.upgrades.pick * 2.4) * drill * allDamage;
  const flare = Date.now() < state.boosts.flareUntil ? 10 : 1;
  return Math.floor(base * flare * tapFrenzyMultiplier() * rebornPower + equipmentBonus("tapDamage"));
}

function dps() {
  const miner = state.upgrades.miner * (1.2 + state.upgrades.miner * 0.45);
  const allDamage = 1 + state.upgrades.standard * 0.12;
  const rebornPower = 1 + state.reborn.upgrades.ancientCrew * 0.12;
  const gearPower = 1 + equipmentBonus("dpsMultiplier");
  return Math.floor(miner * allDamage * rebornPower * gearPower);
}

function nuggetMultiplier() {
  const guild = 1 + state.upgrades.guild * 0.22;
  const treasury = 1 + state.upgrades.treasury * 0.35;
  const rebornGold = 1 + state.reborn.upgrades.goldenMemory * 0.1;
  const magnet = Date.now() < state.boosts.magnetUntil ? 3 : 1;
  return guild * treasury * rebornGold * magnet * etherGainMultiplier() * (1 + equipmentBonus("nuggetMultiplier") + equipmentBonus("killNuggetMultiplier"));
}

function currentEnemyReward() {
  if (!enemy) return 0;
  return Math.max(1, Math.floor((enemy.baseReward ?? enemy.reward ?? 1) * nuggetMultiplier()));
}

function activeBuffStacks(def, now = Date.now()) {
  if (!def?.stackKey) return 0;
  return normalizeBuffStack(state.boosts?.[def.stackKey], now).length;
}

function pruneBuffStacks(now = Date.now()) {
  let changed = false;
  for (const def of buffDefs) {
    if (!def.stackKey) continue;
    const current = Array.isArray(state.boosts?.[def.stackKey]) ? state.boosts[def.stackKey] : [];
    const normalized = normalizeBuffStack(current, now);
    if (normalized.length !== current.length) changed = true;
    state.boosts[def.stackKey] = normalized;
  }
  return changed;
}

function tapFrenzyMultiplier(now = Date.now()) {
  const def = buffDefs.find((buff) => buff.key === "tapFrenzy");
  const stacks = activeBuffStacks(def, now);
  if (!def || stacks <= 0) return 1;
  return stacks >= def.maxStacks ? 3 : 2;
}

function etherGainMultiplier(now = Date.now()) {
  const def = buffDefs.find((buff) => buff.key === "etherGain");
  return 1 + activeBuffStacks(def, now);
}

function equipmentBonus(stat) {
  return Object.values(state.inventory?.equipment ?? {}).reduce((total, item) => {
    const def = itemDefs[item?.defKey];
    return total + (item?.bonuses?.[stat] ?? def?.bonuses?.[stat] ?? 0);
  }, 0);
}

function bossDuration() {
  return 30 + state.upgrades.compass * 2.5;
}

function tapGoldReward() {
  const bossTax = isBoss() ? 0.7 : 1;
  const average = Math.max(1, currentEnemyReward() * 0.008 * bossTax);
  const low = Math.max(1, Math.floor(average * 0.85));
  const high = Math.max(low, Math.ceil(average * 1.18));
  const rolled = low + Math.floor(Math.random() * (high - low + 1));
  const critical = Math.random() < nuggetCritChance();
  const tapGear = 1 + equipmentBonus("tapNuggetMultiplier");
  const amount = Math.max(1, Math.floor((critical ? rolled * 2 : rolled) * tapGear));
  return {
    amount,
    critical,
    low,
    high
  };
}

function tapCritChance() {
  return Math.min(0.25, state.upgrades.charm * 0.025);
}

function nuggetCritChance() {
  return Math.min(0.5, state.relics.gildedLens * 0.05);
}

function rollTapCrit() {
  if (Math.random() >= tapCritChance()) return { critical: false, multiplier: 1 };
  return {
    critical: true,
    multiplier: 2 + state.upgrades.alchemist * 0.12
  };
}

function rollBossGemDrop(bossKill) {
  const chance = Math.min(0.38, 0.055 + bossKill * 0.012);
  if (Math.random() >= chance) {
    return { amount: 0, nextChance: Math.min(0.38, chance + 0.012) };
  }
  const baseAmount = 1 + Math.floor(bossKill / 8);
  const bonusMax = Math.floor(bossKill / 15);
  const bonus = bonusMax > 0 ? Math.floor(Math.random() * (bonusMax + 1)) : 0;
  const luckyExtra = Math.random() < 0.35 ? 1 : 0;
  return { amount: baseAmount + bonus + luckyExtra, nextChance: chance };
}

function creatureArchetype(name) {
  const text = name.toLowerCase();
  const groups = [
    ["fungus", ["mushroom", "glowcap", "mooncap"]],
    ["insect", ["scarab", "scorpion", "mantid", "mite"]],
    ["winged", ["sprite", "pixie", "harpy", "roc", "bat", "wyvern", "valkyrie", "siren", "seraph"]],
    ["serpent", ["drake", "wyrm", "hydra", "basilisk", "lizard", "kelpie"]],
    ["beast", ["boar", "wolf", "jackal", "stag", "ram", "sphinx"]],
    ["stone", ["sentry", "guardian", "gargoyle", "golem", "titan"]],
    ["ooze", ["leech", "slug", "maw"]],
    ["frog", ["croak"]],
    ["caster", ["wisp", "shaman", "ifrit", "witch", "hag", "lich", "seer", "shade"]],
    ["humanoid", ["imp", "knave", "miner", "duelist", "nomad", "knight", "trapper", "archer", "rogue", "raider", "mender", "kobold", "warden"]]
  ];
  return groups.find((group) => group[1].some((word) => text.includes(word)))?.[0] ?? "blob";
}

function enemyPower() {
  const globalEncounter = state.realm * 10 + state.encounter + 1;
  const bossBonus = isBoss() ? 6.5 : 1;
  return Math.floor((18 + globalEncounter * 7) * Math.pow(1.155, globalEncounter) * bossBonus);
}

function spawnEnemy(keepHp = false) {
  const realm = getRealm();
  const cycle = Math.floor(state.realm / realms.length);
  const visualEncounter = isBoss() ? state.encounter : (state.encounter + state.levelKills + enemySpawnSerial) % MOB_LEVELS_PER_ZONE;
  const creatureName = realm.creatures[visualEncounter];
  const suffix = cycle > 0 ? ` ${weapons[cycle % weapons.length]}` : "";
  const hue = palettes[(visualEncounter + cycle) % palettes.length];
  const baseReward = Math.floor((8 + state.realm * 10 + state.encounter * 3) * Math.pow(1.13, state.realm * 10 + state.encounter));
  enemy = {
    name: `${isBoss() ? "Boss: " : ""}${creatureName}${suffix}`,
    baseName: creatureName,
    archetype: creatureArchetype(creatureName),
    visualEncounter,
    color: hue,
    baseReward,
    reward: Math.floor(baseReward * nuggetMultiplier())
  };
  if (!isBoss()) enemySpawnSerial += 1;
  state.maxHp = enemyPower();
  if (!keepHp || state.enemyHp <= 0 || state.enemyHp > state.maxHp) {
    state.enemyHp = state.maxHp;
  }
  if (isBoss()) bossStartedAt = Date.now();
  markActiveRender(1200);
  updateUI();
  syncMusicForEncounter();
}

function defeatEnemy() {
  markActiveRender(2200);
  const reward = currentEnemyReward();
  const defeatedBoss = isBoss();
  const defeatedLevel = currentGlobalLevel();
  state.gold += reward;
  const center = canvasCenter();
  spawnLootExplosion(reward, defeatedBoss, creatureLootCenter());
  playDefeatSound(defeatedBoss);
  floaters.push({ text: `+${format(reward)}`, x: center.x, y: center.y + 82, age: 0, color: "#f6bd3a" });
  if (!defeatedBoss) rollNormalGearDrop();

  if (defeatedBoss) {
    const bossKill = state.bosses + 1;
    const gemDrop = rollBossGemDrop(bossKill);
    state.bosses = bossKill;
    const nextLevel = defeatedLevel + 1;
    state.maxLevel = Math.max(state.maxLevel, nextLevel);
    ensureFreshLevelGoal();
    enterLevel(nextLevel);
    if (gemDrop.amount > 0) {
      state.diamonds += gemDrop.amount;
      spawnGemExplosion(gemDrop.amount);
      playGemSound();
      floaters.push({ text: `+${gemDrop.amount} diamonds`, x: center.x, y: center.y + 38, age: 0, color: "#63dbff" });
      toast(`Boss dropped ${gemDrop.amount} diamonds. Entering ${getRealm().name}.`);
    } else {
      toast(`Boss defeated. Gem chance is now ${Math.round(gemDrop.nextChance * 100)}%.`);
    }
  } else if (defeatedLevel >= state.maxLevel) {
    state.levelKills += 1;
    if (state.levelKills >= state.levelGoal) {
      const nextLevel = defeatedLevel + 1;
      state.maxLevel = Math.max(state.maxLevel, nextLevel);
      ensureFreshLevelGoal();
      enterLevel(nextLevel);
      toast(`Level ${defeatedLevel} cleared.`);
    }
  }
  spawnEnemy();
  saveState();
}

function damageEnemy(amount, x = null, y = null, options = {}) {
  state.enemyHp = Math.max(0, state.enemyHp - amount);
  if (options.visible) {
    const hitPoint = x === null || y === null ? canvasCenter() : { x, y };
    const sprayAngle = -Math.PI / 2 + (Math.random() - 0.5) * (options.critical ? 1.65 : 1.42);
    const spraySpeed = options.critical ? 156 + Math.random() * 110 : 104 + Math.random() * 82;
    markActiveRender(options.critical ? 2200 : 1600);
    if (!options.noPulse) hitPulse = 1;
    spawnHitBurst(hitPoint.x, hitPoint.y, options.critical);
    const label = options.critical ? `CRIT! ${format(amount)}` : `${format(amount)}`;
    floaters.push({
      text: label,
      x: hitPoint.x,
      y: hitPoint.y - (options.critical ? 42 : 30),
      age: 0,
      color: options.color ?? (options.critical ? "#ff4b37" : "#ff6a5a"),
      size: options.size ?? (options.critical ? 50 : 34),
      rise: options.rise ?? (options.critical ? 188 : 144),
      vx: options.vx ?? Math.cos(sprayAngle) * spraySpeed,
      gravity: options.gravity ?? (options.critical ? 28 : 14),
      decay: options.decay ?? (options.critical ? 0.009 : 0.013),
      outline: options.outline ?? (options.critical ? "rgba(70, 0, 0, 0.96)" : "rgba(44, 0, 0, 0.92)")
    });
  }
  if (state.enemyHp <= 0) {
    defeatEnemy();
    return;
  }
  if (options.passive) {
    updatePassiveHealthDisplay();
    return;
  }
  updateUI();
}

function upgradeCost(key) {
  const def = upgradeDefs.find((upgrade) => upgrade.key === key);
  const level = state.upgrades[key];
  if (def.maxLevel && level >= def.maxLevel) return Infinity;
  return Math.floor(def.baseCost * Math.pow(def.costGrowth, level));
}

function buyUpgrade(key) {
  const def = upgradeDefs.find((upgrade) => upgrade.key === key);
  if (def.maxLevel && state.upgrades[key] >= def.maxLevel) {
    toast("Upgrade is already maxed.");
    return;
  }
  const cost = upgradeCost(key);
  if (state.gold < cost) {
    toast("Need more Ether.");
    return;
  }
  state.gold -= cost;
  state.upgrades[key] += 1;
  toast("Upgrade purchased.");
  updateUI();
  saveState();
}

function buffCost(key) {
  const def = buffDefs.find((buff) => buff.key === key);
  if (!def) return Infinity;
  if (def.costType === "diamond") return def.cost;
  const level = currentGlobalLevel();
  if (def.key === "tapFrenzy") {
    const reward = Math.max(1, currentEnemyReward());
    const scaleRamp = Math.min(1, Math.max(0, (level - 1) / 30));
    const rewardScale = def.rewardScale + (def.lateRewardScale - def.rewardScale) * scaleRamp;
    const levelCost = Math.pow(Math.max(1, level), 1.05) * def.levelScale;
    return Math.max(1, Math.floor(def.baseCost + reward * rewardScale + levelCost));
  }
  const levelCost = Math.pow(Math.max(1, level), 1.36) * def.levelScale;
  const rewardCost = Math.max(8, enemy?.reward ?? 8) * def.rewardScale;
  return Math.max(1, Math.floor(def.baseCost + levelCost + rewardCost));
}

function buyBuff(key) {
  const def = buffDefs.find((buff) => buff.key === key);
  if (!def) return;
  const now = Date.now();
  if (def.boostKey) {
    const cost = buffCost(key);
    if (state.diamonds < cost) {
      toast("Need more diamonds.");
      return;
    }
    state.diamonds -= cost;
    state.boosts[def.boostKey] = Math.max(now, state.boosts[def.boostKey] || 0) + def.duration;
    toast(`${def.name} active.`);
    markActiveRender(900);
    updateUI();
    saveState();
    return;
  }
  pruneBuffStacks(now);
  const stacks = state.boosts[def.stackKey];
  if (stacks.length >= def.maxStacks) {
    toast(`${def.name} is already at max stacks.`);
    updateUI();
    return;
  }
  const cost = buffCost(key);
  if (state.gold < cost) {
    toast("Need more Ether.");
    return;
  }
  state.gold -= cost;
  const stackCount = Math.min(def.maxStacks, stacks.length + 1);
  const duration = def.key === "tapFrenzy"
    ? stackCount >= def.maxStacks
      ? def.empoweredDuration
      : Math.min(def.maxDuration, def.duration * stackCount)
    : def.duration;
  const refreshedUntil = now + duration;
  state.boosts[def.stackKey] = Array.from({ length: stackCount }, () => refreshedUntil);
  toast(`${def.name} active: ${state.boosts[def.stackKey].length}/${def.maxStacks} stacks.`);
  markActiveRender(900);
  updateUI();
  saveState();
}

function rollGearQuality() {
  let roll = Math.random();
  for (const quality of itemQualityDefs) {
    roll -= quality.chance;
    if (roll <= 0) return quality;
  }
  return itemQualityDefs[0];
}

function rollRange(min, max, rng = Math.random) {
  return min + rng() * (max - min);
}

function stableItemRoll(item, salt) {
  const id = Math.max(1, Number(item?.id) || 1);
  const raw = Math.sin(id * 12.9898 + salt * 78.233) * 43758.5453;
  return raw - Math.floor(raw);
}

function rebalanceItemBonuses(item, quality, level) {
  let salt = 1;
  return rollGearBonuses(quality, level, () => stableItemRoll(item, salt++));
}

function rollGearBonuses(quality, level = currentGlobalLevel(), rng = Math.random) {
  const scale = quality.statScale * rollRange(quality.minRoll, quality.maxRoll, rng);
  const levelPower = Math.max(1, level);
  const zoneBand = Math.floor((levelPower - 1) / LEVELS_PER_ZONE);
  const damageBase = 1.6 + Math.pow(levelPower, 1.12) * 0.42 + zoneBand * 0.8;
  const percentBase = 0.0015 + Math.pow(levelPower, 1.03) * 0.00032 + zoneBand * 0.0008;
  return {
    tapDamage: Math.max(1, Math.round(damageBase * scale)),
    dpsMultiplier: Number((percentBase * 0.8 * scale).toFixed(4)),
    killNuggetMultiplier: Number((percentBase * 1.05 * scale).toFixed(4)),
    tapNuggetMultiplier: Number((percentBase * 0.95 * scale).toFixed(4))
  };
}

function createItem(defKey) {
  const def = itemDefs[defKey];
  if (!def) return null;
  const quality = rollGearQuality();
  const item = {
    id: state.inventory.nextItemId,
    defKey,
    realm: state.realm % realms.length,
    quality: quality.key,
    source: "normal",
    dropLevel: currentGlobalLevel(),
    gearStatVersion: GEAR_STAT_VERSION,
    bonuses: rollGearBonuses(quality)
  };
  state.inventory.nextItemId += 1;
  return item;
}

function bagForSlot(slotKey) {
  if (!state.inventory.bags || typeof state.inventory.bags !== "object") state.inventory.bags = emptyInventoryBags();
  if (!state.inventory.bags[slotKey]) state.inventory.bags[slotKey] = Array(INVENTORY_SIZE).fill(null);
  return state.inventory.bags[slotKey];
}

function itemBag(item) {
  const slotKey = itemDefs[item?.defKey]?.slot;
  return slotKey ? bagForSlot(slotKey) : null;
}

function storeItemInSlotBag(item) {
  const bag = itemBag(item);
  const slotKey = itemDefs[item?.defKey]?.slot;
  if (!bag || !slotKey) return false;
  const slotIndex = bag.findIndex((bagItem) => !bagItem);
  if (slotIndex === -1) return false;
  bag[slotIndex] = item;
  activeGearSlotView = slotKey;
  return true;
}

function addItemToInventory(defKey, options = {}) {
  const item = createItem(defKey);
  if (!item) return false;
  if (!storeItemInSlotBag(item)) {
    if (pendingOverflowItem) {
      if (!options.silent) toast("Inventory full. Review the waiting drop first.");
      setFullBagOpen(true, pendingOverflowItem);
      return false;
    }
    pendingOverflowItem = item;
    state.inventory.pendingDrop = item;
    setFullBagOpen(true, item);
    saveState();
    return false;
  }
  if (!options.silent) toast(`${itemDisplayName(item)} dropped.`);
  renderInventory();
  if (!options.deferSave) saveState();
  return true;
}

function tryStorePendingOverflowItem() {
  if (!pendingOverflowItem) return false;
  const item = pendingOverflowItem;
  if (!storeItemInSlotBag(item)) return false;
  pendingOverflowItem = null;
  state.inventory.pendingDrop = null;
  toast(`${itemDisplayName(item)} moved into your bag.`);
  return true;
}

function rollNormalGearDrop(options = {}) {
  if (Math.random() >= NORMAL_GEAR_DROP_CHANCE) return false;
  const defKey = normalGearKeys[Math.floor(Math.random() * normalGearKeys.length)];
  return addItemToInventory(defKey, options);
}

function judgmentCooldownRemaining(now = Date.now()) {
  return Math.max(0, (state.cooldowns?.judgmentReadyAt || 0) - now);
}

function canUseJudgmentCooldown(now = Date.now()) {
  return !isBoss() && currentGlobalLevel() >= state.maxLevel && state.levelKills < state.levelGoal && judgmentCooldownRemaining(now) <= 0;
}

function updateCooldownButtons(now = Date.now()) {
  if (!els.judgmentCooldown) return;
  const remaining = judgmentCooldownRemaining(now);
  const cooling = remaining > 0;
  const available = canUseJudgmentCooldown(now);
  const progressLeft = cooling ? Math.min(1, remaining / JUDGMENT_COOLDOWN_MS) : 0;
  els.judgmentCooldown.disabled = !available;
  els.judgmentCooldown.classList.toggle("cooling", cooling);
  els.judgmentCooldown.classList.toggle("ready", available);
  els.judgmentCooldown.style.setProperty("--cooldown-deg", `${Math.round(progressLeft * 360)}deg`);
  els.judgmentCooldown.style.setProperty("--cooldown-gray", cooling ? progressLeft.toFixed(3) : available ? "0" : "1");
  els.judgmentCooldown.style.setProperty("--cooldown-brightness", cooling ? (1.12 - progressLeft * 0.32).toFixed(3) : available ? "1.12" : "0.8");
  els.judgmentCooldown.title = isBoss()
    ? "Hammer of Judgement cannot be used on bosses."
    : currentGlobalLevel() < state.maxLevel
      ? "Hammer of Judgement is for progression levels, not farming."
      : cooling
        ? `Hammer of Judgement ready in ${formatTimer(remaining)}.`
        : "Clear the remaining creatures in this level.";
  if (els.judgmentCooldownTimer) {
    els.judgmentCooldownTimer.textContent = cooling ? formatTimer(remaining) : "";
  }
}

function activateJudgmentCooldown() {
  const now = Date.now();
  if (isBoss()) {
    toast("Hammer of Judgement cannot be used on bosses.");
    return;
  }
  if (currentGlobalLevel() < state.maxLevel) {
    toast("Hammer of Judgement is for progression levels, not farming.");
    return;
  }
  if (judgmentCooldownRemaining(now) > 0) {
    toast(`Hammer of Judgement ready in ${formatTimer(judgmentCooldownRemaining(now))}.`);
    return;
  }
  const kills = Math.max(0, state.levelGoal - state.levelKills);
  if (kills <= 0) return;
  let reward = 0;
  let gearDrops = 0;
  for (let i = 0; i < kills; i += 1) {
    reward += currentEnemyReward();
    if (rollNormalGearDrop({ silent: true, deferSave: true })) gearDrops += 1;
  }
  state.gold += reward;
  state.levelKills = state.levelGoal;
  state.cooldowns.judgmentReadyAt = now + JUDGMENT_COOLDOWN_MS;
  spawnJudgmentEffect();
  spawnLootExplosion(reward, false, creatureLootCenter());
  playDefeatSound(false);
  floaters.push({ text: `+${format(reward)}`, x: canvasCenter().x, y: canvasCenter().y + 82, age: 0, color: "#f6bd3a" });

  const clearedLevel = currentGlobalLevel();
  const nextLevel = clearedLevel + 1;
  state.maxLevel = Math.max(state.maxLevel, nextLevel);
  ensureFreshLevelGoal();
  enterLevel(nextLevel);
  toast("Hammer of Judgement Activated!");
  spawnEnemy();
  renderInventory();
  updateCooldownButtons();
  saveState();
}

function setInventoryOpen(open) {
  if (!open) setItemDetailOpen(false);
  if (!open) hideItemTooltip();
  if (!open) {
    setMassDisenchantOpen(false);
    setMassDisenchantConfirmOpen(false);
  }
  els.inventoryDialog.hidden = !open;
  els.inventoryBackdrop.hidden = !open;
  els.inventoryToggle.setAttribute("aria-expanded", String(open));
  if (open) {
    setInventoryView(activeInventoryView);
    renderInventory();
  }
}

function setInventoryView(view) {
  activeInventoryView = view === "resources" ? "resources" : "gear";
  els.inventoryTabs.forEach((button) => {
    const active = button.dataset.inventoryView === activeInventoryView;
    button.classList.toggle("active", active);
    button.setAttribute("aria-selected", String(active));
  });
  if (els.gearInventoryView) els.gearInventoryView.hidden = activeInventoryView !== "gear";
  if (els.resourcesInventoryView) els.resourcesInventoryView.hidden = activeInventoryView !== "resources";
  if (activeInventoryView === "resources") renderResources();
  if (activeInventoryView === "gear") syncGearSlotTabs();
}

function syncGearSlotTabs() {
  if (!gearInventoryTabs.some((tab) => tab.key === activeGearSlotView)) activeGearSlotView = "helm";
  els.gearSlotTabs.forEach((button) => {
    const active = button.dataset.gearSlotView === activeGearSlotView;
    button.classList.toggle("active", active);
    button.setAttribute("aria-selected", String(active));
  });
}

function setGearSlotView(slotKey) {
  activeGearSlotView = gearInventoryTabs.some((tab) => tab.key === slotKey) ? slotKey : "helm";
  syncGearSlotTabs();
  renderInventory();
}

function setShopOpen(open) {
  els.shopDialog.hidden = !open;
  els.shopBackdrop.hidden = !open;
  els.shopToggle.setAttribute("aria-expanded", String(open));
}

function setFullBagOpen(open, item = pendingOverflowItem) {
  els.fullBagDialog.hidden = !open;
  els.fullBagBackdrop.hidden = !open;
  if (open) modalOpenedAt = performance.now();
  if (!open || !item) return;
  const def = itemDefs[item.defKey];
  const quality = qualityByKey[item.quality] ?? qualityByKey.common;
  const realm = itemRealmIndex(item);
  els.fullBagItemName.textContent = itemDisplayName(item);
  els.fullBagItemName.className = `quality-${quality.key}`;
  els.fullBagItemQuality.textContent = `${quality.label} Gear`;
  els.fullBagItemQuality.className = `item-detail-quality quality-${quality.key}`;
  if (els.fullBagItemStats) els.fullBagItemStats.textContent = itemBonusText(item) || "No bonuses";
  els.fullBagItemIcon.className = `item-detail-icon quality-${quality.key} realm-${realm}`;
  els.fullBagItemIcon.innerHTML = itemIconMarkup(item, def);
}

function setMassDisenchantOpen(open) {
  els.massDisenchantDialog.hidden = !open;
  els.massDisenchantBackdrop.hidden = !open && els.massDisenchantConfirmDialog.hidden;
  if (open) {
    modalOpenedAt = performance.now();
    renderMassDisenchantOptions();
  }
}

function setMassDisenchantConfirmOpen(open) {
  els.massDisenchantConfirmDialog.hidden = !open;
  els.massDisenchantBackdrop.hidden = !open && els.massDisenchantDialog.hidden;
  if (open) modalOpenedAt = performance.now();
}

function setItemDetailOpen(open, source = {}) {
  if (open) hideItemTooltip();
  selectedInventoryIndex = open && Number.isInteger(source.index) ? source.index : null;
  selectedEquipmentSlot = open && source.slot ? source.slot : null;
  selectedOverflowItem = Boolean(open && source.overflow);
  els.itemDetailDialog.hidden = !open;
  els.itemDetailBackdrop.hidden = !open;
  if (open) modalOpenedAt = performance.now();
  if (!open) return;

  const item = selectedOverflowItem
    ? pendingOverflowItem
    : selectedEquipmentSlot
      ? state.inventory.equipment[selectedEquipmentSlot]
      : bagForSlot(activeGearSlotView)[selectedInventoryIndex];
  const def = itemDefs[item?.defKey];
  if (!item || !def) {
    setItemDetailOpen(false);
    return;
  }

  const quality = qualityByKey[item.quality] ?? qualityByKey.common;
  const realm = itemRealmIndex(item);
  els.itemDetailName.textContent = itemDisplayName(item);
  els.itemDetailName.className = `quality-${quality.key}`;
  if (els.itemDetailQuality) {
    els.itemDetailQuality.textContent = `${quality.label} Gear`;
    els.itemDetailQuality.className = `item-detail-quality quality-${quality.key}`;
  }
  els.itemDetailSlot.textContent = `${slotLabel(def.slot)} Slot`;
  els.itemDetailStats.textContent = itemBonusText(item) || "No bonuses";
  if (els.itemDetailFlavor) els.itemDetailFlavor.textContent = itemFlavorText(item, def);
  els.itemDetailIcon.className = `item-detail-icon quality-${quality.key} realm-${realm}`;
  els.itemDetailIcon.innerHTML = itemIconMarkup(item, def);
  els.equipItemButton.textContent = selectedEquipmentSlot ? "Unequip" : "Equip";
  els.equipItemButton.hidden = selectedOverflowItem;
  els.dustItemButton.hidden = selectedEquipmentSlot;
}

function slotLabel(slotKey) {
  return equipmentSlots.find((slot) => slot.key === slotKey)?.label ?? "Item";
}

function openInventoryItemDetails(index) {
  const item = bagForSlot(activeGearSlotView)[index];
  if (!item) return;
  setItemDetailOpen(true, { index });
}

function openEquippedItemDetails(slotKey) {
  const item = state.inventory.equipment[slotKey];
  if (!item) return;
  setItemDetailOpen(true, { slot: slotKey });
}

function equipInventoryItem(index) {
  const item = bagForSlot(activeGearSlotView)[index];
  const def = itemDefs[item?.defKey];
  if (!item || def?.type !== "gear" || !def.slot) return;
  const equipped = state.inventory.equipment[def.slot];
  state.inventory.equipment[def.slot] = item;
  bagForSlot(def.slot)[index] = equipped ?? null;
  activeGearSlotView = def.slot;
  toast(`${itemDisplayName(item)} equipped.`);
  setItemDetailOpen(false);
  updateUI();
  renderInventory();
  saveState();
}

function handleSelectedItemAction() {
  if (performance.now() - modalOpenedAt < 160) return;
  if (selectedEquipmentSlot) {
    unequipSlot(selectedEquipmentSlot);
    return;
  }
  if (selectedOverflowItem) return;
  if (selectedInventoryIndex === null) return;
  equipInventoryItem(selectedInventoryIndex);
}

function selectedLooseItem() {
  if (selectedOverflowItem) return pendingOverflowItem;
  if (selectedInventoryIndex === null) return null;
  return bagForSlot(activeGearSlotView)[selectedInventoryIndex];
}

function removeSelectedLooseItem() {
  if (selectedOverflowItem) {
    pendingOverflowItem = null;
    selectedOverflowItem = false;
    return;
  }
  if (selectedInventoryIndex !== null) {
    bagForSlot(activeGearSlotView)[selectedInventoryIndex] = null;
  }
}

function destroySelectedItemForResources() {
  if (performance.now() - modalOpenedAt < 160) return;
  const item = selectedLooseItem();
  if (!item) return;
  const { amount, resource } = disenchantItem(item);
  removeSelectedLooseItem();
  tryStorePendingOverflowItem();
  toast(`${itemDisplayName(item)} disenchanted into ${amount} ${resource.label}.`);
  setFullBagOpen(false);
  setItemDetailOpen(false);
  renderInventory();
  renderResources();
  saveState();
}

function disenchantItem(item) {
  const qualityKey = qualityByKey[item.quality] ? item.quality : "common";
  const resource = dustResourceByQuality[qualityKey] ?? dustResourceByQuality.common;
  const amount = 1 + Math.floor(Math.random() * 3);
  state.inventory.resources[resource.key] = (state.inventory.resources[resource.key] ?? 0) + amount;
  return { amount, resource };
}

function massDisenchantCandidates(qualities) {
  const selected = new Set(qualities);
  const candidates = [];
  for (const slot of equipmentSlots) {
    const bag = bagForSlot(slot.key);
    for (let index = 0; index < bag.length; index += 1) {
      const item = bag[index];
      const qualityKey = qualityByKey[item?.quality] ? item.quality : "";
      if (item && selected.has(qualityKey)) candidates.push({ slot: slot.key, index, item });
    }
  }
  return candidates;
}

function inventoryQualityCounts() {
  const counts = Object.fromEntries(dustResourceDefs.map((resource) => [resource.quality, 0]));
  for (const slot of equipmentSlots) {
    for (const item of bagForSlot(slot.key)) {
      const qualityKey = qualityByKey[item?.quality] ? item.quality : "";
      if (qualityKey && counts[qualityKey] !== undefined) counts[qualityKey] += 1;
    }
  }
  return counts;
}

function renderMassDisenchantOptions() {
  if (!els.massDisenchantQualityList) return;
  const counts = inventoryQualityCounts();
  els.massDisenchantQualityList.innerHTML = "";
  for (const resource of dustResourceDefs) {
    const quality = qualityByKey[resource.quality] ?? qualityByKey.common;
    const count = counts[resource.quality] ?? 0;
    const label = document.createElement("label");
    label.className = `mass-disenchant-option quality-${resource.quality}${count ? "" : " disabled"}`;
    label.style.setProperty("--quality-color", quality.color);
    label.innerHTML = `
      <input type="checkbox" value="${resource.quality}" ${count ? "" : "disabled"} />
      <strong>${quality.label}</strong>
      <span>${count} item${count === 1 ? "" : "s"}</span>
    `;
    label.querySelector("input").addEventListener("change", updateMassDisenchantSelectionState);
    els.massDisenchantQualityList.append(label);
  }
  updateMassDisenchantSelectionState();
}

function selectedMassDisenchantQualities() {
  return Array.from(els.massDisenchantQualityList?.querySelectorAll("input:checked") ?? []).map((input) => input.value);
}

function updateMassDisenchantSelectionState() {
  if (!els.confirmMassDisenchantSelection) return;
  const count = massDisenchantCandidates(selectedMassDisenchantQualities()).length;
  els.confirmMassDisenchantSelection.disabled = count === 0;
}

function massDisenchantSummary(candidates) {
  const counts = {};
  for (const { item } of candidates) {
    const qualityKey = qualityByKey[item.quality] ? item.quality : "common";
    counts[qualityKey] = (counts[qualityKey] ?? 0) + 1;
  }
  const parts = Object.entries(counts).map(([qualityKey, count]) => {
    const label = qualityByKey[qualityKey]?.label ?? "Common";
    return `${count} ${label}`;
  });
  if (parts.length === 1) {
    const [qualityKey, count] = Object.entries(counts)[0];
    const label = qualityByKey[qualityKey]?.label ?? "Common";
    return `${count} ${label} item${count === 1 ? "" : "s"}`;
  }
  return `${candidates.length} items (${parts.join(", ")})`;
}

function askMassDisenchantConfirmation() {
  if (performance.now() - modalOpenedAt < 160) return;
  pendingMassDisenchantQualities = selectedMassDisenchantQualities();
  const candidates = massDisenchantCandidates(pendingMassDisenchantQualities);
  if (!candidates.length) {
    toast("Choose at least one item quality.");
    updateMassDisenchantSelectionState();
    return;
  }
  els.massDisenchantConfirmText.textContent = `Do you want to disenchant ${massDisenchantSummary(candidates)}?`;
  setMassDisenchantOpen(false);
  setMassDisenchantConfirmOpen(true);
}

function performMassDisenchant() {
  if (performance.now() - modalOpenedAt < 160) return;
  const candidates = massDisenchantCandidates(pendingMassDisenchantQualities);
  if (!candidates.length) {
    setMassDisenchantConfirmOpen(false);
    return;
  }
  const dustTotals = {};
  for (const { slot, index, item } of candidates) {
    const { amount, resource } = disenchantItem(item);
    dustTotals[resource.label] = (dustTotals[resource.label] ?? 0) + amount;
    state.inventory.bags[slot][index] = null;
  }
  pendingMassDisenchantQualities = [];
  tryStorePendingOverflowItem();
  setMassDisenchantConfirmOpen(false);
  renderInventory();
  renderResources();
  saveState();
  const dustText = Object.entries(dustTotals).map(([label, amount]) => `${amount} ${label}`).join(", ");
  toast(`Disenchanted ${candidates.length} items into ${dustText}.`);
}

function destroyOverflowItemNow() {
  if (performance.now() - modalOpenedAt < 160) return;
  if (pendingOverflowItem) {
    const item = pendingOverflowItem;
    const { amount, resource } = disenchantItem(item);
    toast(`${itemDisplayName(item)} disenchanted into ${amount} ${resource.label}.`);
  }
  pendingOverflowItem = null;
  state.inventory.pendingDrop = null;
  setFullBagOpen(false);
  renderResources();
  saveState();
}

function keepOverflowItemForReview() {
  if (performance.now() - modalOpenedAt < 160) return;
  if (!pendingOverflowItem) return;
  setFullBagOpen(false);
  activeInventoryView = "gear";
  activeGearSlotView = itemDefs[pendingOverflowItem.defKey]?.slot ?? activeGearSlotView;
  setInventoryOpen(true);
  toast("Make room, then the waiting item will move into your bag.");
}

function unequipSlot(slotKey) {
  const item = state.inventory.equipment[slotKey];
  if (!item) return;
  const bag = bagForSlot(slotKey);
  const slotIndex = bag.findIndex((bagItem) => !bagItem);
  if (slotIndex === -1) {
    toast(`${slotLabel(slotKey)} bag is full.`);
    return;
  }
  state.inventory.equipment[slotKey] = null;
  bag[slotIndex] = item;
  activeGearSlotView = slotKey;
  toast(`${itemDisplayName(item)} unequipped.`);
  setItemDetailOpen(false);
  updateUI();
  renderInventory();
  saveState();
}

function itemDisplayName(item) {
  const def = itemDefs[item?.defKey];
  const quality = qualityByKey[item?.quality] ?? qualityByKey.common;
  if (!def) return "Gear";
  const slot = def.slot;
  const realm = itemRealmIndex(item);
  const parts = gearNameParts[realm] ?? gearNameParts[0];
  const slotName = gearSlotNames[slot]?.[quality.key] ?? slotLabel(slot);
  if (quality.key === "legendary") return `${parts.legendary.title} ${slotName}`;
  const theme = parts[quality.key] ?? parts.common;
  return `${theme.prefix} ${slotName}`;
}

function itemFlavorText(item, def) {
  const realmIndex = itemRealmIndex(item);
  const realm = realms[realmIndex];
  const quality = qualityByKey[item?.quality] ?? qualityByKey.common;
  const slotKey = def?.slot ?? "chest";
  const slotText = gearSlotFlavor[slotKey]?.[quality.key] ?? "A useful piece of adventuring gear.";
  const realmText = realmQualityLore[realmIndex]?.[quality.key] ?? `It carries the style of ${realm.name}.`;
  if (quality.key === "legendary") return `${slotText} ${realmText}`;
  if (quality.key === "epic") return `${slotText} ${realmText}`;
  if (quality.key === "rare") return `${slotText} ${realmText}`;
  return `${slotText} ${realmText}`;
}

function itemBonusText(item) {
  const def = itemDefs[item?.defKey];
  const bonuses = item?.bonuses ?? def?.bonuses ?? {};
  const parts = [];
  if (bonuses.tapDamage) parts.push(`+${format(bonuses.tapDamage)} tap damage`);
  if (bonuses.dpsMultiplier) parts.push(`+${Math.round(bonuses.dpsMultiplier * 1000) / 10}% DPS`);
  if (bonuses.killNuggetMultiplier) parts.push(`+${Math.round(bonuses.killNuggetMultiplier * 1000) / 10}% Ether on kill`);
  if (bonuses.tapNuggetMultiplier) parts.push(`+${Math.round(bonuses.tapNuggetMultiplier * 1000) / 10}% tap Ether`);
  if (bonuses.nuggetMultiplier) parts.push(`+${Math.round(bonuses.nuggetMultiplier * 1000) / 10}% Ether`);
  return parts.join(", ");
}

function buyRelic(key) {
  if (key === "hammerReset") {
    if (judgmentCooldownRemaining() <= 0) {
      toast("Hammer of Judgement is already ready.");
      updateUI();
      return;
    }
    if (state.diamonds < HAMMER_RESET_COST) {
      toast("Need more diamonds.");
      return;
    }
    state.diamonds -= HAMMER_RESET_COST;
    state.cooldowns.judgmentReadyAt = 0;
    toast("Hammer of Judgement cooldown reset.");
    updateUI();
    saveState();
    return;
  }
  if (key === "gildedLens") {
    const maxLevel = 10;
    if (state.relics.gildedLens >= maxLevel) {
      toast("Gilded Lens is already maxed.");
      return;
    }
    const cost = gildedLensCost();
    if (state.diamonds < cost) {
      toast("Need more diamonds.");
      return;
    }
    state.diamonds -= cost;
    state.relics.gildedLens += 1;
    toast(`Ether crit chance is now ${Math.round(nuggetCritChance() * 100)}%.`);
    updateUI();
    saveState();
    return;
  }
}

function gildedLensCost() {
  return Math.floor(6 * Math.pow(1.55, state.relics.gildedLens));
}

function rebornDepth() {
  return Math.max(currentGlobalLevel(), state.maxLevel || 1);
}

function rebornReward() {
  const depth = rebornDepth();
  const eligibleDepth = Math.max(0, depth - 10);
  return Math.max(0, Math.floor(Math.pow(eligibleDepth, 1.2) / 4 + state.bosses));
}

function canReborn() {
  return state.bosses >= 1;
}

function rebornUpgradeCost(key) {
  const def = rebornUpgradeDefs.find((upgrade) => upgrade.key === key);
  const level = state.reborn.upgrades[key];
  return Math.floor(def.baseCost * Math.pow(def.costGrowth, level));
}

function buyRebornUpgrade(key) {
  const cost = rebornUpgradeCost(key);
  if (state.reborn.sparks < cost) {
    toast("Need more Reborn Sparks.");
    return;
  }
  state.reborn.sparks -= cost;
  state.reborn.upgrades[key] += 1;
  toast("Reborn upgrade purchased.");
  updateUI();
  saveState();
}

function setRebornDialogOpen(open) {
  if (open && !canReborn()) {
    toast("Defeat your first boss to unlock Reborn.");
    return;
  }
  if (open) {
    els.rebornReward.textContent = `${format(rebornReward())} Reborn Sparks`;
  }
  els.rebornDialog.hidden = !open;
  els.rebornBackdrop.hidden = !open;
}

function performReborn() {
  const reward = rebornReward();
  const keptDiamonds = state.diamonds;
  const keptRelics = { ...state.relics };
  const keptReborn = {
    sparks: state.reborn.sparks + reward,
    upgrades: { ...state.reborn.upgrades }
  };

  state = {
    ...defaultState,
    diamonds: keptDiamonds,
    relics: keptRelics,
    reborn: keptReborn,
    inventory: normalizeInventory(null),
    upgrades: { ...defaultState.upgrades },
    boosts: { ...defaultState.boosts },
    maxLevel: 1,
    levelKills: 0,
    levelGoal: randomMobGoal(),
    lastSeen: Date.now()
  };
  bossStartedAt = Date.now();
  floaters = [];
  lootParticles = [];
  bird = null;
  diamondFlyby = null;
  slashEffects = [];
  judgmentEffects = [];
  nextBirdAt = performance.now() + randomInitialBirdDelay();
  nextDiamondAt = performance.now() + randomDiamondDelay(true);
  updateTapNuggetReadout(0, false);
  setRebornDialogOpen(false);
  spawnEnemy(false);
  toast(`Reborn complete. Gained ${format(reward)} Reborn Sparks.`);
  updateUI();
  saveState();
}

async function purchaseSku(sku) {
  const products = {
    diamonds_small: { diamonds: 80, label: "Handful of diamonds added." },
    diamonds_medium: { diamonds: 500, label: "Satchel of diamonds added." },
    starter_bundle: { diamonds: 160, label: "Starter kit added.", boost: true }
  };
  const product = products[sku];
  if (!product) return;

  if (window.AndroidBilling?.purchaseSku) {
    const result = await window.AndroidBilling.purchaseSku(sku);
    if (!result?.ok) {
      toast("Purchase was not completed.");
      return;
    }
  }

  state.diamonds += product.diamonds;
  if (product.boost) state.boosts.magnetUntil = Date.now() + 120_000;
  toast(product.label);
  updateUI();
  saveState();
}

function updateUI() {
  const realm = getRealm();
  els.gold.textContent = format(state.gold);
  els.diamonds.textContent = format(state.diamonds);
  if (els.rebornWallet) els.rebornWallet.textContent = format(state.reborn.sparks);
  els.rebornCurrency.textContent = format(state.reborn.sparks);
  els.zoneLevel.textContent = realm.name;
  if (els.mobProgress) els.mobProgress.textContent = mobProgressText();
  updateEnemyNameDisplay(enemy?.name ?? "");
  updateHealthDisplay();
  if (els.tapCount) els.tapCount.textContent = format(state.taps);
  els.tapDamage.textContent = format(tapDamage());
  els.dps.textContent = format(dps());
  if (els.bossCount) els.bossCount.textContent = format(state.bosses);
  pruneBuffStacks();
  updateBuffCards();
  updateRelicTimers();
  updateCooldownButtons();
  els.rebornButton.disabled = !canReborn();
  els.rebornButton.setAttribute("aria-disabled", String(!canReborn()));
  els.rebornButton.title = canReborn() ? "Trade this run for Reborn Sparks." : "Defeat your first boss to unlock Reborn.";
  document.querySelectorAll("[data-upgrade]").forEach((button) => {
    const key = button.dataset.upgrade;
    const def = upgradeDefs.find((upgrade) => upgrade.key === key);
    const maxed = Boolean(def.maxLevel && state.upgrades[key] >= def.maxLevel);
    const cost = upgradeCost(key);
    button.disabled = maxed || state.gold < cost;
    button.querySelector("[data-cost]").textContent = maxed ? "MAX" : format(cost);
    button.querySelector("[data-level]").textContent = def.maxLevel ? `Lv ${state.upgrades[key]}/${def.maxLevel}` : `Lv ${state.upgrades[key]}`;
  });
  document.querySelectorAll("[data-relic]").forEach((button) => {
    const key = button.dataset.relic;
    if (key === "gildedLens") {
      const maxed = state.relics.gildedLens >= 10;
      const cost = gildedLensCost();
      button.disabled = maxed || state.diamonds < cost;
      button.querySelector("[data-relic-level]").textContent = `Lv ${state.relics.gildedLens}/10 - ${Math.round(nuggetCritChance() * 100)}%`;
      button.querySelector("[data-relic-cost]").innerHTML = maxed ? "MAX" : diamondCostMarkup(cost);
      return;
    }
    if (key === "hammerReset") {
      const cooling = judgmentCooldownRemaining() > 0;
      button.disabled = !cooling || state.diamonds < HAMMER_RESET_COST;
      button.querySelector("[data-reset-status]").textContent = cooling ? `Cooldown: ${formatTimer(judgmentCooldownRemaining())}` : "Hammer ready";
      button.querySelector("[data-reset-cost]").innerHTML = diamondCostMarkup(HAMMER_RESET_COST);
      return;
    }
  });
  document.querySelectorAll("[data-reborn-upgrade]").forEach((button) => {
    const key = button.dataset.rebornUpgrade;
    const def = rebornUpgradeDefs.find((upgrade) => upgrade.key === key);
    const cost = rebornUpgradeCost(key);
    button.disabled = state.reborn.sparks < cost;
    button.querySelector("[data-reborn-level]").textContent = `Lv ${state.reborn.upgrades[key]}`;
    button.querySelector("[data-reborn-cost]").textContent = `${format(cost)} sparks`;
  });
  els.bossTimer.hidden = !isBoss();
  renderLevelTrack();
}

function updateHealthDisplay() {
  const hpPct = Math.max(0, Math.min(100, (state.enemyHp / state.maxHp) * 100));
  const healthHue = Math.round((hpPct / 100) * 120);
  els.healthFill.style.width = `${hpPct}%`;
  els.healthFill.style.background = `linear-gradient(90deg, hsl(${healthHue} 78% 48%), hsl(${Math.max(0, healthHue - 16)} 86% 58%))`;
  els.healthText.textContent = `${format(Math.ceil(state.enemyHp))} / ${format(state.maxHp)}`;
}

function updatePassiveHealthDisplay(now = performance.now()) {
  if (now - lastPassiveHealthUpdate < PASSIVE_HEALTH_FRAME_MS) return;
  lastPassiveHealthUpdate = now;
  updateHealthDisplay();
}

function updateEnemyNameDisplay(name) {
  els.enemyName.textContent = name;
  els.enemyName.classList.toggle("long-name", name.length > 18);
  els.enemyName.classList.toggle("very-long-name", name.length > 25);
}

function diamondCostMarkup(amount) {
  return `<span class="currency-icon diamond"></span><span>${format(amount)}</span>`;
}

function etherCostMarkup(amount) {
  return `<span class="currency-icon gold"></span><span>${format(amount)}</span>`;
}

function buffCostMarkup(def, amount) {
  return def.costType === "diamond" ? diamondCostMarkup(amount) : etherCostMarkup(amount);
}

function updateBuffCards(now = Date.now()) {
  document.querySelectorAll("[data-buff]").forEach((button) => {
    const def = buffDefs.find((buff) => buff.key === button.dataset.buff);
    if (!def) return;
    if (def.boostKey) {
      const remaining = Math.max(0, (state.boosts[def.boostKey] || 0) - now);
      const active = remaining > 0;
      const cost = buffCost(def.key);
      const timer = button.querySelector("[data-buff-timer]");
      button.disabled = state.diamonds < cost;
      button.classList.toggle("active", active);
      button.classList.toggle("maxed", false);
      button.querySelector("[data-buff-stack]").textContent = active ? "Active" : "Timed buff";
      button.querySelector("[data-buff-cost]").innerHTML = buffCostMarkup(def, cost);
      if (timer) {
        timer.textContent = active ? `Fades in ${formatTimer(remaining)}` : "Ready";
        timer.classList.toggle("active", active);
      }
      return;
    }
    const stacks = activeBuffStacks(def, now);
    const maxed = stacks >= def.maxStacks;
    const cost = buffCost(def.key);
    const nextExpire = normalizeBuffStack(state.boosts?.[def.stackKey], now)[0] ?? 0;
    const timer = button.querySelector("[data-buff-timer]");
    button.disabled = maxed || state.gold < cost;
    button.classList.toggle("active", stacks > 0);
    button.classList.toggle("maxed", maxed);
    button.querySelector("[data-buff-stack]").textContent = stacks > 0 ? `${stacks}/${def.maxStacks} active` : `Max ${def.maxStacks} stacks`;
    button.querySelector("[data-buff-cost]").innerHTML = maxed ? "MAX" : buffCostMarkup(def, cost);
    if (timer) {
      timer.textContent = stacks > 0 ? `Fades in ${formatTimer(nextExpire - now)}` : "Ready";
      timer.classList.toggle("active", stacks > 0);
    }
  });
}

function mobProgressText() {
  if (isBoss()) return "Boss battle";
  const current = currentGlobalLevel();
  if (current < state.maxLevel) return "Farming level";
  return `Mobs left: ${Math.max(0, state.levelGoal - state.levelKills)} / ${state.levelGoal}`;
}

function renderLevelTrack() {
  const current = currentGlobalLevel();
  const farmingCurrent = current < state.maxLevel;
  const trackCenter = current < state.maxLevel ? state.maxLevel : current;
  const levels = [trackCenter - 1, trackCenter, trackCenter + 1];
  els.levelTrack.innerHTML = "";

  for (const level of levels) {
    const valid = level >= 1;
    const unlocked = valid && level <= state.maxLevel;
    const offset = level - current;
    const button = document.createElement("button");
    button.type = "button";
    button.className = [
      "level-node",
      offset === 0 ? "current" : offset < 0 ? "past" : "next",
      unlocked ? "unlocked" : "locked"
    ].join(" ");
    button.disabled = !canNavigateToLevel(level);
    button.dataset.level = String(level);
    button.setAttribute("aria-label", valid ? `Level ${level}` : "No previous level");
    if (canNavigateToLevel(level)) {
      bindLevelTile(button, level);
    }

    const parts = partsFromLevel(Math.max(1, level));
    const realmIndex = parts.realm % realms.length;
    const art = document.createElement("span");
    art.className = "level-node-art";
    art.style.backgroundImage = `url("${zoneLevelArt[realmIndex]}")`;
    button.append(art);

    const number = document.createElement("span");
    number.className = "level-number";
    number.textContent = valid && farmingCurrent && level === current ? "Farming" : valid ? level : "-";
    if (valid && farmingCurrent && level === current) number.classList.add("farming-label");
    button.append(number);

    if (offset === 0 && !isBoss() && !farmingCurrent) {
      const mobCounter = document.createElement("span");
      mobCounter.className = "level-mob-counter";
      const remaining = Math.max(0, state.levelGoal - state.levelKills);
      mobCounter.innerHTML = `<span aria-hidden="true">☠</span>${remaining}/${state.levelGoal}`;
      button.append(mobCounter);
    }
    els.levelTrack.append(button);
  }
}

function bindLevelTile(button, level) {
  let lastActivation = 0;
  const activate = (event) => {
    const now = performance.now();
    if (now - lastActivation < 250) return;
    lastActivation = now;
    event.preventDefault();
    event.stopPropagation();
    navigateToLevel(level);
  };
  button.addEventListener("pointerup", activate);
  button.addEventListener("click", activate);
}

function updateTapNuggetReadout(critical = false) {
  void critical;
}

function format(value) {
  if (value < 1000) return `${Math.floor(value)}`;
  const units = ["K", "M", "B", "T", "Qa", "Qi"];
  let scaled = value;
  let unit = "";
  for (const next of units) {
    scaled /= 1000;
    unit = next;
    if (scaled < 1000) break;
  }
  return `${scaled.toFixed(scaled < 10 ? 1 : 0)}${unit}`;
}

function formatTimer(ms) {
  const total = Math.max(0, Math.ceil(ms / 1000));
  if (total < 60) return `${total}s`;
  const minutes = Math.floor(total / 60);
  const seconds = total % 60;
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

function toast(message) {
  els.toast.textContent = message;
  els.toast.classList.add("show");
  clearTimeout(toast.timeout);
  toast.timeout = setTimeout(() => els.toast.classList.remove("show"), 3000);
}

function updateRelicTimers() {
  const now = Date.now();
  if (pruneBuffStacks(now)) saveState();
  updateBuffCards(now);
  updateCooldownButtons(now);
  if (els.tapDamage) els.tapDamage.textContent = format(tapDamage());
  const timers = {
    flare: state.boosts.flareUntil,
    magnet: state.boosts.magnetUntil
  };
  document.querySelectorAll("[data-relic-timer]").forEach((timer) => {
    const remaining = (timers[timer.dataset.relicTimer] ?? 0) - now;
    const active = remaining > 0;
    const card = timer.closest(".timed-relic-card");
    timer.textContent = active ? `Active ${formatTimer(remaining)}` : "Ready";
    timer.classList.toggle("active", active);
    card?.classList.toggle("timed-active", active);
  });
}

function setupAudio() {
  if (audio.context) return;
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) {
    audio.sfxVolume = 0;
    updateVolumeControls();
    return;
  }
  audio.context = new AudioContext();
  audio.master = audio.context.createGain();
  audio.sfx = audio.context.createGain();
  audio.sfx.gain.value = audio.sfxVolume * 0.32;
  audio.master.gain.value = 1;
  audio.sfx.connect(audio.master);
  audio.master.connect(audio.context.destination);
}

function unlockAudio() {
  setupAudio();
  startBackgroundMusic();
  if (!audio.context) return Promise.resolve(false);
  const ready =
    audio.context.state === "suspended"
      ? audio.context.resume().then(() => true).catch(() => false)
      : Promise.resolve(true);
  return ready;
}

function startBackgroundMusic() {
  if (!els.bgMusic) return;
  syncMusicForEncounter();
  if (!currentMusicTrack()) return;
  els.bgMusic.volume = audio.musicVolume;
  if (audio.musicVolume <= 0) {
    els.bgMusic.pause();
    return;
  }
  els.bgMusic.play().catch(() => {});
}

function currentMusicTrack() {
  if (isBoss()) return bossMusicTrack;
  return realmMusicTracks[state.realm % realms.length];
}

function syncMusicForEncounter() {
  if (!els.bgMusic) return;
  const wasPlaying = !els.bgMusic.paused;
  const track = currentMusicTrack();
  if (!track) {
    if (audio.musicMode !== "silent" || els.bgMusic.getAttribute("src")) {
      audio.musicMode = "silent";
      audio.musicTrack = "";
      els.bgMusic.pause();
      els.bgMusic.removeAttribute("src");
      els.bgMusic.load();
    }
    return;
  }

  const trackChanged = audio.musicTrack !== track || els.bgMusic.getAttribute("src") !== track;
  els.bgMusic.loop = true;
  if (trackChanged) {
    audio.musicMode = "realm";
    audio.musicTrack = track;
    els.bgMusic.src = track;
  }
  els.bgMusic.volume = audio.musicVolume;
  if (audio.musicVolume > 0 && (wasPlaying || !trackChanged || audio.context?.state === "running")) {
    els.bgMusic.play().catch(() => {});
  }
}

function playNextMusicTrack() {
  audio.musicMode = "";
  startBackgroundMusic();
}

function setSfxVolume(value) {
  audio.sfxVolume = Math.max(0, Math.min(1, value));
  localStorage.setItem("nugget-realms-sfx-volume", String(audio.sfxVolume));
  if (audio.sfx && audio.context) {
    audio.sfx.gain.setTargetAtTime(audio.sfxVolume * 0.32, audio.context.currentTime, 0.02);
  }
  updateVolumeControls();
}

function setMusicVolume(value) {
  audio.musicVolume = Math.max(0, Math.min(1, value));
  localStorage.setItem("nugget-realms-music-volume", String(audio.musicVolume));
  if (els.bgMusic) {
    els.bgMusic.volume = audio.musicVolume;
    if (audio.musicVolume <= 0) els.bgMusic.pause();
    else startBackgroundMusic();
  }
  updateVolumeControls();
}

function updateVolumeControls() {
  els.sfxVolume.value = Math.round(audio.sfxVolume * 100);
  els.musicVolume.value = Math.round(audio.musicVolume * 100);
  els.sfxVolumeValue.textContent = `${Math.round(audio.sfxVolume * 100)}%`;
  els.musicVolumeValue.textContent = `${Math.round(audio.musicVolume * 100)}%`;
}

function setOptionsOpen(open) {
  els.optionsDialog.hidden = !open;
  els.optionsBackdrop.hidden = !open;
  els.optionsToggle.setAttribute("aria-expanded", String(open));
}

function playTone({ frequency, duration = 0.08, type = "sine", gain = 0.12, destination = null, slideTo = null }) {
  if (audio.sfxVolume <= 0) return;
  setupAudio();
  const output = destination ?? audio.sfx;
  if (!audio.context || !output) return;

  const schedule = () => {
    const now = audio.context.currentTime;
    const osc = audio.context.createOscillator();
    const amp = audio.context.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(frequency, now);
    if (slideTo) osc.frequency.exponentialRampToValueAtTime(slideTo, now + duration);
    amp.gain.setValueAtTime(0.0001, now);
    amp.gain.exponentialRampToValueAtTime(gain, now + 0.008);
    amp.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    osc.connect(amp);
    amp.connect(output);
    osc.start(now);
    osc.stop(now + duration + 0.02);
  };

  if (audio.context.state === "suspended") {
    audio.context.resume().then(() => {
      schedule();
    }).catch(() => {});
    return;
  }

  schedule();
}

function playTapSound(critical = false) {
  playTone({
    frequency: critical ? 620 : 220 + Math.random() * 45,
    slideTo: critical ? 930 : 160 + Math.random() * 35,
    duration: critical ? 0.11 : 0.055,
    type: critical ? "triangle" : "sine",
    gain: critical ? 0.12 : 0.06
  });
}

function playDefeatSound(boss) {
  playTone({ frequency: boss ? 196 : 330, slideTo: boss ? 392 : 495, duration: boss ? 0.22 : 0.14, type: "triangle", gain: boss ? 0.12 : 0.075 });
  if (boss) setTimeout(() => playTone({ frequency: 523, duration: 0.16, type: "triangle", gain: 0.075 }), 90);
}

function playGemSound() {
  playTone({ frequency: 740, slideTo: 1180, duration: 0.18, type: "sine", gain: 0.095 });
}

function markActiveRender(duration = 1800) {
  activeRenderUntil = Math.max(activeRenderUntil, performance.now() + duration);
}

function canvasDimensions() {
  if (!canvasSizeCache.width || !canvasSizeCache.height) resizeCanvas();
  return canvasSizeCache;
}

function isDialogOpen() {
  return Boolean(
    !els.optionsDialog.hidden ||
      !els.shopDialog.hidden ||
      !els.inventoryDialog.hidden ||
      !els.itemDetailDialog.hidden ||
      !els.fullBagDialog.hidden ||
      !els.massDisenchantDialog.hidden ||
      !els.massDisenchantConfirmDialog.hidden ||
      !els.rebornDialog.hidden
  );
}

function hasTransientCanvasWork(now) {
  return (
    now < activeRenderUntil ||
    hitPulse > 0.01 ||
    bird ||
    diamondFlyby ||
    floaters.length > 0 ||
    lootParticles.length > 0 ||
    slashEffects.length > 0 ||
    judgmentEffects.length > 0
  );
}

function targetFrameMs(now) {
  if (isDialogOpen()) return DIALOG_FRAME_MS;
  if (hasTransientCanvasWork(now)) return ACTIVE_FRAME_MS;
  return IDLE_FRAME_MS;
}

function scheduleNextTick(delay = 0) {
  if (animationTimerId) {
    clearTimeout(animationTimerId);
    animationTimerId = 0;
  }
  if (delay > 4) {
    animationTimerId = window.setTimeout(() => {
      animationTimerId = 0;
      animationFrameId = requestAnimationFrame(tick);
    }, delay);
    return;
  }
  animationFrameId = requestAnimationFrame(tick);
}

function stopAnimationLoop() {
  cancelAnimationFrame(animationFrameId);
  if (animationTimerId) {
    clearTimeout(animationTimerId);
    animationTimerId = 0;
  }
}

function resizeCanvas() {
  const rect = els.canvas.getBoundingClientRect();
  const dpr = Math.min(window.devicePixelRatio || 1, MAX_CANVAS_DPR);
  canvasSizeCache = {
    width: rect.width,
    height: rect.height,
    dpr
  };
  els.canvas.width = Math.floor(rect.width * dpr);
  els.canvas.height = Math.floor(rect.height * dpr);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  backgroundCache = { realm: -1, width: 0, height: 0, dpr, canvas: null };
  updateHudDeadZone();
  markActiveRender(900);
}

function randomBirdDelay() {
  return 13000 + Math.random() * 35000;
}

function randomInitialBirdDelay() {
  return 5600 + Math.random() * 10000;
}

function randomDiamondDelay(initial = false) {
  return initial ? 18000 + Math.random() * 17000 : 45000 + Math.random() * 55000;
}

function randomFlybyPath(rect, size, speedMin, speedRange, yMin = 0.16, yRange = 0.45) {
  const direction = Math.random() < 0.5 ? 1 : -1;
  const speed = speedMin + Math.random() * speedRange;
  const travel = rect.width + size * 4;
  const duration = travel / speed;
  const startY = rect.height * (yMin + Math.random() * yRange);
  const drift = rect.height * ((Math.random() - 0.5) * 0.22);
  return {
    x: direction > 0 ? -size * 2.4 - Math.random() * rect.width * 0.16 : rect.width + size * 2.4 + Math.random() * rect.width * 0.16,
    y: startY,
    startY,
    vx: direction * speed,
    vy: drift / Math.max(1.5, duration),
    waveAmp: rect.height * (0.018 + Math.random() * 0.035),
    waveFreq: 1.15 + Math.random() * 2.25,
    wavePhase: Math.random() * Math.PI * 2
  };
}

function spawnBird(now) {
  const rect = canvasDimensions();
  const size = 28 + Math.random() * 8;
  const path = randomFlybyPath(rect, size, 46, 46, 0.18, 0.46);
  bird = {
    ...path,
    size,
    wing: Math.random() * Math.PI * 2,
    age: 0
  };
  nextBirdAt = now + randomBirdDelay();
}

function updateBird(elapsed, now) {
  if (!bird) {
    if (now >= nextBirdAt) spawnBird(now);
    return;
  }

  const rect = canvasDimensions();
  bird.age += elapsed;
  bird.wing += elapsed * 12;
  bird.x += bird.vx * elapsed;
  bird.y =
    bird.startY +
    bird.vy * bird.age +
    Math.sin(bird.age * bird.waveFreq + bird.wavePhase) * bird.waveAmp +
    Math.sin(bird.age * (bird.waveFreq * 0.47) + bird.wavePhase * 0.73) * bird.waveAmp * 0.45;
  if (bird.x < -bird.size * 3.5 || bird.x > rect.width + bird.size * 3.5 || bird.y < -bird.size * 3 || bird.y > rect.height + bird.size * 3) {
    bird = null;
  }
}

function spawnDiamondFlyby(now) {
  const rect = canvasDimensions();
  const size = 7.5 + Math.random() * 2.5;
  const path = randomFlybyPath(rect, size, 74, 58, 0.12, 0.52);
  diamondFlyby = {
    ...path,
    size,
    spin: Math.random() * Math.PI * 2,
    age: 0
  };
  nextDiamondAt = now + randomDiamondDelay();
}

function updateDiamondFlyby(elapsed, now) {
  if (!diamondFlyby) {
    if (now >= nextDiamondAt) spawnDiamondFlyby(now);
    return;
  }

  const rect = canvasDimensions();
  diamondFlyby.age += elapsed;
  diamondFlyby.spin += elapsed * 4;
  diamondFlyby.x += diamondFlyby.vx * elapsed;
  diamondFlyby.y =
    diamondFlyby.startY +
    diamondFlyby.vy * diamondFlyby.age +
    Math.sin(diamondFlyby.age * diamondFlyby.waveFreq + diamondFlyby.wavePhase) * diamondFlyby.waveAmp +
    Math.sin(diamondFlyby.age * (diamondFlyby.waveFreq * 0.53) + diamondFlyby.wavePhase * 0.61) * diamondFlyby.waveAmp * 0.5;
  if (diamondFlyby.x < -diamondFlyby.size * 3.5 || diamondFlyby.x > rect.width + diamondFlyby.size * 3.5 || diamondFlyby.y < -diamondFlyby.size * 4 || diamondFlyby.y > rect.height + diamondFlyby.size * 4) {
    diamondFlyby = null;
  }
}

function drawBird() {
  if (!bird) return;

  if (drawWingedChest()) return;

  const direction = Math.sign(bird.vx) || 1;
  const flap = Math.sin(bird.wing);
  ctx.save();
  ctx.translate(bird.x, bird.y);
  ctx.scale(direction, 1);
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.shadowColor = "rgba(0, 0, 0, 0.36)";
  ctx.shadowBlur = 10;
  ctx.shadowOffsetY = 5;

  ctx.fillStyle = "#ffe4a3";
  ctx.beginPath();
  ctx.ellipse(0, 2, bird.size * 0.62, bird.size * 0.36, -0.12, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#f9bd45";
  ctx.beginPath();
  ctx.arc(bird.size * 0.48, -bird.size * 0.08, bird.size * 0.22, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#ffd25c";
  ctx.beginPath();
  ctx.moveTo(bird.size * 0.66, -bird.size * 0.08);
  ctx.lineTo(bird.size * 0.98, 0);
  ctx.lineTo(bird.size * 0.66, bird.size * 0.1);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = "#ffc857";
  ctx.beginPath();
  ctx.moveTo(-bird.size * 0.12, -bird.size * 0.02);
  ctx.quadraticCurveTo(-bird.size * 0.58, -bird.size * (0.8 + flap * 0.18), -bird.size * 1.05, -bird.size * 0.08);
  ctx.quadraticCurveTo(-bird.size * 0.52, bird.size * (0.32 + flap * 0.08), -bird.size * 0.12, bird.size * 0.14);
  ctx.fill();

  ctx.fillStyle = "#10151c";
  ctx.beginPath();
  ctx.arc(bird.size * 0.54, -bird.size * 0.14, 2.2, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function drawWingedChest() {
  const image = artAssets.wingedChest;
  if (!image.loaded || !image.naturalWidth || !image.naturalHeight) return false;
  const direction = Math.sign(bird.vx) || 1;
  const frameCount = 3;
  const stableFrames = [0, 1, 2, 1];
  const frame = stableFrames[Math.floor(bird.wing / 2.2) % stableFrames.length];
  const cellW = image.naturalWidth / frameCount;
  const cellH = image.naturalHeight;
  const destW = bird.size * 2.22;
  const destH = destW * (cellH / cellW);
  const bob = Math.sin(bird.age * 4.2) * bird.size * 0.08;

  ctx.save();
  ctx.translate(bird.x, bird.y + bob);
  ctx.scale(direction, 1);
  ctx.shadowColor = "rgba(0, 0, 0, 0.4)";
  ctx.shadowBlur = 14;
  ctx.shadowOffsetY = 7;
  ctx.drawImage(image, frame * cellW, 0, cellW, cellH, -destW / 2, -destH / 2, destW, destH);
  ctx.globalCompositeOperation = "screen";
  ctx.globalAlpha = 0.24 + Math.sin(bird.age * 5) * 0.08;
  ctx.fillStyle = "rgba(120, 232, 255, 0.38)";
  ctx.beginPath();
  ctx.ellipse(0, 0, destW * 0.3, destH * 0.24, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
  return true;
}

function drawDiamondFlyby() {
  if (!diamondFlyby) return;
  if (drawGeneratedDiamondFlyby()) return;

  const s = diamondFlyby.size;
  ctx.save();
  ctx.translate(diamondFlyby.x, diamondFlyby.y);
  ctx.rotate(Math.sin(diamondFlyby.spin) * 0.18);
  ctx.shadowColor = "rgba(99, 219, 255, 0.62)";
  ctx.shadowBlur = 18;
  ctx.fillStyle = "#72e8ff";
  ctx.beginPath();
  ctx.moveTo(0, -s);
  ctx.lineTo(s * 0.95, -s * 0.16);
  ctx.lineTo(s * 0.48, s);
  ctx.lineTo(-s * 0.48, s);
  ctx.lineTo(-s * 0.95, -s * 0.16);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = "rgba(255, 255, 255, 0.78)";
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.strokeStyle = "rgba(255, 255, 255, 0.52)";
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(-s * 0.5, -s * 0.12);
  ctx.lineTo(0, s * 0.72);
  ctx.lineTo(s * 0.5, -s * 0.12);
  ctx.moveTo(-s * 0.95, -s * 0.16);
  ctx.lineTo(s * 0.95, -s * 0.16);
  ctx.stroke();
  ctx.restore();
}

function drawGeneratedDiamondFlyby() {
  const image = artAssets.diamondGem;
  if (!image.loaded || !image.naturalWidth || !image.naturalHeight) return false;

  const frameCount = 6;
  const frameW = image.naturalWidth / frameCount;
  const frameTrims = [
    { x: 73, y: 231, w: 279, h: 259 },
    { x: 103, y: 228, w: 251, h: 267 },
    { x: 124, y: 209, w: 129, h: 290 },
    { x: 35, y: 229, w: 250, h: 265 },
    { x: 24, y: 231, w: 278, h: 260 }
  ];
  const sequence = [0, 1, 2, 3, 4, 3, 2, 1];
  const cycle = diamondFlyby.age * 1.75 + diamondFlyby.spin / (Math.PI * 2);
  const cycleUnit = cycle - Math.floor(cycle);
  const sequenceIndex = Math.floor(cycleUnit * sequence.length) % sequence.length;
  const trim = frameTrims[sequence[sequenceIndex]];
  const bob = Math.sin(diamondFlyby.age * 8) * diamondFlyby.size * 0.07;
  const destH = diamondFlyby.size * 2.95;
  const destW = destH * (trim.w / trim.h);

  ctx.save();
  ctx.translate(diamondFlyby.x, diamondFlyby.y + bob);
  ctx.rotate(Math.sin(cycleUnit * Math.PI * 2) * 0.045);
  ctx.drawImage(image, sequence[sequenceIndex] * frameW + trim.x, trim.y, trim.w, trim.h, -destW / 2, -destH / 2, destW, destH);
  drawDiamondSparkles(diamondFlyby.age, diamondFlyby.size, destW, destH);
  ctx.restore();
  return true;
}

function drawDiamondSparkles(age, size, gemW, gemH) {
  const sparkleSeeds = [
    { x: -0.58, y: -0.5, s: 0.92, p: 0.1 },
    { x: 0.52, y: -0.42, s: 1.1, p: 1.7 },
    { x: 0.7, y: 0.06, s: 0.7, p: 3.1 },
    { x: -0.66, y: 0.24, s: 0.78, p: 4.2 },
    { x: 0.1, y: -0.74, s: 0.62, p: 5.4 }
  ];

  ctx.save();
  ctx.globalCompositeOperation = "screen";
  ctx.lineCap = "round";
  for (const sparkle of sparkleSeeds) {
    const pulse = (Math.sin(age * 4.8 + sparkle.p) + 1) / 2;
    const alpha = 0.18 + pulse * 0.82;
    const radius = size * (0.16 + pulse * 0.18) * sparkle.s;
    const x = gemW * sparkle.x * 0.55 + Math.sin(age * 2.1 + sparkle.p) * size * 0.1;
    const y = gemH * sparkle.y * 0.55 + Math.cos(age * 1.8 + sparkle.p) * size * 0.08;

    ctx.globalAlpha = alpha;
    ctx.strokeStyle = "rgba(255, 255, 255, 0.96)";
    ctx.lineWidth = Math.max(1.3, size * 0.07 * sparkle.s);
    ctx.beginPath();
    ctx.moveTo(x - radius, y);
    ctx.lineTo(x + radius, y);
    ctx.moveTo(x, y - radius);
    ctx.lineTo(x, y + radius);
    ctx.stroke();

    ctx.globalAlpha = alpha * 0.55;
    ctx.strokeStyle = "rgba(107, 236, 255, 0.92)";
    ctx.lineWidth = Math.max(0.9, size * 0.045 * sparkle.s);
    ctx.beginPath();
    ctx.moveTo(x - radius * 0.58, y - radius * 0.58);
    ctx.lineTo(x + radius * 0.58, y + radius * 0.58);
    ctx.moveTo(x + radius * 0.58, y - radius * 0.58);
    ctx.lineTo(x - radius * 0.58, y + radius * 0.58);
    ctx.stroke();
  }
  ctx.restore();
}

function birdHit(x, y) {
  if (!bird) return false;
  return Math.hypot(x - bird.x, y - bird.y) <= bird.size * 1.35;
}

function diamondHit(x, y) {
  if (!diamondFlyby) return false;
  return Math.hypot(x - diamondFlyby.x, y - diamondFlyby.y) <= Math.max(20, diamondFlyby.size * 2.6);
}

function collectBird() {
  if (!bird) return;
  markActiveRender(1800);
  const x = bird.x;
  const y = bird.y;
  const reward = Math.max(5, Math.floor(currentEnemyReward() * (0.1 + Math.random() * 0.08)));
  const diamondChance = Math.min(0.04, 0.015 + state.bosses * 0.0005);
  const foundDiamonds = Math.random() < diamondChance;
  state.gold += reward;
  if (foundDiamonds) state.diamonds += 5;
  spawnBirdLootExplosion(x, y, reward, foundDiamonds);
  floaters.push({ text: `+${format(reward)}`, x, y, age: 0, color: "#84e7ff", size: 23, rise: 86, vx: -18 + Math.random() * 36, outline: "rgba(4, 27, 46, 0.9)" });
  if (foundDiamonds) {
    playGemSound();
    floaters.push({ text: "+5 diamonds", x, y: y - 22, age: 0, color: "#63dbff", size: 26, rise: 104, outline: "rgba(5, 30, 46, 0.92)" });
    toast("Winged chest dropped 5 diamonds.");
  } else {
    playDefeatSound(false);
    toast(`Winged chest dropped ${format(reward)} Ether.`);
  }
  bird = null;
  updateUI();
  saveState();
}

function collectDiamondFlyby() {
  if (!diamondFlyby) return;
  markActiveRender(1800);
  const x = diamondFlyby.x;
  const y = diamondFlyby.y;
  const reward = 2 + Math.floor(Math.random() * 4);
  state.diamonds += reward;
  spawnDiamondFlybyExplosion(x, y, reward);
  playGemSound();
  floaters.push({ text: `+${reward} diamonds`, x, y, age: 0, color: "#63dbff", size: 28, rise: 116, outline: "rgba(5, 30, 46, 0.94)" });
  toast(`Sky diamond dropped ${reward} diamonds.`);
  diamondFlyby = null;
  nextDiamondAt = performance.now() + randomDiamondDelay();
  updateUI();
  saveState();
}

function draw(now) {
  const rect = canvasDimensions();
  const w = rect.width;
  const h = rect.height;
  if (w <= 0 || h <= 0) return;
  const realm = getRealm();
  if (!drawGeneratedBackground(w, h)) {
    const grad = ctx.createLinearGradient(0, 0, 0, h);
    grad.addColorStop(0, realm.sky[0]);
    grad.addColorStop(0.58, realm.sky[1]);
    grad.addColorStop(1, realm.ground);
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);
    drawEnvironment(w, h, realm, now);
  }
  drawAmbientParticles(w, h, now, "back");
  drawCreature(w, h, realm, now);
  drawJudgmentEffects(w, h);
  drawBird();
  drawDiamondFlyby();
  drawAmbientParticles(w, h, now, "front");
  drawLootParticles();
  drawSlashEffects();
  drawFloaters(now);
}

function drawGeneratedBackground(w, h) {
  const image = artAssets.backgrounds;
  if (!image.loaded || !image.naturalWidth || !image.naturalHeight) return false;
  const realmIndex = state.realm % realms.length;
  const dpr = canvasSizeCache.dpr || 1;
  if (backgroundCache.canvas && backgroundCache.realm === realmIndex && backgroundCache.width === w && backgroundCache.height === h && backgroundCache.dpr === dpr) {
    ctx.drawImage(backgroundCache.canvas, 0, 0, backgroundCache.canvas.width, backgroundCache.canvas.height, 0, 0, w, h);
    return true;
  }
  const cols = 3;
  const rows = 2;
  const cellW = image.naturalWidth / cols;
  const cellH = image.naturalHeight / rows;
  const sx = (realmIndex % cols) * cellW;
  const sy = Math.floor(realmIndex / cols) * cellH;
  const cacheCanvas = document.createElement("canvas");
  cacheCanvas.width = Math.max(1, Math.ceil(w * dpr));
  cacheCanvas.height = Math.max(1, Math.ceil(h * dpr));
  const cacheCtx = cacheCanvas.getContext("2d");
  cacheCtx.imageSmoothingEnabled = true;
  cacheCtx.imageSmoothingQuality = "high";
  cacheCtx.drawImage(image, sx, sy, cellW, cellH, 0, 0, cacheCanvas.width, cacheCanvas.height);
  backgroundCache = { realm: realmIndex, width: w, height: h, dpr, canvas: cacheCanvas };
  ctx.drawImage(cacheCanvas, 0, 0, cacheCanvas.width, cacheCanvas.height, 0, 0, w, h);
  return true;
}

function drawAmbientParticles(w, h, now, layer) {
  const realmIndex = state.realm % realms.length;
  if (ambientRealm !== realmIndex) {
    ambientRealm = realmIndex;
    ambientParticles = [];
  }
  if (layer === "back") {
    const targetCount = isBoss() ? MAX_AMBIENT_PARTICLES + (IS_ANDROID ? 1 : 6) : MAX_AMBIENT_PARTICLES;
    while (ambientParticles.length < targetCount) {
      ambientParticles.push(createAmbientParticle(w, h, realmIndex, true));
    }
    ambientParticles = ambientParticles.filter((particle) => {
      particle.age += frameDelta;
      particle.x += particle.vx * frameDelta;
      particle.y += particle.vy * frameDelta;
      particle.spin += particle.spinSpeed * frameDelta;
      return particle.age < particle.life && particle.x > -80 && particle.x < w + 80 && particle.y > -80 && particle.y < h + 80;
    });
  }

  ctx.save();
  for (const particle of ambientParticles) {
    if (particle.layer !== layer) continue;
    drawAmbientParticle(particle, now);
  }
  ctx.restore();
}

function createAmbientParticle(w, h, realmIndex, randomAge = false) {
  const def = realmVfx[realmIndex];
  const layer = Math.random() < 0.24 ? "front" : "back";
  const particle = {
    kind: def.kind,
    color: Math.random() < 0.7 ? def.color : def.accent,
    x: Math.random() * w,
    y: Math.random() * h,
    vx: 0,
    vy: 0,
    size: 2 + Math.random() * 4,
    age: 0,
    life: 3 + Math.random() * 5,
    alpha: 0.35 + Math.random() * 0.48,
    spin: Math.random() * Math.PI * 2,
    spinSpeed: -2 + Math.random() * 4,
    layer
  };

  if (def.kind === "firefly") {
    particle.vx = -10 + Math.random() * 20;
    particle.vy = -14 - Math.random() * 18;
    particle.size = 2.5 + Math.random() * 3.5;
  } else if (def.kind === "ember") {
    particle.x = Math.random() * w;
    particle.y = h * (0.68 + Math.random() * 0.22);
    particle.vx = -18 + Math.random() * 36;
    particle.vy = -44 - Math.random() * 52;
    particle.life = 1.5 + Math.random() * 2.4;
  } else if (def.kind === "snow") {
    particle.y = -20 + Math.random() * h;
    particle.vx = -16 + Math.random() * 24;
    particle.vy = 18 + Math.random() * 28;
    particle.size = 1.8 + Math.random() * 4.2;
    particle.life = 5 + Math.random() * 4;
  } else if (def.kind === "marsh") {
    particle.y = h * (0.55 + Math.random() * 0.3);
    particle.vx = -8 + Math.random() * 16;
    particle.vy = -12 - Math.random() * 22;
    particle.size = 5 + Math.random() * 14;
    particle.life = 2 + Math.random() * 3.5;
  } else if (def.kind === "spark") {
    particle.y = h * (0.46 + Math.random() * 0.4);
    particle.vx = -34 + Math.random() * 68;
    particle.vy = -34 - Math.random() * 44;
    particle.size = 2 + Math.random() * 6;
    particle.life = 0.65 + Math.random() * 1.45;
  } else {
    particle.vx = -7 + Math.random() * 14;
    particle.vy = -10 + Math.random() * 20;
    particle.size = 1.8 + Math.random() * 5;
    particle.life = 3 + Math.random() * 4.5;
  }

  if (randomAge) particle.age = Math.random() * particle.life;
  return particle;
}

function drawAmbientParticle(particle, now) {
  const pulse = 0.72 + Math.sin(now / 260 + particle.spin) * 0.28;
  const alpha = Math.max(0, 1 - particle.age / particle.life) * particle.alpha;
  ctx.globalAlpha = alpha;
  ctx.fillStyle = particle.color;
  ctx.strokeStyle = particle.color;
  ctx.lineWidth = Math.max(1, particle.size * 0.28);
  if (particle.kind === "snow") {
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.size * 0.55, 0, Math.PI * 2);
    ctx.fill();
  } else if (particle.kind === "marsh") {
    ctx.globalAlpha = alpha * 0.5;
    ctx.beginPath();
    ctx.ellipse(particle.x, particle.y, particle.size * 1.25, particle.size * 0.45, particle.spin, 0, Math.PI * 2);
    ctx.fill();
  } else if (particle.kind === "spark") {
    ctx.beginPath();
    ctx.moveTo(particle.x - particle.size, particle.y + particle.size * 0.4);
    ctx.lineTo(particle.x + particle.size, particle.y - particle.size * 0.4);
    ctx.stroke();
  } else if (particle.kind === "star") {
    ctx.beginPath();
    ctx.moveTo(particle.x, particle.y - particle.size * pulse);
    ctx.lineTo(particle.x + particle.size * pulse, particle.y);
    ctx.lineTo(particle.x, particle.y + particle.size * pulse);
    ctx.lineTo(particle.x - particle.size * pulse, particle.y);
    ctx.closePath();
    ctx.fill();
  } else {
    ctx.shadowColor = particle.color;
    ctx.shadowBlur = (particle.kind === "firefly" ? 12 : 8) * EFFECT_QUALITY;
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.size * pulse, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;
  }
  ctx.globalAlpha = 1;
}

function drawEnvironment(w, h, realm, now) {
  const t = now / 1000;
  ctx.save();
  ctx.globalAlpha = 0.22;
  ctx.fillStyle = "#ffffff";
  for (let i = 0; i < 18; i += 1) {
    const x = ((i * 83 + t * 8) % (w + 120)) - 60;
    const y = 54 + Math.sin(t + i) * 14 + (i % 4) * 44;
    ctx.beginPath();
    ctx.arc(x, y, 2 + (i % 3), 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();

  ctx.fillStyle = "rgba(0, 0, 0, 0.22)";
  for (let i = 0; i < 4; i += 1) {
    const base = h * (0.58 + i * 0.06);
    ctx.beginPath();
    ctx.moveTo(-80, base);
    for (let x = -80; x < w + 100; x += 110) {
      ctx.lineTo(x + 55, base - 80 - i * 10 - Math.sin(i + x) * 18);
      ctx.lineTo(x + 110, base);
    }
    ctx.lineTo(w + 100, h);
    ctx.lineTo(-80, h);
    ctx.fill();
  }

  ctx.fillStyle = realm.ground;
  ctx.beginPath();
  ctx.ellipse(w / 2, h * 0.84, w * 0.64, h * 0.16, 0, 0, Math.PI * 2);
  ctx.fill();
}

function drawCreature(w, h, realm, now) {
  const t = now / 360;
  const cx = w / 2;
  const cy = h * 0.58 + Math.sin(t) * 5;
  const scale = Math.min(w, h) / 520;
  const squash = 1 - hitPulse * 0.09;
  const stretch = 1 + hitPulse * 0.08;
  const color = enemy?.color ?? realm.accent;
  const archetype = enemy?.archetype ?? "blob";

  if (drawGeneratedCreature(w, h, now)) {
    hitPulse = Math.max(0, hitPulse - 0.11);
    return;
  }

  ctx.save();
  ctx.translate(cx, cy);
  ctx.scale(scale * stretch, scale * squash);
  ctx.shadowColor = "rgba(0, 0, 0, 0.42)";
  ctx.shadowBlur = 26 * EFFECT_QUALITY;
  ctx.shadowOffsetY = 18;

  if (archetype === "fungus") drawFungus(color, realm, t);
  else if (archetype === "insect") drawInsect(color, realm, t);
  else if (archetype === "winged") drawWinged(color, realm, t);
  else if (archetype === "serpent") drawSerpent(color, realm, t);
  else if (archetype === "beast") drawBeast(color, realm, t);
  else if (archetype === "stone") drawStone(color, realm, t);
  else if (archetype === "ooze") drawOoze(color, realm, t);
  else if (archetype === "frog") drawFrog(color, realm, t);
  else if (archetype === "caster") drawCaster(color, realm, t);
  else if (archetype === "humanoid") drawHumanoid(color, realm, t);
  else drawBlobCreature(color, realm, t);

  drawNameGear(enemy?.baseName ?? "", realm, t);
  ctx.restore();
  hitPulse = Math.max(0, hitPulse - 0.11);
}

function drawGeneratedCreature(w, h, now) {
  const exactImage = artAssets.encounterEnemies;
  const useExact = exactImage.loaded && exactImage.naturalWidth && exactImage.naturalHeight;
  const image = useExact ? exactImage : artAssets.enemies;
  if (!image.loaded || !image.naturalWidth || !image.naturalHeight) return false;
  const cols = useExact ? 10 : 6;
  const rows = useExact ? 6 : 2;
  const visualEncounter = enemy?.visualEncounter ?? state.encounter;
  const index = useExact ? (state.realm % realms.length) * 10 + visualEncounter : enemySpriteIndex(enemy?.baseName ?? "", enemy?.archetype ?? "blob");
  const bounds = getGeneratedSpriteBounds(image, cols, rows, index);
  const pulseScaleX = 1 + hitPulse * 0.08;
  const pulseScaleY = 1 - hitPulse * 0.09;
  const idle = Math.sin(now / 420 + state.encounter * 0.7);
  const bob = idle * 6;
  const shake = hitPulse > 0 ? Math.sin(now / 18) * hitPulse * 8 : 0;
  const creatureScale = isBoss() ? 1.12 : 1.2;
  const sourceW = Math.max(1, bounds.maxX - bounds.minX + 1);
  const sourceH = Math.max(1, bounds.maxY - bounds.minY + 1);
  const sourceAspect = sourceW / sourceH;
  const arena = arenaCenter(w, h);
  const safeTop = h * 0.31;
  const availableHeight = Math.max(h * 0.34, arena.y - safeTop);
  const maxVisibleW = w * 0.78 * creatureScale;
  const maxVisibleH = availableHeight * creatureScale;
  const baseVisibleH = Math.min(maxVisibleH, h * 0.5 * creatureScale) * (1 + idle * 0.015);
  let destH = baseVisibleH * pulseScaleY;
  let destW = destH * sourceAspect * pulseScaleX;
  if (destW > maxVisibleW) {
    const fit = maxVisibleW / destW;
    destW *= fit;
    destH *= fit;
  }
  const centerRatio = Math.min(1, Math.max(0, (bounds.centerX - bounds.minX) / sourceW));
  const dx = arena.x - destW * centerRatio + shake;
  const dy = arena.y + bob - destH;

  ctx.save();
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";
  ctx.fillStyle = "rgba(0, 0, 0, 0.34)";
  ctx.beginPath();
  ctx.ellipse(arena.x, arena.y + bob * 0.25, destW * 0.32, h * 0.035, 0, 0, Math.PI * 2);
  ctx.fill();
  drawCreatureAura(w, h, now, destW, arena);
  ctx.shadowColor = "rgba(0, 0, 0, 0.48)";
  ctx.shadowBlur = 22 * EFFECT_QUALITY;
  ctx.shadowOffsetY = 14;
  const spriteFrame = getGeneratedSpriteFrame(image, cols, rows, index, bounds);
  ctx.drawImage(spriteFrame, dx, dy, destW, destH);
  if (hitPulse > 0.05) {
    ctx.globalAlpha = hitPulse * 0.26;
    ctx.shadowColor = "#ffffff";
    ctx.shadowBlur = 18 * EFFECT_QUALITY;
    ctx.drawImage(spriteFrame, dx - 2, dy - 2, destW + 4, destH + 4);
  }
  ctx.restore();
  return true;
}

function arenaCenter(w, h) {
  const def = arenaCenters[state.realm % arenaCenters.length] ?? arenaCenters[0];
  return { x: w * def.x, y: h * Math.min(0.82, def.y + 0.04) };
}

function getGeneratedSpriteBounds(image, cols, rows, index) {
  const cellW = image.naturalWidth / cols;
  const cellH = image.naturalHeight / rows;
  const fallback = { minX: 0, minY: 0, maxX: cellW - 1, maxY: cellH - 1, centerX: cellW / 2 };
  let cached = generatedSpriteBounds.get(image);
  if (!cached || cached.width !== image.naturalWidth || cached.height !== image.naturalHeight || cached.cols !== cols || cached.rows !== rows) {
    cached = { width: image.naturalWidth, height: image.naturalHeight, cols, rows, bounds: [] };
    try {
      const sample = document.createElement("canvas");
      sample.width = image.naturalWidth;
      sample.height = image.naturalHeight;
      const sampleCtx = sample.getContext("2d", { willReadFrequently: true });
      sampleCtx.drawImage(image, 0, 0);
      const pixels = sampleCtx.getImageData(0, 0, sample.width, sample.height).data;
      for (let row = 0; row < rows; row += 1) {
        for (let col = 0; col < cols; col += 1) {
          const startX = Math.round(col * cellW);
          const startY = Math.round(row * cellH);
          const endX = Math.round((col + 1) * cellW);
          const endY = Math.round((row + 1) * cellH);
          const bounds = { minX: cellW, minY: cellH, maxX: -1, maxY: -1, alphaWeight: 0, weightedX: 0 };
          for (let y = startY; y < endY; y += 1) {
            for (let x = startX; x < endX; x += 1) {
              const alpha = pixels[(y * sample.width + x) * 4 + 3];
              if (alpha <= 12) continue;
              const localX = x - startX;
              const localY = y - startY;
              bounds.alphaWeight += alpha;
              bounds.weightedX += localX * alpha;
              bounds.minX = Math.min(bounds.minX, localX);
              bounds.minY = Math.min(bounds.minY, localY);
              bounds.maxX = Math.max(bounds.maxX, localX);
              bounds.maxY = Math.max(bounds.maxY, localY);
            }
          }
          if (bounds.maxX >= 0) {
            bounds.centerX = bounds.alphaWeight > 0 ? bounds.weightedX / bounds.alphaWeight : (bounds.minX + bounds.maxX) / 2;
          }
          cached.bounds.push(bounds.maxX >= 0 ? bounds : fallback);
        }
      }
      generatedSpriteBounds.set(image, cached);
    } catch (error) {
      cached.bounds = Array.from({ length: cols * rows }, () => fallback);
      generatedSpriteBounds.set(image, cached);
    }
  }
  return cached.bounds[index] ?? fallback;
}

function getGeneratedSpriteFrame(image, cols, rows, index, bounds) {
  let cached = generatedSpriteFrames.get(image);
  if (!cached || cached.width !== image.naturalWidth || cached.height !== image.naturalHeight || cached.cols !== cols || cached.rows !== rows) {
    cached = { width: image.naturalWidth, height: image.naturalHeight, cols, rows, frames: new Map() };
    generatedSpriteFrames.set(image, cached);
  }
  const sourceW = Math.max(1, Math.round(bounds.maxX - bounds.minX + 1));
  const sourceH = Math.max(1, Math.round(bounds.maxY - bounds.minY + 1));
  const key = `${index}:${Math.round(bounds.minX)}:${Math.round(bounds.minY)}:${sourceW}:${sourceH}`;
  const savedFrame = cached.frames.get(key);
  if (savedFrame) return savedFrame;

  const cellW = image.naturalWidth / cols;
  const cellH = image.naturalHeight / rows;
  const sx = (index % cols) * cellW + bounds.minX;
  const sy = Math.floor(index / cols) * cellH + bounds.minY;
  const frame = document.createElement("canvas");
  frame.width = sourceW;
  frame.height = sourceH;
  const frameCtx = frame.getContext("2d");
  frameCtx.imageSmoothingEnabled = true;
  frameCtx.imageSmoothingQuality = "high";
  frameCtx.drawImage(image, sx, sy, sourceW, sourceH, 0, 0, sourceW, sourceH);
  cached.frames.set(key, frame);
  return frame;
}

function drawCreatureAura(w, h, now, destW, arena = arenaCenter(w, h)) {
  const def = realmVfx[state.realm % realms.length];
  const pulse = 0.86 + Math.sin(now / 520) * 0.12 + hitPulse * 0.18;
  const radius = destW * (isBoss() ? 0.56 : 0.45) * pulse;
  const x = arena.x;
  const y = arena.y - h * 0.1;
  const glow = ctx.createRadialGradient(x, y, radius * 0.15, x, y, radius);
  glow.addColorStop(0, def.aura);
  glow.addColorStop(0.62, def.aura.replace(/0\.\d+\)/, "0.08)"));
  glow.addColorStop(1, "rgba(0, 0, 0, 0)");
  ctx.save();
  ctx.globalCompositeOperation = "screen";
  ctx.fillStyle = glow;
  ctx.beginPath();
  ctx.ellipse(x, y, radius, radius * 0.72, 0, 0, Math.PI * 2);
  ctx.fill();
  if (isBoss()) {
    ctx.globalAlpha = 0.45 + Math.sin(now / 180) * 0.14;
    ctx.strokeStyle = def.accent;
    ctx.lineWidth = 2.4;
    ctx.beginPath();
    ctx.ellipse(x, y, radius * 0.8, radius * 0.5, now / 1200, 0, Math.PI * 2);
    ctx.stroke();
  }
  ctx.restore();
}

function enemySpriteIndex(name, archetype) {
  const text = name.toLowerCase();
  const realmIndex = state.realm % realms.length;
  if (realmIndex === 0) return text.includes("mushroom") || text.includes("cap") || archetype === "fungus" ? 6 : 0;
  if (realmIndex === 1) return text.includes("jackal") || text.includes("lizard") || text.includes("sphinx") || archetype === "beast" ? 7 : 1;
  if (realmIndex === 2) return text.includes("knight") || text.includes("miner") || text.includes("yeti") || archetype === "humanoid" ? 8 : 2;
  if (realmIndex === 3) return text.includes("croak") || text.includes("pixie") || text.includes("hag") || archetype === "frog" || archetype === "caster" ? 9 : 3;
  if (realmIndex === 4) return text.includes("wyvern") || text.includes("bat") || text.includes("valkyrie") || archetype === "winged" ? 10 : 4;
  return text.includes("maw") || text.includes("mite") || text.includes("slug") || archetype === "ooze" ? 11 : 5;
}

function drawBlobCreature(color, realm, t) {
  ctx.fillStyle = color;
  roundedBlob(0, 20, 180, 205, 44);
  ctx.fill();

  ctx.fillStyle = shade(color, -22);
  roundedBlob(-28, -78, 132, 118, 38);
  ctx.fill();

  drawHorns(realm, 18);
  drawEyes(-38, -78, 38, -78);
  drawArms(color, t);
}

function drawHumanoid(color, realm, t) {
  ctx.fillStyle = shade(color, -10);
  roundedBlob(0, 18, 120, 190, 36);
  ctx.fill();
  ctx.fillStyle = color;
  roundedBlob(0, -88, 112, 108, 34);
  ctx.fill();
  drawHorns(realm, 18);
  drawEyes(-30, -92, 30, -92, 10);
  drawArms(color, t);
  ctx.strokeStyle = shade(color, -35);
  ctx.lineWidth = 14;
  ctx.beginPath();
  ctx.moveTo(-32, 102);
  ctx.lineTo(-46, 140);
  ctx.moveTo(32, 102);
  ctx.lineTo(46, 140);
  ctx.stroke();
}

function drawCaster(color, realm, t) {
  ctx.globalAlpha = 0.92;
  ctx.fillStyle = color;
  roundedBlob(0, 8 + Math.sin(t) * 6, 132, 170, 44);
  ctx.fill();
  ctx.globalAlpha = 0.28;
  ctx.fillStyle = realm.accent;
  ctx.beginPath();
  ctx.arc(0, 24, 112 + Math.sin(t) * 6, 0, Math.PI * 2);
  ctx.fill();
  ctx.globalAlpha = 1;
  ctx.fillStyle = shade(color, -18);
  roundedBlob(0, -84, 98, 92, 32);
  ctx.fill();
  drawEyes(-25, -89, 25, -89, 9);
  drawMagicOrbs(realm, t);
}

function drawFungus(color, realm, t) {
  ctx.fillStyle = "#ead2aa";
  roundedBlob(0, 30, 88, 170, 32);
  ctx.fill();
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.ellipse(0, -68, 124, 66, 0, Math.PI, 0);
  ctx.quadraticCurveTo(78, -18, 0, -12);
  ctx.quadraticCurveTo(-78, -18, -124, -68);
  ctx.fill();
  ctx.fillStyle = realm.accent;
  for (const spot of [[-48, -68, 13], [0, -88, 16], [42, -60, 10]]) {
    ctx.beginPath();
    ctx.arc(spot[0], spot[1], spot[2], 0, Math.PI * 2);
    ctx.fill();
  }
  drawEyes(-22, 4, 22, 4, 8);
  drawTinyFeet(color);
}

function drawInsect(color, realm, t) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.ellipse(0, 8, 116, 78, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = shade(color, -24);
  ctx.beginPath();
  ctx.ellipse(76, -4, 54, 48, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = shade(color, -35);
  ctx.lineWidth = 10;
  ctx.lineCap = "round";
  for (let i = 0; i < 3; i += 1) {
    const y = -28 + i * 28;
    ctx.beginPath();
    ctx.moveTo(-38, y);
    ctx.lineTo(-120, y - 32 + Math.sin(t + i) * 6);
    ctx.moveTo(38, y);
    ctx.lineTo(126, y - 28 - Math.sin(t + i) * 6);
    ctx.stroke();
  }
  if ((enemy?.baseName ?? "").toLowerCase().includes("scorpion")) {
    ctx.strokeStyle = realm.accent;
    ctx.lineWidth = 14;
    ctx.beginPath();
    ctx.moveTo(-92, -22);
    ctx.quadraticCurveTo(-168, -116, -86, -142);
    ctx.stroke();
    ctx.fillStyle = realm.accent;
    ctx.beginPath();
    ctx.moveTo(-78, -155);
    ctx.lineTo(-44, -132);
    ctx.lineTo(-90, -116);
    ctx.closePath();
    ctx.fill();
  }
  drawEyes(55, -15, 93, -15, 8);
}

function drawWinged(color, realm, t) {
  ctx.fillStyle = shade(color, -25);
  ctx.beginPath();
  ctx.moveTo(-52, -10);
  ctx.quadraticCurveTo(-176, -104, -138, 72 + Math.sin(t) * 8);
  ctx.quadraticCurveTo(-94, 34, -48, 34);
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(52, -10);
  ctx.quadraticCurveTo(176, -104, 138, 72 - Math.sin(t) * 8);
  ctx.quadraticCurveTo(94, 34, 48, 34);
  ctx.fill();
  ctx.fillStyle = color;
  roundedBlob(0, 22, 112, 176, 44);
  ctx.fill();
  ctx.fillStyle = shade(color, -16);
  roundedBlob(0, -78, 96, 88, 32);
  ctx.fill();
  drawEyes(-24, -82, 24, -82, 9);
  drawHorns(realm, 15);
}

function drawSerpent(color, realm, t) {
  ctx.strokeStyle = color;
  ctx.lineWidth = 54;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(-112, 62);
  ctx.quadraticCurveTo(-36, -2 + Math.sin(t) * 10, 26, 48);
  ctx.quadraticCurveTo(96, 104, 132, 12);
  ctx.stroke();
  ctx.fillStyle = shade(color, -14);
  roundedBlob(70, -54, 112, 98, 32);
  ctx.fill();
  ctx.fillStyle = realm.accent;
  for (let i = 0; i < (isBoss() ? 3 : 1); i += 1) {
    ctx.beginPath();
    ctx.moveTo(38 + i * 22, -106);
    ctx.lineTo(62 + i * 22, -158);
    ctx.lineTo(78 + i * 22, -96);
    ctx.closePath();
    ctx.fill();
  }
  drawEyes(48, -60, 90, -60, 8);
}

function drawBeast(color, realm, t) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.ellipse(2, 40, 128, 76, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = shade(color, -16);
  roundedBlob(78, -30, 92, 84, 30);
  ctx.fill();
  ctx.strokeStyle = shade(color, -35);
  ctx.lineWidth = 14;
  ctx.lineCap = "round";
  for (const x of [-62, -14, 44, 88]) {
    ctx.beginPath();
    ctx.moveTo(x, 88);
    ctx.lineTo(x - 12 + Math.sin(t + x) * 3, 138);
    ctx.stroke();
  }
  ctx.fillStyle = realm.accent;
  ctx.beginPath();
  ctx.moveTo(52, -72);
  ctx.lineTo(32, -130);
  ctx.lineTo(82, -82);
  ctx.moveTo(96, -72);
  ctx.lineTo(132, -126);
  ctx.lineTo(120, -60);
  ctx.fill();
  drawEyes(56, -36, 92, -36, 8);
}

function drawStone(color, realm, t) {
  ctx.fillStyle = shade(color, -18);
  roundedBlob(0, 36, 156, 172, 20);
  ctx.fill();
  ctx.fillStyle = color;
  roundedBlob(0, -88, 110, 92, 18);
  ctx.fill();
  ctx.strokeStyle = realm.accent;
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(-42, -94);
  ctx.lineTo(-12, -70);
  ctx.lineTo(24, -100);
  ctx.moveTo(-50, 16);
  ctx.lineTo(44, 72);
  ctx.stroke();
  drawEyes(-26, -88, 26, -88, 9);
  drawArms(color, t);
}

function drawOoze(color, realm, t) {
  ctx.globalAlpha = 0.9;
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.ellipse(0, 58, 142, 68, 0, 0, Math.PI * 2);
  ctx.quadraticCurveTo(88, -52, 16, -86);
  ctx.quadraticCurveTo(-88, -42, -142, 58);
  ctx.fill();
  ctx.globalAlpha = 1;
  ctx.fillStyle = shade(color, 28);
  ctx.beginPath();
  ctx.arc(-42, 8, 16, 0, Math.PI * 2);
  ctx.arc(26, -22, 11, 0, Math.PI * 2);
  ctx.fill();
  drawEyes(-28, 16, 28, 16, 9);
}

function drawFrog(color, realm, t) {
  ctx.fillStyle = color;
  roundedBlob(0, 34, 154, 130, 42);
  ctx.fill();
  ctx.fillStyle = shade(color, 18);
  ctx.beginPath();
  ctx.arc(-48, -44, 34, 0, Math.PI * 2);
  ctx.arc(48, -44, 34, 0, Math.PI * 2);
  ctx.fill();
  drawEyes(-48, -50, 48, -50, 10);
  ctx.strokeStyle = shade(color, -30);
  ctx.lineWidth = 14;
  ctx.beginPath();
  ctx.moveTo(-82, 64);
  ctx.quadraticCurveTo(-132, 104 + Math.sin(t) * 8, -78, 126);
  ctx.moveTo(82, 64);
  ctx.quadraticCurveTo(132, 104 - Math.sin(t) * 8, 78, 126);
  ctx.stroke();
}

function drawHorns(realm, offset) {
  const hornCount = isBoss() ? 4 : 2;
  ctx.fillStyle = realm.accent;
  for (let i = 0; i < hornCount; i += 1) {
    const side = i % 2 === 0 ? -1 : 1;
    const hornOffset = hornCount > 2 && i > 1 ? offset + 27 : offset;
    ctx.beginPath();
    ctx.moveTo(side * hornOffset, -125);
    ctx.lineTo(side * (hornOffset + 28), -184);
    ctx.lineTo(side * (hornOffset + 48), -102);
    ctx.closePath();
    ctx.fill();
  }
}

function drawEyes(x1, y1, x2, y2, r = 12) {
  ctx.fillStyle = "#10151c";
  ctx.beginPath();
  ctx.arc(x1, y1, r, 0, Math.PI * 2);
  ctx.arc(x2, y2, r, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#fff9d7";
  ctx.beginPath();
  ctx.arc(x1 + r * 0.32, y1 - r * 0.32, r * 0.34, 0, Math.PI * 2);
  ctx.arc(x2 + r * 0.32, y2 - r * 0.32, r * 0.34, 0, Math.PI * 2);
  ctx.fill();
}

function drawArms(color, t) {
  ctx.strokeStyle = shade(color, -35);
  ctx.lineWidth = 14;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(-86, 5);
  ctx.quadraticCurveTo(-154, 34 + Math.sin(t) * 7, -128, 92);
  ctx.moveTo(86, 5);
  ctx.quadraticCurveTo(154, 34 - Math.sin(t) * 7, 128, 92);
  ctx.stroke();
}

function drawTinyFeet(color) {
  ctx.strokeStyle = shade(color, -35);
  ctx.lineWidth = 12;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(-28, 105);
  ctx.lineTo(-48, 132);
  ctx.moveTo(28, 105);
  ctx.lineTo(48, 132);
  ctx.stroke();
}

function drawMagicOrbs(realm, t) {
  ctx.fillStyle = realm.accent;
  for (let i = 0; i < 4; i += 1) {
    const a = t * 0.9 + i * Math.PI * 0.5;
    ctx.beginPath();
    ctx.arc(Math.cos(a) * 112, -28 + Math.sin(a) * 42, 8, 0, Math.PI * 2);
    ctx.fill();
  }
}

function drawNameGear(name, realm, t) {
  const text = name.toLowerCase();

  if (text.includes("archer")) {
    ctx.strokeStyle = realm.accent;
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.arc(130, 20, 48, -1.4, 1.4);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(130, -28);
    ctx.lineTo(130, 68);
    ctx.stroke();
  }

  if (text.includes("knight") || text.includes("duelist") || text.includes("raider") || text.includes("warden") || state.encounter % 3 === 1 || isBoss()) {
    ctx.strokeStyle = "#dedede";
    ctx.lineWidth = 9;
    ctx.beginPath();
    ctx.moveTo(122, 66);
    ctx.lineTo(188, -44);
    ctx.stroke();
    ctx.fillStyle = realm.accent;
    ctx.beginPath();
    ctx.moveTo(190, -58);
    ctx.lineTo(212, -16);
    ctx.lineTo(170, -31);
    ctx.closePath();
    ctx.fill();
  }

  if (text.includes("guardian") || text.includes("sentry") || text.includes("golem") || state.encounter % 3 === 2 || isBoss()) {
    ctx.strokeStyle = realm.accent;
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.arc(-136, 52, 42, 0.2, Math.PI * 1.76);
    ctx.stroke();
  }
}

function roundedBlob(x, y, w, h, radius) {
  ctx.beginPath();
  ctx.moveTo(x - w / 2 + radius, y - h / 2);
  ctx.quadraticCurveTo(x, y - h / 2 - radius * 0.45, x + w / 2 - radius, y - h / 2);
  ctx.quadraticCurveTo(x + w / 2 + radius * 0.35, y, x + w / 2 - radius, y + h / 2);
  ctx.quadraticCurveTo(x, y + h / 2 + radius * 0.35, x - w / 2 + radius, y + h / 2);
  ctx.quadraticCurveTo(x - w / 2 - radius * 0.35, y, x - w / 2 + radius, y - h / 2);
}

function shade(hex, amount) {
  const raw = hex.replace("#", "");
  const number = Number.parseInt(raw, 16);
  const r = Math.max(0, Math.min(255, (number >> 16) + amount));
  const g = Math.max(0, Math.min(255, ((number >> 8) & 255) + amount));
  const b = Math.max(0, Math.min(255, (number & 255) + amount));
  return `rgb(${r}, ${g}, ${b})`;
}

function drawFloaters(now) {
  ctx.save();
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  if (floaters.length > MAX_FLOATERS) floaters = floaters.slice(-MAX_FLOATERS);
  floaters = floaters.filter((floater) => floater.age < (floater.life ?? 1));
  for (const floater of floaters) {
    floater.age += (floater.decay ?? 0.013) * (frameDelta / 0.016);
    const life = floater.life ?? 1;
    const progress = Math.min(1, floater.age / life);
    const travelX = (floater.vx ?? 0) * floater.age;
    const travelY = -floater.age * (floater.rise ?? 86) + (floater.gravity ?? 0) * floater.age * floater.age;
    const drawX = floater.x + travelX;
    const drawY = floater.y + travelY;
    ctx.font = `900 ${floater.size ?? 24}px system-ui`;
    ctx.globalAlpha = 1 - progress;
    if (floater.outline) {
      ctx.lineWidth = Math.max(3, (floater.size ?? 24) * 0.16);
      ctx.strokeStyle = floater.outline;
      ctx.strokeText(floater.text, drawX, drawY);
    }
    ctx.fillStyle = floater.color;
    ctx.fillText(floater.text, drawX, drawY);
  }
  ctx.restore();
}

function spawnHitBurst(x, y, critical = false) {
  const def = realmVfx[state.realm % realms.length];
  const count = Math.max(2, Math.round((critical ? 12 : 7) * EFFECT_QUALITY));
  for (let i = 0; i < count; i += 1) {
    const angle = Math.random() * Math.PI * 2;
    const speed = (critical ? 130 : 86) + Math.random() * (critical ? 150 : 92);
    lootParticles.push({
      kind: "hit",
      color: Math.random() < 0.55 ? def.color : def.accent,
      x: x + (Math.random() - 0.5) * 36,
      y: y + (Math.random() - 0.5) * 32,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - (critical ? 26 : 12),
      size: (critical ? 5 : 3.5) + Math.random() * (critical ? 8 : 5),
      spin: Math.random() * Math.PI,
      age: 0,
      life: (critical ? 0.46 : 0.34) + Math.random() * 0.24
    });
  }
}

function spawnTapLoot(x, y, amount, critical = false) {
  const normalCount = Math.min(7, Math.max(3, Math.floor(2 + Math.log10(Math.max(2, amount)) * 1.8)));
  const rawCount = critical ? Math.max(9, normalCount * 2) : normalCount;
  const count = Math.max(1, Math.round(rawCount * EFFECT_QUALITY * 0.5));
  for (let i = 0; i < count; i += 1) {
    const angle = -Math.PI * 0.95 + Math.random() * Math.PI * 0.9;
    const speed = (78 + Math.random() * 132) * (critical ? 1.35 : 1);
    const size = critical ? 15 + Math.random() * 12 : 8 + Math.random() * 7;
    lootParticles.push({
      kind: "gold",
      x: x + (Math.random() - 0.5) * 32,
      y: y + (Math.random() - 0.5) * 24,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - (critical ? 68 : 42),
      size,
      spin: Math.random() * Math.PI,
      age: 0,
      life: (critical ? 0.78 : 0.58) + Math.random() * 0.4
    });
  }
}

function spawnBirdLootExplosion(x, y, reward, foundDiamonds) {
  const amountScale = Math.log10(Math.max(10, reward));
  const count = Math.max(4, Math.round(Math.min(18, Math.max(8, Math.floor(7 + amountScale * 4))) * EFFECT_QUALITY));
  for (let i = 0; i < count; i += 1) {
    const angle = -Math.PI + Math.random() * Math.PI;
    const speed = 92 + Math.random() * 180;
    lootParticles.push({
      kind: "gold",
      x: x + (Math.random() - 0.5) * 28,
      y: y + (Math.random() - 0.5) * 24,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 72,
      size: 5 + Math.random() * 6,
      spin: Math.random() * Math.PI,
      age: 0,
      life: 0.72 + Math.random() * 0.5
    });
  }

  if (!foundDiamonds) return;
  const diamondCount = Math.max(3, Math.round(8 * EFFECT_QUALITY));
  for (let i = 0; i < diamondCount; i += 1) {
    const angle = -Math.PI + Math.random() * Math.PI;
    const speed = 120 + Math.random() * 210;
    lootParticles.push({
      kind: "diamond",
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 95,
      size: 7 + Math.random() * 7,
      spin: Math.random() * Math.PI,
      age: 0,
      life: 0.9 + Math.random() * 0.55
    });
  }
}

function spawnDiamondFlybyExplosion(x, y, amount) {
  const count = Math.max(4, Math.round((7 + amount * 2) * EFFECT_QUALITY));
  for (let i = 0; i < count; i += 1) {
    const angle = -Math.PI + Math.random() * Math.PI;
    const speed = 120 + Math.random() * 250;
    lootParticles.push({
      kind: "diamond",
      x: x + (Math.random() - 0.5) * 20,
      y: y + (Math.random() - 0.5) * 18,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 110,
      size: 7 + Math.random() * 8,
      spin: Math.random() * Math.PI,
      age: 0,
      life: 1 + Math.random() * 0.65
    });
  }
}

function spawnLootExplosion(reward, defeatedBoss, center = creatureLootCenter()) {
  const amountScale = Math.log10(Math.max(10, reward));
  const rawCount = Math.min(defeatedBoss ? 82 : 58, Math.max(defeatedBoss ? 34 : 24, Math.floor(18 + amountScale * 8 + (defeatedBoss ? 22 : 0))));
  const count = Math.max(defeatedBoss ? 18 : 14, Math.round(rawCount * EFFECT_QUALITY));
  for (let i = 0; i < count; i += 1) {
    const angle = -Math.PI * 1.06 + Math.random() * Math.PI * 1.12;
    const speed = 100 + Math.random() * (defeatedBoss ? 270 : 210);
    const size = (defeatedBoss ? 17 : 14) + Math.random() * (defeatedBoss ? 14 : 11);
    lootParticles.push({
      kind: "gold",
      x: center.x + (Math.random() - 0.5) * (defeatedBoss ? 92 : 76),
      y: center.y + (Math.random() - 0.5) * (defeatedBoss ? 70 : 56),
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - (defeatedBoss ? 105 : 92),
      size,
      spin: Math.random() * Math.PI,
      age: 0,
      life: 0.75 + Math.random() * 0.75
    });
  }
}

function creatureLootCenter() {
  const rect = canvasDimensions();
  const arena = arenaCenter(rect.width, rect.height);
  return {
    x: arena.x,
    y: Math.max(rect.height * 0.34, arena.y - rect.height * (isBoss() ? 0.19 : 0.17))
  };
}

function spawnGemExplosion(amount) {
  const center = canvasCenter();
  const count = Math.max(4, Math.round(Math.min(18, 6 + amount * 3) * EFFECT_QUALITY));
  for (let i = 0; i < count; i += 1) {
    const angle = -Math.PI + Math.random() * Math.PI;
    const speed = 140 + Math.random() * 240;
    lootParticles.push({
      kind: "diamond",
      x: center.x + (Math.random() - 0.5) * 52,
      y: center.y + 12 + (Math.random() - 0.5) * 34,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 120,
      size: 7 + Math.random() * 8,
      spin: Math.random() * Math.PI,
      age: 0,
      life: 1 + Math.random() * 0.75
    });
  }
}

function spawnSlashEffect(x, y, critical = false) {
  const count = critical ? 2 : 1;
  const baseAngle = (Math.random() - 0.5) * 0.08;
  for (let i = 0; i < count; i += 1) {
    slashEffects.push({
      x,
      y,
      age: 0,
      life: critical ? 0.56 : 0.46,
      angle: baseAngle + i * 0.34,
      size: (critical ? 104 : 82) + Math.random() * (critical ? 10 : 8),
      impactSize: critical ? 48 : 34,
      sparkColor: critical ? "#ffe587" : "#bdf8ff"
    });
  }
  if (slashEffects.length > MAX_SLASH_EFFECTS) slashEffects = slashEffects.slice(-MAX_SLASH_EFFECTS);
}

function drawSlashEffects() {
  slashEffects = slashEffects.filter((slash) => slash.age < slash.life);
  for (const slash of slashEffects) {
    slash.age += frameDelta;
    const t = Math.min(1, slash.age / slash.life);
    const windup = Math.min(1, t / 0.34);
    const easeIn = windup * windup * (3 - 2 * windup);
    const recover = Math.min(1, Math.max(0, (t - 0.34) / 0.66));
    const rebound = Math.sin(recover * Math.PI);
    const recoverEase = recover * recover * (3 - 2 * recover);
    const fade = Math.max(0, 1 - Math.pow(Math.max(0, t - 0.62) / 0.38, 1.55));
    const image = artAssets.tapGavel;
    const size = slash.size * (1.16 - easeIn * 0.22 + rebound * 0.08);
    const pivotX = size * 0.88;
    const pivotY = size * 0.9;
    const strikeX = size * 0.16;
    const strikeY = size * 0.49;
    const localStrikeX = strikeX - pivotX;
    const localStrikeY = strikeY - pivotY;
    const drawX = -pivotX;
    const drawY = -pivotY;
    const approachX = 18 * (1 - easeIn);
    const approachY = -12 * (1 - easeIn);
    const impactAngle = slash.angle - 0.56;
    const windupAngle = slash.angle + 1.04;
    const endAngle = impactAngle + 0.06;
    const incomingAngle = windupAngle + (impactAngle - windupAngle) * easeIn;
    const angle = recover > 0
      ? impactAngle + (endAngle - impactAngle) * recoverEase - rebound * 0.06
      : incomingAngle;
    const impactCos = Math.cos(impactAngle);
    const impactSin = Math.sin(impactAngle);
    const impactOffsetX = localStrikeX * impactCos - localStrikeY * impactSin;
    const impactOffsetY = localStrikeX * impactSin + localStrikeY * impactCos;

    ctx.save();
    ctx.translate(slash.x, slash.y);
    drawGavelImpact(slash, t, fade);
    ctx.translate(-impactOffsetX + approachX, -impactOffsetY + approachY);
    ctx.rotate(angle);
    ctx.globalAlpha = fade;
    ctx.shadowColor = "rgba(0, 0, 0, 0.58)";
    ctx.shadowBlur = Math.max(6, size * 0.08 * EFFECT_QUALITY);
    ctx.shadowOffsetY = Math.max(5, size * 0.05);
    if (image.loaded && image.naturalWidth && image.naturalHeight) {
      ctx.drawImage(image, drawX, drawY, size, size);
    } else {
      drawFallbackGavel(size);
    }
    ctx.restore();
  }
}

function spawnJudgmentEffect() {
  const rect = canvasDimensions();
  judgmentEffects.push({
    x: rect.width * 0.5,
    y: rect.height * 0.5,
    age: 0,
    life: 1.25
  });
  if (judgmentEffects.length > 2) judgmentEffects = judgmentEffects.slice(-2);
  markActiveRender(1800);
}

function drawJudgmentEffects(w, h) {
  judgmentEffects = judgmentEffects.filter((effect) => effect.age < effect.life);
  for (const effect of judgmentEffects) {
    effect.age += frameDelta;
    const t = Math.min(1, effect.age / effect.life);
    const fall = Math.min(1, t / 0.42);
    const fallEase = 1 - Math.pow(1 - fall, 3);
    const fade = t < 0.74 ? 1 : Math.max(0, 1 - (t - 0.74) / 0.26);
    const impact = Math.max(0, 1 - Math.abs(t - 0.42) / 0.24);
    const image = artAssets.righteousHammer;
    const size = Math.min(w, h) * (0.82 + impact * 0.12);
    const x = effect.x;
    const y = -size * 0.5 + (effect.y + h * 0.05 + size * 0.28) * fallEase;

    ctx.save();
    ctx.globalAlpha = fade;
    ctx.globalCompositeOperation = "screen";
    const glow = ctx.createRadialGradient(x, effect.y, 0, x, effect.y, Math.min(w, h) * (0.18 + impact * 0.34));
    glow.addColorStop(0, `rgba(255, 248, 198, ${0.2 + impact * 0.42})`);
    glow.addColorStop(0.45, `rgba(118, 217, 255, ${0.08 + impact * 0.22})`);
    glow.addColorStop(1, "rgba(255, 255, 255, 0)");
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, w, h);
    ctx.restore();

    ctx.save();
    ctx.translate(x, y);
    ctx.globalAlpha = fade;
    ctx.shadowColor = "rgba(255, 232, 147, 0.76)";
    ctx.shadowBlur = Math.max(12, size * 0.045 * EFFECT_QUALITY);
    if (image.loaded && image.naturalWidth && image.naturalHeight) {
      ctx.drawImage(image, -size / 2, -size / 2, size, size);
    }
    ctx.restore();
  }
}

function drawGavelImpact(slash, t, fade) {
  const pulse = Math.max(0, 1 - Math.abs(t - 0.34) / 0.26);
  if (pulse <= 0) return;
  const radius = slash.impactSize * (0.32 + pulse * 0.92);
  ctx.save();
  ctx.globalCompositeOperation = "screen";
  ctx.globalAlpha = pulse * fade;
  ctx.strokeStyle = slash.sparkColor;
  ctx.lineWidth = Math.max(2, slash.impactSize * 0.05);
  ctx.beginPath();
  ctx.ellipse(0, 4, radius, radius * 0.36, 0, 0, Math.PI * 2);
  ctx.stroke();
  for (let i = 0; i < 6; i += 1) {
    const angle = (Math.PI * 2 * i) / 6 + 0.2;
    const inner = radius * 0.34;
    const outer = radius * (0.56 + pulse * 0.34);
    ctx.beginPath();
    ctx.moveTo(Math.cos(angle) * inner, Math.sin(angle) * inner * 0.58);
    ctx.lineTo(Math.cos(angle) * outer, Math.sin(angle) * outer * 0.58);
    ctx.stroke();
  }
  ctx.restore();
}

function drawFallbackGavel(size) {
  ctx.fillStyle = "#8b4a23";
  ctx.strokeStyle = "#f1b75a";
  ctx.lineWidth = Math.max(4, size * 0.04);
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(size * 0.08, size * 0.12);
  ctx.lineTo(size * 0.5, size * 0.54);
  ctx.stroke();
  ctx.fillRect(-size * 0.18, -size * 0.22, size * 0.38, size * 0.24);
  ctx.strokeRect(-size * 0.18, -size * 0.22, size * 0.38, size * 0.24);
}

function drawLootParticles() {
  ctx.save();
  if (lootParticles.length > MAX_LOOT_PARTICLES) lootParticles = lootParticles.slice(-MAX_LOOT_PARTICLES);
  lootParticles = lootParticles.filter((particle) => particle.age < particle.life);
  for (const particle of lootParticles) {
    particle.age += frameDelta;
    particle.vy += 600 * frameDelta;
    particle.x += particle.vx * frameDelta;
    particle.y += particle.vy * frameDelta;
    particle.spin += 11.25 * frameDelta;
    const alpha = Math.max(0, 1 - particle.age / particle.life);
    const etherAlpha = alpha < 0.1 ? alpha * 5.5 : 1;
    ctx.globalAlpha = particle.kind === "gold" ? etherAlpha : alpha;
    ctx.save();
    ctx.translate(particle.x, particle.y);
    ctx.rotate(particle.spin);
    if (particle.kind === "diamond") {
      ctx.fillStyle = "#78e9ff";
      ctx.beginPath();
      ctx.moveTo(0, -particle.size);
      ctx.lineTo(particle.size * 0.88, -particle.size * 0.12);
      ctx.lineTo(particle.size * 0.46, particle.size);
      ctx.lineTo(-particle.size * 0.46, particle.size);
      ctx.lineTo(-particle.size * 0.88, -particle.size * 0.12);
      ctx.closePath();
      ctx.fill();
      ctx.strokeStyle = "rgba(255, 255, 255, 0.72)";
      ctx.lineWidth = 1.5;
      ctx.stroke();
    } else if (particle.kind === "hit") {
      ctx.globalCompositeOperation = "screen";
      ctx.fillStyle = particle.color;
      ctx.shadowColor = particle.color;
      ctx.shadowBlur = 10 * EFFECT_QUALITY;
      ctx.beginPath();
      ctx.moveTo(0, -particle.size);
      ctx.lineTo(particle.size * 0.32, -particle.size * 0.28);
      ctx.lineTo(particle.size, 0);
      ctx.lineTo(particle.size * 0.32, particle.size * 0.28);
      ctx.lineTo(0, particle.size);
      ctx.lineTo(-particle.size * 0.32, particle.size * 0.28);
      ctx.lineTo(-particle.size, 0);
      ctx.lineTo(-particle.size * 0.32, -particle.size * 0.28);
      ctx.closePath();
      ctx.fill();
    } else {
      const image = artAssets.etherOrb;
      if (image.loaded && image.naturalWidth && image.naturalHeight) {
        const drawSize = particle.size * 1.82;
        ctx.shadowColor = "rgba(4, 21, 44, 0.72)";
        ctx.shadowBlur = Math.max(2, particle.size * 0.42 * EFFECT_QUALITY);
        ctx.fillStyle = "rgba(3, 18, 34, 0.48)";
        ctx.beginPath();
        ctx.arc(0, drawSize * 0.05, drawSize * 0.46, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowColor = "rgba(82, 225, 255, 0.42)";
        ctx.shadowBlur = Math.max(3, particle.size * 0.58 * EFFECT_QUALITY);
        ctx.drawImage(image, -drawSize / 2, -drawSize / 2, drawSize, drawSize);
        ctx.restore();
        continue;
      }
      const drawSize = particle.size * 1.45;
      const radius = drawSize * 0.28;
      ctx.fillStyle = "#69dcff";
      ctx.beginPath();
      ctx.moveTo(-drawSize * 0.72 + radius, -drawSize * 0.5);
      ctx.lineTo(drawSize * 0.72 - radius, -drawSize * 0.5);
      ctx.quadraticCurveTo(drawSize * 0.72, -drawSize * 0.5, drawSize * 0.72, -drawSize * 0.5 + radius);
      ctx.lineTo(drawSize * 0.72, drawSize * 0.5 - radius);
      ctx.quadraticCurveTo(drawSize * 0.72, drawSize * 0.5, drawSize * 0.72 - radius, drawSize * 0.5);
      ctx.lineTo(-drawSize * 0.72 + radius, drawSize * 0.5);
      ctx.quadraticCurveTo(-drawSize * 0.72, drawSize * 0.5, -drawSize * 0.72, drawSize * 0.5 - radius);
      ctx.lineTo(-drawSize * 0.72, -drawSize * 0.5 + radius);
      ctx.quadraticCurveTo(-drawSize * 0.72, -drawSize * 0.5, -drawSize * 0.72 + radius, -drawSize * 0.5);
      ctx.fill();
      ctx.fillStyle = "rgba(255, 236, 126, 0.9)";
      ctx.fillRect(-drawSize * 0.38, -drawSize * 0.2, drawSize * 0.76, drawSize * 0.14);
    }
    ctx.restore();
  }
  ctx.restore();
}

function tick(now) {
  if (document.visibilityState === "hidden") {
    lastFrame = now;
    return;
  }

  const desiredFrameMs = targetFrameMs(now);
  if (lastRenderAt && now - lastRenderAt < desiredFrameMs) {
    scheduleNextTick(desiredFrameMs - (now - lastRenderAt));
    return;
  }

  const elapsed = Math.min(0.1, (now - lastFrame) / 1000);
  lastFrame = now;
  lastRenderAt = now;
  frameDelta = elapsed;
  updateBird(elapsed, now);
  updateDiamondFlyby(elapsed, now);
  if (now - lastRelicTimerUpdate >= RELIC_TIMER_FRAME_MS) {
    updateRelicTimers();
    lastRelicTimerUpdate = now;
  }

  const autoDamage = dps() * elapsed;
  if (autoDamage > 0) {
    damageEnemy(autoDamage, null, null, { passive: true });
  }

  if (isBoss()) {
    const remaining = Math.max(0, bossDuration() - (Date.now() - bossStartedAt) / 1000);
    if (now - lastBossTimerUpdate >= TIMER_FRAME_MS) {
      els.bossTimer.textContent = remaining.toFixed(1);
      lastBossTimerUpdate = now;
    }
    if (remaining <= 0) {
      state.enemyHp = state.maxHp;
      bossStartedAt = Date.now();
      toast("Boss recovered. Strike faster or buy upgrades.");
    }
  }

  draw(now);
  scheduleNextTick(targetFrameMs(now));
}

function handleTap(event) {
  const rect = els.canvas.getBoundingClientRect();
  const touch = event.touches?.[0] ?? event;
  const x = touch.clientX - rect.left;
  const y = touch.clientY - rect.top;
  if (isHudDeadZone(y, rect)) return;
  markActiveRender(1800);
  unlockAudio();
  if (diamondHit(x, y)) {
    collectDiamondFlyby();
    return;
  }
  if (birdHit(x, y)) {
    collectBird();
    return;
  }
  state.taps += 1;
  const crit = rollTapCrit();
  const chipGold = tapGoldReward();
  state.gold += chipGold.amount;
  state.levelTappedGold += chipGold.amount;
  spawnSlashEffect(x, y, crit.critical);
  spawnTapLoot(x, y, chipGold.amount, chipGold.critical);
  updateTapNuggetReadout(chipGold.critical);
  playTapSound(crit.critical);
  damageEnemy(tapDamage() * crit.multiplier, x, y, { visible: true, critical: crit.critical, goldReward: chipGold.amount, goldCritical: chipGold.critical });
}

function isHudDeadZone(canvasY, canvasRect = els.canvas.getBoundingClientRect()) {
  if (!els.hudPanel) return false;
  const hudRect = els.hudPanel.getBoundingClientRect();
  const deadZoneBottom = Math.max(0, hudRect.bottom - canvasRect.top + 8);
  return canvasY <= deadZoneBottom;
}

function updateHudDeadZone() {
  if (!els.hudPanel || !els.stageBand) return;
  const stageRect = els.stageBand.getBoundingClientRect();
  const hudRect = els.hudPanel.getBoundingClientRect();
  const deadZoneHeight = Math.max(0, Math.ceil(hudRect.bottom - stageRect.top + 8));
  els.stageBand.style.setProperty("--hud-dead-zone-height", `${deadZoneHeight}px`);
}

function blockHudDeadZonePointer(event) {
  if (!els.stageBand || !isHudDeadZone(event.clientY - els.stageBand.getBoundingClientRect().top, els.stageBand.getBoundingClientRect())) return;
  event.preventDefault();
  event.stopPropagation();
  event.stopImmediatePropagation?.();
}

function canvasCenter() {
  const rect = canvasDimensions();
  return arenaCenter(rect.width, rect.height);
}

function wireEvents() {
  renderUpgrades();
  renderBuffs();
  renderRebornUpgrades();
  renderInventory();
  updateVolumeControls();
  els.optionsToggle.addEventListener("click", () => setOptionsOpen(els.optionsDialog.hidden));
  els.shopToggle.addEventListener("click", () => setShopOpen(els.shopDialog.hidden));
  els.closeShop.addEventListener("click", () => setShopOpen(false));
  els.shopBackdrop.addEventListener("click", () => setShopOpen(false));
  els.closeOptions.addEventListener("click", () => setOptionsOpen(false));
  els.optionsBackdrop.addEventListener("click", () => setOptionsOpen(false));
  els.judgmentCooldown?.addEventListener("click", activateJudgmentCooldown);
  els.inventoryToggle.addEventListener("click", () => setInventoryOpen(els.inventoryDialog.hidden));
  els.closeInventory.addEventListener("click", () => setInventoryOpen(false));
  els.inventoryBackdrop.addEventListener("click", () => setInventoryOpen(false));
  els.openMassDisenchant.addEventListener("click", () => setMassDisenchantOpen(true));
  els.massDisenchantBackdrop.addEventListener("click", () => {
    setMassDisenchantOpen(false);
    setMassDisenchantConfirmOpen(false);
  });
  els.confirmMassDisenchantSelection.addEventListener("click", askMassDisenchantConfirmation);
  els.cancelMassDisenchant.addEventListener("click", () => setMassDisenchantOpen(false));
  els.performMassDisenchant.addEventListener("click", performMassDisenchant);
  els.cancelMassDisenchantConfirm.addEventListener("click", () => setMassDisenchantConfirmOpen(false));
  els.itemDetailBackdrop.addEventListener("click", () => setItemDetailOpen(false));
  els.equipItemButton.addEventListener("click", handleSelectedItemAction);
  els.dustItemButton.addEventListener("click", destroySelectedItemForResources);
  els.cancelItemDetail.addEventListener("click", () => setItemDetailOpen(false));
  els.destroyOverflowItem.addEventListener("click", destroyOverflowItemNow);
  els.keepOverflowItem.addEventListener("click", keepOverflowItemForReview);
  els.inventoryTabs.forEach((button) => {
    button.addEventListener("click", () => setInventoryView(button.dataset.inventoryView));
  });
  els.gearSlotTabs.forEach((button) => {
    button.addEventListener("click", () => setGearSlotView(button.dataset.gearSlotView));
  });
  els.equipmentGrid.addEventListener("click", handleEquipmentSlotActivation);
  els.inventoryGrid.addEventListener("click", handleInventorySlotActivation);
  els.equipmentGrid.addEventListener("pointerover", showItemTooltip);
  els.inventoryGrid.addEventListener("pointerover", showItemTooltip);
  els.equipmentGrid.addEventListener("pointermove", positionItemTooltip);
  els.inventoryGrid.addEventListener("pointermove", positionItemTooltip);
  els.equipmentGrid.addEventListener("pointerout", hideItemTooltip);
  els.inventoryGrid.addEventListener("pointerout", hideItemTooltip);
  els.equipmentGrid.addEventListener("focusin", showItemTooltip);
  els.inventoryGrid.addEventListener("focusin", showItemTooltip);
  els.equipmentGrid.addEventListener("focusout", hideItemTooltip);
  els.inventoryGrid.addEventListener("focusout", hideItemTooltip);
  els.sfxVolume.addEventListener("input", () => setSfxVolume(Number(els.sfxVolume.value) / 100));
  els.sfxVolume.addEventListener("change", () => playTone({ frequency: 440, slideTo: 660, duration: 0.12, type: "triangle", gain: 0.08 }));
  els.musicVolume.addEventListener("input", () => setMusicVolume(Number(els.musicVolume.value) / 100));
  els.bgMusic.addEventListener("ended", playNextMusicTrack);
  els.bgMusic.addEventListener("error", playNextMusicTrack);
  els.rebornButton.addEventListener("click", () => setRebornDialogOpen(true));
  els.confirmReborn.addEventListener("click", performReborn);
  els.cancelReborn.addEventListener("click", () => setRebornDialogOpen(false));
  els.rebornBackdrop.addEventListener("click", () => setRebornDialogOpen(false));
  els.stageBand?.addEventListener("pointerdown", blockHudDeadZonePointer, { capture: true });
  els.hudHitBlocker?.addEventListener("pointerdown", blockHudDeadZonePointer, { capture: true });
  els.canvas.addEventListener("pointerdown", handleCanvasPointerDown);
  document.addEventListener("pointerdown", () => unlockAudio(), { capture: true });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setOptionsOpen(false);
      setRebornDialogOpen(false);
      setInventoryOpen(false);
      setItemDetailOpen(false);
      setMassDisenchantOpen(false);
      setMassDisenchantConfirmOpen(false);
      setShopOpen(false);
    }
  });
  document.querySelectorAll("[data-relic]").forEach((button) => button.addEventListener("click", () => buyRelic(button.dataset.relic)));
  document.querySelectorAll("[data-sku]").forEach((button) => button.addEventListener("click", () => purchaseSku(button.dataset.sku)));
  document.querySelectorAll(".tab-button").forEach((button) => {
    button.addEventListener("click", () => {
      activatePanel(button.dataset.tab);
    });
  });
  window.addEventListener("resize", resizeCanvas);
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
      saveState();
      stopAnimationLoop();
      if (audio.context?.state === "running") audio.context.suspend().catch(() => {});
      return;
    }
    lastFrame = performance.now();
    lastRenderAt = 0;
    markActiveRender(900);
    if (audio.context?.state === "suspended" && audio.musicVolume > 0) audio.context.resume().catch(() => {});
    scheduleNextTick();
  });
  updateUI();
  updateTapNuggetReadout(false);
}

function handleInventorySlotActivation(event) {
  const button = event.target.closest("[data-inventory-slot]");
  if (!button || !els.inventoryGrid.contains(button) || button.classList.contains("empty")) return;
  const now = performance.now();
  if (now - lastInventorySlotActivation < 180) return;
  lastInventorySlotActivation = now;
  event.preventDefault();
  event.stopPropagation();
  hideItemTooltip();
  openInventoryItemDetails(Number(button.dataset.inventorySlot));
}

function handleEquipmentSlotActivation(event) {
  const button = event.target.closest("[data-equipment-slot]");
  if (!button || !els.equipmentGrid.contains(button) || button.classList.contains("empty")) return;
  const now = performance.now();
  if (now - lastEquipmentSlotActivation < 180) return;
  lastEquipmentSlotActivation = now;
  event.preventDefault();
  event.stopPropagation();
  hideItemTooltip();
  openEquippedItemDetails(button.dataset.equipmentSlot);
}

function showItemTooltip(event) {
  if (!els.itemTooltip) return;
  const button = event.target.closest("[data-tooltip]");
  if (!button || !button.dataset.tooltip) return;
  els.itemTooltip.textContent = button.dataset.tooltip;
  els.itemTooltip.hidden = false;
  if ("clientX" in event) {
    positionItemTooltip(event);
  } else {
    const rect = button.getBoundingClientRect();
    positionItemTooltip({ clientX: rect.left + rect.width / 2, clientY: rect.top });
  }
}

function positionItemTooltip(event) {
  if (!els.itemTooltip || els.itemTooltip.hidden) return;
  const margin = 14;
  const tooltipRect = els.itemTooltip.getBoundingClientRect();
  const left = Math.min(window.innerWidth - tooltipRect.width - margin, Math.max(margin, event.clientX + 12));
  const top = Math.min(window.innerHeight - tooltipRect.height - margin, Math.max(margin, event.clientY + 12));
  els.itemTooltip.style.left = `${left}px`;
  els.itemTooltip.style.top = `${top}px`;
}

function hideItemTooltip() {
  if (els.itemTooltip) els.itemTooltip.hidden = true;
}

function closeGamePanel() {
  document.querySelectorAll(".tab-button").forEach((tab) => tab.classList.remove("active"));
  document.querySelectorAll(".panel").forEach((panel) => panel.classList.remove("active"));
}

function activatePanel(tabName) {
  const selectedTab = document.querySelector(`.tab-button.active[data-tab="${tabName}"]`);
  if (selectedTab) {
    closeGamePanel();
    return;
  }
  document.querySelectorAll(".tab-button").forEach((tab) => tab.classList.toggle("active", tab.dataset.tab === tabName));
  document.querySelectorAll(".panel").forEach((panel) => panel.classList.toggle("active", panel.id === `${tabName}Panel`));
}

function handleCanvasPointerDown(event) {
  if (document.querySelector(".panel.active")) {
    closeGamePanel();
  }
  handleTap(event);
}

function iconAtlasStyle(index) {
  const safeIndex = Math.max(0, Math.floor(Number(index) || 0));
  const column = safeIndex % ICON_ATLAS_COLUMNS;
  const row = Math.floor(safeIndex / ICON_ATLAS_COLUMNS);
  const x = column * (100 / (ICON_ATLAS_COLUMNS - 1));
  const y = row * (100 / (ICON_ATLAS_ROWS - 1));
  return `--atlas-x: ${x}%; --atlas-y: ${y}%;`;
}

function atlasIconMarkup(index, className = "upgrade-icon") {
  return `<span class="${className} fantasy-icon" style="${iconAtlasStyle(index)}" aria-hidden="true"></span>`;
}

function renderUpgrades() {
  els.upgradeList.innerHTML = "";
  for (const def of upgradeDefs) {
    const button = document.createElement("button");
    button.className = "upgrade-row";
    button.type = "button";
    button.dataset.upgrade = def.key;
    button.innerHTML = `
      ${atlasIconMarkup(def.iconIndex)}
      <span>
        <strong>${def.name}</strong>
        <small>${def.description}</small>
        <em data-level>Lv 0</em>
      </span>
      <b data-cost>0</b>
    `;
    button.addEventListener("click", () => buyUpgrade(def.key));
    els.upgradeList.append(button);
  }
}

function renderBuffs() {
  if (!els.buffList) return;
  els.buffList.innerHTML = "";
  for (const def of buffDefs) {
    const button = document.createElement("button");
    button.className = "buff-card";
    button.type = "button";
    button.dataset.buff = def.key;
    button.innerHTML = `
      <span class="ability-icon ability-icon-${def.key}" aria-hidden="true"></span>
      <span>
        <strong>${def.name}</strong>
        <small>${def.description}</small>
        <em data-buff-timer>Ready</em>
      </span>
      <span class="buff-meta">
        <em data-buff-stack>${def.maxStacks ? `Max ${def.maxStacks} stacks` : "Timed buff"}</em>
        <b><span class="buff-flame ${def.flameClass ?? ""}" aria-hidden="true"></span><span data-buff-cost>${buffCostMarkup(def, 0)}</span></b>
      </span>
    `;
    button.addEventListener("click", () => buyBuff(def.key));
    els.buffList.append(button);
  }
}

function renderRebornUpgrades() {
  els.rebornList.innerHTML = "";
  for (const def of rebornUpgradeDefs) {
    const button = document.createElement("button");
    button.className = "reborn-upgrade";
    button.type = "button";
    button.dataset.rebornUpgrade = def.key;
    button.innerHTML = `
      ${atlasIconMarkup(def.iconIndex, "upgrade-icon reborn-upgrade-icon")}
      <span>
        <strong>${def.name}</strong>
        <small>${def.description}</small>
        <em data-reborn-level>Lv 0</em>
      </span>
      <b data-reborn-cost>0 sparks</b>
    `;
    button.addEventListener("click", () => buyRebornUpgrade(def.key));
    els.rebornList.append(button);
  }
}

function renderInventory() {
  if (!els.equipmentGrid || !els.inventoryGrid) return;
  renderResources();
  syncGearSlotTabs();
  els.equipmentGrid.innerHTML = "";
  for (const slot of equipmentSlots) {
    const item = state.inventory.equipment[slot.key];
    const def = itemDefs[item?.defKey];
    const quality = qualityByKey[item?.quality] ?? qualityByKey.common;
    const realmClass = item ? ` realm-${itemRealmIndex(item)}` : "";
    const button = document.createElement("button");
    button.type = "button";
    button.className = `equipment-slot ${item ? `has-item quality-${quality.key}${realmClass}` : "empty"}`;
    button.dataset.equipmentSlot = slot.key;
    button.title = def ? `${itemDisplayName(item)}: ${itemBonusText(item)}. Tap to inspect.` : `${slot.label} slot empty`;
    if (def) button.dataset.tooltip = itemTooltipText(item, def);
    button.innerHTML = item
      ? `${equipmentSlotFxMarkup(quality.key)}${itemIconMarkup(item, def)}<span class="equipment-slot-label">${slot.label}</span>`
      : `<img class="armor-silhouette ${slot.key}" src="${emptyGearIconSrc(slot.key)}" alt="" aria-hidden="true" /><span class="equipment-slot-label">${slot.label}</span>`;
    els.equipmentGrid.append(button);
  }

  els.inventoryGrid.innerHTML = "";
  const visibleBag = bagForSlot(activeGearSlotView);
  for (let index = 0; index < INVENTORY_SIZE; index += 1) {
    const item = visibleBag[index];
    const def = itemDefs[item?.defKey];
    const quality = qualityByKey[item?.quality] ?? qualityByKey.common;
    const realmClass = item ? ` realm-${itemRealmIndex(item)}` : "";
    const button = document.createElement("button");
    button.type = "button";
    button.className = `inventory-slot ${item ? `has-item quality-${quality.key}${realmClass}` : "empty"}`;
    button.dataset.inventorySlot = String(index);
    button.title = def ? `${itemDisplayName(item)}: ${itemBonusText(item)}. Tap to inspect.` : "Empty slot";
    if (def) button.dataset.tooltip = itemTooltipText(item, def);
    button.innerHTML = item ? itemIconMarkup(item, def) : "";
    els.inventoryGrid.append(button);
  }
}

function itemTooltipText(item, def = itemDefs[item?.defKey]) {
  const quality = qualityByKey[item?.quality] ?? qualityByKey.common;
  const stats = itemBonusText(item) || "No bonuses";
  return `${itemDisplayName(item)}\n${quality.label} ${slotLabel(def?.slot)}\n${stats}`;
}

function renderResources() {
  if (!els.resourcesGrid) return;
  els.resourcesGrid.innerHTML = "";
  for (const resource of dustResourceDefs) {
    const row = document.createElement("div");
    row.className = `resource-row quality-${resource.quality}`;
    row.style.setProperty("--resource-color", resource.color);
    row.innerHTML = `
      <span class="resource-dust-icon" style="--resource-color: ${resource.color}" aria-hidden="true"></span>
      <span>${resource.label}</span>
      <strong>${format(state.inventory.resources?.[resource.key] ?? 0)}</strong>
    `;
    els.resourcesGrid.append(row);
  }
}

function itemIconMarkup(item, def) {
  const slot = def?.slot ?? "item";
  const quality = qualityByKey[item?.quality] ?? qualityByKey.common;
  return `<span class="rarity-fx quality-${quality.key}" aria-hidden="true"><span class="rarity-star rarity-star-a"></span><span class="rarity-star rarity-star-b"></span><span class="rarity-star rarity-star-c"></span><span class="rarity-star rarity-star-d"></span><span class="rarity-star rarity-star-e"></span></span><img class="item-icon ${slot} quality-${quality.key} realm-${itemRealmIndex(item)}" src="${gearIconSrc(item, def)}" alt="" aria-hidden="true" />`;
}

function equipmentSlotFxMarkup(qualityKey) {
  return `<span class="equipment-rarity-fx quality-${qualityKey}" aria-hidden="true"><span class="equipment-spark equipment-spark-a"></span><span class="equipment-spark equipment-spark-b"></span><span class="equipment-spark equipment-spark-c"></span><span class="equipment-spark equipment-spark-d"></span><span class="equipment-spark equipment-spark-e"></span></span>`;
}

function gearIconSrc(item, def) {
  const slot = def?.slot ?? "chest";
  const realmKey = gearRealmIconKeys[itemRealmIndex(item)] ?? gearRealmIconKeys[0];
  return `assets/gear/hd/${realmKey}-${slot}.png`;
}

function emptyGearIconSrc(slotKey) {
  return `assets/gear/hd/empty-${slotKey}.png`;
}

function applyOfflineProgress() {
  const elapsed = Math.min(4 * 60 * 60, (Date.now() - state.lastSeen) / 1000);
  const reward = Math.floor(dps() * elapsed * 0.18 * etherGainMultiplier());
  if (reward > 0) {
    state.gold += reward;
    toast(`Offline miners found ${format(reward)} Ether.`);
  }
}

function registerServiceWorker() {
  if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }
}

applyOfflineProgress();
spawnEnemy(true);
wireEvents();
resizeCanvas();
registerServiceWorker();
scheduleNextTick();
