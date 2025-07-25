// Represents the version of the latest info, which should be the beta leaks version at the time of the major update
import gameData from 'data/game_data.json' with { type: 'json' }
import {
  ARCHER,
  BLADE_B1,
  CERYDRA,
  HYSILENS,
  JINGLIU_B1,
  KAFKA_B1,
  PHAINON,
  SABER,
} from 'lib/simulations/tests/testMetadataConstants'

// Semver defined optimizer version
export const CURRENT_OPTIMIZER_VERSION = 'v3.5.6'

// Represents the beta data content version, used for display but not for update notifications
export const CURRENT_DATA_VERSION = '3.5v5'

const generateMessage = (message?: string) => `__VERSION__${message ? ' - ' + message : ''}`
export const CharacterAnnouncementMessages: Record<string, string> = {
  [HYSILENS]: 'V5 - Enabled the E1 +16% DOT Final DMG buff',
}

export const Stats = {
  ATK_P: 'ATK%',
  ATK: 'ATK',
  BE: 'Break Effect',
  CD: 'CRIT DMG',
  CR: 'CRIT Rate',
  DEF_P: 'DEF%',
  DEF: 'DEF',
  EHR: 'Effect Hit Rate',
  ERR: 'Energy Regeneration Rate',
  Fire_DMG: 'Fire DMG Boost',
  HP_P: 'HP%',
  HP: 'HP',
  Ice_DMG: 'Ice DMG Boost',
  Imaginary_DMG: 'Imaginary DMG Boost',
  Lightning_DMG: 'Lightning DMG Boost',
  OHB: 'Outgoing Healing Boost',
  Physical_DMG: 'Physical DMG Boost',
  Quantum_DMG: 'Quantum DMG Boost',
  RES: 'Effect RES',
  SPD_P: 'SPD%',
  SPD: 'SPD',
  Wind_DMG: 'Wind DMG Boost',
} as const

export type StatsKeys = keyof typeof Stats
export type StatsValues = (typeof Stats)[StatsKeys]

export const MainStats = [
  Stats.HP_P,
  Stats.ATK_P,
  Stats.DEF_P,
  Stats.HP,
  Stats.ATK,
  Stats.SPD,
  Stats.CR,
  Stats.CD,
  Stats.EHR,
  Stats.BE,
  Stats.OHB,
  Stats.ERR,
  Stats.Physical_DMG,
  Stats.Fire_DMG,
  Stats.Ice_DMG,
  Stats.Lightning_DMG,
  Stats.Wind_DMG,
  Stats.Quantum_DMG,
  Stats.Imaginary_DMG,
]
export type MainStats = typeof MainStats[number]

export const AllStats = [
  Stats.ATK_P,
  Stats.ATK,
  Stats.BE,
  Stats.CD,
  Stats.CR,
  Stats.DEF_P,
  Stats.DEF,
  Stats.EHR,
  Stats.ERR,
  Stats.Fire_DMG,
  Stats.HP_P,
  Stats.HP,
  Stats.Ice_DMG,
  Stats.Imaginary_DMG,
  Stats.Lightning_DMG,
  Stats.OHB,
  Stats.Physical_DMG,
  Stats.Quantum_DMG,
  Stats.RES,
  Stats.SPD_P,
  Stats.SPD,
  Stats.Wind_DMG,
]

