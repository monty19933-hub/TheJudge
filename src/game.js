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
      "Mosscale Drake",
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

const JUDGE_SERIF_FONT = '"Palatino Linotype", "Book Antiqua", Palatino, Georgia, Cambria, "Times New Roman", serif';
const LEVELS_PER_ZONE = 10;
const MOB_LEVELS_PER_ZONE = 9;
const MIN_MOBS_PER_LEVEL = 7;
const MAX_MOBS_PER_LEVEL = 10;
const ENEMY_HP_BASE = 10;
const ENEMY_HP_GROWTH = 1.29;
const ENEMY_REWARD_GROWTH = 1.105;
const ENEMY_REWARD_LINEAR_BASE = 8;
const ENEMY_REWARD_LINEAR_STEP = 3.1;
const BOSS_HP_MULTIPLIER = 5.2;
const FIRST_BOSS_DIAMOND_REWARD = 25;
const PUZZLE_RING_BOSS_DROP_CHANCE = 0.02;
const PUZZLE_RING_MEGA_BOSS_DROP_CHANCE = 0.05;
const PUZZLE_VAULT_GOBLINS_PER_RUN = 10;
const PUZZLE_VAULT_ENEMY_HP_MULTIPLIER = 5;
const PUZZLE_VAULT_TIMER_SECONDS = 300;
const PUZZLE_VAULT_ETHER_GOBLIN_BASE = 1000;
const PUZZLE_VAULT_GOBLIN_KING_ETHER_BASE = 2000;
const PUZZLE_VAULT_ETHER_BOSS_GROWTH = 2.25;
const DAILY_QUEST_REWARD = 25;
const WEEKLY_DAILY_REWARD = 500;
const WEEKLY_DAILY_GOAL = 35;
const BASE_TAP_DAMAGE = 5;
const TAP_DAMAGE_PICK_MULTIPLIER = 1.2;
const BASE_DPS = 10;
const DPS_UPGRADE_MULTIPLIER = 1.2;
const BENCHBREAKER_CRIT_BONUS_PER_LEVEL = 0.05;
const UNIVERSAL_ADJUDICATOR_TAP_BONUS_PER_LEVEL = 0.05;
const COSMIC_INJUNCTION_DAMAGE_BONUS_PER_LEVEL = 0.05;
const REBORN_UPGRADE_BONUS_PER_LEVEL = 0.25;
const FLYING_HIGH_CHEST_TIMER_REDUCTION_PER_LEVEL = 0.005;
const FLYING_HIGH_CHEST_TIMER_MAX_REDUCTION = 0.5;
const FLYING_HIGH_MAX_LEVEL = 100;
const SWIFT_JUSTICE_COOLDOWN_REDUCTION_PER_LEVEL = 0.005;
const SWIFT_JUSTICE_COOLDOWN_MAX_REDUCTION = 0.5;
const SWIFT_JUSTICE_MAX_LEVEL = 100;
const SHINY_ATTRACTIONS_PORTAL_CHANCE_MULTIPLIER = 1.1;
const LINGERING_RUIN_BOSS_HEALTH_REDUCTION_PER_LEVEL = 0.0005;
const LINGERING_RUIN_BOSS_HEALTH_MAX_REDUCTION = 0.99;
const ZONE_ITEM_DISENCHANT_CHANCE = 0.4;
const palettes = ["#f06c64", "#f0b35a", "#6bd17d", "#5ec6f0", "#a274ff", "#f072bd"];
const dailyQuestDefs = [
  { key: "taps", name: "Tapping", target: 1000, unit: "taps", description: "Tap enemies 1,000 times." },
  { key: "ether", name: "Ether Gain", target: 10000, unit: "Ether", description: "Gain 10,000 Ether." },
  { key: "tappedEther", name: "Tapped Ether", target: 5000, unit: "Ether", description: "Gain 5,000 Ether from tapping." },
  { key: "chests", name: "Chest Clicks", target: 30, unit: "chests", description: "Tap the floating chest 30 times." },
  { key: "bosses", name: "Boss Kills", target: 25, unit: "bosses", description: "Defeat 25 bosses." },
  { key: "reborns", name: "Rebirths", target: 3, unit: "reborns", description: "Reborn 3 times." }
];
const realmVfx = [
  { kind: "firefly", color: "#d8ff8d", accent: "#74ff9f", aura: "rgba(126, 255, 149, 0.26)", particleSrc: "assets/art/particle-mossglow.png" },
  { kind: "ember", color: "#ffb547", accent: "#ff5a22", aura: "rgba(255, 102, 34, 0.25)", particleSrc: "assets/art/particle-emberglass.png" },
  { kind: "snow", color: "#dff8ff", accent: "#8fe7ff", aura: "rgba(143, 231, 255, 0.24)", particleSrc: "assets/art/particle-frostvein.png" },
  { kind: "marsh", color: "#9dfff0", accent: "#c288ff", aura: "rgba(146, 255, 230, 0.2)", particleSrc: "assets/art/particle-moonlit.png" },
  { kind: "spark", color: "#ffe66b", accent: "#82e8ff", aura: "rgba(255, 230, 107, 0.22)", particleSrc: "assets/art/particle-stormforge.png" },
  { kind: "star", color: "#ff9cf0", accent: "#7cc7ff", aura: "rgba(188, 122, 255, 0.26)", particleSrc: "assets/art/particle-starfall.png" }
];
const zoneLevelArt = [
  "assets/art/zone-level-mossglow.png",
  "assets/art/zone-level-emberglass.png",
  "assets/art/zone-level-frostvein.png",
  "assets/art/zone-level-moonlit.png",
  "assets/art/zone-level-stormforge.png",
  "assets/art/zone-level-starfall.png"
];
const puzzleVaultArt = {
  portal: "assets/puzzle-vault/puzzle-portal.png",
  background: "assets/puzzle-vault/vault-background.png",
  levelIcon: "assets/puzzle-vault/vault-level-icon-v401.png?v=401",
  goblinCounterIcon: "assets/icons/goblin-kill-counter-icon-v380.png?v=380"
};
const puzzleVaultGoblinDefs = [
  { key: "ether", name: "Ether Goblin", image: "assets/puzzle-vault/ether-goblin-hd-v401.png?v=401", weight: 58, color: "#73e4ff", accent: "#f6d36f" },
  { key: "dust", name: "Dust Goblin", image: "assets/puzzle-vault/dust-goblin-hd-v401.png?v=401", weight: 24, color: "#d9b574", accent: "#ffe0a0" },
  { key: "gem", name: "Gem Goblin", image: "assets/puzzle-vault/gem-goblin-hd-v401.png?v=401", weight: 11, color: "#67dfff", accent: "#b8f6ff" },
  { key: "cosmic", name: "Cosmic Goblin", image: "assets/puzzle-vault/cosmic-goblin-hd-v401.png?v=401", weight: 5, color: "#b681ff", accent: "#ffe1ff" },
  { key: "diamond", name: "Diamond Goblin", image: "assets/puzzle-vault/diamond-goblin-hd-v401.png?v=401", weight: 2, color: "#8cf5ff", accent: "#ffffff" }
];
const puzzleVaultBossDef = {
  key: "king",
  name: "Goblin King",
  image: "assets/puzzle-vault/goblin-king-hd-v358.png?v=379",
  color: "#ffd36c",
  accent: "#ff735f"
};
const ICON_ATLAS_COLUMNS = 4;
const ICON_ATLAS_ROWS = 3;
const upgradeDefs = [
  {
    key: "pick",
    name: "Hammer's Wrath",
    description: "Raises tap damage",
    baseCost: 14,
    costGrowth: 1.25,
    iconIndex: 0,
    iconSrc: "assets/icons/hammers-wrath-icon.png"
  },
  {
    key: "miner",
    name: "Time Accelerandum",
    description: "Multiplies automatic DPS",
    baseCost: 16,
    costGrowth: 1.25,
    iconIndex: 1,
    iconSrc: "assets/icons/time-accelerandum-icon.png"
  },
  {
    key: "charm",
    name: "Timekeeper's Lucky Charm",
    description: "Raises tap crit chance",
    baseCost: 1_000,
    costGrowth: 5,
    maxLevel: 10,
    iconIndex: 3,
    iconSrc: "assets/icons/timekeepers-lucky-charm-icon.png",
    panel: "boons"
  },
  {
    key: "alchemist",
    name: "Benchbreaker",
    description: "Raises tap crit damage",
    baseCost: 21,
    costGrowth: 1.25,
    iconIndex: 4,
    iconSrc: "assets/icons/benchbreaker-icon.png"
  },
  {
    key: "drill",
    name: "Universal Adjudicator",
    description: "Multiplies tap damage",
    baseCost: 28,
    costGrowth: 1.25,
    iconIndex: 5,
    iconSrc: "assets/icons/universal-adjudicator-icon.png"
  },
  {
    key: "standard",
    name: "Cosmic Injunction",
    description: "Raises DPS power",
    baseCost: 35,
    costGrowth: 1.25,
    iconIndex: 7,
    iconSrc: "assets/icons/cosmic-injunction-icon.png"
  },
  {
    key: "compass",
    name: "Eternal Hourglass",
    description: "Extends boss timers by +2.5s per level",
    baseCost: 1_000,
    costGrowth: 5,
    maxLevel: 10,
    iconIndex: 8,
    iconSrc: "assets/icons/eternal-hourglass-icon.png",
    panel: "boons"
  }
];

const rebornUpgradeDefs = [
  {
    key: "emberMight",
    name: "Ember Might",
    description: "Permanently raises tap damage",
    baseCost: 1,
    costGrowth: 1.65,
    iconIndex: 9,
    iconSrc: "assets/icons/ember-might-hd-icon.png"
  },
  {
    key: "ancientCrew",
    name: "Ancient Crew",
    description: "Permanently raises DPS",
    baseCost: 2,
    costGrowth: 1.7,
    iconIndex: 10,
    iconSrc: "assets/icons/ancient-crew-hd-icon.png"
  },
  {
    key: "goldenMemory",
    name: "Ether Memory",
    description: "Permanently raises Ether gains",
    baseCost: 2,
    costGrowth: 1.72,
    iconIndex: 11,
    iconSrc: "assets/icons/ether-memory-hd-icon.png"
  },
  {
    key: "flyingHigh",
    name: "Flying High",
    description: "Reduces flying ether chest spawn timer",
    baseCost: 1,
    costGrowth: 1.65,
    maxLevel: FLYING_HIGH_MAX_LEVEL,
    iconSrc: "assets/icons/flying-high-icon.png?v=428"
  },
  {
    key: "shinyAttractions",
    name: "Shiny Attractions",
    description: "Raises Goblin Vault portal chance",
    baseCost: 1,
    costGrowth: 1.65,
    iconSrc: "assets/icons/shiny-attractions-icon.png?v=429"
  },
  {
    key: "lingeringRuin",
    name: "Lingering Ruin",
    description: "Lowers all boss health",
    baseCost: 1,
    costGrowth: 1.65,
    iconSrc: "assets/icons/lingering-ruin-icon.png?v=430"
  },
  {
    key: "swiftJustice",
    name: "Swift Justice",
    description: "Reduces Hammer of Judgement cooldown",
    baseCost: 1,
    costGrowth: 1.65,
    maxLevel: SWIFT_JUSTICE_MAX_LEVEL,
    iconSrc: "assets/icons/swift-justice-icon.png?v=431"
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
    baseRewardCostMultiplier: 10
  },
  {
    key: "etherGain",
    stackKey: "etherGainStacks",
    name: "Ether Fiend",
    description: "+100% all Ether gains per stack for 2m",
    duration: 120_000,
    maxStacks: 2,
    baseRewardCostMultiplier: 5,
    iconKey: "ether"
  },
  {
    key: "flare",
    stackKey: "flareStacks",
    name: "Solar Flare",
    description: "5x tap damage for 30s. Extra stacks extend duration; 5 stacks becomes 10x for 3m.",
    duration: 30_000,
    maxStacks: 5,
    maxDuration: 120_000,
    empoweredDuration: 180_000,
    tapDamageMultiplier: 5,
    empoweredTapDamageMultiplier: 10,
    costType: "diamond",
    cost: 25,
    flameClass: "relic-flame"
  },
  {
    key: "magnet",
    name: "Ether Magnet",
    description: "3x Ether for 5m",
    duration: 300_000,
    costType: "diamond",
    cost: 25,
    boostKey: "magnetUntil",
    flameClass: "relic-flame"
  },
  {
    key: "tapperFrenzy",
    stackKey: "tapperFrenzyStacks",
    name: "Tapper Frenzy",
    description: "Automatically taps for 1m. Each stack halves the time between taps, up to 3 stacks.",
    duration: 60_000,
    maxStacks: 3,
    costType: "diamond",
    cost: 25,
    flameClass: "relic-flame"
  }
];

const shopProducts = {
  diamonds_handful: {
    name: "Handful of Diamonds",
    kicker: "Starter pouch",
    diamonds: 100,
    badge: "100",
    bonus: "",
    price: "$0.99",
    image: "assets/shop/diamond-handful.png",
    tier: 1,
    note: "Bright diamonds for a quick boost.",
    toast: "Handful of Diamonds added."
  },
  diamonds_pile: {
    name: "Pile of Diamonds",
    kicker: "10% Bonus!",
    diamonds: 500,
    bonusPercent: 10,
    bonus: "10% Bonus!",
    price: "$4.99",
    image: "assets/shop/diamond-pile.png",
    tier: 2,
    note: "A sparkling pile with extra value.",
    toast: "Pile of Diamonds added."
  },
  diamonds_satchel: {
    name: "Satchel of Diamonds",
    kicker: "20% Bonus!",
    diamonds: 1000,
    bonusPercent: 20,
    bonus: "20% Bonus!",
    price: "$9.99",
    image: "assets/shop/diamond-satchel.png",
    tier: 3,
    note: "A stuffed satchel for boons.",
    toast: "Satchel of Diamonds added."
  },
  diamonds_cask: {
    name: "Cask of Diamonds",
    kicker: "35% Bonus!",
    diamonds: 2000,
    bonusPercent: 35,
    bonus: "35% Bonus!",
    price: "$19.99",
    image: "assets/shop/diamond-cask.png",
    tier: 4,
    note: "A brimming cask of cut diamonds.",
    toast: "Cask of Diamonds added."
  },
  diamonds_chest: {
    name: "Chest of Diamonds",
    kicker: "55% Bonus!",
    diamonds: 5000,
    bonusPercent: 55,
    bonus: "55% Bonus!",
    price: "$49.99",
    image: "assets/shop/diamond-chest.png",
    tier: 5,
    featured: true,
    note: "A treasure chest overflowing.",
    toast: "Chest of Diamonds added."
  },
  diamonds_vault: {
    name: "Vault of Diamonds",
    kicker: "100% Bonus!",
    diamonds: 10000,
    bonusPercent: 100,
    bonus: "100% Bonus!",
    price: "$99.99",
    image: "assets/shop/diamond-vault.png",
    tier: 6,
    featured: true,
    note: "A vault-sized haul of shinies.",
    toast: "Vault of Diamonds added."
  }
};

const MEGA_BOSS_DAILY_ATTEMPTS = 3;
const MEGA_BOSS_SCROLL_COST = 1;
const MEGA_BOSS_SCROLL_REWARD_LEVEL = 60;
const MEGA_BOSS_RARE_CHANCE = 0.5;
const MEGA_BOSS_EPIC_CHANCE = 0.3;
const MEGA_BOSS_LEGENDARY_CHANCE = 0.15;
const MEGA_BOSS_MYTHIC_CHANCE = 0.05;
const MEGA_BOSS_RESISTANCE_MULTIPLIER = 0.5;
const STONE_TITAN_TIME_LIMIT_MS = 156_680;
const LAVA_TITAN_TIME_LIMIT_MS = 142_000;
const ICE_TITAN_TIME_LIMIT_MS = 138_000;
const MARSH_TITAN_TIME_LIMIT_MS = 134_000;
const LIGHTNING_TITAN_TIME_LIMIT_MS = 130_000;
const COSMIC_TITAN_TIME_LIMIT_MS = 126_000;
const megaBossDefs = [
  {
    key: "stoneTitan",
    name: "Stone Titan",
    subtitle: "First Mega Boss",
    unlockLevel: 60,
    image: "assets/art/mega-boss-rock-giant.png",
    backdrop: "assets/art/mega-boss-stone-ruins-backdrop.png",
    music: "assets/audio/Cave Tyrant.wav",
    timeLimitMs: STONE_TITAN_TIME_LIMIT_MS,
    hpMultiplier: 6.5,
    etherMultiplier: 50,
    vulnerableDamage: "fire",
    resistantDamage: "earth",
    mythicChance: MEGA_BOSS_MYTHIC_CHANCE,
    legendaryChance: MEGA_BOSS_LEGENDARY_CHANCE,
    epicChance: MEGA_BOSS_EPIC_CHANCE,
    rareChance: MEGA_BOSS_RARE_CHANCE,
    spriteMaxWidth: 0.82,
    spriteMaxHeight: 0.8,
    spriteGroundY: 0.94,
    moteColor: "185, 222, 174",
    note: "Unlocks after defeating the level 60 boss."
  },
  {
    key: "lavaTitan",
    name: "Lava Titan",
    subtitle: "Second Mega Boss",
    unlockLevel: 120,
    image: "assets/art/mega-boss-lava-titan-cutout.png?v=303",
    backdrop: "assets/art/mega-boss-fire-arena-backdrop.png?v=303",
    music: "assets/audio/Fire Boss Music.wav",
    timeLimitMs: LAVA_TITAN_TIME_LIMIT_MS,
    hpMultiplier: 7.5,
    etherMultiplier: 90,
    vulnerableDamage: "frost",
    resistantDamage: "fire",
    mythicChance: MEGA_BOSS_MYTHIC_CHANCE,
    legendaryChance: MEGA_BOSS_LEGENDARY_CHANCE,
    epicChance: MEGA_BOSS_EPIC_CHANCE,
    rareChance: MEGA_BOSS_RARE_CHANCE,
    spriteMaxWidth: 0.78,
    spriteMaxHeight: 0.82,
    spriteGroundY: 0.95,
    moteColor: "255, 142, 54",
    note: "Unlocks after defeating the level 120 boss."
  },
  {
    key: "iceTitan",
    name: "Glacier Tyrant",
    subtitle: "Ice Mega Boss",
    unlockLevel: 180,
    image: "assets/art/mega-boss-ice-titan.png?v=303",
    backdrop: "assets/art/mega-boss-ice-arena-backdrop.png?v=303",
    music: "assets/audio/Boss.wav",
    timeLimitMs: ICE_TITAN_TIME_LIMIT_MS,
    hpMultiplier: 8.5,
    etherMultiplier: 140,
    vulnerableDamage: "fire",
    resistantDamage: "frost",
    mythicChance: MEGA_BOSS_MYTHIC_CHANCE,
    legendaryChance: MEGA_BOSS_LEGENDARY_CHANCE,
    epicChance: MEGA_BOSS_EPIC_CHANCE,
    rareChance: MEGA_BOSS_RARE_CHANCE,
    spriteMaxWidth: 0.78,
    spriteMaxHeight: 0.83,
    spriteGroundY: 0.96,
    moteColor: "154, 228, 255",
    note: "Unlocks after defeating the level 180 boss."
  },
  {
    key: "marshLeviathan",
    name: "Marsh Leviathan",
    subtitle: "Water/Marsh Mega Boss",
    unlockLevel: 240,
    image: "assets/art/mega-boss-marsh-leviathan.png?v=303",
    backdrop: "assets/art/mega-boss-marsh-arena-backdrop.png?v=303",
    music: "assets/audio/Boss.wav",
    timeLimitMs: MARSH_TITAN_TIME_LIMIT_MS,
    hpMultiplier: 9.5,
    etherMultiplier: 210,
    vulnerableDamage: "electric",
    resistantDamage: "water",
    mythicChance: MEGA_BOSS_MYTHIC_CHANCE,
    legendaryChance: MEGA_BOSS_LEGENDARY_CHANCE,
    epicChance: MEGA_BOSS_EPIC_CHANCE,
    rareChance: MEGA_BOSS_RARE_CHANCE,
    spriteMaxWidth: 0.78,
    spriteMaxHeight: 0.84,
    spriteGroundY: 0.97,
    moteColor: "96, 255, 220",
    note: "Unlocks after defeating the level 240 boss."
  },
  {
    key: "lightningTitan",
    name: "Storm Colossus",
    subtitle: "Lightning Mega Boss",
    unlockLevel: 300,
    image: "assets/art/mega-boss-lightning-colossus.png?v=303",
    backdrop: "assets/art/mega-boss-lightning-arena-backdrop.png?v=303",
    music: "assets/audio/Boss.wav",
    timeLimitMs: LIGHTNING_TITAN_TIME_LIMIT_MS,
    hpMultiplier: 10.5,
    etherMultiplier: 300,
    vulnerableDamage: "cosmic",
    resistantDamage: "electric",
    mythicChance: MEGA_BOSS_MYTHIC_CHANCE,
    legendaryChance: MEGA_BOSS_LEGENDARY_CHANCE,
    epicChance: MEGA_BOSS_EPIC_CHANCE,
    rareChance: MEGA_BOSS_RARE_CHANCE,
    spriteMaxWidth: 0.78,
    spriteMaxHeight: 0.84,
    spriteGroundY: 0.97,
    moteColor: "255, 232, 86",
    note: "Unlocks after defeating the level 300 boss."
  },
  {
    key: "cosmicTitan",
    name: "Abyssal Cosmic Titan",
    subtitle: "Cosmic Mega Boss",
    unlockLevel: 360,
    image: "assets/art/mega-boss-cosmic-titan.png?v=303",
    backdrop: "assets/art/mega-boss-cosmic-arena-backdrop.png?v=303",
    music: "assets/audio/Boss.wav",
    timeLimitMs: COSMIC_TITAN_TIME_LIMIT_MS,
    hpMultiplier: 11.5,
    etherMultiplier: 420,
    vulnerableDamage: "physical",
    resistantDamage: "cosmic",
    mythicChance: MEGA_BOSS_MYTHIC_CHANCE,
    legendaryChance: MEGA_BOSS_LEGENDARY_CHANCE,
    epicChance: MEGA_BOSS_EPIC_CHANCE,
    rareChance: MEGA_BOSS_RARE_CHANCE,
    spriteMaxWidth: 0.78,
    spriteMaxHeight: 0.84,
    spriteGroundY: 0.97,
    moteColor: "198, 114, 255",
    note: "Unlocks after defeating the level 360 boss."
  }
];

const INVENTORY_SIZE = 60;
const RING_INVENTORY_SIZE = 40;
const JUDGMENT_COOLDOWN_MS = 15 * 60_000;
const HAMMER_RESET_COST = 100;
const HAMMER_RESET_DAILY_LIMIT = 3;
const GILDED_MONOCLE_COST_STEP = 50;
const GILDED_MONOCLE_MAX_LEVEL = 20;
const GILDED_MONOCLE_CRIT_CHANCE_PER_LEVEL = 0.05;
const GEAR_DROPS_ENABLED = false;
const NORMAL_GEAR_DROP_CHANCE = 0.2;
const BOSS_GEAR_DROP_CHANCE = 0.5;
const NORMAL_MYTHIC_DROP_CHANCE = 0.0002;
const NORMAL_DUST_DROP_CHANCE = 0.2;
const BOSS_DUST_DROP_CHANCE = 0.6;
const NORMAL_ZONE_ITEM_DROP_CHANCE = 0.2;
const BOSS_ZONE_ITEM_DROP_CHANCE = 0.4;
const BOSS_ZONE_ITEM_MIN = 1;
const BOSS_ZONE_ITEM_MAX = 3;
const OFFLINE_EXACT_DROP_ROLL_LIMIT = 25000;
const GOBLIN_ESSENCE_DROP_CHANCE = 0.5;
const GOBLIN_ESSENCE_MIN = 1;
const GOBLIN_ESSENCE_MAX = 25;
const GOBLIN_KING_FRAGMENT_DROP_CHANCE = 0.03;
const normalCreatureDustDropTable = [
  { quality: "common", weight: 50, min: 10, max: 20 },
  { quality: "rare", weight: 35, min: 6, max: 10 },
  { quality: "epic", weight: 10, min: 3, max: 6 },
  { quality: "legendary", weight: 4.5, min: 1, max: 2 },
  { quality: "mythic", weight: 0.5, min: 1, max: 1 }
];
const bossDustDropTable = [
  { quality: "common", weight: 30, min: 30, max: 60 },
  { quality: "rare", weight: 40, min: 15, max: 30 },
  { quality: "epic", weight: 20, min: 8, max: 12 },
  { quality: "legendary", weight: 1, min: 3, max: 5 },
  { quality: "mythic", weight: 1, min: 1, max: 1 }
];
const megaBossDustDropTable = [
  { quality: "common", chance: 0.6, min: 100, max: 200 },
  { quality: "rare", chance: 0.5, min: 60, max: 100 },
  { quality: "epic", chance: 0.3, min: 30, max: 50 },
  { quality: "legendary", chance: 0.15, min: 10, max: 20 },
  { quality: "mythic", chance: 0.05, min: 2, max: 5 }
];
const GEAR_STAT_VERSION = 6;
const IS_ANDROID = /Android/i.test(navigator.userAgent);
const ACTIVE_FRAME_MS = IS_ANDROID ? 1000 / 40 : 1000 / 60;
const IDLE_FRAME_MS = IS_ANDROID ? 1000 / 18 : 250;
const DIALOG_FRAME_MS = IS_ANDROID ? 1000 / 8 : 1000 / 12;
const MAX_CANVAS_DPR = IS_ANDROID ? 1 : 1.5;
const MAX_AMBIENT_PARTICLES = IS_ANDROID ? 1 : 14;
const MAX_BOSS_AMBIENT_BONUS_PARTICLES = IS_ANDROID ? 0 : 3;
const MAX_LOOT_PARTICLES = IS_ANDROID ? 10 : 96;
const MAX_DAMAGE_FLOATERS = 20;
const MAX_FLOATERS = IS_ANDROID ? 32 : 64;
const MAX_SLASH_EFFECTS = IS_ANDROID ? 1 : 5;
const EFFECT_QUALITY = IS_ANDROID ? 0.28 : 1;
const MAX_GAME_NUMBER = 1e300;
const MAX_GAME_LOG10 = 300;
const STARTUP_ASSET_TIMEOUT_MS = IS_ANDROID ? 3500 : 2200;
const STARTUP_STUDIO_SPLASH_MS = 2400;
const STARTUP_GAME_SPLASH_MIN_MS = 1100;
const PASSIVE_HEALTH_FRAME_MS = IS_ANDROID ? 1000 / 24 : 120;
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
const ringDamageTypes = {
  physical: { key: "physical", label: "Physical Damage", color: "#ffd7a4", icon: "assets/icons/damage-physical-icon.png?v=326" },
  fire: { key: "fire", label: "Fire Damage", color: "#ff4f43", icon: "assets/icons/damage-fire-icon.png?v=326" },
  frost: { key: "frost", label: "Frost Damage", color: "#8feaff", icon: "assets/icons/damage-frost-icon.png?v=326" },
  water: { key: "water", label: "Water Damage", color: "#3f73ff", icon: "assets/icons/damage-water-icon.png?v=326" },
  electric: { key: "electric", label: "Electric Damage", color: "#ffe45c", icon: "assets/icons/damage-electric-icon.png?v=326" },
  cosmic: { key: "cosmic", label: "Cosmic Damage", color: "#b86cff", icon: "assets/icons/damage-cosmic-icon.png?v=326" },
  earth: { key: "earth", label: "Earth Damage", color: "#b6df80", icon: "assets/icons/damage-earth-icon.png?v=326" }
};
const ringDamageTypeOrder = ["physical", "fire", "frost", "water", "electric", "cosmic", "earth"];
const ringRarityTiers = [
  { key: "common", label: "Common", damageBonus: 1, disenchantGems: 1, craftGems: 0, color: "#f4f4f4" },
  { key: "rare", label: "Rare", damageBonus: 2, disenchantGems: 5, craftGems: 3, color: "#4ea4ff" },
  { key: "epic", label: "Epic", damageBonus: 3, disenchantGems: 10, craftGems: 10, color: "#b86cff" },
  { key: "legendary", label: "Legendary", damageBonus: 4, disenchantGems: 30, craftGems: 30, color: "#ff9c2f" },
  { key: "mythic", label: "Mythic", damageBonus: 5, disenchantGems: 100, craftGems: 500, color: "#ff4646" }
];
const ringRarityByKey = Object.fromEntries(ringRarityTiers.map((rarity) => [rarity.key, rarity]));
const ringRarityIconByKey = {
  common: "assets/icons/ring-common-hd-v358.png?v=379",
  rare: "assets/icons/ring-rare-hd-v358.png?v=379",
  epic: "assets/icons/ring-epic-hd-v358.png?v=379",
  legendary: "assets/icons/ring-legendary-hd-v358.png?v=379",
  mythic: "assets/icons/ring-mythic-hd-v358.png?v=379"
};
const ringTypeMeta = {
  physical: {
    icon: "assets/icons/physical-test-ring-icon.png?v=301",
    keys: { common: "testRing", rare: "rareTestRing" },
    names: {
      common: "Iron Verdict Band",
      rare: "Gilded Verdict Band",
      epic: "Radiant Verdict Band",
      legendary: "Sovereign Verdict Band",
      mythic: "Eternal Verdict Band"
    }
  },
  fire: {
    icon: "assets/icons/fire-test-ring-icon.png?v=301",
    keys: { common: "fireTestRing" },
    names: {
      common: "Ember Writ Band",
      rare: "Cinder Writ Band",
      epic: "Inferno Writ Band",
      legendary: "Phoenix Writ Band",
      mythic: "Starfire Writ Band"
    }
  },
  frost: {
    icon: "assets/icons/frost-test-ring-icon.png?v=301",
    keys: { common: "frostTestRing" },
    names: {
      common: "Rimebound Seal",
      rare: "Frostvein Seal",
      epic: "Glacial Seal",
      legendary: "Wintercourt Seal",
      mythic: "Absolute Zero Seal"
    }
  },
  water: {
    icon: "assets/icons/water-test-ring-icon.png?v=301",
    keys: { common: "waterTestRing" },
    names: {
      common: "Tidecaller's Loop",
      rare: "Deepcurrent Loop",
      epic: "Stormtide Loop",
      legendary: "Leviathan Loop",
      mythic: "Abyssal Tide Loop"
    }
  },
  electric: {
    icon: "assets/icons/electric-test-ring-icon.png?v=301",
    keys: { common: "electricTestRing" },
    names: {
      common: "Sparkbound Circuit",
      rare: "Voltsteel Circuit",
      epic: "Thunderlord Circuit",
      legendary: "Tempest Circuit",
      mythic: "Stormcrown Circuit"
    }
  },
  cosmic: {
    icon: "assets/icons/cosmic-test-ring-icon.png?v=301",
    keys: { common: "cosmicTestRing" },
    names: {
      common: "Astral Decree",
      rare: "Starlit Decree",
      epic: "Voidglass Decree",
      legendary: "Celestial Decree",
      mythic: "Event Horizon Decree"
    }
  },
  earth: {
    icon: "assets/icons/test-ring-icon.png?v=278",
    names: {
      common: "Stonebriar Signet",
      rare: "Heartroot Signet",
      epic: "Runestone Signet",
      legendary: "Worldroot Signet",
      mythic: "Titanstone Signet"
    }
  }
};

function ringDefKey(damageType, rarityKey) {
  const explicitKey = ringTypeMeta[damageType]?.keys?.[rarityKey];
  if (explicitKey) return explicitKey;
  return `${damageType}${rarityKey[0].toUpperCase()}${rarityKey.slice(1)}Ring`;
}

function createRingDefinition(damageType, rarity) {
  const meta = ringTypeMeta[damageType];
  const damageLabel = ringDamageTypes[damageType]?.label?.replace(/\s+Damage$/i, "") ?? "Damage";
  return {
    key: ringDefKey(damageType, rarity.key),
    type: "ring",
    quality: rarity.key,
    name: meta?.names?.[rarity.key] ?? `${rarity.label} ${damageLabel} Ring`,
    damageType,
    damageBonus: rarity.damageBonus,
    icon: ringRarityIconByKey[rarity.key] ?? meta?.icon ?? "assets/icons/test-ring-icon.png?v=278",
    flavor: `${rarity.label} ${damageLabel.toLowerCase()} ring forged for Mega Boss trials.`
  };
}

const ringDefs = Object.fromEntries(
  ringDamageTypeOrder.flatMap((damageType) => (
    ringRarityTiers.map((rarity) => {
      const def = createRingDefinition(damageType, rarity);
      return [def.key, def];
    })
  ))
);
const itemQualityDefs = [
  { key: "common", label: "Common", chance: 0.8, color: "#f4f4f4", statScale: 1, minRoll: 0.88, maxRoll: 1.06 },
  { key: "rare", label: "Rare", chance: 0.15, color: "#4ea4ff", statScale: 1.7, minRoll: 0.94, maxRoll: 1.14 },
  { key: "epic", label: "Epic", chance: 0.03, color: "#b86cff", statScale: 2.7, minRoll: 0.98, maxRoll: 1.2 },
  { key: "legendary", label: "Legendary", chance: 0.02, color: "#ff9c2f", statScale: 4.1, minRoll: 1.02, maxRoll: 1.28 }
];
const mythicQualityDef = { key: "mythic", label: "Mythic", chance: 0, color: "#ff4646", statScale: 6.7, minRoll: 1.06, maxRoll: 1.36 };
const qualityByKey = Object.fromEntries([...itemQualityDefs, mythicQualityDef].map((quality) => [quality.key, quality]));
const bossGearQualityChances = [
  { quality: mythicQualityDef, chance: 0.002 },
  { quality: qualityByKey.legendary, chance: 0.05 },
  { quality: qualityByKey.epic, chance: 0.18 },
  { quality: qualityByKey.rare, chance: 0.35 }
];
const dustResourceDefs = [
  { key: "commonDust", quality: "common", label: "Common Dust", color: "#f4f4f4", icon: "assets/art/resource-common-dust.png" },
  { key: "rareDust", quality: "rare", label: "Rare Dust", color: "#4ea4ff", icon: "assets/art/resource-rare-dust.png" },
  { key: "epicDust", quality: "epic", label: "Epic Dust", color: "#b86cff", icon: "assets/art/resource-epic-dust.png" },
  { key: "legendaryDust", quality: "legendary", label: "Legendary Dust", color: "#ff9c2f", icon: "assets/art/resource-legendary-dust.png" },
  { key: "mythicDust", quality: "mythic", label: "Mythic Dust", color: "#ff4646", icon: "assets/art/resource-mythic-dust.png" }
];
const soulResourceDef = { key: "souls", label: "Soul", color: "#54eaff", icon: "assets/art/resource-soul.png" };
const waterGemResourceDef = { key: "waterGem", label: "Water Gem", color: "#4ea4ff", icon: "assets/art/resource-water-gem.png" };
const flameGemResourceDef = { key: "flameGem", label: "Flame Gem", color: "#ff4b2f", icon: "assets/art/resource-flame-gem.png" };
const lightningGemResourceDef = { key: "lightningGem", label: "Lightning Gem", color: "#ffe84a", icon: "assets/art/resource-lightning-gem.png" };
const cosmicGemResourceDef = { key: "cosmicGem", label: "Cosmic Gem", color: "#d64cff", icon: "assets/art/resource-cosmic-gem.png" };
const earthGemResourceDef = { key: "earthGem", label: "Earth Gem", color: "#33d15b", icon: "assets/art/resource-earth-gem.png" };
const physicalGemResourceDef = { key: "physicalGem", label: "Physical Gem", color: "#b8bcc9", icon: "assets/art/resource-physical-gem.png" };
const iceGemResourceDef = { key: "iceGem", label: "Ice Gem", color: "#7eefff", icon: "assets/art/resource-ice-gem.png" };
const gemResourceDefs = [waterGemResourceDef, flameGemResourceDef, lightningGemResourceDef, cosmicGemResourceDef, earthGemResourceDef, physicalGemResourceDef, iceGemResourceDef];
const PUZZLE_RING_ICON = "assets/icons/puzzle-ring-icon.png?v=379";
const GOBLIN_ESSENCE_CRUCIBLE_ICON = "assets/icons/goblin-essence-crucible-v384.png?v=393";
const ESSENCE_CRUCIBLE_COST = 100;
const ESSENCE_CRUCIBLE_DIAMONDS = 10;
const ESSENCE_CRUCIBLE_DURATION_MS = 60 * 60 * 1000;
const ESSENCE_CRUCIBLE_MAX_QUEUE = 12;
const zoneItemResourceDefs = [
  { key: "heartrootResin", zone: 0, label: "Heartroot Resin", color: "#d5f07a", icon: "assets/art/resource-heartroot-resin.png" },
  { key: "emberglassSand", aliases: ["emberglassShard"], zone: 1, label: "Emberglass Sand", color: "#ffe079", icon: "assets/art/resource-emberglass-sand.png" },
  { key: "everfrozenSlush", aliases: ["rimeCrystal"], zone: 2, label: "Everfrozen Slush", color: "#e2fbff", icon: "assets/art/resource-everfrozen-slush.png" },
  { key: "moonmireReed", zone: 3, label: "Moonmire Reed", color: "#a7ffcf", icon: "assets/art/resource-moonmire-reed.png" },
  { key: "mechamaticBolt", aliases: ["voltsteelFragment"], zone: 4, label: "Mechamatic Bolt", color: "#ffe66b", icon: "assets/art/resource-mechamatic-bolt.png" },
  { key: "astralShard", aliases: ["astralGlass"], zone: 5, label: "Astral Shard", color: "#ff80d5", icon: "assets/art/resource-astral-shard.png" }
];
const goblinEssenceResourceDef = { key: "goblinEssence", label: "Goblin Essence", color: "#53f2b6", icon: "assets/art/resource-goblin-essence-v365.png?v=379" };
const puzzleRingFragmentResourceDef = { key: "puzzleRingFragments", label: "Puzzle Ring Fragment", color: "#63dbff", icon: PUZZLE_RING_ICON };
const zoneInventoryResourceDefs = [...zoneItemResourceDefs, goblinEssenceResourceDef];
const inventoryResourceSections = [
  { key: "dust", label: "Dust", resources: dustResourceDefs },
  { key: "zone", label: "Zone Items", resources: zoneInventoryResourceDefs },
  { key: "gems", label: "Gems", resources: gemResourceDefs },
  { key: "boss", label: "Boss Items", resources: [soulResourceDef, puzzleRingFragmentResourceDef] }
];
const inventoryResourceDefs = [...dustResourceDefs, soulResourceDef, puzzleRingFragmentResourceDef, ...gemResourceDefs, ...zoneInventoryResourceDefs];
const dustResourceByQuality = Object.fromEntries(dustResourceDefs.map((resource) => [resource.quality, resource]));
const zoneResourceByRealm = Object.fromEntries(zoneItemResourceDefs.map((resource) => [resource.zone, resource]));
const resourceByKey = Object.fromEntries(inventoryResourceDefs.map((resource) => [resource.key, resource]));
const defaultInventoryResources = Object.fromEntries(inventoryResourceDefs.map((resource) => [resource.key, 0]));
const TAP_ACHIEVEMENT_TARGETS = [200, 5000, 25000, 75000, 150000];
const CHEST_ACHIEVEMENT_TARGETS = [15, 100, 300, 800, 1500];
const GOBLIN_KILL_ACHIEVEMENT_TARGETS = [50, 250, 1000, 2500, 5000];
const GOBLIN_KING_ACHIEVEMENT_TARGETS = [5, 10, 25, 50, 100];
const NORMAL_BOSS_ACHIEVEMENT_TARGETS = [10, 25, 50, 100, 250];
const REBORN_ACHIEVEMENT_TARGETS = [5, 10, 25, 50, 100];
const JUDGMENT_USE_ACHIEVEMENT_TARGETS = [5, 10, 25, 50, 100];
const ACHIEVEMENT_CHAIN_BASE_POINTS = 10;

function achievementTarget(targets, tierIndex) {
  const index = Math.max(0, Math.min(targets.length - 1, Math.floor(Number(tierIndex) || 0)));
  return Math.max(1, Math.floor(Number(targets[index]) || 1));
}

function achievementTargetDescription(value) {
  return Math.max(0, Math.floor(Number(value) || 0)).toLocaleString("en-US");
}

function buildAchievementChainDefs({ chainKey, chainLabel, keyPrefix, names, targets, statKey, statMapKey, statMapName, icon, description }) {
  return targets.map((target, index) => ({
    key: `${keyPrefix}${target}`,
    chainKey,
    chainLabel,
    name: names[index],
    description: description(target),
    statKey,
    statMapKey,
    statMapName,
    target: achievementTarget(targets, index),
    rewardGems: achievementChainGems(index),
    points: achievementChainPoints(index),
    icon
  }));
}

function achievementChainPoints(tierIndex) {
  return ACHIEVEMENT_CHAIN_BASE_POINTS * Math.pow(2, Math.max(0, Math.floor(Number(tierIndex) || 0)));
}

function achievementChainGems(tierIndex) {
  return Math.max(5, Math.floor(achievementChainPoints(tierIndex) / 2));
}

const achievementDefs = [
  {
    key: "tap200",
    chainKey: "taps",
    chainLabel: "Taps",
    name: "First Verdict",
    description: `Tap enemies ${achievementTargetDescription(TAP_ACHIEVEMENT_TARGETS[0])} times.`,
    statKey: "lifetimeTaps",
    target: achievementTarget(TAP_ACHIEVEMENT_TARGETS, 0),
    rewardGems: achievementChainGems(0),
    points: achievementChainPoints(0),
    icon: "assets/icons/achievement-taps-100.png?v=379"
  },
  {
    key: "tap5000",
    chainKey: "taps",
    chainLabel: "Taps",
    name: "Hammer Rhythm",
    description: `Tap enemies ${achievementTargetDescription(TAP_ACHIEVEMENT_TARGETS[1])} times.`,
    statKey: "lifetimeTaps",
    target: achievementTarget(TAP_ACHIEVEMENT_TARGETS, 1),
    rewardGems: achievementChainGems(1),
    points: achievementChainPoints(1),
    icon: "assets/icons/achievement-taps-300.png?v=379"
  },
  {
    key: "tap25000",
    chainKey: "taps",
    chainLabel: "Taps",
    name: "Relentless Gavel",
    description: `Tap enemies ${achievementTargetDescription(TAP_ACHIEVEMENT_TARGETS[2])} times.`,
    statKey: "lifetimeTaps",
    target: achievementTarget(TAP_ACHIEVEMENT_TARGETS, 2),
    rewardGems: achievementChainGems(2),
    points: achievementChainPoints(2),
    icon: "assets/icons/achievement-taps-300.png?v=379"
  },
  {
    key: "tap75000",
    chainKey: "taps",
    chainLabel: "Taps",
    name: "Trial Storm",
    description: `Tap enemies ${achievementTargetDescription(TAP_ACHIEVEMENT_TARGETS[3])} times.`,
    statKey: "lifetimeTaps",
    target: achievementTarget(TAP_ACHIEVEMENT_TARGETS, 3),
    rewardGems: achievementChainGems(3),
    points: achievementChainPoints(3),
    icon: "assets/icons/achievement-taps-300.png?v=379"
  },
  {
    key: "tap150000",
    chainKey: "taps",
    chainLabel: "Taps",
    name: "Endless Judgement",
    description: `Tap enemies ${achievementTargetDescription(TAP_ACHIEVEMENT_TARGETS[4])} times.`,
    statKey: "lifetimeTaps",
    target: achievementTarget(TAP_ACHIEVEMENT_TARGETS, 4),
    rewardGems: achievementChainGems(4),
    points: achievementChainPoints(4),
    icon: "assets/icons/achievement-taps-300.png?v=379"
  },
  {
    key: "chest15",
    chainKey: "chests",
    chainLabel: "Chest Taps",
    name: "Chest Seeker",
    description: `Tap floating chests ${achievementTargetDescription(CHEST_ACHIEVEMENT_TARGETS[0])} times.`,
    statKey: "lifetimeChestTaps",
    target: achievementTarget(CHEST_ACHIEVEMENT_TARGETS, 0),
    rewardGems: achievementChainGems(0),
    points: achievementChainPoints(0),
    icon: "assets/icons/achievement-chests-15.png?v=379"
  },
  {
    key: "chest100",
    chainKey: "chests",
    chainLabel: "Chest Taps",
    name: "Vault Touched",
    description: `Tap floating chests ${achievementTargetDescription(CHEST_ACHIEVEMENT_TARGETS[1])} times.`,
    statKey: "lifetimeChestTaps",
    target: achievementTarget(CHEST_ACHIEVEMENT_TARGETS, 1),
    rewardGems: achievementChainGems(1),
    points: achievementChainPoints(1),
    icon: "assets/icons/achievement-chests-30.png?v=379"
  },
  {
    key: "chest300",
    chainKey: "chests",
    chainLabel: "Chest Taps",
    name: "Sky Plunderer",
    description: `Tap floating chests ${achievementTargetDescription(CHEST_ACHIEVEMENT_TARGETS[2])} times.`,
    statKey: "lifetimeChestTaps",
    target: achievementTarget(CHEST_ACHIEVEMENT_TARGETS, 2),
    rewardGems: achievementChainGems(2),
    points: achievementChainPoints(2),
    icon: "assets/icons/achievement-chests-30.png?v=379"
  },
  {
    key: "chest800",
    chainKey: "chests",
    chainLabel: "Chest Taps",
    name: "Winged Bounty",
    description: `Tap floating chests ${achievementTargetDescription(CHEST_ACHIEVEMENT_TARGETS[3])} times.`,
    statKey: "lifetimeChestTaps",
    target: achievementTarget(CHEST_ACHIEVEMENT_TARGETS, 3),
    rewardGems: achievementChainGems(3),
    points: achievementChainPoints(3),
    icon: "assets/icons/achievement-chests-30.png?v=379"
  },
  {
    key: "chest1500",
    chainKey: "chests",
    chainLabel: "Chest Taps",
    name: "Treasure Magistrate",
    description: `Tap floating chests ${achievementTargetDescription(CHEST_ACHIEVEMENT_TARGETS[4])} times.`,
    statKey: "lifetimeChestTaps",
    target: achievementTarget(CHEST_ACHIEVEMENT_TARGETS, 4),
    rewardGems: achievementChainGems(4),
    points: achievementChainPoints(4),
    icon: "assets/icons/achievement-chests-30.png?v=379"
  },
  ...buildAchievementChainDefs({
    chainKey: "goblinKills",
    chainLabel: "Goblin Kills",
    keyPrefix: "goblinKills",
    names: ["Goblin Spotter", "Vault Skirmisher", "Goblin Breaker", "Vault Sweeper", "Goblin Bane"],
    targets: GOBLIN_KILL_ACHIEVEMENT_TARGETS,
    statKey: "goblinKills",
    icon: "assets/icons/goblin-kill-counter-icon-v380.png?v=380",
    description: (target) => `Defeat ${achievementTargetDescription(target)} vault goblins.`
  }),
  ...buildAchievementChainDefs({
    chainKey: "goblinKingKills",
    chainLabel: "Goblin King Kills",
    keyPrefix: "goblinKingKills",
    names: ["Royal Introduction", "Crown Cracker", "Throne Shaker", "Kingbreaker", "Vault Regicide"],
    targets: GOBLIN_KING_ACHIEVEMENT_TARGETS,
    statMapKey: "goblinKillsByName",
    statMapName: "Goblin King",
    icon: "assets/puzzle-vault/goblin-king-hd-v358.png?v=379",
    description: (target) => `Defeat the Goblin King ${achievementTargetDescription(target)} times.`
  }),
  ...buildAchievementChainDefs({
    chainKey: "normalBossKills",
    chainLabel: "Normal Boss Kills",
    keyPrefix: "normalBossKills",
    names: ["Boss Breaker", "Realm Enforcer", "Trial Crusher", "Boss Magistrate", "Realm Executioner"],
    targets: NORMAL_BOSS_ACHIEVEMENT_TARGETS,
    statKey: "normalBossKills",
    icon: "assets/icons/mega-boss-toggle-icon.png?v=379",
    description: (target) => `Defeat ${achievementTargetDescription(target)} normal bosses.`
  }),
  ...buildAchievementChainDefs({
    chainKey: "reborns",
    chainLabel: "Reborns",
    keyPrefix: "reborns",
    names: ["First Return", "Sparkbound", "Cycle Keeper", "Eternal Verdict", "Ascendant Judge"],
    targets: REBORN_ACHIEVEMENT_TARGETS,
    statKey: "lifetimeReborns",
    icon: "assets/art/reborn-spark-icon-v384.png?v=393",
    description: (target) => `Reborn ${achievementTargetDescription(target)} times.`
  }),
  ...buildAchievementChainDefs({
    chainKey: "judgmentUses",
    chainLabel: "Hammer of Judgement",
    keyPrefix: "judgmentUses",
    names: ["Hammer Trial", "Swift Sentence", "Verdict Caller", "Level Smasher", "Judgement Unleashed"],
    targets: JUDGMENT_USE_ACHIEVEMENT_TARGETS,
    statKey: "judgmentUses",
    icon: "assets/icons/hammers-wrath-icon.png?v=379",
    description: (target) => `Use Hammer of Judgement ${achievementTargetDescription(target)} times.`
  })
];
const achievementChains = Object.values(achievementDefs.reduce((chains, def) => {
  chains[def.chainKey] ??= { key: def.chainKey, label: def.chainLabel, defs: [] };
  chains[def.chainKey].defs.push(def);
  return chains;
}, {}));
const ACHIEVEMENT_DIAMOND_TIER_COST = 2500;
const MEGA_BOSS_SCROLL_COMMON_DUST_COST = 1500;
const achievementMilestoneDefs = [
  {
    key: "30",
    points: 30,
    free: {
      label: "Free Tier",
      rewards: [{ resource: "commonDust", amount: 500 }]
    },
    diamond: {
      label: "Diamond Tier",
      rewards: [{ resource: "commonDust", amount: 1000 }, { diamonds: 10 }]
    }
  },
  {
    key: "60",
    points: 60,
    free: {
      label: "Free Tier",
      rewards: [{ resource: "commonDust", amount: 500 }, { resource: "rareDust", amount: 250 }]
    },
    diamond: {
      label: "Diamond Tier",
      rewards: [{ resource: "commonDust", amount: 1000 }, { resource: "rareDust", amount: 500 }, { diamonds: 10 }]
    }
  }
];
const ACHIEVEMENT_MILESTONE_GOAL = Math.max(...achievementMilestoneDefs.map((milestone) => milestone.points));
const puzzleVaultDustDropTable = [
  { quality: "common", chance: 0.6, amount: 10 },
  { quality: "rare", chance: 0.4, amount: 7 },
  { quality: "epic", chance: 0.3, amount: 4 },
  { quality: "legendary", chance: 0.1, amount: 2 },
  { quality: "mythic", chance: 0.02, amount: 1 }
];
const PUZZLE_VAULT_GEM_TYPE_CHANCE = 0.5;
const ringGemResourceByDamageType = {
  physical: physicalGemResourceDef,
  fire: flameGemResourceDef,
  frost: iceGemResourceDef,
  water: waterGemResourceDef,
  electric: lightningGemResourceDef,
  cosmic: cosmicGemResourceDef,
  earth: earthGemResourceDef
};

function ringGemResourceForDamageType(damageType) {
  return ringGemResourceByDamageType[damageType] ?? physicalGemResourceDef;
}

function commonRingCraftingCosts() {
  return [
    { resource: "commonDust", amount: 500 },
    ...zoneItemResourceDefs.map((resource) => ({ resource: resource.key, amount: 5 }))
  ];
}

const ringRarityCraftingRequirements = {
  rare: { dust: "rareDust", dustAmount: 400, zoneItemAmount: 15 },
  epic: { dust: "epicDust", dustAmount: 300, zoneItemAmount: 25 },
  legendary: { dust: "legendaryDust", dustAmount: 1000, zoneItemAmount: 100 },
  mythic: { dust: "mythicDust", dustAmount: 5000, zoneItemAmount: 500 }
};

function ringCraftingCosts(def) {
  const rarity = ringRarityByKey[def?.quality] ?? ringRarityByKey.common;
  if (rarity.key === "common") return commonRingCraftingCosts();
  const requirement = ringRarityCraftingRequirements[rarity.key];
  const costs = [{ resource: ringGemResourceForDamageType(def.damageType).key, amount: rarity.craftGems }];
  if (!requirement) return costs;
  return [
    ...costs,
    { resource: requirement.dust, amount: requirement.dustAmount },
    ...zoneItemResourceDefs.map((resource) => ({ resource: resource.key, amount: requirement.zoneItemAmount }))
  ];
}

function ringRecipeDescription(def) {
  return `Adds ${effectPercent(def.damageBonus, 0)} ${ringDamageTypeMarkup(def.damageType)} against vulnerable Mega Bosses.`;
}

function createRingCraftingRecipe(def) {
  const rarity = ringRarityByKey[def.quality] ?? ringRarityByKey.common;
  return {
    key: `${def.key}Recipe`,
    group: `rings-${rarity.key}`,
    name: def.name,
    description: ringRecipeDescription(def),
    icon: def.icon,
    output: { kind: "ring", defKey: def.key },
    costs: ringCraftingCosts(def)
  };
}

const ringCraftingRecipes = ringRarityTiers.flatMap((rarity) => (
  ringDamageTypeOrder.map((damageType) => createRingCraftingRecipe(ringDefs[ringDefKey(damageType, rarity.key)]))
));
const craftingRecipes = [
  {
    key: "megaBossScroll",
    group: "scrolls",
    name: "Scroll",
    description: "Opens one Mega Boss attempt.",
    icon: "assets/art/mega-boss-scroll-icon.png",
    output: { kind: "scrolls", amount: 1 },
    costs: [
      { resource: "souls", amount: 10 },
      { resource: "commonDust", amount: MEGA_BOSS_SCROLL_COMMON_DUST_COST },
      { resource: "rareDust", amount: 600 },
      { resource: "epicDust", amount: 300 }
    ]
  },
  {
    key: "puzzleRing",
    group: "scrolls",
    name: "Puzzle Ring",
    description: "Opens one Puzzle Vault portal.",
    icon: PUZZLE_RING_ICON,
    output: { kind: "puzzleRingPortal" },
    costs: [
      { resource: "puzzleRingFragments", amount: 4 },
      { resource: "goblinEssence", amount: 1000 }
    ]
  },
  {
    key: "goblinEssenceCrucible",
    group: "scrolls",
    name: "Goblin Essence Crucible",
    description: "Converts 100 Goblin Essence into 10 Diamonds after 1 hour. Holds up to 12 queued hours.",
    icon: GOBLIN_ESSENCE_CRUCIBLE_ICON,
    iconClass: "essence-crucible-recipe-icon",
    output: { kind: "essenceCrucibleQueue" },
    costs: [
      { resource: "goblinEssence", amount: ESSENCE_CRUCIBLE_COST }
    ]
  },
  ...ringCraftingRecipes
];
const craftingRecipeGroups = [
  { key: "scrolls", label: "Special Item Creation" },
  ...ringRarityTiers.map((rarity) => ({ key: `rings-${rarity.key}`, label: `${rarity.label} Rings`, rarity: rarity.key }))
];
const NORMAL_BOSS_SOUL_REWARD = 1;
const MEGA_BOSS_WATER_GEM_REWARD = 1;
const FIRST_MEGA_BOSS_EARTH_GEM_MIN = 3;
const FIRST_MEGA_BOSS_EARTH_GEM_MAX = 5;

function megaBossResourceRewardEntries(def) {
  if (def?.key === megaBossDefs[0]?.key) {
    return [{ min: FIRST_MEGA_BOSS_EARTH_GEM_MIN, max: FIRST_MEGA_BOSS_EARTH_GEM_MAX, resource: earthGemResourceDef }];
  }
  return [{ min: MEGA_BOSS_WATER_GEM_REWARD, max: MEGA_BOSS_WATER_GEM_REWARD, resource: waterGemResourceDef }];
}

function rollMegaBossResourceRewards(def, rng = Math.random) {
  return megaBossResourceRewardEntries(def).map((entry) => ({
    amount: rollInclusiveAmount(entry.min, entry.max, rng),
    resource: entry.resource
  }));
}

function grantInventoryResourceReward(reward) {
  const key = reward?.resource?.key;
  const amount = Math.max(0, Math.floor(Number(reward?.amount) || 0));
  if (!key || amount <= 0) return;
  state.inventory.resources[key] = Math.max(0, Math.floor(Number(state.inventory.resources?.[key]) || 0)) + amount;
}

function grantInventoryResourceRewards(rewards) {
  for (const reward of rewards) grantInventoryResourceReward(reward);
}

function rollInclusiveAmount(min, max, rng = Math.random) {
  const low = Math.max(0, Math.floor(Number(min) || 0));
  const high = Math.max(low, Math.floor(Number(max) || low));
  return low + Math.floor(rng() * (high - low + 1));
}

function dustRewardFromEntry(entry, rng = Math.random) {
  const resource = dustResourceByQuality[entry?.quality];
  if (!resource) return null;
  return {
    amount: rollInclusiveAmount(entry.min, entry.max, rng),
    resource
  };
}

function rollWeightedDustReward(table, rng = Math.random) {
  const entries = Array.isArray(table) ? table.filter((entry) => Number(entry?.weight) > 0) : [];
  const totalWeight = entries.reduce((total, entry) => total + Number(entry.weight), 0);
  if (totalWeight <= 0) return [];
  let roll = rng() * totalWeight;
  for (const entry of entries) {
    roll -= Number(entry.weight);
    if (roll <= 0) {
      const reward = dustRewardFromEntry(entry, rng);
      return reward ? [reward] : [];
    }
  }
  const reward = dustRewardFromEntry(entries[entries.length - 1], rng);
  return reward ? [reward] : [];
}

function rollChanceDustReward(chance, table, rng = Math.random) {
  if (rng() >= Math.max(0, Number(chance) || 0)) return [];
  return rollWeightedDustReward(table, rng);
}

function rollNormalCreatureDustRewards(rng = Math.random) {
  return rollChanceDustReward(NORMAL_DUST_DROP_CHANCE, normalCreatureDustDropTable, rng);
}

function rollBossDustRewards(rng = Math.random) {
  return rollChanceDustReward(BOSS_DUST_DROP_CHANCE, bossDustDropTable, rng);
}

function realmIndexForLevel(level) {
  const normalizedLevel = Math.max(1, Math.floor(Number(level) || 1));
  return Math.floor((normalizedLevel - 1) / LEVELS_PER_ZONE) % realms.length;
}

function zoneResourceForLevel(level) {
  return zoneResourceByRealm[realmIndexForLevel(level)];
}

function rollLevelZoneResourceRewards(level, defeatedBoss = false, rng = Math.random) {
  const resource = zoneResourceForLevel(level);
  if (!resource) return [];
  const chance = defeatedBoss ? BOSS_ZONE_ITEM_DROP_CHANCE : NORMAL_ZONE_ITEM_DROP_CHANCE;
  if (rng() >= chance) return [];
  return [{
    amount: defeatedBoss ? rollInclusiveAmount(BOSS_ZONE_ITEM_MIN, BOSS_ZONE_ITEM_MAX, rng) : 1,
    resource
  }];
}

function rollGoblinEssenceRewards(rng = Math.random) {
  if (rng() >= GOBLIN_ESSENCE_DROP_CHANCE) return [];
  return [{ amount: rollInclusiveAmount(GOBLIN_ESSENCE_MIN, GOBLIN_ESSENCE_MAX, rng), resource: goblinEssenceResourceDef }];
}

function rollGoblinKingFragmentRewards(rng = Math.random) {
  if (rng() >= GOBLIN_KING_FRAGMENT_DROP_CHANCE) return [];
  return [{ amount: 1, resource: puzzleRingFragmentResourceDef }];
}

function rollMegaBossDustRewards(rng = Math.random) {
  const rewards = [];
  for (const entry of megaBossDustDropTable) {
    if (rng() < Math.max(0, Number(entry.chance) || 0)) {
      const reward = dustRewardFromEntry(entry, rng);
      if (reward) rewards.push(reward);
    }
  }
  if (rewards.length) return rewards;
  const fallback = dustRewardFromEntry(megaBossDustDropTable[0], rng);
  return fallback ? [fallback] : [];
}

function puzzleVaultRewardTier() {
  const baseLevel = Math.max(1, Math.floor(Number(state.puzzleVault?.baseLevel) || currentGlobalLevel()));
  return Math.max(1, Math.floor(baseLevel / LEVELS_PER_ZONE));
}

function scaledPuzzleVaultAmount(baseAmount, multiplier = 1) {
  const amount = Math.max(0, Math.floor(Number(baseAmount) || 0));
  return Math.max(0, Math.floor(amount * puzzleVaultRewardTier() * Math.max(0, Number(multiplier) || 0)));
}

function scaledPuzzleVaultEtherAmount(baseAmount) {
  const bossOrdinal = puzzleVaultRewardTier();
  const amount = Math.max(0, Math.floor(Number(baseAmount) || 0));
  return Math.max(0, Math.floor(amount * Math.pow(PUZZLE_VAULT_ETHER_BOSS_GROWTH, bossOrdinal - 1)));
}

function emptyPuzzleVaultLoot() {
  return { ether: 0, diamonds: 0, resources: [] };
}

function normalizePuzzleVaultLoot(loot) {
  const normalized = emptyPuzzleVaultLoot();
  normalized.ether = Math.max(0, Math.floor(Number(loot?.ether) || 0));
  normalized.diamonds = Math.max(0, Math.floor(Number(loot?.diamonds) || 0));
  const totals = {};
  for (const reward of loot?.resources ?? []) {
    const resourceKey = reward?.resource?.key ?? reward?.resourceKey ?? reward?.resource ?? reward?.key;
    const resource = resourceByKey[resourceKey];
    const amount = Math.max(0, Math.floor(Number(reward?.amount) || 0));
    if (!resource || amount <= 0) continue;
    totals[resource.key] ??= { amount: 0, resource };
    totals[resource.key].amount += amount;
  }
  normalized.resources = Object.values(totals);
  return normalized;
}

function compactPuzzleVaultLoot(loot) {
  const normalized = normalizePuzzleVaultLoot(loot);
  return {
    ether: normalized.ether,
    diamonds: normalized.diamonds,
    resources: normalized.resources.map((reward) => ({
      amount: reward.amount,
      resourceKey: reward.resource.key
    }))
  };
}

function mergePuzzleVaultLoot(baseLoot, addedLoot) {
  const base = normalizePuzzleVaultLoot(baseLoot);
  const added = normalizePuzzleVaultLoot(addedLoot);
  base.ether += added.ether;
  base.diamonds += added.diamonds;
  const totals = {};
  for (const reward of [...base.resources, ...added.resources]) {
    totals[reward.resource.key] ??= { amount: 0, resource: reward.resource };
    totals[reward.resource.key].amount += reward.amount;
  }
  base.resources = Object.values(totals);
  return base;
}

function addPuzzleVaultLoot(loot) {
  if (!state.puzzleVault) return;
  state.puzzleVault.loot = mergePuzzleVaultLoot(state.puzzleVault.loot, loot);
}

function rollPuzzleVaultDustRewards({ multiplier = 1, forceAny = false, rng = Math.random } = {}) {
  const rewards = [];
  for (const entry of puzzleVaultDustDropTable) {
    if (rng() < entry.chance) {
      const resource = dustResourceByQuality[entry.quality];
      if (resource) rewards.push({ amount: scaledPuzzleVaultAmount(entry.amount, multiplier), resource });
    }
  }
  if (rewards.length || !forceAny) return rewards.filter((reward) => reward.amount > 0);
  const total = puzzleVaultDustDropTable.reduce((sum, entry) => sum + entry.chance, 0);
  let roll = rng() * total;
  for (const entry of puzzleVaultDustDropTable) {
    roll -= entry.chance;
    if (roll <= 0) {
      const resource = dustResourceByQuality[entry.quality];
      return resource ? [{ amount: scaledPuzzleVaultAmount(entry.amount, multiplier), resource }] : [];
    }
  }
  const fallback = puzzleVaultDustDropTable[0];
  const resource = dustResourceByQuality[fallback.quality];
  return resource ? [{ amount: scaledPuzzleVaultAmount(fallback.amount, multiplier), resource }] : [];
}

function rollPuzzleVaultGemRewards({ multiplier = 1, forceAny = true, rng = Math.random } = {}) {
  const rewards = [];
  for (const resource of gemResourceDefs) {
    if (rng() < PUZZLE_VAULT_GEM_TYPE_CHANCE) {
      rewards.push({
        amount: scaledPuzzleVaultAmount(rollInclusiveAmount(1, 2, rng), multiplier),
        resource
      });
    }
  }
  if (rewards.length || !forceAny || !gemResourceDefs.length) return rewards.filter((reward) => reward.amount > 0);
  const resource = gemResourceDefs[Math.floor(rng() * gemResourceDefs.length)] ?? gemResourceDefs[0];
  return [{
    amount: scaledPuzzleVaultAmount(rollInclusiveAmount(1, 2, rng), multiplier),
    resource
  }].filter((reward) => reward.amount > 0);
}

function rollPuzzleVaultCosmicLoot(rng = Math.random) {
  const loot = emptyPuzzleVaultLoot();
  const choices = [
    { key: "ether", weight: 60 },
    { key: "dust", weight: 40 },
    { key: "gems", weight: 25 },
    { key: "diamonds", weight: 5 }
  ];
  const totalWeight = choices.reduce((sum, choice) => sum + choice.weight, 0);
  let roll = rng() * totalWeight;
  const selected = choices.find((choice) => {
    roll -= choice.weight;
    return roll <= 0;
  }) ?? choices[0];
  if (selected.key === "ether") loot.ether = scaledPuzzleVaultEtherAmount(PUZZLE_VAULT_ETHER_GOBLIN_BASE);
  else if (selected.key === "dust") loot.resources.push(...rollPuzzleVaultDustRewards({ forceAny: true, rng }));
  else if (selected.key === "gems") loot.resources.push(...rollPuzzleVaultGemRewards({ rng }));
  else if (selected.key === "diamonds") loot.diamonds = scaledPuzzleVaultAmount(3);
  return loot;
}

function rollPuzzleVaultLoot(enemyKey, defeatedBoss, rng = Math.random) {
  if (defeatedBoss) {
    const loot = emptyPuzzleVaultLoot();
    loot.ether = scaledPuzzleVaultEtherAmount(PUZZLE_VAULT_GOBLIN_KING_ETHER_BASE);
    loot.resources.push(...rollPuzzleVaultDustRewards({ multiplier: 2, forceAny: true, rng }));
    loot.resources.push(...rollPuzzleVaultGemRewards({ multiplier: 2, rng }));
    if (rng() < 0.1) loot.diamonds = scaledPuzzleVaultAmount(3, 2);
    loot.resources.push(...rollGoblinEssenceRewards(rng));
    loot.resources.push(...rollGoblinKingFragmentRewards(rng));
    return loot;
  }

  if (enemyKey === "ether") {
    const loot = { ...emptyPuzzleVaultLoot(), ether: scaledPuzzleVaultEtherAmount(PUZZLE_VAULT_ETHER_GOBLIN_BASE) };
    loot.resources.push(...rollGoblinEssenceRewards(rng));
    return loot;
  }
  if (enemyKey === "dust") {
    const loot = { ...emptyPuzzleVaultLoot(), resources: rollPuzzleVaultDustRewards({ rng }) };
    loot.resources.push(...rollGoblinEssenceRewards(rng));
    return loot;
  }
  if (enemyKey === "gem") {
    const loot = { ...emptyPuzzleVaultLoot(), resources: rollPuzzleVaultGemRewards({ rng }) };
    loot.resources.push(...rollGoblinEssenceRewards(rng));
    return loot;
  }
  if (enemyKey === "diamond") {
    const loot = { ...emptyPuzzleVaultLoot(), diamonds: scaledPuzzleVaultAmount(3) };
    loot.resources.push(...rollGoblinEssenceRewards(rng));
    return loot;
  }
  if (enemyKey === "cosmic") {
    const loot = rollPuzzleVaultCosmicLoot(rng);
    loot.resources.push(...rollGoblinEssenceRewards(rng));
    return loot;
  }
  const loot = emptyPuzzleVaultLoot();
  loot.resources.push(...rollGoblinEssenceRewards(rng));
  return loot;
}

function grantPuzzleVaultLoot(loot) {
  const ether = Math.max(0, Math.floor(Number(loot?.ether) || 0));
  const diamonds = Math.max(0, Math.floor(Number(loot?.diamonds) || 0));
  if (ether > 0) {
    state.gold = floorGameNumber(state.gold + ether);
    trackDailyQuestProgress("ether", ether);
  }
  if (diamonds > 0) {
    state.diamonds = floorGameNumber(state.diamonds + diamonds);
  }
  grantInventoryResourceRewards(loot?.resources ?? []);
}

function puzzleVaultLootText(loot) {
  const parts = [];
  if (loot?.ether > 0) parts.push(`${format(loot.ether)} Ether`);
  if (loot?.diamonds > 0) parts.push(`${format(loot.diamonds)} Diamonds`);
  if (loot?.resources?.length) parts.push(resourceRewardText(loot.resources));
  return parts.length ? parts.join(", ") : "No extra loot";
}

function dustRewardRangeText(entry) {
  const min = Math.max(0, Math.floor(Number(entry?.min) || 0));
  const max = Math.max(min, Math.floor(Number(entry?.max) || min));
  return min === max ? format(min) : `${format(min)}-${format(max)}`;
}

function megaBossDustDropChances() {
  return megaBossDustDropTable.map((entry) => {
    const resource = dustResourceByQuality[entry.quality] ?? dustResourceByQuality.common;
    return { ...entry, resource };
  });
}

function emptyInventoryBags() {
  return Object.fromEntries(equipmentSlots.map((slot) => [slot.key, Array(INVENTORY_SIZE).fill(null)]));
}

function emptyRingInventory() {
  return {
    equipped: null,
    bag: Array(RING_INVENTORY_SIZE).fill(null)
  };
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
const itemUpgradeStats = ["dpsMultiplier", "killNuggetMultiplier", "tapNuggetMultiplier"];
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

const STORAGE_PREFIX = "nugget-realms-";
const SAVE_KEY = `${STORAGE_PREFIX}save`;
const PROFILE_KEY = `${STORAGE_PREFIX}profile`;
const INTRO_SEEN_KEY = `${STORAGE_PREFIX}intro-v409-seen`;
const BOSS_TUTORIAL_SEEN_KEY = `${STORAGE_PREFIX}boss-tutorial-v411-seen`;
const DPS_GUIDE_SEEN_KEY = `${STORAGE_PREFIX}dps-guide-v412-seen`;
const GOBLIN_PORTAL_GUIDE_SEEN_KEY = `${STORAGE_PREFIX}goblin-portal-guide-v413-seen`;
const ACHIEVEMENT_GUIDE_STATE_KEY = `${STORAGE_PREFIX}achievement-guide-v414-state`;
const DAILY_GUIDE_STATE_KEY = `${STORAGE_PREFIX}daily-guide-v416-state`;
const JUDGMENT_GUIDE_SEEN_KEY = `${STORAGE_PREFIX}judgment-guide-v418-seen`;
const LEVEL_60_GUIDE_STATE_KEY = `${STORAGE_PREFIX}level-60-reborn-mega-guide-v420-state`;
const MEGA_BOSS_WALKTHROUGH_SEEN_KEY = `${STORAGE_PREFIX}mega-boss-walkthrough-v421-seen`;
const NOTIFICATION_CHANNEL_ID = "judge-reminders";
const NOTIFICATION_IDLE_LOOT_ID = 48201;
const NOTIFICATION_DAILY_QUEST_ID = 48202;
const NOTIFICATION_WEEKLY_TWO_DAY_ID = 48203;
const NOTIFICATION_WEEKLY_LAST_CHANCE_ID = 48204;
const NOTIFICATION_IDLE_DELAY_MS = 48 * 60 * 60 * 1000;
const NOTIFICATION_DAILY_REMINDER_BEFORE_MS = 4 * 60 * 60 * 1000;
const NOTIFICATION_WEEKLY_TWO_DAY_BEFORE_MS = 48 * 60 * 60 * 1000;
const NOTIFICATION_WEEKLY_LAST_CHANCE_BEFORE_MS = 4 * 60 * 60 * 1000;
const GOOGLE_CLOUD_SAVE_ENABLED = false;
const CLOUD_SAVE_SCHEMA_VERSION = 1;
const CLOUD_SAVE_UPLOAD_DELAY_MS = 3500;
const CLOUD_SAVE_MIN_UPLOAD_INTERVAL_MS = 20000;
const CLOUD_SAVE_CONFLICT_TIME_EPSILON_MS = 1000;
const PLAYER_NAME_MAX_LENGTH = 20;
const DEFAULT_PLAYER_NAME = "The Judge";
const PROFILE_AVATARS = [
  { id: "hammer", label: "Hammer's Wrath", src: "assets/icons/hammers-wrath-icon.png" },
  { id: "time", label: "Timeline Accelerandum", src: "assets/icons/time-accelerandum-icon.png" },
  { id: "benchbreaker", label: "Benchbreaker", src: "assets/icons/benchbreaker-icon.png" },
  { id: "adjudicator", label: "Universal Adjudicator", src: "assets/icons/universal-adjudicator-icon.png" },
  { id: "cosmic", label: "Cosmic Injunction", src: "assets/icons/cosmic-injunction-icon.png" },
  { id: "ember", label: "Ember Might", src: "assets/icons/ember-might-hd-icon.png" },
  { id: "crew", label: "Ancient Crew", src: "assets/icons/ancient-crew-hd-icon.png" },
  { id: "memory", label: "Ether Memory", src: "assets/icons/ether-memory-hd-icon.png" },
  { id: "hourglass", label: "Eternal Hourglass", src: "assets/icons/eternal-hourglass-icon.png" },
  { id: "executioner", label: "Executioner", src: "assets/icons/executioner-icon.png" },
  { id: "goblin", label: "Goblin Trophy", src: "assets/icons/goblin-kill-counter-icon-v380.png" },
  { id: "diamond", label: "Diamond", src: "assets/art/shop-diamond-icon.png" }
];
const megaBossWalkthroughSteps = [
  {
    heading: "Boss Scrolls",
    copy: "Normal bosses from level 60 onward can drop Mega Boss Scrolls. First clears are free, and repeat attempts spend scrolls."
  },
  {
    heading: "Timed Battles",
    copy: `Choose an unlocked Mega Boss, then tap Battle to start a timed fight. After the first clear, each boss has ${MEGA_BOSS_DAILY_ATTEMPTS} attempts per day.`
  },
  {
    heading: "Weaknesses And Rings",
    copy: "Each Mega Boss has a weakness and a resistance. Match the weakness with your damage type and equip Mega Boss rings for bigger hits."
  },
  {
    heading: "Rewards",
    copy: "Use the Rewards button to preview drops. Mega Bosses can award Ether, crafting resources, dust, rings, and rare Puzzle Vault portals."
  }
];
let localSaveExistedAtStartup = false;
let playerProfile = loadPlayerProfile();
let profileDraftAvatarId = playerProfile.avatarId;

function defaultPuzzleVaultState() {
  return {
    portalReady: false,
    active: false,
    generated: false,
    baseLevel: 1,
    level: 1,
    levelKills: 0,
    levelGoal: PUZZLE_VAULT_GOBLINS_PER_RUN,
    enemyKey: "",
    seed: 0,
    endsAt: 0,
    loot: emptyPuzzleVaultLoot(),
    summaryOpen: false,
    summaryOutcome: ""
  };
}

function defaultAchievementState() {
  return {
    completed: {},
    claimed: {},
    milestones: {
      diamondUnlocked: false,
      claimed: {
        free: {},
        diamond: {}
      }
    }
  };
}

function defaultLifetimeStats() {
  return {
    lifetimeTaps: 0,
    lifetimeChestTaps: 0,
    totalDamage: 0,
    highestTapCrit: 0,
    creatureKills: 0,
    creatureKillsByName: {},
    normalBossKills: 0,
    normalBossKillsByName: {},
    goblinKills: 0,
    goblinKillsByName: {},
    megaBossKills: 0,
    megaBossKillsByName: {},
    lifetimeReborns: 0,
    judgmentUses: 0
  };
}

const defaultState = {
  gold: 0,
  diamonds: 0,
  purchasedGems: 0,
  realm: 0,
  encounter: 0,
  levelKills: 0,
  levelGoal: 8,
  levelTappedGold: 0,
  maxLevel: 1,
  enemyHp: 0,
  maxHp: 0,
  bosses: 0,
  bossDiamondRewards: {},
  taps: 0,
  dailies: {
    day: "",
    week: "",
    progress: defaultDailyQuestProgress(),
    claimed: defaultDailyQuestClaimed(),
    weeklyCompleted: 0,
    weeklyRewardClaimed: false
  },
  achievements: defaultAchievementState(),
  stats: defaultLifetimeStats(),
  upgrades: {
    pick: 0,
    miner: 0,
    charm: 0,
    alchemist: 0,
    drill: 0,
    standard: 0,
    compass: 0
  },
  boosts: {
    flareUntil: 0,
    magnetUntil: 0,
    tapperFrenzyUntil: 0,
    tapFrenzyStacks: [],
    etherGainStacks: [],
    flareStacks: [],
    tapperFrenzyStacks: []
  },
  relics: {
    gildedLens: 0
  },
  cooldowns: {
    judgmentReadyAt: 0,
    hammerResetDay: "",
    hammerResetUses: 0
  },
  reborn: {
    sparks: 0,
    upgrades: {
      emberMight: 0,
      ancientCrew: 0,
      goldenMemory: 0,
      flyingHigh: 0,
      shinyAttractions: 0,
      lingeringRuin: 0,
      swiftJustice: 0
    }
  },
  megaBoss: {
    scrolls: 0,
    day: "",
    attempts: {},
    defeated: {},
    activeKey: "",
    hp: 0,
    hpLog: -Infinity,
    maxHp: 0,
    maxHpLog: 0,
    startedAt: 0,
    endsAt: 0
  },
  puzzleVault: defaultPuzzleVaultState(),
  essenceCrucible: {
    queue: []
  },
  dev: {
    tapDamageOverride: null,
    dpsOverride: null
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
    bags: emptyInventoryBags(),
    rings: emptyRingInventory()
  },
  lastSeen: Date.now(),
  saveUpdatedAt: Date.now()
};

const saveResetRequested = consumeSaveResetRequest();
let state = loadState();
let enemy = null;
let bossStartedAt = Date.now();
let lastFrame = performance.now();
let lastRenderAt = 0;
let gameRenderStarted = false;
let frameDelta = 1 / 60;
let animationFrameId = 0;
let animationTimerId = 0;
let activeRenderUntil = performance.now() + 2500;
let lastTapSoundAt = 0;
let canvasSizeCache = { width: 0, height: 0, dpr: 1 };
let hitPulse = 0;
let megaBossHitPulse = 0;
let selectedMegaBossIndex = Math.max(0, megaBossDefs.findIndex((def) => def.key === state.megaBoss?.activeKey));
let floaters = [];
let megaBossFloaters = [];
let lootParticles = [];
let slashEffects = [];
let judgmentEffects = [];
let enemySpawnSerial = 0;
let ambientParticles = [];
let ambientRealm = -1;
let lastPassiveHealthUpdate = 0;
let lastBossTimerUpdate = 0;
let lastRelicTimerUpdate = 0;
let lastTapperFrenzyAutoAt = 0;
let backgroundCache = { realm: -1, width: 0, height: 0, dpr: 1, canvas: null };
const generatedSpriteFrames = new WeakMap();
const generatedCrispSpriteFrames = new WeakMap();
let bird = null;
let nextBirdAt = performance.now() + randomInitialBirdDelay();
let purchasingSku = null;
let selectedInventoryIndex = null;
let selectedEquipmentSlot = null;
let selectedOverflowItem = false;
let selectedRingIndex = null;
let selectedRingEquipped = false;
let pendingOverflowItem = state.inventory.pendingDrop;
let activeInventoryView = "gear";
let activeGearSlotView = "helm";
let resourceSectionsOpen = closedResourceSections();
let craftingRecipeSectionsOpen = defaultCraftingRecipeSectionsOpen();
let selectedCraftingMaterialsRecipeKey = "";
let achievementMilestonesOpen = false;
let selectedAchievementMilestoneReward = null;
let pendingMassDisenchantQualities = [];
let pendingOfflineLootReport = null;
let pendingBossTutorialOpen = false;
let modalOpenedAt = 0;
let cloudSaveInitialSyncComplete = !cloudSaveBridge();
let cloudSaveUploadTimerId = 0;
let cloudSaveUploadInFlight = false;
let cloudSaveUploadQueued = false;
let cloudSaveLastUploadAt = 0;
let cloudSaveCallbackSerial = 0;
let lastInventorySlotActivation = 0;
let lastEquipmentSlotActivation = 0;
let numberFitFrame = 0;
let dpsGuidePositionFrame = 0;
let goblinPortalGuidePositionFrame = 0;
let achievementGuidePositionFrame = 0;
let dailyGuidePositionFrame = 0;
let judgmentGuidePositionFrame = 0;
let level60GuidePositionFrame = 0;
let dailyGuideWindowPromptShown = false;
let megaBossWalkthroughStep = 0;
let appNotificationSyncPromise = null;
let pendingAppNotificationSyncOptions = null;
let dpsGuideDialogObserver = null;

const els = {
    gold: document.querySelector("#goldValue"),
  diamonds: document.querySelector("#diamondValue"),
  rebornWallet: document.querySelector("#rebornWalletValue"),
  rebornFormula: document.querySelector("#rebornFormula"),
  hudPanel: document.querySelector(".hud-panel"),
  hudHitBlocker: document.querySelector("#hudHitBlocker"),
  stageBand: document.querySelector("#stageBand"),
  devToggle: document.querySelector("#devToggle"),
  devDialog: document.querySelector("#devDialog"),
  devBackdrop: document.querySelector("#devBackdrop"),
  closeDev: document.querySelector("#closeDev"),
  devEtherAmount: document.querySelector("#devEtherAmount"),
  devSparkAmount: document.querySelector("#devSparkAmount"),
  devDiamondAmount: document.querySelector("#devDiamondAmount"),
  devScrollAmount: document.querySelector("#devScrollAmount"),
  devDamageValue: document.querySelector("#devDamageValue"),
  devDpsValue: document.querySelector("#devDpsValue"),
  devLevelValue: document.querySelector("#devLevelValue"),
  devAddEther: document.querySelector("#devAddEther"),
  devAddSparks: document.querySelector("#devAddSparks"),
  devAddDiamonds: document.querySelector("#devAddDiamonds"),
  devAddScrolls: document.querySelector("#devAddScrolls"),
  devSetDamage: document.querySelector("#devSetDamage"),
  devSetDps: document.querySelector("#devSetDps"),
  devGoLevel: document.querySelector("#devGoLevel"),
  devClearOverrides: document.querySelector("#devClearOverrides"),
  devResetProgress: document.querySelector("#devResetProgress"),
  dailiesToggle: document.querySelector("#dailiesToggle"),
  dailiesDialog: document.querySelector("#dailiesDialog"),
  dailiesBackdrop: document.querySelector("#dailiesBackdrop"),
  closeDailies: document.querySelector("#closeDailies"),
  dailyWeeklyCounter: document.querySelector("#dailyWeeklyCounter"),
  dailyWeeklyFill: document.querySelector("#dailyWeeklyFill"),
  dailyWeeklyReset: document.querySelector("#dailyWeeklyReset"),
  claimWeeklyDailies: document.querySelector("#claimWeeklyDailies"),
  dailyQuestList: document.querySelector("#dailyQuestList"),
  dailyGuideCallout: document.querySelector("#dailyGuideCallout"),
  dailyGuideText: document.querySelector("#dailyGuideText"),
  dailyWindowGuideCallout: document.querySelector("#dailyWindowGuideCallout"),
  dailyWindowGuideText: document.querySelector("#dailyWindowGuideText"),
  achievementsToggle: document.querySelector("#achievementsToggle"),
  achievementsDialog: document.querySelector("#achievementsDialog"),
  achievementsBackdrop: document.querySelector("#achievementsBackdrop"),
  closeAchievements: document.querySelector("#closeAchievements"),
  achievementTabs: document.querySelectorAll("[data-achievement-tab]"),
  achievementPanes: document.querySelectorAll("[data-achievement-pane]"),
  achievementMilestoneToggle: document.querySelector("#achievementMilestoneToggle"),
  achievementMilestoneDialog: document.querySelector("#achievementMilestoneDialog"),
  achievementMilestoneBackdrop: document.querySelector("#achievementMilestoneBackdrop"),
  closeAchievementMilestones: document.querySelector("#closeAchievementMilestones"),
  achievementMilestoneRewardDialog: document.querySelector("#achievementMilestoneRewardDialog"),
  achievementMilestoneRewardBackdrop: document.querySelector("#achievementMilestoneRewardBackdrop"),
  achievementMilestoneRewardTitle: document.querySelector("#achievementMilestoneRewardTitle"),
  closeAchievementMilestoneReward: document.querySelector("#closeAchievementMilestoneReward"),
  achievementMilestoneMenu: document.querySelector("#achievementMilestoneMenu"),
  achievementMilestoneText: document.querySelector("#achievementMilestoneText"),
  achievementMilestoneFill: document.querySelector("#achievementMilestoneFill"),
  achievementDiamondTierButton: document.querySelector("#achievementDiamondTierButton"),
  achievementMilestoneLadder: document.querySelector("#achievementMilestoneLadder"),
  achievementMilestoneDetail: document.querySelector("#achievementMilestoneDetail"),
  achievementList: document.querySelector("#achievementList"),
  statisticsList: document.querySelector("#statisticsList"),
  optionsToggle: document.querySelector("#optionsToggle"),
  shopToggle: document.querySelector("#shopToggle"),
  shopDialog: document.querySelector("#shopDialog"),
  shopBackdrop: document.querySelector("#shopBackdrop"),
  shopProducts: document.querySelector("#shopProducts"),
  shopDiamondBalance: document.querySelector("#shopDiamondBalance"),
  closeShop: document.querySelector("#closeShop"),
  optionsAvatarButton: document.querySelector("#optionsAvatarButton"),
  optionsAvatarImage: document.querySelector("#optionsAvatarImage"),
  profileDialog: document.querySelector("#profileDialog"),
  profileBackdrop: document.querySelector("#profileBackdrop"),
  closeProfile: document.querySelector("#closeProfile"),
  profileModeButtons: document.querySelectorAll("[data-profile-mode]"),
  profilePanels: document.querySelectorAll("[data-profile-panel]"),
  profileNameInput: document.querySelector("#profileNameInput"),
  profileAvatarGrid: document.querySelector("#profileAvatarGrid"),
  profileSaveButton: document.querySelector("#profileSaveButton"),
  googleSignInButton: document.querySelector("#googleSignInButton"),
  megaBossToggle: document.querySelector("#megaBossToggle"),
  megaBossDialog: document.querySelector("#megaBossDialog"),
  megaBossBackdrop: document.querySelector("#megaBossBackdrop"),
  closeMegaBoss: document.querySelector("#closeMegaBoss"),
  megaBossRingSlot: document.querySelector("#megaBossRingSlot"),
  openRingInventory: document.querySelector("#openRingInventory"),
  openMegaBossCrafting: document.querySelector("#openMegaBossCrafting"),
  megaBossFlee: document.querySelector("#megaBossFlee"),
  megaBossCanvas: document.querySelector("#megaBossCanvas"),
  megaBossScrolls: document.querySelector("#megaBossScrolls"),
  megaBossHeadingSlot: document.querySelector("#megaBossHeadingSlot"),
  megaBossStageRewards: document.querySelector("#megaBossStageRewards"),
  megaBossStageTraits: document.querySelector("#megaBossStageTraits"),
  megaBossStageTimer: document.querySelector("#megaBossStageTimer"),
  megaBossStageTimerText: document.querySelector("#megaBossStageTimerText"),
  megaBossList: document.querySelector("#megaBossList"),
  megaBossHealth: document.querySelector(".mega-boss-health"),
  megaBossHealthFill: document.querySelector("#megaBossHealthFill"),
  megaBossHealthText: document.querySelector("#megaBossHealthText"),
  megaBossStatus: document.querySelector("#megaBossStatus"),
  megaBossRewardsDialog: document.querySelector("#megaBossRewardsDialog"),
  megaBossRewardsBackdrop: document.querySelector("#megaBossRewardsBackdrop"),
  megaBossRewardsBody: document.querySelector("#megaBossRewardsBody"),
  closeMegaBossRewards: document.querySelector("#closeMegaBossRewards"),
  megaBossWalkthroughDialog: document.querySelector("#megaBossWalkthroughDialog"),
  megaBossWalkthroughBackdrop: document.querySelector("#megaBossWalkthroughBackdrop"),
  closeMegaBossWalkthrough: document.querySelector("#closeMegaBossWalkthrough"),
  megaBossWalkthroughCount: document.querySelector("#megaBossWalkthroughCount"),
  megaBossWalkthroughHeading: document.querySelector("#megaBossWalkthroughHeading"),
  megaBossWalkthroughCopy: document.querySelector("#megaBossWalkthroughCopy"),
  megaBossWalkthroughBack: document.querySelector("#megaBossWalkthroughBack"),
  megaBossWalkthroughNext: document.querySelector("#megaBossWalkthroughNext"),
  ringInventoryDialog: document.querySelector("#ringInventoryDialog"),
  ringInventoryBackdrop: document.querySelector("#ringInventoryBackdrop"),
  closeRingInventory: document.querySelector("#closeRingInventory"),
  ringEquippedSummary: document.querySelector("#ringEquippedSummary"),
  ringInventoryGrid: document.querySelector("#ringInventoryGrid"),
  ringDetailDialog: document.querySelector("#ringDetailDialog"),
  ringDetailBackdrop: document.querySelector("#ringDetailBackdrop"),
  ringDetailIcon: document.querySelector("#ringDetailIcon"),
  ringDetailName: document.querySelector("#ringDetailName"),
  ringDetailType: document.querySelector("#ringDetailType"),
  ringDetailStats: document.querySelector("#ringDetailStats"),
  ringDetailFlavor: document.querySelector("#ringDetailFlavor"),
  ringDetailAction: document.querySelector("#ringDetailAction"),
  ringDetailDisenchant: document.querySelector("#ringDetailDisenchant"),
  cancelRingDetail: document.querySelector("#cancelRingDetail"),
  optionsDialog: document.querySelector("#optionsDialog"),
  optionsBackdrop: document.querySelector("#optionsBackdrop"),
  closeOptions: document.querySelector("#closeOptions"),
  optionsTabs: document.querySelectorAll("[data-options-tab]"),
  optionsPanes: document.querySelectorAll("[data-options-pane]"),
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
  puzzleVaultFlee: document.querySelector("#puzzleVaultFlee"),
  puzzlePortalButton: document.querySelector("#puzzlePortalButton"),
  goblinPortalGuideCallout: document.querySelector("#goblinPortalGuideCallout"),
  goblinPortalGuideText: document.querySelector("#goblinPortalGuideText"),
  puzzleVaultSummaryDialog: document.querySelector("#puzzleVaultSummaryDialog"),
  puzzleVaultSummaryBackdrop: document.querySelector("#puzzleVaultSummaryBackdrop"),
  puzzleVaultSummaryTitle: document.querySelector("#puzzleVaultSummaryTitle"),
  puzzleVaultSummaryCopy: document.querySelector("#puzzleVaultSummaryCopy"),
  puzzleVaultSummaryLoot: document.querySelector("#puzzleVaultSummaryLoot"),
  puzzleVaultReturn: document.querySelector("#puzzleVaultReturn"),
  offlineLootDialog: document.querySelector("#offlineLootDialog"),
  offlineLootBackdrop: document.querySelector("#offlineLootBackdrop"),
  offlineLootSummary: document.querySelector("#offlineLootSummary"),
  offlineLootList: document.querySelector("#offlineLootList"),
  offlineLootClose: document.querySelector("#offlineLootClose"),
  bossTutorialDialog: document.querySelector("#bossTutorialDialog"),
  bossTutorialBackdrop: document.querySelector("#bossTutorialBackdrop"),
  closeBossTutorial: document.querySelector("#closeBossTutorial"),
  bossTutorialContinue: document.querySelector("#bossTutorialContinue"),
  introDialog: document.querySelector("#introDialog"),
  introBackdrop: document.querySelector("#introBackdrop"),
  introStartButton: document.querySelector("#introStartButton"),
  canvas: document.querySelector("#battleCanvas"),
  activeBuffStrip: document.querySelector("#activeBuffStrip"),
  judgmentCooldown: document.querySelector("#judgmentCooldown"),
  judgmentCooldownTimer: document.querySelector("#judgmentCooldownTimer"),
  judgmentGuideCallout: document.querySelector("#judgmentGuideCallout"),
  judgmentGuideText: document.querySelector("#judgmentGuideText"),
  level60RebornGuideCallout: document.querySelector("#level60RebornGuideCallout"),
  level60RebornGuideText: document.querySelector("#level60RebornGuideText"),
  level60MegaBossGuideCallout: document.querySelector("#level60MegaBossGuideCallout"),
  level60MegaBossGuideText: document.querySelector("#level60MegaBossGuideText"),
  inventoryToggle: document.querySelector("#inventoryToggle"),
  craftingToggle: document.querySelector("#craftingToggle"),
  craftingBackdrop: document.querySelector("#craftingBackdrop"),
  craftingDialog: document.querySelector("#craftingDialog"),
  closeCrafting: document.querySelector("#closeCrafting"),
  craftingResourcesGrid: document.querySelector("#craftingResourcesGrid"),
  craftingList: document.querySelector("#craftingList"),
  craftingMaterialsBackdrop: document.querySelector("#craftingMaterialsBackdrop"),
  craftingMaterialsDialog: document.querySelector("#craftingMaterialsDialog"),
  closeCraftingMaterials: document.querySelector("#closeCraftingMaterials"),
  craftingMaterialsBody: document.querySelector("#craftingMaterialsBody"),
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
  massDisenchantConfirmTitle: document.querySelector("#massDisenchantConfirmTitle"),
  massDisenchantConfirmText: document.querySelector("#massDisenchantConfirmText"),
  massDisenchantRewards: document.querySelector("#massDisenchantRewards"),
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
  rebornRewardFormula: document.querySelector("#rebornRewardFormula"),
  confirmReborn: document.querySelector("#confirmReborn"),
  cancelReborn: document.querySelector("#cancelReborn"),
  healthFill: document.querySelector("#healthFill"),
  healthText: document.querySelector("#healthText"),
  tapCount: document.querySelector("#tapCountValue"),
  tapDamage: document.querySelector("#tapDamageValue"),
  dps: document.querySelector("#dpsValue"),
  bossCount: document.querySelector("#bossCountValue"),
  dpsGuideCallout: document.querySelector("#dpsGuideCallout"),
  dpsGuideText: document.querySelector("#dpsGuideText"),
  achievementGuideCallout: document.querySelector("#achievementGuideCallout"),
  achievementGuideText: document.querySelector("#achievementGuideText"),
  achievementMilestoneGuideCallout: document.querySelector("#achievementMilestoneGuideCallout"),
  achievementMilestoneGuideText: document.querySelector("#achievementMilestoneGuideText"),
  achievementFreeTierGuideCallout: document.querySelector("#achievementFreeTierGuideCallout"),
  achievementFreeTierGuideText: document.querySelector("#achievementFreeTierGuideText"),
  achievementDiamondTierGuideCallout: document.querySelector("#achievementDiamondTierGuideCallout"),
  achievementDiamondTierGuideText: document.querySelector("#achievementDiamondTierGuideText"),
  upgradeList: document.querySelector("#upgradeList"),
  boonList: document.querySelector("#boonList"),
  buffList: document.querySelector("#buffList"),
  toast: document.querySelector("#toast")
};

const ctx = els.canvas.getContext("2d");
const megaCtx = els.megaBossCanvas?.getContext("2d") ?? null;
const artAssets = {
  backgrounds: loadArt("assets/art/realm-background-atlas.png"),
  realmEncounterEnemies: [
    loadArt("assets/art/enemy-encounter-mossglow-hd.png?v=241"),
    loadArt("assets/art/enemy-encounter-emberglass-hd.png?v=241"),
    loadArt("assets/art/enemy-encounter-frostvein-hd.png?v=241"),
    loadArt("assets/art/enemy-encounter-moonlit-hd.png?v=241"),
    loadArt("assets/art/enemy-encounter-stormforge-hd.png?v=241"),
    loadArt("assets/art/enemy-encounter-starfall-hd.png?v=241")
  ],
  wingedChest: loadArt("assets/art/winged-treasure-chest-v3.png?v=290"),
  etherOrb: loadArt("assets/art/ether-icon.png"),
  tapGavel: loadArt("assets/art/tap-gavel.png"),
  greenFlame: loadArt("assets/art/green-flame.png"),
  righteousHammer: loadArt("assets/art/righteous-hammer-strike.png"),
  megaBossFireBackdrop: loadArt("assets/art/mega-boss-fire-backdrop.png"),
  megaBossLavaPlatform: loadArt("assets/art/mega-boss-lava-platform.png"),
  puzzleVaultPortal: loadArt(puzzleVaultArt.portal),
  puzzleVaultBackground: loadArt(puzzleVaultArt.background),
  puzzleVaultLevelIcon: loadArt(puzzleVaultArt.levelIcon),
  puzzleVaultGoblinCounterIcon: loadArt(puzzleVaultArt.goblinCounterIcon),
  puzzleVaultEnemies: Object.fromEntries([...puzzleVaultGoblinDefs, puzzleVaultBossDef].map((def) => [def.key, loadArt(def.image)])),
  ambientParticles: realmVfx.map((def) => loadArt(def.particleSrc))
};
const megaBossArt = Object.fromEntries(megaBossDefs.map((def) => [def.key, loadArt(def.image)]));
const megaBossBackdropArt = Object.fromEntries(megaBossDefs.filter((def) => def.backdrop).map((def) => [def.key, loadArt(def.backdrop)]));
const generatedSpriteBounds = new WeakMap();
const GENERATED_CREATURE_SIZE_MULTIPLIER = 1.4;
const GENERATED_CREATURE_VERTICAL_LIFT = -0.075;
const GENERATED_CREATURE_BOTTOM_LIMIT = 0.735;
const arenaCenters = [
  { x: 0.5, y: 0.655 },
  { x: 0.5, y: 0.645 },
  { x: 0.5, y: 0.675 },
  { x: 0.5, y: 0.705 },
  { x: 0.5, y: 0.718 },
  { x: 0.5, y: 0.705 }
];
const generatedSpriteRealmTuning = {
  0: { scale: 0.86, yOffset: 0.02, maxWidth: 0.7, maxHeight: 0.46, safeTop: 0.27, safeSide: 0.005 },
  1: { scale: 0.86, yOffset: 0.02, maxWidth: 0.7, maxHeight: 0.46, safeTop: 0.27, safeSide: 0.005 },
  2: { scale: 0.86, yOffset: 0.025, maxWidth: 0.7, maxHeight: 0.46, safeTop: 0.27, safeSide: 0.005 },
  3: { scale: 0.82, yOffset: 0.035, maxWidth: 0.7, maxHeight: 0.46, safeTop: 0.27, safeSide: 0.005 },
  4: { scale: 0.68, yOffset: 0.04, maxWidth: 0.66, maxHeight: 0.44, safeTop: 0.27, safeSide: 0.005, crisp: 1.08, contrast: 1.1, saturate: 1.1 },
  5: { scale: 0.72, yOffset: 0.055, maxWidth: 0.66, maxHeight: 0.44, safeTop: 0.27, safeSide: 0.005, crisp: 0.95, contrast: 1.08, saturate: 1.14 }
};
const generatedSpriteFrameTuning = {
  "0:7": { eraseRects: [{ x: 264, y: 292, w: 96, h: 68 }] },
  "2:9": { scale: 0.9, xOffset: 0.055, yOffset: 0.045 },
  "3:9": { scale: 0.9, yOffset: 0.015, maxWidth: 0.66, maxHeight: 0.42, contrast: 1.08, saturate: 1.08 },
  "5:9": { scale: 1.12, yOffset: 0.005, maxWidth: 0.74, maxHeight: 0.48, safeTop: 0.27, contrast: 1.06, saturate: 1.08 }
};

const realmMusicTracks = [
  "assets/audio/Mossglow Path.wav",
  "assets/audio/Fire Land Music.wav",
  "assets/audio/Frostbite Idle Run.wav",
  "assets/audio/Swamp.wav",
  "assets/audio/Brass Gear Engine.wav",
  "assets/audio/Orbital Idle Run.wav"
];
const bossMusicTrack = "assets/audio/Boss.wav";
const puzzleVaultMusicTrack = "assets/audio/Goblin Vault Run.wav";
const realmBossMusicTracks = [
  "assets/audio/Moss Crown Boss.wav",
  "assets/audio/Fire Boss Music.wav",
  bossMusicTrack,
  "assets/audio/Moonlit Mire Boss.wav",
  "assets/audio/Gilded Gearstorm.wav",
  "assets/audio/Event Horizon Boss.wav"
];

const audio = {
  context: null,
  master: null,
  sfx: null,
  sfxVolume: storedVolume("nugget-realms-sfx-volume", 0.75),
  musicVolume: storedVolume("nugget-realms-music-volume", 0.35),
  musicTrack: "",
  musicMode: "",
  noiseBuffer: null,
  unlocked: false
};
let appAudioActive = document.visibilityState !== "hidden";

function loadState() {
  try {
    const rawSave = localStorage.getItem(SAVE_KEY);
    localSaveExistedAtStartup = Boolean(rawSave);
    return normalizeLoadedState(mergeSavedState(rawSave ? JSON.parse(rawSave) : null));
  } catch {
    localSaveExistedAtStartup = false;
    return normalizeLoadedState({ ...defaultState });
  }
}

function mergeSavedState(saved) {
  return saved
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
        megaBoss: normalizeMegaBossState(saved.megaBoss),
        puzzleVault: normalizePuzzleVaultState(saved.puzzleVault, levelFromParts(saved.realm, saved.encounter)),
        essenceCrucible: normalizeEssenceCrucibleState(saved.essenceCrucible),
        dailies: normalizeDailyQuestState(saved.dailies),
        achievements: normalizeAchievementState(saved.achievements),
        stats: normalizeLifetimeStats(saved.stats, saved.taps),
        dev: normalizeDevState(saved.dev),
        inventory: normalizeInventory(saved.inventory)
      }
    : { ...defaultState };
}

function consumeSaveResetRequest() {
  const params = new URLSearchParams(window.location.search);
  if (!params.has("resetSave")) return false;
  clearGameStorage();
  params.delete("resetSave");
  const query = params.toString();
  const cleanUrl = `${window.location.pathname}${query ? `?${query}` : ""}${window.location.hash}`;
  window.history.replaceState(null, "", cleanUrl);
  return true;
}

function clearGameStorage() {
  clearStorageByPrefix(localStorage, STORAGE_PREFIX);
  clearStorageByPrefix(sessionStorage, STORAGE_PREFIX);
}

function clearStorageByPrefix(storage, prefix) {
  if (!storage) return;
  for (let index = storage.length - 1; index >= 0; index -= 1) {
    const key = storage.key(index);
    if (key?.startsWith(prefix)) storage.removeItem(key);
  }
}

function normalizeLoadedState(loaded) {
  loaded.gold = floorGameNumber(loaded.gold);
  loaded.diamonds = floorGameNumber(loaded.diamonds);
  loaded.purchasedGems = floorGameNumber(loaded.purchasedGems);
  const currentLevel = levelFromParts(loaded.realm, loaded.encounter);
  loaded.maxLevel = Math.max(1, currentLevel, Math.floor(Number(loaded.maxLevel) || currentLevel));
  loaded.levelGoal = sanitizeLevelGoal(loaded.levelGoal);
  loaded.levelKills = Math.max(0, Math.min(loaded.levelGoal, Math.floor(Number(loaded.levelKills) || 0)));
  loaded.levelTappedGold = Math.max(0, Math.floor(Number(loaded.levelTappedGold) || 0));
  loaded.bosses = Math.max(0, Math.floor(Number(loaded.bosses) || 0));
  loaded.bossDiamondRewards = normalizeBossDiamondRewards(loaded.bossDiamondRewards, loaded.maxLevel);
  loaded.taps = Math.max(0, Math.floor(Number(loaded.taps) || 0));
  loaded.dailies = normalizeDailyQuestState(loaded.dailies);
  loaded.achievements = normalizeAchievementState(loaded.achievements);
  loaded.stats = normalizeLifetimeStats(loaded.stats, loaded.taps);
  loaded.lastSeen = Math.max(0, Number(loaded.lastSeen) || Date.now());
  loaded.saveUpdatedAt = Math.max(0, Number(loaded.saveUpdatedAt) || Number(loaded.lastSeen) || Date.now());
  loaded.upgrades = normalizeUpgradeState(loaded.upgrades);
  loaded.boosts = normalizeBoosts(loaded.boosts);
  loaded.cooldowns = normalizeCooldowns(loaded.cooldowns);
  loaded.megaBoss = normalizeMegaBossState(loaded.megaBoss);
  loaded.puzzleVault = normalizePuzzleVaultState(loaded.puzzleVault, currentLevel);
  loaded.essenceCrucible = normalizeEssenceCrucibleState(loaded.essenceCrucible);
  loaded.dev = normalizeDevState(loaded.dev);
  loaded.inventory = normalizeInventory(loaded.inventory);
  return loaded;
}

function normalizeUpgradeState(upgrades) {
  return Object.fromEntries(
    Object.keys(defaultState.upgrades).map((key) => [key, Math.max(0, Math.floor(Number(upgrades?.[key]) || 0))])
  );
}

function normalizeDevState(dev) {
  return {
    ...defaultState.dev,
    tapDamageOverride: finiteDevOverride(dev?.tapDamageOverride),
    dpsOverride: finiteDevOverride(dev?.dpsOverride)
  };
}

function normalizePuzzleVaultState(vault, fallbackLevel = 1) {
  const defaults = defaultPuzzleVaultState();
  const normalized = {
    ...defaults,
    ...vault
  };
  const baseLevel = Math.max(1, Math.floor(Number(vault?.baseLevel) || Number(fallbackLevel) || 1));
  const legacyLevel = Math.max(1, Math.floor(Number(vault?.level) || 1));
  const legacyLevelKills = Math.max(0, Math.floor(Number(vault?.levelKills) || 0));
  const goblinKills = legacyLevel > 1
    ? Math.min(PUZZLE_VAULT_GOBLINS_PER_RUN, legacyLevel - 1 + legacyLevelKills)
    : Math.min(PUZZLE_VAULT_GOBLINS_PER_RUN, legacyLevelKills);
  const validEnemyKeys = new Set([...puzzleVaultGoblinDefs.map((def) => def.key), puzzleVaultBossDef.key]);
  const enemyKey = validEnemyKeys.has(vault?.enemyKey) ? vault.enemyKey : "";
  const active = Boolean(vault?.active);
  const summaryOpen = Boolean(vault?.summaryOpen);
  const summaryOutcome = ["victory", "timeout"].includes(vault?.summaryOutcome) ? vault.summaryOutcome : "";
  const savedEndsAt = Math.max(0, Number(vault?.endsAt) || 0);
  const timedOutWhileClosed = active && !summaryOpen && savedEndsAt > 0 && savedEndsAt <= Date.now();
  const openSummary = summaryOpen || timedOutWhileClosed;
  normalized.portalReady = Boolean(vault?.portalReady) && !openSummary;
  normalized.active = active && !openSummary;
  normalized.generated = Boolean(vault?.generated || normalized.portalReady || normalized.active || openSummary);
  normalized.baseLevel = baseLevel;
  normalized.level = 1;
  normalized.levelGoal = PUZZLE_VAULT_GOBLINS_PER_RUN;
  normalized.levelKills = goblinKills;
  normalized.enemyKey = openSummary ? "" : normalized.levelKills >= normalized.levelGoal ? puzzleVaultBossDef.key : enemyKey;
  normalized.seed = Math.max(0, Math.floor(Number(vault?.seed) || 0));
  normalized.endsAt = normalized.active
    ? savedEndsAt || Date.now() + PUZZLE_VAULT_TIMER_SECONDS * 1000
    : 0;
  normalized.loot = normalizePuzzleVaultLoot(vault?.loot);
  normalized.summaryOpen = openSummary;
  normalized.summaryOutcome = openSummary ? summaryOutcome || "timeout" : "";
  return normalized;
}

function normalizeEssenceCrucibleState(crucible) {
  const queue = Array.isArray(crucible?.queue)
    ? crucible.queue
        .map((entry) => ({
          queuedAt: Math.max(0, Number(entry?.queuedAt) || 0),
          readyAt: Math.max(0, Number(entry?.readyAt) || 0)
        }))
        .filter((entry) => entry.readyAt > 0)
        .sort((a, b) => a.readyAt - b.readyAt)
        .slice(0, ESSENCE_CRUCIBLE_MAX_QUEUE)
    : [];
  return { queue };
}

function normalizeAchievementState(achievements) {
  const defaults = defaultAchievementState();
  const completed = {};
  const claimed = {};
  if (achievements?.completed && typeof achievements.completed === "object") {
    for (const [key, value] of Object.entries(achievements.completed)) {
      if (!achievementDefs.some((def) => def.key === key) || !value) continue;
      completed[key] = typeof value === "object"
        ? { completedAt: Math.max(0, Number(value.completedAt) || Number(value.claimedAt) || 0) }
        : { completedAt: 0 };
    }
  }
  if (achievements?.claimed && typeof achievements.claimed === "object") {
    for (const [key, value] of Object.entries(achievements.claimed)) {
      if (!achievementDefs.some((def) => def.key === key) || !value) continue;
      claimed[key] = typeof value === "object"
        ? { claimedAt: Math.max(0, Number(value.claimedAt) || 0) }
        : { claimedAt: 0 };
      completed[key] ??= { completedAt: claimed[key].claimedAt };
    }
  }
  const milestoneSource = achievements?.milestones && typeof achievements.milestones === "object" ? achievements.milestones : {};
  const milestoneClaimSource = milestoneSource.claimed && typeof milestoneSource.claimed === "object" ? milestoneSource.claimed : {};
  const milestoneClaims = {
    free: normalizeAchievementMilestoneClaimMap(milestoneClaimSource.free),
    diamond: normalizeAchievementMilestoneClaimMap(milestoneClaimSource.diamond)
  };
  return {
    completed,
    claimed,
    milestones: {
      ...defaults.milestones,
      diamondUnlocked: Boolean(milestoneSource.diamondUnlocked),
      claimed: milestoneClaims
    }
  };
}

function normalizeAchievementMilestoneClaimMap(claimed) {
  const normalized = {};
  if (!claimed || typeof claimed !== "object") return normalized;
  const validKeys = new Set(achievementMilestoneDefs.map((milestone) => milestone.key));
  for (const [key, value] of Object.entries(claimed)) {
    if (!validKeys.has(key) || !value) continue;
    normalized[key] = typeof value === "object"
      ? { claimedAt: Math.max(0, Number(value.claimedAt) || 0) }
      : { claimedAt: 0 };
  }
  return normalized;
}

function normalizeCountMap(map) {
  const normalized = {};
  if (!map || typeof map !== "object") return normalized;
  for (const [key, value] of Object.entries(map)) {
    const amount = Math.max(0, Math.floor(Number(value) || 0));
    if (amount > 0) normalized[key] = amount;
  }
  return normalized;
}

function normalizeLifetimeStats(stats, fallbackTaps = 0) {
  const defaults = defaultLifetimeStats();
  const normalized = {
    ...defaults,
    ...stats
  };
  normalized.lifetimeTaps = Math.max(
    Math.floor(Number(normalized.lifetimeTaps) || 0),
    Math.floor(Number(fallbackTaps) || 0)
  );
  normalized.lifetimeChestTaps = Math.max(0, Math.floor(Number(normalized.lifetimeChestTaps) || 0));
  normalized.totalDamage = Math.max(0, Number(normalized.totalDamage) || 0);
  normalized.highestTapCrit = Math.max(0, Number(normalized.highestTapCrit) || 0);
  normalized.creatureKills = Math.max(0, Math.floor(Number(normalized.creatureKills) || 0));
  normalized.creatureKillsByName = normalizeCountMap(normalized.creatureKillsByName);
  normalized.normalBossKills = Math.max(0, Math.floor(Number(normalized.normalBossKills) || 0));
  normalized.normalBossKillsByName = normalizeCountMap(normalized.normalBossKillsByName);
  normalized.goblinKills = Math.max(0, Math.floor(Number(normalized.goblinKills) || 0));
  normalized.goblinKillsByName = normalizeCountMap(normalized.goblinKillsByName);
  normalized.megaBossKills = Math.max(0, Math.floor(Number(normalized.megaBossKills) || 0));
  normalized.megaBossKillsByName = normalizeCountMap(normalized.megaBossKillsByName);
  normalized.lifetimeReborns = Math.max(0, Math.floor(Number(normalized.lifetimeReborns) || 0));
  normalized.judgmentUses = Math.max(0, Math.floor(Number(normalized.judgmentUses) || 0));
  return normalized;
}

function normalizeBossDiamondRewards(rewards, maxLevel = 1) {
  const claimed = {};
  if (Array.isArray(rewards)) {
    for (const level of rewards) {
      const normalized = Math.max(0, Math.floor(Number(level) || 0));
      if (isBossLevel(normalized)) claimed[normalized] = true;
    }
  } else if (rewards && typeof rewards === "object") {
    for (const [level, value] of Object.entries(rewards)) {
      const normalized = Math.max(0, Math.floor(Number(level) || 0));
      if (value && isBossLevel(normalized)) claimed[normalized] = true;
    }
  }

  const highestClearedLevel = Math.max(0, Math.floor(Number(maxLevel) || 1) - 1);
  for (let level = LEVELS_PER_ZONE; level <= highestClearedLevel; level += LEVELS_PER_ZONE) {
    claimed[level] = true;
  }

  return claimed;
}

function finiteDevOverride(value) {
  if (value === null || value === undefined || value === "") return null;
  const number = Number(value);
  return Number.isFinite(number) && number >= 0 ? number : null;
}

function normalizeCooldowns(cooldowns) {
  const normalized = {
    ...defaultState.cooldowns,
    ...cooldowns,
    judgmentReadyAt: Math.max(0, Number(cooldowns?.judgmentReadyAt) || 0),
    hammerResetDay: typeof cooldowns?.hammerResetDay === "string" ? cooldowns.hammerResetDay : "",
    hammerResetUses: Math.max(0, Math.floor(Number(cooldowns?.hammerResetUses) || 0))
  };
  if (normalized.hammerResetDay !== localDayKey()) {
    normalized.hammerResetDay = localDayKey();
    normalized.hammerResetUses = 0;
  }
  return normalized;
}

function normalizeBoosts(boosts) {
  const now = Date.now();
  const flareStacks = normalizeBuffStack(boosts?.flareStacks, now);
  const legacyFlareUntil = Math.max(0, Number(boosts?.flareUntil) || 0);
  if (!flareStacks.length && legacyFlareUntil > now) flareStacks.push(legacyFlareUntil);
  const tapperFrenzyStacks = normalizeBuffStack(boosts?.tapperFrenzyStacks, now);
  const legacyTapperFrenzyUntil = Math.max(0, Number(boosts?.tapperFrenzyUntil) || 0);
  if (!tapperFrenzyStacks.length && legacyTapperFrenzyUntil > now) tapperFrenzyStacks.push(legacyTapperFrenzyUntil);
  return {
    ...defaultState.boosts,
    ...boosts,
    flareUntil: Math.max(0, Number(boosts?.flareUntil) || 0),
    magnetUntil: Math.max(0, Number(boosts?.magnetUntil) || 0),
    tapperFrenzyUntil: Math.max(0, Number(boosts?.tapperFrenzyUntil) || 0),
    tapFrenzyStacks: normalizeBuffStack(boosts?.tapFrenzyStacks, now),
    etherGainStacks: normalizeBuffStack(boosts?.etherGainStacks, now),
    flareStacks,
    tapperFrenzyStacks
  };
}

function normalizeBuffStack(stack, now = Date.now()) {
  return Array.isArray(stack)
    ? stack.map((time) => Number(time) || 0).filter((time) => time > now).sort((a, b) => a - b)
    : [];
}

function localDayKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function localWeekKey(date = new Date()) {
  const adjusted = new Date(date);
  if (adjusted.getDay() === 0 && adjusted.getHours() === 23 && adjusted.getMinutes() >= 59) {
    adjusted.setMinutes(adjusted.getMinutes() + 1);
  }
  const weekStart = new Date(adjusted);
  const daysSinceMonday = (weekStart.getDay() + 6) % 7;
  weekStart.setHours(0, 0, 0, 0);
  weekStart.setDate(weekStart.getDate() - daysSinceMonday);
  return localDayKey(weekStart);
}

function dailyQuestDayKey(date = new Date()) {
  const adjusted = new Date(date);
  if (adjusted.getHours() === 23 && adjusted.getMinutes() >= 59) {
    adjusted.setMinutes(adjusted.getMinutes() + 1);
  }
  return localDayKey(adjusted);
}

function nextDailyQuestResetDate(date = new Date()) {
  const reset = new Date(date);
  reset.setHours(24, 0, 0, 0);
  return reset;
}

function nextWeeklyDailyResetDate(date = new Date()) {
  const reset = new Date(date);
  reset.setHours(0, 0, 0, 0);
  const daysUntilMonday = (8 - reset.getDay()) % 7 || 7;
  reset.setDate(reset.getDate() + daysUntilMonday);
  return reset;
}

function capacitorWeekday(date) {
  return date.getDay() + 1;
}

function notificationScheduleOnFromDate(date, options = {}) {
  return {
    ...(options.includeWeekday ? { weekday: capacitorWeekday(date) } : {}),
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: 0
  };
}

function defaultDailyQuestProgress() {
  return Object.fromEntries(dailyQuestDefs.map((def) => [def.key, 0]));
}

function defaultDailyQuestClaimed() {
  return Object.fromEntries(dailyQuestDefs.map((def) => [def.key, false]));
}

function normalizeDailyQuestProgress(progress) {
  return Object.fromEntries(
    dailyQuestDefs.map((def) => [
      def.key,
      Math.max(0, Math.min(def.target, Math.floor(Number(progress?.[def.key]) || 0)))
    ])
  );
}

function normalizeDailyQuestClaimed(claimed) {
  return Object.fromEntries(dailyQuestDefs.map((def) => [def.key, Boolean(claimed?.[def.key])]));
}

function normalizeDailyQuestState(dailies, now = new Date()) {
  const source = dailies && typeof dailies === "object" ? dailies : {};
  const today = dailyQuestDayKey(now);
  const week = localWeekKey(now);
  const sameDay = source.day === today;
  const sameWeek = source.week === week;
  return {
    day: today,
    week,
    progress: sameDay ? normalizeDailyQuestProgress(source.progress) : defaultDailyQuestProgress(),
    claimed: sameDay ? normalizeDailyQuestClaimed(source.claimed) : defaultDailyQuestClaimed(),
    weeklyCompleted: sameWeek ? Math.max(0, Math.min(WEEKLY_DAILY_GOAL, Math.floor(Number(source.weeklyCompleted) || 0))) : 0,
    weeklyRewardClaimed: sameWeek ? Boolean(source.weeklyRewardClaimed) : false
  };
}

function normalizeDailyQuestsForCurrentTime(now = new Date()) {
  const oldDay = state.dailies?.day ?? "";
  const oldWeek = state.dailies?.week ?? "";
  state.dailies = normalizeDailyQuestState(state.dailies, now);
  return oldDay !== state.dailies.day || oldWeek !== state.dailies.week;
}

function dailyQuestDef(key) {
  return dailyQuestDefs.find((def) => def.key === key);
}

function trackDailyQuestProgress(key, amount = 1) {
  const def = dailyQuestDef(key);
  if (!def) return false;
  normalizeDailyQuestsForCurrentTime();
  if (state.dailies.claimed[def.key]) return false;
  const gain = Math.max(0, Math.floor(Number(amount) || 0));
  if (gain <= 0) return false;
  const current = Math.max(0, Math.floor(Number(state.dailies.progress[def.key]) || 0));
  const next = Math.min(def.target, current + gain);
  if (next === current) return false;
  state.dailies.progress[def.key] = next;
  if (current < def.target && next >= def.target) {
    toast(`${def.name} daily complete.`);
    startDailyGuide();
  }
  if (els.dailiesDialog && !els.dailiesDialog.hidden) renderDailyQuests();
  return true;
}

function claimDailyQuestReward(key) {
  const def = dailyQuestDef(key);
  if (!def) return;
  normalizeDailyQuestsForCurrentTime();
  const progress = Math.max(0, Math.floor(Number(state.dailies.progress[def.key]) || 0));
  if (state.dailies.claimed[def.key]) {
    toast(`${def.name} already claimed today.`);
    return;
  }
  if (progress < def.target) {
    toast(`${def.name} is not complete yet.`);
    return;
  }
  state.dailies.claimed[def.key] = true;
  state.dailies.weeklyCompleted = Math.min(WEEKLY_DAILY_GOAL, Math.max(0, Math.floor(Number(state.dailies.weeklyCompleted) || 0)) + 1);
  state.diamonds = floorGameNumber(state.diamonds + DAILY_QUEST_REWARD);
  playGemSound();
  toast(`${def.name} claimed. +${DAILY_QUEST_REWARD} diamonds.`);
  renderDailyQuests();
  updateUI();
  saveState();
}

function claimWeeklyDailyReward() {
  normalizeDailyQuestsForCurrentTime();
  if (state.dailies.weeklyRewardClaimed) {
    toast("Weekly daily reward already claimed.");
    return;
  }
  if (state.dailies.weeklyCompleted < WEEKLY_DAILY_GOAL) {
    toast("Complete more dailies to fill the weekly counter.");
    return;
  }
  state.dailies.weeklyRewardClaimed = true;
  state.diamonds = floorGameNumber(state.diamonds + WEEKLY_DAILY_REWARD);
  playGemSound();
  toast(`Weekly dailies complete. +${WEEKLY_DAILY_REWARD} diamonds.`);
  renderDailyQuests();
  updateUI();
  saveState();
}

function hasClaimableDailyReward() {
  normalizeDailyQuestsForCurrentTime();
  if (state.dailies.weeklyCompleted >= WEEKLY_DAILY_GOAL && !state.dailies.weeklyRewardClaimed) return true;
  return dailyQuestDefs.some((def) => {
    const progress = Math.max(0, Math.floor(Number(state.dailies.progress[def.key]) || 0));
    return progress >= def.target && !state.dailies.claimed[def.key];
  });
}

function runningInNativeApp() {
  const capacitor = window.Capacitor;
  if (!capacitor) return false;
  if (typeof capacitor.isNativePlatform === "function") return capacitor.isNativePlatform();
  if (typeof capacitor.getPlatform === "function") return capacitor.getPlatform() !== "web";
  return false;
}

function localNotificationsPlugin() {
  return runningInNativeApp() ? window.Capacitor?.Plugins?.LocalNotifications : null;
}

function appNotificationIds() {
  return [
    NOTIFICATION_IDLE_LOOT_ID,
    NOTIFICATION_DAILY_QUEST_ID,
    NOTIFICATION_WEEKLY_TWO_DAY_ID,
    NOTIFICATION_WEEKLY_LAST_CHANCE_ID
  ];
}

async function ensureAppNotificationPermission(plugin) {
  if (!plugin?.checkPermissions || !plugin?.requestPermissions) return false;
  try {
    let status = await plugin.checkPermissions();
    if (status?.display === "prompt" || status?.display === "prompt-with-rationale") {
      status = await plugin.requestPermissions();
    }
    return status?.display === "granted";
  } catch {
    return false;
  }
}

async function ensureAppNotificationChannel(plugin) {
  if (!plugin?.createChannel) return;
  try {
    await plugin.createChannel({
      id: NOTIFICATION_CHANNEL_ID,
      name: "The Judge Reminders",
      description: "Idle loot and daily quest reminders.",
      importance: 3,
      visibility: 1,
      vibration: true
    });
  } catch {}
}

function buildAppNotificationPayloads(options = {}) {
  const now = new Date();
  const dailyReminder = new Date(nextDailyQuestResetDate(now).getTime() - NOTIFICATION_DAILY_REMINDER_BEFORE_MS);
  const weeklyReset = nextWeeklyDailyResetDate(now);
  const weeklyTwoDayReminder = new Date(weeklyReset.getTime() - NOTIFICATION_WEEKLY_TWO_DAY_BEFORE_MS);
  const weeklyLastChanceReminder = new Date(weeklyReset.getTime() - NOTIFICATION_WEEKLY_LAST_CHANCE_BEFORE_MS);
  const notifications = [
    {
      id: NOTIFICATION_DAILY_QUEST_ID,
      title: "Daily quests reset soon!",
      body: "Don't forget to do your dailies! Free diamonds are waiting!",
      channelId: NOTIFICATION_CHANNEL_ID,
      autoCancel: true,
      schedule: {
        on: notificationScheduleOnFromDate(dailyReminder),
        allowWhileIdle: true
      },
      extra: { kind: "daily-quest-reminder" }
    },
    {
      id: NOTIFICATION_WEEKLY_TWO_DAY_ID,
      title: "Weekly diamonds are waiting!",
      body: `Last chance to do dailies that count toward your weekly ${WEEKLY_DAILY_REWARD} diamonds! Be sure to complete them so you don't miss out!`,
      channelId: NOTIFICATION_CHANNEL_ID,
      autoCancel: true,
      schedule: {
        on: notificationScheduleOnFromDate(weeklyTwoDayReminder, { includeWeekday: true }),
        allowWhileIdle: true
      },
      extra: { kind: "weekly-quest-two-day-reminder" }
    },
    {
      id: NOTIFICATION_WEEKLY_LAST_CHANCE_ID,
      title: "Weekly reset is close!",
      body: `Last chance to do dailies that count toward your weekly ${WEEKLY_DAILY_REWARD} diamonds! Be sure to complete them so you don't miss out!`,
      channelId: NOTIFICATION_CHANNEL_ID,
      autoCancel: true,
      schedule: {
        on: notificationScheduleOnFromDate(weeklyLastChanceReminder, { includeWeekday: true }),
        allowWhileIdle: true
      },
      extra: { kind: "weekly-quest-last-chance-reminder" }
    }
  ];
  if (options.includeIdleReminder) {
    notifications.unshift({
      id: NOTIFICATION_IDLE_LOOT_ID,
      title: "Idle loot is waiting!",
      body: "Your idle loot is waiting! Come be the judge again and collect!",
      channelId: NOTIFICATION_CHANNEL_ID,
      autoCancel: true,
      schedule: {
        at: new Date(Date.now() + NOTIFICATION_IDLE_DELAY_MS),
        allowWhileIdle: true
      },
      extra: { kind: "idle-loot-reminder" }
    });
  }
  return notifications;
}

async function syncAppNotifications(options = {}) {
  const plugin = localNotificationsPlugin();
  if (!plugin) return;
  if (appNotificationSyncPromise) {
    pendingAppNotificationSyncOptions = { ...(pendingAppNotificationSyncOptions ?? {}), ...options };
    return;
  }
  appNotificationSyncPromise = (async () => {
    const granted = await ensureAppNotificationPermission(plugin);
    if (!granted) return;
    await ensureAppNotificationChannel(plugin);
    const cancelList = appNotificationIds().map((id) => ({ id }));
    try {
      await plugin.cancel({ notifications: cancelList });
    } catch {}
    const notifications = buildAppNotificationPayloads(options);
    if (!notifications.length) return;
    await plugin.schedule({ notifications });
  })();
  try {
    await appNotificationSyncPromise;
  } catch {
  } finally {
    appNotificationSyncPromise = null;
    if (pendingAppNotificationSyncOptions) {
      const nextOptions = pendingAppNotificationSyncOptions;
      pendingAppNotificationSyncOptions = null;
      syncAppNotifications(nextOptions);
    }
  }
}

function lifetimeStats() {
  state.stats = normalizeLifetimeStats(state.stats, state.taps);
  return state.stats;
}

function achievementState() {
  state.achievements = normalizeAchievementState(state.achievements);
  return state.achievements;
}

function incrementLifetimeStat(key, amount = 1) {
  const gain = Number(amount);
  if (!Number.isFinite(gain) || gain <= 0) return;
  const stats = lifetimeStats();
  stats[key] = key === "totalDamage"
    ? Math.max(0, (Number(stats[key]) || 0) + gain)
    : Math.max(0, Math.floor(Number(stats[key]) || 0) + Math.floor(gain));
}

function incrementLifetimeMapStat(totalKey, mapKey, name, amount = 1) {
  const safeName = typeof name === "string" && name.trim() ? name.trim() : "Unknown";
  const gain = Math.max(0, Math.floor(Number(amount) || 0));
  if (gain <= 0) return;
  const stats = lifetimeStats();
  stats[totalKey] = Math.max(0, Math.floor(Number(stats[totalKey]) || 0) + gain);
  stats[mapKey] ??= {};
  stats[mapKey][safeName] = Math.max(0, Math.floor(Number(stats[mapKey][safeName]) || 0) + gain);
}

function recordLifetimeDamage(amount) {
  incrementLifetimeStat("totalDamage", amount);
}

function recordHighestTapCrit(amount) {
  const damage = Number(amount);
  if (!Number.isFinite(damage) || damage <= 0) return;
  const stats = lifetimeStats();
  stats.highestTapCrit = Math.max(Number(stats.highestTapCrit) || 0, damage);
}

function recordTapProgress() {
  const stats = lifetimeStats();
  stats.lifetimeTaps = Math.max(
    Math.max(0, Math.floor(Number(stats.lifetimeTaps) || 0)),
    Math.max(0, Math.floor(Number(state.taps) || 0))
  );
  checkAchievements();
}

function recordChestTapProgress() {
  incrementLifetimeStat("lifetimeChestTaps", 1);
  checkAchievements();
}

function recordCreatureKill(name) {
  incrementLifetimeMapStat("creatureKills", "creatureKillsByName", name, 1);
}

function recordNormalBossKill(name) {
  incrementLifetimeMapStat("normalBossKills", "normalBossKillsByName", name, 1);
  checkAchievements();
}

function recordGoblinKill(name) {
  incrementLifetimeMapStat("goblinKills", "goblinKillsByName", name, 1);
  checkAchievements();
}

function recordMegaBossKill(name) {
  incrementLifetimeMapStat("megaBossKills", "megaBossKillsByName", name, 1);
}

function achievementDef(key) {
  return achievementDefs.find((def) => def.key === key);
}

function achievementProgress(def) {
  const stats = lifetimeStats();
  if (def.statMapKey && def.statMapName) {
    const map = stats[def.statMapKey] && typeof stats[def.statMapKey] === "object" ? stats[def.statMapKey] : {};
    return Math.max(0, Math.floor(Number(map[def.statMapName]) || 0));
  }
  return Math.max(0, Math.floor(Number(stats[def.statKey]) || 0));
}

function achievementCompleted(def) {
  return Boolean(achievementState().completed[def.key]);
}

function achievementRewardClaimed(def) {
  return Boolean(achievementState().claimed[def.key]);
}

function achievementRewardClaimable(def) {
  return Boolean(def && achievementCompleted(def) && !achievementRewardClaimed(def));
}

function hasClaimableAchievementReward() {
  return achievementDefs.some((def) => achievementRewardClaimable(def));
}

function achievementPointsEarned() {
  const completed = achievementState().completed;
  return achievementDefs.reduce((sum, def) => sum + (completed[def.key] ? def.points : 0), 0);
}

function achievementMilestoneState() {
  const achievements = achievementState();
  achievements.milestones ??= defaultAchievementState().milestones;
  achievements.milestones.claimed ??= { free: {}, diamond: {} };
  achievements.milestones.claimed.free ??= {};
  achievements.milestones.claimed.diamond ??= {};
  return achievements.milestones;
}

function achievementMilestoneDef(key) {
  return achievementMilestoneDefs.find((milestone) => milestone.key === key);
}

function achievementMilestoneTierUnlocked(tier) {
  return tier === "free" || Boolean(achievementMilestoneState().diamondUnlocked);
}

function achievementMilestoneRewardClaimed(milestoneKey, tier) {
  return Boolean(achievementMilestoneState().claimed?.[tier]?.[milestoneKey]);
}

function grantAchievementGems(amount) {
  const count = Math.max(0, Math.floor(Number(amount) || 0));
  if (count <= 0) return;
  for (let index = 0; index < count; index += 1) {
    const resource = gemResourceDefs[index % gemResourceDefs.length];
    state.inventory.resources[resource.key] = Math.max(0, Math.floor(Number(state.inventory.resources[resource.key]) || 0) + 1);
  }
}

function milestoneRewardLabel(reward) {
  if (reward?.diamonds) return `${format(reward.diamonds)} Diamonds`;
  const resource = resourceByKey[reward?.resource];
  return resource ? `${format(reward.amount)} ${resource.label}` : `${format(reward?.amount ?? 0)} Resource`;
}

function milestoneRewardListText(rewards) {
  return rewards.map(milestoneRewardLabel).join(", ");
}

function milestoneRewardMarkup(rewards) {
  return rewards.map((reward) => {
    const icon = reward?.diamonds ? "assets/art/shop-diamond-icon.png" : resourceByKey[reward?.resource]?.icon;
    return `
      <span class="achievement-milestone-reward-line">
        ${icon ? `<img src="${icon}" alt="" aria-hidden="true" />` : ""}
        <span>${milestoneRewardLabel(reward)}</span>
      </span>
    `;
  }).join("");
}

function milestoneRewardIconMarkup(rewards) {
  const diamondReward = rewards.find((reward) => reward?.diamonds);
  const primaryReward = diamondReward ?? rewards[0];
  const icon = primaryReward?.diamonds ? "assets/art/shop-diamond-icon.png" : resourceByKey[primaryReward?.resource]?.icon;
  return icon ? `<img src="${icon}" alt="" aria-hidden="true" />` : "";
}

function grantMilestoneRewards(rewards) {
  for (const reward of rewards) {
    if (reward?.diamonds) {
      state.diamonds = floorGameNumber(state.diamonds + Math.max(0, Math.floor(Number(reward.diamonds) || 0)));
      continue;
    }
    const resource = resourceByKey[reward?.resource];
    if (!resource) continue;
    grantInventoryResourceReward({ resource, amount: reward.amount });
  }
}

function unlockAchievementDiamondTier() {
  const milestones = achievementMilestoneState();
  if (milestones.diamondUnlocked) {
    toast("Diamond milestone tier already unlocked.");
    return;
  }
  if (state.diamonds < ACHIEVEMENT_DIAMOND_TIER_COST) {
    toast(`Need ${format(ACHIEVEMENT_DIAMOND_TIER_COST)} diamonds to unlock the diamond milestone tier.`);
    return;
  }
  state.diamonds = floorGameNumber(state.diamonds - ACHIEVEMENT_DIAMOND_TIER_COST);
  milestones.diamondUnlocked = true;
  toast("Diamond milestone tier unlocked.");
  renderAchievementMilestones();
  updateUI();
  saveState();
}

function selectAchievementMilestoneReward(milestoneKey, tier) {
  const milestone = achievementMilestoneDef(milestoneKey);
  if (!milestone || (tier !== "free" && tier !== "diamond")) return;
  selectedAchievementMilestoneReward = { milestoneKey, tier };
  renderAchievementMilestones();
  setAchievementMilestoneRewardOpen(true, { clearSelection: false });
}

function claimAchievementMilestoneReward(milestoneKey, tier) {
  const milestone = achievementMilestoneDef(milestoneKey);
  const rewards = milestone?.[tier]?.rewards;
  if (!milestone || !Array.isArray(rewards)) return;
  const points = achievementPointsEarned();
  if (points < milestone.points) {
    toast(`Reach ${format(milestone.points)} achievement points first.`);
    return;
  }
  if (!achievementMilestoneTierUnlocked(tier)) {
    toast("Unlock the diamond milestone tier first.");
    return;
  }
  if (achievementMilestoneRewardClaimed(milestoneKey, tier)) {
    toast("Milestone reward already claimed.");
    return;
  }
  const milestones = achievementMilestoneState();
  milestones.claimed[tier][milestoneKey] = { claimedAt: Date.now() };
  grantMilestoneRewards(rewards);
  playGemSound();
  toast(`Milestone ${milestone.points} claimed. ${milestoneRewardListText(rewards)}.`);
  renderAchievementMilestones();
  renderCrafting();
  renderResources();
  updateUI();
  saveState();
}

function completeAchievement(def, { silent = false } = {}) {
  const achievements = achievementState();
  if (achievements.completed[def.key]) return false;
  achievements.completed[def.key] = { completedAt: Date.now() };
  if (!silent) {
    toast("", { achievement: def });
    startAchievementGuide();
  }
  if (els.achievementsDialog && !els.achievementsDialog.hidden) {
    renderAchievements();
    renderStatistics();
  }
  updateAchievementBadge();
  renderCrafting();
  saveState();
  return true;
}

function claimAchievementReward(key) {
  const def = achievementDef(key);
  if (!def) return;
  const achievements = achievementState();
  if (!achievements.completed[def.key]) {
    toast(`${def.name} is not complete yet.`);
    return;
  }
  if (achievements.claimed[def.key]) {
    toast(`${def.name} reward already claimed.`);
    return;
  }
  achievements.claimed[def.key] = { claimedAt: Date.now() };
  grantAchievementGems(def.rewardGems);
  playGemSound();
  toast(`${def.name} claimed. +${format(def.rewardGems)} gems.`);
  renderAchievements();
  renderCrafting();
  updateAchievementBadge();
  updateUI();
  saveState();
}

function checkAchievements(options = {}) {
  let changed = false;
  for (const def of achievementDefs) {
    if (achievementState().completed[def.key]) continue;
    if (achievementProgress(def) < def.target) continue;
    changed = completeAchievement(def, options) || changed;
  }
  return changed;
}

function normalizeMegaBossState(megaBoss) {
  const today = localDayKey();
  const activeDef = megaBossDefs.find((def) => def.key === megaBoss?.activeKey);
  const day = typeof megaBoss?.day === "string" ? megaBoss.day : "";
  const hpLog = Number(megaBoss?.hpLog);
  const maxHpLog = Number(megaBoss?.maxHpLog);
  return {
    ...defaultState.megaBoss,
    scrolls: Math.max(0, Math.floor(Number(megaBoss?.scrolls) || 0)),
    day: today,
    attempts: day === today && megaBoss?.attempts && typeof megaBoss.attempts === "object" ? normalizeMegaBossAttempts(megaBoss.attempts) : {},
    defeated: normalizeMegaBossDefeated(megaBoss?.defeated),
    activeKey: activeDef ? activeDef.key : "",
    hp: activeDef ? Math.max(0, Number(megaBoss?.hp) || 0) : 0,
    hpLog: activeDef && Number.isFinite(hpLog) ? hpLog : -Infinity,
    maxHp: activeDef ? Math.max(0, Number(megaBoss?.maxHp) || 0) : 0,
    maxHpLog: activeDef && Number.isFinite(maxHpLog) ? maxHpLog : 0,
    startedAt: activeDef ? Math.max(0, Number(megaBoss?.startedAt) || 0) : 0,
    endsAt: activeDef ? Math.max(0, Number(megaBoss?.endsAt) || 0) : 0
  };
}

function normalizeMegaBossAttempts(attempts) {
  return Object.fromEntries(
    megaBossDefs.map((def) => [def.key, Math.max(0, Math.min(MEGA_BOSS_DAILY_ATTEMPTS, Math.floor(Number(attempts?.[def.key]) || 0)))])
  );
}

function normalizeMegaBossDefeated(defeated) {
  return Object.fromEntries(megaBossDefs.map((def) => [def.key, Boolean(defeated?.[def.key])]));
}

function normalizeMegaBossDaily(now = new Date()) {
  const today = localDayKey(now);
  state.megaBoss ??= normalizeMegaBossState(null);
  if (state.megaBoss.day === today) return false;
  state.megaBoss.day = today;
  state.megaBoss.attempts = {};
  return true;
}

function normalizeHammerResetDaily(now = new Date()) {
  const today = localDayKey(now);
  state.cooldowns ??= { ...defaultState.cooldowns };
  if (state.cooldowns.hammerResetDay === today) return false;
  state.cooldowns.hammerResetDay = today;
  state.cooldowns.hammerResetUses = 0;
  return true;
}

function hammerResetUses() {
  normalizeHammerResetDaily();
  return Math.max(0, Math.floor(Number(state.cooldowns?.hammerResetUses) || 0));
}

function hammerResetUsesRemaining() {
  return Math.max(0, HAMMER_RESET_DAILY_LIMIT - hammerResetUses());
}

function normalizeInventory(inventory) {
  const bags = emptyInventoryBags();
  const equipment = Object.fromEntries(equipmentSlots.map((slot) => [slot.key, null]));
  const rings = normalizeRingInventory(inventory?.rings);
  const highestId = [rings.equipped, ...rings.bag].reduce((highest, item) => Math.max(highest, Number(item?.id) || 0), 0);
  return {
    nextItemId: Math.max(highestId + 1, Math.floor(Number(inventory?.nextItemId) || 1)),
    resources: normalizeInventoryResources(inventory?.resources),
    pendingDrop: null,
    equipment,
    bags,
    rings
  };
}

function normalizeInventoryResources(resources) {
  return Object.fromEntries(inventoryResourceDefs.map((resource) => [
    resource.key,
    Math.max(0, Math.floor(Number(resources?.[resource.key]) || 0)) +
      (Array.isArray(resource.aliases)
        ? resource.aliases.reduce((total, alias) => total + Math.max(0, Math.floor(Number(resources?.[alias]) || 0)), 0)
        : 0)
  ]));
}

function normalizeRingInventory(rings) {
  const normalized = emptyRingInventory();
  normalized.equipped = normalizeRingItem(rings?.equipped);
  const sourceBag = Array.isArray(rings?.bag) ? rings.bag : [];
  for (let index = 0; index < RING_INVENTORY_SIZE; index += 1) {
    normalized.bag[index] = normalizeRingItem(sourceBag[index]);
  }
  return normalized;
}

function normalizeRingItem(item) {
  if (!item || !ringDefs[item.defKey]) return null;
  return {
    id: Math.max(1, Math.floor(Number(item.id) || 0)),
    defKey: item.defKey,
    source: item.source === "crafted" ? "crafted" : "normal"
  };
}

function normalizeItem(item) {
  if (!item || !itemDefs[item.defKey]) return null;
  const source = item.source === "boss" || item.source === "crafted" ? item.source : "normal";
  const quality = qualityByKey[item.quality] ? item.quality : "common";
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

function closedResourceSections() {
  return Object.fromEntries(inventoryResourceSections.map((section) => [section.key, false]));
}

function resetResourceSections() {
  resourceSectionsOpen = closedResourceSections();
}

function defaultCraftingRecipeSectionsOpen() {
  return Object.fromEntries(craftingRecipeGroups.map((section) => [section.key, section.key === "scrolls" || section.key === "rings-common"]));
}

function resetCraftingRecipeSections() {
  craftingRecipeSectionsOpen = defaultCraftingRecipeSectionsOpen();
}

function normalizeItemBonuses(bonuses) {
  return {
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
  image.failed = false;
  image.ready = new Promise((resolve) => {
    image.addEventListener(
      "load",
      () => {
        image.loaded = true;
        resolve(image);
      },
      { once: true }
    );
    image.addEventListener(
      "error",
      () => {
        image.failed = true;
        resolve(image);
      },
      { once: true }
    );
  });
  image.src = src;
  return image;
}

function criticalStartupArt() {
  const realmIndex = state.realm % realms.length;
  const images = [
    artAssets.backgrounds,
    artAssets.realmEncounterEnemies[realmIndex],
    artAssets.etherOrb,
    artAssets.tapGavel
  ];
  if (state.puzzleVault?.portalReady || state.puzzleVault?.active) {
    images.push(
        artAssets.puzzleVaultPortal,
        artAssets.puzzleVaultBackground,
        artAssets.puzzleVaultLevelIcon,
        artAssets.puzzleVaultGoblinCounterIcon,
        ...Object.values(artAssets.puzzleVaultEnemies ?? {})
      );
  }
  return images.filter(Boolean);
}

function delay(ms) {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

async function waitForStartupArt() {
  const ready = Promise.all(criticalStartupArt().map((image) => image.ready?.catch(() => image)));
  await Promise.race([ready, delay(STARTUP_ASSET_TIMEOUT_MS)]);
}

function setStartupSplashPhase(phase) {
  const root = document.documentElement;
  root.classList.toggle("splash-studio", phase === "studio");
  root.classList.toggle("splash-game", phase === "game");
}

async function waitForStartupSplashMinimum() {
  const startedAt = Number.isFinite(window.__judgeSplashStartedAt) ? window.__judgeSplashStartedAt : performance.now();
  const studioRemaining = STARTUP_STUDIO_SPLASH_MS - (performance.now() - startedAt);
  if (studioRemaining > 0) {
    setStartupSplashPhase("studio");
    await delay(studioRemaining);
  }
  setStartupSplashPhase("game");
  const totalMinimum = STARTUP_STUDIO_SPLASH_MS + STARTUP_GAME_SPLASH_MIN_MS;
  const totalRemaining = totalMinimum - (performance.now() - startedAt);
  if (totalRemaining > 0) await delay(totalRemaining);
}

function finishStartupLoading() {
  if (window.__judgeSplashPhaseTimer) {
    window.clearTimeout(window.__judgeSplashPhaseTimer);
    window.__judgeSplashPhaseTimer = 0;
  }
  document.documentElement.classList.remove("app-loading", "splash-studio", "splash-game");
}

function startGameRenderLoop() {
  if (gameRenderStarted) return;
  gameRenderStarted = true;
  markActiveRender(900);
  lastFrame = performance.now();
  lastRenderAt = 0;
  draw(lastFrame);
  scheduleNextTick();
  maybeShowFirstBossTutorial();
  scheduleGoblinPortalGuideUpdate();
  scheduleAchievementGuideUpdate();
  scheduleDailyGuideUpdate();
  scheduleJudgmentGuideUpdate();
  scheduleLevel60GuideUpdate();
  scheduleDpsGuidePromptUpdate();
}

function shouldShowStartupIntro() {
  try {
    return localStorage.getItem(INTRO_SEEN_KEY) !== "true";
  } catch {
    return true;
  }
}

function setStartupIntroOpen(open) {
  if (!els.introDialog || !els.introBackdrop) return false;
  els.introDialog.hidden = !open;
  els.introBackdrop.hidden = !open;
  document.documentElement.classList.toggle("intro-open", open);
  if (open) modalOpenedAt = performance.now();
  return true;
}

function finishStartupIntro() {
  try {
    localStorage.setItem(INTRO_SEEN_KEY, "true");
  } catch {}
  setStartupIntroOpen(false);
  startGameRenderLoop();
}

function bossTutorialSeen() {
  try {
    return localStorage.getItem(BOSS_TUTORIAL_SEEN_KEY) === "true";
  } catch {
    return false;
  }
}

function markBossTutorialSeen() {
  try {
    localStorage.setItem(BOSS_TUTORIAL_SEEN_KEY, "true");
  } catch {}
}

function isFirstMainBossLevel() {
  return !isPuzzleVaultActive() && isMainBoss() && activeCombatLevel() === LEVELS_PER_ZONE;
}

function setBossTutorialOpen(open) {
  if (!els.bossTutorialDialog || !els.bossTutorialBackdrop) return false;
  els.bossTutorialDialog.hidden = !open;
  els.bossTutorialBackdrop.hidden = !open;
  if (open) {
    modalOpenedAt = performance.now();
    markActiveRender(900);
  }
  return true;
}

function maybeShowFirstBossTutorial() {
  if (!isFirstMainBossLevel() || bossTutorialSeen()) {
    pendingBossTutorialOpen = false;
    return false;
  }
  if (document.documentElement.classList.contains("app-loading") || !els.introDialog?.hidden) {
    pendingBossTutorialOpen = true;
    return false;
  }
  if (!setBossTutorialOpen(true)) {
    pendingBossTutorialOpen = true;
    return false;
  }
  markBossTutorialSeen();
  pendingBossTutorialOpen = false;
  return true;
}

function dismissBossTutorial() {
  pendingBossTutorialOpen = false;
  setBossTutorialOpen(false);
}

function dpsGuideSeen() {
  try {
    return localStorage.getItem(DPS_GUIDE_SEEN_KEY) === "true";
  } catch {
    return false;
  }
}

function markDpsGuideSeen() {
  try {
    localStorage.setItem(DPS_GUIDE_SEEN_KEY, "true");
  } catch {}
}

function goblinPortalGuideSeen() {
  try {
    return localStorage.getItem(GOBLIN_PORTAL_GUIDE_SEEN_KEY) === "true";
  } catch {
    return false;
  }
}

function markGoblinPortalGuideSeen() {
  try {
    localStorage.setItem(GOBLIN_PORTAL_GUIDE_SEEN_KEY, "true");
  } catch {}
}

function judgmentGuideSeen() {
  try {
    return localStorage.getItem(JUDGMENT_GUIDE_SEEN_KEY) === "true";
  } catch {
    return false;
  }
}

function markJudgmentGuideSeen() {
  try {
    localStorage.setItem(JUDGMENT_GUIDE_SEEN_KEY, "true");
  } catch {}
}

function judgmentGuideActive() {
  return Boolean(els.judgmentGuideCallout && !els.judgmentGuideCallout.hidden);
}

function level60GuideState() {
  try {
    const stateName = localStorage.getItem(LEVEL_60_GUIDE_STATE_KEY);
    return ["reborn", "megaBoss", "done"].includes(stateName) ? stateName : "";
  } catch {
    return "";
  }
}

function setLevel60GuideState(stateName) {
  try {
    if (!stateName) localStorage.removeItem(LEVEL_60_GUIDE_STATE_KEY);
    else localStorage.setItem(LEVEL_60_GUIDE_STATE_KEY, stateName);
  } catch {}
  scheduleLevel60GuideUpdate();
  scheduleAchievementGuideUpdate();
  scheduleDailyGuideUpdate();
  scheduleJudgmentGuideUpdate();
  scheduleDpsGuidePromptUpdate();
}

function level60GuideActive() {
  const stateName = level60GuideState();
  return stateName !== "" && stateName !== "done";
}

function startLevel60Guide() {
  if (level60GuideState() === "done") return;
  if (!level60GuideActive()) {
    setLevel60GuideState("reborn");
    return;
  }
  scheduleLevel60GuideUpdate();
}

function achievementGuideState() {
  try {
    const stateName = localStorage.getItem(ACHIEVEMENT_GUIDE_STATE_KEY);
    return ["icon", "window", "tiers", "tiersFree", "tiersDiamond", "done"].includes(stateName) ? stateName : "";
  } catch {
    return "";
  }
}

function setAchievementGuideState(stateName) {
  try {
    if (!stateName) localStorage.removeItem(ACHIEVEMENT_GUIDE_STATE_KEY);
    else localStorage.setItem(ACHIEVEMENT_GUIDE_STATE_KEY, stateName);
  } catch {}
  scheduleAchievementGuideUpdate();
  scheduleDailyGuideUpdate();
  scheduleJudgmentGuideUpdate();
  scheduleDpsGuidePromptUpdate();
}

function achievementGuideActive() {
  const stateName = achievementGuideState();
  return stateName !== "" && stateName !== "done";
}

function achievementGuideTierStateActive(stateName = achievementGuideState()) {
  return ["tiers", "tiersFree", "tiersDiamond"].includes(stateName);
}

function startAchievementGuide() {
  if (!achievementGuideActive() && achievementGuideState() !== "done") {
    setAchievementGuideState("icon");
    return;
  }
  scheduleAchievementGuideUpdate();
}

function clearAchievementGuideTargets() {
  document.querySelectorAll(".achievement-guide-target").forEach((element) => element.classList.remove("achievement-guide-target"));
}

function hideAchievementGuidePrompts() {
  [
    els.achievementGuideCallout,
    els.achievementMilestoneGuideCallout,
    els.achievementFreeTierGuideCallout,
    els.achievementDiamondTierGuideCallout
  ].forEach((callout) => {
    if (callout) callout.hidden = true;
  });
  clearAchievementGuideTargets();
}

function setGuideCalloutPosition(callout, target, text, options = {}) {
  if (!callout || !target) return false;
  const textElement = options.textElement;
  if (textElement && text) textElement.textContent = text;
  callout.hidden = false;
  const width = Math.min(options.width ?? 300, Math.max(options.minWidth ?? 220, window.innerWidth - 24));
  callout.style.width = `${width}px`;
  const targetRect = target.getBoundingClientRect();
  const calloutRect = callout.getBoundingClientRect();
  const margin = 12;
  const targetCenter = targetRect.left + targetRect.width / 2;
  let left = options.left === "right" ? targetRect.right + 14 : targetCenter - width / 2;
  if (options.left === "left") left = targetRect.left - width - 14;
  if (left + width > window.innerWidth - margin) left = targetCenter - width / 2;
  left = clampUiValue(left, margin, Math.max(margin, window.innerWidth - width - margin));
  let top = options.vertical === "below" ? targetRect.bottom + 14 : targetRect.top - calloutRect.height - 14;
  let pointsUp = options.vertical === "below";
  if (top < margin) {
    top = targetRect.bottom + 14;
    pointsUp = true;
  } else if (top + calloutRect.height > window.innerHeight - margin) {
    top = targetRect.top - calloutRect.height - 14;
    pointsUp = false;
  }
  top = clampUiValue(top, margin, Math.max(margin, window.innerHeight - calloutRect.height - margin));
  const arrowX = clampUiValue(targetCenter - left, 22, width - 22);
  callout.style.setProperty("--dps-guide-left", `${Math.round(left)}px`);
  callout.style.setProperty("--dps-guide-top", `${Math.round(top)}px`);
  callout.style.setProperty("--dps-guide-arrow-x", `${Math.round(arrowX)}px`);
  callout.classList.toggle("points-up", pointsUp);
  callout.classList.toggle("points-down", !pointsUp);
  target.classList.add(options.targetClass ?? "achievement-guide-target");
  return true;
}

function achievementGuideBaseReady() {
  return Boolean(
    gameRenderStarted &&
      !document.documentElement.classList.contains("app-loading") &&
      els.introDialog?.hidden !== false &&
      !goblinPortalGuideEligible() &&
      !dailyGuideActive() &&
      !level60GuideActive()
  );
}

function updateAchievementGuidePrompts() {
  achievementGuidePositionFrame = 0;
  hideAchievementGuidePrompts();
  const stateName = achievementGuideState();
  if (!achievementGuideBaseReady() || !achievementGuideActive()) return;
  if (stateName === "icon") {
    if (!isDialogOpen()) {
      setGuideCalloutPosition(
        els.achievementGuideCallout,
        els.achievementsToggle,
        "Achievement complete! Open this icon to view achievements and overall game statistics.",
        { textElement: els.achievementGuideText, width: 300, minWidth: 230, vertical: "above" }
      );
    }
    return;
  }
  const achievementsOpen = els.achievementsDialog && !els.achievementsDialog.hidden;
  const milestonesOpen = els.achievementMilestoneDialog && !els.achievementMilestoneDialog.hidden;
  if (stateName === "window") {
    if (!achievementsOpen) {
      if (!isDialogOpen()) {
        setGuideCalloutPosition(
          els.achievementGuideCallout,
          els.achievementsToggle,
          "Open this icon to return to achievements and statistics.",
          { textElement: els.achievementGuideText, width: 280, minWidth: 230, vertical: "above" }
        );
      }
      return;
    }
    setGuideCalloutPosition(
      els.achievementGuideCallout,
      document.querySelector(".achievement-tab.active") ?? document.querySelector(".achievement-tabs") ?? els.achievementsDialog,
      "This window tracks achievements and overall statistics. Use these tabs to swap between progress and lifetime stats.",
      { textElement: els.achievementGuideText, width: 310, minWidth: 240, vertical: "below" }
    );
    setGuideCalloutPosition(
      els.achievementMilestoneGuideCallout,
      els.achievementMilestoneToggle,
      "Click here to see milestones.",
      { textElement: els.achievementMilestoneGuideText, width: 230, minWidth: 210, vertical: "below" }
    );
    return;
  }
  if (!achievementGuideTierStateActive(stateName) || !milestonesOpen) return;
  const freeTarget = document.querySelector(".achievement-tier-heading.free") ?? document.querySelector(".achievement-milestone-reward.free");
  const diamondTarget = els.achievementDiamondTierButton ?? document.querySelector(".achievement-milestone-reward.diamond");
  if (stateName !== "tiersDiamond") {
    setGuideCalloutPosition(
      els.achievementFreeTierGuideCallout,
      freeTarget,
      "The Free Tier gives milestone rewards as your achievement points climb. Claim these without spending gems.",
      { textElement: els.achievementFreeTierGuideText, width: 270, minWidth: 230, vertical: "below" }
    );
    return;
  }
  setGuideCalloutPosition(
    els.achievementDiamondTierGuideCallout,
    diamondTarget,
    "The Diamond Tier adds extra rewards. You can earn gems from achievements, daily and weekly quests, first boss clears, Goblin Vault loot, Mega Boss rewards, and shop packs.",
    { textElement: els.achievementDiamondTierGuideText, width: 300, minWidth: 240, vertical: "below" }
  );
}

function scheduleAchievementGuideUpdate() {
  if (achievementGuidePositionFrame) return;
  achievementGuidePositionFrame = requestAnimationFrame(updateAchievementGuidePrompts);
}

function dailyGuideState() {
  try {
    const stateName = localStorage.getItem(DAILY_GUIDE_STATE_KEY);
    return ["icon", "window", "done"].includes(stateName) ? stateName : "";
  } catch {
    return "";
  }
}

function setDailyGuideState(stateName) {
  if (stateName !== "window") dailyGuideWindowPromptShown = false;
  try {
    if (!stateName) localStorage.removeItem(DAILY_GUIDE_STATE_KEY);
    else localStorage.setItem(DAILY_GUIDE_STATE_KEY, stateName);
  } catch {}
  scheduleDailyGuideUpdate();
  scheduleAchievementGuideUpdate();
  scheduleJudgmentGuideUpdate();
  scheduleLevel60GuideUpdate();
  scheduleDpsGuidePromptUpdate();
}

function dailyGuideActive() {
  const stateName = dailyGuideState();
  return stateName !== "" && stateName !== "done";
}

function startDailyGuide() {
  if (dailyGuideState() === "done") return;
  if (!dailyGuideActive()) {
    setDailyGuideState(els.dailiesDialog && !els.dailiesDialog.hidden ? "window" : "icon");
    return;
  }
  scheduleDailyGuideUpdate();
}

function clearDailyGuideTargets() {
  document.querySelectorAll(".daily-guide-target").forEach((element) => element.classList.remove("daily-guide-target"));
}

function hideDailyGuidePrompts() {
  [els.dailyGuideCallout, els.dailyWindowGuideCallout].forEach((callout) => {
    if (callout) callout.hidden = true;
  });
  clearDailyGuideTargets();
}

function dailyGuideBaseReady() {
  return Boolean(
    gameRenderStarted &&
      !document.documentElement.classList.contains("app-loading") &&
      els.introDialog?.hidden !== false &&
      !goblinPortalGuideEligible() &&
      !level60GuideActive()
  );
}

function updateDailyGuidePrompts() {
  dailyGuidePositionFrame = 0;
  hideDailyGuidePrompts();
  const stateName = dailyGuideState();
  if (!dailyGuideBaseReady() || !dailyGuideActive()) return;
  if (stateName === "icon") {
    if (!isDialogOpen()) {
      setGuideCalloutPosition(
        els.dailyGuideCallout,
        els.dailiesToggle,
        "Daily complete! Open this icon to view daily quests, claim rewards, and work toward the weekly reward.",
        { textElement: els.dailyGuideText, width: 300, minWidth: 230, vertical: "above", targetClass: "daily-guide-target" }
      );
    }
    return;
  }
  if (stateName !== "window") return;
  const dailiesOpen = els.dailiesDialog && !els.dailiesDialog.hidden;
  if (!dailiesOpen) {
    if (!isDialogOpen()) {
      setGuideCalloutPosition(
        els.dailyGuideCallout,
        els.dailiesToggle,
        "Open this icon to return to daily quests and weekly rewards.",
        { textElement: els.dailyGuideText, width: 280, minWidth: 230, vertical: "above", targetClass: "daily-guide-target" }
      );
    }
    return;
  }
  const dailyWindowTarget = document.querySelector(".daily-week-card") ?? els.dailyQuestList ?? els.dailiesDialog;
  if (setGuideCalloutPosition(
    els.dailyWindowGuideCallout,
    dailyWindowTarget,
    "Dailies reset every day. Complete and claim them daily to fill the weekly counter and unlock the weekly reward!",
    { textElement: els.dailyWindowGuideText, width: 300, minWidth: 240, vertical: "below", targetClass: "daily-guide-target" }
  )) {
    dailyGuideWindowPromptShown = true;
  }
}

function scheduleDailyGuideUpdate() {
  if (dailyGuidePositionFrame) return;
  dailyGuidePositionFrame = requestAnimationFrame(updateDailyGuidePrompts);
}

function clearJudgmentGuideTarget() {
  els.judgmentCooldown?.classList.remove("judgment-guide-target");
}

function hideJudgmentGuidePrompt() {
  if (els.judgmentGuideCallout) els.judgmentGuideCallout.hidden = true;
  clearJudgmentGuideTarget();
}

function judgmentGuideEligible() {
  return Boolean(
    els.judgmentGuideCallout &&
      els.judgmentCooldown &&
      gameRenderStarted &&
      currentGlobalLevel() === 15 &&
      !judgmentGuideSeen() &&
      !isPuzzleVaultActive() &&
      !isBoss() &&
      !goblinPortalGuideEligible() &&
      !achievementGuideActive() &&
      !dailyGuideActive() &&
      !document.documentElement.classList.contains("app-loading") &&
      els.introDialog?.hidden !== false &&
      !isDialogOpen()
  );
}

function updateJudgmentGuidePrompt() {
  judgmentGuidePositionFrame = 0;
  hideJudgmentGuidePrompt();
  if (!judgmentGuideEligible()) return;
  if (setGuideCalloutPosition(
    els.judgmentGuideCallout,
    els.judgmentCooldown,
    "You can use Hammer of Judgement to clear an entire level.",
    { textElement: els.judgmentGuideText, width: 290, minWidth: 230, vertical: "above", targetClass: "judgment-guide-target" }
  )) {
    markJudgmentGuideSeen();
  }
}

function scheduleJudgmentGuideUpdate() {
  if (judgmentGuidePositionFrame) return;
  judgmentGuidePositionFrame = requestAnimationFrame(updateJudgmentGuidePrompt);
}

function clearLevel60GuideTargets() {
  document.querySelectorAll(".level60-guide-target").forEach((element) => element.classList.remove("level60-guide-target"));
}

function hideLevel60GuidePrompts() {
  [els.level60RebornGuideCallout, els.level60MegaBossGuideCallout].forEach((callout) => {
    if (callout) callout.hidden = true;
  });
  clearLevel60GuideTargets();
}

function level60GuideBaseReady() {
  return Boolean(
    gameRenderStarted &&
      !document.documentElement.classList.contains("app-loading") &&
      els.introDialog?.hidden !== false &&
      !isDialogOpen()
  );
}

function updateLevel60GuidePrompt() {
  level60GuidePositionFrame = 0;
  hideLevel60GuidePrompts();
  const stateName = level60GuideState();
  if (!level60GuideBaseReady() || !level60GuideActive()) return;
  if (stateName === "reborn") {
    setGuideCalloutPosition(
      els.level60RebornGuideCallout,
      document.querySelector('.tab-button[data-tab="reborn"]'),
      "Level 60 complete! You can Reborn to progress even further into the game. Reborn upgrades are permanent.",
      { textElement: els.level60RebornGuideText, width: 310, minWidth: 240, vertical: "above", targetClass: "level60-guide-target" }
    );
    return;
  }
  if (stateName !== "megaBoss") return;
  setGuideCalloutPosition(
    els.level60MegaBossGuideCallout,
    els.megaBossToggle,
    "Mega Bosses are now unlocked. Use this icon to challenge them with boss scrolls and chase bigger rewards.",
    { textElement: els.level60MegaBossGuideText, width: 310, minWidth: 240, vertical: "above", targetClass: "level60-guide-target" }
  );
}

function scheduleLevel60GuideUpdate() {
  if (level60GuidePositionFrame) return;
  level60GuidePositionFrame = requestAnimationFrame(updateLevel60GuidePrompt);
}

function megaBossWalkthroughSeen() {
  try {
    return localStorage.getItem(MEGA_BOSS_WALKTHROUGH_SEEN_KEY) === "true";
  } catch {
    return false;
  }
}

function markMegaBossWalkthroughSeen() {
  try {
    localStorage.setItem(MEGA_BOSS_WALKTHROUGH_SEEN_KEY, "true");
  } catch {}
}

function renderMegaBossWalkthrough() {
  const stepCount = megaBossWalkthroughSteps.length;
  const stepIndex = clampUiValue(megaBossWalkthroughStep, 0, Math.max(0, stepCount - 1));
  megaBossWalkthroughStep = stepIndex;
  const step = megaBossWalkthroughSteps[stepIndex] ?? megaBossWalkthroughSteps[0];
  if (els.megaBossWalkthroughCount) els.megaBossWalkthroughCount.textContent = `${stepIndex + 1} / ${stepCount}`;
  if (els.megaBossWalkthroughHeading) els.megaBossWalkthroughHeading.textContent = step?.heading ?? "";
  if (els.megaBossWalkthroughCopy) els.megaBossWalkthroughCopy.textContent = step?.copy ?? "";
  if (els.megaBossWalkthroughBack) {
    els.megaBossWalkthroughBack.disabled = stepIndex === 0;
    els.megaBossWalkthroughBack.setAttribute("aria-disabled", String(stepIndex === 0));
  }
  if (els.megaBossWalkthroughNext) {
    els.megaBossWalkthroughNext.textContent = stepIndex >= stepCount - 1 ? "Done" : "Next";
  }
}

function setMegaBossWalkthroughOpen(open, options = {}) {
  if (!els.megaBossWalkthroughDialog || !els.megaBossWalkthroughBackdrop) return false;
  const wasOpen = !els.megaBossWalkthroughDialog.hidden;
  if (open) {
    if (megaBossWalkthroughSeen() && !options.force) return false;
    megaBossWalkthroughStep = 0;
    renderMegaBossWalkthrough();
    els.megaBossWalkthroughDialog.hidden = false;
    els.megaBossWalkthroughBackdrop.hidden = false;
    modalOpenedAt = performance.now();
    return true;
  }
  els.megaBossWalkthroughDialog.hidden = true;
  els.megaBossWalkthroughBackdrop.hidden = true;
  if (wasOpen && options.markSeen !== false) markMegaBossWalkthroughSeen();
  return wasOpen;
}

function advanceMegaBossWalkthrough(delta) {
  if (!els.megaBossWalkthroughDialog || els.megaBossWalkthroughDialog.hidden) return;
  const nextStep = megaBossWalkthroughStep + delta;
  if (nextStep >= megaBossWalkthroughSteps.length) {
    setMegaBossWalkthroughOpen(false);
    return;
  }
  megaBossWalkthroughStep = clampUiValue(nextStep, 0, Math.max(0, megaBossWalkthroughSteps.length - 1));
  renderMegaBossWalkthrough();
}

function maybeShowMegaBossWalkthrough() {
  if (
    !els.megaBossDialog ||
    els.megaBossDialog.hidden ||
    activeMegaBossDef() ||
    megaBossWalkthroughSeen() ||
    !megaBossUnlocked(megaBossDefs[0])
  ) {
    return;
  }
  setMegaBossWalkthroughOpen(true, { force: true });
}

function goblinPortalGuideEligible() {
  return Boolean(
    els.goblinPortalGuideCallout &&
      els.puzzlePortalButton &&
      gameRenderStarted &&
      isPuzzleVaultPortalReady() &&
      !goblinPortalGuideSeen() &&
      !document.documentElement.classList.contains("app-loading") &&
      els.introDialog?.hidden !== false &&
      !level60GuideActive() &&
      !isDialogOpen()
  );
}

function clearGoblinPortalGuideTarget() {
  els.puzzlePortalButton?.classList.remove("portal-guide-target");
}

function hideGoblinPortalGuidePrompt() {
  if (els.goblinPortalGuideCallout) els.goblinPortalGuideCallout.hidden = true;
  clearGoblinPortalGuideTarget();
}

function positionGoblinPortalGuidePrompt() {
  if (!goblinPortalGuideEligible()) {
    hideGoblinPortalGuidePrompt();
    return;
  }
  const target = els.puzzlePortalButton;
  const callout = els.goblinPortalGuideCallout;
  callout.hidden = false;
  callout.classList.add("points-up");
  callout.classList.remove("points-down");
  target.classList.add("portal-guide-target");
  const targetRect = target.getBoundingClientRect();
  const width = Math.min(320, Math.max(236, window.innerWidth - 24));
  callout.style.width = `${width}px`;
  const calloutRect = callout.getBoundingClientRect();
  const margin = 12;
  const targetCenter = targetRect.left + targetRect.width / 2;
  let left = targetCenter - width / 2;
  left = clampUiValue(left, margin, Math.max(margin, window.innerWidth - width - margin));
  let top = targetRect.bottom + 18;
  let pointsUp = true;
  if (top + calloutRect.height > window.innerHeight - margin) {
    top = targetRect.top - calloutRect.height - 18;
    pointsUp = false;
  }
  top = clampUiValue(top, margin, Math.max(margin, window.innerHeight - calloutRect.height - margin));
  const arrowX = clampUiValue(targetCenter - left, 22, width - 22);
  callout.style.setProperty("--dps-guide-left", `${Math.round(left)}px`);
  callout.style.setProperty("--dps-guide-top", `${Math.round(top)}px`);
  callout.style.setProperty("--dps-guide-arrow-x", `${Math.round(arrowX)}px`);
  callout.classList.toggle("points-up", pointsUp);
  callout.classList.toggle("points-down", !pointsUp);
}

function dpsGuideEligible() {
  return Boolean(
    els.dpsGuideCallout &&
      gameRenderStarted &&
      isDpsUnlocked() &&
      !isPuzzleVaultActive() &&
      !goblinPortalGuideEligible() &&
      !achievementGuideActive() &&
      !dailyGuideActive() &&
      !judgmentGuideEligible() &&
      !judgmentGuideActive() &&
      !level60GuideActive() &&
      (state.upgrades.miner ?? 0) <= 0 &&
      !dpsGuideSeen() &&
      !document.documentElement.classList.contains("app-loading") &&
      els.introDialog?.hidden !== false &&
      !isDialogOpen()
  );
}

function clearDpsGuideTarget() {
  document.querySelectorAll(".dps-guide-target").forEach((element) => element.classList.remove("dps-guide-target"));
}

function hideDpsGuidePrompt() {
  if (els.dpsGuideCallout) els.dpsGuideCallout.hidden = true;
  clearDpsGuideTarget();
}

function dismissGuideCallout(callout) {
  if (!callout) return;
  if (callout === els.goblinPortalGuideCallout) {
    markGoblinPortalGuideSeen();
    hideGoblinPortalGuidePrompt();
    scheduleDpsGuidePromptUpdate();
    return;
  }
  if (callout === els.dpsGuideCallout) {
    markDpsGuideSeen();
    hideDpsGuidePrompt();
    return;
  }
  if (callout === els.achievementFreeTierGuideCallout) {
    setAchievementGuideState("tiersDiamond");
    hideAchievementGuidePrompts();
    return;
  }
  if ([
    els.achievementGuideCallout,
    els.achievementMilestoneGuideCallout,
    els.achievementDiamondTierGuideCallout
  ].includes(callout)) {
    setAchievementGuideState("done");
    hideAchievementGuidePrompts();
    return;
  }
  if ([els.dailyGuideCallout, els.dailyWindowGuideCallout].includes(callout)) {
    setDailyGuideState("done");
    hideDailyGuidePrompts();
    return;
  }
  if (callout === els.judgmentGuideCallout) {
    markJudgmentGuideSeen();
    hideJudgmentGuidePrompt();
    return;
  }
  if ([els.level60RebornGuideCallout, els.level60MegaBossGuideCallout].includes(callout)) {
    setLevel60GuideState("done");
    hideLevel60GuidePrompts();
    return;
  }
  callout.hidden = true;
}

function clampUiValue(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function positionDpsGuidePrompt(target, mode) {
  if (!els.dpsGuideCallout || !target) {
    hideDpsGuidePrompt();
    return;
  }
  const text = mode === "upgrade"
    ? "Tap here to increase your DPS!"
    : "Click upgrades to be able to increase your DPS!";
  if (els.dpsGuideText) els.dpsGuideText.textContent = text;
  els.dpsGuideCallout.hidden = false;
  els.dpsGuideCallout.classList.toggle("mode-upgrade", mode === "upgrade");
  els.dpsGuideCallout.classList.toggle("mode-menu", mode !== "upgrade");
  const targetRect = target.getBoundingClientRect();
  const width = Math.min(mode === "upgrade" ? 260 : 250, Math.max(210, window.innerWidth - 24));
  els.dpsGuideCallout.style.width = `${width}px`;
  const calloutRect = els.dpsGuideCallout.getBoundingClientRect();
  const margin = 12;
  const targetCenter = targetRect.left + targetRect.width / 2;
  const preferredLeft = mode === "upgrade" ? targetCenter - width / 2 : targetRect.left - 4;
  const left = clampUiValue(preferredLeft, margin, Math.max(margin, window.innerWidth - width - margin));
  let top = targetRect.top - calloutRect.height - 14;
  let pointsUp = false;
  if (top < margin) {
    top = targetRect.bottom + 14;
    pointsUp = true;
  }
  top = clampUiValue(top, margin, Math.max(margin, window.innerHeight - calloutRect.height - margin));
  const arrowX = clampUiValue(targetCenter - left, 22, width - 22);
  els.dpsGuideCallout.style.setProperty("--dps-guide-left", `${Math.round(left)}px`);
  els.dpsGuideCallout.style.setProperty("--dps-guide-top", `${Math.round(top)}px`);
  els.dpsGuideCallout.style.setProperty("--dps-guide-arrow-x", `${Math.round(arrowX)}px`);
  els.dpsGuideCallout.classList.toggle("points-up", pointsUp);
  els.dpsGuideCallout.classList.toggle("points-down", !pointsUp);
  clearDpsGuideTarget();
  target.classList.add("dps-guide-target");
}

function updateDpsGuidePrompt() {
  dpsGuidePositionFrame = 0;
  if (!dpsGuideEligible()) {
    hideDpsGuidePrompt();
    return;
  }
  const upgradesPanelOpen = document.querySelector("#upgradesPanel")?.classList.contains("active");
  const upgradeTarget = document.querySelector('[data-upgrade="miner"]');
  if (upgradesPanelOpen && upgradeTarget) {
    positionDpsGuidePrompt(upgradeTarget, "upgrade");
    return;
  }
  const tabTarget = document.querySelector('.tab-button[data-tab="upgrades"]');
  positionDpsGuidePrompt(tabTarget, "menu");
}

function scheduleDpsGuidePromptUpdate() {
  if (dpsGuidePositionFrame) return;
  dpsGuidePositionFrame = requestAnimationFrame(updateDpsGuidePrompt);
}

function updateGoblinPortalGuidePrompt() {
  goblinPortalGuidePositionFrame = 0;
  positionGoblinPortalGuidePrompt();
  scheduleDpsGuidePromptUpdate();
}

function scheduleGoblinPortalGuideUpdate() {
  if (goblinPortalGuidePositionFrame) return;
  goblinPortalGuidePositionFrame = requestAnimationFrame(updateGoblinPortalGuidePrompt);
}

function observeDpsGuideDialogState() {
  if (dpsGuideDialogObserver || !window.MutationObserver) return;
  dpsGuideDialogObserver = new MutationObserver(() => {
    scheduleGoblinPortalGuideUpdate();
    scheduleAchievementGuideUpdate();
    scheduleDailyGuideUpdate();
    scheduleJudgmentGuideUpdate();
    scheduleLevel60GuideUpdate();
    scheduleDpsGuidePromptUpdate();
  });
  document.querySelectorAll(".options-dialog, .modal-backdrop").forEach((node) => {
    dpsGuideDialogObserver.observe(node, { attributes: true, attributeFilter: ["hidden"] });
  });
}

async function revealGameAfterStartup() {
  await Promise.all([waitForStartupArt(), waitForStartupSplashMinimum()]);
  if (shouldShowStartupIntro() && setStartupIntroOpen(true)) {
    finishStartupLoading();
    return;
  }
  finishStartupLoading();
  startGameRenderLoop();
}

function writeLocalSave() {
  localStorage.setItem(SAVE_KEY, JSON.stringify(state));
}

function saveState(options = {}) {
  const now = Date.now();
  state.lastSeen = now;
  if (!options.preserveTimestamp) state.saveUpdatedAt = now;
  state.inventory.pendingDrop = pendingOverflowItem;
  writeLocalSave();
  if (!options.skipCloudUpload) scheduleCloudSaveUpload();
}

function cloudSaveBridge() {
  if (!GOOGLE_CLOUD_SAVE_ENABLED) return null;
  const bridge = window.AndroidCloudSave;
  return bridge && typeof bridge.load === "function" && typeof bridge.save === "function" ? bridge : null;
}

function scheduleCloudSaveUpload(delay = CLOUD_SAVE_UPLOAD_DELAY_MS) {
  if (!cloudSaveBridge()) return;
  if (!cloudSaveInitialSyncComplete) {
    cloudSaveUploadQueued = true;
    return;
  }
  clearTimeout(cloudSaveUploadTimerId);
  cloudSaveUploadTimerId = window.setTimeout(uploadCloudSave, Math.max(0, delay));
}

async function uploadCloudSave() {
  const bridge = cloudSaveBridge();
  if (!bridge) return;
  if (cloudSaveUploadInFlight) {
    cloudSaveUploadQueued = true;
    return;
  }

  const wait = CLOUD_SAVE_MIN_UPLOAD_INTERVAL_MS - (Date.now() - cloudSaveLastUploadAt);
  if (wait > 0) {
    scheduleCloudSaveUpload(wait);
    return;
  }

  cloudSaveUploadInFlight = true;
  cloudSaveLastUploadAt = Date.now();
  try {
    const payload = createCloudSavePayload();
    const result = await androidCloudSaveCall("save", JSON.stringify(payload));
    if (!result?.ok) cloudSaveUploadQueued = true;
  } catch {
    cloudSaveUploadQueued = true;
  } finally {
    cloudSaveUploadInFlight = false;
    if (cloudSaveUploadQueued) {
      cloudSaveUploadQueued = false;
      scheduleCloudSaveUpload(CLOUD_SAVE_UPLOAD_DELAY_MS);
    }
  }
}

function createCloudSavePayload() {
  const updatedAt = Math.max(0, Number(state.saveUpdatedAt) || Date.now());
  const now = Date.now();
  return {
    schemaVersion: CLOUD_SAVE_SCHEMA_VERSION,
    game: "the-judge",
    updatedAt,
    player: {
      realm: Math.max(0, Math.floor(Number(state.realm) || 0)),
      encounter: Math.max(0, Math.floor(Number(state.encounter) || 0)),
      level: currentGlobalLevel(),
      maxLevel: Math.max(1, Math.floor(Number(state.maxLevel) || 1)),
      levelKills: Math.max(0, Math.floor(Number(state.levelKills) || 0)),
      levelGoal: sanitizeLevelGoal(state.levelGoal),
      levelTappedGold: floorGameNumber(state.levelTappedGold),
      bosses: Math.max(0, Math.floor(Number(state.bosses) || 0)),
      bossDiamondRewards: normalizeBossDiamondRewards(state.bossDiamondRewards),
      taps: Math.max(0, Math.floor(Number(state.taps) || 0))
    },
    currencies: {
      ether: floorGameNumber(state.gold),
      diamonds: floorGameNumber(state.diamonds),
      purchasedGems: floorGameNumber(state.purchasedGems),
      rebornSparks: floorGameNumber(state.reborn?.sparks),
      megaBossScrolls: Math.max(0, Math.floor(Number(state.megaBoss?.scrolls) || 0))
    },
    combat: {
      enemyHp: floorGameNumber(state.enemyHp),
      enemyHpLog: finiteCloudNumber(state.enemyHpLog, -Infinity),
      maxHp: floorGameNumber(state.maxHp, 1),
      maxHpLog: finiteCloudNumber(state.maxHpLog, 0)
    },
    upgrades: compactLevelMap(defaultState.upgrades, state.upgrades),
    buffs: {
      flareUntil: Math.max(0, Number(state.boosts?.flareUntil) || 0),
      magnetUntil: Math.max(0, Number(state.boosts?.magnetUntil) || 0),
      tapperFrenzyUntil: Math.max(0, Number(state.boosts?.tapperFrenzyUntil) || 0),
      tapFrenzyStacks: normalizeBuffStack(state.boosts?.tapFrenzyStacks, now),
      etherGainStacks: normalizeBuffStack(state.boosts?.etherGainStacks, now),
      flareStacks: normalizeBuffStack(state.boosts?.flareStacks, now),
      tapperFrenzyStacks: normalizeBuffStack(state.boosts?.tapperFrenzyStacks, now)
    },
    relics: compactLevelMap(defaultState.relics, state.relics),
    cooldowns: {
      judgmentReadyAt: Math.max(0, Number(state.cooldowns?.judgmentReadyAt) || 0),
      hammerResetDay: typeof state.cooldowns?.hammerResetDay === "string" ? state.cooldowns.hammerResetDay : "",
      hammerResetUses: Math.max(0, Math.floor(Number(state.cooldowns?.hammerResetUses) || 0))
    },
    reborn: {
      sparks: floorGameNumber(state.reborn?.sparks),
      upgrades: compactLevelMap(defaultState.reborn.upgrades, state.reborn?.upgrades)
    },
    megaBoss: compactMegaBossState(state.megaBoss),
    puzzleVault: compactPuzzleVaultState(state.puzzleVault),
    essenceCrucible: compactEssenceCrucibleState(state.essenceCrucible),
    dailies: compactDailyQuestState(state.dailies),
    achievements: compactAchievementState(state.achievements),
    stats: compactLifetimeStats(state.stats),
    inventory: compactInventory(state.inventory)
  };
}

function finiteCloudNumber(value, fallback = 0) {
  const number = Number(value);
  return Number.isFinite(number) ? number : fallback;
}

function compactLevelMap(template, values) {
  return Object.fromEntries(
    Object.keys(template).map((key) => [key, Math.max(0, Math.floor(Number(values?.[key]) || 0))])
  );
}

function compactMegaBossState(megaBoss) {
  return {
    day: typeof megaBoss?.day === "string" ? megaBoss.day : "",
    scrolls: Math.max(0, Math.floor(Number(megaBoss?.scrolls) || 0)),
    attempts: normalizeMegaBossAttempts(megaBoss?.attempts),
    defeated: normalizeMegaBossDefeated(megaBoss?.defeated),
    activeKey: typeof megaBoss?.activeKey === "string" ? megaBoss.activeKey : "",
    hp: floorGameNumber(megaBoss?.hp),
    hpLog: finiteCloudNumber(megaBoss?.hpLog, -Infinity),
    maxHp: floorGameNumber(megaBoss?.maxHp),
    maxHpLog: finiteCloudNumber(megaBoss?.maxHpLog, 0),
    startedAt: Math.max(0, Number(megaBoss?.startedAt) || 0),
    endsAt: Math.max(0, Number(megaBoss?.endsAt) || 0)
  };
}

function compactPuzzleVaultState(puzzleVault) {
  const compact = normalizePuzzleVaultState(puzzleVault, currentGlobalLevel());
  compact.loot = compactPuzzleVaultLoot(compact.loot);
  return compact;
}

function compactEssenceCrucibleState(essenceCrucible) {
  return normalizeEssenceCrucibleState(essenceCrucible);
}

function compactDailyQuestState(dailies) {
  return normalizeDailyQuestState(dailies);
}

function compactAchievementState(achievements) {
  return normalizeAchievementState(achievements);
}

function compactLifetimeStats(stats) {
  return normalizeLifetimeStats(stats, state.taps);
}

function compactInventory(inventory) {
  return {
    nextItemId: Math.max(1, Math.floor(Number(inventory?.nextItemId) || 1)),
    resources: normalizeInventoryResources(inventory?.resources),
    rings: compactRingInventory(inventory?.rings),
    items: []
  };
}

function compactRingInventory(rings) {
  const normalized = normalizeRingInventory(rings);
  const items = [];
  if (normalized.equipped) items.push(compactRingItem(normalized.equipped, "equipped", 0));
  normalized.bag.forEach((ring, index) => {
    if (ring) items.push(compactRingItem(ring, "bag", index));
  });
  return { items };
}

function compactRingItem(ring, location, index) {
  return {
    id: Math.max(1, Math.floor(Number(ring.id) || 0)),
    defKey: ring.defKey,
    source: ring.source,
    location,
    index: Math.max(0, Math.floor(Number(index) || 0))
  };
}

function compactInventoryItem(item, location, slot, index) {
  return {
    id: Math.max(1, Math.floor(Number(item.id) || 0)),
    defKey: item.defKey,
    quality: item.quality,
    source: item.source,
    realm: itemRealmIndex(item),
    dropLevel: itemDropLevel(item),
    location,
    slot,
    index: Math.max(0, Math.floor(Number(index) || 0))
  };
}

function parseCloudSavePayload(rawSave) {
  if (!rawSave) return null;
  try {
    const payload = typeof rawSave === "string" ? JSON.parse(rawSave) : rawSave;
    if (!payload || Number(payload.schemaVersion) !== CLOUD_SAVE_SCHEMA_VERSION) return null;
    return payload;
  } catch {
    return null;
  }
}

function cloudSaveTimestamp(payload) {
  return Math.max(0, Number(payload?.updatedAt) || 0);
}

function stateFromCloudSavePayload(payload) {
  const player = payload?.player ?? {};
  const currencies = payload?.currencies ?? {};
  const combat = payload?.combat ?? {};
  const reborn = payload?.reborn ?? {};
  const megaBoss = payload?.megaBoss ?? {};
  const fallbackLevel = levelFromParts(player.realm, player.encounter);
  return {
    gold: floorGameNumber(currencies.ether),
    diamonds: floorGameNumber(currencies.diamonds),
    purchasedGems: floorGameNumber(currencies.purchasedGems),
    realm: Math.max(0, Math.floor(Number(player.realm) || 0)),
    encounter: Math.max(0, Math.min(LEVELS_PER_ZONE - 1, Math.floor(Number(player.encounter) || 0))),
    levelKills: Math.max(0, Math.floor(Number(player.levelKills) || 0)),
    levelGoal: sanitizeLevelGoal(player.levelGoal),
    levelTappedGold: floorGameNumber(player.levelTappedGold),
    maxLevel: Math.max(1, Math.floor(Number(player.maxLevel) || Number(player.level) || 1)),
    enemyHp: floorGameNumber(combat.enemyHp),
    enemyHpLog: finiteCloudNumber(combat.enemyHpLog, -Infinity),
    maxHp: floorGameNumber(combat.maxHp, 1),
    maxHpLog: finiteCloudNumber(combat.maxHpLog, 0),
    bosses: Math.max(0, Math.floor(Number(player.bosses) || 0)),
    bossDiamondRewards: normalizeBossDiamondRewards(player.bossDiamondRewards ?? payload?.bossDiamondRewards, player.maxLevel ?? player.level),
    taps: Math.max(0, Math.floor(Number(player.taps) || 0)),
    upgrades: compactLevelMap(defaultState.upgrades, payload.upgrades),
    boosts: payload.buffs ?? {},
    relics: compactLevelMap(defaultState.relics, payload.relics),
    cooldowns: payload.cooldowns ?? {},
    reborn: {
      sparks: floorGameNumber(currencies.rebornSparks ?? reborn.sparks),
      upgrades: compactLevelMap(defaultState.reborn.upgrades, reborn.upgrades)
    },
    megaBoss: {
      ...megaBoss,
      scrolls: Math.max(0, Math.floor(Number(currencies.megaBossScrolls ?? megaBoss.scrolls) || 0))
    },
    puzzleVault: normalizePuzzleVaultState(payload?.puzzleVault, fallbackLevel),
    essenceCrucible: normalizeEssenceCrucibleState(payload?.essenceCrucible),
    dailies: payload.dailies ?? {},
    achievements: payload.achievements ?? {},
    stats: payload.stats ?? {},
    inventory: inflateCloudInventory(payload.inventory),
    lastSeen: Date.now(),
    saveUpdatedAt: cloudSaveTimestamp(payload)
  };
}

function inflateCloudInventory(inventory) {
  const bags = emptyInventoryBags();
  const equipment = Object.fromEntries(equipmentSlots.map((slot) => [slot.key, null]));
  const rings = inflateCloudRingInventory(inventory?.rings);
  let pendingDrop = null;
  const items = Array.isArray(inventory?.items) ? inventory.items : [];
  for (const rawItem of items) {
    const item = normalizeItem({
      id: rawItem?.id,
      defKey: rawItem?.defKey,
      quality: rawItem?.quality,
      source: rawItem?.source,
      realm: rawItem?.realm,
      dropLevel: rawItem?.dropLevel
    });
    if (!item) continue;
    const slotKey = itemDefs[item.defKey]?.slot;
    if (!slotKey) continue;
    if (rawItem.location === "equipped") {
      equipment[slotKey] = item;
      continue;
    }
    if (rawItem.location === "pending") {
      pendingDrop = item;
      continue;
    }
    const bag = bags[slotKey];
    const index = Math.max(0, Math.floor(Number(rawItem.index) || 0));
    if (index < INVENTORY_SIZE && !bag[index]) {
      bag[index] = item;
    } else {
      const openIndex = bag.findIndex((bagItem) => !bagItem);
      if (openIndex !== -1) bag[openIndex] = item;
    }
  }
  const highestId = [...Object.values(bags).flat(), ...Object.values(equipment), pendingDrop, rings.equipped, ...rings.bag].reduce(
    (highest, item) => Math.max(highest, Number(item?.id) || 0),
    0
  );
  return {
    nextItemId: Math.max(highestId + 1, Math.floor(Number(inventory?.nextItemId) || 1)),
    resources: normalizeInventoryResources(inventory?.resources),
    pendingDrop,
    equipment,
    bags,
    rings
  };
}

function inflateCloudRingInventory(rings) {
  const normalized = emptyRingInventory();
  const items = Array.isArray(rings?.items) ? rings.items : [];
  for (const rawRing of items) {
    const ring = normalizeRingItem({
      id: rawRing?.id,
      defKey: rawRing?.defKey,
      source: rawRing?.source
    });
    if (!ring) continue;
    if (rawRing.location === "equipped") {
      normalized.equipped = ring;
      continue;
    }
    const index = Math.max(0, Math.floor(Number(rawRing.index) || 0));
    if (index < RING_INVENTORY_SIZE && !normalized.bag[index]) {
      normalized.bag[index] = ring;
    } else {
      const openIndex = normalized.bag.findIndex((bagItem) => !bagItem);
      if (openIndex !== -1) normalized.bag[openIndex] = ring;
    }
  }
  return normalized;
}

function applyCloudSavePayload(payload) {
  state = normalizeLoadedState(mergeSavedState(stateFromCloudSavePayload(payload)));
  pendingOverflowItem = state.inventory.pendingDrop;
  selectedMegaBossIndex = Math.max(0, megaBossDefs.findIndex((def) => def.key === state.megaBoss?.activeKey));
  activeGearSlotView = equipmentSlots.find((slot) => state.inventory.bags?.[slot.key]?.some(Boolean) || state.inventory.equipment?.[slot.key])?.key ?? "helm";
  writeLocalSave();
  localSaveExistedAtStartup = true;
  spawnEnemy(true);
  renderInventory();
  renderResources();
  renderCrafting();
  renderAchievements();
  renderStatistics();
  updateUI();
}

function androidCloudSaveCall(method, payload) {
  const bridge = cloudSaveBridge();
  if (!bridge || typeof bridge[method] !== "function") return Promise.resolve({ ok: false, reason: "unavailable" });
  return new Promise((resolve) => {
    const callbackId = `cloudSave${++cloudSaveCallbackSerial}`;
    const callbacks = window.__theJudgeCloudSaveCallbacks ?? {};
    window.__theJudgeCloudSaveCallbacks = callbacks;
    const timeoutId = window.setTimeout(() => {
      delete callbacks[callbackId];
      resolve({ ok: false, reason: "timeout" });
    }, 20000);
    callbacks[callbackId] = (result) => {
      window.clearTimeout(timeoutId);
      delete callbacks[callbackId];
      if (typeof result === "string") {
        try {
          resolve(JSON.parse(result));
        } catch {
          resolve({ ok: false, reason: "bad-response" });
        }
        return;
      }
      resolve(result ?? { ok: false, reason: "empty-response" });
    };
    try {
      if (payload === undefined) bridge[method](callbackId);
      else bridge[method](payload, callbackId);
    } catch {
      window.clearTimeout(timeoutId);
      delete callbacks[callbackId];
      resolve({ ok: false, reason: "bridge-error" });
    }
  });
}

async function syncCloudSaveOnStartup() {
  if (!cloudSaveBridge()) return;
  const localPayload = createCloudSavePayload();
  const result = await androidCloudSaveCall("load");
  if (!result?.ok) return;
  const cloudPayload = parseCloudSavePayload(result.save);
  if (!cloudPayload) {
    if (localSaveExistedAtStartup) await uploadCloudSave();
    return;
  }

  const cloudTime = cloudSaveTimestamp(cloudPayload);
  const localTime = cloudSaveTimestamp(localPayload);
  if (!localSaveExistedAtStartup || cloudTime > localTime + CLOUD_SAVE_CONFLICT_TIME_EPSILON_MS) {
    applyCloudSavePayload(cloudPayload);
    toast("Loaded newer Google Play cloud save.");
    return;
  }

  if (localTime > cloudTime + CLOUD_SAVE_CONFLICT_TIME_EPSILON_MS) {
    await uploadCloudSave();
  }
}

function beginCloudSaveSync() {
  if (!cloudSaveBridge()) return;
  syncCloudSaveOnStartup()
    .catch(() => {})
    .finally(() => {
      cloudSaveInitialSyncComplete = true;
      if (cloudSaveUploadQueued) {
        cloudSaveUploadQueued = false;
        scheduleCloudSaveUpload(250);
      }
    });
}

function getRealm() {
  return realms[state.realm % realms.length];
}

function isPuzzleVaultActive() {
  return Boolean(state.puzzleVault?.active);
}

function isPuzzleVaultPortalReady() {
  return Boolean(state.puzzleVault?.portalReady) && !isPuzzleVaultActive();
}

function puzzleVaultLevel() {
  return 1;
}

function isPuzzleVaultBoss() {
  return isPuzzleVaultActive() && Math.max(0, Math.floor(Number(state.puzzleVault?.levelKills) || 0)) >= PUZZLE_VAULT_GOBLINS_PER_RUN;
}

function isBoss() {
  return isPuzzleVaultActive() ? isPuzzleVaultBoss() : state.encounter === 9;
}

function isMainBoss() {
  return !isPuzzleVaultActive() && state.encounter === 9;
}

function isBossLevel(level) {
  const normalized = Math.max(0, Math.floor(Number(level) || 0));
  return normalized > 0 && normalized % LEVELS_PER_ZONE === 0;
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

function puzzleVaultCombatLevel() {
  return Math.max(1, Math.floor(Number(state.puzzleVault?.baseLevel) || currentGlobalLevel()));
}

function activeCombatLevel() {
  return isPuzzleVaultActive() ? puzzleVaultCombatLevel() : currentGlobalLevel();
}

function offlineRewardContext() {
  const activeLevel = activeCombatLevel();
  const bossFallback = isMainBoss();
  return {
    level: bossFallback ? Math.max(1, activeLevel - 1) : activeLevel,
    bossFallback
  };
}

function puzzleVaultRemainingMs(now = Date.now()) {
  if (!isPuzzleVaultActive()) return 0;
  const endsAt = Math.max(0, Number(state.puzzleVault?.endsAt) || 0);
  return Math.max(0, endsAt - now);
}

function puzzleVaultSummaryTitle(outcome = state.puzzleVault?.summaryOutcome) {
  return outcome === "victory" ? "You Defeated the Goblins!" : "You Ran Out of Time!";
}

function rollPuzzleVaultGoblinDef() {
  const totalWeight = puzzleVaultGoblinDefs.reduce((sum, def) => sum + def.weight, 0);
  let roll = Math.random() * totalWeight;
  for (const def of puzzleVaultGoblinDefs) {
    roll -= def.weight;
    if (roll <= 0) return def;
  }
  return puzzleVaultGoblinDefs[0];
}

function puzzleVaultEnemyDefByKey(key) {
  if (key === puzzleVaultBossDef.key) return puzzleVaultBossDef;
  return puzzleVaultGoblinDefs.find((def) => def.key === key) ?? puzzleVaultGoblinDefs[0];
}

function activePuzzleVaultEnemyDef() {
  if (isPuzzleVaultBoss()) return puzzleVaultBossDef;
  if (!state.puzzleVault.enemyKey) state.puzzleVault.enemyKey = rollPuzzleVaultGoblinDef().key;
  return puzzleVaultEnemyDefByKey(state.puzzleVault.enemyKey);
}

function createPuzzleVaultDropState(baseLevel = currentGlobalLevel()) {
  return {
    ...defaultPuzzleVaultState(),
    portalReady: true,
    active: false,
    generated: true,
    baseLevel: Math.max(1, Math.floor(Number(baseLevel) || currentGlobalLevel())),
    seed: Date.now() + Math.floor(Math.random() * 100000)
  };
}

function rollPuzzleRingDrop(source = "boss", baseLevel = currentGlobalLevel()) {
  if (state.puzzleVault?.active || state.puzzleVault?.portalReady) return false;
  const chance = puzzleRingDropChance(source);
  if (Math.random() >= chance) return false;
  state.puzzleVault = createPuzzleVaultDropState(baseLevel);
  return true;
}

function enterPuzzleVault() {
  if (!isPuzzleVaultPortalReady()) return;
  markGoblinPortalGuideSeen();
  hideGoblinPortalGuidePrompt();
  state.puzzleVault = normalizePuzzleVaultState({
    ...state.puzzleVault,
    portalReady: false,
    active: true,
    generated: true,
    level: 1,
    levelKills: 0,
    levelGoal: PUZZLE_VAULT_GOBLINS_PER_RUN,
    enemyKey: "",
    endsAt: Date.now() + PUZZLE_VAULT_TIMER_SECONDS * 1000,
    loot: emptyPuzzleVaultLoot(),
    summaryOpen: false,
    summaryOutcome: ""
  }, currentGlobalLevel());
  bossStartedAt = Date.now();
  toast("The Puzzle Vault opens.");
  spawnEnemy(false);
  updateUI();
  saveState();
}

function finishPuzzleVaultRun(outcome) {
  if (!state.puzzleVault?.active) return;
  state.puzzleVault = normalizePuzzleVaultState({
    ...state.puzzleVault,
    active: false,
    portalReady: false,
    generated: true,
    enemyKey: "",
    endsAt: 0,
    summaryOpen: true,
    summaryOutcome: outcome === "victory" ? "victory" : "timeout"
  }, currentGlobalLevel());
  bossStartedAt = Date.now();
  markActiveRender(1800);
  syncPuzzleVaultSummaryUI();
  updateUI();
  syncMusicForEncounter();
  saveState();
}

function returnFromPuzzleVaultSummary() {
  if (!state.puzzleVault?.summaryOpen) return;
  const loot = normalizePuzzleVaultLoot(state.puzzleVault.loot);
  grantPuzzleVaultLoot(loot);
  const hadResources = loot.resources.length > 0;
  state.puzzleVault = defaultPuzzleVaultState();
  bossStartedAt = Date.now();
  if (hadResources) {
    renderResources();
    renderCrafting();
  }
  spawnEnemy(false);
  syncPuzzleVaultSummaryUI();
  updateUI();
  saveState();
}

function fleePuzzleVault() {
  if (!isPuzzleVaultActive()) return;
  const loot = normalizePuzzleVaultLoot(state.puzzleVault.loot);
  grantPuzzleVaultLoot(loot);
  const hadResources = loot.resources.length > 0;
  const lootText = puzzleVaultLootText(loot);
  state.puzzleVault = defaultPuzzleVaultState();
  bossStartedAt = Date.now();
  if (hadResources) {
    renderResources();
    renderCrafting();
  }
  toast(`You left the Puzzle Vault. ${lootText} claimed.`);
  spawnEnemy(false);
  updateUI();
  saveState();
}

function handlePuzzleVaultEnemyDefeated(defeatedBoss) {
  if (defeatedBoss) {
    finishPuzzleVaultRun("victory");
    return;
  }
  state.puzzleVault.levelKills = Math.max(0, Math.floor(Number(state.puzzleVault.levelKills) || 0)) + 1;
  if (state.puzzleVault.levelKills >= state.puzzleVault.levelGoal) {
    state.puzzleVault.enemyKey = puzzleVaultBossDef.key;
    bossStartedAt = Date.now();
    toast("The Goblin King blocks the vault door.");
  } else {
    state.puzzleVault.enemyKey = "";
  }
}

function claimFirstBossDiamondReward(level) {
  const bossLevel = Math.max(0, Math.floor(Number(level) || 0));
  if (!isBossLevel(bossLevel)) return 0;
  state.bossDiamondRewards = normalizeBossDiamondRewards(state.bossDiamondRewards);
  if (state.bossDiamondRewards[bossLevel]) return 0;
  state.bossDiamondRewards[bossLevel] = true;
  state.diamonds = floorGameNumber(state.diamonds + FIRST_BOSS_DIAMOND_REWARD);
  return FIRST_BOSS_DIAMOND_REWARD;
}

function isDpsUnlocked() {
  return state.bosses >= 1;
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
  if (isPuzzleVaultActive()) return false;
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

function parseDevAmount(input, { integer = false, minimum = 0 } = {}) {
  const raw = typeof input === "string" ? input.trim().replaceAll(",", "") : String(input ?? "");
  if (!raw) return null;
  const match = raw.match(/^(-?\d+(?:\.\d+)?)\s*([kmbt])?$/i);
  if (!match) return null;
  const unitScale = { k: 1_000, m: 1_000_000, b: 1_000_000_000, t: 1_000_000_000_000 };
  const scale = unitScale[match[2]?.toLowerCase()] ?? 1;
  const number = Number(match[1]) * scale;
  if (!Number.isFinite(number) || number < minimum) return null;
  return integer ? Math.floor(number) : number;
}

function setDevOpen(open) {
  if (!els.devDialog || !els.devBackdrop || !els.devToggle) return;
  els.devDialog.hidden = !open;
  els.devBackdrop.hidden = !open;
  els.devToggle.setAttribute("aria-expanded", String(open));
  if (open) syncDevFields();
}

function setDailiesOpen(open) {
  if (!els.dailiesDialog || !els.dailiesBackdrop || !els.dailiesToggle) return;
  const guideState = dailyGuideState();
  els.dailiesDialog.hidden = !open;
  els.dailiesBackdrop.hidden = !open;
  els.dailiesToggle.setAttribute("aria-expanded", String(open));
  if (open) {
    modalOpenedAt = performance.now();
    renderDailyQuests();
    if (guideState === "icon") setDailyGuideState("window");
  } else if (guideState === "window") {
    setDailyGuideState(dailyGuideWindowPromptShown ? "done" : "icon");
  }
  scheduleDailyGuideUpdate();
}

function setAchievementsOpen(open) {
  if (!els.achievementsDialog || !els.achievementsBackdrop || !els.achievementsToggle) return;
  if (!open) setAchievementMilestonesOpen(false);
  if (open && achievementGuideState() === "icon") setAchievementGuideState("window");
  els.achievementsDialog.hidden = !open;
  els.achievementsBackdrop.hidden = !open;
  els.achievementsToggle.setAttribute("aria-expanded", String(open));
  if (open) {
    modalOpenedAt = performance.now();
    setAchievementsView("achievements");
    renderAchievements();
    renderStatistics();
  }
  scheduleAchievementGuideUpdate();
}

function setAchievementsView(view) {
  const nextView = view === "statistics" ? "statistics" : "achievements";
  els.achievementTabs?.forEach((button) => {
    const active = button.dataset.achievementTab === nextView;
    button.classList.toggle("active", active);
    button.setAttribute("aria-selected", String(active));
  });
  els.achievementPanes?.forEach((pane) => {
    const active = pane.dataset.achievementPane === nextView;
    pane.classList.toggle("active", active);
    pane.hidden = !active;
  });
  if (nextView === "statistics") renderStatistics();
  else renderAchievements();
  scheduleAchievementGuideUpdate();
}

function setAchievementMilestonesOpen(open) {
  if (!els.achievementMilestoneDialog || !els.achievementMilestoneBackdrop || !els.achievementMilestoneToggle) return;
  const guideState = achievementGuideState();
  if (open && (guideState === "icon" || guideState === "window")) setAchievementGuideState("tiersFree");
  if (!open && achievementGuideTierStateActive(guideState)) setAchievementGuideState("done");
  achievementMilestonesOpen = Boolean(open);
  els.achievementMilestoneDialog.hidden = !open;
  els.achievementMilestoneBackdrop.hidden = !open;
  els.achievementMilestoneToggle.setAttribute("aria-expanded", String(open));
  if (open) {
    modalOpenedAt = performance.now();
    renderAchievementMilestones();
    scheduleAchievementGuideUpdate();
    return;
  }
  setAchievementMilestoneRewardOpen(false);
  scheduleAchievementGuideUpdate();
}

function setAchievementMilestoneRewardOpen(open, options = {}) {
  if (!els.achievementMilestoneRewardDialog || !els.achievementMilestoneRewardBackdrop) return;
  if (!open && options.clearSelection !== false) {
    selectedAchievementMilestoneReward = null;
  }
  els.achievementMilestoneRewardDialog.hidden = !open;
  els.achievementMilestoneRewardBackdrop.hidden = !open;
  if (open) {
    modalOpenedAt = performance.now();
    renderAchievementMilestoneDetail();
  } else if (els.achievementMilestoneDetail) {
    els.achievementMilestoneDetail.hidden = true;
    els.achievementMilestoneDetail.innerHTML = "";
    if (achievementMilestonesOpen) renderAchievementMilestones();
  }
}

function puzzleVaultSummaryLootRows(loot) {
  const normalized = normalizePuzzleVaultLoot(loot);
  const rows = [];
  if (normalized.ether > 0) {
    rows.push(`
      <div class="puzzle-vault-summary-row">
        <span class="currency-icon gold" aria-hidden="true"></span>
        <span>Ether</span>
        <strong>${format(normalized.ether)}</strong>
      </div>
    `);
  }
  if (normalized.diamonds > 0) {
    rows.push(`
      <div class="puzzle-vault-summary-row">
        <span class="currency-icon diamond" aria-hidden="true"></span>
        <span>Diamonds</span>
        <strong>${format(normalized.diamonds)}</strong>
      </div>
    `);
  }
  for (const reward of normalized.resources) {
    rows.push(`
      <div class="puzzle-vault-summary-row" style="--resource-color: ${reward.resource.color}">
        <span class="resource-icon" style="--resource-color: ${reward.resource.color}; --resource-icon: url('${reward.resource.icon}')" aria-hidden="true"></span>
        <span>${reward.resource.label}</span>
        <strong>${format(reward.amount)}</strong>
      </div>
    `);
  }
  return rows.length ? rows.join("") : `<p class="puzzle-vault-summary-empty">No vault loot was gathered.</p>`;
}

function renderPuzzleVaultSummary() {
  if (!els.puzzleVaultSummaryDialog) return;
  const outcome = state.puzzleVault?.summaryOutcome || "timeout";
  const loot = normalizePuzzleVaultLoot(state.puzzleVault?.loot);
  if (els.puzzleVaultSummaryTitle) els.puzzleVaultSummaryTitle.textContent = puzzleVaultSummaryTitle(outcome);
  if (els.puzzleVaultSummaryCopy) {
    els.puzzleVaultSummaryCopy.textContent = outcome === "victory"
      ? "The portal quiets. Claim the haul you pulled from the vault."
      : "The vault collapsed, but the loot from defeated goblins is still yours.";
  }
  if (els.puzzleVaultSummaryLoot) els.puzzleVaultSummaryLoot.innerHTML = puzzleVaultSummaryLootRows(loot);
}

function syncPuzzleVaultSummaryUI() {
  if (!els.puzzleVaultSummaryDialog || !els.puzzleVaultSummaryBackdrop) return;
  const open = Boolean(state.puzzleVault?.summaryOpen);
  els.puzzleVaultSummaryDialog.hidden = !open;
  els.puzzleVaultSummaryBackdrop.hidden = !open;
  if (open) renderPuzzleVaultSummary();
}

function offlineLootRows(loot) {
  const normalized = normalizePuzzleVaultLoot(loot);
  const rows = [];
  if (normalized.ether > 0) {
    rows.push(`
      <div class="offline-loot-row">
        <span class="currency-icon gold" aria-hidden="true"></span>
        <span>Ether</span>
        <strong>${format(normalized.ether)}</strong>
      </div>
    `);
  }
  if (normalized.diamonds > 0) {
    rows.push(`
      <div class="offline-loot-row">
        <span class="currency-icon diamond" aria-hidden="true"></span>
        <span>Diamonds</span>
        <strong>${format(normalized.diamonds)}</strong>
      </div>
    `);
  }
  for (const reward of normalized.resources) {
    rows.push(`
      <div class="offline-loot-row" style="--resource-color: ${reward.resource.color}">
        <span class="resource-icon" style="--resource-color: ${reward.resource.color}; --resource-icon: url('${reward.resource.icon}')" aria-hidden="true"></span>
        <span>${reward.resource.label}</span>
        <strong>${format(reward.amount)}</strong>
      </div>
    `);
  }
  return rows.length ? rows.join("") : `<p class="offline-loot-empty">No loot was gathered.</p>`;
}

function renderOfflineLootReport(report) {
  if (!els.offlineLootDialog || !report) return;
  const rewardLevel = Math.max(1, Math.floor(Number(report.level) || activeCombatLevel()));
  els.offlineLootDialog.dataset.rewardLevel = String(rewardLevel);
  els.offlineLootDialog.dataset.bossFallback = report.bossFallback ? "true" : "false";
  if (els.offlineLootSummary) {
    els.offlineLootSummary.textContent = `${format(report.kills)} mob${report.kills === 1 ? "" : "s"} defeated while offline.`;
  }
  if (els.offlineLootList) els.offlineLootList.innerHTML = offlineLootRows(report.loot);
}

function setOfflineLootOpen(open) {
  if (!els.offlineLootDialog || !els.offlineLootBackdrop) return;
  els.offlineLootDialog.hidden = !open;
  els.offlineLootBackdrop.hidden = !open;
  if (open) modalOpenedAt = performance.now();
}

function showPendingOfflineLootReport() {
  if (!pendingOfflineLootReport) return;
  renderOfflineLootReport(pendingOfflineLootReport);
  pendingOfflineLootReport = null;
  setOfflineLootOpen(true);
}

function syncDevFields() {
  if (els.devDamageValue) els.devDamageValue.placeholder = `Current ${format(tapDamage())}`;
  if (els.devDpsValue) els.devDpsValue.placeholder = `Current ${format(dps())}`;
  if (els.devLevelValue) els.devLevelValue.placeholder = `Current ${currentGlobalLevel()}`;
  if (els.devScrollAmount) els.devScrollAmount.placeholder = `Current ${format(state.megaBoss?.scrolls ?? 0)}`;
}

function addDevCurrency(kind) {
  const inputByKind = {
    ether: els.devEtherAmount,
    sparks: els.devSparkAmount,
    diamonds: els.devDiamondAmount,
    scrolls: els.devScrollAmount
  };
  const amount = parseDevAmount(inputByKind[kind]?.value, { integer: true, minimum: 0 });
  if (amount === null) {
    toast("Enter a valid amount.");
    return;
  }
  if (kind === "ether") state.gold = floorGameNumber(state.gold + amount);
  if (kind === "sparks") state.reborn.sparks = floorGameNumber(state.reborn.sparks + amount);
  if (kind === "diamonds") state.diamonds = floorGameNumber(state.diamonds + amount);
  if (kind === "scrolls") state.megaBoss.scrolls = floorGameNumber((state.megaBoss?.scrolls ?? 0) + amount);
  if (inputByKind[kind]) inputByKind[kind].value = "";
  toast(`Added ${format(amount)} ${kind === "ether" ? "Ether" : kind === "sparks" ? "Reborn Sparks" : kind === "scrolls" ? "Scrolls" : "Diamonds"}.`);
  updateUI();
  saveState();
}

function setDevCombatOverride(kind) {
  const input = kind === "damage" ? els.devDamageValue : els.devDpsValue;
  const amount = parseDevAmount(input?.value, { minimum: 0 });
  if (amount === null) {
    toast("Enter a valid combat value.");
    return;
  }
  state.dev ??= { ...defaultState.dev };
  const storedAmount = kind === "damage" ? Math.round(amount) : amount;
  if (kind === "damage") state.dev.tapDamageOverride = storedAmount;
  if (kind === "dps") state.dev.dpsOverride = amount;
  if (input) input.value = "";
  toast(`${kind === "damage" ? "Damage" : "DPS"} override set to ${format(storedAmount)}.`);
  updateUI();
  saveState();
}

function clearDevCombatOverrides() {
  state.dev = { ...defaultState.dev };
  toast("Damage and DPS overrides cleared.");
  updateUI();
  saveState();
}

function resetDevProgress() {
  if (!window.confirm("Reset everything for testing, including levels, currencies, upgrades, boons, reborn data, gear, resources, and saved preferences?")) return;
  clearGameStorage();
  const params = new URLSearchParams(window.location.search);
  params.set("resetSave", "1");
  params.set("fresh", String(Date.now()));
  window.location.replace(`${window.location.pathname}?${params.toString()}${window.location.hash}`);
}

function ensureDevResetButton() {
  if (!els.devDialog) return;
  const existing = els.devDialog.querySelector("#devResetProgress");
  if (existing) {
    els.devResetProgress = existing;
    return;
  }
  const button = document.createElement("button");
  button.className = "dev-reset";
  button.id = "devResetProgress";
  button.type = "button";
  button.textContent = "Reset Everything";
  button.style.cssText = [
    "width:100%",
    "min-height:40px",
    "margin:0 0 12px",
    "border:1px solid rgba(255,109,84,.42)",
    "border-radius:8px",
    "background:linear-gradient(180deg,rgba(255,109,84,.18),rgba(120,34,24,.28)),rgba(22,8,8,.88)",
    "color:#ffd7cf",
    "font:inherit",
    "font-size:.78rem",
    "font-weight:950"
  ].join(";");
  els.devDialog.querySelector(".dialog-header")?.after(button);
  els.devResetProgress = button;
}

function jumpDevLevel() {
  const level = parseDevAmount(els.devLevelValue?.value, { integer: true, minimum: 1 });
  if (level === null) {
    toast("Enter a valid level.");
    return;
  }
  const currencies = {
    gold: state.gold,
    diamonds: state.diamonds,
    sparks: state.reborn?.sparks ?? 0
  };
  state.maxLevel = Math.max(state.maxLevel, level);
  state.levelKills = 0;
  state.levelGoal = randomMobGoal();
  enterLevel(level);
  if (els.devLevelValue) els.devLevelValue.value = "";
  spawnEnemy(false);
  state.gold = currencies.gold;
  state.diamonds = currencies.diamonds;
  state.reborn.sparks = currencies.sparks;
  updateUI();
  toast(`Jumped to level ${level}.`);
  saveState();
}

function tapDamage() {
  const override = finiteDevOverride(state.dev?.tapDamageOverride);
  if (override !== null) return Math.round(override);
  const universalAdjudicator = 1 + state.upgrades.drill * UNIVERSAL_ADJUDICATOR_TAP_BONUS_PER_LEVEL;
  const hammerMultiplier = tapDamageUpgradeMultiplier(state.upgrades.pick);
  const rebornPower = 1 + state.reborn.upgrades.emberMight * REBORN_UPGRADE_BONUS_PER_LEVEL;
  const base = BASE_TAP_DAMAGE * universalAdjudicator;
  const flare = solarFlareMultiplier();
  return Math.max(1, Math.round(base * hammerMultiplier * flare * tapFrenzyMultiplier() * rebornPower));
}

function dps() {
  if (!isDpsUnlocked()) return 0;
  const override = finiteDevOverride(state.dev?.dpsOverride);
  if (override !== null) return override;
  const miner = Math.pow(DPS_UPGRADE_MULTIPLIER, Math.max(0, Math.floor(Number(state.upgrades.miner) || 0)));
  const allDamage = 1 + state.upgrades.standard * COSMIC_INJUNCTION_DAMAGE_BONUS_PER_LEVEL;
  const rebornPower = 1 + state.reborn.upgrades.ancientCrew * REBORN_UPGRADE_BONUS_PER_LEVEL;
  const gearPower = 1 + equipmentBonus("dpsMultiplier");
  return Math.floor(BASE_DPS * miner * allDamage * rebornPower * gearPower);
}

function nuggetMultiplier() {
  const rebornEtherMultiplier = 1 + state.reborn.upgrades.goldenMemory * REBORN_UPGRADE_BONUS_PER_LEVEL;
  const magnet = Date.now() < state.boosts.magnetUntil ? 3 : 1;
  return rebornEtherMultiplier * magnet * etherGainMultiplier() * (1 + equipmentBonus("nuggetMultiplier") + equipmentBonus("killNuggetMultiplier"));
}

function currentEnemyReward() {
  if (!enemy) return 0;
  return Math.max(1, Math.floor(clampGameNumber((enemy.baseReward ?? enemy.reward ?? 1) * nuggetMultiplier())));
}

function currentEnemyRewardLog() {
  if (!enemy) return 0;
  const baseLog = Number.isFinite(enemy.baseRewardLog) ? enemy.baseRewardLog : finiteLog10(enemy.baseReward ?? enemy.reward ?? 1);
  return baseLog + finiteLog10(nuggetMultiplier(), 0);
}

function activeEnemyBaseRewardLogForCosts() {
  if (enemy && Number.isFinite(enemy.baseRewardLog)) return enemy.baseRewardLog;
  const rewardBonus = isBoss() ? 4.25 : 1;
  return enemyRewardBaseLogForLevel(activeCombatLevel(), rewardBonus);
}

function activeEnemyBaseRewardCost(multiplier) {
  const safeMultiplier = Math.max(0, Number(multiplier) || 0);
  if (enemy && Number.isFinite(enemy.baseReward)) {
    return floorGameNumber(enemy.baseReward * safeMultiplier, 1);
  }
  const rewardLog = activeEnemyBaseRewardLogForCosts() + finiteLog10(safeMultiplier, 0);
  return numberFromLog10(rewardLog, 1);
}

function enemyRewardBaseLogForLevel(level, rewardBonus = 1) {
  const safeLevel = Math.max(1, Math.floor(Number(level) || 1));
  const rewardDepth = Math.max(0, safeLevel - 1);
  return log10LinearTimesPower(
    ENEMY_REWARD_LINEAR_BASE + rewardDepth * ENEMY_REWARD_LINEAR_STEP,
    ENEMY_REWARD_GROWTH,
    rewardDepth,
    rewardBonus
  );
}

function normalLevelRewardForCosts(level = currentGlobalLevel()) {
  const rewardLog = enemyRewardBaseLogForLevel(level, 1) + finiteLog10(nuggetMultiplier(), 0);
  return Math.max(1, Math.floor(clampGameNumber(numberFromLog10(rewardLog, 1), 1)));
}

function clampGameNumber(value, fallback = 0) {
  const number = Number(value);
  if (!Number.isFinite(number)) return value === Infinity ? MAX_GAME_NUMBER : fallback;
  return Math.max(0, Math.min(MAX_GAME_NUMBER, number));
}

function finiteLog10(value, fallback = 0) {
  const number = Number(value);
  if (!Number.isFinite(number) || number <= 0) return fallback;
  return Math.log10(number);
}

function log10Product(...values) {
  return values.reduce((total, value) => total + finiteLog10(value, 0), 0);
}

function log10LinearTimesPower(linear, base, exponent, multiplier = 1) {
  const safeBase = Number(base);
  const safeExponent = Number(exponent);
  if (!Number.isFinite(safeBase) || !Number.isFinite(safeExponent) || safeBase <= 0) return finiteLog10(linear * multiplier, 0);
  return log10Product(linear, multiplier) + Math.log10(safeBase) * safeExponent;
}

function numberFromLog10(logValue, minimum = 0) {
  if (!Number.isFinite(logValue)) return minimum;
  if (logValue >= MAX_GAME_LOG10) return MAX_GAME_NUMBER;
  const value = Math.pow(10, logValue);
  const precisionGuard = Math.max(1e-9, value * 1e-12);
  return Math.max(minimum, Math.floor(value + precisionGuard));
}

function safePower(base, exponent) {
  const safeBase = Number(base);
  const safeExponent = Number(exponent);
  if (!Number.isFinite(safeBase) || !Number.isFinite(safeExponent) || safeBase <= 0) return 0;
  const logValue = Math.log(safeBase) * safeExponent;
  if (logValue >= Math.log(MAX_GAME_NUMBER)) return MAX_GAME_NUMBER;
  return Math.exp(logValue);
}

function floorGameNumber(value, minimum = 0) {
  return Math.max(minimum, Math.floor(clampGameNumber(value, minimum)));
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

function solarFlareMultiplier(now = Date.now()) {
  const def = buffDefs.find((buff) => buff.key === "flare");
  const stacks = activeBuffStacks(def, now);
  if (!def || stacks <= 0) return 1;
  return stacks >= def.maxStacks ? def.empoweredTapDamageMultiplier ?? 10 : def.tapDamageMultiplier ?? 5;
}

function etherGainMultiplier(now = Date.now()) {
  const def = buffDefs.find((buff) => buff.key === "etherGain");
  return 1 + activeBuffStacks(def, now);
}

function equipmentBonus(stat) {
  return 0;
}

function itemStatBonuses(item) {
  const def = itemDefs[item?.defKey];
  return item?.bonuses ?? def?.bonuses ?? {};
}

function ringInventoryState() {
  state.inventory.rings = normalizeRingInventory(state.inventory?.rings);
  return state.inventory.rings;
}

function ringInventoryBag() {
  return ringInventoryState().bag;
}

function equippedRing() {
  return ringInventoryState().equipped;
}

function ownedRingCount(defKey) {
  const bagCount = ringInventoryBag().filter((ring) => ring?.defKey === defKey).length;
  return bagCount + (equippedRing()?.defKey === defKey ? 1 : 0);
}

function ringIngredientBagCount(defKey, amount = Infinity) {
  let count = 0;
  for (const ring of ringInventoryBag()) {
    if (ring?.defKey === defKey) count += 1;
    if (count >= amount) return count;
  }
  return count;
}

function ringDefFor(ringOrDef) {
  if (ringDefs[ringOrDef?.defKey]) return ringDefs[ringOrDef.defKey];
  if (ringOrDef?.type === "ring") return ringOrDef;
  return null;
}

function ringQualityKey(ringOrDef) {
  const def = ringDefFor(ringOrDef);
  return ringRarityByKey[def?.quality]?.key ?? "common";
}

function ringQualityLabel(ringOrDef) {
  return ringRarityByKey[ringQualityKey(ringOrDef)]?.label ?? "Common";
}

function ringQualityColor(ringOrDef) {
  return ringRarityByKey[ringQualityKey(ringOrDef)]?.color ?? "#f4f4f4";
}

function ringDisenchantReward(ring) {
  const def = ringDefFor(ring);
  if (!def) return null;
  const rarity = ringRarityByKey[ringQualityKey(def)] ?? ringRarityByKey.common;
  return {
    amount: rarity.disenchantGems,
    resource: ringGemResourceForDamageType(def.damageType)
  };
}

function ringDisenchantRewardText(ring) {
  const reward = ringDisenchantReward(ring);
  return reward ? resourceRewardText([reward]) : "0 Gems";
}

function ringDisplayName(ring) {
  return ringDefFor(ring)?.name ?? "Ring";
}

function ringDamageTypeLabel(type) {
  return ringDamageTypes[type]?.label ?? "Damage";
}

function ringDamageTypeColor(type) {
  return ringDamageTypes[type]?.color ?? "#ffe6a7";
}

function ringDamageTypeIcon(type) {
  return ringDamageTypes[type]?.icon ?? "";
}

function ringDamageTypeIconMarkup(type, options = {}) {
  const label = ringDamageTypeLabel(type);
  const shortLabel = label.replace(/\s+Damage$/i, "");
  const icon = ringDamageTypeIcon(type);
  const traitKind = options.traitKind ? String(options.traitKind) : "";
  const traitAttrs = traitKind
    ? ` data-mega-boss-trait-kind="${traitKind}" data-mega-boss-trait-label="${label}" role="button" tabindex="0"`
    : "";
  if (options.withLabel) {
    const iconMarkup = icon
      ? `<span class="damage-type-icon" style="--damage-type-color: ${ringDamageTypeColor(type)}; --damage-type-icon: url('${icon}')" aria-hidden="true"></span>`
      : `<span class="damage-type-fallback" aria-hidden="true">${shortLabel}</span>`;
    return `<span class="damage-type-stack" style="--damage-type-color: ${ringDamageTypeColor(type)}" title="${label}" aria-label="${label}"${traitAttrs}>${iconMarkup}<span class="damage-type-label">${shortLabel}</span></span>`;
  }
  if (!icon) return `<span class="damage-type-fallback" title="${label}"${traitAttrs}>${shortLabel}</span>`;
  return `<span class="damage-type-icon" style="--damage-type-color: ${ringDamageTypeColor(type)}; --damage-type-icon: url('${icon}')" title="${label}" aria-label="${label}"${traitAttrs}></span>`;
}

function ringDamageTypeMarkup(type) {
  return `<span class="ring-damage-type" style="--ring-damage-color: ${ringDamageTypeColor(type)}">${ringDamageTypeLabel(type)}</span>`;
}

function ringBonusText(ring) {
  const def = ringDefs[ring?.defKey];
  if (!def) return "No Mega Boss bonus";
  return `+${effectPercent(def.damageBonus, 0)} ${ringDamageTypeLabel(def.damageType)}`;
}

function ringSlotBonusText(ring) {
  const def = ringDefs[ring?.defKey];
  if (!def) return "No bonus";
  const typeLabel = ringDamageTypeLabel(def.damageType).replace(/\s+Damage$/i, "");
  return `+${effectPercent(def.damageBonus, 0)} ${typeLabel}`;
}

function scrollCountText(value) {
  return `x${format(value ?? 0)}`;
}

function formatCritDamage(value) {
  return format(Math.max(0, Math.round(Number(value) || 0)));
}

function megaBossDamageTraitMarkup(def) {
  if (!def?.vulnerableDamage && !def?.resistantDamage) return "";
  const parts = [];
  if (def.vulnerableDamage) parts.push(`<span class="mega-boss-trait weak">Weak: ${ringDamageTypeIconMarkup(def.vulnerableDamage, { traitKind: "weak", withLabel: true })}</span>`);
  if (def.resistantDamage) parts.push(`<span class="mega-boss-trait resist">Resists: ${ringDamageTypeIconMarkup(def.resistantDamage, { traitKind: "resist", withLabel: true })}</span>`);
  return parts.join("");
}

function megaBossRingDamageMultiplier(def = activeMegaBossDef(), ring = equippedRing()) {
  const ringDef = ringDefs[ring?.defKey];
  if (!def || !ringDef) return 1;
  if (ringDef.damageType === def.vulnerableDamage) return 1 + Math.max(0, Number(ringDef.damageBonus) || 0);
  if (ringDef.damageType === def.resistantDamage) return MEGA_BOSS_RESISTANCE_MULTIPLIER;
  return 1;
}

function megaBossRingBonusText(def = selectedMegaBossDef()) {
  const ring = equippedRing();
  if (!ring) return "Ring: Empty";
  const multiplier = megaBossRingDamageMultiplier(def, ring);
  return `Ring: ${ringDisplayName(ring)} (${trimDecimals(multiplier, 2)}x vs ${def?.name ?? "Mega Boss"})`;
}

function createRing(defKey) {
  if (!ringDefs[defKey]) return null;
  const ring = {
    id: state.inventory.nextItemId,
    defKey,
    source: "crafted"
  };
  state.inventory.nextItemId += 1;
  return ring;
}

function hasOpenRingInventorySlot() {
  return ringInventoryBag().some((ring) => !ring);
}

function storeRingInInventory(ring) {
  const bag = ringInventoryBag();
  const index = bag.findIndex((bagItem) => !bagItem);
  if (index === -1) return false;
  bag[index] = ring;
  return true;
}

function addRingToInventory(defKey) {
  const ring = createRing(defKey);
  if (!ring) return false;
  if (!storeRingInInventory(ring)) return false;
  return ring;
}

function isItemUpgrade(item) {
  const def = itemDefs[item?.defKey];
  if (!item || def?.type !== "gear" || !def.slot) return false;
  const equipped = state.inventory?.equipment?.[def.slot];
  if (equipped?.id && item.id && equipped.id === item.id) return false;
  const bonuses = itemStatBonuses(item);
  const equippedBonuses = itemStatBonuses(equipped);
  return itemUpgradeStats.some((stat) => (bonuses[stat] ?? 0) > (equippedBonuses[stat] ?? 0));
}

function bossDuration() {
  return 30 + state.upgrades.compass * 2.5;
}

function tapGoldReward() {
  const bossTax = isBoss() ? 0.7 : 1;
  const average = Math.max(1, clampGameNumber(currentEnemyReward() * 0.008 * bossTax, 1));
  const low = Math.max(1, floorGameNumber(average * 0.85, 1));
  const high = Math.max(low, floorGameNumber(average * 1.18, low));
  const rolled = low + Math.floor(Math.random() * (high - low + 1));
  const critical = Math.random() < nuggetCritChance();
  const tapGear = 1 + equipmentBonus("tapNuggetMultiplier");
  const amount = Math.max(1, floorGameNumber((critical ? rolled * 2 : rolled) * tapGear, 1));
  return {
    amount,
    critical,
    low,
    high
  };
}

function tapCritChance() {
  return Math.min(0.55, 0.05 + state.upgrades.charm * 0.05);
}

function nuggetCritChance() {
  return Math.min(
    GILDED_MONOCLE_MAX_LEVEL * GILDED_MONOCLE_CRIT_CHANCE_PER_LEVEL,
    state.relics.gildedLens * GILDED_MONOCLE_CRIT_CHANCE_PER_LEVEL
  );
}

function flyingHighChestTimerReduction(level = rebornUpgradeLevel("flyingHigh")) {
  return Math.min(
    FLYING_HIGH_CHEST_TIMER_MAX_REDUCTION,
    Math.max(0, Math.floor(Number(level) || 0)) * FLYING_HIGH_CHEST_TIMER_REDUCTION_PER_LEVEL
  );
}

function flyingHighChestTimerMultiplier(level) {
  return 1 - flyingHighChestTimerReduction(level);
}

function swiftJusticeCooldownReduction(level = rebornUpgradeLevel("swiftJustice")) {
  return Math.min(
    SWIFT_JUSTICE_COOLDOWN_MAX_REDUCTION,
    Math.max(0, Math.floor(Number(level) || 0)) * SWIFT_JUSTICE_COOLDOWN_REDUCTION_PER_LEVEL
  );
}

function judgmentCooldownDurationMs(level) {
  return JUDGMENT_COOLDOWN_MS * (1 - swiftJusticeCooldownReduction(level));
}

function shinyAttractionsPortalMultiplier(level = rebornUpgradeLevel("shinyAttractions")) {
  return Math.pow(
    SHINY_ATTRACTIONS_PORTAL_CHANCE_MULTIPLIER,
    Math.max(0, Math.floor(Number(level) || 0))
  );
}

function puzzleRingDropChance(source = "boss", level = rebornUpgradeLevel("shinyAttractions")) {
  const baseChance = source === "megaBoss" ? PUZZLE_RING_MEGA_BOSS_DROP_CHANCE : PUZZLE_RING_BOSS_DROP_CHANCE;
  const multiplier = source === "megaBoss" ? 1 : shinyAttractionsPortalMultiplier(level);
  return Math.min(1, Math.max(0, baseChance * multiplier));
}

function lingeringRuinBossHealthReduction(level = rebornUpgradeLevel("lingeringRuin")) {
  return Math.min(
    LINGERING_RUIN_BOSS_HEALTH_MAX_REDUCTION,
    Math.max(0, Math.floor(Number(level) || 0)) * LINGERING_RUIN_BOSS_HEALTH_REDUCTION_PER_LEVEL
  );
}

function bossHealthRebornMultiplier(level) {
  return 1 - lingeringRuinBossHealthReduction(level);
}

function bossHealthMultiplier(baseMultiplier = 1) {
  return Math.max(0, Number(baseMultiplier) || 0) * bossHealthRebornMultiplier();
}

function effectNumber(value, decimals = 1) {
  return trimDecimals(value, decimals);
}

function effectPercent(value, decimals = 1) {
  return `${effectNumber(value * 100, decimals)}%`;
}

function nextLevel(def, level) {
  return def.maxLevel ? Math.min(def.maxLevel, level + 1) : level + 1;
}

function rebornUpgradeLevel(key) {
  return Math.max(0, Math.floor(Number(state.reborn.upgrades[key]) || 0));
}

function rebornUpgradeMaxed(def, level = rebornUpgradeLevel(def?.key)) {
  return Boolean(def?.maxLevel && level >= def.maxLevel);
}

function currentNextText(label, current, next, maxed = false) {
  return maxed ? `${label}: ${current} (Max)` : `${label}: ${current} -> ${next}`;
}

function tapDamageUpgradeMultiplier(level) {
  const safeLevel = Math.max(0, Math.floor(Number(level) || 0));
  return Math.pow(TAP_DAMAGE_PICK_MULTIPLIER, safeLevel);
}

function minerDpsAt(level) {
  const safeLevel = Math.max(0, Math.floor(Number(level) || 0));
  return Math.floor(BASE_DPS * Math.pow(DPS_UPGRADE_MULTIPLIER, safeLevel));
}

function benchbreakerCritDamageBonus(level) {
  const safeLevel = Math.max(0, Math.floor(Number(level) || 0));
  return safeLevel * BENCHBREAKER_CRIT_BONUS_PER_LEVEL;
}

function upgradeEffectText(def) {
  const level = state.upgrades[def.key] ?? 0;
  const next = nextLevel(def, level);
  const maxed = Boolean(def.maxLevel && level >= def.maxLevel);
  if (def.key === "pick") {
    return currentNextText("Tap damage multiplier", `${effectNumber(tapDamageUpgradeMultiplier(level), 2)}x`, `${effectNumber(tapDamageUpgradeMultiplier(next), 2)}x`, maxed);
  }
  if (def.key === "miner") {
    if (!isDpsUnlocked()) return "Defeat the first boss to unlock DPS.";
    return currentNextText("DPS", format(minerDpsAt(level)), format(minerDpsAt(next)), maxed);
  }
  if (def.key === "charm") {
    return currentNextText("Tap crit chance", effectPercent(Math.min(0.55, 0.05 + level * 0.05)), effectPercent(Math.min(0.55, 0.05 + next * 0.05)), maxed);
  }
  if (def.key === "alchemist") {
    return currentNextText("Crit damage bonus", `+${effectPercent(benchbreakerCritDamageBonus(level))}`, `+${effectPercent(benchbreakerCritDamageBonus(next))}`, maxed);
  }
  if (def.key === "drill") {
    return currentNextText("Tap damage", `+${effectPercent(level * UNIVERSAL_ADJUDICATOR_TAP_BONUS_PER_LEVEL, 2)}`, `+${effectPercent(next * UNIVERSAL_ADJUDICATOR_TAP_BONUS_PER_LEVEL, 2)}`, maxed);
  }
  if (def.key === "standard") {
    return currentNextText("DPS", `+${effectPercent(level * COSMIC_INJUNCTION_DAMAGE_BONUS_PER_LEVEL)}`, `+${effectPercent(next * COSMIC_INJUNCTION_DAMAGE_BONUS_PER_LEVEL)}`, maxed);
  }
  if (def.key === "compass") {
    return currentNextText("Boss timer", `${effectNumber(30 + level * 2.5)}s`, `${effectNumber(30 + next * 2.5)}s`, maxed);
  }
  return def.description;
}

function buffEffectText(def) {
  if (def.key === "tapFrenzy") return "2x tap damage; 5 stacks becomes 3x for 1:30";
  if (def.key === "etherGain") return "+100% Ether per stack for 2m, max +200%";
  if (def.key === "flare") return "5x tap damage; 5 stacks becomes 10x for 3m";
  if (def.key === "magnet") return "3x Ether for 5m";
  if (def.key === "tapperFrenzy") return "1/s, 2/s, then 4/s for 1m";
  return def.description;
}

function rebornUpgradeEffectText(def) {
  const level = rebornUpgradeLevel(def.key);
  const next = nextLevel(def, level);
  const maxed = rebornUpgradeMaxed(def, level);
  if (def.key === "emberMight") {
    return currentNextText("Tap damage", `+${effectPercent(level * REBORN_UPGRADE_BONUS_PER_LEVEL)}`, `+${effectPercent(next * REBORN_UPGRADE_BONUS_PER_LEVEL)}`, maxed);
  }
  if (def.key === "ancientCrew") {
    return currentNextText("DPS", `+${effectPercent(level * REBORN_UPGRADE_BONUS_PER_LEVEL)}`, `+${effectPercent(next * REBORN_UPGRADE_BONUS_PER_LEVEL)}`, maxed);
  }
  if (def.key === "goldenMemory") {
    return currentNextText("Ether gains", `+${effectPercent(level * REBORN_UPGRADE_BONUS_PER_LEVEL)}`, `+${effectPercent(next * REBORN_UPGRADE_BONUS_PER_LEVEL)}`, maxed);
  }
  if (def.key === "flyingHigh") {
    return currentNextText("Chest timer", `-${effectPercent(flyingHighChestTimerReduction(level))}`, `-${effectPercent(flyingHighChestTimerReduction(next))}`, maxed);
  }
  if (def.key === "shinyAttractions") {
    return currentNextText("Portal chance", formatDropChance(puzzleRingDropChance("boss", level)), formatDropChance(puzzleRingDropChance("boss", next)), maxed);
  }
  if (def.key === "lingeringRuin") {
    return currentNextText("Boss health", `-${effectPercent(lingeringRuinBossHealthReduction(level), 2)}`, `-${effectPercent(lingeringRuinBossHealthReduction(next), 2)}`, maxed);
  }
  if (def.key === "swiftJustice") {
    return currentNextText("Hammer cooldown", `-${effectPercent(swiftJusticeCooldownReduction(level))}`, `-${effectPercent(swiftJusticeCooldownReduction(next))}`, maxed);
  }
  return def.description;
}

function rebornFormulaText() {
  return `Next Reborn: ${format(rebornReward())} sparks`;
}

function rollTapCrit() {
  if (Math.random() >= tapCritChance()) return { critical: false, multiplier: 1 };
  return {
    critical: true,
    multiplier: 2 + benchbreakerCritDamageBonus(state.upgrades.alchemist)
  };
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
  return numberFromLog10(enemyPowerLog(), 1);
}

function enemyHpLogForLevel(level, multiplier = 1) {
  const safeLevel = Math.max(1, Math.floor(Number(level) || 1));
  return log10Product(ENEMY_HP_BASE, multiplier) + Math.log10(ENEMY_HP_GROWTH) * (safeLevel - 1);
}

function enemyPowerLog() {
  const globalLevel = activeCombatLevel();
  if (isPuzzleVaultActive()) {
    const vaultMultiplier = isPuzzleVaultBoss()
      ? bossHealthMultiplier(BOSS_HP_MULTIPLIER * PUZZLE_VAULT_ENEMY_HP_MULTIPLIER)
      : PUZZLE_VAULT_ENEMY_HP_MULTIPLIER;
    return enemyHpLogForLevel(globalLevel, vaultMultiplier);
  }
  const bossBonus = isBoss() ? bossHealthMultiplier(BOSS_HP_MULTIPLIER) : 1;
  return enemyHpLogForLevel(globalLevel, bossBonus);
}

function spawnPuzzleVaultEnemy(keepHp = false) {
  const def = activePuzzleVaultEnemyDef();
  const globalLevel = puzzleVaultCombatLevel();
  const bossEncounter = isPuzzleVaultBoss();
  const rewardBonus = bossEncounter ? 4.25 : 1;
  const baseRewardLog = enemyRewardBaseLogForLevel(globalLevel, rewardBonus);
  const rewardLog = baseRewardLog + finiteLog10(nuggetMultiplier(), 0);
  const baseReward = numberFromLog10(baseRewardLog, 1);
  enemy = {
    name: def.name,
    baseName: def.name,
    archetype: "humanoid",
    visualEncounter: bossEncounter ? 9 : Math.min(8, Math.max(0, Math.floor(Number(state.puzzleVault?.levelKills) || 0))),
    puzzleVaultKey: def.key,
    color: def.color,
    accent: def.accent,
    baseRewardLog,
    rewardLog,
    baseReward,
    reward: numberFromLog10(rewardLog, 1)
  };
  if (!bossEncounter) enemySpawnSerial += 1;
  state.maxHpLog = enemyPowerLog();
  state.maxHp = numberFromLog10(state.maxHpLog, 1);
  const enemyHpTooHigh = Number.isFinite(state.enemyHpLog) ? state.enemyHpLog > state.maxHpLog : state.enemyHp > state.maxHp;
  if (!keepHp || state.enemyHp <= 0 || enemyHpTooHigh) {
    state.enemyHp = state.maxHp;
    state.enemyHpLog = state.maxHpLog;
  } else {
    state.enemyHpLog = Math.min(state.maxHpLog, Number.isFinite(state.enemyHpLog) ? state.enemyHpLog : finiteLog10(state.enemyHp, 0));
  }
  markActiveRender(1200);
  updateUI();
  syncMusicForEncounter();
}

function spawnEnemy(keepHp = false) {
  if (isPuzzleVaultActive()) {
    spawnPuzzleVaultEnemy(keepHp);
    return;
  }
  const realm = getRealm();
  const cycle = Math.floor(state.realm / realms.length);
  const visualEncounter = isBoss() ? state.encounter : (state.encounter + state.levelKills + enemySpawnSerial) % MOB_LEVELS_PER_ZONE;
  const creatureName = realm.creatures[visualEncounter];
  const hue = palettes[(visualEncounter + cycle) % palettes.length];
  const globalLevel = activeCombatLevel();
  const rewardBonus = isBoss() ? 4.25 : 1;
  const baseRewardLog = enemyRewardBaseLogForLevel(globalLevel, rewardBonus);
  const rewardLog = baseRewardLog + finiteLog10(nuggetMultiplier(), 0);
  const baseReward = numberFromLog10(baseRewardLog, 1);
  enemy = {
    name: `${isBoss() ? "Boss: " : ""}${creatureName}`,
    baseName: creatureName,
    archetype: creatureArchetype(creatureName),
    visualEncounter,
    color: hue,
    baseRewardLog,
    rewardLog,
    baseReward,
    reward: numberFromLog10(rewardLog, 1)
  };
  if (!isBoss()) enemySpawnSerial += 1;
  state.maxHpLog = enemyPowerLog();
  state.maxHp = numberFromLog10(state.maxHpLog, 1);
  const enemyHpTooHigh = Number.isFinite(state.enemyHpLog) ? state.enemyHpLog > state.maxHpLog : state.enemyHp > state.maxHp;
  if (!keepHp || state.enemyHp <= 0 || enemyHpTooHigh) {
    state.enemyHp = state.maxHp;
    state.enemyHpLog = state.maxHpLog;
  } else {
    state.enemyHpLog = Math.min(state.maxHpLog, Number.isFinite(state.enemyHpLog) ? state.enemyHpLog : finiteLog10(state.enemyHp, 0));
  }
  if (isBoss()) bossStartedAt = Date.now();
  markActiveRender(1200);
  updateUI();
  syncMusicForEncounter();
  maybeShowFirstBossTutorial();
}

function defeatPuzzleVaultEnemy(defeatedBoss, defeatedArchetype) {
  const defeatedName = defeatedBoss ? puzzleVaultBossDef.name : enemy?.baseName ?? "Vault foe";
  recordGoblinKill(defeatedName);
  const loot = rollPuzzleVaultLoot(enemy?.puzzleVaultKey, defeatedBoss);
  const lootText = puzzleVaultLootText(loot);
  addPuzzleVaultLoot(loot);
  const center = canvasCenter();
  const visualReward = Math.max(1, loot.ether || currentEnemyReward());
  spawnLootExplosion(visualReward, defeatedBoss, creatureLootCenter());
  if (loot.diamonds > 0) spawnGemExplosion(loot.diamonds);
  playDefeatSound(defeatedBoss, defeatedArchetype);
  if (loot.diamonds > 0 || loot.resources?.some((reward) => gemResourceDefs.includes(reward.resource))) playGemSound();
  const floaterText = loot.ether > 0
    ? `+${format(loot.ether)}`
    : loot.diamonds > 0
      ? `+${format(loot.diamonds)} diamonds`
      : loot.resources?.length
        ? "Loot!"
        : "No loot";
  floaters.push({ text: floaterText, x: center.x, y: center.y + 82, age: 0, color: loot.diamonds > 0 ? "#63dbff" : "#f6bd3a" });
  handlePuzzleVaultEnemyDefeated(defeatedBoss);
  toast(`${defeatedName} defeated. ${lootText} secured.`);
  if (isPuzzleVaultActive()) {
    spawnEnemy();
  } else {
    updateUI();
  }
  saveState();
}

function defeatEnemy() {
  markActiveRender(2200);
  const defeatedBoss = isBoss();
  const defeatedLevel = activeCombatLevel();
  const defeatedArchetype = enemy?.archetype ?? "blob";
  const defeatedName = enemy?.baseName ?? (defeatedBoss ? "Normal Boss" : "Creature");
  if (isPuzzleVaultActive()) {
    defeatPuzzleVaultEnemy(defeatedBoss, defeatedArchetype);
    return;
  }
  if (defeatedBoss) recordNormalBossKill(defeatedName);
  else recordCreatureKill(defeatedName);
  const reward = currentEnemyReward();
  const rewardText = formatLog10(currentEnemyRewardLog());
  state.gold = floorGameNumber(state.gold + reward);
  trackDailyQuestProgress("ether", reward);
  const center = canvasCenter();
  spawnLootExplosion(reward, defeatedBoss, creatureLootCenter());
  playDefeatSound(defeatedBoss, defeatedArchetype);
  floaters.push({ text: `+${rewardText}`, x: center.x, y: center.y + 82, age: 0, color: "#f6bd3a" });
  if (!defeatedBoss) {
    const materialRewards = [
      ...rollNormalCreatureDustRewards(),
      ...rollLevelZoneResourceRewards(defeatedLevel)
    ];
    if (materialRewards.length) {
      grantInventoryResourceRewards(materialRewards);
      toast(`${resourceRewardText(materialRewards)} dropped.`);
      renderResources();
      renderCrafting();
    }
  }

  if (defeatedBoss) {
    const bossKill = state.bosses + 1;
    const scrollReward = bossScrollReward(defeatedLevel);
    const materialRewards = [
      ...rollBossDustRewards(),
      ...rollLevelZoneResourceRewards(defeatedLevel, true)
    ];
    grantInventoryResourceRewards(materialRewards);
    const diamondReward = claimFirstBossDiamondReward(defeatedLevel);
    const puzzleRingDropped = rollPuzzleRingDrop("boss", defeatedLevel);
    state.inventory.resources.souls = (state.inventory.resources.souls ?? 0) + NORMAL_BOSS_SOUL_REWARD;
    if (scrollReward > 0) {
      state.megaBoss.scrolls = Math.max(0, Math.floor(Number(state.megaBoss?.scrolls) || 0) + scrollReward);
    }
    state.bosses = bossKill;
    trackDailyQuestProgress("bosses", 1);
    const nextLevel = defeatedLevel + 1;
    state.maxLevel = Math.max(state.maxLevel, nextLevel);
    ensureFreshLevelGoal();
    enterLevel(nextLevel);
    const rewardParts = [`${NORMAL_BOSS_SOUL_REWARD} Soul`];
    if (diamondReward > 0) rewardParts.push(`${diamondReward} Diamonds`);
    if (scrollReward > 0) rewardParts.push(`${scrollReward} Scroll`);
    if (materialRewards.length) rewardParts.push(resourceRewardText(materialRewards));
    if (puzzleRingDropped) rewardParts.push("Puzzle Vault Portal");
    toast(`Boss defeated. ${rewardParts.join(", ")} earned. Entering ${getRealm().name}.`);
    if (defeatedLevel >= MEGA_BOSS_SCROLL_REWARD_LEVEL) startLevel60Guide();
    renderResources();
    renderCrafting();
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

function activeDamageFloaterCount(collection) {
  return collection.reduce((count, floater) => {
    if (floater.kind !== "damage") return count;
    return floater.age < (floater.life ?? 1) ? count + 1 : count;
  }, 0);
}

function addFloater(floater) {
  if (floater?.kind === "damage" && activeDamageFloaterCount(floaters) >= MAX_DAMAGE_FLOATERS) return false;
  floaters.push(floater);
  return true;
}

function addMegaBossFloater(floater) {
  if (floater?.kind === "damage" && activeDamageFloaterCount(megaBossFloaters) >= MAX_DAMAGE_FLOATERS) return false;
  megaBossFloaters.push(floater);
  return true;
}

function damageEnemy(amount, x = null, y = null, options = {}) {
  applyEnemyDamage(amount);
  recordLifetimeDamage(amount);
  if (options.visible) {
    const hitPoint = x === null || y === null ? canvasCenter() : { x, y };
    const sprayAngle = -Math.PI / 2 + (Math.random() - 0.5) * (options.critical ? 1.65 : 1.42);
    const spraySpeed = options.critical ? 156 + Math.random() * 110 : 104 + Math.random() * 82;
    markActiveRender(options.renderDuration ?? (options.critical ? 2200 : 1600));
    if (!options.noPulse) hitPulse = 1;
    spawnHitBurst(hitPoint.x, hitPoint.y, options.critical);
    const label = options.critical ? `Crit! ${formatCritDamage(amount)}` : `${format(amount)}`;
    addFloater({
      kind: "damage",
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
      life: options.life,
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

function applyEnemyDamage(amount) {
  const damage = Number(amount);
  if (!Number.isFinite(damage) || damage <= 0) return;
  const maxHpLog = Number.isFinite(state.maxHpLog) ? state.maxHpLog : finiteLog10(state.maxHp, 0);
  const currentHpLog = Number.isFinite(state.enemyHpLog) ? state.enemyHpLog : finiteLog10(state.enemyHp, 0);
  if (maxHpLog < MAX_GAME_LOG10 && currentHpLog < MAX_GAME_LOG10) {
    state.enemyHp = Math.max(0, state.enemyHp - damage);
    state.enemyHpLog = state.enemyHp > 0 ? finiteLog10(state.enemyHp, 0) : -Infinity;
    return;
  }

  const damageLog = finiteLog10(damage, -Infinity);
  if (damageLog >= currentHpLog) {
    state.enemyHp = 0;
    state.enemyHpLog = -Infinity;
    return;
  }

  const difference = damageLog - currentHpLog;
  if (difference < -12) {
    state.enemyHp = numberFromLog10(currentHpLog, 1);
    state.enemyHpLog = currentHpLog;
    return;
  }

  const remainingRatio = 1 - Math.pow(10, difference);
  const nextLog = remainingRatio > 0 ? currentHpLog + Math.log10(remainingRatio) : -Infinity;
  state.enemyHp = numberFromLog10(nextLog, 0);
  state.enemyHpLog = state.enemyHp > 0 ? nextLog : -Infinity;
}

function upgradeCost(key) {
  const def = upgradeDefs.find((upgrade) => upgrade.key === key);
  if (!def || !upgradeUnlocked(def)) return Infinity;
  const level = state.upgrades[key] ?? 0;
  if (def.maxLevel && level >= def.maxLevel) return Infinity;
  if (def.linearCostStep) return Math.floor(def.linearCostStep * (level + 1));
  return Math.floor(def.baseCost * Math.pow(def.costGrowth, level));
}

function upgradeUnlocked(def) {
  return def.key !== "miner" || isDpsUnlocked();
}

function upgradeLockedText(def) {
  if (def.key === "miner") return "Defeat the first boss to unlock DPS.";
  return "Locked";
}

function buyUpgrade(key) {
  const def = upgradeDefs.find((upgrade) => upgrade.key === key);
  if (!def) return;
  if (!upgradeUnlocked(def)) {
    toast(upgradeLockedText(def));
    updateUI();
    return;
  }
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
  if (key === "miner") {
    markDpsGuideSeen();
    hideDpsGuidePrompt();
  }
  toast("Upgrade purchased.");
  updateUI();
  saveState();
}

function buffCost(key) {
  const def = buffDefs.find((buff) => buff.key === key);
  if (!def) return Infinity;
  if (def.costType === "diamond") return def.cost;
  if (def.baseRewardCostMultiplier) return activeEnemyBaseRewardCost(def.baseRewardCostMultiplier);
  const level = currentGlobalLevel();
  const normalReward = normalLevelRewardForCosts(level);
  if (def.key === "tapFrenzy") {
    const scaleRamp = Math.min(1, Math.max(0, (level - 1) / 30));
    const rewardScale = def.rewardScale + (def.lateRewardScale - def.rewardScale) * scaleRamp;
    const levelCost = Math.pow(Math.max(1, level), 1.05) * def.levelScale;
    return Math.max(1, Math.floor(def.baseCost + normalReward * rewardScale + levelCost));
  }
  const levelCost = Math.pow(Math.max(1, level), 1.36) * def.levelScale;
  const rewardCost = Math.max(8, normalReward) * def.rewardScale;
  return Math.max(1, Math.floor(def.baseCost + levelCost + rewardCost));
}

function canPayBuffCost(def, cost) {
  return def.costType === "diamond" ? state.diamonds >= cost : state.gold >= cost;
}

function spendBuffCost(def, cost) {
  if (!canPayBuffCost(def, cost)) return false;
  if (def.costType === "diamond") state.diamonds -= cost;
  else state.gold -= cost;
  return true;
}

function buyBuff(key) {
  const def = buffDefs.find((buff) => buff.key === key);
  if (!def) return;
  const now = Date.now();
  if (def.boostKey) {
    const cost = buffCost(key);
    if (!spendBuffCost(def, cost)) {
      toast(def.costType === "diamond" ? "Need more diamonds." : "Need more Ether.");
      return;
    }
    state.boosts[def.boostKey] = Math.max(now, state.boosts[def.boostKey] || 0) + def.duration;
    if (def.key === "tapperFrenzy") lastTapperFrenzyAutoAt = now;
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
  if (!spendBuffCost(def, cost)) {
    toast(def.costType === "diamond" ? "Need more diamonds." : "Need more Ether.");
    return;
  }
  const stackCount = Math.min(def.maxStacks, stacks.length + 1);
  let duration = def.duration;
  if (def.key === "tapFrenzy" || def.key === "flare") {
    duration = stackCount >= def.maxStacks
      ? def.empoweredDuration
      : Math.min(def.maxDuration, def.duration * stackCount);
  }
  const refreshedUntil = now + duration;
  state.boosts[def.stackKey] = Array.from({ length: stackCount }, () => refreshedUntil);
  if (def.key === "tapperFrenzy") lastTapperFrenzyAutoAt = now;
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

function rollBossGearQuality() {
  let roll = Math.random();
  for (const entry of bossGearQualityChances) {
    roll -= entry.chance;
    if (roll <= 0) return entry.quality;
  }
  return qualityByKey.common;
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

function gearAttributeCount(quality) {
  if (quality?.key === "common") return 1;
  if (quality?.key === "rare") return 2;
  return itemUpgradeStats.length;
}

function rollGearAttributeKeys(quality, rng = Math.random) {
  const available = [...itemUpgradeStats];
  const count = Math.min(available.length, gearAttributeCount(quality));
  const selected = [];
  while (selected.length < count && available.length) {
    const index = Math.min(available.length - 1, Math.floor(rng() * available.length));
    selected.push(available.splice(index, 1)[0]);
  }
  return selected;
}

function rollGearBonuses(quality, level = currentGlobalLevel(), rng = Math.random) {
  const scale = quality.statScale * rollRange(quality.minRoll, quality.maxRoll, rng);
  const levelPower = Math.max(1, level);
  const zoneBand = Math.floor((levelPower - 1) / LEVELS_PER_ZONE);
  const zoneSoftener = Math.sqrt(Math.max(0, zoneBand + 1));
  const percentBase = 0.002 + Math.pow(levelPower, 0.68) * 0.00075 + zoneSoftener * 0.00075;
  const possibleBonuses = {
    dpsMultiplier: Number((percentBase * 1.05 * scale).toFixed(4)),
    killNuggetMultiplier: Number((percentBase * 0.95 * scale).toFixed(4)),
    tapNuggetMultiplier: Number((percentBase * 0.78 * scale).toFixed(4))
  };
  return Object.fromEntries(
    rollGearAttributeKeys(quality, rng).map((stat) => [stat, possibleBonuses[stat]])
  );
}

function createItem(defKey, options = {}) {
  const def = itemDefs[defKey];
  if (!def) return null;
  const quality = qualityByKey[options.qualityKey] ?? options.quality ?? rollGearQuality();
  const item = {
    id: state.inventory.nextItemId,
    defKey,
    realm: state.realm % realms.length,
    quality: quality.key,
    source: options.source === "boss" || options.source === "crafted" ? options.source : "normal",
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
  const item = createItem(defKey, options);
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
  if (!GEAR_DROPS_ENABLED) return false;
  if (Math.random() >= NORMAL_GEAR_DROP_CHANCE) return false;
  const defKey = normalGearKeys[Math.floor(Math.random() * normalGearKeys.length)];
  if (Math.random() < NORMAL_MYTHIC_DROP_CHANCE) {
    return addItemToInventory(defKey, { ...options, quality: mythicQualityDef, source: "normal" });
  }
  return addItemToInventory(defKey, options);
}

function rollBossGearDrop(options = {}) {
  if (!GEAR_DROPS_ENABLED) return false;
  if (Math.random() >= BOSS_GEAR_DROP_CHANCE) return false;
  const defKey = normalGearKeys[Math.floor(Math.random() * normalGearKeys.length)];
  return addItemToInventory(defKey, { ...options, quality: rollBossGearQuality(), source: "boss" });
}

function activeMegaBossDef() {
  return megaBossDefs.find((def) => def.key === state.megaBoss?.activeKey) ?? null;
}

function selectedMegaBossDef() {
  selectedMegaBossIndex = Math.max(0, Math.min(highestVisibleMegaBossIndex(), selectedMegaBossIndex));
  return megaBossDefs[selectedMegaBossIndex] ?? megaBossDefs[0];
}

function megaBossUnlocked(def) {
  return Math.max(1, Math.floor(Number(state.maxLevel) || 1)) > def.unlockLevel;
}

function highestVisibleMegaBossIndex() {
  const highestUnlocked = megaBossDefs.reduce((highest, def, index) => megaBossUnlocked(def) ? index : highest, -1);
  return Math.max(0, highestUnlocked);
}

function megaBossAttempts(def) {
  normalizeMegaBossDaily();
  return Math.max(0, Math.min(MEGA_BOSS_DAILY_ATTEMPTS, Math.floor(Number(state.megaBoss.attempts?.[def.key]) || 0)));
}

function megaBossAttemptsLeft(def) {
  return Math.max(0, MEGA_BOSS_DAILY_ATTEMPTS - megaBossAttempts(def));
}

function megaBossFirstClearPending(def) {
  return Boolean(def && !state.megaBoss?.defeated?.[def.key]);
}

function bossScrollReward(level) {
  return level >= MEGA_BOSS_SCROLL_REWARD_LEVEL ? 1 : 0;
}

function megaBossMaxHpLog(def) {
  const level = Math.max(1, Math.floor(Number(def.unlockLevel) || 1));
  return enemyHpLogForLevel(level, bossHealthMultiplier(BOSS_HP_MULTIPLIER * def.hpMultiplier));
}

function megaBossEtherRewardLog(def) {
  const level = Math.max(1, Math.floor(Number(def.unlockLevel) || 1));
  const baseRewardLog = log10LinearTimesPower(ENEMY_REWARD_LINEAR_BASE + Math.max(0, level - 1) * ENEMY_REWARD_LINEAR_STEP, ENEMY_REWARD_GROWTH, Math.max(0, level - 1));
  return baseRewardLog + finiteLog10(nuggetMultiplier(), 0) + finiteLog10(def.etherMultiplier, 0);
}

function megaBossEtherReward(def) {
  return numberFromLog10(megaBossEtherRewardLog(def), 1);
}

function rollMegaBossGearQuality(def) {
  let roll = Math.random();
  const chances = [
    [mythicQualityDef, def.mythicChance],
    [qualityByKey.legendary, def.legendaryChance],
    [qualityByKey.epic, def.epicChance],
    [qualityByKey.rare, def.rareChance]
  ];
  for (const [quality, chance] of chances) {
    roll -= chance;
    if (roll <= 0) return quality;
  }
  return qualityByKey.rare;
}

function megaBossGearDropChances(def) {
  const mythic = Math.max(0, Number(def.mythicChance) || 0);
  const legendary = Math.max(0, Number(def.legendaryChance) || 0);
  const epic = Math.max(0, Number(def.epicChance) || 0);
  const rare = Math.max(0, Number(def.rareChance) || 0);
  return [
    ["Rare", rare],
    ["Epic", epic],
    ["Legendary", legendary],
    ["Mythic", mythic]
  ];
}

function formatDropChance(chance) {
  const percent = Math.max(0, Number(chance) || 0) * 100;
  if (percent >= 10) return `${Math.round(percent)}%`;
  if (percent >= 1) return `${Number(percent.toFixed(1)).toString()}%`;
  return `${Number(percent.toFixed(3)).toString()}%`;
}

function rollMegaBossGearDrop(def, options = {}) {
  if (!GEAR_DROPS_ENABLED) return false;
  const defKey = normalGearKeys[Math.floor(Math.random() * normalGearKeys.length)];
  return addItemToInventory(defKey, { ...options, quality: rollMegaBossGearQuality(def), source: "boss" });
}

function startMegaBoss(key) {
  const def = megaBossDefs.find((boss) => boss.key === key);
  if (!def) return;
  selectedMegaBossIndex = Math.max(0, megaBossDefs.findIndex((boss) => boss.key === key));
  normalizeMegaBossDaily();
  if (!megaBossUnlocked(def)) {
    toast(`${def.name} unlocks after defeating the level ${def.unlockLevel} boss.`);
    return;
  }
  if (activeMegaBossDef()) {
    toast("Finish the active Mega Boss first.");
    return;
  }
  const firstClearPending = megaBossFirstClearPending(def);
  if (!firstClearPending && megaBossAttemptsLeft(def) <= 0) {
    toast(`${def.name} has no attempts left today.`);
    return;
  }
  if (!firstClearPending && (state.megaBoss.scrolls ?? 0) < MEGA_BOSS_SCROLL_COST) {
    toast("You need a Scroll to start this Mega Boss.");
    return;
  }
  const hpLog = megaBossMaxHpLog(def);
  if (!firstClearPending) {
    state.megaBoss.scrolls = Math.max(0, state.megaBoss.scrolls - MEGA_BOSS_SCROLL_COST);
    state.megaBoss.attempts[def.key] = megaBossAttempts(def) + 1;
  }
  state.megaBoss.activeKey = def.key;
  state.megaBoss.maxHpLog = hpLog;
  state.megaBoss.hpLog = hpLog;
  state.megaBoss.maxHp = numberFromLog10(hpLog, 1);
  state.megaBoss.hp = state.megaBoss.maxHp;
  state.megaBoss.startedAt = Date.now();
  state.megaBoss.endsAt = state.megaBoss.startedAt + def.timeLimitMs;
  megaBossHitPulse = 0;
  megaBossFloaters = [];
  toast(`${def.name} awakened.`);
  renderMegaBosses();
  updateUI();
  syncMusicForEncounter();
  saveState();
  markActiveRender(2200);
}

function applyMegaBossDamage(amount) {
  const damage = Number(amount);
  if (!Number.isFinite(damage) || damage <= 0) return;
  const maxHpLog = Number.isFinite(state.megaBoss.maxHpLog) ? state.megaBoss.maxHpLog : finiteLog10(state.megaBoss.maxHp, 0);
  const currentHpLog = Number.isFinite(state.megaBoss.hpLog) ? state.megaBoss.hpLog : finiteLog10(state.megaBoss.hp, 0);
  if (maxHpLog < MAX_GAME_LOG10 && currentHpLog < MAX_GAME_LOG10) {
    state.megaBoss.hp = Math.max(0, state.megaBoss.hp - damage);
    state.megaBoss.hpLog = state.megaBoss.hp > 0 ? finiteLog10(state.megaBoss.hp, 0) : -Infinity;
    return;
  }
  const damageLog = finiteLog10(damage, -Infinity);
  if (damageLog >= currentHpLog) {
    state.megaBoss.hp = 0;
    state.megaBoss.hpLog = -Infinity;
    return;
  }
  const difference = damageLog - currentHpLog;
  if (difference < -12) {
    state.megaBoss.hp = numberFromLog10(currentHpLog, 1);
    state.megaBoss.hpLog = currentHpLog;
    return;
  }
  const remainingRatio = 1 - Math.pow(10, difference);
  const nextLog = remainingRatio > 0 ? currentHpLog + Math.log10(remainingRatio) : -Infinity;
  state.megaBoss.hp = numberFromLog10(nextLog, 0);
  state.megaBoss.hpLog = state.megaBoss.hp > 0 ? nextLog : -Infinity;
}

function damageMegaBoss(amount, x = null, y = null, options = {}) {
  const def = activeMegaBossDef();
  if (!def) return;
  const finalDamage = Number(amount) * megaBossRingDamageMultiplier(def);
  applyMegaBossDamage(finalDamage);
  recordLifetimeDamage(finalDamage);
  if (options.visible) {
    const rect = els.megaBossCanvas.getBoundingClientRect();
    const hitPoint = x === null || y === null ? { x: rect.width / 2, y: rect.height * 0.46 } : { x, y };
    megaBossHitPulse = 1;
    addMegaBossFloater({
      kind: "damage",
      text: options.critical ? `Crit! ${formatCritDamage(finalDamage)}` : `${format(finalDamage)}`,
      x: hitPoint.x,
      y: hitPoint.y - (options.critical ? 46 : 30),
      age: 0,
      color: options.critical ? "#ff493d" : "#ff785f",
      size: options.critical ? 42 : 30,
      rise: options.critical ? 172 : 126,
      vx: (Math.random() - 0.5) * (options.critical ? 150 : 96)
    });
    playTapSound(options.critical);
  }
  if (state.megaBoss.hp <= 0 || !Number.isFinite(state.megaBoss.hpLog)) {
    defeatMegaBoss(def);
    return;
  }
  updateMegaBossUI();
}

function defeatMegaBoss(def) {
  const reward = megaBossEtherReward(def);
  recordMegaBossKill(def.name);
  state.gold = floorGameNumber(state.gold + reward);
  trackDailyQuestProgress("ether", reward);
  const resourceRewards = [...rollMegaBossResourceRewards(def), ...rollMegaBossDustRewards()];
  grantInventoryResourceRewards(resourceRewards);
  const puzzleRingDropped = rollPuzzleRingDrop("megaBoss", currentGlobalLevel());
  state.megaBoss.defeated ??= {};
  state.megaBoss.defeated[def.key] = true;
  state.megaBoss.activeKey = "";
  state.megaBoss.hp = 0;
  state.megaBoss.hpLog = -Infinity;
  state.megaBoss.maxHp = 0;
  state.megaBoss.maxHpLog = 0;
  state.megaBoss.startedAt = 0;
  state.megaBoss.endsAt = 0;
  megaBossHitPulse = 0;
  megaBossFloaters.push({
    text: `+${formatLog10(megaBossEtherRewardLog(def))}`,
    x: els.megaBossCanvas.getBoundingClientRect().width / 2,
    y: els.megaBossCanvas.getBoundingClientRect().height * 0.62,
    age: 0,
    color: "#f6bd3a",
    size: 34,
    rise: 148,
    vx: 0
  });
  playDefeatSound(true, "stone");
  toast(`${def.name} defeated. ${resourceRewardText(resourceRewards)}${puzzleRingDropped ? ", Puzzle Vault Portal" : ""} claimed.`);
  renderMegaBosses();
  renderCrafting();
  updateUI();
  syncMusicForEncounter();
  saveState();
  markActiveRender(2600);
}

function failMegaBoss(def, reason = "Time ran out.") {
  state.megaBoss.activeKey = "";
  state.megaBoss.hp = 0;
  state.megaBoss.hpLog = -Infinity;
  state.megaBoss.maxHp = 0;
  state.megaBoss.maxHpLog = 0;
  state.megaBoss.startedAt = 0;
  state.megaBoss.endsAt = 0;
  megaBossHitPulse = 0;
  megaBossFloaters = [];
  toast(`${def.name} failed. ${reason}`);
  renderMegaBosses();
  updateUI();
  syncMusicForEncounter();
  saveState();
  markActiveRender(1800);
}

function fleeMegaBoss() {
  const def = activeMegaBossDef();
  if (!def) return;
  failMegaBoss(def, "You fled. The boss recovered to full health.");
}

function judgmentCooldownRemaining(now = Date.now()) {
  return Math.max(0, (state.cooldowns?.judgmentReadyAt || 0) - now);
}

function canUseJudgmentCooldown(now = Date.now()) {
  if (isPuzzleVaultActive()) return false;
  return !isBoss() && currentGlobalLevel() >= state.maxLevel && state.levelKills < state.levelGoal && judgmentCooldownRemaining(now) <= 0;
}

function updateCooldownButtons(now = Date.now()) {
  if (!els.judgmentCooldown) return;
  const remaining = judgmentCooldownRemaining(now);
  const cooling = remaining > 0;
  const available = canUseJudgmentCooldown(now);
  const progressLeft = cooling ? Math.min(1, remaining / judgmentCooldownDurationMs()) : 0;
  els.judgmentCooldown.disabled = !available;
  els.judgmentCooldown.classList.toggle("cooling", cooling);
  els.judgmentCooldown.classList.toggle("ready", available);
  els.judgmentCooldown.style.setProperty("--cooldown-deg", `${Math.round(progressLeft * 360)}deg`);
  els.judgmentCooldown.style.setProperty("--cooldown-gray", cooling ? progressLeft.toFixed(3) : available ? "0" : "1");
  els.judgmentCooldown.style.setProperty("--cooldown-brightness", cooling ? (1.12 - progressLeft * 0.32).toFixed(3) : available ? "1.12" : "0.8");
  els.judgmentCooldown.title = isPuzzleVaultActive()
    ? "Hammer of Judgement cannot be used in the Puzzle Vault."
    : isBoss()
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
  if (isPuzzleVaultActive()) {
    toast("Hammer of Judgement cannot be used in the Puzzle Vault.");
    return;
  }
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
  const judgedArchetype = enemy?.archetype ?? "blob";
  let reward = 0;
  const dustTotals = {};
  for (let i = 0; i < kills; i += 1) {
    reward += currentEnemyReward();
    addResourceRewardsToTotals(dustTotals, rollNormalCreatureDustRewards());
  }
  const dustRewards = Object.values(dustTotals);
  grantInventoryResourceRewards(dustRewards);
  state.gold = floorGameNumber(state.gold + reward);
  trackDailyQuestProgress("ether", reward);
  state.levelKills = state.levelGoal;
  state.cooldowns.judgmentReadyAt = now + judgmentCooldownDurationMs();
  incrementLifetimeStat("judgmentUses", 1);
  checkAchievements();
  spawnJudgmentEffect();
  spawnLootExplosion(reward, false, creatureLootCenter());
  playHammerImpactSound();
  setTimeout(() => playCreatureDeathSound(judgedArchetype, false), 90);
  floaters.push({ text: `+${format(reward)}`, x: canvasCenter().x, y: canvasCenter().y + 82, age: 0, color: "#f6bd3a" });

  const clearedLevel = currentGlobalLevel();
  const nextLevel = clearedLevel + 1;
  state.maxLevel = Math.max(state.maxLevel, nextLevel);
  ensureFreshLevelGoal();
  enterLevel(nextLevel);
  toast(dustRewards.length ? `Hammer of Judgement Activated! ${resourceRewardText(dustRewards)} dropped.` : "Hammer of Judgement Activated!");
  spawnEnemy();
  renderCrafting();
  updateCooldownButtons();
  saveState();
}

function setInventoryOpen(open) {
  if (open) {
    toast("Gear inventory has been retired.");
    return;
  }
  if (open) setCraftingOpen(false);
  if (!open) setItemDetailOpen(false);
  if (!open) hideItemTooltip();
  if (!open) {
    setMassDisenchantOpen(false);
    setMassDisenchantConfirmOpen(false);
  }
  if (els.inventoryDialog) els.inventoryDialog.hidden = !open;
  if (els.inventoryBackdrop) els.inventoryBackdrop.hidden = !open;
  els.inventoryToggle?.setAttribute("aria-expanded", String(open));
  if (open) {
    resetResourceSections();
    setInventoryView(activeInventoryView);
    renderInventory();
  }
}

function setInventoryView(view) {
  activeInventoryView = "gear";
  els.inventoryTabs.forEach((button) => {
    const active = button.dataset.inventoryView === activeInventoryView;
    button.classList.toggle("active", active);
    button.setAttribute("aria-selected", String(active));
  });
  if (els.gearInventoryView) els.gearInventoryView.hidden = activeInventoryView !== "gear";
  if (els.resourcesInventoryView) els.resourcesInventoryView.hidden = activeInventoryView !== "resources";
  if (activeInventoryView === "gear") syncGearSlotTabs();
}

function setCraftingOpen(open) {
  if (!els.craftingDialog || !els.craftingBackdrop) return;
  if (open) setInventoryOpen(false);
  if (!open) setCraftingMaterialsOpen(false);
  els.craftingDialog.hidden = !open;
  els.craftingBackdrop.hidden = !open;
  els.craftingToggle?.setAttribute("aria-expanded", String(open));
  els.openMegaBossCrafting?.setAttribute("aria-expanded", String(open));
  if (open) {
    resetResourceSections();
    resetCraftingRecipeSections();
    modalOpenedAt = performance.now();
    renderCrafting();
  }
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

function setMegaBossOpen(open) {
  if (!els.megaBossDialog || !els.megaBossBackdrop || !els.megaBossToggle) return;
  if (!open && activeMegaBossDef()) {
    fleeMegaBoss();
    return;
  }
  if (open && level60GuideState() === "megaBoss") setLevel60GuideState("done");
  if (!open) {
    setMegaBossWalkthroughOpen(false);
    setMegaBossRewardsOpen(false);
    setRingInventoryOpen(false);
    setRingDetailOpen(false);
  }
  els.megaBossDialog.hidden = !open;
  els.megaBossBackdrop.hidden = !open;
  els.megaBossToggle.setAttribute("aria-expanded", String(open));
  if (open) {
    modalOpenedAt = performance.now();
    normalizeMegaBossDaily();
    renderMegaBosses();
    renderMegaBossRing();
    maybeShowMegaBossWalkthrough();
    markActiveRender(2200);
  }
  updateMegaBossBattleMode();
  syncMusicForEncounter();
  scheduleLevel60GuideUpdate();
}

function updateMegaBossBattleMode() {
  const active = Boolean(activeMegaBossDef() && els.megaBossDialog && !els.megaBossDialog.hidden);
  els.megaBossDialog?.classList.toggle("battle-active", active);
  els.megaBossBackdrop?.classList.toggle("battle-active", active);
  if (els.megaBossFlee) els.megaBossFlee.hidden = !active;
  if (els.closeMegaBoss) els.closeMegaBoss.hidden = active;
}

function setMegaBossRewardsOpen(open, def = megaBossDefs[0]) {
  if (!els.megaBossRewardsDialog || !els.megaBossRewardsBackdrop) return;
  els.megaBossRewardsDialog.hidden = !open;
  els.megaBossRewardsBackdrop.hidden = !open;
  if (open) {
    modalOpenedAt = performance.now();
    renderMegaBossRewards(def);
  }
}

function setRingInventoryOpen(open) {
  if (!els.ringInventoryDialog || !els.ringInventoryBackdrop) return;
  if (!open) setRingDetailOpen(false);
  els.ringInventoryDialog.hidden = !open;
  els.ringInventoryBackdrop.hidden = !open;
  if (open) {
    modalOpenedAt = performance.now();
    renderRingInventory();
  }
}

function handleMegaBossRingSlotClick() {
  if (!equippedRing()) return;
  setRingDetailOpen(true, { equipped: true });
}

function selectedRingForDetail() {
  if (selectedRingEquipped) return equippedRing();
  if (selectedRingIndex === null) return null;
  return ringInventoryBag()[selectedRingIndex];
}

function ringDetailStatsMarkup(ring, def) {
  const typeMarkup = ringDamageTypeMarkup(def.damageType);
  const baseLine = `+${effectPercent(def.damageBonus, 0)} ${typeMarkup} against vulnerable Mega Bosses.`;
  if (!selectedRingEquipped) return baseLine;
  return `${baseLine}<br>${megaBossRingBonusText(selectedMegaBossDef())}.`;
}

function setRingDetailOpen(open, source = {}) {
  if (!els.ringDetailDialog || !els.ringDetailBackdrop) return;
  selectedRingEquipped = Boolean(open && source.equipped);
  selectedRingIndex = open && Number.isInteger(source.index) ? source.index : null;
  els.ringDetailDialog.hidden = !open;
  els.ringDetailBackdrop.hidden = !open;
  if (open) modalOpenedAt = performance.now();
  if (!open) return;

  const ring = selectedRingForDetail();
  const def = ringDefs[ring?.defKey];
  if (!ring || !def) {
    setRingDetailOpen(false);
    return;
  }

  const color = ringDamageTypeColor(def.damageType);
  els.ringDetailDialog.style.setProperty("--ring-color", color);
  els.ringDetailIcon?.style.setProperty("--ring-color", color);
  if (els.ringDetailIcon) els.ringDetailIcon.innerHTML = ringIconMarkup(ring, { large: true });
  if (els.ringDetailName) {
    els.ringDetailName.textContent = ringDisplayName(ring);
    els.ringDetailName.style.color = color;
  }
  if (els.ringDetailType) {
    els.ringDetailType.textContent = `${ringQualityLabel(def)} ${ringDamageTypeLabel(def.damageType)}`;
    els.ringDetailType.style.color = ringQualityColor(def);
  }
  if (els.ringDetailStats) els.ringDetailStats.innerHTML = ringDetailStatsMarkup(ring, def);
  if (els.ringDetailFlavor) els.ringDetailFlavor.textContent = def.flavor ?? "A crafted ring.";
  if (els.ringDetailAction) els.ringDetailAction.textContent = selectedRingEquipped ? "Unequip" : "Equip";
  if (els.ringDetailDisenchant) els.ringDetailDisenchant.textContent = `Disenchant: ${ringDisenchantRewardText(ring)}`;
}

function handleRingDetailAction() {
  if (performance.now() - modalOpenedAt < 160) return;
  if (selectedRingEquipped) {
    unequipRing();
    setRingDetailOpen(false);
    return;
  }
  if (selectedRingIndex === null) return;
  equipRingFromInventory(selectedRingIndex, { closeInventory: false });
  setRingDetailOpen(false);
}

function destroySelectedRingForGems() {
  if (performance.now() - modalOpenedAt < 160) return;
  const ring = selectedRingForDetail();
  if (!ring) return;
  const reward = ringDisenchantReward(ring);
  if (!reward) return;

  if (selectedRingEquipped) {
    ringInventoryState().equipped = null;
  } else if (selectedRingIndex !== null) {
    ringInventoryBag()[selectedRingIndex] = null;
  }
  grantInventoryResourceReward(reward);
  toast(`${ringDisplayName(ring)} disenchanted into ${resourceRewardText([reward])}.`);
  setRingDetailOpen(false);
  renderRingInventory();
  renderResources();
  renderCrafting();
  updateUI();
  saveState();
}

function openMegaBossCrafting() {
  setMegaBossRewardsOpen(false);
  setRingInventoryOpen(false);
  setCraftingOpen(true);
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
  const upgrade = isItemUpgrade(item);
  const upgradeClass = upgrade ? " is-upgrade" : "";
  els.fullBagItemIcon.className = `item-detail-icon quality-${quality.key} realm-${realm}${upgradeClass}`;
  els.fullBagItemIcon.innerHTML = itemIconMarkup(item, def, { upgrade });
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
  const upgrade = !selectedEquipmentSlot && isItemUpgrade(item);
  const upgradeClass = upgrade ? " is-upgrade" : "";
  els.itemDetailIcon.className = `item-detail-icon quality-${quality.key} realm-${realm}${upgradeClass}`;
  els.itemDetailIcon.innerHTML = itemIconMarkup(item, def, { upgrade });
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
  const { rewards } = disenchantItem(item);
  removeSelectedLooseItem();
  tryStorePendingOverflowItem();
  toast(`${itemDisplayName(item)} disenchanted into ${resourceRewardText(rewards)}.`);
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
  const zoneResource = zoneResourceByRealm[itemRealmIndex(item)];
  const rewards = [{ amount, resource }];
  if (zoneResource && Math.random() < ZONE_ITEM_DISENCHANT_CHANCE) rewards.push({ amount: 1, resource: zoneResource });
  for (const reward of rewards) {
    state.inventory.resources[reward.resource.key] = (state.inventory.resources[reward.resource.key] ?? 0) + reward.amount;
  }
  return { amount, resource, rewards };
}

function resourceRewardText(rewards) {
  return rewards.map((reward) => `${format(reward.amount)} ${reward.resource.label}`).join(", ");
}

function addResourceRewardsToTotals(totals, rewards) {
  for (const reward of rewards) {
    totals[reward.resource.key] ??= { amount: 0, resource: reward.resource };
    totals[reward.resource.key].amount += reward.amount;
  }
}

function resourceTotalsText(totals) {
  return Object.values(totals).map((reward) => `${format(reward.amount)} ${reward.resource.label}`).join(", ");
}

function renderMassDisenchantRewards(totals) {
  if (!els.massDisenchantRewards) return;
  const rewards = Object.values(totals);
  els.massDisenchantRewards.hidden = rewards.length === 0;
  els.massDisenchantRewards.innerHTML = rewards.map((reward) => `
    <div class="mass-disenchant-reward" style="--resource-color: ${reward.resource.color}">
      <span class="resource-icon" style="--resource-color: ${reward.resource.color}; --resource-icon: url('${reward.resource.icon}')" aria-hidden="true"></span>
      <span>${reward.resource.label}</span>
      <strong>${format(reward.amount)}</strong>
    </div>
  `).join("");
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
  if (els.massDisenchantConfirmTitle) els.massDisenchantConfirmTitle.textContent = "Are You Sure?";
  els.massDisenchantConfirmText.textContent = `Do you want to disenchant ${massDisenchantSummary(candidates)}?`;
  if (els.massDisenchantRewards) {
    els.massDisenchantRewards.hidden = true;
    els.massDisenchantRewards.innerHTML = "";
  }
  els.performMassDisenchant.hidden = false;
  els.cancelMassDisenchantConfirm.textContent = "Nevermind";
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
  const rewardTotals = {};
  for (const { slot, index, item } of candidates) {
    const { rewards } = disenchantItem(item);
    addResourceRewardsToTotals(rewardTotals, rewards);
    state.inventory.bags[slot][index] = null;
  }
  pendingMassDisenchantQualities = [];
  tryStorePendingOverflowItem();
  renderInventory();
  renderResources();
  saveState();
  if (els.massDisenchantConfirmTitle) els.massDisenchantConfirmTitle.textContent = "Received";
  els.massDisenchantConfirmText.textContent = `Disenchanted ${candidates.length} item${candidates.length === 1 ? "" : "s"} and received:`;
  renderMassDisenchantRewards(rewardTotals);
  els.performMassDisenchant.hidden = true;
  els.cancelMassDisenchantConfirm.textContent = "Done";
  setMassDisenchantConfirmOpen(true);
  toast(`Disenchanted ${candidates.length} items into ${resourceTotalsText(rewardTotals)}.`);
}

function destroyOverflowItemNow() {
  if (performance.now() - modalOpenedAt < 160) return;
  if (pendingOverflowItem) {
    const item = pendingOverflowItem;
    const { rewards } = disenchantItem(item);
    toast(`${itemDisplayName(item)} disenchanted into ${resourceRewardText(rewards)}.`);
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

function equipRingFromInventory(index, options = {}) {
  const { closeInventory = true } = options;
  const rings = ringInventoryState();
  const bag = rings.bag;
  const ring = bag[index];
  if (!ring) return;
  bag[index] = rings.equipped ?? null;
  rings.equipped = ring;
  toast(`${ringDisplayName(ring)} equipped.`);
  if (closeInventory) {
    setRingInventoryOpen(false);
  } else {
    renderRingInventory();
  }
  setRingDetailOpen(false);
  renderMegaBossRing();
  renderMegaBosses();
  updateUI();
  saveState();
}

function unequipRing() {
  const rings = ringInventoryState();
  const ring = rings.equipped;
  if (!ring) return;
  const bag = rings.bag;
  const index = bag.findIndex((bagItem) => !bagItem);
  if (index === -1) {
    toast("Ring inventory is full.");
    return;
  }
  rings.equipped = null;
  bag[index] = ring;
  toast(`${ringDisplayName(ring)} unequipped.`);
  renderMegaBossRing();
  renderRingInventory();
  renderMegaBosses();
  updateUI();
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
  const bonuses = itemStatBonuses(item);
  const parts = [];
  if (bonuses.dpsMultiplier) parts.push(`+${Math.round(bonuses.dpsMultiplier * 1000) / 10}% DPS`);
  if (bonuses.killNuggetMultiplier) parts.push(`+${Math.round(bonuses.killNuggetMultiplier * 1000) / 10}% Ether on kill`);
  if (bonuses.tapNuggetMultiplier) parts.push(`+${Math.round(bonuses.tapNuggetMultiplier * 1000) / 10}% tap Ether`);
  if (bonuses.nuggetMultiplier) parts.push(`+${Math.round(bonuses.nuggetMultiplier * 1000) / 10}% Ether`);
  return parts.join(", ");
}

function buyRelic(key) {
  if (key === "hammerReset") {
    normalizeHammerResetDaily();
    if (hammerResetUsesRemaining() <= 0) {
      toast("Executioner daily limit reached. Resets at midnight.");
      updateUI();
      saveState();
      return;
    }
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
    state.cooldowns.hammerResetUses = hammerResetUses() + 1;
    toast("Executioner reset Hammer of Judgement.");
    updateUI();
    saveState();
    return;
  }
  if (key === "gildedLens") {
    if (state.relics.gildedLens >= GILDED_MONOCLE_MAX_LEVEL) {
      toast("Gilded Monocle is already maxed.");
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
  return GILDED_MONOCLE_COST_STEP * (state.relics.gildedLens + 1);
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
  if (!def) return Infinity;
  const level = rebornUpgradeLevel(key);
  if (rebornUpgradeMaxed(def, level)) return Infinity;
  return level + 1;
}

function buyRebornUpgrade(key) {
  const def = rebornUpgradeDefs.find((upgrade) => upgrade.key === key);
  if (!def) return;
  if (rebornUpgradeMaxed(def)) {
    toast("Reborn upgrade is maxed.");
    return;
  }
  const cost = rebornUpgradeCost(key);
  if (state.reborn.sparks < cost) {
    toast("Need more Reborn Sparks.");
    return;
  }
  state.reborn.sparks -= cost;
  state.reborn.upgrades[key] += 1;
  if (key === "flyingHigh" && !bird) {
    const now = performance.now();
    nextBirdAt = Math.min(nextBirdAt, now + randomBirdDelay());
  }
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
    if (els.rebornRewardFormula) els.rebornRewardFormula.textContent = rebornFormulaText();
  }
  els.rebornDialog.hidden = !open;
  els.rebornBackdrop.hidden = !open;
}

function performReborn() {
  const reward = rebornReward();
  const keptDiamonds = state.diamonds;
  const keptRelics = { ...state.relics };
  const keptBossDiamondRewards = normalizeBossDiamondRewards(state.bossDiamondRewards);
  const keptDailies = normalizeDailyQuestState(state.dailies);
  const keptAchievements = normalizeAchievementState(state.achievements);
  const keptStats = normalizeLifetimeStats(state.stats, state.taps);
  const keptReborn = {
    sparks: floorGameNumber(state.reborn.sparks + reward),
    upgrades: { ...state.reborn.upgrades }
  };
  const keptCooldowns = {
    ...defaultState.cooldowns,
    hammerResetDay: state.cooldowns?.hammerResetDay ?? "",
    hammerResetUses: Math.max(0, Math.floor(Number(state.cooldowns?.hammerResetUses) || 0))
  };

  state = {
    ...defaultState,
    diamonds: keptDiamonds,
    purchasedGems: floorGameNumber(state.purchasedGems),
    bossDiamondRewards: keptBossDiamondRewards,
    dailies: keptDailies,
    achievements: keptAchievements,
    stats: keptStats,
    relics: keptRelics,
    reborn: keptReborn,
    inventory: normalizeInventory(null),
    megaBoss: normalizeMegaBossState(null),
    upgrades: { ...defaultState.upgrades },
    boosts: { ...defaultState.boosts },
    cooldowns: keptCooldowns,
    maxLevel: 1,
    levelKills: 0,
    levelGoal: randomMobGoal(),
    lastSeen: Date.now()
  };
  bossStartedAt = Date.now();
  floaters = [];
  lootParticles = [];
  bird = null;
  slashEffects = [];
  judgmentEffects = [];
  nextBirdAt = performance.now() + randomInitialBirdDelay();
  updateTapNuggetReadout(0, false);
  setRebornDialogOpen(false);
  spawnEnemy(false);
  trackDailyQuestProgress("reborns", 1);
  incrementLifetimeStat("lifetimeReborns", 1);
  checkAchievements();
  toast(`Reborn complete. Gained ${format(reward)} Reborn Sparks.`);
  updateUI();
  saveState();
}

async function purchaseSku(sku) {
  const product = shopProducts[sku];
  if (!product || purchasingSku) return;
  if (!window.AndroidBilling?.purchaseSku) {
    toast("Purchases are not available in this build.");
    return;
  }

  purchasingSku = sku;
  updateShopProducts();
  try {
    const result = await window.AndroidBilling.purchaseSku(sku);
    if (!result?.ok) {
      toast("Purchase was not completed.");
      return;
    }

    const grantedDiamonds = shopProductTotalDiamonds(product);
    state.diamonds = floorGameNumber(state.diamonds + grantedDiamonds);
    state.purchasedGems = floorGameNumber(state.purchasedGems + grantedDiamonds);
    if (product.boost) state.boosts.magnetUntil = Date.now() + 120_000;
    playGemSound();
    toast(`${product.toast} +${format(grantedDiamonds)} diamonds.`);
    updateUI();
    saveState();
  } catch {
    toast("Purchase was not completed.");
  } finally {
    purchasingSku = null;
    updateShopProducts();
  }
}

function shopProductBonusDiamonds(product) {
  const base = Math.max(0, Math.floor(Number(product?.diamonds) || 0));
  const percent = Math.max(0, Number(product?.bonusPercent) || 0);
  return Math.floor(base * (percent / 100));
}

function shopProductTotalDiamonds(product) {
  const base = Math.max(0, Math.floor(Number(product?.diamonds) || 0));
  return base + shopProductBonusDiamonds(product);
}

function updateUI() {
  if (normalizeHammerResetDaily()) saveState();
  if (normalizeMegaBossDaily()) saveState();
  if (normalizeDailyQuestsForCurrentTime()) saveState();
  const realm = getRealm();
  const puzzleVaultActive = isPuzzleVaultActive();
  document.body.classList.toggle("puzzle-vault-active", puzzleVaultActive);
  els.gold.textContent = format(state.gold);
  els.diamonds.textContent = format(state.diamonds);
  if (els.megaBossScrolls) els.megaBossScrolls.textContent = scrollCountText(state.megaBoss?.scrolls ?? 0);
  if (els.shopDiamondBalance) els.shopDiamondBalance.textContent = formatShopDiamonds(state.diamonds);
  updateShopProducts();
  updateMegaBossUI();
  renderMegaBossRing();
  if (els.rebornWallet) els.rebornWallet.textContent = format(state.reborn.sparks);
  els.rebornCurrency.textContent = format(state.reborn.sparks);
  if (els.rebornFormula) els.rebornFormula.textContent = rebornFormulaText();
  els.zoneLevel.textContent = puzzleVaultActive ? "Puzzle Vault" : realm.name;
  if (els.mobProgress) els.mobProgress.textContent = mobProgressText();
  if (els.puzzlePortalButton) {
    els.puzzlePortalButton.hidden = !isPuzzleVaultPortalReady();
    els.puzzlePortalButton.title = "Enter the Puzzle Vault";
  }
  scheduleGoblinPortalGuideUpdate();
  scheduleDailyGuideUpdate();
  scheduleJudgmentGuideUpdate();
  scheduleLevel60GuideUpdate();
  if (els.puzzleVaultFlee) {
    els.puzzleVaultFlee.hidden = !puzzleVaultActive;
  }
  if (els.bossTimer) {
    els.bossTimer.hidden = !(puzzleVaultActive || isBoss());
    if (puzzleVaultActive) els.bossTimer.textContent = formatTimer(puzzleVaultRemainingMs());
  }
  syncPuzzleVaultSummaryUI();
  updateEnemyNameDisplay(enemy?.name ?? "");
  updateHealthDisplay();
  if (els.tapCount) els.tapCount.textContent = format(state.taps);
  els.tapDamage.textContent = format(tapDamage());
  els.dps.textContent = format(dps());
  syncDevFields();
  if (els.bossCount) els.bossCount.textContent = format(state.bosses);
  pruneBuffStacks();
  updateBuffCards();
  updateRelicTimers();
  updateCooldownButtons();
  if (els.craftingDialog && !els.craftingDialog.hidden) renderCrafting();
  if (els.ringInventoryDialog && !els.ringInventoryDialog.hidden) renderRingInventory();
  if (els.dailiesDialog && !els.dailiesDialog.hidden) renderDailyQuests();
  else updateDailyQuestBadge();
  updateAchievementBadge();
  if (els.achievementsDialog && !els.achievementsDialog.hidden) {
    renderAchievements();
    renderStatistics();
  }
  const megaBossReady = megaBossUnlocked(megaBossDefs[0]);
  els.megaBossToggle?.classList.toggle("locked", !megaBossReady);
  els.megaBossToggle?.setAttribute(
    "aria-label",
    megaBossReady ? "Open mega bosses" : "Mega bosses unlock after defeating the level 60 boss"
  );
  if (els.megaBossToggle) {
    els.megaBossToggle.title = megaBossReady ? "Open Mega Bosses" : "Defeat the level 60 boss to awaken Mega Bosses.";
  }
  els.rebornButton.disabled = !canReborn();
  els.rebornButton.setAttribute("aria-disabled", String(!canReborn()));
  els.rebornButton.title = canReborn() ? "Trade this run for Reborn Sparks." : "Defeat your first boss to unlock Reborn.";
  document.querySelectorAll("[data-upgrade]").forEach((button) => {
    const key = button.dataset.upgrade;
    const def = upgradeDefs.find((upgrade) => upgrade.key === key);
    if (!def) return;
    const unlocked = upgradeUnlocked(def);
    const maxed = Boolean(def.maxLevel && state.upgrades[key] >= def.maxLevel);
    const cost = upgradeCost(key);
    button.disabled = !unlocked || maxed || state.gold < cost;
    button.classList.toggle("locked", !unlocked);
    button.title = unlocked ? "" : upgradeLockedText(def);
    button.setAttribute("aria-disabled", String(button.disabled));
    button.querySelector("[data-cost]").innerHTML = !unlocked ? "Locked" : maxed ? "Max" : etherCostMarkup(cost);
    button.querySelector("[data-level]").textContent = def.maxLevel ? `Lv ${state.upgrades[key]}/${def.maxLevel}` : `Lv ${state.upgrades[key]}`;
    button.querySelector("[data-upgrade-effect]").textContent = upgradeEffectText(def);
  });
  document.querySelectorAll("[data-relic]").forEach((button) => {
    const key = button.dataset.relic;
    if (key === "gildedLens") {
      const maxed = state.relics.gildedLens >= GILDED_MONOCLE_MAX_LEVEL;
      const cost = gildedLensCost();
      button.disabled = maxed || state.diamonds < cost;
      button.querySelector("[data-relic-level]").textContent = `Lv ${state.relics.gildedLens}/${GILDED_MONOCLE_MAX_LEVEL} - ${Math.round(nuggetCritChance() * 100)}%`;
      button.querySelector("[data-relic-effect]").textContent = `+${Math.round(GILDED_MONOCLE_CRIT_CHANCE_PER_LEVEL * 100)}% per level, current ${Math.round(nuggetCritChance() * 100)}% / max ${Math.round(GILDED_MONOCLE_MAX_LEVEL * GILDED_MONOCLE_CRIT_CHANCE_PER_LEVEL * 100)}%`;
      button.querySelector("[data-relic-cost]").innerHTML = maxed ? "Max" : diamondCostMarkup(cost);
      return;
    }
    if (key === "hammerReset") {
      const cooling = judgmentCooldownRemaining() > 0;
      const uses = hammerResetUses();
      const capped = uses >= HAMMER_RESET_DAILY_LIMIT;
      button.disabled = capped || !cooling || state.diamonds < HAMMER_RESET_COST;
      button.querySelector("[data-reset-status]").textContent = capped ? "Daily cap reached" : cooling ? `Cooldown: ${formatTimer(judgmentCooldownRemaining())}` : "Hammer ready";
      button.querySelector("[data-reset-limit]").textContent = `Daily uses: ${uses}/${HAMMER_RESET_DAILY_LIMIT} - resets at midnight`;
      button.querySelector("[data-reset-cost]").innerHTML = diamondCostMarkup(HAMMER_RESET_COST);
      return;
    }
  });
  document.querySelectorAll("[data-reborn-upgrade]").forEach((button) => {
    const key = button.dataset.rebornUpgrade;
    const def = rebornUpgradeDefs.find((upgrade) => upgrade.key === key);
    if (!def) return;
    const level = rebornUpgradeLevel(key);
    const maxed = rebornUpgradeMaxed(def, level);
    const cost = rebornUpgradeCost(key);
    button.disabled = maxed || state.reborn.sparks < cost;
    button.setAttribute("aria-disabled", String(button.disabled));
    button.querySelector("[data-reborn-level]").textContent = def.maxLevel ? `Lv ${level}/${def.maxLevel}` : `Lv ${level}`;
    button.querySelector("[data-reborn-effect]").textContent = rebornUpgradeEffectText(def);
    button.querySelector("[data-reborn-cost]").innerHTML = maxed ? "Max" : sparkCostMarkup(cost);
  });
  renderLevelTrack();
  scheduleDpsGuidePromptUpdate();
  fitNumberLabels();
}

function updateHealthDisplay() {
  const maxHpLog = Number.isFinite(state.maxHpLog) ? state.maxHpLog : finiteLog10(state.maxHp, 0);
  const enemyHpLog = Number.isFinite(state.enemyHpLog) ? state.enemyHpLog : finiteLog10(state.enemyHp, -Infinity);
  const hpPct = healthPercentFromLogs(enemyHpLog, maxHpLog);
  const healthHue = Math.round((hpPct / 100) * 120);
  els.healthFill.style.width = `${hpPct}%`;
  els.healthFill.style.background = `linear-gradient(90deg, hsl(${healthHue} 78% 48%), hsl(${Math.max(0, healthHue - 16)} 86% 58%))`;
  els.healthText.textContent = `${formatHealthValue(state.enemyHp, enemyHpLog)} / ${formatHealthValue(state.maxHp, maxHpLog)}`;
  fitNumberLabels();
}

function healthPercentFromLogs(enemyHpLog, maxHpLog) {
  if (!Number.isFinite(enemyHpLog)) return 0;
  if (!Number.isFinite(maxHpLog) || maxHpLog <= 0) return 100;
  if (enemyHpLog >= maxHpLog) return 100;
  return Math.max(0, Math.min(100, Math.pow(10, enemyHpLog - maxHpLog) * 100));
}

function formatHealthValue(value, logValue) {
  if (Number.isFinite(logValue) && logValue >= 20) return formatLog10(logValue);
  return format(Math.ceil(value));
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

function sparkCostMarkup(amount) {
  return `<span class="currency-icon spark"></span><span>${format(amount)}</span>`;
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
      button.disabled = !canPayBuffCost(def, cost);
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
    button.disabled = maxed || !canPayBuffCost(def, cost);
    button.classList.toggle("active", stacks > 0);
    button.classList.toggle("maxed", maxed);
    button.querySelector("[data-buff-stack]").textContent = stacks > 0 ? `${stacks}/${def.maxStacks} active` : `Max ${def.maxStacks} stacks`;
    button.querySelector("[data-buff-cost]").innerHTML = maxed ? "Max" : buffCostMarkup(def, cost);
    if (timer) {
      timer.textContent = stacks > 0 ? `Fades in ${formatTimer(nextExpire - now)}` : "Ready";
      timer.classList.toggle("active", stacks > 0);
    }
  });
}

function activeBuffStatusList(now = Date.now()) {
  const statuses = [];
  for (const def of buffDefs) {
    if (def.stackKey) {
      const stack = normalizeBuffStack(state.boosts?.[def.stackKey], now);
      if (!stack.length) continue;
      statuses.push({
        def,
        remaining: Math.max(0, stack[0] - now),
        stacks: stack.length
      });
      continue;
    }
    if (!def.boostKey) continue;
    const remaining = Math.max(0, (Number(state.boosts?.[def.boostKey]) || 0) - now);
    if (remaining <= 0) continue;
    statuses.push({ def, remaining, stacks: 1 });
  }
  return statuses;
}

function updateActiveBuffStrip(now = Date.now()) {
  if (!els.activeBuffStrip) return;
  const statuses = activeBuffStatusList(now);
  els.activeBuffStrip.hidden = statuses.length === 0;
  els.activeBuffStrip.innerHTML = statuses.map(({ def, remaining, stacks }) => {
    const economyClass = def.costType === "diamond" ? "diamond-buff" : "ether-buff";
    const stackText = def.stackKey && stacks > 1 ? `<span class="active-buff-count">x${stacks}</span>` : "";
    return `
      <div class="active-buff-item ${economyClass}" title="${def.name}: ${formatTimer(remaining)} remaining" aria-label="${def.name}, ${formatTimer(remaining)} remaining">
        <span class="active-buff-icon-wrap" aria-hidden="true">
          <span class="active-buff-flame"></span>
          <span class="active-buff-art active-buff-art-${def.key}"></span>
          ${stackText}
        </span>
        <span class="active-buff-time">${formatTimer(remaining)}</span>
      </div>
    `;
  }).join("");
}

function mobProgressText() {
  if (isPuzzleVaultActive()) {
    if (isPuzzleVaultBoss()) return "Goblin King";
    return `Vault goblins left: ${Math.max(0, state.puzzleVault.levelGoal - state.puzzleVault.levelKills)} / ${state.puzzleVault.levelGoal}`;
  }
  if (isBoss()) return "Boss battle";
  const current = currentGlobalLevel();
  if (current < state.maxLevel) return "Farming level";
  return `Mobs left: ${Math.max(0, state.levelGoal - state.levelKills)} / ${state.levelGoal}`;
}

function renderLevelTrack() {
  if (isPuzzleVaultActive()) {
    renderPuzzleVaultLevelTrack();
    return;
  }
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

function renderPuzzleVaultLevelTrack() {
  const kills = Math.min(
    PUZZLE_VAULT_GOBLINS_PER_RUN,
    Math.max(0, Math.floor(Number(state.puzzleVault?.levelKills) || 0))
  );
  els.levelTrack.innerHTML = "";
  const button = document.createElement("button");
  button.type = "button";
  button.className = "level-node puzzle-vault-node current unlocked";
  button.disabled = true;
  button.setAttribute("aria-label", `Puzzle Vault run, ${kills} of ${PUZZLE_VAULT_GOBLINS_PER_RUN} goblins defeated`);

  const art = document.createElement("span");
  art.className = "level-node-art";
  art.style.backgroundImage = `url("${puzzleVaultArt.levelIcon}")`;
  button.append(art);

  const label = document.createElement("span");
  label.className = "puzzle-vault-node-label";
  label.textContent = "Puzzle Vault";
  button.append(label);

  const killCounter = document.createElement("span");
  killCounter.className = "puzzle-vault-kill-counter";
  const killIcon = document.createElement("span");
  killIcon.className = "puzzle-vault-kill-icon";
  killIcon.style.backgroundImage = `url("${puzzleVaultArt.goblinCounterIcon}")`;
  killIcon.setAttribute("aria-hidden", "true");
  const killText = document.createElement("span");
  killText.textContent = `${kills}/${PUZZLE_VAULT_GOBLINS_PER_RUN}`;
  killCounter.append(killIcon, killText);
  button.append(killCounter);
  els.levelTrack.append(button);
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

function trimDecimals(value, decimals = 2) {
  const safeDecimals = Math.max(0, Math.min(2, Math.floor(Number(decimals) || 0)));
  const number = Number(value);
  if (!Number.isFinite(number)) return "0";
  const rounded = Math.round(number * Math.pow(10, safeDecimals)) / Math.pow(10, safeDecimals);
  const text = rounded.toFixed(safeDecimals);
  return text.includes(".") ? text.replace(/\.?0+$/, "") : text;
}

function format(value) {
  const number = Number(value);
  if (!Number.isFinite(number)) return number > 0 ? formatLog10(MAX_GAME_LOG10) : "0";
  const sign = number < 0 ? "-" : "";
  const absolute = Math.abs(number);
  if (absolute < 1000) return `${sign}${trimDecimals(absolute, Number.isInteger(absolute) ? 0 : 2)}`;
  if (absolute >= 1e20) {
    return `${sign}${formatLog10(Math.log10(absolute))}`;
  }

  const units = ["K", "M", "B", "T", "Qa", "Qi"];
  const unitIndex = Math.min(units.length - 1, Math.floor(Math.log10(absolute) / 3) - 1);
  const scaled = absolute / Math.pow(1000, unitIndex + 1);
  return `${sign}${trimDecimals(scaled, 2)}${units[unitIndex]}`;
}

function formatAchievementValue(value) {
  const number = Math.max(0, Math.floor(Number(value) || 0));
  if (number < 10000) return number.toLocaleString("en-US");
  if (number >= 1e20) return format(number);
  const units = ["K", "M", "B", "T", "Qa", "Qi"];
  const unitIndex = Math.min(units.length - 1, Math.floor(Math.log10(number) / 3) - 1);
  const divisor = Math.pow(1000, unitIndex + 1);
  return `${Math.floor(number / divisor)}${units[unitIndex]}`;
}

function formatShopDiamonds(value) {
  const number = Math.max(0, Math.floor(Number(value) || 0));
  return number.toLocaleString("en-US");
}

function formatLog10(logValue) {
  if (!Number.isFinite(logValue)) return "0";
  if (logValue < 20) return format(Math.pow(10, logValue));
  let exponent = Math.floor(logValue);
  let mantissa = Math.pow(10, logValue - exponent);
  mantissa = Math.round(mantissa * 100) / 100;
  if (mantissa >= 10) {
    mantissa /= 10;
    exponent += 1;
  }
  return `${trimDecimals(mantissa, 2)}x10^${exponent}`;
}

function formatTimer(ms) {
  const total = Math.max(0, Math.ceil(ms / 1000));
  if (total < 60) return `${total}s`;
  const minutes = Math.floor(total / 60);
  const seconds = total % 60;
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

function numberFitElements() {
  return [
    els.gold,
    els.rebornWallet,
    els.diamonds,
    els.tapDamage,
    els.dps,
    els.healthText,
    els.shopDiamondBalance,
    els.megaBossScrolls,
    els.megaBossHealthText,
    els.rebornCurrency,
    els.rebornReward
  ].filter(Boolean);
}

function setupNumberFitElements() {
  for (const element of numberFitElements()) {
    element.classList.add("number-fit");
  }
}

function numberFitAvailableWidth(element) {
  const parent = element.parentElement;
  if (!parent) return element.clientWidth;
  const parentStyle = getComputedStyle(parent);
  let available = parent.clientWidth - parseFloat(parentStyle.paddingLeft || "0") - parseFloat(parentStyle.paddingRight || "0");
  const icon = parent.querySelector(".currency-icon");
  if (icon && icon !== element) {
    const gap = parseFloat(parentStyle.columnGap || parentStyle.gap || "0") || 0;
    available -= icon.getBoundingClientRect().width + gap;
  }
  return Math.max(1, available);
}

function fitNumberLabels() {
  if (numberFitFrame) return;
  numberFitFrame = requestAnimationFrame(() => {
    numberFitFrame = 0;
    for (const element of numberFitElements()) {
      element.style.fontSize = "";
      const baseSize = parseFloat(getComputedStyle(element).fontSize) || 14;
      const minSize = Number(element.dataset.minFontSize) || 8;
      const available = numberFitAvailableWidth(element);
      if (!available || element.scrollWidth <= available) continue;
      const nextSize = Math.max(minSize, Math.floor(baseSize * (available / element.scrollWidth) * 100) / 100);
      element.style.fontSize = `${nextSize}px`;
    }
  });
}

function toast(message, options = {}) {
  const achievement = options.achievement ? achievementDef(options.achievement.key) ?? options.achievement : null;
  els.toast.classList.toggle("achievement-toast", Boolean(achievement));
  if (achievement) {
    els.toast.innerHTML = `
      <img class="achievement-toast-icon" src="${achievement.icon}" alt="" aria-hidden="true" />
      <span class="achievement-toast-body">
        <span class="achievement-toast-kicker">Achievement Earned!</span>
        <span class="achievement-toast-name">${achievement.name}</span>
      </span>
      <span class="achievement-toast-points">${achievement.points}</span>
    `;
  } else {
    els.toast.textContent = message;
  }
  els.toast.classList.add("show");
  clearTimeout(toast.timeout);
  toast.timeout = setTimeout(() => els.toast.classList.remove("show"), 3000);
}

function updateRelicTimers() {
  const now = Date.now();
  if (pruneBuffStacks(now)) saveState();
  if (normalizeDailyQuestsForCurrentTime()) {
    renderDailyQuests();
    saveState();
  }
  updateBuffCards(now);
  updateActiveBuffStrip(now);
  updateCooldownButtons(now);
  if (els.tapDamage) els.tapDamage.textContent = format(tapDamage());
  const timers = {
    flare: normalizeBuffStack(state.boosts?.flareStacks, now)[0] ?? state.boosts.flareUntil,
    magnet: state.boosts.magnetUntil,
    tapperFrenzy: normalizeBuffStack(state.boosts?.tapperFrenzyStacks, now)[0] ?? state.boosts.tapperFrenzyUntil
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
  if (audio.context && audio.context.state !== "closed") return;
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) {
    audio.sfxVolume = 0;
    updateVolumeControls();
    return;
  }
  audio.context = new AudioContext();
  audio.master = audio.context.createGain();
  audio.limiter = audio.context.createDynamicsCompressor();
  audio.sfx = audio.context.createGain();
  audio.sfx.gain.value = audio.sfxVolume * 0.72;
  audio.master.gain.value = 1;
  audio.limiter.threshold.value = -8;
  audio.limiter.knee.value = 18;
  audio.limiter.ratio.value = 8;
  audio.limiter.attack.value = 0.004;
  audio.limiter.release.value = 0.12;
  audio.sfx.connect(audio.master);
  audio.master.connect(audio.limiter);
  audio.limiter.connect(audio.context.destination);
}

function primeSfxOutput() {
  if (!audio.context || !audio.sfx) return;
  const now = audio.context.currentTime;
  const osc = audio.context.createOscillator();
  const amp = audio.context.createGain();
  osc.frequency.setValueAtTime(24, now);
  amp.gain.setValueAtTime(0.0001, now);
  amp.gain.exponentialRampToValueAtTime(0.0002, now + 0.01);
  amp.gain.exponentialRampToValueAtTime(0.0001, now + 0.025);
  osc.connect(amp);
  amp.connect(audio.sfx);
  osc.start(now);
  osc.stop(now + 0.04);
}

function getNoiseBuffer() {
  if (!audio.context) return null;
  if (audio.noiseBuffer) return audio.noiseBuffer;
  const length = Math.max(1, Math.floor(audio.context.sampleRate * 0.8));
  const buffer = audio.context.createBuffer(1, length, audio.context.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < length; i += 1) {
    data[i] = Math.random() * 2 - 1;
  }
  audio.noiseBuffer = buffer;
  return buffer;
}

function isAppAudioAllowed() {
  return appAudioActive && document.visibilityState !== "hidden";
}

function pauseAppAudioForBackground() {
  appAudioActive = false;
  els.bgMusic?.pause();
  if (audio.context?.state === "running") audio.context.suspend().catch(() => {});
}

function resumeAppAudioForForeground() {
  appAudioActive = true;
  if (audio.context?.state === "suspended" && audio.unlocked) audio.context.resume().catch(() => {});
  if (audio.unlocked && audio.musicVolume > 0) startBackgroundMusic();
  lastFrame = performance.now();
  lastRenderAt = 0;
  markActiveRender(900);
  scheduleNextTick();
}

function unlockAudio() {
  if (!isAppAudioAllowed()) return Promise.resolve(false);
  setupAudio();
  if (!audio.context) return Promise.resolve(false);
  const ready =
    audio.context.state === "suspended"
      ? audio.context.resume().then(() => true).catch(() => false)
      : Promise.resolve(true);
  return ready.then((ok) => {
    if (!ok) return false;
    audio.unlocked = true;
    primeSfxOutput();
    startBackgroundMusic();
    return true;
  });
}

function startBackgroundMusic() {
  if (!els.bgMusic) return;
  if (!isAppAudioAllowed()) {
    els.bgMusic.pause();
    return;
  }
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
  if (isPuzzleVaultActive()) return puzzleVaultMusicTrack;
  const megaDef = !els.megaBossDialog?.hidden ? activeMegaBossDef() : null;
  if (megaDef?.music) return megaDef.music;
  if (isBoss()) return realmBossMusicTracks[state.realm % realms.length] ?? bossMusicTrack;
  return realmMusicTracks[state.realm % realms.length];
}

function syncMusicForEncounter() {
  if (!els.bgMusic) return;
  if (!isAppAudioAllowed()) {
    els.bgMusic.pause();
    return;
  }
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
  els.bgMusic.loop = isPuzzleVaultActive() || !activeMegaBossDef() || els.megaBossDialog?.hidden;
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
  const megaDef = !els.megaBossDialog?.hidden ? activeMegaBossDef() : null;
  if (megaDef) {
    failMegaBoss(megaDef, "Time ran out.");
    return;
  }
  audio.musicMode = "";
  startBackgroundMusic();
}

function setSfxVolume(value) {
  audio.sfxVolume = Math.max(0, Math.min(1, value));
  localStorage.setItem("nugget-realms-sfx-volume", String(audio.sfxVolume));
  if (audio.sfx && audio.context) {
    audio.sfx.gain.setTargetAtTime(audio.sfxVolume * 0.72, audio.context.currentTime, 0.02);
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

function setOptionsView(view = "audio") {
  const selected = view === "dropRates" ? "dropRates" : "audio";
  els.optionsTabs.forEach((button) => {
    const active = button.dataset.optionsTab === selected;
    button.classList.toggle("active", active);
    button.setAttribute("aria-selected", String(active));
  });
  els.optionsPanes.forEach((pane) => {
    const active = pane.dataset.optionsPane === selected;
    pane.hidden = !active;
    pane.classList.toggle("active", active);
  });
}

function setOptionsOpen(open) {
  if (!open) setProfileOpen(false);
  els.optionsDialog.hidden = !open;
  els.optionsBackdrop.hidden = !open;
  els.optionsToggle.setAttribute("aria-expanded", String(open));
  if (open) setOptionsView("audio");
}

function avatarOptionById(id) {
  return PROFILE_AVATARS.find((avatar) => avatar.id === id) ?? PROFILE_AVATARS[0];
}

function sanitizePlayerName(name) {
  return String(name ?? "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, PLAYER_NAME_MAX_LENGTH);
}

function loadPlayerProfile() {
  const fallback = { name: DEFAULT_PLAYER_NAME, avatarId: PROFILE_AVATARS[0].id, authMode: "local" };
  try {
    const parsed = JSON.parse(localStorage.getItem(PROFILE_KEY) || "null");
    if (!parsed || typeof parsed !== "object") return fallback;
    const name = sanitizePlayerName(parsed.name) || DEFAULT_PLAYER_NAME;
    const avatarId = avatarOptionById(parsed.avatarId).id;
    const authMode = parsed.authMode === "google" ? "google" : "local";
    return { name, avatarId, authMode };
  } catch {
    return fallback;
  }
}

function savePlayerProfile() {
  try {
    localStorage.setItem(PROFILE_KEY, JSON.stringify({ ...playerProfile, updatedAt: Date.now() }));
  } catch {}
}

function renderPlayerProfile() {
  const avatar = avatarOptionById(playerProfile.avatarId);
  if (els.optionsAvatarImage) {
    els.optionsAvatarImage.src = avatar.src;
    els.optionsAvatarImage.alt = "";
  }
  if (els.optionsAvatarButton) {
    els.optionsAvatarButton.setAttribute("aria-label", `Open avatar selector for ${playerProfile.name}`);
    els.optionsAvatarButton.title = playerProfile.name;
  }
}

function renderProfileAvatarGrid() {
  if (!els.profileAvatarGrid) return;
  els.profileAvatarGrid.innerHTML = "";
  PROFILE_AVATARS.forEach((avatar) => {
    const button = document.createElement("button");
    button.className = "profile-avatar-choice";
    button.type = "button";
    button.dataset.avatarId = avatar.id;
    button.setAttribute("aria-label", avatar.label);
    button.setAttribute("aria-pressed", String(avatar.id === profileDraftAvatarId));
    button.classList.toggle("selected", avatar.id === profileDraftAvatarId);
    const image = document.createElement("img");
    image.src = avatar.src;
    image.alt = "";
    button.appendChild(image);
    els.profileAvatarGrid.appendChild(button);
  });
}

function setProfileMode(mode = "local") {
  const selected = mode === "google" ? "google" : "local";
  els.profileModeButtons?.forEach((button) => {
    const active = button.dataset.profileMode === selected;
    button.classList.toggle("active", active);
    button.setAttribute("aria-selected", String(active));
  });
  els.profilePanels?.forEach((panel) => {
    const active = panel.dataset.profilePanel === selected;
    panel.hidden = !active;
    panel.classList.toggle("active", active);
  });
}

function setProfileOpen(open) {
  if (!els.profileDialog || !els.profileBackdrop) return;
  els.profileDialog.hidden = !open;
  els.profileBackdrop.hidden = !open;
  if (!open) return;
  profileDraftAvatarId = playerProfile.avatarId;
  if (els.profileNameInput) els.profileNameInput.value = playerProfile.name;
  renderProfileAvatarGrid();
  setProfileMode(playerProfile.authMode === "google" ? "google" : "local");
  markActiveRender(900);
}

function selectProfileAvatar(avatarId) {
  profileDraftAvatarId = avatarOptionById(avatarId).id;
  renderProfileAvatarGrid();
}

function saveProfileSelection() {
  playerProfile = {
    name: sanitizePlayerName(els.profileNameInput?.value) || DEFAULT_PLAYER_NAME,
    avatarId: avatarOptionById(profileDraftAvatarId).id,
    authMode: "local"
  };
  savePlayerProfile();
  renderPlayerProfile();
  setProfileOpen(false);
  toast("Profile saved.");
}

function handleGoogleSignIn() {
  playerProfile = { ...playerProfile, authMode: "google" };
  savePlayerProfile();
  const bridge = window.AndroidGoogleSignIn || window.AndroidGoogleAuth || window.GoogleSignInBridge;
  if (bridge && typeof bridge.signIn === "function") {
    try {
      const result = bridge.signIn();
      if (result && typeof result.then === "function") {
        result.catch(() => toast("Google sign in could not be completed."));
      }
      toast("Opening Google sign in...");
      return;
    } catch {}
  }
  toast("Google sign in is not connected in this build yet.");
}

function playTone({ frequency, duration = 0.08, type = "sine", gain = 0.12, destination = null, slideTo = null }) {
  if (!isAppAudioAllowed()) return;
  if (audio.sfxVolume <= 0) return;
  setupAudio();
  const output = destination ?? audio.sfx;
  if (!audio.context || !output) return;

  const schedule = () => {
    const now = audio.context.currentTime + 0.006;
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

function playNoiseBurst({ duration = 0.12, gain = 0.08, filterType = "lowpass", frequency = 900, slideTo = null, delay = 0, playbackRate = 1 }) {
  if (!isAppAudioAllowed()) return;
  if (audio.sfxVolume <= 0) return;
  setupAudio();
  if (!audio.context || !audio.sfx) return;
  const buffer = getNoiseBuffer();
  if (!buffer) return;

  const schedule = () => {
    const start = audio.context.currentTime + 0.006 + delay;
    const source = audio.context.createBufferSource();
    const filter = audio.context.createBiquadFilter();
    const amp = audio.context.createGain();
    source.buffer = buffer;
    source.playbackRate.setValueAtTime(playbackRate, start);
    filter.type = filterType;
    filter.frequency.setValueAtTime(frequency, start);
    if (slideTo) filter.frequency.exponentialRampToValueAtTime(slideTo, start + duration);
    filter.Q.setValueAtTime(filterType === "bandpass" ? 2.2 : 0.7, start);
    amp.gain.setValueAtTime(0.0001, start);
    amp.gain.exponentialRampToValueAtTime(gain, start + 0.006);
    amp.gain.exponentialRampToValueAtTime(0.0001, start + duration);
    source.connect(filter);
    filter.connect(amp);
    amp.connect(audio.sfx);
    source.start(start);
    source.stop(start + duration + 0.02);
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
  if (IS_ANDROID) {
    const now = performance.now();
    const minInterval = critical ? 70 : 95;
    if (now - lastTapSoundAt < minInterval) return;
    lastTapSoundAt = now;
  }
  playHammerStrikeSound(critical);
}

function playDefeatSound(boss, archetype = enemy?.archetype ?? "blob") {
  setTimeout(() => playCreatureDeathSound(archetype, boss), 85);
}

function playHammerStrikeSound(critical = false) {
  const power = critical ? 1.18 : 1;
  playNoiseBurst({ duration: 0.055, gain: 0.18 * power, filterType: "lowpass", frequency: 1250, slideTo: 360, playbackRate: 0.78 });
  playTone({ frequency: 178, slideTo: 112, duration: 0.105, type: "triangle", gain: 0.105 * power });
  setTimeout(() => playTone({ frequency: 96, slideTo: 64, duration: 0.14, type: "sine", gain: 0.06 * power }), 16);
  setTimeout(() => playNoiseBurst({ duration: 0.11, gain: 0.052 * power, filterType: "lowpass", frequency: 310, slideTo: 135, playbackRate: 0.48 }), 28);
  if (critical) {
    setTimeout(() => playTone({ frequency: 244, slideTo: 140, duration: 0.09, type: "triangle", gain: 0.035 }), 44);
  }
}

function playDeathCryVoice({
  start,
  end,
  duration = 0.3,
  type = "sawtooth",
  gain = 0.09,
  formant = 900,
  formantEnd = 420,
  noiseGain = 0.035,
  playbackRate = 0.8,
  delay = 0,
  harmonics = 1,
  rasp = 1
}) {
  const offset = Math.max(0, delay);
  const trigger = () => {
    playTone({ frequency: start, slideTo: end, duration, type, gain });
    if (harmonics > 0) {
      setTimeout(() => playTone({ frequency: start * 1.47, slideTo: Math.max(24, end * 1.18), duration: duration * 0.82, type: "triangle", gain: gain * 0.36 * harmonics }), 18);
    }
    if (harmonics > 1) {
      setTimeout(() => playTone({ frequency: start * 0.52, slideTo: Math.max(22, end * 0.58), duration: duration * 1.05, type: "sine", gain: gain * 0.32 }), 26);
    }
    playNoiseBurst({ duration: duration * 0.88, gain: noiseGain * rasp, filterType: "bandpass", frequency: formant, slideTo: formantEnd, delay: 0.012, playbackRate });
  };
  if (offset > 0) setTimeout(trigger, offset);
  else trigger();
}

function playBodyThud(power = 1, delay = 0) {
  setTimeout(() => {
    playNoiseBurst({ duration: 0.24, gain: 0.16 * power, filterType: "lowpass", frequency: 520, slideTo: 58, playbackRate: 0.36 });
    playTone({ frequency: 92, slideTo: 36, duration: 0.24, type: "triangle", gain: 0.095 * power });
  }, delay);
}

function playBoneCrack(power = 1, delay = 0) {
  setTimeout(() => {
    playNoiseBurst({ duration: 0.045, gain: 0.16 * power, filterType: "bandpass", frequency: 3600, slideTo: 1250, playbackRate: 2.8 });
    setTimeout(() => playNoiseBurst({ duration: 0.052, gain: 0.088 * power, filterType: "highpass", frequency: 2600, slideTo: 760, playbackRate: 1.9 }), 28);
  }, delay);
}

function playWetImpact(power = 1, delay = 0) {
  setTimeout(() => {
    playNoiseBurst({ duration: 0.22, gain: 0.15 * power, filterType: "lowpass", frequency: 760, slideTo: 105, playbackRate: 0.44 });
    setTimeout(() => playNoiseBurst({ duration: 0.11, gain: 0.095 * power, filterType: "bandpass", frequency: 1220, slideTo: 260, playbackRate: 0.68 }), 54);
  }, delay);
}

function playAirRush(power = 1, delay = 0) {
  setTimeout(() => {
    playNoiseBurst({ duration: 0.22, gain: 0.11 * power, filterType: "highpass", frequency: 3600, slideTo: 780, playbackRate: 1.75 });
  }, delay);
}

function playBreathCollapse(power = 1, delay = 0) {
  setTimeout(() => {
    playNoiseBurst({ duration: 0.32, gain: 0.105 * power, filterType: "bandpass", frequency: 880, slideTo: 210, playbackRate: 0.62 });
    setTimeout(() => playNoiseBurst({ duration: 0.18, gain: 0.052 * power, filterType: "lowpass", frequency: 360, slideTo: 90, playbackRate: 0.42 }), 135);
  }, delay);
}

function playLowWeight(power = 1, delay = 0, frequency = 72) {
  setTimeout(() => {
    playTone({ frequency, slideTo: Math.max(24, frequency * 0.42), duration: 0.18, type: "sine", gain: 0.045 * power });
  }, delay);
}

function playDryScrape(power = 1, delay = 0) {
  setTimeout(() => {
    playNoiseBurst({ duration: 0.18, gain: 0.075 * power, filterType: "bandpass", frequency: 1800, slideTo: 520, playbackRate: 1.15 });
    setTimeout(() => playNoiseBurst({ duration: 0.08, gain: 0.04 * power, filterType: "highpass", frequency: 2400, slideTo: 900, playbackRate: 1.6 }), 86);
  }, delay);
}

function playSmallChitter(power = 1, delay = 0) {
  setTimeout(() => {
    playNoiseBurst({ duration: 0.035, gain: 0.07 * power, filterType: "bandpass", frequency: 4200, slideTo: 2600, playbackRate: 2.8 });
    setTimeout(() => playNoiseBurst({ duration: 0.028, gain: 0.045 * power, filterType: "bandpass", frequency: 3600, slideTo: 2100, playbackRate: 3.1 }), 42);
  }, delay);
}

function playCreatureDeathSound(archetype = "blob", boss = false) {
  const power = boss ? 1.65 : 1;
  if (archetype === "fungus") {
    playWetImpact(power * 0.95, 0);
    playBreathCollapse(power * 0.75, 80);
    playDryScrape(power * 0.45, 190);
  } else if (archetype === "insect") {
    playBoneCrack(power * 0.85, 0);
    playSmallChitter(power, 34);
    playBodyThud(power * 0.42, 94);
  } else if (archetype === "winged") {
    playAirRush(power * 0.9, 0);
    playBreathCollapse(power * 0.65, 46);
    playBodyThud(power * 0.55, 150);
  } else if (archetype === "serpent") {
    playBreathCollapse(power * 0.95, 0);
    playDryScrape(power * 0.75, 115);
    playBodyThud(power * 0.7, 205);
  } else if (archetype === "beast") {
    playBreathCollapse(power * 1.05, 0);
    playBodyThud(power * 1.05, 92);
    playLowWeight(power * 0.9, 110, 82);
  } else if (archetype === "stone") {
    playBoneCrack(power * 1.05, 0);
    playNoiseBurst({ duration: 0.24, gain: 0.13 * power, filterType: "lowpass", frequency: 920, slideTo: 110, playbackRate: 0.44 });
    playDryScrape(power * 0.85, 88);
    playLowWeight(power, 118, 66);
  } else if (archetype === "ooze") {
    playWetImpact(power * 1.1, 0);
    playNoiseBurst({ duration: 0.3, gain: 0.08 * power, filterType: "lowpass", frequency: 420, slideTo: 70, delay: 92, playbackRate: 0.28 });
  } else if (archetype === "frog") {
    playWetImpact(power * 0.8, 0);
    playBreathCollapse(power * 0.8, 62);
    playLowWeight(power * 0.5, 96, 120);
  } else if (archetype === "caster") {
    playAirRush(power * 0.75, 0);
    playBreathCollapse(power * 0.7, 42);
    playNoiseBurst({ duration: 0.22, gain: 0.045 * power, filterType: "bandpass", frequency: 1600, slideTo: 360, delay: 105, playbackRate: 0.82 });
  } else if (archetype === "humanoid") {
    playBreathCollapse(power * 0.85, 0);
    playBodyThud(power * 0.85, 88);
    playDryScrape(power * 0.5, 160);
  } else {
    playBreathCollapse(power * 0.8, 0);
    playBodyThud(power * 0.7, 92);
  }
  if (boss) {
    playBodyThud(1.15, 220);
    playLowWeight(1, 250, 58);
  }
}

function playHammerImpactSound() {
  playNoiseBurst({ duration: 0.075, gain: 0.24, filterType: "lowpass", frequency: 1120, slideTo: 240, playbackRate: 0.66 });
  playTone({ frequency: 156, slideTo: 92, duration: 0.16, type: "triangle", gain: 0.145 });
  setTimeout(() => playTone({ frequency: 82, slideTo: 52, duration: 0.2, type: "sine", gain: 0.085 }), 18);
  setTimeout(() => playNoiseBurst({ duration: 0.18, gain: 0.075, filterType: "lowpass", frequency: 280, slideTo: 86, playbackRate: 0.4 }), 34);
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
  return Boolean(document.querySelector(".options-dialog:not([hidden])"));
}

function hasTransientCanvasWork(now) {
  return (
    now < activeRenderUntil ||
    hitPulse > 0.01 ||
    bird ||
    floaters.length > 0 ||
    megaBossFloaters.length > 0 ||
    megaBossHitPulse > 0.01 ||
    lootParticles.length > 0 ||
    slashEffects.length > 0 ||
    judgmentEffects.length > 0
  );
}

function targetFrameMs(now) {
  if (!IS_ANDROID) return ACTIVE_FRAME_MS;
  if (!els.megaBossDialog?.hidden && activeMegaBossDef()) return ACTIVE_FRAME_MS;
  if (isDialogOpen()) return DIALOG_FRAME_MS;
  return hasTransientCanvasWork(now) ? ACTIVE_FRAME_MS : IDLE_FRAME_MS;
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
  const multiplier = flyingHighChestTimerMultiplier();
  if (IS_ANDROID) return (38000 + Math.random() * 52000) * multiplier;
  return (13000 + Math.random() * 35000) * multiplier;
}

function randomInitialBirdDelay() {
  const multiplier = flyingHighChestTimerMultiplier();
  if (IS_ANDROID) return (26000 + Math.random() * 22000) * multiplier;
  return (5600 + Math.random() * 10000) * multiplier;
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
  const frameCount = 6;
  const cycle = positiveCycle(bird.age * 1.15 + bird.wing / (Math.PI * 12));
  const frame = Math.floor(cycle * frameCount) % frameCount;
  const cellW = image.naturalWidth / frameCount;
  const cellH = image.naturalHeight;
  const destW = bird.size * 2.36;
  const destH = destW * (cellH / cellW);
  const bob = Math.sin(bird.age * 4.2) * bird.size * 0.08;

  ctx.save();
  ctx.translate(bird.x, bird.y + bob);
  ctx.scale(direction, 1);
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";
  ctx.shadowColor = "rgba(0, 0, 0, 0.4)";
  ctx.shadowBlur = 14;
  ctx.shadowOffsetY = 7;
  drawSheetFrame(image, frame, frameCount, 0, 0, cellW, cellH, -destW / 2, -destH / 2, destW, destH);
  ctx.globalCompositeOperation = "screen";
  ctx.globalAlpha = 0.24 + Math.sin(bird.age * 5) * 0.08;
  ctx.fillStyle = "rgba(120, 232, 255, 0.38)";
  ctx.beginPath();
  ctx.ellipse(0, 0, destW * 0.3, destH * 0.24, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
  return true;
}

function positiveCycle(value) {
  return ((value % 1) + 1) % 1;
}

function smoothstep(value) {
  const t = Math.max(0, Math.min(1, value));
  return t * t * (3 - 2 * t);
}

function drawSheetFrame(image, frame, frameCount, trimX, trimY, trimW, trimH, dx, dy, destW, destH, alpha = 1) {
  const frameW = image.naturalWidth / frameCount;
  ctx.save();
  ctx.globalAlpha *= alpha;
  ctx.drawImage(image, frame * frameW + trimX, trimY, trimW, trimH, dx, dy, destW, destH);
  ctx.restore();
}

function drawTrimmedSheetFrame(image, frame, frameCount, destH, alpha = 1) {
  const bounds = getGeneratedSpriteBounds(image, frameCount, 1, frame);
  const frameW = image.naturalWidth / frameCount;
  const frameStart = Math.round(frame * frameW);
  const sourceW = Math.max(1, bounds.maxX - bounds.minX + 1);
  const sourceH = Math.max(1, bounds.maxY - bounds.minY + 1);
  const destW = destH * (sourceW / sourceH);
  ctx.save();
  ctx.globalAlpha *= alpha;
  ctx.drawImage(image, frameStart + bounds.minX, bounds.minY, sourceW, sourceH, -destW / 2, -destH / 2, destW, destH);
  ctx.restore();
  return { width: destW, height: destH };
}

function birdHit(x, y) {
  if (!bird) return false;
  return Math.hypot(x - bird.x, y - bird.y) <= bird.size * 1.35;
}

function wingedChestEtherReward() {
  const enemyBaseReward = Math.max(1, Number(enemy?.baseReward) || currentEnemyReward());
  return Math.max(1, Math.floor(enemyBaseReward * 10));
}

function collectBird() {
  if (!bird) return;
  markActiveRender(1800);
  const x = bird.x;
  const y = bird.y;
  const reward = wingedChestEtherReward();
  const diamondChance = Math.min(0.04, 0.015 + state.bosses * 0.0005);
  const foundDiamonds = Math.random() < diamondChance;
  state.gold = floorGameNumber(state.gold + reward);
  trackDailyQuestProgress("ether", reward);
  trackDailyQuestProgress("chests", 1);
  recordChestTapProgress();
  if (foundDiamonds) state.diamonds = floorGameNumber(state.diamonds + 5);
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

function megaBossCanvasDimensions() {
  if (!els.megaBossCanvas || !megaCtx) return { width: 0, height: 0, dpr: 1 };
  const rect = els.megaBossCanvas.getBoundingClientRect();
  const dpr = Math.min(window.devicePixelRatio || 1, MAX_CANVAS_DPR);
  const width = Math.max(1, rect.width);
  const height = Math.max(1, rect.height);
  const pixelW = Math.floor(width * dpr);
  const pixelH = Math.floor(height * dpr);
  if (els.megaBossCanvas.width !== pixelW || els.megaBossCanvas.height !== pixelH) {
    els.megaBossCanvas.width = pixelW;
    els.megaBossCanvas.height = pixelH;
  }
  megaCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
  return { width, height, dpr };
}

function drawMegaBossScene(now) {
  if (!megaCtx || !els.megaBossCanvas || els.megaBossDialog?.hidden) return;
  const rect = megaBossCanvasDimensions();
  const w = rect.width;
  const h = rect.height;
  if (w <= 0 || h <= 0) return;
  const active = activeMegaBossDef();
  const displayDef = active ?? selectedMegaBossDef();
  const unlocked = megaBossUnlocked(displayDef);
  const t = now / 1000;
  const c = megaCtx;

  const sky = c.createLinearGradient(0, 0, 0, h);
  sky.addColorStop(0, "#160e16");
  sky.addColorStop(0.48, "#33201b");
  sky.addColorStop(1, "#0b0909");
  c.fillStyle = sky;
  c.fillRect(0, 0, w, h);
  if (displayDef.artMode === "scene") {
    drawMegaBossSceneImage(c, w, h, t, displayDef, unlocked);
    drawMegaBossEmbers(c, w, h, t, unlocked, 18);
  } else if (displayDef.backdrop) {
    drawMegaBossBackdropImage(c, w, h, t, displayDef, unlocked);
    drawMegaBossRuinMotes(c, w, h, t, unlocked, displayDef);
    drawMegaBossSprite(c, w, h, now, displayDef, unlocked, Boolean(active));
  } else {
    drawMegaBossBackdrop(c, w, h, t, unlocked);
    drawMegaBossLavaGlows(c, w, h, t);
    drawMegaBossEmbers(c, w, h, t, unlocked, 28);
    drawMegaBossPlatform(c, w, h, t, unlocked, false);
    drawMegaBossSprite(c, w, h, now, displayDef, unlocked, Boolean(active));
    drawMegaBossPlatform(c, w, h, t, unlocked, true);
  }

  if (active) {
    c.save();
    const remaining = Math.max(0, (state.megaBoss.endsAt || 0) - Date.now());
    c.fillStyle = "rgba(14, 5, 4, 0.72)";
    c.strokeStyle = "rgba(255, 172, 92, 0.42)";
    c.lineWidth = 1;
    roundRect(c, w - 118, 12, 102, 32, 8);
    c.fill();
    c.stroke();
    c.fillStyle = "#ffe8ac";
    c.font = `900 15px ${JUDGE_SERIF_FONT}`;
    c.textAlign = "center";
    c.fillText(formatTimer(remaining), w - 67, 34);
    c.restore();
  }

  drawMegaBossFloaters();
  megaBossHitPulse = Math.max(0, megaBossHitPulse - 0.1);
}

function megaBossImage(def) {
  return megaBossArt[def?.key] ?? null;
}

function megaBossBackdropImage(def) {
  return megaBossBackdropArt[def?.key] ?? null;
}

function drawMegaBossBackdropImage(c, w, h, t, def, unlocked) {
  const image = megaBossBackdropImage(def);
  if (!image?.loaded || !image.naturalWidth || !image.naturalHeight) {
    drawMegaBossBackdrop(c, w, h, t, unlocked);
    return;
  }
  c.save();
  c.globalAlpha = unlocked ? 0.98 : 0.4;
  const pulse = 1.02 + Math.sin(t * 0.5) * 0.004;
  drawCoverImage(c, image, w / 2, h / 2, w * pulse, h * pulse);
  c.globalCompositeOperation = "multiply";
  c.globalAlpha = unlocked ? 0.18 : 0.28;
  const shade = c.createLinearGradient(0, 0, 0, h);
  shade.addColorStop(0, "#17252a");
  shade.addColorStop(0.48, "rgba(14, 20, 17, 0)");
  shade.addColorStop(1, "#10120d");
  c.fillStyle = shade;
  c.fillRect(0, 0, w, h);
  c.restore();
}

function drawMegaBossRuinMotes(c, w, h, t, unlocked, def) {
  c.save();
  c.globalAlpha = unlocked ? 0.55 : 0.22;
  const moteColor = def?.moteColor ?? "185, 222, 174";
  for (let i = 0; i < 18; i += 1) {
    const x = (i * 83 + Math.sin(t * 0.8 + i) * 18) % w;
    const y = (h * 0.18 + i * 29 - t * 9) % (h * 0.72);
    const r = 1 + (i % 3) * 0.5;
    c.fillStyle = `rgba(${moteColor}, ${0.12 + (i % 4) * 0.025})`;
    c.beginPath();
    c.arc(x, y + h * 0.1, r, 0, Math.PI * 2);
    c.fill();
  }
  c.restore();
}

function drawMegaBossLavaGlows(c, w, h, t) {
  c.save();
  c.globalAlpha = 0.5;
  for (let i = 0; i < 7; i += 1) {
    const x = (i * 137 + t * 18) % (w + 180) - 90;
    const y = h * (0.12 + (i % 4) * 0.08) + Math.sin(t * 1.4 + i) * 12;
    const glow = c.createRadialGradient(x, y, 2, x, y, 52 + i * 8);
    glow.addColorStop(0, "rgba(255, 69, 32, 0.55)");
    glow.addColorStop(1, "rgba(255, 69, 32, 0)");
    c.fillStyle = glow;
    c.beginPath();
    c.arc(x, y, 62 + i * 4, 0, Math.PI * 2);
    c.fill();
  }
  c.restore();
}

function drawMegaBossSprite(c, w, h, now, def, unlocked, active) {
  const image = megaBossImage(def);
  const bob = Math.sin(now / 560) * 7;
  const shake = megaBossHitPulse > 0 ? Math.sin(now / 18) * megaBossHitPulse * 10 : 0;
  if (image?.loaded && image.naturalWidth && image.naturalHeight) {
    const maxWidth = def.spriteMaxWidth ?? 0.96;
    const maxHeight = def.spriteMaxHeight ?? 0.92;
    const groundY = def.spriteGroundY ?? 0.95;
    const scale = Math.min(w * maxWidth / image.naturalWidth, h * maxHeight / image.naturalHeight) * (active ? 1 : 0.92) * (def.spriteScale ?? 1);
    const dw = image.naturalWidth * scale * (1 + megaBossHitPulse * 0.04);
    const dh = image.naturalHeight * scale * (1 - megaBossHitPulse * 0.04);
    const dx = w / 2 - dw / 2 + shake;
    const dy = h * groundY - dh + bob;
    c.save();
    c.globalAlpha = unlocked ? 1 : 0.42;
    c.shadowColor = "rgba(0, 0, 0, 0.78)";
    c.shadowBlur = 28;
    c.shadowOffsetY = 18;
    c.drawImage(image, dx, dy, dw, dh);
    c.restore();
  } else {
    c.save();
    c.translate(w / 2 + shake, h * 0.58 + bob);
    c.fillStyle = unlocked ? "#78695b" : "rgba(120, 105, 91, 0.42)";
    c.beginPath();
    c.ellipse(0, 0, w * 0.16, h * 0.28, 0, 0, Math.PI * 2);
    c.fill();
    c.restore();
  }
}

function drawMegaBossSceneImage(c, w, h, t, def, unlocked) {
  const image = megaBossImage(def);
  const shake = megaBossHitPulse > 0 ? Math.sin(t * 70) * megaBossHitPulse * 9 : 0;
  if (image?.loaded && image.naturalWidth && image.naturalHeight) {
    c.save();
    c.globalAlpha = unlocked ? 0.45 : 0.22;
    drawCoverImage(c, image, w / 2 + shake * 0.35, h / 2, w * 1.08, h * 1.08);
    c.globalCompositeOperation = "multiply";
    c.globalAlpha = 0.24;
    c.fillStyle = "#170a06";
    c.fillRect(0, 0, w, h);
    c.restore();

    c.save();
    c.globalAlpha = unlocked ? 1 : 0.42;
    const containScale = Math.min(w / image.naturalWidth, h / image.naturalHeight) * (def.sceneScale ?? 0.86) * (1 + megaBossHitPulse * 0.018);
    const dw = image.naturalWidth * containScale;
    const dh = image.naturalHeight * containScale;
    const dx = w / 2 - dw / 2 + shake;
    const dy = h / 2 - dh / 2 + h * (def.sceneYOffset ?? 0);
    c.shadowColor = "rgba(0, 0, 0, 0.8)";
    c.shadowBlur = 22;
    c.shadowOffsetY = 12;
    c.drawImage(image, dx, dy, dw, dh);
    c.globalCompositeOperation = "screen";
    c.globalAlpha = unlocked ? 0.08 : 0.03;
    c.fillStyle = "#ff6a30";
    c.fillRect(0, 0, w, h);
    c.restore();
    return;
  }
  drawMegaBossBackdrop(c, w, h, t, unlocked);
  drawMegaBossLavaGlows(c, w, h, t);
  drawMegaBossPlatform(c, w, h, t, unlocked, false);
}

function drawMegaBossBackdrop(c, w, h, t, unlocked) {
  const image = artAssets.megaBossFireBackdrop;
  if (!image?.loaded || !image.naturalWidth || !image.naturalHeight) return;
  c.save();
  c.globalAlpha = unlocked ? 0.95 : 0.38;
  const pulse = 1.03 + Math.sin(t * 0.85) * 0.012;
  drawCoverImage(c, image, w / 2, h / 2 + Math.sin(t * 0.7) * h * 0.012, w * pulse, h * pulse);
  c.globalCompositeOperation = "lighter";
  c.globalAlpha = unlocked ? 0.16 : 0.06;
  drawCoverImage(c, image, w / 2 + Math.sin(t * 1.1) * w * 0.018, h / 2, w * 1.06, h * 1.06);
  c.restore();
}

function drawMegaBossPlatform(c, w, h, t, unlocked, frontOnly) {
  const image = artAssets.megaBossLavaPlatform;
  if (!image?.loaded || !image.naturalWidth || !image.naturalHeight) {
    if (!frontOnly) drawFallbackMegaBossPlatform(c, w, h, t);
    return;
  }
  const scale = Math.min(w * 1.24 / image.naturalWidth, h * 0.6 / image.naturalHeight);
  const dw = image.naturalWidth * scale;
  const dh = image.naturalHeight * scale;
  const dx = w / 2 - dw / 2;
  const dy = h * 0.55 + Math.sin(t * 0.9) * 2;
  c.save();
  c.globalAlpha = unlocked ? 1 : 0.42;
  if (frontOnly) {
    c.beginPath();
    c.rect(0, dy + dh * 0.74, w, h - (dy + dh * 0.74));
    c.clip();
  }
  c.shadowColor = frontOnly ? "rgba(255, 70, 20, 0.3)" : "rgba(0, 0, 0, 0.55)";
  c.shadowBlur = frontOnly ? 18 : 26;
  c.shadowOffsetY = frontOnly ? 0 : 18;
  c.drawImage(image, dx, dy, dw, dh);
  c.restore();
}

function drawFallbackMegaBossPlatform(c, w, h, t) {
  c.fillStyle = "#15100e";
  c.beginPath();
  c.ellipse(w / 2, h * 0.85, w * 0.56, h * 0.12, 0, 0, Math.PI * 2);
  c.fill();
  c.strokeStyle = "rgba(255, 80, 32, 0.48)";
  c.lineWidth = 2;
  for (let i = 0; i < 5; i += 1) {
    c.beginPath();
    c.moveTo(w * (0.18 + i * 0.14), h * 0.83);
    c.quadraticCurveTo(w * (0.24 + i * 0.1), h * (0.87 + Math.sin(t + i) * 0.02), w * (0.34 + i * 0.12), h * 0.91);
    c.stroke();
  }
}

function drawCoverImage(c, image, centerX, centerY, targetW, targetH) {
  const scale = Math.max(targetW / image.naturalWidth, targetH / image.naturalHeight);
  const dw = image.naturalWidth * scale;
  const dh = image.naturalHeight * scale;
  c.drawImage(image, centerX - dw / 2, centerY - dh / 2, dw, dh);
}

function drawMegaBossEmbers(c, w, h, t, unlocked, count = 28) {
  const emberAlpha = unlocked ? 1 : 0.42;
  c.save();
  c.globalAlpha = emberAlpha;
  for (let i = 0; i < count; i += 1) {
    const drift = (t * (28 + (i % 7) * 6) + i * 37) % (h * 0.72);
    const x = (i * 71 + Math.sin(t * 2 + i) * 34) % w;
    const y = h * 0.86 - drift;
    const r = 1.2 + (i % 4) * 0.55;
    c.fillStyle = `rgba(255, ${126 + (i % 4) * 24}, 35, ${0.18 + (i % 5) * 0.035})`;
    c.beginPath();
    c.arc(x, y, r, 0, Math.PI * 2);
    c.fill();
  }
  c.restore();
}

function roundRect(context, x, y, width, height, radius) {
  const r = Math.min(radius, width / 2, height / 2);
  context.beginPath();
  context.moveTo(x + r, y);
  context.lineTo(x + width - r, y);
  context.quadraticCurveTo(x + width, y, x + width, y + r);
  context.lineTo(x + width, y + height - r);
  context.quadraticCurveTo(x + width, y + height, x + width - r, y + height);
  context.lineTo(x + r, y + height);
  context.quadraticCurveTo(x, y + height, x, y + height - r);
  context.lineTo(x, y + r);
  context.quadraticCurveTo(x, y, x + r, y);
  context.closePath();
}

function drawMegaBossFloaters() {
  const c = megaCtx;
  if (!c) return;
  megaBossFloaters = megaBossFloaters.filter((floater) => floater.age < 1);
  for (const floater of megaBossFloaters) {
    floater.age += frameDelta;
    const fade = Math.max(0, 1 - floater.age);
    const y = floater.y - floater.age * (floater.rise ?? 120);
    const x = floater.x + (floater.vx ?? 0) * floater.age;
    c.save();
    c.globalAlpha = fade;
    c.font = `900 ${floater.size ?? 30}px ${JUDGE_SERIF_FONT}`;
    c.textAlign = "center";
    c.lineWidth = 5;
    c.strokeStyle = "rgba(26, 2, 0, 0.92)";
    c.fillStyle = floater.color ?? "#ff785f";
    c.strokeText(floater.text, x, y);
    c.fillText(floater.text, x, y);
    c.restore();
  }
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
  drawAmbientParticles(w, h, now, "front");
  drawLootParticles();
  drawSlashEffects();
  drawFloaters(now);
  drawMegaBossScene(now);
}

function drawGeneratedBackground(w, h) {
  if (isPuzzleVaultActive() && drawPuzzleVaultBackground(w, h)) return true;
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

function drawPuzzleVaultBackground(w, h) {
  const image = artAssets.puzzleVaultBackground;
  if (!image?.loaded || !image.naturalWidth || !image.naturalHeight) return false;
  const dpr = canvasSizeCache.dpr || 1;
  const cacheKey = "puzzle-vault";
  if (backgroundCache.canvas && backgroundCache.realm === cacheKey && backgroundCache.width === w && backgroundCache.height === h && backgroundCache.dpr === dpr) {
    ctx.drawImage(backgroundCache.canvas, 0, 0, backgroundCache.canvas.width, backgroundCache.canvas.height, 0, 0, w, h);
    return true;
  }
  const cacheCanvas = document.createElement("canvas");
  cacheCanvas.width = Math.max(1, Math.ceil(w * dpr));
  cacheCanvas.height = Math.max(1, Math.ceil(h * dpr));
  const cacheCtx = cacheCanvas.getContext("2d");
  cacheCtx.imageSmoothingEnabled = true;
  cacheCtx.imageSmoothingQuality = "high";
  drawCoverImage(cacheCtx, image, cacheCanvas.width / 2, cacheCanvas.height / 2, cacheCanvas.width, cacheCanvas.height);
  cacheCtx.fillStyle = "rgba(18, 10, 5, 0.22)";
  cacheCtx.fillRect(0, 0, cacheCanvas.width, cacheCanvas.height);
  backgroundCache = { realm: cacheKey, width: w, height: h, dpr, canvas: cacheCanvas };
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
    const targetCount = isBoss() ? MAX_AMBIENT_PARTICLES + MAX_BOSS_AMBIENT_BONUS_PARTICLES : MAX_AMBIENT_PARTICLES;
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
    realmIndex,
    color: Math.random() < 0.7 ? def.color : def.accent,
    x: Math.random() * w,
    y: Math.random() * h,
    vx: 0,
    vy: 0,
    size: 2 + Math.random() * 4,
    spriteSize: 14 + Math.random() * 14,
    age: 0,
    life: 3 + Math.random() * 5,
    alpha: 0.16 + Math.random() * 0.24,
    spin: Math.random() * Math.PI * 2,
    spinSpeed: -2 + Math.random() * 4,
    layer
  };

  if (def.kind === "firefly") {
    particle.vx = -10 + Math.random() * 20;
    particle.vy = -14 - Math.random() * 18;
    particle.size = 2.5 + Math.random() * 3.5;
    particle.spriteSize = 14 + Math.random() * 10;
  } else if (def.kind === "ember") {
    particle.x = Math.random() * w;
    particle.y = h * (0.68 + Math.random() * 0.22);
    particle.vx = -18 + Math.random() * 36;
    particle.vy = -44 - Math.random() * 52;
    particle.life = 1.5 + Math.random() * 2.4;
    particle.spriteSize = 15 + Math.random() * 13;
  } else if (def.kind === "snow") {
    particle.y = -20 + Math.random() * h;
    particle.vx = -16 + Math.random() * 24;
    particle.vy = 18 + Math.random() * 28;
    particle.size = 1.8 + Math.random() * 4.2;
    particle.life = 5 + Math.random() * 4;
    particle.spriteSize = 14 + Math.random() * 12;
  } else if (def.kind === "marsh") {
    particle.y = h * (0.55 + Math.random() * 0.3);
    particle.vx = -8 + Math.random() * 16;
    particle.vy = -12 - Math.random() * 22;
    particle.size = 5 + Math.random() * 14;
    particle.life = 2 + Math.random() * 3.5;
    particle.spriteSize = 17 + Math.random() * 14;
  } else if (def.kind === "spark") {
    particle.y = h * (0.46 + Math.random() * 0.4);
    particle.vx = -34 + Math.random() * 68;
    particle.vy = -34 - Math.random() * 44;
    particle.size = 2 + Math.random() * 6;
    particle.life = 0.65 + Math.random() * 1.45;
    particle.spriteSize = 15 + Math.random() * 12;
  } else {
    particle.vx = -7 + Math.random() * 14;
    particle.vy = -10 + Math.random() * 20;
    particle.size = 1.8 + Math.random() * 5;
    particle.life = 3 + Math.random() * 4.5;
    particle.spriteSize = 13 + Math.random() * 11;
  }

  if (layer === "front") {
    particle.spriteSize *= 1.12;
    particle.alpha *= 1.08;
  }
  if (randomAge) particle.age = Math.random() * particle.life;
  return particle;
}

function drawAmbientParticle(particle, now) {
  const pulse = 0.72 + Math.sin(now / 260 + particle.spin) * 0.28;
  const alpha = Math.max(0, 1 - particle.age / particle.life) * particle.alpha;
  const sprite = artAssets.ambientParticles?.[particle.realmIndex];
  if (sprite?.loaded && !sprite.failed && sprite.naturalWidth && sprite.naturalHeight) {
    const drawSize = particle.spriteSize * (0.92 + pulse * 0.08);
    ctx.save();
    ctx.globalAlpha = alpha * (particle.layer === "front" ? 0.72 : 0.56);
    ctx.translate(particle.x, particle.y);
    ctx.rotate(particle.spin * 0.18);
    ctx.drawImage(sprite, -drawSize / 2, -drawSize / 2, drawSize, drawSize);
    ctx.restore();
    return;
  }
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

  if (isPuzzleVaultActive() && drawPuzzleVaultCreature(w, h, now)) {
    hitPulse = Math.max(0, hitPulse - 0.11);
    return;
  }

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

function drawPuzzleVaultCreature(w, h, now) {
  const key = isPuzzleVaultBoss() ? puzzleVaultBossDef.key : enemy?.puzzleVaultKey;
  const image = artAssets.puzzleVaultEnemies?.[key];
  if (!image?.loaded || !image.naturalWidth || !image.naturalHeight) return false;
  const bounds = getGeneratedSpriteBounds(image, 1, 1, 0);
  const sourceW = Math.max(1, bounds.maxX - bounds.minX + 1);
  const sourceH = Math.max(1, bounds.maxY - bounds.minY + 1);
  const sourceAspect = sourceW / sourceH;
  const idle = Math.sin(now / 520 + puzzleVaultLevel() * 0.55);
  const dpr = canvasSizeCache.dpr || 1;
  const snap = (value) => Math.round(value * dpr) / dpr;
  const bob = snap(idle * (isPuzzleVaultBoss() ? 5 : 4));
  const shake = hitPulse > 0 ? Math.sin(now / 18) * hitPulse * 9 : 0;
  const pulseScaleX = 1 + hitPulse * 0.08;
  const pulseScaleY = 1 - hitPulse * 0.09;
  const maxW = w * (isPuzzleVaultBoss() ? 0.66 : 0.48);
  const maxH = h * (isPuzzleVaultBoss() ? 0.53 : 0.43);
  let destH = maxH * pulseScaleY;
  let destW = destH * sourceAspect * pulseScaleX;
  if (destW > maxW) {
    destW = maxW * pulseScaleX;
    destH = destW / sourceAspect * pulseScaleY;
  }
  destW = snap(destW);
  destH = snap(destH);
  const arena = { x: w * 0.5, y: h * (isPuzzleVaultBoss() ? 0.76 : 0.69) };
  const dx = snap(arena.x - destW / 2 + shake);
  const dy = snap(arena.y - destH + bob);
  const frame = getGeneratedSpriteFrame(image, 1, 1, 0, bounds);

  ctx.save();
  const shadowGradient = ctx.createRadialGradient(arena.x, arena.y + 8, 4, arena.x, arena.y + 8, destW * 0.38);
  shadowGradient.addColorStop(0, "rgba(0, 0, 0, 0.48)");
  shadowGradient.addColorStop(1, "rgba(0, 0, 0, 0)");
  ctx.fillStyle = shadowGradient;
  ctx.beginPath();
  ctx.ellipse(arena.x, arena.y + 10, destW * 0.35, Math.max(12, destH * 0.085), 0, 0, Math.PI * 2);
  ctx.fill();

  const aura = ctx.createRadialGradient(arena.x, arena.y - destH * 0.48, 8, arena.x, arena.y - destH * 0.48, destW * 0.58);
  aura.addColorStop(0, "rgba(255, 221, 124, 0.34)");
  aura.addColorStop(0.4, "rgba(118, 232, 255, 0.14)");
  aura.addColorStop(1, "rgba(255, 202, 92, 0)");
  ctx.globalAlpha = isPuzzleVaultBoss() ? 0.86 : 0.62;
  ctx.fillStyle = aura;
  ctx.beginPath();
  ctx.arc(arena.x, arena.y - destH * 0.46, destW * 0.56, 0, Math.PI * 2);
  ctx.fill();

  ctx.globalAlpha = 1;
  ctx.shadowColor = "rgba(0, 0, 0, 0.72)";
  ctx.shadowBlur = 24 * EFFECT_QUALITY;
  ctx.shadowOffsetY = 14;
  ctx.drawImage(frame, dx, dy, destW, destH);
  ctx.restore();
  return true;
}

function drawGeneratedCreature(w, h, now) {
  const realmIndex = state.realm % realms.length;
  const realmHdImage = artAssets.realmEncounterEnemies[realmIndex] ?? null;
  const useRealmHd = realmHdImage?.loaded && realmHdImage.naturalWidth && realmHdImage.naturalHeight;
  if (!useRealmHd) return false;
  const image = realmHdImage;
  const cols = 10;
  const rows = 1;
  const visualEncounter = enemy?.visualEncounter ?? state.encounter;
  const index = visualEncounter;
  const frameTuning = generatedSpriteTuning(realmIndex, visualEncounter);
  const bounds = adjustGeneratedSpriteBounds(getGeneratedSpriteBounds(image, cols, rows, index), frameTuning);
  const pulseScaleX = 1 + hitPulse * 0.08;
  const pulseScaleY = 1 - hitPulse * 0.09;
  const idle = Math.sin(now / 420 + state.encounter * 0.7);
  const bob = idle * 6;
  const shake = hitPulse > 0 ? Math.sin(now / 18) * hitPulse * 8 : 0;
  const creatureScale = (isBoss() ? 1.12 : 1.2) * GENERATED_CREATURE_SIZE_MULTIPLIER * (frameTuning?.scale ?? 1);
  const sourceW = Math.max(1, bounds.maxX - bounds.minX + 1);
  const sourceH = Math.max(1, bounds.maxY - bounds.minY + 1);
  const sourceAspect = sourceW / sourceH;
  const arena = arenaCenter(w, h, frameTuning);
  const safeTop = h * (frameTuning?.safeTop ?? (useRealmHd ? 0.35 : 0.31));
  const safeSide = w * (frameTuning?.safeSide ?? (useRealmHd ? 0.055 : 0.035));
  const bottomLimit = h * (frameTuning?.bottomLimit ?? GENERATED_CREATURE_BOTTOM_LIMIT);
  const availableHeight = (arena.y - safeTop) * creatureScale;
  const stageSafeHeight = Math.max(h * 0.18, bottomLimit - safeTop);
  const safeHeight = Math.max(h * 0.28, Math.min(availableHeight, stageSafeHeight));
  const maxVisibleW = Math.max(1, Math.min(w - safeSide * 2, w * (frameTuning?.maxWidth ?? 0.78) * creatureScale));
  const maxVisibleH = Math.max(1, Math.min(safeHeight, h * (frameTuning?.maxHeight ?? 0.5) * creatureScale));
  const baseVisibleH = maxVisibleH * (1 + idle * 0.015);
  let destH = baseVisibleH * pulseScaleY;
  let destW = destH * sourceAspect * pulseScaleX;
  if (destW > maxVisibleW) {
    const fit = maxVisibleW / destW;
    destW *= fit;
    destH *= fit;
  }
  const centerRatio = Math.min(1, Math.max(0, (bounds.centerX - bounds.minX) / sourceW));
  let dx = arena.x - destW * centerRatio + shake;
  let dy = Math.min(arena.y + bob, bottomLimit) - destH;
  dx = Math.max(safeSide, Math.min(dx, w - safeSide - destW));
  dy = Math.max(safeTop, Math.min(dy, bottomLimit - destH));

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
  const spriteFrame = getGeneratedSpriteFrame(image, cols, rows, index, bounds, frameTuning);
  const displayFrame = frameTuning?.crisp ? getCrispGeneratedSpriteFrame(spriteFrame, frameTuning.crisp) : spriteFrame;
  if (frameTuning?.brightness || frameTuning?.contrast || frameTuning?.saturate) {
    const brightness = Math.round((frameTuning.brightness ?? 1) * 100);
    const contrast = Math.round((frameTuning.contrast ?? 1) * 100);
    const saturate = Math.round((frameTuning.saturate ?? 1) * 100);
    ctx.filter = `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturate}%)`;
  }
  ctx.drawImage(displayFrame, dx, dy, destW, destH);
  ctx.filter = "none";
  if (hitPulse > 0.05) {
    ctx.globalAlpha = hitPulse * 0.26;
    ctx.shadowColor = "#ffffff";
    ctx.shadowBlur = 18 * EFFECT_QUALITY;
    ctx.drawImage(displayFrame, dx - 2, dy - 2, destW + 4, destH + 4);
  }
  ctx.restore();
  return true;
}

function generatedSpriteTuning(realmIndex, visualEncounter) {
  const realmTuning = generatedSpriteRealmTuning[realmIndex];
  const frameTuning = generatedSpriteFrameTuning[`${realmIndex}:${visualEncounter}`];
  if (!realmTuning && !frameTuning) return null;
  return {
    scale: (realmTuning?.scale ?? 1) * (frameTuning?.scale ?? 1),
    xOffset: (realmTuning?.xOffset ?? 0) + (frameTuning?.xOffset ?? 0),
    yOffset: (realmTuning?.yOffset ?? 0) + (frameTuning?.yOffset ?? 0),
    maxWidth: frameTuning?.maxWidth ?? realmTuning?.maxWidth,
    maxHeight: frameTuning?.maxHeight ?? realmTuning?.maxHeight,
    safeTop: frameTuning?.safeTop ?? realmTuning?.safeTop,
    safeSide: frameTuning?.safeSide ?? realmTuning?.safeSide,
    bottomLimit: frameTuning?.bottomLimit ?? realmTuning?.bottomLimit,
    crisp: frameTuning?.crisp ?? realmTuning?.crisp,
    brightness: frameTuning?.brightness ?? realmTuning?.brightness,
    contrast: frameTuning?.contrast ?? realmTuning?.contrast,
    saturate: frameTuning?.saturate ?? realmTuning?.saturate,
    sourceMarginLeft: frameTuning?.sourceMarginLeft ?? 0,
    sourcePadLeft: frameTuning?.sourcePadLeft ?? 0,
    sourceMarginRight: frameTuning?.sourceMarginRight ?? 0,
    sourceMarginTop: frameTuning?.sourceMarginTop ?? 0,
    sourceMarginBottom: frameTuning?.sourceMarginBottom ?? 0,
    alphaBoost: frameTuning?.alphaBoost ?? null,
    alphaFloor: frameTuning?.alphaFloor ?? null,
    eraseRects: frameTuning?.eraseRects ?? null,
    compositePatches: frameTuning?.compositePatches ?? null
  };
}

function adjustGeneratedSpriteBounds(bounds, tuning = null) {
  if (!tuning) return bounds;
  const marginLeft = (tuning.sourceMarginLeft ?? 0) + (tuning.sourcePadLeft ?? 0);
  const marginRight = tuning.sourceMarginRight ?? 0;
  const marginTop = tuning.sourceMarginTop ?? 0;
  const marginBottom = tuning.sourceMarginBottom ?? 0;
  if (!marginLeft && !marginRight && !marginTop && !marginBottom) return bounds;
  return {
    ...bounds,
    minX: bounds.minX - marginLeft,
    maxX: bounds.maxX + marginRight,
    minY: bounds.minY - marginTop,
    maxY: bounds.maxY + marginBottom
  };
}

function arenaCenter(w, h, tuning = null) {
  const def = arenaCenters[state.realm % arenaCenters.length] ?? arenaCenters[0];
  return {
    x: w * (def.x + (tuning?.xOffset ?? 0)),
    y: h * Math.min(0.84, def.y + 0.04 + GENERATED_CREATURE_VERTICAL_LIFT + (tuning?.yOffset ?? 0))
  };
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

function getGeneratedSpriteFrame(image, cols, rows, index, bounds, tuning = null) {
  let cached = generatedSpriteFrames.get(image);
  if (!cached || cached.width !== image.naturalWidth || cached.height !== image.naturalHeight || cached.cols !== cols || cached.rows !== rows) {
    cached = { width: image.naturalWidth, height: image.naturalHeight, cols, rows, frames: new Map() };
    generatedSpriteFrames.set(image, cached);
  }
  const sourceW = Math.max(1, Math.round(bounds.maxX - bounds.minX + 1));
  const sourceH = Math.max(1, Math.round(bounds.maxY - bounds.minY + 1));
  const eraseKey = tuning?.eraseRects ? JSON.stringify(tuning.eraseRects) : "";
  const patchKey = tuning?.compositePatches ? JSON.stringify(tuning.compositePatches) : "";
  const key = `${index}:${Math.round(bounds.minX)}:${Math.round(bounds.minY)}:${sourceW}:${sourceH}:${eraseKey}:${patchKey}:${tuning?.sourcePadLeft ?? 0}`;
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
  if (tuning?.sourcePadLeft) {
    const padLeft = tuning.sourcePadLeft;
    const mainMinX = bounds.minX + padLeft;
    const mainSourceW = Math.max(1, Math.round(bounds.maxX - mainMinX + 1));
    frameCtx.drawImage(image, (index % cols) * cellW + mainMinX, sy, mainSourceW, sourceH, padLeft, 0, mainSourceW, sourceH);
  } else {
    frameCtx.drawImage(image, sx, sy, sourceW, sourceH, 0, 0, sourceW, sourceH);
  }
  if (Array.isArray(tuning?.compositePatches)) {
    for (const patch of tuning.compositePatches) {
      const patchCellX = (patch.fromIndex % cols) * cellW;
      const patchCellY = Math.floor(patch.fromIndex / cols) * cellH;
      frameCtx.drawImage(
        image,
        patchCellX + patch.x,
        patchCellY + patch.y,
        patch.w,
        patch.h,
        patch.destX - bounds.minX,
        patch.destY - bounds.minY,
        patch.w,
        patch.h
      );
    }
  }
  if (Array.isArray(tuning?.eraseRects)) {
    frameCtx.save();
    frameCtx.globalCompositeOperation = "destination-out";
    for (const rect of tuning.eraseRects) {
      frameCtx.fillRect(rect.x - bounds.minX, rect.y - bounds.minY, rect.w, rect.h);
    }
    frameCtx.restore();
  }
  if (tuning?.alphaBoost || tuning?.alphaFloor) {
    strengthenGeneratedSpriteAlpha(frame, tuning);
  }
  cached.frames.set(key, frame);
  return frame;
}

function strengthenGeneratedSpriteAlpha(frame, tuning) {
  const frameCtx = frame.getContext("2d", { willReadFrequently: true });
  try {
    const imageData = frameCtx.getImageData(0, 0, frame.width, frame.height);
    const pixels = imageData.data;
    const alphaBoost = Math.max(1, Number(tuning?.alphaBoost) || 1);
    const alphaFloor = Math.max(0, Math.min(255, Number(tuning?.alphaFloor) || 0));
    for (let index = 3; index < pixels.length; index += 4) {
      const alpha = pixels[index];
      if (alpha <= 12) continue;
      pixels[index] = Math.min(255, Math.max(alphaFloor, alpha * alphaBoost));
    }
    frameCtx.putImageData(imageData, 0, 0);
  } catch {
    // Leave the source frame unchanged if canvas readback is unavailable.
  }
}

function getCrispGeneratedSpriteFrame(frame, amount = 1) {
  let cached = generatedCrispSpriteFrames.get(frame);
  const key = `${frame.width}:${frame.height}:${Math.round(amount * 100)}`;
  if (cached?.key === key) return cached.frame;

  const crispFrame = document.createElement("canvas");
  crispFrame.width = frame.width;
  crispFrame.height = frame.height;
  const crispCtx = crispFrame.getContext("2d", { willReadFrequently: true });
  crispCtx.drawImage(frame, 0, 0);
  try {
    const imageData = crispCtx.getImageData(0, 0, crispFrame.width, crispFrame.height);
    const src = imageData.data;
    const out = new Uint8ClampedArray(src);
    const width = crispFrame.width;
    const height = crispFrame.height;
    for (let y = 0; y < height; y += 1) {
      for (let x = 0; x < width; x += 1) {
        const index = (y * width + x) * 4;
        if (src[index + 3] === 0) continue;
        const left = (y * width + Math.max(0, x - 1)) * 4;
        const right = (y * width + Math.min(width - 1, x + 1)) * 4;
        const up = (Math.max(0, y - 1) * width + x) * 4;
        const down = (Math.min(height - 1, y + 1) * width + x) * 4;
        for (let channel = 0; channel < 3; channel += 1) {
          const average = (src[left + channel] + src[right + channel] + src[up + channel] + src[down + channel]) / 4;
          out[index + channel] = Math.max(0, Math.min(255, src[index + channel] + (src[index + channel] - average) * amount));
        }
      }
    }
    crispCtx.putImageData(new ImageData(out, width, height), 0, 0);
  } catch {
    return frame;
  }
  cached = { key, frame: crispFrame };
  generatedCrispSpriteFrames.set(frame, cached);
  return crispFrame;
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
    ctx.font = `900 ${floater.size ?? 24}px ${JUDGE_SERIF_FONT}`;
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
  if (IS_ANDROID && !critical) return;
  const def = realmVfx[state.realm % realms.length];
  const count = Math.max(IS_ANDROID ? 1 : 2, Math.round((critical ? 12 : 7) * EFFECT_QUALITY));
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
  if (IS_ANDROID && !critical) return;
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
  const count = critical && !IS_ANDROID ? 2 : 1;
  const baseAngle = (Math.random() - 0.5) * 0.08;
  for (let i = 0; i < count; i += 1) {
    slashEffects.push({
      x,
      y,
      age: 0,
      life: IS_ANDROID ? (critical ? 0.38 : 0.3) : (critical ? 0.56 : 0.46),
      angle: baseAngle + i * 0.34,
      size: ((critical ? 104 : 82) + Math.random() * (critical ? 10 : 8)) * (IS_ANDROID ? 0.82 : 1),
      impactSize: (critical ? 48 : 34) * (IS_ANDROID ? 0.75 : 1),
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

  if (settleEssenceCrucibleQueue(Date.now(), { announce: true, persist: true }) > 0) {
    renderResources();
    renderCrafting();
    updateUI();
  }

  const desiredFrameMs = targetFrameMs(now);
  if (lastRenderAt && now - lastRenderAt < desiredFrameMs) {
    scheduleNextTick(desiredFrameMs - (now - lastRenderAt));
    return;
  }

  const rawElapsed = Math.max(0, (now - lastFrame) / 1000);
  const elapsed = Math.min(0.1, rawElapsed);
  const simulationElapsed = Math.min(5, rawElapsed);
  lastFrame = now;
  lastRenderAt = now;
  frameDelta = elapsed;
  updateBird(elapsed, now);
  if (now - lastRelicTimerUpdate >= RELIC_TIMER_FRAME_MS) {
    updateRelicTimers();
    lastRelicTimerUpdate = now;
  }

  const activeMegaDef = activeMegaBossDef();
  if (activeMegaDef && state.megaBoss.endsAt && Date.now() >= state.megaBoss.endsAt) {
    failMegaBoss(activeMegaDef, "Time ran out.");
  }

  if (isPuzzleVaultActive()) {
    const remainingMs = puzzleVaultRemainingMs();
    if (now - lastBossTimerUpdate >= TIMER_FRAME_MS) {
      els.bossTimer.textContent = formatTimer(remainingMs);
      lastBossTimerUpdate = now;
    }
    if (remainingMs <= 0) {
      finishPuzzleVaultRun("timeout");
      draw(now);
      scheduleNextTick(targetFrameMs(now));
      return;
    }
  }

  const autoDamage = dps() * simulationElapsed;
  if (autoDamage > 0) {
    damageEnemy(autoDamage, null, null, { passive: true });
    if (!els.megaBossDialog?.hidden && activeMegaBossDef()) {
      damageMegaBoss(autoDamage, null, null, { passive: true });
    }
  }
  updateTapperFrenzyAutoTap();

  if (!isPuzzleVaultActive() && isBoss()) {
    const remaining = Math.max(0, bossDuration() - (Date.now() - bossStartedAt) / 1000);
    if (now - lastBossTimerUpdate >= TIMER_FRAME_MS) {
      els.bossTimer.textContent = remaining.toFixed(1);
      lastBossTimerUpdate = now;
    }
    if (remaining <= 0) {
      state.enemyHp = state.maxHp;
      state.enemyHpLog = state.maxHpLog;
      bossStartedAt = Date.now();
      toast("Boss recovered. Strike faster or buy upgrades.");
    }
  }

  draw(now);
  scheduleNextTick(targetFrameMs(now));
}

function performPlayerTap(x, y, { auto = false, renderDuration = IS_ANDROID ? 700 : 1800 } = {}) {
  markActiveRender(renderDuration);
  state.taps += 1;
  recordTapProgress();
  trackDailyQuestProgress("taps", 1);
  const crit = rollTapCrit();
  const damage = tapDamage() * crit.multiplier;
  if (crit.critical) recordHighestTapCrit(damage);
  const chipGold = tapGoldReward();
  state.gold = floorGameNumber(state.gold + chipGold.amount);
  trackDailyQuestProgress("ether", chipGold.amount);
  trackDailyQuestProgress("tappedEther", chipGold.amount);
  state.levelTappedGold = floorGameNumber(state.levelTappedGold + chipGold.amount);
  spawnSlashEffect(x, y, crit.critical);
  spawnTapLoot(x, y, chipGold.amount, chipGold.critical);
  updateTapNuggetReadout(chipGold.critical);
  if (!auto) playTapSound(crit.critical);
  damageEnemy(damage, x, y, {
    visible: true,
    critical: crit.critical,
    goldReward: chipGold.amount,
    goldCritical: chipGold.critical,
    renderDuration: crit.critical && IS_ANDROID ? 950 : renderDuration,
    life: IS_ANDROID ? (crit.critical ? 0.68 : 0.5) : undefined
  });
}

function updateTapperFrenzyAutoTap(now = Date.now()) {
  const def = buffDefs.find((buff) => buff.key === "tapperFrenzy");
  const stacks = activeBuffStacks(def, now);
  if (stacks <= 0 || !enemy || state.enemyHp <= 0) return;
  const interval = 1000 / Math.pow(2, Math.min(2, stacks - 1));
  if (lastTapperFrenzyAutoAt && now - lastTapperFrenzyAutoAt < interval) return;
  lastTapperFrenzyAutoAt = now;
  const target = creatureLootCenter();
  performPlayerTap(target.x, target.y, { auto: true, renderDuration: IS_ANDROID ? 620 : 1200 });
}

function handleTap(event) {
  const rect = els.canvas.getBoundingClientRect();
  const touch = event.touches?.[0] ?? event;
  const x = touch.clientX - rect.left;
  const y = touch.clientY - rect.top;
  if (isHudDeadZone(y, rect)) return;
  unlockAudio();
  if (birdHit(x, y)) {
    collectBird();
    return;
  }
  performPlayerTap(x, y);
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

function preventNativeZoomGestures() {
  const preventMultiTouch = (event) => {
    if (event.touches && event.touches.length > 1) event.preventDefault();
  };
  document.addEventListener("touchstart", preventMultiTouch, { passive: false });
  document.addEventListener("touchmove", preventMultiTouch, { passive: false });
  ["gesturestart", "gesturechange", "gestureend"].forEach((eventName) => {
    window.addEventListener(eventName, (event) => event.preventDefault(), { passive: false });
  });
}

function handleMegaBossTraitTap(event) {
  const target = event.target.closest?.("[data-mega-boss-trait-label]");
  if (!target || !els.megaBossStageTraits?.contains(target)) return;
  const kind = target.dataset.megaBossTraitKind === "weak" ? "Weak" : "Resists";
  const label = target.dataset.megaBossTraitLabel || target.getAttribute("aria-label");
  if (!label) return;
  event.preventDefault();
  event.stopPropagation();
  toast(`${kind}: ${label}`);
}

function handleMegaBossTraitKeydown(event) {
  if (event.key !== "Enter" && event.key !== " ") return;
  handleMegaBossTraitTap(event);
}

function wireEvents() {
  preventNativeZoomGestures();
  renderUpgrades();
  renderBoonUpgrades();
  renderBuffs();
  renderShopProducts();
  renderDailyQuests();
  checkAchievements({ silent: true });
  renderAchievements();
  renderStatistics();
  renderMegaBosses();
  renderRebornUpgrades();
  renderInventory();
  renderCrafting();
  setupNumberFitElements();
  renderPlayerProfile();
  updateVolumeControls();
  ensureDevResetButton();
  observeDpsGuideDialogState();
  els.optionsToggle.addEventListener("click", () => setOptionsOpen(els.optionsDialog.hidden));
  els.optionsTabs.forEach((button) => {
    button.addEventListener("click", () => setOptionsView(button.dataset.optionsTab));
  });
  els.optionsAvatarButton?.addEventListener("click", () => setProfileOpen(true));
  els.closeProfile?.addEventListener("click", () => setProfileOpen(false));
  els.profileBackdrop?.addEventListener("click", () => setProfileOpen(false));
  els.profileModeButtons?.forEach((button) => {
    button.addEventListener("click", () => setProfileMode(button.dataset.profileMode));
  });
  els.profileAvatarGrid?.addEventListener("click", (event) => {
    const target = event.target.closest?.("[data-avatar-id]");
    if (!target) return;
    selectProfileAvatar(target.dataset.avatarId);
  });
  els.profileSaveButton?.addEventListener("click", saveProfileSelection);
  els.profileNameInput?.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    saveProfileSelection();
  });
  els.googleSignInButton?.addEventListener("click", handleGoogleSignIn);
  els.shopToggle.addEventListener("click", () => setShopOpen(els.shopDialog.hidden));
  els.devToggle?.addEventListener("click", () => setDevOpen(els.devDialog.hidden));
  els.closeDev?.addEventListener("click", () => setDevOpen(false));
  els.devBackdrop?.addEventListener("click", () => setDevOpen(false));
  els.dailiesToggle?.addEventListener("click", () => setDailiesOpen(els.dailiesDialog.hidden));
  els.closeDailies?.addEventListener("click", () => setDailiesOpen(false));
  els.dailiesBackdrop?.addEventListener("click", () => setDailiesOpen(false));
  els.claimWeeklyDailies?.addEventListener("click", claimWeeklyDailyReward);
  els.achievementsToggle?.addEventListener("click", () => setAchievementsOpen(els.achievementsDialog.hidden));
  els.closeAchievements?.addEventListener("click", () => setAchievementsOpen(false));
  els.achievementsBackdrop?.addEventListener("click", () => setAchievementsOpen(false));
  els.achievementTabs?.forEach((button) => {
    button.addEventListener("click", () => setAchievementsView(button.dataset.achievementTab));
  });
  els.achievementMilestoneToggle?.addEventListener("click", () => setAchievementMilestonesOpen(els.achievementMilestoneDialog.hidden));
  els.closeAchievementMilestones?.addEventListener("click", () => setAchievementMilestonesOpen(false));
  els.achievementMilestoneBackdrop?.addEventListener("click", () => setAchievementMilestonesOpen(false));
  els.closeAchievementMilestoneReward?.addEventListener("click", () => setAchievementMilestoneRewardOpen(false));
  els.achievementMilestoneRewardBackdrop?.addEventListener("click", () => setAchievementMilestoneRewardOpen(false));
  els.achievementDiamondTierButton?.addEventListener("click", unlockAchievementDiamondTier);
  els.devAddEther?.addEventListener("click", () => addDevCurrency("ether"));
  els.devAddSparks?.addEventListener("click", () => addDevCurrency("sparks"));
  els.devAddDiamonds?.addEventListener("click", () => addDevCurrency("diamonds"));
  els.devAddScrolls?.addEventListener("click", () => addDevCurrency("scrolls"));
  els.devSetDamage?.addEventListener("click", () => setDevCombatOverride("damage"));
  els.devSetDps?.addEventListener("click", () => setDevCombatOverride("dps"));
  els.devGoLevel?.addEventListener("click", jumpDevLevel);
  els.devClearOverrides?.addEventListener("click", clearDevCombatOverrides);
  els.devResetProgress?.addEventListener("click", resetDevProgress);
  els.closeShop.addEventListener("click", () => setShopOpen(false));
  els.shopBackdrop.addEventListener("click", () => setShopOpen(false));
  els.megaBossToggle?.addEventListener("click", () => setMegaBossOpen(els.megaBossDialog.hidden));
  els.closeMegaBoss?.addEventListener("click", () => setMegaBossOpen(false));
  els.megaBossBackdrop?.addEventListener("click", () => setMegaBossOpen(false));
  els.megaBossRingSlot?.addEventListener("click", handleMegaBossRingSlotClick);
  els.openRingInventory?.addEventListener("click", () => setRingInventoryOpen(true));
  els.openMegaBossCrafting?.addEventListener("click", openMegaBossCrafting);
  els.megaBossFlee?.addEventListener("click", fleeMegaBoss);
  els.closeRingInventory?.addEventListener("click", () => setRingInventoryOpen(false));
  els.ringInventoryBackdrop?.addEventListener("click", () => setRingInventoryOpen(false));
  els.ringDetailBackdrop?.addEventListener("click", () => setRingDetailOpen(false));
  els.cancelRingDetail?.addEventListener("click", () => setRingDetailOpen(false));
  els.ringDetailAction?.addEventListener("click", handleRingDetailAction);
  els.ringDetailDisenchant?.addEventListener("click", destroySelectedRingForGems);
  els.closeMegaBossRewards?.addEventListener("click", () => setMegaBossRewardsOpen(false));
  els.megaBossRewardsBackdrop?.addEventListener("click", () => setMegaBossRewardsOpen(false));
  els.closeMegaBossWalkthrough?.addEventListener("click", () => setMegaBossWalkthroughOpen(false));
  els.megaBossWalkthroughBackdrop?.addEventListener("click", () => setMegaBossWalkthroughOpen(false));
  els.megaBossWalkthroughBack?.addEventListener("click", () => advanceMegaBossWalkthrough(-1));
  els.megaBossWalkthroughNext?.addEventListener("click", () => advanceMegaBossWalkthrough(1));
  els.megaBossStageTraits?.addEventListener("click", handleMegaBossTraitTap);
  els.megaBossStageTraits?.addEventListener("keydown", handleMegaBossTraitKeydown);
  els.megaBossCanvas?.addEventListener("pointerdown", handleMegaBossPointerDown);
  els.closeOptions.addEventListener("click", () => setOptionsOpen(false));
  els.optionsBackdrop.addEventListener("click", () => setOptionsOpen(false));
  els.judgmentCooldown?.addEventListener("click", activateJudgmentCooldown);
  els.inventoryToggle?.addEventListener("click", () => setInventoryOpen(els.inventoryDialog.hidden));
  els.closeInventory?.addEventListener("click", () => setInventoryOpen(false));
  els.inventoryBackdrop?.addEventListener("click", () => setInventoryOpen(false));
  els.craftingToggle?.addEventListener("click", () => setCraftingOpen(els.craftingDialog.hidden));
  els.closeCrafting?.addEventListener("click", () => setCraftingOpen(false));
  els.craftingBackdrop?.addEventListener("click", () => setCraftingOpen(false));
  els.closeCraftingMaterials?.addEventListener("click", () => setCraftingMaterialsOpen(false));
  els.craftingMaterialsBackdrop?.addEventListener("click", () => setCraftingMaterialsOpen(false));
  els.openMassDisenchant?.addEventListener("click", () => setMassDisenchantOpen(true));
  els.massDisenchantBackdrop?.addEventListener("click", () => {
    setMassDisenchantOpen(false);
    setMassDisenchantConfirmOpen(false);
  });
  els.confirmMassDisenchantSelection?.addEventListener("click", askMassDisenchantConfirmation);
  els.cancelMassDisenchant?.addEventListener("click", () => setMassDisenchantOpen(false));
  els.performMassDisenchant?.addEventListener("click", performMassDisenchant);
  els.cancelMassDisenchantConfirm?.addEventListener("click", () => setMassDisenchantConfirmOpen(false));
  els.itemDetailBackdrop?.addEventListener("click", () => setItemDetailOpen(false));
  els.equipItemButton?.addEventListener("click", handleSelectedItemAction);
  els.dustItemButton?.addEventListener("click", destroySelectedItemForResources);
  els.cancelItemDetail?.addEventListener("click", () => setItemDetailOpen(false));
  els.destroyOverflowItem?.addEventListener("click", destroyOverflowItemNow);
  els.keepOverflowItem?.addEventListener("click", keepOverflowItemForReview);
  els.inventoryTabs.forEach((button) => {
    button.addEventListener("click", () => setInventoryView(button.dataset.inventoryView));
  });
  els.gearSlotTabs.forEach((button) => {
    button.addEventListener("click", () => setGearSlotView(button.dataset.gearSlotView));
  });
  els.equipmentGrid?.addEventListener("click", handleEquipmentSlotActivation);
  els.inventoryGrid?.addEventListener("click", handleInventorySlotActivation);
  els.equipmentGrid?.addEventListener("pointerover", showItemTooltip);
  els.inventoryGrid?.addEventListener("pointerover", showItemTooltip);
  els.equipmentGrid?.addEventListener("pointermove", positionItemTooltip);
  els.inventoryGrid?.addEventListener("pointermove", positionItemTooltip);
  els.equipmentGrid?.addEventListener("pointerout", hideItemTooltip);
  els.inventoryGrid?.addEventListener("pointerout", hideItemTooltip);
  els.equipmentGrid?.addEventListener("focusin", showItemTooltip);
  els.inventoryGrid?.addEventListener("focusin", showItemTooltip);
  els.equipmentGrid?.addEventListener("focusout", hideItemTooltip);
  els.inventoryGrid?.addEventListener("focusout", hideItemTooltip);
  els.sfxVolume.addEventListener("input", () => setSfxVolume(Number(els.sfxVolume.value) / 100));
  els.sfxVolume.addEventListener("change", () => playTone({ frequency: 440, slideTo: 660, duration: 0.12, type: "triangle", gain: 0.08 }));
  els.musicVolume.addEventListener("input", () => setMusicVolume(Number(els.musicVolume.value) / 100));
  els.bgMusic.addEventListener("ended", playNextMusicTrack);
  els.bgMusic.addEventListener("error", playNextMusicTrack);
  els.rebornButton.addEventListener("click", () => setRebornDialogOpen(true));
  els.confirmReborn.addEventListener("click", performReborn);
  els.cancelReborn.addEventListener("click", () => setRebornDialogOpen(false));
  els.rebornBackdrop.addEventListener("click", () => setRebornDialogOpen(false));
  els.puzzlePortalButton?.addEventListener("pointerdown", (event) => {
    event.preventDefault();
    event.stopPropagation();
    unlockAudio();
    enterPuzzleVault();
  });
  els.puzzlePortalButton?.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
  });
  els.puzzleVaultFlee?.addEventListener("click", fleePuzzleVault);
  els.puzzleVaultReturn?.addEventListener("click", returnFromPuzzleVaultSummary);
  els.offlineLootClose?.addEventListener("click", () => setOfflineLootOpen(false));
  els.closeBossTutorial?.addEventListener("click", dismissBossTutorial);
  els.bossTutorialBackdrop?.addEventListener("click", dismissBossTutorial);
  els.bossTutorialContinue?.addEventListener("click", dismissBossTutorial);
  els.introStartButton?.addEventListener("click", finishStartupIntro);
  document.querySelectorAll("[data-guide-dismiss]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      dismissGuideCallout(button.closest(".dps-guide-callout"));
    });
  });
  els.stageBand?.addEventListener("pointerdown", blockHudDeadZonePointer, { capture: true });
  els.hudHitBlocker?.addEventListener("pointerdown", blockHudDeadZonePointer, { capture: true });
  els.canvas.addEventListener("pointerdown", handleCanvasPointerDown);
  document.addEventListener("pointerdown", () => unlockAudio(), { capture: true });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setOptionsOpen(false);
      setRebornDialogOpen(false);
      setInventoryOpen(false);
      setCraftingOpen(false);
      setItemDetailOpen(false);
      setMassDisenchantOpen(false);
      setMassDisenchantConfirmOpen(false);
      setShopOpen(false);
      setRingDetailOpen(false);
      setRingInventoryOpen(false);
      setMegaBossWalkthroughOpen(false);
      setMegaBossOpen(false);
      setMegaBossRewardsOpen(false);
      setDevOpen(false);
      setDailiesOpen(false);
      setOfflineLootOpen(false);
      dismissBossTutorial();
    }
  });
  document.querySelectorAll("[data-relic]").forEach((button) => button.addEventListener("click", () => buyRelic(button.dataset.relic)));
  document.querySelectorAll("[data-sku]").forEach((button) => button.addEventListener("click", () => purchaseSku(button.dataset.sku)));
  document.querySelectorAll(".tab-button").forEach((button) => {
    button.addEventListener("click", () => {
      activatePanel(button.dataset.tab);
    });
  });
  window.addEventListener("resize", () => {
    resizeCanvas();
    drawMegaBossScene(performance.now());
    fitNumberLabels();
    scheduleGoblinPortalGuideUpdate();
    scheduleAchievementGuideUpdate();
    scheduleDailyGuideUpdate();
    scheduleJudgmentGuideUpdate();
    scheduleLevel60GuideUpdate();
    scheduleDpsGuidePromptUpdate();
  });
  document.addEventListener("scroll", () => {
    scheduleGoblinPortalGuideUpdate();
    scheduleAchievementGuideUpdate();
    scheduleDailyGuideUpdate();
    scheduleJudgmentGuideUpdate();
    scheduleLevel60GuideUpdate();
    scheduleDpsGuidePromptUpdate();
  }, true);
  const handleAppInactive = () => {
    saveState();
    syncAppNotifications({ includeIdleReminder: true });
    stopAnimationLoop();
    pauseAppAudioForBackground();
  };
  const handleAppActive = () => {
    if (document.visibilityState === "hidden") return;
    applyOfflineProgress();
    showPendingOfflineLootReport();
    updateUI();
    syncAppNotifications({ includeIdleReminder: false });
    resumeAppAudioForForeground();
  };
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") handleAppInactive();
    else handleAppActive();
  });
  window.addEventListener("pagehide", handleAppInactive);
  window.addEventListener("blur", handleAppInactive);
  window.addEventListener("freeze", handleAppInactive);
  window.addEventListener("pageshow", handleAppActive);
  window.addEventListener("focus", handleAppActive);
  document.addEventListener("resume", handleAppActive);
  document.addEventListener("pause", handleAppInactive);
  window.Capacitor?.Plugins?.App?.addListener?.("appStateChange", ({ isActive }) => {
    if (isActive) handleAppActive();
    else handleAppInactive();
  });
  updateUI();
  updateTapNuggetReadout(false);
  syncAppNotifications({ includeIdleReminder: false });
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
  scheduleLevel60GuideUpdate();
  scheduleDpsGuidePromptUpdate();
}

function activatePanel(tabName) {
  const selectedTab = document.querySelector(`.tab-button.active[data-tab="${tabName}"]`);
  if (selectedTab) {
    closeGamePanel();
    return;
  }
  document.querySelectorAll(".tab-button").forEach((tab) => tab.classList.toggle("active", tab.dataset.tab === tabName));
  document.querySelectorAll(".panel").forEach((panel) => panel.classList.toggle("active", panel.id === `${tabName}Panel`));
  if (tabName === "reborn" && level60GuideState() === "reborn") {
    setLevel60GuideState("megaBoss");
    closeGamePanel();
    return;
  }
  scheduleLevel60GuideUpdate();
  scheduleDpsGuidePromptUpdate();
}

function handleCanvasPointerDown(event) {
  if (document.querySelector(".panel.active")) {
    closeGamePanel();
  }
  handleTap(event);
}

function dailyQuestProgressText(def, progress) {
  return `${format(progress)} / ${format(def.target)} ${def.unit}`;
}

function updateDailyQuestBadge() {
  if (!els.dailiesToggle) return;
  els.dailiesToggle.classList.toggle("ready", hasClaimableDailyReward());
}

function updateAchievementBadge() {
  if (!els.achievementsToggle) return;
  els.achievementsToggle.classList.toggle("ready", hasClaimableAchievementReward());
}

function renderDailyQuests() {
  normalizeDailyQuestsForCurrentTime();
  updateDailyQuestBadge();
  const weeklyCompleted = Math.max(0, Math.min(WEEKLY_DAILY_GOAL, Math.floor(Number(state.dailies.weeklyCompleted) || 0)));
  const weeklyPct = Math.max(0, Math.min(100, (weeklyCompleted / WEEKLY_DAILY_GOAL) * 100));
  if (els.dailyWeeklyCounter) els.dailyWeeklyCounter.textContent = `${weeklyCompleted}/${WEEKLY_DAILY_GOAL}`;
  if (els.dailyWeeklyFill) els.dailyWeeklyFill.style.width = `${weeklyPct}%`;
  if (els.dailyWeeklyReset) els.dailyWeeklyReset.textContent = "Dailies reset daily at 11:59 PM. Weekly resets Sunday 11:59 PM.";
  if (els.claimWeeklyDailies) {
    const weeklyReady = weeklyCompleted >= WEEKLY_DAILY_GOAL;
    els.claimWeeklyDailies.disabled = !weeklyReady || state.dailies.weeklyRewardClaimed;
    els.claimWeeklyDailies.innerHTML = state.dailies.weeklyRewardClaimed
      ? "Claimed"
      : `<span class="currency-icon diamond" aria-hidden="true"></span><span>Claim ${format(WEEKLY_DAILY_REWARD)}</span>`;
  }
  if (!els.dailyQuestList) return;
  els.dailyQuestList.innerHTML = "";
  for (const def of dailyQuestDefs) {
    const progress = Math.max(0, Math.floor(Number(state.dailies.progress[def.key]) || 0));
    const pct = Math.max(0, Math.min(100, (progress / def.target) * 100));
    const complete = progress >= def.target;
    const claimed = Boolean(state.dailies.claimed[def.key]);
    const card = document.createElement("article");
    card.className = `daily-quest-card${complete ? " complete" : ""}${claimed ? " claimed" : ""}`;
    card.innerHTML = `
      <div class="daily-quest-head">
        <span>${def.name}</span>
        <strong>${dailyQuestProgressText(def, progress)}</strong>
      </div>
      <div class="daily-progress-track" aria-hidden="true">
        <span class="daily-progress-fill" style="width: ${pct}%"></span>
      </div>
      <div class="daily-quest-foot">
        <small class="daily-quest-copy">${def.description}</small>
        <button class="daily-quest-claim" type="button" data-daily-claim="${def.key}" ${complete && !claimed ? "" : "disabled"}>
          ${claimed ? "Claimed" : `<span class="currency-icon diamond" aria-hidden="true"></span><span>Claim ${DAILY_QUEST_REWARD}</span>`}
        </button>
      </div>
    `;
    card.querySelector("[data-daily-claim]")?.addEventListener("click", () => claimDailyQuestReward(def.key));
    els.dailyQuestList.append(card);
  }
  scheduleDailyGuideUpdate();
}

function renderAchievements() {
  if (!els.achievementList) return;
  renderAchievementMilestones();
  updateAchievementBadge();
  els.achievementList.innerHTML = "";
  for (const chain of achievementChains) {
    const claimableDefs = chain.defs.filter((def) => achievementRewardClaimable(def));
    const visibleDef = claimableDefs[0] ?? chain.defs.find((def) => !achievementCompleted(def)) ?? chain.defs[chain.defs.length - 1];
    const chainElement = document.createElement("details");
    chainElement.className = `achievement-chain${claimableDefs.length ? " has-claimable" : ""}`;
    chainElement.innerHTML = `
      <summary class="achievement-chain-summary">
        ${achievementRowMarkup(visibleDef, { compact: true })}
      </summary>
      <div class="achievement-chain-dropdown">
        ${chain.defs.map((def) => achievementDropdownRowMarkup(def)).join("")}
      </div>
    `;
    chainElement.querySelectorAll("[data-achievement-claim]").forEach((button) => {
      button.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        claimAchievementReward(button.dataset.achievementClaim);
      });
    });
    els.achievementList.append(chainElement);
  }
}

function renderAchievementMilestones() {
  const earned = achievementPointsEarned();
  const pct = ACHIEVEMENT_MILESTONE_GOAL > 0 ? Math.max(0, Math.min(100, (earned / ACHIEVEMENT_MILESTONE_GOAL) * 100)) : 0;
  if (els.achievementMilestoneText) els.achievementMilestoneText.textContent = `${earned} / ${ACHIEVEMENT_MILESTONE_GOAL}`;
  if (els.achievementMilestoneFill) els.achievementMilestoneFill.style.width = `${pct}%`;
  if (els.achievementMilestoneToggle) {
    els.achievementMilestoneToggle.setAttribute("aria-expanded", String(achievementMilestonesOpen));
    els.achievementMilestoneToggle.setAttribute("aria-label", `Open milestones, ${format(earned)} of ${format(ACHIEVEMENT_MILESTONE_GOAL)} points`);
  }
  const milestones = achievementMilestoneState();
  if (els.achievementDiamondTierButton) {
    els.achievementDiamondTierButton.disabled = milestones.diamondUnlocked;
    els.achievementDiamondTierButton.innerHTML = milestones.diamondUnlocked
      ? "Diamond Tier Active"
      : `<span class="currency-icon diamond" aria-hidden="true"></span><span>Unlock ${format(ACHIEVEMENT_DIAMOND_TIER_COST)}</span>`;
  }
  if (els.achievementMilestoneLadder) {
    const ladderParts = [];
    let segmentStart = 0;
    for (const milestone of achievementMilestoneDefs) {
      ladderParts.push(achievementMilestoneSegmentMarkup(segmentStart, milestone.points, earned));
      ladderParts.push(achievementMilestoneRowMarkup(milestone, earned));
      segmentStart = milestone.points;
    }
    els.achievementMilestoneLadder.innerHTML = `
      <div class="achievement-ladder-body">
        ${ladderParts.join("")}
      </div>
    `;
    els.achievementMilestoneLadder.querySelectorAll("[data-achievement-milestone-reward]").forEach((button) => {
      button.addEventListener("click", () => {
        const [milestoneKey, tier] = button.dataset.achievementMilestoneReward.split(":");
        selectAchievementMilestoneReward(milestoneKey, tier);
      });
    });
  }
  scheduleAchievementGuideUpdate();
  if (selectedAchievementMilestoneReward && els.achievementMilestoneRewardDialog && !els.achievementMilestoneRewardDialog.hidden) {
    renderAchievementMilestoneDetail();
  }
}

function achievementMilestoneSegmentMarkup(startPoints, endPoints, earned) {
  const start = Math.max(0, Math.floor(Number(startPoints) || 0));
  const end = Math.max(start + 1, Math.floor(Number(endPoints) || start + 1));
  const fillPct = Math.max(0, Math.min(100, ((earned - start) / (end - start)) * 100));
  return `
    <div class="achievement-ladder-segment" aria-hidden="true">
      <span class="achievement-ladder-segment-fill" style="height: ${fillPct.toFixed(2)}%"></span>
    </div>
  `;
}

function achievementMilestoneRowMarkup(milestone, earned) {
  return `
    <div class="achievement-milestone-row${earned >= milestone.points ? " reached" : ""}">
      ${achievementMilestoneRewardButtonMarkup(milestone, "free", earned)}
      <span class="achievement-milestone-node">${format(milestone.points)}</span>
      ${achievementMilestoneRewardButtonMarkup(milestone, "diamond", earned)}
    </div>
  `;
}

function achievementMilestoneRewardButtonMarkup(milestone, tier, earned) {
  const rewards = milestone[tier].rewards;
  const selected = selectedAchievementMilestoneReward?.milestoneKey === milestone.key && selectedAchievementMilestoneReward?.tier === tier;
  const reached = earned >= milestone.points;
  const tierUnlocked = achievementMilestoneTierUnlocked(tier);
  const claimed = achievementMilestoneRewardClaimed(milestone.key, tier);
  const unavailable = !reached || !tierUnlocked;
  const progressText = `${format(Math.min(earned, milestone.points))}/${format(milestone.points)} pts`;
  const stateText = claimed ? "Claimed" : reached && tierUnlocked ? "Ready" : progressText;
  return `
    <button class="achievement-milestone-reward ${tier}${selected ? " selected" : ""}${reached ? " reached" : ""}${claimed ? " claimed" : ""}${!tierUnlocked ? " locked" : ""}${unavailable ? " unavailable" : ""}" type="button" data-achievement-milestone-reward="${milestone.key}:${tier}">
      <span class="achievement-milestone-reward-icon" aria-hidden="true">${milestoneRewardIconMarkup(rewards)}</span>
      <strong>${stateText}</strong>
    </button>
  `;
}

function renderAchievementMilestoneDetail() {
  if (!els.achievementMilestoneDetail) return;
  const selection = selectedAchievementMilestoneReward;
  const milestone = selection ? achievementMilestoneDef(selection.milestoneKey) : null;
  const tier = selection?.tier;
  if (!milestone || (tier !== "free" && tier !== "diamond")) {
    els.achievementMilestoneDetail.hidden = true;
    els.achievementMilestoneDetail.innerHTML = "";
    return;
  }
  const rewards = milestone[tier].rewards;
  const earned = achievementPointsEarned();
  const reached = earned >= milestone.points;
  const tierUnlocked = achievementMilestoneTierUnlocked(tier);
  const claimed = achievementMilestoneRewardClaimed(milestone.key, tier);
  const disabled = !reached || !tierUnlocked || claimed;
  const claimLabel = claimed
    ? "Claimed"
    : !tierUnlocked
      ? "Unlock Diamond Tier"
      : !reached
        ? `Needs ${format(milestone.points - earned)} points`
        : "Claim Reward";
  if (els.achievementMilestoneRewardTitle) {
    els.achievementMilestoneRewardTitle.textContent = `${format(milestone.points)} Point Reward`;
  }
  els.achievementMilestoneDetail.hidden = false;
  els.achievementMilestoneDetail.innerHTML = `
    <div class="achievement-milestone-detail-head">
      <strong>${format(milestone.points)} Point ${milestone[tier].label}</strong>
      <span>${reached ? "Reached" : `${format(earned)} / ${format(milestone.points)}`}</span>
    </div>
    <div class="achievement-milestone-reward-list">${milestoneRewardMarkup(rewards)}</div>
    <button class="achievement-milestone-claim" type="button" data-achievement-milestone-claim="${milestone.key}:${tier}" ${disabled ? "disabled" : ""}>${claimLabel}</button>
  `;
  els.achievementMilestoneDetail.querySelector("[data-achievement-milestone-claim]")?.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    claimAchievementMilestoneReward(milestone.key, tier);
  });
}

function achievementRowMarkup(def, { compact = false } = {}) {
  const progress = Math.min(def.target, achievementProgress(def));
  const progressPct = Math.max(0, Math.min(100, (progress / def.target) * 100));
  const complete = achievementCompleted(def);
  const rewardClaimed = achievementRewardClaimed(def);
  const claimable = complete && !rewardClaimed;
  return `
    <article class="achievement-row${complete ? " complete" : ""}${claimable ? " claimable" : ""}${rewardClaimed ? " claimed" : ""}${compact ? " compact" : ""}">
      <span class="achievement-row-icon" aria-hidden="true"><img src="${def.icon}" alt="" /></span>
      <span class="achievement-row-body">
        <strong class="achievement-row-title">${def.name}</strong>
        <span class="achievement-row-desc">${def.description}</span>
        <span class="achievement-row-progress">${formatAchievementValue(progress)} / ${formatAchievementValue(def.target)}</span>
        <span class="achievement-row-track" aria-hidden="true"><span class="achievement-row-fill" style="width: ${progressPct}%"></span></span>
      </span>
      <span class="achievement-reward-meta" title="Reward: ${format(def.rewardGems)} gems. ${format(def.points)} achievement points.">
        <span class="achievement-gem-reward"><span class="currency-icon diamond" aria-hidden="true"></span><span>Reward: x${format(def.rewardGems)}</span></span>
        <span class="achievement-point-reward">${format(def.points)} points</span>
        ${claimable ? `<span class="achievement-claim-status">Reward ready</span>` : ""}
      </span>
    </article>
  `;
}

function achievementDropdownRowMarkup(def) {
  const progress = Math.min(def.target, achievementProgress(def));
  const complete = achievementCompleted(def);
  const rewardClaimed = achievementRewardClaimed(def);
  const claimable = complete && !rewardClaimed;
  const missing = Math.max(0, def.target - progress);
  const buttonLabel = rewardClaimed
    ? "Claimed"
    : claimable
      ? `Claim ${format(def.rewardGems)} gems`
      : `Needs ${formatAchievementValue(missing)}`;
  return `
    <div class="achievement-dropdown-row${complete ? " complete" : ""}${claimable ? " claimable" : ""}${rewardClaimed ? " claimed" : ""}">
      <span class="achievement-row-icon small" aria-hidden="true"><img src="${def.icon}" alt="" /></span>
      <span class="achievement-dropdown-body">
        <strong>${def.name}</strong>
        <small>${formatAchievementValue(progress)} / ${formatAchievementValue(def.target)} - ${format(def.points)} points</small>
      </span>
      <button class="achievement-claim-button" type="button" data-achievement-claim="${def.key}" ${claimable ? "" : "disabled"}>
        ${buttonLabel}
      </button>
    </div>
  `;
}

function statRowMarkup(label, value) {
  return `<div class="stat-row"><b>${label}</b><span>${value}</span></div>`;
}

function statBreakdownMarkup(label, map) {
  const entries = Object.entries(map ?? {})
    .filter(([, count]) => Math.max(0, Math.floor(Number(count) || 0)) > 0)
    .sort((a, b) => Math.max(0, Math.floor(Number(b[1]) || 0)) - Math.max(0, Math.floor(Number(a[1]) || 0)) || a[0].localeCompare(b[0]));
  const rows = entries.length
    ? entries.map(([name, count]) => `<div class="stat-breakdown-row"><b>${name}</b><span>${format(count)}</span></div>`).join("")
    : `<div class="stat-breakdown-row"><b>No entries yet</b><span>0</span></div>`;
  return `
    <details class="stat-breakdown">
      <summary><b>${label}</b><span>${entries.length} listed</span></summary>
      ${rows}
    </details>
  `;
}

function statCategoryMarkup(title, rows) {
  return `<section class="stat-category"><h3>${title}</h3>${rows.join("")}</section>`;
}

function renderStatistics() {
  if (!els.statisticsList) return;
  const stats = lifetimeStats();
  els.statisticsList.innerHTML = [
    statCategoryMarkup("Taps", [
      statRowMarkup("Tap Count", format(stats.lifetimeTaps)),
      statRowMarkup("Chest Tap Count", format(stats.lifetimeChestTaps))
    ]),
    statCategoryMarkup("Damage", [
      statRowMarkup("Total Damage Done", format(stats.totalDamage)),
      statRowMarkup("Highest Tap Crit", formatCritDamage(stats.highestTapCrit))
    ]),
    statCategoryMarkup("Kills", [
      statRowMarkup("Creature Kills", format(stats.creatureKills)),
      statBreakdownMarkup("Creature Breakdown", stats.creatureKillsByName),
      statRowMarkup("Normal Boss Kills", format(stats.normalBossKills)),
      statBreakdownMarkup("Normal Boss Breakdown", stats.normalBossKillsByName),
      statRowMarkup("Goblin Kills", format(stats.goblinKills)),
      statBreakdownMarkup("Goblin Breakdown", stats.goblinKillsByName),
      statRowMarkup("Mega Boss Kills", format(stats.megaBossKills)),
      statBreakdownMarkup("Mega Boss Breakdown", stats.megaBossKillsByName)
    ]),
    statCategoryMarkup("Progression", [
      statRowMarkup("Reborns", format(stats.lifetimeReborns)),
      statRowMarkup("Hammer of Judgement Uses", format(stats.judgmentUses))
    ])
  ].join("");
}

function handleMegaBossPointerDown(event) {
  const def = activeMegaBossDef();
  if (!def) {
    toast("Start an unlocked Mega Boss first.");
    return;
  }
  const rect = els.megaBossCanvas.getBoundingClientRect();
  const touch = event.touches?.[0] ?? event;
  const x = touch.clientX - rect.left;
  const y = touch.clientY - rect.top;
  unlockAudio();
  state.taps += 1;
  recordTapProgress();
  trackDailyQuestProgress("taps", 1);
  const crit = rollTapCrit();
  const damage = tapDamage() * crit.multiplier;
  if (crit.critical) recordHighestTapCrit(damage);
  damageMegaBoss(damage, x, y, { visible: true, critical: crit.critical });
  markActiveRender(1800);
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

function upgradeIconMarkup(def, className = "upgrade-icon") {
  if (def?.iconSrc) {
    return `<span class="${className} custom-upgrade-icon" style="--custom-icon: url('${def.iconSrc}')" aria-hidden="true"></span>`;
  }
  return atlasIconMarkup(def?.iconIndex, className);
}

function renderShopProducts() {
  if (!els.shopProducts) return;
  els.shopProducts.innerHTML = "";
  for (const [sku, product] of Object.entries(shopProducts)) {
    const baseDiamonds = Math.max(0, Math.floor(Number(product.diamonds) || 0));
    const totalDiamonds = shopProductTotalDiamonds(product);
    const hasBonus = shopProductBonusDiamonds(product) > 0;
    const button = document.createElement("button");
    button.className = `shop-row shop-tier-${product.tier ?? 1}${product.featured ? " featured" : ""}`;
    button.type = "button";
    button.dataset.sku = sku;
    button.setAttribute("aria-label", `${product.name}, ${formatShopDiamonds(totalDiamonds)} diamonds, ${product.price}`);
    button.innerHTML = `
      <span class="shop-product-kicker">${product.kicker}</span>
      <span class="shop-product-art" aria-hidden="true">
        <img src="${product.image}" alt="" />
        <span class="shop-card-sparkle shop-card-sparkle-a"></span>
        <span class="shop-card-sparkle shop-card-sparkle-b"></span>
        <span class="shop-card-sparkle shop-card-sparkle-c"></span>
        <span class="shop-card-sparkle shop-card-sparkle-d"></span>
      </span>
      <span class="shop-product-body">
        <strong class="shop-product-name">${product.name}</strong>
        <small>${product.note}</small>
      </span>
      <span class="shop-product-side">
        <span class="shop-product-amount${hasBonus ? " has-bonus" : ""}">
          <span class="shop-base-amount">
            <span class="currency-icon diamond"></span>
            <span>${formatShopDiamonds(baseDiamonds)}</span>
          </span>
          ${hasBonus ? `
            <span class="shop-total-amount">
              <span class="currency-icon diamond"></span>
              <span>${formatShopDiamonds(totalDiamonds)}</span>
            </span>
          ` : ""}
        </span>
        <small data-shop-action>${product.price}</small>
      </span>
    `;
    els.shopProducts.append(button);
  }
  updateShopProducts();
}

function updateShopProducts() {
  if (!els.shopProducts) return;
  els.shopProducts.querySelectorAll("[data-sku]").forEach((button) => {
    const sku = button.dataset.sku;
    const pending = purchasingSku === sku;
    button.disabled = Boolean(purchasingSku);
    button.classList.toggle("pending", pending);
    button.setAttribute("aria-busy", String(pending));
    const action = button.querySelector("[data-shop-action]");
    if (action) action.textContent = pending ? "Granting..." : shopProducts[sku]?.price ?? "Buy";
  });
}

function renderMegaBossRewards(def) {
  if (!els.megaBossRewardsBody || !def) return;
  const etherReward = formatLog10(megaBossEtherRewardLog(def));
  const portalChance = formatDropChance(puzzleRingDropChance("megaBoss"));
  const resourceRows = megaBossResourceRewardEntries(def)
    .map((reward) => {
      const amount = reward.min === reward.max ? `+${format(reward.min)}` : `+${format(reward.min)}-${format(reward.max)}`;
      return `
      <div class="mega-boss-reward-resource" style="--resource-color: ${reward.resource.color}">
        <span class="resource-icon" style="--resource-color: ${reward.resource.color}; --resource-icon: url('${reward.resource.icon}')" aria-hidden="true"></span>
        <strong>${amount}</strong>
        <span>${reward.resource.label}</span>
      </div>
    `;
    })
    .join("");
  const dustRows = megaBossDustDropChances()
    .map((entry) => `
      <li>
        <span class="mega-boss-dust-name">
          <span class="resource-icon" style="--resource-color: ${entry.resource.color}; --resource-icon: url('${entry.resource.icon}')" aria-hidden="true"></span>
          <span>${entry.resource.label}</span>
        </span>
        <strong>${formatDropChance(entry.chance)} / ${dustRewardRangeText(entry)}</strong>
      </li>
    `)
    .join("");
  els.megaBossRewardsBody.innerHTML = `
    <div class="mega-boss-reward-ether">
      <span class="currency-icon ether" aria-hidden="true"></span>
      <strong>${etherReward}</strong>
      <span>Ether</span>
    </div>
    ${resourceRows}
    <div class="mega-boss-reward-portal">
      <span class="mega-boss-reward-portal-icon" aria-hidden="true"></span>
      <strong>${portalChance}</strong>
      <span>Puzzle Vault Portal</span>
    </div>
    <div class="mega-boss-reward-dust">
      <strong>Dust Drops</strong>
      <ul>${dustRows}</ul>
      <p>Mega bosses always drop at least one dust reward and can drop several types.</p>
    </div>
  `;
}

function renderMegaBosses() {
  if (!els.megaBossList) return;
  normalizeMegaBossDaily();
  els.megaBossList.innerHTML = "";
  if (els.megaBossScrolls) els.megaBossScrolls.textContent = scrollCountText(state.megaBoss?.scrolls ?? 0);
  renderMegaBossRing();
  const def = selectedMegaBossDef();
  const hasPrevious = selectedMegaBossIndex > 0;
  const nextDef = megaBossDefs[selectedMegaBossIndex + 1] ?? null;
  const nextUnlocked = nextDef ? megaBossUnlocked(nextDef) : false;
  const canNavigateNext = Boolean(nextDef && nextUnlocked);
  const nextRequirementText = nextDef && !nextUnlocked ? `Requires level ${nextDef.unlockLevel}` : "";
  const activeDef = activeMegaBossDef();
  const unlocked = megaBossUnlocked(def);
  const active = activeDef?.key === def.key;
  const blockedByActive = Boolean(activeDef && !active);
  const firstClearPending = megaBossFirstClearPending(def);
  const attemptsLeft = megaBossAttemptsLeft(def);
  const buttonDisabled = !unlocked || active || blockedByActive || (!firstClearPending && attemptsLeft <= 0);
  const buttonState = !unlocked
    ? "Locked"
    : active
      ? "In Battle"
      : blockedByActive
        ? "Finish Battle"
        : !firstClearPending && attemptsLeft <= 0
          ? "Daily Limit"
          : "Battle";
  const buttonDetail = !unlocked
    ? `Requires level ${def.unlockLevel}`
    : active
      ? "Active now"
      : blockedByActive
        ? "Battle active"
        : !firstClearPending && attemptsLeft <= 0
          ? "Try tomorrow"
          : firstClearPending
            ? "First clear free"
            : `${MEGA_BOSS_SCROLL_COST} Scroll`;
  if (els.megaBossStageTraits) {
    els.megaBossStageTraits.innerHTML = megaBossDamageTraitMarkup(def);
  }
  if (els.megaBossStageRewards) {
    els.megaBossStageRewards.setAttribute("aria-label", `View ${def.name} rewards`);
    els.megaBossStageRewards.title = `${def.name} Rewards`;
    els.megaBossStageRewards.onclick = () => setMegaBossRewardsOpen(true, def);
  }
  const nav = document.createElement("div");
  nav.className = "mega-boss-selector";
  nav.innerHTML = `
    <div class="mega-boss-nav-cell">
      ${hasPrevious ? `<button class="mega-boss-arrow-button back" type="button" data-mega-boss-nav="-1" aria-label="Previous mega boss"></button>` : `<span class="mega-boss-nav-spacer" aria-hidden="true"></span>`}
    </div>
    <div class="mega-boss-selector-title">
      <strong>${def.name}</strong>
      <button class="mega-boss-battle-button${unlocked ? "" : " locked"}" type="button" data-mega-boss-start="${def.key}" ${buttonDisabled ? "disabled" : ""} aria-label="${buttonState} ${def.name}">
        ${unlocked ? "" : `<span class="mega-boss-battle-lock" aria-hidden="true"></span>`}
        <span>${buttonState}</span>
        <small>${buttonDetail}</small>
      </button>
    </div>
    <div class="mega-boss-nav-cell">
      <button class="mega-boss-arrow-button forward" type="button" data-mega-boss-nav="1" ${canNavigateNext ? "" : "disabled"} aria-label="${nextDef ? `Next mega boss, ${nextUnlocked ? nextDef.name : nextRequirementText}` : "No next mega boss"}"></button>
      ${nextRequirementText ? `<small>${nextRequirementText}</small>` : nextDef ? "" : `<small>Coming Soon!</small>`}
    </div>
  `;
  const navScope = els.megaBossHeadingSlot ?? els.megaBossList;
  if (els.megaBossHeadingSlot) {
    els.megaBossHeadingSlot.innerHTML = "";
    els.megaBossHeadingSlot.append(nav);
  } else {
    els.megaBossList.append(nav);
  }
  navScope.querySelectorAll("[data-mega-boss-nav]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedMegaBossIndex = Math.max(0, Math.min(megaBossDefs.length - 1, selectedMegaBossIndex + Number(button.dataset.megaBossNav)));
      renderMegaBosses();
      drawMegaBossScene(performance.now());
      markActiveRender(900);
    });
  });
  els.megaBossList.querySelectorAll("[data-mega-boss-rewards]").forEach((button) => {
    button.addEventListener("click", () => {
      const def = megaBossDefs.find((boss) => boss.key === button.dataset.megaBossRewards);
      setMegaBossRewardsOpen(true, def);
    });
  });
  [...new Set([navScope, els.megaBossList])].forEach((scope) => {
    scope.querySelectorAll("[data-mega-boss-start]").forEach((button) => {
      button.addEventListener("click", () => startMegaBoss(button.dataset.megaBossStart));
    });
  });
  updateMegaBossUI();
}

function updateMegaBossStageTimer(def = selectedMegaBossDef(), remainingMs = null) {
  if (!els.megaBossStageTimerText || !def) return;
  const ms = remainingMs === null ? def.timeLimitMs : Math.max(0, Number(remainingMs) || 0);
  els.megaBossStageTimerText.textContent = formatTimer(ms);
}

function updateMegaBossUI() {
  if (!els.megaBossHealthFill || !els.megaBossHealthText || !els.megaBossStatus) return;
  updateMegaBossBattleMode();
  if (els.megaBossScrolls) els.megaBossScrolls.textContent = scrollCountText(state.megaBoss?.scrolls ?? 0);
  const active = activeMegaBossDef();
  if (!active) {
    updateMegaBossStageTimer(selectedMegaBossDef());
    if (els.megaBossHealth) els.megaBossHealth.hidden = true;
    els.megaBossHealthFill.style.width = "0%";
    els.megaBossHealthText.textContent = "";
    els.megaBossStatus.textContent = "";
    return;
  }
  if (els.megaBossHealth) els.megaBossHealth.hidden = false;
  const hpLog = Number.isFinite(state.megaBoss.hpLog) ? state.megaBoss.hpLog : finiteLog10(state.megaBoss.hp, -Infinity);
  const maxHpLog = Number.isFinite(state.megaBoss.maxHpLog) ? state.megaBoss.maxHpLog : finiteLog10(state.megaBoss.maxHp, 0);
  const pct = healthPercentFromLogs(hpLog, maxHpLog);
  const remaining = Math.max(0, (state.megaBoss.endsAt || 0) - Date.now());
  updateMegaBossStageTimer(active, remaining);
  const healthRatio = Math.max(0, Math.min(1, pct / 100));
  const healthHue = Math.round(healthRatio * 120);
  els.megaBossHealthFill.style.width = `${pct}%`;
  els.megaBossHealthFill.style.background = `linear-gradient(180deg, hsl(${healthHue}, 84%, 58%), hsl(${healthHue}, 78%, 38%) 62%, hsl(${healthHue}, 76%, 24%))`;
  els.megaBossHealthText.textContent = `${formatHealthValue(state.megaBoss.hp, hpLog)} / ${formatHealthValue(state.megaBoss.maxHp, maxHpLog)}`;
  els.megaBossStatus.textContent = `${active.name} is active. Time left: ${formatTimer(remaining)}.`;
  fitNumberLabels();
}

function renderUpgrades() {
  els.upgradeList.innerHTML = "";
  for (const def of upgradeDefs.filter((upgrade) => upgrade.panel !== "boons")) {
    els.upgradeList.append(createUpgradeButton(def));
  }
}

function renderBoonUpgrades() {
  if (!els.boonList) return;
  els.boonList.innerHTML = "";
  for (const def of upgradeDefs.filter((upgrade) => upgrade.panel === "boons")) {
    els.boonList.append(createUpgradeButton(def));
  }
}

function createUpgradeButton(def) {
    const button = document.createElement("button");
    button.className = "upgrade-row";
    button.type = "button";
    button.dataset.upgrade = def.key;
    button.innerHTML = `
      ${upgradeIconMarkup(def)}
      <span>
        <strong>${def.name}</strong>
        <small>${def.description}</small>
        <small class="effect-line" data-upgrade-effect>${upgradeEffectText(def)}</small>
        <em data-level>Lv 0</em>
      </span>
      <b data-cost>${etherCostMarkup(0)}</b>
    `;
    button.addEventListener("click", () => buyUpgrade(def.key));
    return button;
}

function renderBuffs() {
  if (!els.buffList) return;
  els.buffList.innerHTML = "";
  const groups = [
    { title: "Buffs", defs: buffDefs.filter((buff) => buff.costType !== "diamond") },
    { title: "Super Buffs", defs: buffDefs.filter((buff) => buff.costType === "diamond") }
  ];
  for (const group of groups) {
    if (!group.defs.length) continue;
    const section = document.createElement("section");
    section.className = "panel-category";
    if (group.title !== "Buffs") {
      const heading = document.createElement("h3");
      heading.textContent = group.title;
      section.append(heading);
    }
    const list = document.createElement("div");
    list.className = "buff-list";
    for (const def of group.defs) {
    const button = document.createElement("button");
    button.className = "buff-card";
    button.type = "button";
    button.dataset.buff = def.key;
    button.innerHTML = `
      <span class="ability-icon ability-icon-${def.key}" aria-hidden="true"></span>
      <span>
        <strong>${def.name}</strong>
        <small>${def.description}</small>
        <small class="effect-line" data-buff-effect>${buffEffectText(def)}</small>
        <em data-buff-timer>Ready</em>
      </span>
      <span class="buff-meta">
        <em data-buff-stack>${def.maxStacks ? `Max ${def.maxStacks} stacks` : "Timed buff"}</em>
        <b><span class="buff-flame ${def.flameClass ?? ""}" aria-hidden="true"></span><span data-buff-cost>${buffCostMarkup(def, 0)}</span></b>
      </span>
    `;
    button.addEventListener("click", () => buyBuff(def.key));
      list.append(button);
    }
    section.append(list);
    els.buffList.append(section);
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
      ${upgradeIconMarkup(def, "upgrade-icon reborn-upgrade-icon")}
      <span>
        <strong>${def.name}</strong>
        <small>${def.description}</small>
        <small class="effect-line" data-reborn-effect>${rebornUpgradeEffectText(def)}</small>
        <em data-reborn-level>Lv 0</em>
      </span>
      <b data-reborn-cost>${sparkCostMarkup(0)}</b>
    `;
    button.addEventListener("click", () => buyRebornUpgrade(def.key));
    els.rebornList.append(button);
  }
}

function ringIconMarkup(ring, options = {}) {
  const def = ringDefs[ring?.defKey];
  const type = def?.damageType ?? "physical";
  const quality = ringQualityKey(def);
  const large = options.large ? " large" : "";
  const damageIcon = ringDamageTypes[type]?.icon ?? "";
  return `<span class="ring-icon-wrap ${type} quality-${quality}${large}" style="--ring-color: ${ringDamageTypeColor(type)}"><img class="ring-icon-img ${type} quality-${quality}" src="${ringIconSrc(ring)}" alt="" aria-hidden="true" />${damageIcon ? `<span class="ring-icon-damage-badge" style="--damage-type-color: ${ringDamageTypeColor(type)}; --damage-type-icon: url('${damageIcon}')" aria-hidden="true"></span>` : ""}</span>`;
}

function ringIconSrc(ring) {
  return ringDefs[ring?.defKey]?.icon ?? "assets/icons/test-ring-icon.png?v=278";
}

function emptyRingSlotMarkup(className = "ring-slot-empty-icon") {
  return `<img class="${className}" src="assets/icons/ring-empty-slot-icon.png?v=278" alt="" aria-hidden="true" />`;
}

function renderMegaBossRing() {
  if (!els.megaBossRingSlot) return;
  const ring = equippedRing();
  const selectedDef = selectedMegaBossDef();
  els.megaBossRingSlot.className = `mega-boss-ring-slot ${ring ? `has-ring quality-${ringQualityKey(ring)}` : "empty"}`;
  if (!ring) {
    els.megaBossRingSlot.setAttribute("aria-label", "Ring slot empty");
    els.megaBossRingSlot.title = "Ring slot empty. Use Ring Inventory to equip a Mega Boss ring.";
    els.megaBossRingSlot.innerHTML = `
      ${emptyRingSlotMarkup()}
      <span>
        <strong>Ring</strong>
      </span>
    `;
    return;
  }
  els.megaBossRingSlot.setAttribute("aria-label", `Inspect ${ringDisplayName(ring)}`);
  els.megaBossRingSlot.title = `${ringDisplayName(ring)}: ${ringBonusText(ring)}. ${megaBossRingBonusText(selectedDef)}. Tap for details or to unequip.`;
  els.megaBossRingSlot.innerHTML = `
    ${ringIconMarkup(ring)}
    <span>
      <strong>${ringDisplayName(ring)}</strong>
      <small>${ringSlotBonusText(ring)}</small>
    </span>
  `;
}

function renderRingInventory() {
  renderMegaBossRing();
  if (!els.ringInventoryGrid || !els.ringEquippedSummary) return;
  const rings = ringInventoryState();
  els.ringEquippedSummary.hidden = true;
  els.ringEquippedSummary.innerHTML = "";

  els.ringInventoryGrid.innerHTML = "";
  rings.bag.forEach((ring, index) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = `inventory-slot ring-inventory-slot ${ring ? `has-item has-ring quality-${ringQualityKey(ring)}` : "empty"}`;
    card.dataset.ringSlot = String(index);
    if (ring) {
      card.title = `${ringDisplayName(ring)}: ${ringBonusText(ring)}. Tap for details or to equip.`;
      card.innerHTML = `
        ${ringIconMarkup(ring)}
      `;
      card.dataset.ringInspect = String(index);
    } else {
      card.title = "Empty ring inventory slot";
      card.innerHTML = emptyRingSlotMarkup();
    }
    els.ringInventoryGrid.append(card);
  });
  els.ringInventoryGrid.querySelectorAll("[data-ring-inspect]").forEach((button) => {
    button.addEventListener("click", () => setRingDetailOpen(true, { index: Number(button.dataset.ringInspect) }));
  });
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
    const upgrade = item ? isItemUpgrade(item) : false;
    const upgradeClass = upgrade ? " is-upgrade" : "";
    const button = document.createElement("button");
    button.type = "button";
    button.className = `inventory-slot ${item ? `has-item quality-${quality.key}${realmClass}${upgradeClass}` : "empty"}`;
    button.dataset.inventorySlot = String(index);
    button.title = def ? `${itemDisplayName(item)}: ${itemBonusText(item)}. Tap to inspect.` : "Empty slot";
    if (def) button.dataset.tooltip = itemTooltipText(item, def);
    button.innerHTML = item ? itemIconMarkup(item, def, { upgrade }) : "";
    els.inventoryGrid.append(button);
  }
}

function itemTooltipText(item, def = itemDefs[item?.defKey]) {
  const quality = qualityByKey[item?.quality] ?? qualityByKey.common;
  const stats = itemBonusText(item) || "No bonuses";
  return `${itemDisplayName(item)}\n${quality.label} ${slotLabel(def?.slot)}\n${stats}`;
}

function renderResourceRows(container) {
  if (!container) return;
  container.innerHTML = "";
  for (const section of inventoryResourceSections) {
    const open = Boolean(resourceSectionsOpen[section.key]);
    const total = section.resources.reduce((sum, resource) => sum + Math.floor(Number(state.inventory.resources?.[resource.key]) || 0), 0);
    const sectionEl = document.createElement("section");
    sectionEl.className = `resource-section ${open ? "open" : "closed"}`;
    sectionEl.innerHTML = `
      <button class="resource-section-toggle" type="button" aria-expanded="${open}" data-resource-section="${section.key}">
        <span>${section.label}</span>
        <strong>${format(total)}</strong>
        <i aria-hidden="true"></i>
      </button>
      <div class="resource-section-rows"${open ? "" : " hidden"}></div>
    `;
    const rows = sectionEl.querySelector(".resource-section-rows");
    for (const resource of section.resources) {
      const row = document.createElement("div");
      row.className = [
        "resource-row",
        resource.quality ? `quality-${resource.quality}` : "",
        resource === soulResourceDef ? "resource-soul-row" : "",
        gemResourceDefs.includes(resource) ? "resource-gem-row" : "",
        zoneInventoryResourceDefs.includes(resource) ? "resource-zone-row" : ""
      ].filter(Boolean).join(" ");
      row.style.setProperty("--resource-color", resource.color);
      row.innerHTML = `
        <span class="resource-icon" style="--resource-color: ${resource.color}; --resource-icon: url('${resource.icon}')" aria-hidden="true"></span>
        <span>${resource.label}</span>
        <strong>${format(state.inventory.resources?.[resource.key] ?? 0)}</strong>
      `;
      rows.append(row);
    }
    sectionEl.querySelector("[data-resource-section]").addEventListener("click", () => {
      resourceSectionsOpen[section.key] = !resourceSectionsOpen[section.key];
      renderResourceRows(container);
    });
    container.append(sectionEl);
  }
}

function renderResources() {
  renderResourceRows(els.resourcesGrid);
}

function renderCraftingResources() {
  renderResourceRows(els.craftingResourcesGrid);
}

function essenceCrucibleQueue() {
  state.essenceCrucible = normalizeEssenceCrucibleState(state.essenceCrucible);
  return state.essenceCrucible.queue;
}

function formatEssenceCrucibleTime(ms) {
  const totalMinutes = Math.max(0, Math.ceil(ms / 60000));
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  if (hours <= 0) return `${minutes}m`;
  return `${hours}h ${String(minutes).padStart(2, "0")}m`;
}

function settleEssenceCrucibleQueue(now = Date.now(), options = {}) {
  const queue = essenceCrucibleQueue();
  const completed = queue.filter((entry) => entry.readyAt <= now).length;
  if (completed <= 0) return 0;
  state.essenceCrucible.queue = queue.filter((entry) => entry.readyAt > now);
  const diamonds = completed * ESSENCE_CRUCIBLE_DIAMONDS;
  state.diamonds = floorGameNumber(state.diamonds + diamonds);
  if (options.announce) {
    toast(`Goblin Essence Crucible produced ${format(diamonds)} Diamonds.`);
  }
  if (options.persist) saveState();
  return completed;
}

function queueEssenceCrucibleConversion() {
  const now = Date.now();
  settleEssenceCrucibleQueue(now);
  const queue = essenceCrucibleQueue();
  if (queue.length >= ESSENCE_CRUCIBLE_MAX_QUEUE) return 0;
  const latestReadyAt = queue.reduce((latest, entry) => Math.max(latest, entry.readyAt), now);
  const readyAt = Math.max(now, latestReadyAt) + ESSENCE_CRUCIBLE_DURATION_MS;
  state.essenceCrucible.queue = normalizeEssenceCrucibleState({
    queue: [...queue, { queuedAt: now, readyAt }]
  }).queue;
  return readyAt;
}

function essenceCrucibleStatusText() {
  const queue = essenceCrucibleQueue();
  const count = queue.length;
  if (count <= 0) return "Queue empty. Each conversion takes 1 hour.";
  const remaining = Math.max(0, queue[0].readyAt - Date.now());
  return `${count}/${ESSENCE_CRUCIBLE_MAX_QUEUE} hours queued. Next batch in ${formatEssenceCrucibleTime(remaining)}.`;
}

function canPayCraftingCost(cost) {
  if (cost.resource) return Math.floor(Number(state.inventory.resources?.[cost.resource]) || 0) >= cost.amount;
  if (cost.ring) return ownedRingCount(cost.ring) >= cost.amount;
  return false;
}

function canCraftRecipe(recipe) {
  return recipe.costs.every(canPayCraftingCost) && canReceiveRecipeOutput(recipe);
}

function canReceiveRecipeOutput(recipe) {
  if (recipe?.output?.kind === "ring") return availableRingSlotsAfterRecipe(recipe) > 0;
  if (recipe?.output?.kind === "puzzleRingPortal") return !isPuzzleVaultActive() && !isPuzzleVaultPortalReady() && !state.puzzleVault?.summaryOpen;
  if (recipe?.output?.kind === "essenceCrucibleQueue") return essenceCrucibleQueue().length < ESSENCE_CRUCIBLE_MAX_QUEUE;
  return true;
}

function availableRingSlotsAfterRecipe(recipe) {
  const openSlots = ringInventoryBag().filter((ring) => !ring).length;
  const freedSlots = recipe?.costs?.reduce((total, cost) => total + (cost.ring ? ringIngredientBagCount(cost.ring, cost.amount) : 0), 0) ?? 0;
  return openSlots + freedSlots;
}

function craftingCostMarkup(cost) {
  if (cost.resource) {
    const resource = resourceByKey[cost.resource];
    const available = Math.floor(Number(state.inventory.resources?.[cost.resource]) || 0);
    const missing = available < cost.amount;
    return `
      <span class="crafting-cost${missing ? " missing" : ""}" style="--resource-color: ${resource?.color ?? "#f4f4f4"}">
        <span class="resource-icon" style="--resource-color: ${resource?.color ?? "#f4f4f4"}; --resource-icon: url('${resource?.icon ?? ""}')" aria-hidden="true"></span>
        <span>${format(available)} / ${format(cost.amount)} ${resource?.label ?? "Resource"}</span>
      </span>
    `;
  }
  if (cost.ring) {
    const def = ringDefs[cost.ring];
    const available = ownedRingCount(cost.ring);
    const missing = available < cost.amount;
    const color = ringDamageTypeColor(def?.damageType);
    return `
      <span class="crafting-cost ring-cost${missing ? " missing" : ""}" style="--resource-color: ${color}; --ring-color: ${color}">
        <span class="crafting-ring-cost-icon" aria-hidden="true">${ringIconMarkup({ defKey: cost.ring })}</span>
        <span>${format(available)} / ${format(cost.amount)} ${def?.name ?? "Ring"}</span>
      </span>
    `;
  }
  return "";
}

function setCraftingMaterialsOpen(open, recipeOrKey = selectedCraftingMaterialsRecipeKey) {
  if (!els.craftingMaterialsDialog || !els.craftingMaterialsBackdrop) return;
  if (!open) {
    selectedCraftingMaterialsRecipeKey = "";
    els.craftingMaterialsDialog.hidden = true;
    els.craftingMaterialsBackdrop.hidden = true;
    return;
  }
  const recipe = typeof recipeOrKey === "string" ? craftingRecipes.find((item) => item.key === recipeOrKey) : recipeOrKey;
  if (!recipe) return;
  selectedCraftingMaterialsRecipeKey = recipe.key;
  renderCraftingMaterialsPopup(recipe);
  els.craftingMaterialsDialog.hidden = false;
  els.craftingMaterialsBackdrop.hidden = false;
  modalOpenedAt = performance.now();
}

function renderCraftingMaterialsPopup(recipe) {
  if (!els.craftingMaterialsBody || !recipe) return;
  const def = ringDefs[recipe.output?.defKey];
  const color = def ? ringDamageTypeColor(def.damageType) : "#ffe6a7";
  els.craftingMaterialsBody.innerHTML = `
    <div class="crafting-materials-summary" style="--ring-color: ${color}">
      ${craftingRecipeIconMarkup(recipe, color)}
      <div>
        <strong>${recipe.name}</strong>
        <span>${recipe.description}</span>
      </div>
    </div>
    <div class="crafting-cost-list crafting-materials-cost-list" aria-label="${recipe.name} requirements">
      ${recipe.costs.map(craftingCostMarkup).join("")}
    </div>
  `;
}

function craftingRecipeIconMarkup(recipe, color = "#ffe6a7") {
  if (recipe.output?.kind === "ring") {
    return `<span class="crafting-recipe-icon ring-crafting-recipe-icon" style="--ring-color: ${color}" aria-hidden="true">${ringIconMarkup({ defKey: recipe.output.defKey })}</span>`;
  }
  const iconStyle = recipe.icon ? ` style="--crafting-icon: url('${recipe.icon}'); --ring-color: ${color}"` : "";
  return `<span class="crafting-recipe-icon ${recipe.iconClass ?? ""}"${iconStyle} aria-hidden="true"></span>`;
}

function createCraftingRecipeCard(recipe) {
  const canCraft = canCraftRecipe(recipe);
  const compactMaterials = recipe.output?.kind === "ring";
  const ringDef = ringDefs[recipe.output?.defKey];
  const iconColor = ringDef ? ringDamageTypeColor(ringDef.damageType) : "#ffe6a7";
  const crucibleStatus = recipe.output?.kind === "essenceCrucibleQueue"
    ? `<em class="crafting-recipe-status">${essenceCrucibleStatusText()}</em>`
    : "";
  const actionLabel = recipe.output?.kind === "essenceCrucibleQueue" ? "Queue" : "Craft";
  const materialMarkup = compactMaterials
    ? `<button class="crafting-materials-button" type="button" data-recipe-materials="${recipe.key}">Required Materials</button>`
    : `<div class="crafting-cost-list" aria-label="${recipe.name} requirements">${recipe.costs.map(craftingCostMarkup).join("")}</div>`;
  const row = document.createElement("article");
  row.className = `crafting-recipe-card${compactMaterials ? " ring-recipe-card" : ""}`;
  row.innerHTML = `
    ${craftingRecipeIconMarkup(recipe, iconColor)}
    <div class="crafting-recipe-body">
      <strong>${recipe.name}</strong>
      <span>${recipe.description}</span>
      ${crucibleStatus}
      ${materialMarkup}
    </div>
    <button class="crafting-recipe-action" type="button" data-craft-recipe="${recipe.key}"${canCraft ? "" : " disabled"}>${actionLabel}</button>
  `;
  return row;
}

function appendCraftingPanelHeading(label) {
  const heading = document.createElement("div");
  heading.className = "crafting-panel-heading crafting-recipe-heading";
  heading.textContent = label;
  els.craftingList.append(heading);
}

function renderCraftingRecipes() {
  if (!els.craftingList) return;
  els.craftingList.innerHTML = "";
  const groupedKeys = new Set(craftingRecipeGroups.map((group) => group.key));
  const groups = [
    ...craftingRecipeGroups,
    { key: "other", label: "Other", recipes: craftingRecipes.filter((recipe) => !groupedKeys.has(recipe.group)) }
  ];
  let ringHeadingRendered = false;
  for (const group of groups) {
    const recipes = group.recipes ?? craftingRecipes.filter((recipe) => recipe.group === group.key);
    if (!recipes.length) continue;
    if (group.key === "scrolls") appendCraftingPanelHeading("Special Items");
    if (group.key.startsWith("rings-") && !ringHeadingRendered) {
      appendCraftingPanelHeading("Rings");
      ringHeadingRendered = true;
    }
    const open = craftingRecipeSectionsOpen[group.key] ?? true;
    const section = document.createElement("section");
    section.className = `crafting-recipe-section ${group.key} ${open ? "open" : "closed"}${group.rarity ? ` quality-${group.rarity}` : ""}`;
    section.innerHTML = `
      <button class="crafting-section-title" type="button" aria-expanded="${open}" data-crafting-recipe-section="${group.key}">
        <strong>${group.label}</strong>
        <i aria-hidden="true"></i>
      </button>
    `;
    const sectionList = document.createElement("div");
    sectionList.className = "crafting-section-list";
    sectionList.hidden = !open;
    recipes.forEach((recipe) => sectionList.append(createCraftingRecipeCard(recipe)));
    section.append(sectionList);
    els.craftingList.append(section);
  }
  els.craftingList.querySelectorAll("[data-crafting-recipe-section]").forEach((button) => {
    button.addEventListener("click", () => {
      const sectionKey = button.dataset.craftingRecipeSection;
      craftingRecipeSectionsOpen[sectionKey] = !(craftingRecipeSectionsOpen[sectionKey] ?? true);
      renderCraftingRecipes();
    });
  });
  els.craftingList.querySelectorAll("[data-recipe-materials]").forEach((button) => {
    button.addEventListener("click", () => setCraftingMaterialsOpen(true, button.dataset.recipeMaterials));
  });
  els.craftingList.querySelectorAll("[data-craft-recipe]").forEach((button) => {
    button.addEventListener("click", () => craftRecipe(button.dataset.craftRecipe));
  });
}

function renderCrafting() {
  settleEssenceCrucibleQueue(Date.now(), { persist: true });
  renderCraftingResources();
  renderCraftingRecipes();
}

function consumeCraftingCost(cost) {
  if (cost.resource) {
    state.inventory.resources[cost.resource] = Math.max(0, Math.floor(Number(state.inventory.resources?.[cost.resource]) || 0) - cost.amount);
    return;
  }
  if (cost.ring) consumeRingIngredients(cost.ring, cost.amount);
}

function consumeRingIngredients(defKey, amount) {
  let remaining = Math.max(0, Math.floor(Number(amount) || 0));
  const bag = ringInventoryBag();
  for (let index = 0; index < bag.length && remaining > 0; index += 1) {
    if (bag[index]?.defKey !== defKey) continue;
    bag[index] = null;
    remaining -= 1;
  }
  if (remaining > 0 && ringInventoryState().equipped?.defKey === defKey) {
    ringInventoryState().equipped = null;
    remaining -= 1;
  }
}

function craftRecipe(recipeKey) {
  const recipe = craftingRecipes.find((item) => item.key === recipeKey);
  if (!recipe) return;
  if (!canCraftRecipe(recipe)) {
    const canReceive = canReceiveRecipeOutput(recipe);
    const outputMessage = {
      ring: "Ring inventory is full.",
      puzzleRingPortal: "A Puzzle Vault portal is already pending.",
      essenceCrucibleQueue: "Goblin Essence Crucible queue is full."
    }[recipe.output?.kind] ?? "Cannot craft that right now.";
    toast(canReceive ? "Not enough materials." : outputMessage);
    renderCraftingRecipes();
    return;
  }
  recipe.costs.forEach(consumeCraftingCost);
  let queuedReadyAt = 0;
  if (recipe.output.kind === "scrolls") {
    state.megaBoss.scrolls = Math.max(0, Math.floor(Number(state.megaBoss?.scrolls) || 0) + recipe.output.amount);
  } else if (recipe.output.kind === "ring") {
    addRingToInventory(recipe.output.defKey);
  } else if (recipe.output.kind === "puzzleRingPortal") {
    state.puzzleVault = createPuzzleVaultDropState(currentGlobalLevel());
  } else if (recipe.output.kind === "essenceCrucibleQueue") {
    queuedReadyAt = queueEssenceCrucibleConversion();
  }
  toast(
    recipe.output.kind === "puzzleRingPortal"
      ? "Crafted Puzzle Ring. The Puzzle Vault is ready."
      : recipe.output.kind === "essenceCrucibleQueue"
        ? `Queued ${recipe.name}. Ready in ${formatEssenceCrucibleTime(queuedReadyAt - Date.now())}.`
        : `Crafted ${recipe.name}.`
  );
  renderResources();
  renderCrafting();
  if (selectedCraftingMaterialsRecipeKey && !els.craftingMaterialsDialog?.hidden) {
    renderCraftingMaterialsPopup(craftingRecipes.find((item) => item.key === selectedCraftingMaterialsRecipeKey));
  }
  renderRingInventory();
  updateUI();
  saveState();
}

function itemIconMarkup(item, def, options = {}) {
  const slot = def?.slot ?? "item";
  const quality = qualityByKey[item?.quality] ?? qualityByKey.common;
  const upgradeArrow = options.upgrade ? `<span class="item-upgrade-arrow" aria-hidden="true"></span>` : "";
  return `<span class="rarity-fx quality-${quality.key}" aria-hidden="true"><span class="rarity-star rarity-star-a"></span><span class="rarity-star rarity-star-b"></span><span class="rarity-star rarity-star-c"></span><span class="rarity-star rarity-star-d"></span><span class="rarity-star rarity-star-e"></span></span><img class="item-icon ${slot} quality-${quality.key} realm-${itemRealmIndex(item)}" src="${gearIconSrc(item, def)}" alt="" aria-hidden="true" />${upgradeArrow}`;
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

function currentOfflineEnemyReward(context = offlineRewardContext()) {
  const level = Math.max(1, Math.floor(Number(context?.level) || activeCombatLevel()));
  const rewardBonus = context?.bossFallback ? 1 : (isBoss() ? 4.25 : 1);
  const rewardLog = enemyRewardBaseLogForLevel(level, rewardBonus) + finiteLog10(nuggetMultiplier(), 0);
  return Math.max(1, Math.floor(clampGameNumber(numberFromLog10(rewardLog, 1), 1)));
}

function currentOfflineEnemyHp(context = offlineRewardContext()) {
  if (context?.bossFallback) {
    const level = Math.max(1, Math.floor(Number(context.level) || activeCombatLevel()));
    return Math.max(1, numberFromLog10(enemyHpLogForLevel(level, 1), 1));
  }
  return Math.max(1, numberFromLog10(enemyPowerLog(), 1));
}

function offlineKillCount(elapsed, context = offlineRewardContext()) {
  const offlineDps = dps();
  if (!Number.isFinite(elapsed) || elapsed <= 0 || offlineDps <= 0) return 0;
  const maxHp = currentOfflineEnemyHp(context);
  const currentHp = context?.bossFallback ? maxHp : (state.enemyHp > 0 && state.enemyHp <= maxHp ? state.enemyHp : maxHp);
  const currentProgress = Math.max(0, maxHp - currentHp);
  const totalDamage = currentProgress + offlineDps * elapsed;
  return floorGameNumber(totalDamage / maxHp);
}

function averageDropAmount(entry) {
  const min = Math.max(0, Number(entry?.min) || 0);
  const max = Math.max(min, Number(entry?.max) || min);
  return (min + max) / 2;
}

function roundedOfflineAmount(value, rng = Math.random) {
  const clamped = clampGameNumber(value, 0);
  const whole = Math.floor(clamped);
  if (whole >= Number.MAX_SAFE_INTEGER) return whole;
  return whole + (rng() < clamped - whole ? 1 : 0);
}

function addExpectedOfflineDustRewards(totals, kills, rng = Math.random) {
  const entries = normalCreatureDustDropTable.filter((entry) => Number(entry.weight) > 0);
  const totalWeight = entries.reduce((total, entry) => total + Number(entry.weight), 0);
  if (totalWeight <= 0) return;
  for (const entry of entries) {
    const resource = dustResourceByQuality[entry.quality];
    if (!resource) continue;
    const amount = roundedOfflineAmount(kills * NORMAL_DUST_DROP_CHANCE * (Number(entry.weight) / totalWeight) * averageDropAmount(entry), rng);
    if (amount > 0) addResourceRewardsToTotals(totals, [{ amount, resource }]);
  }
}

function addExpectedOfflineZoneRewards(totals, kills, level, rng = Math.random) {
  const resource = zoneResourceForLevel(level);
  if (!resource) return;
  const amount = roundedOfflineAmount(kills * NORMAL_ZONE_ITEM_DROP_CHANCE, rng);
  if (amount > 0) addResourceRewardsToTotals(totals, [{ amount, resource }]);
}

function rollOfflineMobMaterialRewards(kills, level = activeCombatLevel(), rng = Math.random, options = {}) {
  const totals = {};
  const safeKills = floorGameNumber(kills);
  if (safeKills <= 0 || (isBoss() && !options?.bossFallback)) return [];
  if (safeKills <= OFFLINE_EXACT_DROP_ROLL_LIMIT) {
    for (let index = 0; index < safeKills; index += 1) {
      addResourceRewardsToTotals(totals, rollNormalCreatureDustRewards(rng));
      addResourceRewardsToTotals(totals, rollLevelZoneResourceRewards(level, false, rng));
    }
  } else {
    addExpectedOfflineDustRewards(totals, safeKills, rng);
    addExpectedOfflineZoneRewards(totals, safeKills, level, rng);
  }
  return Object.values(totals);
}

function applyOfflineProgress() {
  const elapsed = Math.max(0, (Date.now() - state.lastSeen) / 1000);
  const offlineContext = offlineRewardContext();
  const kills = offlineKillCount(elapsed, offlineContext);
  if (kills > 0) {
    const reward = floorGameNumber(kills * currentOfflineEnemyReward(offlineContext));
    const resources = rollOfflineMobMaterialRewards(kills, offlineContext.level, Math.random, { bossFallback: offlineContext.bossFallback });
    const loot = normalizePuzzleVaultLoot({ ether: reward, resources });
    state.gold = floorGameNumber(state.gold + loot.ether);
    grantInventoryResourceRewards(loot.resources);
    trackDailyQuestProgress("ether", loot.ether);
    if (loot.resources.length) {
      renderResources();
      renderCrafting();
    }
    pendingOfflineLootReport = { kills, loot, level: offlineContext.level, bossFallback: offlineContext.bossFallback };
    saveState();
  }
}

function registerServiceWorker() {
  if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
    let refreshing = false;
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      if (refreshing) return;
      refreshing = true;
      if (document.documentElement.classList.contains("app-loading")) return;
      window.location.reload();
    });
    navigator.serviceWorker.register("sw.js?v=444").then((registration) => registration.update()).catch(() => {});
  }
}

applyOfflineProgress();
settleEssenceCrucibleQueue(Date.now(), { persist: true });
spawnEnemy(true);
wireEvents();
showPendingOfflineLootReport();
if (saveResetRequested) toast("Fresh save loaded.");
resizeCanvas();
registerServiceWorker();
beginCloudSaveSync();
revealGameAfterStartup().catch(() => {
  if (shouldShowStartupIntro() && setStartupIntroOpen(true)) {
    finishStartupLoading();
    return;
  }
  finishStartupLoading();
  startGameRenderLoop();
});
