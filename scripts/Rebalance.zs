// Enchantment guide
craftingTable.remove(<item:create_enchantment_industry:enchanting_guide>);
<recipetype:create:mechanical_crafting>.addJsonRecipe("enchanting_guide_sardelki", {
    "type": "create:mechanical_crafting",

    "pattern": [
        "#X#",
        "XOX",
        "#X#"
    ],
    "key": {
       "#": {
            "item": "create:brass_ingot"
        },
        "O": {
            "item": "minecraft:netherite_ingot"
        },
        "X": {
            "item": "create:sturdy_sheet"
        }
    },
    "result": {
        "item": "create_enchantment_industry:enchanting_guide"
    }
});

//Shafts
craftingTable.remove(<item:createcasing:oak_shaft>);
craftingTable.addShaped("sosiski_oak_shaft", <item:createcasing:oak_shaft>, [
    [<item:minecraft:air>, <item:minecraft:stripped_oak_log>], 
    [<item:minecraft:air>, <item:create:shaft>],
    [<item:minecraft:air>, <item:minecraft:stripped_oak_log>],
]);

craftingTable.remove(<item:createcasing:spruce_shaft>);
craftingTable.addShaped("sosiski_spruce_shaft", <item:createcasing:spruce_shaft>, [
    [<item:minecraft:air>, <item:minecraft:stripped_spruce_log>], 
    [<item:minecraft:air>, <item:create:shaft>],
    [<item:minecraft:air>, <item:minecraft:stripped_spruce_log>],
]);

craftingTable.remove(<item:createcasing:birch_shaft>);
craftingTable.addShaped("sosiski_birch_shaft", <item:createcasing:birch_shaft>, [
    [<item:minecraft:air>, <item:minecraft:stripped_birch_log>], 
    [<item:minecraft:air>, <item:create:shaft>],
    [<item:minecraft:air>, <item:minecraft:stripped_birch_log>],
]);

craftingTable.remove(<item:createcasing:jungle_shaft>);
craftingTable.addShaped("sosiski_jungle_shaft", <item:createcasing:jungle_shaft>, [
    [<item:minecraft:air>, <item:minecraft:stripped_jungle_log>], 
    [<item:minecraft:air>, <item:create:shaft>],
    [<item:minecraft:air>, <item:minecraft:stripped_jungle_log>],
]);

craftingTable.remove(<item:createcasing:acacia_shaft>);
craftingTable.addShaped("sosiski_acacia_shaft", <item:createcasing:acacia_shaft>, [
    [<item:minecraft:air>, <item:minecraft:stripped_acacia_log>], 
    [<item:minecraft:air>, <item:create:shaft>],
    [<item:minecraft:air>, <item:minecraft:stripped_acacia_log>],
]);

craftingTable.remove(<item:createcasing:dark_oak_shaft>);
craftingTable.addShaped("sosiski_dark_oak_shaft", <item:createcasing:dark_oak_shaft>, [
    [<item:minecraft:air>, <item:minecraft:stripped_dark_oak_log>], 
    [<item:minecraft:air>, <item:create:shaft>],
    [<item:minecraft:air>, <item:minecraft:stripped_dark_oak_log>],
]);

craftingTable.remove(<item:createcasing:mangrove_shaft>);
craftingTable.addShaped("sosiski_mangrove_shaft", <item:createcasing:mangrove_shaft>, [
    [<item:minecraft:air>, <item:minecraft:stripped_mangrove_log>], 
    [<item:minecraft:air>, <item:create:shaft>],
    [<item:minecraft:air>, <item:minecraft:stripped_mangrove_log>],
]);

craftingTable.remove(<item:createcasing:cherry_shaft>);
craftingTable.addShaped("sosiski_cherry_shaft", <item:createcasing:cherry_shaft>, [
    [<item:minecraft:air>, <item:minecraft:stripped_cherry_log>], 
    [<item:minecraft:air>, <item:create:shaft>],
    [<item:minecraft:air>, <item:minecraft:stripped_cherry_log>],
]);