export const MainStatsValues: Record<string, Record<number, { base: number, increment: number }>> = {
  [Stats.HP_P]: {
    5: { base: 6.912, increment: 2.4192 },
    4: { base: 5.5296, increment: 1.9354 },
    3: { base: 4.1472, increment: 1.4515 },
    2: { base: 2.7648, increment: 0.9677 },
  },
  [Stats.ATK_P]: {
    5: { base: 6.912, increment: 2.4192 },
    4: { base: 5.5296, increment: 1.9354 },
    3: { base: 4.1472, increment: 1.4515 },
    2: { base: 2.7648, increment: 0.9677 },
  },
  [Stats.DEF_P]: {
    5: { base: 8.64, increment: 3.024 },
    4: { base: 6.912, increment: 2.4192 },
    3: { base: 5.184, increment: 1.8144 },
    2: { base: 3.456, increment: 1.2096 },
  },
  [Stats.HP]: {
    5: { base: 112.896, increment: 39.5136 },
    4: { base: 90.3168, increment: 31.61088 },
    3: { base: 67.7376, increment: 23.70816 },
    2: { base: 45.1584, increment: 15.80544 },
  },
  [Stats.ATK]: {
    5: { base: 56.448, increment: 19.7568 },
    4: { base: 45.1584, increment: 15.80544 },
    3: { base: 33.8688, increment: 11.85408 },
    2: { base: 22.5792, increment: 7.90272 },
  },
  [Stats.SPD]: {
    5: { base: 4.032, increment: 1.4 },
    4: { base: 3.226, increment: 1.1 },
    3: { base: 2.419, increment: 1.0 },
    2: { base: 1.613, increment: 1.0 },
  },
  [Stats.CR]: {
    5: { base: 5.184, increment: 1.8144 },
    4: { base: 4.1472, increment: 1.4515 },
    3: { base: 3.1104, increment: 1.0886 },
    2: { base: 2.0736, increment: 0.7258 },
  },
  [Stats.CD]: {
    5: { base: 10.368, increment: 3.6288 },
    4: { base: 8.2944, increment: 2.9030 },
    3: { base: 6.2208, increment: 2.1773 },
    2: { base: 4.1472, increment: 1.4515 },
  },
  [Stats.EHR]: {
    5: { base: 6.912, increment: 2.4192 },
    4: { base: 5.5296, increment: 1.9354 },
    3: { base: 4.1472, increment: 1.4515 },
    2: { base: 2.7648, increment: 0.9677 },
  },
  [Stats.BE]: {
    5: { base: 10.3680, increment: 3.6288 },
    4: { base: 8.2944, increment: 2.9030 },
    3: { base: 6.2208, increment: 2.1773 },
    2: { base: 4.1472, increment: 1.4515 },
  },
  [Stats.ERR]: {
    5: { base: 3.1104, increment: 1.0886 },
    4: { base: 2.4883, increment: 0.8709 },
    3: { base: 1.8662, increment: 0.6532 },
    2: { base: 1.2442, increment: 0.4355 },
  },
  [Stats.OHB]: {
    5: { base: 5.5296, increment: 1.9354 },
    4: { base: 4.4237, increment: 1.5483 },
    3: { base: 3.3178, increment: 1.1612 },
    2: { base: 2.2118, increment: 0.7741 },
  },
  [Stats.Physical_DMG]: {
    5: { base: 6.2208, increment: 2.1773 },
    4: { base: 4.9766, increment: 1.7418 },
    3: { base: 3.7325, increment: 1.3064 },
    2: { base: 2.4883, increment: 0.8709 },
  },
  [Stats.Fire_DMG]: {
    5: { base: 6.2208, increment: 2.1773 },
    4: { base: 4.9766, increment: 1.7418 },
    3: { base: 3.7325, increment: 1.3064 },
    2: { base: 2.4883, increment: 0.8709 },
  },
  [Stats.Ice_DMG]: {
    5: { base: 6.2208, increment: 2.1773 },
    4: { base: 4.9766, increment: 1.7418 },
    3: { base: 3.7325, increment: 1.3064 },
    2: { base: 2.4883, increment: 0.8709 },
  },
  [Stats.Lightning_DMG]: {
    5: { base: 6.2208, increment: 2.1773 },
    4: { base: 4.9766, increment: 1.7418 },
    3: { base: 3.7325, increment: 1.3064 },
    2: { base: 2.4883, increment: 0.8709 },
  },
  [Stats.Wind_DMG]: {
    5: { base: 6.2208, increment: 2.1773 },
    4: { base: 4.9766, increment: 1.7418 },
    3: { base: 3.7325, increment: 1.3064 },
    2: { base: 2.4883, increment: 0.8709 },
  },
  [Stats.Quantum_DMG]: {
    5: { base: 6.2208, increment: 2.1773 },
    4: { base: 4.9766, increment: 1.7418 },
    3: { base: 3.7325, increment: 1.3064 },
    2: { base: 2.4883, increment: 0.8709 },
  },
  [Stats.Imaginary_DMG]: {
    5: { base: 6.2208, increment: 2.1773 },
    4: { base: 4.9766, increment: 1.7418 },
    3: { base: 3.7325, increment: 1.3064 },
    2: { base: 2.4883, increment: 0.8709 },
  },
}

