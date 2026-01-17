// Global Icon Constants based on your manual folder structure
const ICONS = {
    POETICS: '/images/icons/poetics.png',
    GC_SEALS: '/images/icons/gc-seals.png',
    GIL: '/images/icons/gil.png',
    ALLIED_SEALS: '/images/icons/allied-seals.png',
    PURPLE_SCRIPS: '/images/icons/purple-scrips.png', 
    AMBER_VILEKIN: '/images/icons/amber-vilekin.png',
    MOONSTONE: '/images/icons/moonstone.png',
    // Tribe Tokens
    AMALJAA: '/images/icons/amaljaa-token.png',
    SAHAGIN: '/images/icons/sahagin_token.png',
    KOBOLD: '/images/icons/kobold-token.png',
    SYLPH: '/images/icons/sylph-token.png',
    // Alexander Precision Parts
    A1_BOLT: '/images/icons/precision-gordian-bolt.png',
    A2_LENS: '/images/icons/precision-gordian-lens.png',
    A3_SHAFT: '/images/icons/precision-gordian-shaft.png',
    A4_SPRING: '/images/icons/precision-gordian-spring.png',
    PLACEHOLDER: '/images/icons/placeholder.png'
};

export const ANIMA_DATA = [
    // --- STAGE 1: Animated (i170) ---
    {
        id: 'crystals_wind',
        stage: '1. Animated (i170)',
        name: "Luminous Crystal (Wind)",
        type: 'item',
        icon: '/images/icons/luminous-wind.png',
        qty: 1, 
        tip: "FATEs in Churning Mists. Drop rate is approx 10%.",
        options: [
            { label: "FATE (Churning Mists)", cost: 0, currency: "" },
            { label: "Zodiac Exchange", cost: 0, currency: "Zodiac Zeta" }
        ]
    },
    {
        id: 'crystals_fire',
        stage: '1. Animated (i170)',
        name: "Luminous Crystal (Fire)",
        type: 'item',
        icon: '/images/icons/luminous-fire.png',
        qty: 1, 
        tip: "FATEs in Azys Lla.",
        options: [
            { label: "FATE (Azys Lla)", cost: 0, currency: "" },
            { label: "Zodiac Exchange", cost: 0, currency: "Zodiac Zeta" }
        ]
    },
    {
        id: 'crystals_light',
        stage: '1. Animated (i170)',
        name: "Luminous Crystal (Lightning)",
        type: 'item',
        icon: '/images/icons/luminous-lightning.png',
        qty: 1, 
        tip: "FATEs in Dravanian Forelands.",
        options: [
            { label: "FATE (Dravanian Forelands)", cost: 0, currency: "" },
            { label: "Zodiac Exchange", cost: 0, currency: "Zodiac Zeta" }
        ]
    },
    {
        id: 'crystals_ice',
        stage: '1. Animated (i170)',
        name: "Luminous Crystal (Ice)",
        type: 'item',
        icon: '/images/icons/luminous-ice.png',
        qty: 1, 
        tip: "FATEs in Coerthas Western Highlands.",
        options: [
            { label: "FATE (Coerthas Western)", cost: 0, currency: "" },
            { label: "Zodiac Exchange", cost: 0, currency: "Zodiac Zeta" }
        ]
    },
    {
        id: 'crystals_earth',
        stage: '1. Animated (i170)',
        name: "Luminous Crystal (Earth)",
        type: 'item',
        icon: '/images/icons/luminous-earth.png',
        qty: 1, 
        tip: "FATEs in Dravanian Hinterlands.",
        options: [
            { label: "FATE (Dravanian Hinterlands)", cost: 0, currency: "" },
            { label: "Zodiac Exchange", cost: 0, currency: "Zodiac Zeta" }
        ]
    },
    {
        id: 'crystals_water',
        stage: '1. Animated (i170)',
        name: "Luminous Crystal (Water)",
        type: 'item',
        icon: '/images/icons/luminous-water.png',
        qty: 1, 
        tip: "FATEs in The Sea of Clouds.",
        options: [
            { label: "FATE (Sea of Clouds)", cost: 0, currency: "" },
            { label: "Zodiac Exchange", cost: 0, currency: "Zodiac Zeta" }
        ]
    },

    // --- STAGE 2: Awoken (i200) ---
    {
        id: 'dungeon_crawl',
        stage: '2. Awoken (i200)',
        name: "Dungeon Crawl (10 Dungeons)",
        type: 'checklist',
        icon: ICONS.PLACEHOLDER,
        qty: 1,
        tip: "You MUST have the Animated weapon equipped when exiting the dungeon.",
        options: [
            { label: "Duty Complete", cost: 0, currency: "" }
        ]
    },

    // --- STAGE 3: Anima (i210) - Tokens ---
    {
        id: 'unid_bone',
        stage: '3. Anima (i210)',
        name: "Unidentifiable Bone",
        type: 'item',
        icon: '/images/icons/unid-bone.png',
        qty: 10,
        tip: "Precision Bolt drops from Alexander Gordias (A1) Normal.",
        options: [
            { label: "Poetics", cost: 150, currency: "Poetics", icon: ICONS.POETICS },
            { label: "Amalj'aa Tokens", cost: 3, currency: "Amalj'aa", icon: ICONS.AMALJAA },
            { label: "Allied Seals", cost: 300, currency: "Allied Seals", icon: ICONS.ALLIED_SEALS },
            { label: "Alex P1 (Bolt)", cost: 3, currency: "Alex P1", icon: ICONS.A1_BOLT }
        ]
    },
    {
        id: 'unid_shell',
        stage: '3. Anima (i210)',
        name: "Unidentifiable Shell",
        type: 'item',
        icon: '/images/icons/unid-shell.png',
        qty: 10,
        tip: "Precision Lens drops from Alexander Gordias (A2) Normal.",
        options: [
            { label: "Poetics", cost: 150, currency: "Poetics", icon: ICONS.POETICS },
            { label: "Sahagin Tokens", cost: 3, currency: "Sahagin", icon: ICONS.SAHAGIN },
            { label: "Alex P2 (Lens)", cost: 3, currency: "Alex P2", icon: ICONS.A2_LENS }
        ]
    },
    {
        id: 'unid_ore',
        stage: '3. Anima (i210)',
        name: "Unidentifiable Ore",
        type: 'item',
        icon: '/images/icons/unid-ore.png',
        qty: 10,
        tip: "Precision Shaft drops from Alexander Gordias (A3) Normal.",
        options: [
            { label: "Poetics", cost: 150, currency: "Poetics", icon: ICONS.POETICS },
            { label: "Kobold Tokens", cost: 3, currency: "Kobold", icon: ICONS.KOBOLD },
            { label: "Alex P3 (Shaft)", cost: 3, currency: "Alex P3", icon: ICONS.A3_SHAFT }
        ]
    },
    {
        id: 'unid_seeds',
        stage: '3. Anima (i210)',
        name: "Unidentifiable Seeds",
        type: 'item',
        icon: '/images/icons/unid-seeds.png',
        qty: 10,
        tip: "Precision Spring drops from Alexander Gordias (A4) Normal.",
        options: [
            { label: "Poetics", cost: 150, currency: "Poetics", icon: ICONS.POETICS },
            { label: "Sylph Tokens", cost: 3, currency: "Sylph", icon: ICONS.SYLPH },
            { label: "Allied Seals", cost: 300, currency: "Allied Seals", icon: ICONS.ALLIED_SEALS },
            { label: "Alex P4 (Spring)", cost: 3, currency: "Alex P4", icon: ICONS.A4_SPRING }
        ]
    },

    // --- STAGE 3: Anima (i210) - Crafted ---
    {
        id: 'francesca',
        stage: '3. Anima (i210)',
        name: "Adamantite Francesca",
        type: 'item',
        icon: '/images/icons/francesca.png',
        qty: 4,
        tip: "HQ is required. Can be bought on Market Board.",
        options: [
            { label: "GC Seals", cost: 5000, currency: "GC Seals", icon: ICONS.GC_SEALS },
            { label: "Market Board", cost: 0, currency: "Gil", icon: ICONS.GIL }
        ]
    },
    {
        id: 'mirror',
        stage: '3. Anima (i210)',
        name: "Titanium Alloy Mirror",
        type: 'item',
        icon: '/images/icons/mirror.png',
        qty: 4,
        tip: "HQ is required. Can be bought on Market Board.",
        options: [
            { label: "GC Seals", cost: 5000, currency: "GC Seals", icon: ICONS.GC_SEALS },
            { label: "Market Board", cost: 0, currency: "Gil", icon: ICONS.GIL }
        ]
    },
    {
        id: 'arrow',
        stage: '3. Anima (i210)',
        name: "Dispelling Arrow",
        type: 'item',
        icon: '/images/icons/arrow.png',
        qty: 4,
        tip: "HQ is required. Can be bought on Market Board.",
        options: [
            { label: "GC Seals", cost: 5000, currency: "GC Seals", icon: ICONS.GC_SEALS },
            { label: "Market Board", cost: 0, currency: "Gil", icon: ICONS.GIL }
        ]
    },
    {
        id: 'kingcake',
        stage: '3. Anima (i210)',
        name: "Kingcake",
        type: 'item',
        icon: '/images/icons/kingcake.png',
        qty: 4,
        tip: "HQ is required. Can be bought on Market Board.",
        options: [
            { label: "GC Seals", cost: 5000, currency: "GC Seals", icon: ICONS.GC_SEALS },
            { label: "Market Board", cost: 0, currency: "Gil", icon: ICONS.GIL }
        ]
    },

    // --- STAGE 4: Hyperconductive (i230) ---
    {
        id: 'oil',
        stage: '4. Hyperconductive (i230)',
        name: "Aether Oil",
        type: 'item',
        icon: '/images/icons/aether-oil.png',
        qty: 5,
        tip: "Weekly quest 'The Gift of the Archmagus' gives 1 oil.",
        options: [
            { label: "Poetics", cost: 350, currency: "Poetics", icon: ICONS.POETICS },
            { label: "Weekly CT Quest", cost: 0, currency: "" }
        ]
    },

    // --- STAGE 5: Reconditioned (i240) ---
    {
        id: 'umbrite',
        stage: '5. Reconditioned (i240)',
        name: "Umbrite",
        type: 'item',
        icon: '/images/icons/umbrite.png',
        qty: 75,
        tip: "No other way to get this. Pure Poetics dump.",
        options: [
            { label: "Poetics Only", cost: 75, currency: "Poetics", icon: ICONS.POETICS }
        ]
    },
    {
        id: 'sand',
        stage: '5. Reconditioned (i240)',
        name: "Crystal Sand",
        type: 'item',
        icon: '/images/icons/crystal-sand.png',
        qty: 75,
        tip: "Use 'Amber Vilekin' (Levequests) or 'Moonstones' (GC Seals) for fastest results.",
        options: [
            { label: "Purple Scrips", cost: 5, currency: "Purple Scrips", icon: ICONS.PURPLE_SCRIPS },
            { label: "Poetics", cost: 225, currency: "Poetics", icon: ICONS.POETICS },
            { label: "Amber Vilekin", cost: 1, currency: "Amber Vilekin", icon: ICONS.AMBER_VILEKIN },
            { label: "Moonstones", cost: 5, currency: "GC Seals", icon: ICONS.MOONSTONE }
        ]
    },

    // --- STAGE 6: Sharpened (i260) ---
    {
        id: 'clusters',
        stage: '6. Sharpened (i260)',
        name: "Singing Cluster",
        type: 'item',
        icon: '/images/icons/singing-clusters.png',
        qty: 50,
        tip: "Do the Weekly Quest (18 clusters) and Daily Quest (1 cluster) in Idyllshire.",
        options: [
            { label: "Poetics", cost: 40, currency: "Poetics", icon: ICONS.POETICS },
            { label: "Daily/Weekly Quests", cost: 0, currency: "" }
        ]
    },

    // --- STAGE 7: Complete (i270) ---
    {
        id: 'pneumite',
        stage: '7. Complete (i270)',
        name: "Pneumite",
        type: 'item',
        icon: '/images/icons/pneumite.png',
        qty: 15,
        tip: "Can also be bought with 4,000 GC Seals.",
        options: [
            { label: "Poetics", cost: 100, currency: "Poetics", icon: ICONS.POETICS },
            { label: "GC Seals", cost: 4000, currency: "GC Seals", icon: ICONS.GC_SEALS }
        ]
    },

    // --- STAGE 8: Lux (i275) ---
    {
        id: 'ink',
        stage: '8. Lux (i275)',
        name: "Archaic Enchanted Ink",
        type: 'item',
        icon: '/images/icons/ink.png',
        qty: 1,
        tip: "Buying this is the easy part. The Primal trials are the hard part.",
        options: [
            { label: "Poetics", cost: 500, currency: "Poetics", icon: ICONS.POETICS }
        ]
    },

    // --- STAGE 9: VICTORY ---
    {
        id: 'victory_lap',
        stage: '9. Victory',
        name: "Weapon Completed",
        type: 'checklist',
        icon: ICONS.PLACEHOLDER,
        qty: 1,
        tip: "Congratulations! You have finished the Anima Weapon.",
        options: [
            { label: "All Done", cost: 0, currency: "" }
        ]
    }
];

