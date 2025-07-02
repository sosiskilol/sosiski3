// wireless_modem_advanced
craftingTable.remove(<item:computercraft:wireless_modem_advanced>);
<recipetype:create:mechanical_crafting>.addJsonRecipe("wireless_modem_advanced_sardelki", {
    "type": "create:mechanical_crafting",

    "pattern": [
        "#X#",
        "XOX",
        "XPX"
    ],
    "key": {
       "#": {
            "item": "create:transmitter"
        },
        "X": {
            "item": "create:brass_sheet"
        },
        "O": {
            "item": "create:precision_mechanism"
        },
        "P": {
            "item": "create:display_link"
        }
    },
    "result": {
        "item": "computercraft:wireless_modem_advanced"
    }
});

// turtle_advanced
craftingTable.remove(<item:computercraft:turtle_advanced>);
<recipetype:create:mechanical_crafting>.addJsonRecipe("turtle_advanced_sardelki", {
    "type": "create:mechanical_crafting",

    "pattern": [
        "XSX",
        "XOX",
        "DPD"
    ],
    "key": {
       "D": {
            "item": "create:item_vault"
        },
        "X": {
            "item": "create:sturdy_sheet"
        },
        "O": {
            "item": "computercraft:computer_advanced"
        },
        "S": {
            "item": "create:content_observer"
        },
        "P": {
            "item": "create:brown_toolbox"  
        }
    },
    "result": {
        "item": "computercraft:turtle_advanced"  
    }
});

// monitor_advanced
craftingTable.remove(<item:computercraft:monitor_advanced>);
<recipetype:create:mechanical_crafting>.addJsonRecipe("monitor_advanced_sardelki", {
    "type": "create:mechanical_crafting",

    "pattern": [
        "DDD",
        "OOO",
        "XXX"
    ],
    "key": {
       "D": {
            "item": "create:brass_sheet"
        },
        "X": {
            "item": "create:andesite_alloy"
        },
        "O": {
            "item": "create:nixie_tube"
        }
    },
    "result": {
        "item": "computercraft:monitor_advanced"
    }
});

// computer_advanced
craftingTable.remove(<item:computercraft:computer_advanced>);
<recipetype:create:mechanical_crafting>.addJsonRecipe("computer_advanced_sardelki", {
    "type": "create:mechanical_crafting",

    "pattern": [
        "DSD",
        "OAO",
        "XWX"
    ],
    "key": {
       "D": {
            "item": "create:sturdy_sheet"
        },
        "X": {
            "item": "create:brass_block"
        },
        "W": {
            "item": "create:precision_mechanism"
        },
        "S": {
            "item": "create:transmitter"
        },
        "A": {
            "item": "create:nixie_tube"
        },
        "O": {
            "item": "create:display_link"
        }
    },
    "result": {
        "item": "computercraft:computer_advanced"
    }
});

// pocket_computer_advanced
craftingTable.remove(<item:computercraft:pocket_computer_advanced>);
<recipetype:create:mechanical_crafting>.addJsonRecipe("pocket_computer_advanced_sardelki", {
    "type": "create:mechanical_crafting",

    "pattern": [
        "XSX",
        "XAX",
        "XWX"
    ],
    "key": {
        "X": {
            "item": "create:brass_ingot"
        },
        "W": {
            "item": "create:precision_mechanism"
        },
        "S": {
            "item": "create:display_link"
        },
        "A": {
            "item": "minecraft:golden_apple"
        }
    },
    "result": {
        "item": "computercraft:pocket_computer_advanced"
    }
});