export const SubStats = [
  Stats.HP_P,
  Stats.ATK_P,
  Stats.DEF_P,
  Stats.HP,
  Stats.ATK,
  Stats.DEF,
  Stats.SPD,
  Stats.CR,
  Stats.CD,
  Stats.EHR,
  Stats.RES,
  Stats.BE,
]
export type SubStats = typeof SubStats[number]

export const SubStatValues = {
  [Stats.SPD]: {
    5: { high: 2.6, mid: 2.3, low: 2.0 },
    4: { high: 2.0, mid: 1.8, low: 1.6 },
    3: { high: 1.4, mid: 1.3, low: 1.2 },
    2: { high: 1.2, mid: 1.1, low: 1.0 },
  },
  [Stats.HP]: {
    5: { high: 42.33751, mid: 38.103755, low: 33.87 },
    4: { high: 33.87, mid: 30.483, low: 27.096 },
    3: { high: 25.402506, mid: 22.862253, low: 20.322 },
    2: { high: 16.935, mid: 15.2415, low: 13.548 },
  },
  [Stats.ATK]: {
    5: { high: 21.168754, mid: 19.051877, low: 16.935 },
    4: { high: 16.935, mid: 15.2415, low: 13.548 },
    3: { high: 10.161, mid: 11.431126, low: 12.701252 },
    2: { high: 8.4675, mid: 7.62075, low: 6.774 },
  },
  [Stats.DEF]: {
    5: { high: 21.168754, mid: 19.051877, low: 16.935 },
    4: { high: 16.935, mid: 15.2415, low: 13.548 },
    3: { high: 10.161, mid: 11.431126, low: 12.701252 },
    2: { high: 8.4675, mid: 7.62075, low: 6.774 },
  },
  [Stats.HP_P]: {
    5: { high: 4.32, mid: 3.888, low: 3.456 },
    4: { high: 3.456, mid: 3.1104, low: 2.7648 },
    3: { high: 2.592, mid: 2.3328, low: 2.0736 },
    2: { high: 1.728, mid: 1.5552, low: 1.3824 },
  },
  [Stats.ATK_P]: {
    5: { high: 4.32, mid: 3.888, low: 3.456 },
    4: { high: 3.456, mid: 3.1104, low: 2.7648 },
    3: { high: 2.592, mid: 2.3328, low: 2.0736 },
    2: { high: 1.728, mid: 1.5552, low: 1.3824 },
  },
  [Stats.DEF_P]: {
    5: { high: 5.4, mid: 4.86, low: 4.32 },
    4: { high: 4.32, mid: 3.888, low: 3.456 },
    3: { high: 2.592, mid: 2.916, low: 3.24 },
    2: { high: 2.16, mid: 1.944, low: 1.728 },
  },
  [Stats.BE]: {
    5: { high: 6.48, mid: 5.832, low: 5.184 },
    4: { high: 5.184, mid: 4.6656, low: 4.1472 },
    3: { high: 3.888, mid: 3.4992, low: 3.1104 },
    2: { high: 2.592, mid: 2.3328, low: 2.0736 },
  },
  [Stats.EHR]: {
    5: { high: 4.32, mid: 3.888, low: 3.456 },
    4: { high: 3.456, mid: 3.1104, low: 2.7648 },
    3: { high: 2.592, mid: 2.3328, low: 2.0736 },
    2: { high: 1.728, mid: 1.5552, low: 1.3824 },
  },
  [Stats.RES]: {
    5: { high: 4.32, mid: 3.888, low: 3.456 },
    4: { high: 3.456, mid: 3.1104, low: 2.7648 },
    3: { high: 2.592, mid: 2.3328, low: 2.0736 },
    2: { high: 1.728, mid: 1.5552, low: 1.3824 },
  },
  [Stats.CR]: {
    5: { high: 3.24, mid: 2.916, low: 2.592 },
    4: { high: 2.592, mid: 2.3328, low: 2.0736 },
    3: { high: 1.5552, mid: 1.7496, low: 1.944 },
    2: { high: 1.296, mid: 1.1664, low: 1.0368 },
  },
  [Stats.CD]: {
    5: { high: 6.48, mid: 5.832, low: 5.184 },
    4: { high: 5.184, mid: 4.6656, low: 4.1472 },
    3: { high: 3.888, mid: 3.4992, low: 3.1104 },
    2: { high: 2.592, mid: 2.3328, low: 2.0736 },
  },
} as const

