<recipetype:createoreexcavation:drilling>.addJsonRecipe("cobalt_sardelki", {
    "type": "createoreexcavation:drilling",

    "drill": {
    "tag": "createoreexcavation:drills"
  },
  "output": [
    {
      "item": "minecraft:quartz"
    },
    {
      "chance": 0.2,
      "item": "tconstruct:raw_cobalt"
    }
  ],
  "priority": 0,
  "stress": 512,
  "ticks": 1200,
  "vein_id": "createoreexcavation:ore_vein_type/quartz"
});

<recipetype:createoreexcavation:drilling>.addJsonRecipe("silver_sardelki", {
    "type": "createoreexcavation:drilling",

    "drill": {
    "tag": "createoreexcavation:drills"
  },
  "output": [
    {
      "chance": 0.7,
      "item": "minecraft:raw_gold"
    },
    {
      "chance": 0.3,
      "item": "create_more_additions:raw_silver"
    }
  ],
  "priority": 0,
  "stress": 192,
  "ticks": 600,
  "vein_id": "createoreexcavation:ore_vein_type/gold"
});

<recipetype:createoreexcavation:drilling>.addJsonRecipe("tin_sardelki", {
    "type": "createoreexcavation:drilling",

    "drill": {
    "tag": "createoreexcavation:drills"
  },
  "output": [
    {
      "chance": 0.9,
      "item": "minecraft:raw_copper"
    },
    {
      "chance": 0.1,
      "item": "create_ironworks:raw_tin"
    }
  ],
  "priority": 0,
  "stress": 256,
  "ticks": 600,
  "vein_id": "createoreexcavation:ore_vein_type/copper"
});