// New Constant: List of all Jobs available for Anima Weapons
export const JOBS = [
    { id: 'PLD', label: 'Paladin', role: 'tank' },
    { id: 'WAR', label: 'Warrior', role: 'tank' },
    { id: 'DRK', label: 'Dark Knight', role: 'tank' },
    { id: 'WHM', label: 'White Mage', role: 'healer' },
    { id: 'SCH', label: 'Scholar', role: 'healer' },
    { id: 'AST', label: 'Astrologian', role: 'healer' },
    { id: 'MNK', label: 'Monk', role: 'dps' },
    { id: 'DRG', label: 'Dragoon', role: 'dps' },
    { id: 'NIN', label: 'Ninja', role: 'dps' },
    { id: 'BRD', label: 'Bard', role: 'dps' },
    { id: 'MCH', label: 'Machinist', role: 'dps' },
    { id: 'BLM', label: 'Black Mage', role: 'dps' },
    { id: 'SMN', label: 'Summoner', role: 'dps' }
];

// New Constant: Descriptions for each stage
export const STAGE_INFO = {
    "1. Animated (i170)": "Farm FATEs in Heavensward zones to get crystals.",
    "2. Awoken (i200)": "Run 10 specific dungeons with your weapon equipped.",
    "3. Anima (i210)": "The massive grind. Collect tokens via Poetics, Tribes, or Alex Normal.",
    "4. Hyperconductive (i230)": "Collect 5 Aether Oils (Weekly CT quest is best).",
    "5. Reconditioned (i240)": "Feed Crystal Sand & Umbrite to the weapon stats.",
    "6. Sharpened (i260)": "Collect Singing Clusters via Daily/Weekly quests.",
    "7. Complete (i270)": "Run 3 HM Primals and collect 15 Pneumite.",
    "8. Lux (i275)": "The victory lap. Defeat primal pairs and buy the Ink.",
    "9. Victory": "Enjoy your shiny new weapon!"
};