export const StatsToReadable = {
  [Stats.HP_P]: 'HP %',
  [Stats.ATK_P]: 'ATK %',
  [Stats.DEF_P]: 'DEF %',
  [Stats.SPD_P]: 'SPD %',
  [Stats.HP]: 'HP',
  [Stats.ATK]: 'ATK',
  [Stats.DEF]: 'DEF',
  [Stats.SPD]: 'SPD',
  [Stats.CR]: 'CRIT Rate',
  [Stats.CD]: 'CRIT DMG',
  [Stats.EHR]: 'Effect HIT',
  [Stats.RES]: 'Effect RES',
  [Stats.BE]: 'Break Effect',
  [Stats.ERR]: 'Energy Regen',
  [Stats.OHB]: 'Healing Boost',
  [Stats.Physical_DMG]: 'Physical DMG',
  [Stats.Fire_DMG]: 'Fire DMG',
  [Stats.Ice_DMG]: 'Ice DMG',
  [Stats.Lightning_DMG]: 'Lightning DMG',
  [Stats.Wind_DMG]: 'Wind DMG',
  [Stats.Quantum_DMG]: 'Quantum DMG',
  [Stats.Imaginary_DMG]: 'Imaginary DMG',
}

export const Parts = {
  Head: 'Head',
  Hands: 'Hands',
  Body: 'Body',
  Feet: 'Feet',
  PlanarSphere: 'PlanarSphere',
  LinkRope: 'LinkRope',
} as const
export type Parts = typeof Parts[keyof typeof Parts]
export const PartsArray = [
  Parts.Head,
  Parts.Hands,
  Parts.Body,
  Parts.Feet,
  Parts.PlanarSphere,
  Parts.LinkRope,
] as const

export const MainStatParts = {
  Body: 'Body',
  Feet: 'Feet',
  PlanarSphere: 'PlanarSphere',
  LinkRope: 'LinkRope',
} as const
export type MainStatParts = typeof MainStatParts[keyof typeof MainStatParts]

export const PartsToReadable = {
  [Parts.Head]: 'Head',
  [Parts.Hands]: 'Hands',
  [Parts.Body]: 'Body',
  [Parts.Feet]: 'Feet',
  [Parts.PlanarSphere]: 'Sphere',
  [Parts.LinkRope]: 'Rope',
} as const