craftingTable.remove(<item:createcasing:bamboo_shaft>);
craftingTable.addShaped("sosiski_bamboo_shaft", <item:createcasing:bamboo_shaft>, [
    [<item:minecraft:air>, <item:minecraft:stripped_bamboo_block>], 
    [<item:minecraft:air>, <item:create:shaft>],
    [<item:minecraft:air>, <item:minecraft:stripped_bamboo_block>],
]);

craftingTable.remove(<item:createcasing:crimson_shaft>);
craftingTable.addShaped("sosiski_crimson_shaft", <item:createcasing:crimson_shaft>, [
    [<item:minecraft:air>, <item:minecraft:stripped_crimson_stem>], 
    [<item:minecraft:air>, <item:create:shaft>],
    [<item:minecraft:air>, <item:minecraft:stripped_crimson_stem>],
]);

craftingTable.remove(<item:createcasing:warped_shaft>);
craftingTable.addShaped("sosiski_warped_shaft", <item:createcasing:warped_shaft>, [
    [<item:minecraft:air>, <item:minecraft:stripped_warped_stem>], 
    [<item:minecraft:air>, <item:create:shaft>],
    [<item:minecraft:air>, <item:minecraft:stripped_warped_stem>],
]);

craftingTable.remove(<item:createcasing:glass_shaft>);
craftingTable.addShaped("sosiski_glass_shaft", <item:createcasing:glass_shaft>, [
    [<item:minecraft:air>, <item:minecraft:glass>], 
    [<item:minecraft:air>, <item:create:shaft>],
    [<item:minecraft:air>, <item:minecraft:glass>],
]);

//Cast iron ingot
<recipetype:create:compacting>.remove(<item:createbigcannons:cast_iron_ingot>);
<recipetype:create:compacting>.addJsonRecipe("cast_iron_ingot_sosiski", {
"type": "create:compacting",
  "heatRequirement": "heated",
  "ingredients": [
    {
      "item": "createdeco:industrial_iron_ingot"
    }
  ],
  "results": [
    {
      "item": "createbigcannons:cast_iron_ingot"
    }
    ]
});

//Cast iron block
<recipetype:create:compacting>.remove(<item:createbigcannons:cast_iron_block>);
<recipetype:create:compacting>.addJsonRecipe("cast_iron_block_sosiski", {
"type": "create:compacting",
  "heatRequirement": "heated",
  "ingredients": [
    {
      "item": "create:industrial_iron_block"
    }
  ],
  "results": [
    {
      "item": "createbigcannons:cast_iron_block"
    }
    ]
});

//TNT
<recipetype:create:mechanical_crafting>.remove(<item:minecraft:tnt>);
craftingTable.remove(<item:minecraft:tnt>);
<recipetype:create:mechanical_crafting>.addJsonRecipe("tnt_sardelki", {
    "type": "create:mechanical_crafting",

    "pattern": [
        "XAX",
        "SDS",
        "XAX"
    ],
    "key": {
        "X": {
            "item": "createbigcannons:guncotton"
        },
        "D": {
            "item": "minecraft:string"
        },
        "S": {
            "item": "minecraft:redstone"
        },
        "A": {
            "item": "createbigcannons:packed_guncotton"
        }
    },
    "result": {
        "item": "minecraft:tnt"
    }
});

//Ammo Box
craftingTable.remove(<item:cbc_at:heavy_autocannon_ammo_box>);
<recipetype:create:mechanical_crafting>.remove(<item:cbc_at:heavy_autocannon_ammo_box>);
craftingTable.addShaped("sosiski_heavy_autocannon_ammo_box", <item:cbc_at:heavy_autocannon_ammo_box>, [
    [<item:create:brass_ingot>, <item:minecraft:air>, <item:create:brass_ingot>], 
    [<item:create:iron_sheet>, <item:minecraft:air>, <item:create:iron_sheet>],
    [<item:create:iron_sheet>, <item:create:iron_sheet>, <item:create:iron_sheet>],
]);

