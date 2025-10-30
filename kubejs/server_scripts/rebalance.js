ServerEvents.recipes(event => {

    //=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=//
    //                  Sosiski.lol Custom Crafts                  //
    //=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=//


    //=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=//
    //                          Removing                           //
    //=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=//

    

    // Removing EFLN yobaniy
    event.remove({ output: 'tconstruct:efln_ball' })

    // Removing nosilki
    event.remove({ output: 'tconstruct:piggy_backpack' })

    // Removing printer
    event.remove({ output: 'create_enchantment_industry:printer' })

    // Removing imbalance enchanted golden apple recipe
    event.remove({ output: 'minecraft:enchanted_golden_apple' })

    // Removing imbalance totem of undying recipe
    event.remove({ output: 'minecraft:totem_of_undying' })

    // Removing TNT minecart
    event.remove({ output: 'minecraft:tnt_minecart' })

    //Removing tconstruct melting
    event.remove({ input: 'minecraft:chain', type: 'tconstruct:melting'})
    event.remove({ input: 'minecraft:bell', type: 'tconstruct:melting'})
    event.remove({ input: 'minecraft:hopper', type: 'tconstruct:melting'})
    event.remove({ input: 'minecraft:cauldron', type: 'tconstruct:melting'})
    event.remove({ input: 'minecraft:bucket', type: 'tconstruct:melting'})

    //Removing navigator
    event.remove({ output: 'createrailwaysnavigator:navigator' })

    //Removing shadow&radiance deco blocks
    event.remove({ input: 'create:shadow_steel_casing'})
    event.remove({ input: 'createcasing:shadow_steel_encased_chain_drive'})
    event.remove({ input: 'createcasing:shadow_steel_gearbox'})
    event.remove({ input: 'createcasing:vertical_shadow_steel_gearbox'})

    event.remove({ input: 'create:refined_radiance_casing'})
    event.remove({ input: 'createcasing:refined_radiance_encased_chain_drive'})
    event.remove({ input: 'createcasing:refined_radiance_gearbox'})
    event.remove({ input: 'createcasing:vertical_refined_radiance_gearbox'})

    //Removing tconstruct stell
    event.remove({ output: 'tconstruct:steel_ingot' })
    event.remove({ input: 'tconstruct:steel_ingot' })
    event.remove({ output: 'tconstruct:steel_nugget' })
    event.remove({ input: 'tconstruct:steel_nugget' })
    event.remove({ output: 'tconstruct:steel_block' })
    event.remove({ input: 'tconstruct:steel_block' })

    //Removing hyper experience
    event.remove({ input: 'minecraft:glow_ink_sac', type: 'create:mixing'})



    //=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=//
    //                          Rebalance                          //
    //=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=//


    
    // Enchantment guide
    event.remove({ output: 'create_enchantment_industry:enchanting_guide' })
    event.recipes.create.mechanical_crafting('create_enchantment_industry:enchanting_guide', [
        'ZDZ',
        'DXD',
        'ZDZ'
    ], {
        D: 'create:sturdy_sheet',
        X: 'minecraft:netherite_ingot',
        Z: 'create:brass_ingot'
    })    

    //Shafts
    event.remove({ output: 'createcasing:oak_shaft' })
    event.remove({ output: 'createcasing:spruce_shaft' })
    event.remove({ output: 'createcasing:birch_shaft' })
    event.remove({ output: 'createcasing:jungle_shaft' })
    event.remove({ output: 'createcasing:acacia_shaft' })
    event.remove({ output: 'createcasing:dark_oak_shaft' })
    event.remove({ output: 'createcasing:mangrove_shaft' })
    event.remove({ output: 'createcasing:cherry_shaft' })
    event.remove({ output: 'createcasing:bamboo_shaft' })
    event.remove({ output: 'createcasing:crimson_shaft' })
    event.remove({ output: 'createcasing:warped_shaft' })
    event.remove({ output: 'createcasing:glass_shaft' })

    function shafts(output, woodInput) {
    event.shaped(output, [
       ' I ',
       ' B ',
       ' I '
     ], {
        B: 'create:shaft',
        I: woodInput
     })}

    shafts('createcasing:oak_shaft', 'minecraft:stripped_oak_log')
    shafts('createcasing:spruce_shaft', 'minecraft:stripped_spruce_log')
    shafts('createcasing:birch_shaft', 'minecraft:stripped_birch_log')
    shafts('createcasing:jungle_shaft', 'minecraft:stripped_jungle_log')
    shafts('createcasing:acacia_shaft', 'minecraft:stripped_acacia_log')
    shafts('createcasing:dark_oak_shaft', 'minecraft:stripped_dark_oak_log')
    shafts('createcasing:mangrove_shaft', 'minecraft:stripped_mangrove_log')
    shafts('createcasing:cherry_shaft', 'minecraft:stripped_cherry_log')
    shafts('createcasing:bamboo_shaft', 'minecraft:stripped_bamboo_block')
    shafts('createcasing:crimson_shaft', 'minecraft:stripped_crimson_stem')
    shafts('createcasing:warped_shaft', 'minecraft:stripped_warped_stem')
    shafts('createcasing:glass_shaft', 'minecraft:glass')

    //Cast iron
    event.remove({ id: 'createbigcannons:compacting/iron_to_cast_iron_ingot' })
    event.remove({ id: 'createbigcannons:compacting/iron_to_cast_iron_block' })
    event.recipes.create.compacting('createdeco:industrial_iron_ingot', 'createbigcannons:cast_iron_ingot').heated()
    event.recipes.create.compacting('create:industrial_iron_block', 'createbigcannons:cast_iron_block').heated()

    //TNT
    event.remove({ output: 'minecraft:tnt' })
    event.recipes.create.mechanical_crafting('minecraft:tnt', [
        'XAX',
        'SDS',
        'XAX'
    ], {
        X: 'createbigcannons:guncotton',
        D: 'minecraft:string',
        S: 'minecraft:redstone',
        A: 'createbigcannons:packed_guncotton'
    })   

    //Ammo Box
    event.remove({ output: 'cbc_at:heavy_autocannon_ammo_box' })
    event.shaped(Item.of('cbc_at:heavy_autocannon_ammo_box'),[
        'B B',
        'A A',
        'AAA'
    ],{
        A: 'create:brass_ingot',
        B: 'create:iron_sheet'
    })
    
    //Old&Heavy&Default armor blocks   
    
    event.recipes.create.compacting('createarmorblocks:heavy_armor_block',
        ['tconstruct:hepatizon_nugget', 'create:sturdy_sheet', 'create_ironworks:steel_ingot', 'createarmorblocks:armor_block']).superheated()
    event.remove({ output: 'createarmorblocks:armor_block' })
    event.recipes.create.compacting('createarmorblocks:armor_block', ['create:andesite_alloy','minecraft:iron_block' ,'3x create_ironworks:steel_ingot']).heated()
    
    //protivotankoviy yojik
    event.shaped(Item.of('createarmorblocks:tank_obstacle'),[
        'A A',
        ' A ',
        'A A'
    ],{
        A: 'create:metal_girder'
    })

    //Create Radars safe zone prikol
    event.shaped(Item.of('create_radar:radar_safe_zone_designator'),[
        ' A ',
        ' B ',
        ' C '
    ],{
        A: 'create:transmitter',
        B: 'create:brass_sheet',
        C: 'create:electron_tube'
    })

    //HE shell rebalance
    event.remove({ output: 'createbigcannons:he_shell' })
    event.recipes.create.mechanical_crafting('createbigcannons:he_shell', [
        ' I ',
        'IGI',
        'INI',
        ' W '
    ], {
        I: 'createdeco:industrial_iron_sheet',
        G: 'createbigcannons:packed_guncotton',
        N: 'createbigcannons:nitropowder',
        W: 'minecraft:oak_slab'
    })

    // fix oil barrel craft
    event.remove({ id: 'create_connected:crafting/kinetics/item_silo' })

    // Autocannon Cartridge
    event.remove({ output: 'createbigcannons:autocannon_cartridge_sheet' })
    event.recipes.create.cutting('6x createbigcannons:autocannon_cartridge_sheet', 'create:brass_sheet')

    //Copper circuit
    event.remove({ output: 'create_new_age:copper_circuit' })
    event.recipes.create.deploying('create_new_age:copper_circuit', ['create_new_age:blank_circuit', 'createaddition:copper_spool'])

    //Mossy bricks
    function mossing(MossOutput, MossInput) {
        event.remove({ output: MossOutput })
        event.shapeless(
            Item.of(MossOutput, 8),
        [
            'minecraft:vine', 	     
            MossInput
        ])
        event.shapeless(
            Item.of(MossOutput, 8),
        [
            'minecraft:moss_block', 	     
            MossInput
        ])
    }

    mossing('minecraft:mossy_stone_bricks', '8x minecraft:stone_bricks')
    mossing('createdeco:mossy_verdant_bricks', '8x createdeco:verdant_bricks')
    mossing('createdeco:mossy_red_bricks', '8x createdeco:red_bricks')
    mossing('createdeco:mossy_pearl_bricks', '8x createdeco:pearl_bricks')
    mossing('createdeco:mossy_umber_bricks', '8x createdeco:umber_bricks')
    mossing('createdeco:mossy_scarlet_bricks', '8x createdeco:scarlet_bricks')
    mossing('createdeco:mossy_blue_bricks', '8x createdeco:blue_bricks')
    mossing('createdeco:mossy_dean_bricks', '8x createdeco:dean_bricks')
    mossing('createdeco:mossy_dusk_bricks', '8x createdeco:dusk_bricks')

    //Sand bags
    event.remove({ output: 'createarmorblocks:sand_bags' })
    event.shaped(
        Item.of('createarmorblocks:sand_bags'),[
        'BAB',
        'AAA',
        'BAB'],
        {
        A: 'minecraft:sand',
        B: 'farmersdelight:canvas'
        }
    )

    event.remove({ output: 'createrailwaysnavigator:advanced_display' })
    event.shaped(
        Item.of('createrailwaysnavigator:advanced_display', 3),[
        'BAB',
        'DCD',
        'BAB'],
        {
        A: 'create:sturdy_sheet',
        B: 'createdeco:andesite_sheet',
        C: 'create:display_board',
        D: 'create_new_age:copper_circuit'
        }
    )

    //direct chute
    event.shapeless(
    Item.of('direct_chute:direct_chute'),['create:chute'])
    event.shapeless(
    Item.of('create:chute'),['direct_chute:direct_chute'])

    //konusi
    event.shaped(
    Item.of('createbigcannons:traffic_cone', 4),[
    'ACA',
    'BCB',
    'CDC'],
    {
    A: 'minecraft:orange_dye',
    B: 'minecraft:white_dye',
    C: 'create:cardboard',
    D: 'create:cardboard_block'
    })




    //=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=//
    //                          Betonchik                          //
    //=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=//



    function colorrem(coloredInput) {
        event.remove({ input: coloredInput })
        event.remove({ output: coloredInput })
    }

    colorrem('minecraft:white_concrete_powder')
    colorrem('minecraft:orange_concrete_powder')
    colorrem('minecraft:magenta_concrete_powder')
    colorrem('minecraft:light_blue_concrete_powder')
    colorrem('minecraft:yellow_concrete_powder')
    colorrem('minecraft:lime_concrete_powder')
    colorrem('minecraft:pink_concrete_powder')
    colorrem('minecraft:gray_concrete_powder')
    colorrem('minecraft:light_gray_concrete_powder')
    colorrem('minecraft:cyan_concrete_powder')
    colorrem('minecraft:purple_concrete_powder')
    colorrem('minecraft:blue_concrete_powder')
    colorrem('minecraft:brown_concrete_powder')
    colorrem('minecraft:green_concrete_powder')
    colorrem('minecraft:red_concrete_powder')
    colorrem('minecraft:black_concrete_powder')

    function coloradd(ColorOutput, ColorInput) {
        event.recipes.create.mixing(ColorOutput,
        [ColorInput, '4x minecraft:sand', '4x minecraft:gravel', Fluid.water(1000)])
    }

    coloradd({ fluid: 'createdieselgenerators:white_cement', amount: 1000 }, 'minecraft:white_dye')
    coloradd({ fluid: 'createdieselgenerators:orange_cement', amount: 1000 }, 'minecraft:orange_dye')
    coloradd({ fluid: 'createdieselgenerators:magenta_cement', amount: 1000 }, 'minecraft:magenta_dye')
    coloradd({ fluid: 'createdieselgenerators:light_blue_cement', amount: 1000 }, 'minecraft:light_blue_dye')
    coloradd({ fluid: 'createdieselgenerators:yellow_cement', amount: 1000 }, 'minecraft:yellow_dye')
    coloradd({ fluid: 'createdieselgenerators:lime_cement', amount: 1000 }, 'minecraft:lime_dye')
    coloradd({ fluid: 'createdieselgenerators:pink_cement', amount: 1000 }, 'minecraft:pink_dye')
    coloradd({ fluid: 'createdieselgenerators:gray_cement', amount: 1000 }, 'minecraft:gray_dye')
    coloradd({ fluid: 'createdieselgenerators:light_gray_cement', amount: 1000 }, 'minecraft:light_gray_dye')
    coloradd({ fluid: 'createdieselgenerators:cyan_cement', amount: 1000 }, 'minecraft:cyan_dye')
    coloradd({ fluid: 'createdieselgenerators:purple_cement', amount: 1000 }, 'minecraft:purple_dye')
    coloradd({ fluid: 'createdieselgenerators:blue_cement', amount: 1000 }, 'minecraft:blue_dye')
    coloradd({ fluid: 'createdieselgenerators:brown_cement', amount: 1000 }, 'minecraft:brown_dye')
    coloradd({ fluid: 'createdieselgenerators:green_cement', amount: 1000 }, 'minecraft:green_dye')
    coloradd({ fluid: 'createdieselgenerators:red_cement', amount: 1000 }, 'minecraft:red_dye')
    coloradd({ fluid: 'createdieselgenerators:black_cement', amount: 1000 }, 'minecraft:black_dye')
    


    //=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=//
    //                             Rudi                            //
    //=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=//



    event.custom({
        "type": "createoreexcavation:drilling",
        "drill":{"tag": "createoreexcavation:drills"},
        "output": [{"item": "minecraft:quartz"},{"chance": 0.2,"item": "tconstruct:raw_cobalt"}],
        "priority": 0,
        "stress": 512,
        "ticks": 1200,
        "vein_id": "createoreexcavation:ore_vein_type/quartz"
    })

    event.custom({
        "type": "createoreexcavation:drilling",
        "drill": {"tag": "createoreexcavation:drills"},
        "output": [{"chance": 0.7,"item": "minecraft:raw_gold"},{"chance": 0.3,"item": "create_more_additions:raw_silver"}],
        "priority": 0,
        "stress": 192,
        "ticks": 600,
        "vein_id": "createoreexcavation:ore_vein_type/gold"
    })  

    event.custom({
        "type": "createoreexcavation:drilling",
        "drill": {"tag": "createoreexcavation:drills"},
        "output": [{"chance": 0.9,"item": "minecraft:raw_copper"},{"chance": 0.1,"item": "create_ironworks:raw_tin"}],
        "priority": 0,
        "stress": 256,
        "ticks": 600,
        "vein_id": "createoreexcavation:ore_vein_type/copper"
    })



    //=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=//
    //                           Electro                           //
    //=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=//



    //Electrum jewel
    event.remove({ output:'create_more_additions:electrum_jewel'})
    event.custom({
     type: "powergrid:magnetization",
     ingredients: [
    {
      item: "createaddition:electrum_ingot"
    }
     ],
     results: [
    {
      item: "create_more_additions:electrum_jewel"
    }]})
    
    //NA connectors
    event.remove({ output: 'create_new_age:electrical_connector' })

    //Removing electrum block
    event.remove({ output: 'createaddition:electrum_block' })
    event.remove({ input: 'createaddition:electrum_block' })

    //Removing&Replacement zinc sheets
    event.remove({ input: 'createdeco:zinc_sheet' })
    event.remove({ output: 'createdeco:zinc_sheet' })
    event.remove({ input: 'createaddition:zinc_sheet' })
    event.remove({ output: 'createaddition:zinc_sheet' })
    event.shaped(
        Item.of('createdeco:zinc_sheet_metal'),
        [
        'AA ',
        'AA ',
        '   '],
        {
        A: 'powergrid:zinc_sheet'
    })

    function lamps(output, lampInput) {
        event.shaped(output, [
          ' A ',
          ' B ',
          ' C '
        ],{
          A: 'create:zinc_nugget',
          B: lampInput,
          C: 'powergrid:zinc_sheet'
        })
    }

    lamps('createdeco:yellow_zinc_lamp', 'minecraft:torch')
    lamps('createdeco:red_zinc_lamp', 'minecraft:redstone_torch')
    lamps('createdeco:green_zinc_lamp', 'minecraft:glow_berries')
    lamps('createdeco:blue_zinc_lamp', 'minecraft:soul_torch')

    //Removeng wire from crafts and additions
    event.remove({output: 'createaddition:copper_wire'})
    event.remove({input: 'createaddition:copper_wire'})
    event.remove({output: 'createaddition:iron_wire'})
    event.remove({input: 'createaddition:iron_wire'})
    event.remove({output: 'createaddition:gold_wire'})
    event.remove({input: 'createaddition:gold_wire'})

    //Small connector witn light
    event.shapeless(Item.of('createaddition:small_light_connector'),['powergrid:iron_wire','minecraft:glass','createaddition:connector'])
    
    //Barbed wire
    event.shaped(Item.of('2x createaddition:barbed_wire'),[
        ' A ',
        'A A',
        ' A '
    ],{
        A: 'powergrid:iron_wire',
    })

    //Capacitor
    event.shaped(Item.of('createaddition:capacitor'),[
        ' A ',
        ' B ',
        ' C '
    ],{
        A: 'create:copper_sheet',
        B: 'powergrid:zinc_sheet',
        C: 'minecraft:redstone_torch'
    })
    event.shaped(Item.of('createaddition:capacitor'),[
        ' A ',
        ' B ',
        ' C '
    ],{
        B: 'create:copper_sheet',
        A: 'powergrid:zinc_sheet',
        C: 'minecraft:redstone_torch'
    })

    //Accumulator
    event.shaped(Item.of('createaddition:modular_accumulator'),[
        ' A ',
        'BCB',
        ' D '
    ],{
        A: 'createaddition:copper_rod',
        B: 'createaddition:capacitor',
        C: 'create:brass_casing',
        D: 'powergrid:golden_wire'
    })

    //Katushki
    event.shaped(Item.of('createaddition:copper_spool'),[
        ' A ',
        'ABA',
        ' A '
    ],{
        A: 'powergrid:wire',
        B: 'createaddition:spool'
    })
    event.shaped(Item.of('createaddition:gold_spool'),[
        ' A ',
        'ABA',
        ' A '
    ],{
        A: 'powergrid:golden_wire',
        B: 'createaddition:spool'
    })
    
    //Katushki from c&a
    event.remove({output: 'create_new_age:copper_wire'})
    event.remove({output: 'create_new_age:overcharged_iron_wire'})
    event.remove({output: 'create_new_age:overcharged_golden_wire'})
    event.remove({output: 'create_new_age:overcharged_diamond_wire'})
    
    //Removing cutters
    event.remove({ output: 'createdieselgenerators:wire_cutters' })
    event.remove({ input: 'createdieselgenerators:wire_cutters' })
    event.remove({ output: 'powergrid:wire_cutter' })
    event.shaped(
        Item.of('powergrid:wire_cutter'),
        [
        ' B ',
        'ACB',
        ' A '],
        {
        A: 'minecraft:stick',
        B: 'create:iron_sheet',
        C: 'createdeco:andesite_sheet'
    })

    //Wire on rolling mill
    event.remove({output: 'powergrid:wire'})
    event.custom({
        'type':'createaddition:rolling',
        'input': {
            'tag': 'forge:plates/copper'
        },
        'result': {
            'item': 
    'powergrid:wire',
            'count': 4
        }
    })
    event.remove({output: 'powergrid:iron_wire'})
    event.custom({
        'type':'createaddition:rolling',
        'input': {
            'tag': 'forge:plates/iron'
        },
        'result': {
            'item': 
    'powergrid:iron_wire',
            'count': 4
        }
    })
    event.remove({output: 'powergrid:golden_wire'})
    event.custom({
        'type':'createaddition:rolling',
        'input': {
            'tag': 'forge:plates/gold'
        },
        'result': {
            'item': 
    'powergrid:golden_wire',
            'count': 4
        }
    })

    //Motorchik and degenerator
    event.remove({output: 'createaddition:electric_motor'})
    event.remove({output: 'createaddition:alternator'})

    //Energizers
    event.remove({output: 'create_new_age:energiser_t1'})
    event.remove({output: 'create_new_age:energiser_t2'})
    event.remove({output: 'create_new_age:energiser_t3'})
    event.remove({input: 'create_new_age:energiser_t1'})
    event.remove({input: 'create_new_age:energiser_t2'})
    event.remove({input: 'create_new_age:energiser_t3'})

    event.custom({
     type:"createaddition:charging",
     input: {
        item: "minecraft:glass_bottle",
    count: 1
     },
     result:  {
    item: "minecraft:experience_bottle",
    count: 1
     },
     energy: 10000,
      maxChargeRate: 1000
    })

    //Overcharged iron, gold and diamond
    event.remove({output: 'create_new_age:overcharged_iron'})
    event.remove({output: 'create_new_age:overcharged_gold'})
    event.remove({output: 'create_new_age:overcharged_iron_sheet'})
    event.remove({output: 'create_new_age:overcharged_golden_sheet'})
    event.remove({output: 'create_new_age:overcharged_diamond'})

       event.custom({
    type:"createaddition:charging",
     input: {
        item: "createaddition:diamond_grit",
    count: 1
    },
    result:  {
    item: "create_new_age:overcharged_diamond",
    count: 1
     },
     energy: 50000,
     maxChargeRate: 5000
    })

    //Magnitiky
    event.remove({output: 'create_new_age:redstone_magnet'})
    event.remove({output: 'create_new_age:layered_magnet'})
    event.remove({output: 'create_new_age:fluxuated_magnetite'})
    event.remove({output: 'create_new_age:netherite_magnet'})

    event.shaped(
        Item.of('2x create_new_age:redstone_magnet'),
        [
        'ABA',
        'BCB',
        'ABA'],
        {
        A: 'powergrid:magnet',
        B: 'create_new_age:magnetite_block',
        C: 'minecraft:redstone_block',
    })

    event.shaped(
        Item.of('2x create_new_age:layered_magnet'),
        [
        'ACA',
        'BAB',
        'ACA'],
        {
        A: 'powergrid:magnet',
        B: 'create_more_additions:electrum_jewel',
        C: 'create_new_age:redstone_magnet',
    })

    event.shaped(
        Item.of('2x create_new_age:fluxuated_magnetite'),
        [
        'ABA',
        'DCD',
        'ABA'],
        {
        A: 'create_more_additions:electrum_jewel',
        B: 'create_new_age:layered_magnet',
        C: 'create_new_age:overcharged_diamond',
        D: 'powergrid:magnet'
    })

    event.shaped(
        Item.of('2x create_new_age:netherite_magnet'),
        [
        'ACA',
        'BBB',
        'ACA'],
        {
        A: 'create_new_age:overcharged_diamond',
        B: 'minecraft:netherite_scrap',
        C: 'create_new_age:fluxuated_magnetite'
    })

    //basic and reinforced motor
    event.remove({output: 'create_new_age:basic_motor'})
    event.remove({output: 'create_new_age:reinforced_motor'})
    event.shaped(
        Item.of('create_new_age:basic_motor'),
        [
        'AAA',
        'BCD',
        'AAA'],
        {
        A: 'minecraft:iron_nugget',
        B: 'create_new_age:magnetite_block',
        C: 'create:andesite_casing',
        D: 'createaddition:iron_rod'
    })

    event.recipes.create.mechanical_crafting('create_new_age:reinforced_motor', [
        'ABDDA',
        'BCEFG',
        'ABDDA'
    ], {
        A: 'minecraft:diamond',
        B: 'create_new_age:overcharged_diamond',
        C: 'create:brass_casing',
        D: 'create:iron_sheet',
        E: 'minecraft:redstone_block',
        F: 'powergrid:magnet',
        G: 'createaddition:electrum_rod'
    })

    //Replace overcharged iron to magnet, overcharged gold to electrum jewel
    
    event.remove({input: 'create_new_age:overcharged_iron'})
    event.remove({input: 'create_new_age:overcharged_gold'})

    event.shaped(
        Item.of('create_new_age:advanced_motor'),
        [
        'AAA',
        'BCD',
        'AAA'],
        {
        A: 'minecraft:gold_nugget',
        B: 'powergrid:magnet',
        C: 'create:brass_casing',
        D: 'createaddition:iron_rod'
    })
    
    event.shaped(
        Item.of('create_new_age:basic_motor_extension'),
        [
        'AAA',
        'BCC',
        'AAA'],
        {
        A: 'powergrid:magnet',
        B: 'create_new_age:basic_motor',
        C: 'create_new_age:copper_circuit',
    })


    event.shaped(
        Item.of('create_new_age:heater'),
        [
        'A A',
        'ABA',
        'CDC'],
        {
        A: 'minecraft:iron_nugget',
        B: 'create:empty_blaze_burner',
        C: 'create_new_age:heat_pipe',
        D: 'powergrid:magnet'
    })

    event.shaped(
        Item.of('create_new_age:advanced_solar_heating_plate'),
        [
        'AAA',
        'BCB',
        'BCB'],
        {
        A: 'minecraft:glass',
        B: 'powergrid:magnet',
        C: 'create_new_age:heat_pipe',
    })

    event.shaped(
        Item.of('createarmorblocks:old_armor_block'),
        [
        'AAA',
        'ABA',
        'AAA'],
        {
        A: 'minecraft:iron_ingot',
        B: 'powergrid:magnet',
    })

    
    event.remove({input:'create_new_age:overcharged_iron_sheet'})

    event.recipes.create.mechanical_crafting('2x create_new_age:advanced_motor_extension', [
        'AAAAA',
        'BCDCB',
        'AAAAA'
    ], {
        A: 'powergrid:magnet',
        B: 'create_new_age:overcharged_diamond',
        C: 'create_new_age:copper_circuit',
        D: 'create_new_age:reinforced_motor'
    })

    //Reactor casing
    event.remove({output:"create_new_age:reactor_casing"})
    event.recipes.create.deploying('create_new_age:incomplete_casing', ['minecraft:bricks', 'create:sturdy_sheet'])
    event.custom({
    "type":"createaddition:charging",
    "input":{"item": "create_new_age:incomplete_casing"},
    "result":{"item": "create_new_age:reactor_casing"},
    "energy": 25000,
    "maxChargeRate": 1000
   })
    



    //=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=//
    //                          TOTEMS                             //
    //=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=//

    //Evoker trophy

    event.remove({output:'handcrafted:evoker_trophy'})
    event.shaped(
        Item.of('handcrafted:evoker_trophy'),
        [
        ' A ',
        'ABA',
        'A A'],
        {
        A: 'minecraft:stone',
        B: 'minecraft:gold_ingot'
    })

    //Incomplete totem
    
    event.custom({ 
  type: "create:sequenced_assembly",
  ingredient: {
    item: "minecraft:gold_block"
  },
  loops: 5,
  results: [
    {
      count: 1,
      item: "create_more_additions:incomplete_totem"
    }
  ],
  sequence: [
    {
  type: "create:filling",
  ingredients: [
    {
      item: "minecraft:gold_block"
    },
    {
      fluid: "create_enchantment_industry:experience",
      amount: 100
    }
  ],
  results: [
    {
      item: "handcrafted:evoker_trophy"
    }
  ]
},
    {
      type: "create:deploying",
      ingredients: [
        {
          item: "handcrafted:evoker_trophy"
        },
        [
          {
            item: "createbigcannons:unbored_very_large_steel_cannon_layer"
          }
        ]
      ],
      results: [
        {
          item: "handcrafted:evoker_trophy"
        }
      ]
    },
    {
  type: "create:filling",
  ingredients: [
    {
      item: "handcrafted:evoker_trophy"
    },
    {
      fluid: "tconstruct:molten_queens_slime",
      amount: 270
    }
  ],
  results: [
    {
      item: "minecraft:experience_bottle"
    }
  ]
},
{
  type: "create:filling",
  ingredients: [
    {
      item: "handcrafted:evoker_trophy"
    },
    {
      fluid: "tconstruct:molten_diamond",
      amount: 200
    }
  ],
  results: [
    {
      item: "minecraft:experience_bottle"
    }
  ]
},
{
  type: "create:filling",
  ingredients: [
    {
      item: "handcrafted:evoker_trophy"
    },
    {
      fluid: "tconstruct:molten_netherite",
      amount: 90
    }
  ],
  results: [
    {
      item: "minecraft:experience_bottle"
    }
  ]
},
{
  type: "create:filling",
  ingredients: [
    {
      item: "handcrafted:evoker_trophy"
    },
    {
      fluid: "tconstruct:molten_cinderslime",
      amount: 180
    }
  ],
  results: [
    {
      item: "minecraft:experience_bottle"
    }
  ]
},
{
      type: "create:deploying",
      ingredients: [
        {
          item: "handcrafted:evoker_trophy"
        },
        [
          {
            item: "createbigcannons:unbored_bronze_cannon_chamber"
          }
        ]
      ],
      results: [
        {
          item: "handcrafted:evoker_trophy"
        }
      ]
    },
],
  transitionalItem: {
    item: "handcrafted:evoker_trophy"
  }
})

    //Craft of totems

    event.custom({ 
  type: "create:sequenced_assembly",
  ingredient: {
    item: "create_more_additions:incomplete_totem"
  },
  loops: 3,
  results: [
    {
      count: 1,
      item: "minecraft:totem_of_undying"
    }
  ],
  sequence: [
    {
  type: "create:filling",
  ingredients: [
    {
      item: "create_more_additions:incomplete_totem"
    },
    {
      fluid: "createdieselgenerators:diesel",
      amount: 300
    }
  ],
  results: [
    {
      item: "create_more_additions:incomplete_totem"
    }
  ]
},
  {
      type: "create:deploying",
      ingredients: [
        {
          item: "create_more_additions:incomplete_totem"
        },
        [
          {
            item: "create_new_age:advanced_motor_extension"
          }
        ]
      ],
      results: [
        {
          item: "create_more_additions:incomplete_totem"
        }
      ]
    },
    {
      type: "create:deploying",
      ingredients: [
        {
          item: "create_more_additions:incomplete_totem"
        },
        [
          {
            item: "powergrid:electrical_gizmo"
          }
        ]
      ],
      results: [
        {
          item: "create_more_additions:incomplete_totem"
        }
      ]
    },
    {
      type: "create:deploying",
      ingredients: [
        {
          item: "create_more_additions:incomplete_totem"
        },
        [
          {
            item: "create_things_and_misc:vibration_mechanism"
          }
        ]
      ],
      results: [
        {
          item: "create_more_additions:incomplete_totem"
        }
      ]
    },
    {
      type: "create:deploying",
      ingredients: [
        {
          item: "create_more_additions:incomplete_totem"
        },
        [
          {
            item: "create:precision_mechanism"
          }
        ]
      ],
      results: [
        {
          item: "create_more_additions:incomplete_totem"
        }
      ]
    }, 
    {
      type: "create:deploying",
      ingredients: [
        {
          item: "create_more_additions:incomplete_totem"
        },
        [
          {
            item: "create_more_additions:electrum_jewel"
          }
        ]
      ],
      results: [
        {
          item: "create_more_additions:incomplete_totem"
        }
      ]
    }, 
],
  transitionalItem: {
    item: "create_more_additions:incomplete_totem"
  }
})



    //=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=//
    //                       Computer Craft                        //
    //=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=//



    //Computer
    event.remove({output:'computercraft:computer_normal'})
    event.shaped(
        Item.of('computercraft:computer_normal'),
        [
        'ABA',
        'CDE',
        'FGF'],
        {
        A: 'create:iron_sheet',
        B: 'powergrid:bjt_transistor',
        C: 'powergrid:diode',
        D: 'powergrid:integrated_circuit',
        E: 'powergrid:resistor',
        F: 'createdeco:andesite_sheet',
        G: 'railways:smokestack_diesel'
    })

    //Computer advanced
    event.remove({output:'computercraft:computer_advanced'})
    event.shaped(
        Item.of('computercraft:computer_advanced'),
        [
        'ABA',
        'CDE',
        'FGF'],
        {
        A: 'create_ironworks:steel_sheet',
        B: 'powergrid:integrated_circuit',
        C: 'create_new_age:copper_circuit',
        D: 'computercraft:computer_normal',
        E: 'powergrid:electrical_gizmo',
        F: 'create:sturdy_sheet',
        G: 'minecraft:water_bucket'
    })

    //turtle
    event.remove({output:'computercraft:turtle_normal'})
    event.shaped(
        Item.of('computercraft:turtle_normal'),
        [
        'ABA',
        'CDC',
        'FGF'],
        {
        A: 'create:iron_sheet',
        B: 'powergrid:potato_battery',
        C: 'powergrid:integrated_circuit',
        D: 'create:content_observer',
        F: 'createdeco:andesite_sheet',
        G: 'create_new_age:basic_motor'
    })

    //turtle advanced
    event.remove({output:'computercraft:turtle_advanced'})
    event.shaped(
        Item.of('computercraft:turtle_advanced'),
        [
        'ABA',
        'CDE',
        'FGF'],
        {
        A: 'create_ironworks:steel_sheet',
        B: 'powergrid:battery',
        C: 'powergrid:electrical_gizmo',
        D: 'computercraft:turtle_normal',
        E: 'create_new_age:copper_circuit',
        F: 'create:sturdy_sheet',
        G: 'powergrid:electric_motor'
    })

    //pocket comp
    event.remove({output:'computercraft:pocket_computer_normal'})
    event.shaped(
        Item.of('computercraft:pocket_computer_normal'),
        [
        'ABA',
        'CDC',
        'FGF'],
        {
        A: 'create:iron_sheet',
        B: 'create:transmitter',
        C: 'powergrid:bjt_transistor',
        D: 'powergrid:integrated_circuit',
        F: 'createdeco:andesite_sheet',
        G: 'powergrid:potato_battery'
    })

    //pocket comp advanced
    event.remove({output:'computercraft:pocket_computer_advanced'})
    event.shaped(
        Item.of('computercraft:pocket_computer_advanced'),
        [
        'ABA',
        'CDE',
        'FGF'],
        {
        A: 'create_ironworks:steel_sheet',
        B: 'powergrid:integrated_circuit',
        C: 'powergrid:electrical_gizmo',
        D: 'computercraft:pocket_computer_normal',
        E: 'create_new_age:copper_circuit',
        F: 'create:sturdy_sheet',
        G: 'powergrid:battery'
    })

    //monitor
    event.remove({output:'computercraft:monitor_normal'})
    event.shaped(
        Item.of('computercraft:monitor_normal'),
        [
        'ABA',
        'CCC',
        'FGF'],
        {
        A: 'create:iron_sheet',
        B: 'powergrid:integrated_circuit',
        C: 'powergrid:led',
        F: 'createdeco:andesite_sheet',
        G: 'create:transmitter'
    })

    //monitor advanced
    event.remove({output:'computercraft:monitor_advanced'})
    event.shaped(
        Item.of('computercraft:monitor_advanced'),
        [
        'ABA',
        'CDC',
        'FGF'],
        {
        A: 'create_ironworks:steel_sheet',
        B: 'powergrid:integrated_circuit',
        C: 'powergrid:led',
        D: 'computercraft:monitor_normal',
        F: 'create:sturdy_sheet',
        G: 'create_new_age:copper_circuit'
    })

    //wless modem
    event.remove({output:'computercraft:wireless_modem_normal'})
    event.shaped(
        Item.of('computercraft:wireless_modem_normal'),
        [
        'ABA',
        'CDC',
        'FGF'],
        {
        A: 'create:iron_sheet',
        B: 'powergrid:bjt_transistor',
        C: 'create:transmitter',
        D: 'create:redstone_link',
        F: 'createdeco:andesite_sheet',
        G: 'powergrid:integrated_circuit'
    })

    //ender modem
    event.remove({output:'computercraft:wireless_modem_advanced'})
    event.shaped(
        Item.of('computercraft:wireless_modem_advanced'),
        [
        'ABA',
        'CDC',
        'FGF'],
        {
        A: 'create_ironworks:steel_sheet',
        B: 'powergrid:integrated_circuit',
        C: 'create_new_age:copper_circuit',
        D: 'computercraft:wireless_modem_normal',
        F: 'create:sturdy_sheet',
        G: 'powergrid:electrical_gizmo'
    })

    //cabel
    event.remove({output:'computercraft:cable'})
    event.shaped(
        Item.of('computercraft:cable'),
        [
        'AAA',
        'CCC',
        'AAA'],
        {
        A: 'farmersdelight:canvas',
        C: 'powergrid:wire'
    })

    //usb
    event.remove({output:'computercraft:wired_modem'})
    event.shaped(
        Item.of('computercraft:wired_modem'),
        [
        ' AA',
        'BCC',
        ' AA'],
        {
        A: 'create:iron_sheet',
        B: 'computercraft:cable',
        C: 'powergrid:wire'
    })

    //wired modem
    event.remove({output:'computercraft:wired_modem_full'})
    event.shaped(
        Item.of('computercraft:wired_modem_full'),
        [
        'ACA',
        'CBC',
        'ACA'],
        {
        A: 'create:andesite_casing',
        B: 'powergrid:integrated_circuit',
        C: 'computercraft:cable'
    })

    //redstone_relay
    event.remove({output:'computercraft:redstone_relay'})
    event.shaped(
        Item.of('computercraft:redstone_relay'),
        [
        'ACA',
        'CBD',
        'ECE'],
        {
        A: 'minecraft:stone',
        B: 'powergrid:redstone_relay',
        C: 'minecraft:redstone',
        D: 'minecraft:observer',
        E: 'minecraft:smooth_stone',
    })

    //speaker
    event.remove({output:'computercraft:speaker'})
    event.shaped(
        Item.of('computercraft:speaker'),
        [
        'ACA',
        'DBD',
        'AEA'],
        {
        A: 'create:andesite_casing',
        B: 'createdeco:iron_facade',
        C: 'powergrid:integrated_circuit',
        D: 'powergrid:bjt_transistor',
        E: 'powergrid:magnet',
    })

    //printer
    event.remove({output:'computercraft:printer'})
    event.shaped(
        Item.of('computercraft:printer'),
        [
        'ACA',
        'DBD',
        'AEA'],
        {
        A: 'create:cut_veridium',
        B: 'create_enchantment_industry:ink_bucket',
        C: 'powergrid:integrated_circuit',
        D: 'create:sturdy_sheet',
        E: 'create_new_age:basic_motor'
    })

    //diskovodick
    event.remove({output:'computercraft:disk_drive'})
    event.shaped(
        Item.of('computercraft:disk_drive'),
        [
        'ACA',
        'DBD',
        'AEA'],
        {
        A: 'create:cut_veridium',
        B: 'create_things_and_misc:rose_quartz_sheet',
        C: 'powergrid:integrated_circuit',
        D: 'create:sturdy_sheet',
        E: 'create_new_age:basic_motor'
    })

    event.remove({output:'computercraft:disk'})
    function colored_disks(disk_output, disk_input){
    event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
    " A ",
    "ABA",
    " A "],
    "key": {"A": {"item": "create_things_and_misc:rose_quartz_sheet"}, "B": {"item": disk_input}},
    "result": disk_output
    })}

    colored_disks({"item": "computercraft:disk", "nbt": "{Color:1118481}"}, 'minecraft:black_dye')
    colored_disks({"item": "computercraft:disk", "nbt": "{Color:15905484}"}, 'minecraft:pink_dye')
    colored_disks({"item": "computercraft:disk", "nbt": "{Color:5000268}"}, 'minecraft:gray_dye')
    colored_disks({"item": "computercraft:disk", "nbt": "{Color:10066329}"}, 'minecraft:light_gray_dye')
    colored_disks({"item": "computercraft:disk", "nbt": "{Color:5020082}"}, 'minecraft:cyan_dye')
    colored_disks({"item": "computercraft:disk", "nbt": "{Color:11691749}"}, 'minecraft:purple_dye')
    colored_disks({"item": "computercraft:disk", "nbt": "{Color:3368652}"}, 'minecraft:blue_dye')
    colored_disks({"item": "computercraft:disk", "nbt": "{Color:8349260}"}, 'minecraft:brown_dye')
    colored_disks({"item": "computercraft:disk", "nbt": "{Color:5744206}"}, 'minecraft:green_dye')
    colored_disks({"item": "computercraft:disk", "nbt": "{Color:13388876}"}, 'minecraft:red_dye')
    colored_disks({"item": "computercraft:disk", "nbt": "{Color:15790320}"}, 'minecraft:white_dye')
    colored_disks({"item": "computercraft:disk", "nbt": "{Color:15905331}"}, 'minecraft:orange_dye')
    colored_disks({"item": "computercraft:disk", "nbt": "{Color:15040472}"}, 'minecraft:magenta_dye')
    colored_disks({"item": "computercraft:disk", "nbt": "{Color:10072818}"}, 'minecraft:light_blue_dye')
    colored_disks({"item": "computercraft:disk", "nbt": "{Color:14605932}"}, 'minecraft:yellow_dye')
    colored_disks({"item": "computercraft:disk", "nbt": "{Color:8375321}"}, 'minecraft:lime_dye')
    

    //chat box
    event.remove({output:'advancedperipherals:chat_box'})
    event.shaped(
        Item.of('advancedperipherals:chat_box'),
        [
        'ACA',
        'DBD',
        'ACA'],
        {
        A: 'create:sturdy_sheet',
        B: 'advancedperipherals:peripheral_casing',
        C: 'minecraft:writable_book',
        D: 'create:transmitter'
    })  

    //environment_detector
    event.remove({output:'advancedperipherals:environment_detector'})
    event.shaped(
        Item.of('advancedperipherals:environment_detector'),
        [
        'ACA',
        'CBC',
        'ACA'],
        {
        A: 'create:cut_veridium',
        B: 'advancedperipherals:peripheral_casing',
        C: 'create:sturdy_sheet'
    })

    //energy_detector
    event.remove({output:'advancedperipherals:energy_detector'})
    event.shaped(
        Item.of('advancedperipherals:energy_detector'),
        [
        'ACA',
        'DBD',
        'ACA'],
        {
        A: 'create:sturdy_sheet',
        B: 'advancedperipherals:peripheral_casing',
        C: 'minecraft:redstone_block',
        D: 'powergrid:redstone_relay'
    })

    //player_detector
    event.remove({output:'advancedperipherals:player_detector'})
    event.shaped(
        Item.of('advancedperipherals:player_detector'),
        [
        'ACA',
        'DBD',
        'AEA'],
        {
        A: 'create:sturdy_sheet',
        B: 'advancedperipherals:peripheral_casing',
        C: 'create:transmitter',
        E: 'create_radar:radar_receiver_block',
        D: 'create_radar:radar_dish_block'
    })

    //inventory_manager
    event.remove({output:'advancedperipherals:inventory_manager'})
    event.shaped(
        Item.of('advancedperipherals:inventory_manager'),
        [
        'ACA',
        'DBD',
        'FEF'],
        {
        A: 'create_ironworks:steel_sheet',
        B: 'advancedperipherals:peripheral_casing',
        C: 'create_new_age:copper_circuit',
        E: 'powergrid:electrical_gizmo',
        F: 'create:sturdy_sheet',
        D: 'create:item_vault'
    })

    //peripheral_casing
    event.remove({output:'advancedperipherals:peripheral_casing'})
    event.shaped(
        Item.of('advancedperipherals:peripheral_casing'),
        [
        'ACA',
        'DBD',
        'ACA'],
        { 
        A: 'create:sturdy_sheet',
        B: 'powergrid:integrated_circuit',
        C: 'create:iron_sheet',
        D: 'createdeco:andesite_sheet'
    })

    //computer_tool
    event.remove({output:'advancedperipherals:computer_tool'})
    event.shaped(
        Item.of('advancedperipherals:computer_tool'),
        [
        'A A',
        'AAA',
//Lubimaya strochka razrabov sosisok
        ' B '],
        { 
        A: 'create:iron_sheet',
        B: 'createaddition:iron_rod'
    })

    //memory_card
    event.remove({output:'advancedperipherals:memory_card'})
    event.shaped(
        Item.of('advancedperipherals:memory_card'),
        [
        'ACA',
        'DBD',
        'EFE'],
        { 
        A: 'powergrid:electrical_gizmo',
        B: 'powergrid:integrated_circuit',
        C: 'create:cut_veridium',
        E: 'create_ironworks:steel_sheet',
        F: 'computercraft:wired_modem',
        D: 'create_new_age:copper_circuit'
    })

    //block_reader
    event.remove({output:'advancedperipherals:block_reader'})
    event.shaped(
        Item.of('advancedperipherals:block_reader'),
        [
        'ACA',
        'DBE',
        'ACA'],
        { 
        A: 'create:sturdy_sheet',
        B: 'advancedperipherals:peripheral_casing',
        C: 'powergrid:bjt_transistor',
        E: 'minecraft:observer',
        D: 'create_more_additions:electrum_jewel'
    })

    //redstone_integrator
    event.remove({output:'advancedperipherals:redstone_integrator'})
    event.shaped(
        Item.of('advancedperipherals:redstone_integrator'),
        [
        'ACA',
        'DBD',
        'ACA'],
        { 
        A: 'create:sturdy_sheet',
        B: 'advancedperipherals:peripheral_casing',
        D: 'minecraft:comparator',
        C: 'create_more_additions:electrum_jewel'
    })

    //geo_scanner
    event.remove({output:'advancedperipherals:geo_scanner'})
    event.shaped(
        Item.of('advancedperipherals:geo_scanner'),
        [
        'ACA',
        'DBD',
        'AEA'],
        { 
        A: 'create:sturdy_sheet',
        B: 'advancedperipherals:peripheral_casing',
        D: 'minecraft:raw_copper_block',
        E: 'minecraft:observer',
        C: 'create:transmitter'
    })

    //weak_automata_core
    event.remove({output:'advancedperipherals:weak_automata_core'})
    event.shaped(
        Item.of('advancedperipherals:weak_automata_core'),
        [
        'ACA',
        'DBD',
        'AEA'],
        { 
        A: 'create_more_additions:electrum_jewel',
        B: 'advancedperipherals:peripheral_casing',
        D: 'create_new_age:overcharged_diamond',
        E: 'minecraft:soul_lantern',
        C: 'create:haunted_bell'
    })

    //chunk_controller
    event.remove({output:'advancedperipherals:chunk_controller'})
    event.shaped(
        Item.of('advancedperipherals:chunk_controller'),
        [
        'ADA',
        'DBD',
        'ADA'],
        { 
        A: 'create:iron_sheet',
        B: 'create_power_loader:empty_andesite_chunk_loader',
        D: 'minecraft:redstone'
    })

    //nbt_storage
    event.remove({output:'advancedperipherals:nbt_storage'})
    event.shaped(
        Item.of('advancedperipherals:nbt_storage'),
        [
        'ACA',
        'DBD',
        'AEA'],
        { 
        A: 'create:sturdy_sheet',
        B: 'advancedperipherals:peripheral_casing',
        D: 'powergrid:bjt_transistor',
        E: 'create:item_vault',
        C: 'powergrid:integrated_circuit'
    })

    

    //=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=//
    //                   Tconstruct Modifiers                      //
    //=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=//



    // fuck soulbelt
    event.remove({id: 'tconstruct:tools/modifiers/ability/soul_belt'})
    event.remove({id: 'tconstruct:tools/modifiers/salvage/ability/soul_belt'})
  
    // fuck soulbound
    event.remove({id: 'tconstruct:tools/modifiers/upgrade/soulbound'})
    event.remove({id: 'tconstruct:tools/modifiers/salvgage/upgrade/soulbound'})

    //fuck autosmelt
    event.remove({id: 'tconstruct:tools/modifiers/ability/autosmelt'})
    event.remove({id: 'tconstruct:tools/modifiers/salvage/ability/autosmelt'})

    // fuck flinging
    event.remove({id: 'tconstruct:tools/modifiers/ability/flinging'})
    event.remove({id: 'tconstruct:tools/modifiers/salvage/ability/flinging'})

    // fuck warping
    event.remove({id: 'tconstruct:tools/modifiers/ability/warping'})
    event.remove({id: 'tconstruct:tools/modifiers/salvage/ability/warping'})

    // fuck wings
    event.remove({id: 'tconstruct:tools/modifiers/ability/wings'})
    event.remove({id: 'tconstruct:tools/modifiers/salvage/ability/wings'})

    // fuck unbreakable
    event.remove({id: 'tconstruct:tools/modifiers/ability/unbreakable'})
    event.remove({id: 'tconstruct:tools/modifiers/salvage/ability/unbreakable'})

    //fuck longfall
    event.remove({id: 'tconstruct:tools/modifiers/ability/long_fall'})
    event.remove({id: 'tconstruct:tools/modifiers/salvage/ability/long_fall'})




})
ServerEvents.tags('item', event => {

    event.removeAllTagsFrom('tconstruct:steel_block')
    event.removeAllTagsFrom('tconstruct:steel_ingot')
    event.removeAllTagsFrom('tconstruct:steel_nugget')
    event.removeAllTagsFrom('createaddition:zinc_sheet')

})