export const PartsMainStats = {
  [Parts.Head]: [Stats.HP],
  [Parts.Hands]: [Stats.ATK],
  [Parts.Body]: [Stats.HP_P, Stats.ATK_P, Stats.DEF_P, Stats.CR, Stats.CD, Stats.OHB, Stats.EHR],
  [Parts.Feet]: [Stats.HP_P, Stats.ATK_P, Stats.DEF_P, Stats.SPD],
  [Parts.PlanarSphere]: [
    Stats.HP_P,
    Stats.ATK_P,
    Stats.DEF_P,
    Stats.Physical_DMG,
    Stats.Fire_DMG,
    Stats.Ice_DMG,
    Stats.Lightning_DMG,
    Stats.Wind_DMG,
    Stats.Quantum_DMG,
    Stats.Imaginary_DMG,
  ],
  [Parts.LinkRope]: [Stats.HP_P, Stats.ATK_P, Stats.DEF_P, Stats.BE, Stats.ERR],
}

export const SetsRelics = {
  PasserbyOfWanderingCloud: 'Passerby of Wandering Cloud',
  MusketeerOfWildWheat: 'Musketeer of Wild Wheat',
  KnightOfPurityPalace: 'Knight of Purity Palace',
  HunterOfGlacialForest: 'Hunter of Glacial Forest',
  ChampionOfStreetwiseBoxing: 'Champion of Streetwise Boxing',
  GuardOfWutheringSnow: 'Guard of Wuthering Snow',
  FiresmithOfLavaForging: 'Firesmith of Lava-Forging',
  GeniusOfBrilliantStars: 'Genius of Brilliant Stars',
  BandOfSizzlingThunder: 'Band of Sizzling Thunder',
  EagleOfTwilightLine: 'Eagle of Twilight Line',
  ThiefOfShootingMeteor: 'Thief of Shooting Meteor',
  WastelanderOfBanditryDesert: 'Wastelander of Banditry Desert',
  LongevousDisciple: 'Longevous Disciple',
  MessengerTraversingHackerspace: 'Messenger Traversing Hackerspace',
  TheAshblazingGrandDuke: 'The Ashblazing Grand Duke',
  PrisonerInDeepConfinement: 'Prisoner in Deep Confinement',
  PioneerDiverOfDeadWaters: 'Pioneer Diver of Dead Waters',
  WatchmakerMasterOfDreamMachinations: 'Watchmaker, Master of Dream Machinations',
  IronCavalryAgainstTheScourge: 'Iron Cavalry Against the Scourge',
  TheWindSoaringValorous: 'The Wind-Soaring Valorous',
  SacerdosRelivedOrdeal: 'Sacerdos\' Relived Ordeal',
  ScholarLostInErudition: 'Scholar Lost in Erudition',
  HeroOfTriumphantSong: 'Hero of Triumphant Song',
  PoetOfMourningCollapse: 'Poet of Mourning Collapse',
  WarriorGoddessOfSunAndThunder: 'Warrior Goddess of Sun and Thunder',
  WavestriderCaptain: 'Wavestrider Captain',
} as const

export const SetsOrnaments = {
  SpaceSealingStation: 'Space Sealing Station',
  FleetOfTheAgeless: 'Fleet of the Ageless',
  PanCosmicCommercialEnterprise: 'Pan-Cosmic Commercial Enterprise',
  BelobogOfTheArchitects: 'Belobog of the Architects',
  CelestialDifferentiator: 'Celestial Differentiator',
  InertSalsotto: 'Inert Salsotto',
  TaliaKingdomOfBanditry: 'Talia: Kingdom of Banditry',
  SprightlyVonwacq: 'Sprightly Vonwacq',
  RutilantArena: 'Rutilant Arena',
  BrokenKeel: 'Broken Keel',
  FirmamentFrontlineGlamoth: 'Firmament Frontline: Glamoth',
  PenaconyLandOfTheDreams: 'Penacony, Land of the Dreams',
  SigoniaTheUnclaimedDesolation: 'Sigonia, the Unclaimed Desolation',
  IzumoGenseiAndTakamaDivineRealm: 'Izumo Gensei and Takama Divine Realm',
  DuranDynastyOfRunningWolves: 'Duran, Dynasty of Running Wolves',
  ForgeOfTheKalpagniLantern: 'Forge of the Kalpagni Lantern',
  LushakaTheSunkenSeas: 'Lushaka, the Sunken Seas',
  TheWondrousBananAmusementPark: 'The Wondrous BananAmusement Park',
  BoneCollectionsSereneDemesne: 'Bone Collection\'s Serene Demesne',
  GiantTreeOfRaptBrooding: 'Giant Tree of Rapt Brooding',
  ArcadiaOfWovenDreams: 'Arcadia of Woven Dreams',
  RevelryByTheSea: 'Revelry by the Sea',
} as const