//old armor block   
craftingTable.addShaped("sosiski_old_armor_block", <item:createarmorblocks:old_armor_block>, [
    [<item:minecraft:iron_ingot>, <item:minecraft:iron_ingot>, <item:minecraft:iron_ingot>], 
    [<item:minecraft:iron_ingot>, <item:create_new_age:overcharged_iron>, <item:minecraft:iron_ingot>],
    [<item:minecraft:iron_ingot>, <item:minecraft:iron_ingot>, <item:minecraft:iron_ingot>],
]);

//Heavy armor block
<recipetype:create:compacting>.addJsonRecipe("heavy_armor_block_sosiski", {
"type": "create:compacting",
  "heatRequirement": "superheated",
  "ingredients": [
    
    {"item": "tconstruct:hepatizon_nugget"},
    {"item": "create:sturdy_sheet"},
    {"item": "create_ironworks:steel_ingot"},
    {"item": "createarmorblocks:armor_block"},
  ],
  "results": [
    {
      "item": "createarmorblocks:heavy_armor_block"
    }
    ]
});

//Armor block
<recipetype:create:cutting>.remove(<item:createarmorblocks:armor_block>);
<recipetype:create:compacting>.addJsonRecipe("armor_block_sosiski", {
"type": "create:compacting",
  "heatRequirement": "heated",
  "ingredients": [
    {"item": "create:andesite_alloy"},
    {"item": "create_ironworks:steel_ingot"},
    {"item": "create_ironworks:steel_ingot"},
    {"item": "create_ironworks:steel_ingot"},
    {"item": "minecraft:iron_block"},
  ],
  "results": [
    {
      "item": "createarmorblocks:armor_block"
    }
    ]
});

//protivotankoviy yojik
craftingTable.addShaped("sosiski_protivotankoviy_yojik", <item:createarmorblocks:tank_obstacle>, [
    [<item:create:metal_girder>, <item:minecraft:air>, <item:create:metal_girder>], 
    [<item:minecraft:air>, <item:create:metal_girder>, <item:minecraft:air>],
    [<item:create:metal_girder>, <item:minecraft:air>, <item:create:metal_girder>],
]);

// Create Radars safe zone prikol
craftingTable.addShaped("sosiski_safe_zone", <item:create_radar:radar_safe_zone_designator>, [
    [<item:minecraft:air>, <item:create:transmitter>], 
    [<item:minecraft:air>, <item:create:brass_sheet>],
    [<item:minecraft:air>, <item:create:electron_tube>],
]);

// remove tconstruct melting
<recipetype:tconstruct:melting>.removeByInput(<item:minecraft:chain>);
<recipetype:tconstruct:melting>.removeByInput(<item:minecraft:bell>);
<recipetype:tconstruct:melting>.removeByInput(<item:minecraft:hopper>);
<recipetype:tconstruct:melting>.removeByInput(<item:minecraft:cauldron>);

// HE shell rebalance
<recipetype:create:mechanical_crafting>.remove(<item:createbigcannons:he_shell>);
<recipetype:create:mechanical_crafting>.addJsonRecipe("he_shell_rebalance", {
    "type": "create:mechanical_crafting",

    "pattern": [
        " I ",
        "IGI",
        "INI",
        " W "
    ],
    "key": {
       "I": {
            "item": "createdeco:industrial_iron_sheet"
        },
        "G": {
            "item": "createbigcannons:packed_guncotton"
        },
        "N": {
            "item": "createbigcannons:nitropowder"
        },
        "W": {
            "item": "minecraft:oak_slab"
        }
    },
    "result": {
        "item": "createbigcannons:he_shell"
    }
});

// remove crafting brass from iron

<recipetype:create:pressing>.removeByName("createarmorblocks:pressing/heavy_armor_block");

// fix oil barrel craft

<recipetype:minecraft:crafting>.removeByName("create_connected:crafting/kinetics/item_silo");