// Delete unreleased data
export const officialOnly = false
const characters = gameData.characters
const lightCones = gameData.lightCones
export const UnreleasedSets: Record<string, boolean> = {}

if (officialOnly) {
  // UnreleasedSets[SetsRelics.SacerdosRelivedOrdeal] = true
  // UnreleasedSets[SetsRelics.ScholarLostInErudition] = true

  // Delete unreleased sets
  // @ts-ignore
  // delete SetsRelics.SacerdosRelivedOrdeal
  // @ts-ignore
  // delete SetsRelics.ScholarLostInErudition

  // Delete unreleased characters
  for (const character of Object.values(characters)) {
    if (character.unreleased) {
      delete characters[character.id as keyof typeof characters]
    }
  }

  // Delete unreleased light cones
  for (const lightCone of Object.values(lightCones)) {
    if (lightCone.unreleased) {
      delete lightCones[lightCone.id as keyof typeof lightCones]
    }
  }
}

export type SetsRelics = typeof SetsRelics[keyof typeof SetsRelics]
export type SetsOrnaments = typeof SetsOrnaments[keyof typeof SetsOrnaments]

export const Sets = {
  ...SetsRelics,
  ...SetsOrnaments,
}
export type Sets = typeof Sets[keyof typeof Sets]

export const SetsRelicsNames = Object.values(SetsRelics)
export const SetsOrnamentsNames = Object.values(SetsOrnaments)

export const OrnamentSetToIndex: Record<SetsOrnaments, number> = {} as Record<SetsOrnaments, number>
for (let i = 0; i < SetsOrnamentsNames.length; i++) {
  OrnamentSetToIndex[SetsOrnamentsNames[i]] = i
}

export const RelicSetToIndex: Record<SetsRelics, number> = {} as Record<SetsRelics, number>
for (let i = 0; i < SetsRelicsNames.length; i++) {
  RelicSetToIndex[SetsRelicsNames[i]] = i
}

export const RelicSetCount = Object.values(SetsRelics).length
export const OrnamentSetCount = Object.values(SetsOrnaments).length

export const PathNames = {
  Abundance: 'Abundance',
  Destruction: 'Destruction',
  Erudition: 'Erudition',
  Harmony: 'Harmony',
  Hunt: 'Hunt',
  Nihility: 'Nihility',
  Preservation: 'Preservation',
  Remembrance: 'Remembrance',
} as const
export type PathName = typeof PathNames[keyof typeof PathNames]

export const ElementNames = {
  Physical: 'Physical',
  Quantum: 'Quantum',
  Imaginary: 'Imaginary',
  Ice: 'Ice',
  Wind: 'Wind',
  Fire: 'Fire',
  Lightning: 'Lightning',
} as const
export type ElementName = typeof ElementNames[keyof typeof ElementNames]

export const ElementToDamage = {
  Physical: Stats.Physical_DMG,
  Fire: Stats.Fire_DMG,
  Ice: Stats.Ice_DMG,
  Lightning: Stats.Lightning_DMG,
  Wind: Stats.Wind_DMG,
  Quantum: Stats.Quantum_DMG,
  Imaginary: Stats.Imaginary_DMG,
}

export const ElementToResPenType = {
  Physical: 'PHYSICAL_RES_PEN',
  Fire: 'FIRE_RES_PEN',
  Ice: 'ICE_RES_PEN',
  Lightning: 'LIGHTNING_RES_PEN',
  Wind: 'WIND_RES_PEN',
  Quantum: 'QUANTUM_RES_PEN',
  Imaginary: 'IMAGINARY_RES_PEN',
} as const

export const Constants = {
  Sets,
  Parts,
  Stats,
  MainStats,
  MainStatsValues,
  SubStats,
  SetsOrnaments,
  SetsRelics,
  SetsRelicsNames,
  SetsOrnamentsNames,
  StatsToReadable,
  PartsToReadable,
  PartsMainStats,
  RelicSetToIndex,
  OrnamentSetToIndex,
  // StatMaxes,
  MAX_INT: 2147483647,
  THREAD_BUFFER_LENGTH: 150000,
} as const

export const RelicSetFilterOptions = {
  relic4Piece: '4 Piece',
  relic2Plus2Piece: '2 + 2 Piece',
  relic2PlusAny: '2 + Any',
}

export const DEFAULT_STAT_DISPLAY = 'combat'
export const DEFAULT_MEMO_DISPLAY = 'summoner'

export const CombatBuffs = {
  ATK: {
    title: 'ATK',
    key: 'ATK',
    percent: false,
  },
  ATK_P: {
    title: 'ATK %',
    key: 'ATK_P',
    percent: true,
  },
  HP: {
    title: 'HP',
    key: 'HP',
    percent: false,
  },
  HP_P: {
    title: 'HP %',
    key: 'HP_P',
    percent: true,
  },
  DEF: {
    title: 'DEF',
    key: 'DEF',
    percent: false,
  },
  DEF_P: {
    title: 'DEF %',
    key: 'DEF_P',
    percent: true,
  },
  CR: {
    title: 'Crit Rate %',
    key: 'CR',
    percent: true,
  },
  CD: {
    title: 'Crit Dmg %',
    key: 'CD',
    percent: true,
  },
  SPD: {
    title: 'SPD',
    key: 'SPD',
    percent: false,
  },
  SPD_P: {
    title: 'SPD %',
    key: 'SPD_P',
    percent: true,
  },
  BE: {
    title: 'BE %',
    key: 'BE',
    percent: true,
  },
  DMG_BOOST: {
    title: 'Dmg Boost %',
    key: 'DMG_BOOST',
    percent: true,
  },
  DEF_PEN: {
    title: 'Def Pen %',
    key: 'DEF_PEN',
    percent: true,
  },
  RES_PEN: {
    title: 'Dmg RES PEN %',
    key: 'RES_PEN',
    percent: true,
  },
  EFFECT_RES_PEN: {
    title: 'Effect RES PEN %',
    key: 'EFFECT_RES_PEN',
    percent: true,
  },
  VULNERABILITY: {
    title: 'Vulnerability %',
    key: 'VULNERABILITY',
    percent: true,
  },
  BREAK_EFFICIENCY: {
    title: 'Break Efficiency %',
    key: 'BREAK_EFFICIENCY',
    percent: true,
  },
} as const

export const setToId = {
  [Sets.PasserbyOfWanderingCloud]: '101',
  [Sets.MusketeerOfWildWheat]: '102',
  [Sets.KnightOfPurityPalace]: '103',
  [Sets.HunterOfGlacialForest]: '104',
  [Sets.ChampionOfStreetwiseBoxing]: '105',
  [Sets.GuardOfWutheringSnow]: '106',
  [Sets.FiresmithOfLavaForging]: '107',
  [Sets.GeniusOfBrilliantStars]: '108',
  [Sets.BandOfSizzlingThunder]: '109',
  [Sets.EagleOfTwilightLine]: '110',
  [Sets.ThiefOfShootingMeteor]: '111',
  [Sets.WastelanderOfBanditryDesert]: '112',
  [Sets.LongevousDisciple]: '113',
  [Sets.MessengerTraversingHackerspace]: '114',
  [Sets.TheAshblazingGrandDuke]: '115',
  [Sets.PrisonerInDeepConfinement]: '116',
  [Sets.PioneerDiverOfDeadWaters]: '117',
  [Sets.WatchmakerMasterOfDreamMachinations]: '118',
  [Sets.IronCavalryAgainstTheScourge]: '119',
  [Sets.TheWindSoaringValorous]: '120',
  [Sets.SacerdosRelivedOrdeal]: '121',
  [Sets.ScholarLostInErudition]: '122',
  [Sets.HeroOfTriumphantSong]: '123',
  [Sets.PoetOfMourningCollapse]: '124',
  [Sets.WarriorGoddessOfSunAndThunder]: '125',
  [Sets.WavestriderCaptain]: '126',

  [Sets.SpaceSealingStation]: '301',
  [Sets.FleetOfTheAgeless]: '302',
  [Sets.PanCosmicCommercialEnterprise]: '303',
  [Sets.BelobogOfTheArchitects]: '304',
  [Sets.CelestialDifferentiator]: '305',
  [Sets.InertSalsotto]: '306',
  [Sets.TaliaKingdomOfBanditry]: '307',
  [Sets.SprightlyVonwacq]: '308',
  [Sets.RutilantArena]: '309',
  [Sets.BrokenKeel]: '310',
  [Sets.FirmamentFrontlineGlamoth]: '311',
  [Sets.PenaconyLandOfTheDreams]: '312',
  [Sets.SigoniaTheUnclaimedDesolation]: '313',
  [Sets.IzumoGenseiAndTakamaDivineRealm]: '314',
  [Sets.DuranDynastyOfRunningWolves]: '315',
  [Sets.ForgeOfTheKalpagniLantern]: '316',
  [Sets.LushakaTheSunkenSeas]: '317',
  [Sets.TheWondrousBananAmusementPark]: '318',
  [Sets.BoneCollectionsSereneDemesne]: '319',
  [Sets.GiantTreeOfRaptBrooding]: '320',
  [Sets.ArcadiaOfWovenDreams]: '321',
  [Sets.RevelryByTheSea]: '322',
} as const

export const ABILITY_LIMIT = 12

export const DamageKeys = ['BASIC', 'SKILL', 'ULT', 'FUA', 'DOT', 'BREAK']

export const DEFAULT_TEAM = 'Default'
export const CUSTOM_TEAM = 'Custom'
export const SETTINGS_TEAM = 'Settings'

export const COMPUTE_ENGINE_CPU = 'CPU'
export const COMPUTE_ENGINE_GPU_STABLE = 'GPU Stable'
export const COMPUTE_ENGINE_GPU_EXPERIMENTAL = 'GPU Experimental'
export type ComputeEngine =
  | typeof COMPUTE_ENGINE_CPU
  | typeof COMPUTE_ENGINE_GPU_EXPERIMENTAL
  | typeof COMPUTE_ENGINE_GPU_STABLE

export const SACERDOS_RELIVED_ORDEAL_1_STACK = 'Sacerdos\' Relived Ordeal 1x'
export const SACERDOS_RELIVED_ORDEAL_2_STACK = 'Sacerdos\' Relived Ordeal 2x'

export const ConditionalType = {
  SET: 0,
  ABILITY: 1,
}

export const ConditionalActivation = {
  SINGLE: 0,
  CONTINUOUS: 1,
}

export enum ConditionalDataType {
  BOOLEAN = 'boolean',
  NUMBER = 'number',
  SELECT = 'select',
}

export enum ShowcaseColorMode {
  AUTO = 'AUTO',
  CUSTOM = 'CUSTOM',
  STANDARD = 'STANDARD',
}
