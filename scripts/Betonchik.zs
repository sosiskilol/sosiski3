//Removing vanilla concret powder craft
craftingTable.remove(<item:minecraft:white_concrete_powder>);
craftingTable.remove(<item:minecraft:orange_concrete_powder>);
craftingTable.remove(<item:minecraft:magenta_concrete_powder>);
craftingTable.remove(<item:minecraft:light_blue_concrete_powder>);
craftingTable.remove(<item:minecraft:yellow_concrete_powder>);
craftingTable.remove(<item:minecraft:lime_concrete_powder>);
craftingTable.remove(<item:minecraft:pink_concrete_powder>);
craftingTable.remove(<item:minecraft:gray_concrete_powder>);
craftingTable.remove(<item:minecraft:light_gray_concrete_powder>);
craftingTable.remove(<item:minecraft:cyan_concrete_powder>);
craftingTable.remove(<item:minecraft:purple_concrete_powder>);
craftingTable.remove(<item:minecraft:blue_concrete_powder>);
craftingTable.remove(<item:minecraft:brown_concrete_powder>);
craftingTable.remove(<item:minecraft:green_concrete_powder>);
craftingTable.remove(<item:minecraft:red_concrete_powder>);
craftingTable.remove(<item:minecraft:black_concrete_powder>);

//Removing create concret craft
<recipetype:create:splashing>.remove(<item:minecraft:white_concrete>);
<recipetype:create:splashing>.remove(<item:minecraft:orange_concrete>);
<recipetype:create:splashing>.remove(<item:minecraft:magenta_concrete>);
<recipetype:create:splashing>.remove(<item:minecraft:light_blue_concrete>);
<recipetype:create:splashing>.remove(<item:minecraft:yellow_concrete>);
<recipetype:create:splashing>.remove(<item:minecraft:lime_concrete>);
<recipetype:create:splashing>.remove(<item:minecraft:pink_concrete>);
<recipetype:create:splashing>.remove(<item:minecraft:gray_concrete>);
<recipetype:create:splashing>.remove(<item:minecraft:light_gray_concrete>);
<recipetype:create:splashing>.remove(<item:minecraft:cyan_concrete>);
<recipetype:create:splashing>.remove(<item:minecraft:purple_concrete>);
<recipetype:create:splashing>.remove(<item:minecraft:blue_concrete>);
<recipetype:create:splashing>.remove(<item:minecraft:brown_concrete>);
<recipetype:create:splashing>.remove(<item:minecraft:green_concrete>);
<recipetype:create:splashing>.remove(<item:minecraft:red_concrete>);
<recipetype:create:splashing>.remove(<item:minecraft:black_concrete>);

//Removing create cement craft
<recipetype:create:mixing>.remove(<item:minecraft:white_concrete_powder>);
<recipetype:create:mixing>.remove(<item:minecraft:orange_concrete_powder>);
<recipetype:create:mixing>.remove(<item:minecraft:magenta_concrete_powder>);
<recipetype:create:mixing>.remove(<item:minecraft:light_blue_concrete_powder>);
<recipetype:create:mixing>.remove(<item:minecraft:yellow_concrete_powder>);
<recipetype:create:mixing>.remove(<item:minecraft:lime_concrete_powder>);
<recipetype:create:mixing>.remove(<item:minecraft:pink_concrete_powder>);
<recipetype:create:mixing>.remove(<item:minecraft:gray_concrete_powder>);
<recipetype:create:mixing>.remove(<item:minecraft:light_gray_concrete_powder>);
<recipetype:create:mixing>.remove(<item:minecraft:cyan_concrete_powder>);
<recipetype:create:mixing>.remove(<item:minecraft:purple_concrete_powder>);
<recipetype:create:mixing>.remove(<item:minecraft:blue_concrete_powder>);
<recipetype:create:mixing>.remove(<item:minecraft:brown_concrete_powder>);
<recipetype:create:mixing>.remove(<item:minecraft:green_concrete_powder>);
<recipetype:create:mixing>.remove(<item:minecraft:red_concrete_powder>);
<recipetype:create:mixing>.remove(<item:minecraft:black_concrete_powder>);

//Removing tconstruct concrete craft 
<recipetype:tconstruct:casting_basin>.remove(<item:minecraft:white_concrete>);
<recipetype:tconstruct:casting_basin>.remove(<item:minecraft:orange_concrete>);
<recipetype:tconstruct:casting_basin>.remove(<item:minecraft:magenta_concrete>);
<recipetype:tconstruct:casting_basin>.remove(<item:minecraft:light_blue_concrete>);
<recipetype:tconstruct:casting_basin>.remove(<item:minecraft:yellow_concrete>);
<recipetype:tconstruct:casting_basin>.remove(<item:minecraft:lime_concrete>);
<recipetype:tconstruct:casting_basin>.remove(<item:minecraft:pink_concrete>);
<recipetype:tconstruct:casting_basin>.remove(<item:minecraft:gray_concrete>);
<recipetype:tconstruct:casting_basin>.remove(<item:minecraft:light_gray_concrete>);
<recipetype:tconstruct:casting_basin>.remove(<item:minecraft:cyan_concrete>);
<recipetype:tconstruct:casting_basin>.remove(<item:minecraft:purple_concrete>);
<recipetype:tconstruct:casting_basin>.remove(<item:minecraft:blue_concrete>);
<recipetype:tconstruct:casting_basin>.remove(<item:minecraft:brown_concrete>);
<recipetype:tconstruct:casting_basin>.remove(<item:minecraft:green_concrete>);
<recipetype:tconstruct:casting_basin>.remove(<item:minecraft:red_concrete>);
<recipetype:tconstruct:casting_basin>.remove(<item:minecraft:black_concrete>);

//Add cement fluid
<recipetype:create:mixing>.addJsonRecipe("black_cement_sardelki", {
    "type": "create:mixing",
    "ingredients": [
    {"item": "minecraft:sand"},{"item": "minecraft:sand"},{"item": "minecraft:sand"},{"item": "minecraft:sand"},
    {"item": "minecraft:gravel"},{"item": "minecraft:gravel"},{"item": "minecraft:gravel"},{"item": "minecraft:gravel"},
    {"item": "minecraft:black_dye"},
    {"fluid": "minecraft:water","amount": 1000}],
  "results": [
    {"fluid": "createdieselgenerators:black_cement","amount": 1000}],
  "heatRequirement": "none"
});

<recipetype:create:mixing>.addJsonRecipe("blue_cement_sardelki", {
    "type": "create:mixing",
    "ingredients": [
    {"item": "minecraft:sand"},{"item": "minecraft:sand"},{"item": "minecraft:sand"},{"item": "minecraft:sand"},
    {"item": "minecraft:gravel"},{"item": "minecraft:gravel"},{"item": "minecraft:gravel"},{"item": "minecraft:gravel"},
    {"item": "minecraft:blue_dye"},
    {"fluid": "minecraft:water","amount": 1000}],
  "results": [
    {"fluid": "createdieselgenerators:blue_cement","amount": 1000}],
  "heatRequirement": "none"
});

<recipetype:create:mixing>.addJsonRecipe("brown_cement_sardelki", {
    "type": "create:mixing",
    "ingredients": [
    {"item": "minecraft:sand"},{"item": "minecraft:sand"},{"item": "minecraft:sand"},{"item": "minecraft:sand"},
    {"item": "minecraft:gravel"},{"item": "minecraft:gravel"},{"item": "minecraft:gravel"},{"item": "minecraft:gravel"},
    {"item": "minecraft:brown_dye"},
    {"fluid": "minecraft:water","amount": 1000}],
  "results": [
    {"fluid": "createdieselgenerators:brown_cement","amount": 1000}],
  "heatRequirement": "none"
});

<recipetype:create:mixing>.addJsonRecipe("cyan_cement_sardelki", {
    "type": "create:mixing",
    "ingredients": [
    {"item": "minecraft:sand"},{"item": "minecraft:sand"},{"item": "minecraft:sand"},{"item": "minecraft:sand"},
    {"item": "minecraft:gravel"},{"item": "minecraft:gravel"},{"item": "minecraft:gravel"},{"item": "minecraft:gravel"},
    {"item": "minecraft:cyan_dye"},
    {"fluid": "minecraft:water","amount": 1000}],
  "results": [
    {"fluid": "createdieselgenerators:cyan_cement","amount": 1000}],
  "heatRequirement": "none"
});

<recipetype:create:mixing>.addJsonRecipe("gray_cement_sardelki", {
    "type": "create:mixing",
    "ingredients": [
    {"item": "minecraft:sand"},{"item": "minecraft:sand"},{"item": "minecraft:sand"},{"item": "minecraft:sand"},
    {"item": "minecraft:gravel"},{"item": "minecraft:gravel"},{"item": "minecraft:gravel"},{"item": "minecraft:gravel"},
    {"item": "minecraft:gray_dye"},
    {"fluid": "minecraft:water","amount": 1000}],
  "results": [
    {"fluid": "createdieselgenerators:gray_cement","amount": 1000}],
  "heatRequirement": "none"
});

<recipetype:create:mixing>.addJsonRecipe("green_cement_sardelki", {
    "type": "create:mixing",
    "ingredients": [
    {"item": "minecraft:sand"},{"item": "minecraft:sand"},{"item": "minecraft:sand"},{"item": "minecraft:sand"},
    {"item": "minecraft:gravel"},{"item": "minecraft:gravel"},{"item": "minecraft:gravel"},{"item": "minecraft:gravel"},
    {"item": "minecraft:green_dye"},
    {"fluid": "minecraft:water","amount": 1000}],
  "results": [
    {"fluid": "createdieselgenerators:green_cement","amount": 1000}],
  "heatRequirement": "none"
});

<recipetype:create:mixing>.addJsonRecipe("light_blue_cement_sardelki", {
    "type": "create:mixing",
    "ingredients": [
    {"item": "minecraft:sand"},{"item": "minecraft:sand"},{"item": "minecraft:sand"},{"item": "minecraft:sand"},
    {"item": "minecraft:gravel"},{"item": "minecraft:gravel"},{"item": "minecraft:gravel"},{"item": "minecraft:gravel"},
    {"item": "minecraft:light_blue_dye"},
    {"fluid": "minecraft:water","amount": 1000}],
  "results": [
    {"fluid": "createdieselgenerators:light_blue_cement","amount": 1000}],
  "heatRequirement": "none"
});

<recipetype:create:mixing>.addJsonRecipe("light_gray_cement_sardelki", {
    "type": "create:mixing",
    "ingredients": [
    {"item": "minecraft:sand"},{"item": "minecraft:sand"},{"item": "minecraft:sand"},{"item": "minecraft:sand"},
    {"item": "minecraft:gravel"},{"item": "minecraft:gravel"},{"item": "minecraft:gravel"},{"item": "minecraft:gravel"},
    {"item": "minecraft:light_gray_dye"},
    {"fluid": "minecraft:water","amount": 1000}],
  "results": [
    {"fluid": "createdieselgenerators:light_gray_cement","amount": 1000}],
  "heatRequirement": "none"
});

<recipetype:create:mixing>.addJsonRecipe("lime_cement_sardelki", {
    "type": "create:mixing",
    "ingredients": [
    {"item": "minecraft:sand"},{"item": "minecraft:sand"},{"item": "minecraft:sand"},{"item": "minecraft:sand"},
    {"item": "minecraft:gravel"},{"item": "minecraft:gravel"},{"item": "minecraft:gravel"},{"item": "minecraft:gravel"},
    {"item": "minecraft:lime_dye"},
    {"fluid": "minecraft:water","amount": 1000}],
  "results": [
    {"fluid": "createdieselgenerators:lime_cement","amount": 1000}],
  "heatRequirement": "none"
});

<recipetype:create:mixing>.addJsonRecipe("magenta_cement_sardelki", {
    "type": "create:mixing",
    "ingredients": [
    {"item": "minecraft:sand"},{"item": "minecraft:sand"},{"item": "minecraft:sand"},{"item": "minecraft:sand"},
    {"item": "minecraft:gravel"},{"item": "minecraft:gravel"},{"item": "minecraft:gravel"},{"item": "minecraft:gravel"},
    {"item": "minecraft:magenta_dye"},
    {"fluid": "minecraft:water","amount": 1000}],
  "results": [
    {"fluid": "createdieselgenerators:magenta_cement","amount": 1000}],
  "heatRequirement": "none"
});

<recipetype:create:mixing>.addJsonRecipe("orange_cement_sardelki", {
    "type": "create:mixing",
    "ingredients": [
    {"item": "minecraft:sand"},{"item": "minecraft:sand"},{"item": "minecraft:sand"},{"item": "minecraft:sand"},
    {"item": "minecraft:gravel"},{"item": "minecraft:gravel"},{"item": "minecraft:gravel"},{"item": "minecraft:gravel"},
    {"item": "minecraft:orange_dye"},
    {"fluid": "minecraft:water","amount": 1000}],
  "results": [
    {"fluid": "createdieselgenerators:orange_cement","amount": 1000}],
  "heatRequirement": "none"
});

<recipetype:create:mixing>.addJsonRecipe("pink_cement_sardelki", {
    "type": "create:mixing",
    "ingredients": [
    {"item": "minecraft:sand"},{"item": "minecraft:sand"},{"item": "minecraft:sand"},{"item": "minecraft:sand"},
    {"item": "minecraft:gravel"},{"item": "minecraft:gravel"},{"item": "minecraft:gravel"},{"item": "minecraft:gravel"},
    {"item": "minecraft:pink_dye"},
    {"fluid": "minecraft:water","amount": 1000}],
  "results": [
    {"fluid": "createdieselgenerators:pink_cement","amount": 1000}],
  "heatRequirement": "none"
});

<recipetype:create:mixing>.addJsonRecipe("purple_cement_sardelki", {
    "type": "create:mixing",
    "ingredients": [
    {"item": "minecraft:sand"},{"item": "minecraft:sand"},{"item": "minecraft:sand"},{"item": "minecraft:sand"},
    {"item": "minecraft:gravel"},{"item": "minecraft:gravel"},{"item": "minecraft:gravel"},{"item": "minecraft:gravel"},
    {"item": "minecraft:purple_dye"},
    {"fluid": "minecraft:water","amount": 1000}],
  "results": [
    {"fluid": "createdieselgenerators:purple_cement","amount": 1000}],
  "heatRequirement": "none"
});

<recipetype:create:mixing>.addJsonRecipe("red_cement_sardelki", {
    "type": "create:mixing",
    "ingredients": [
    {"item": "minecraft:sand"},{"item": "minecraft:sand"},{"item": "minecraft:sand"},{"item": "minecraft:sand"},
    {"item": "minecraft:gravel"},{"item": "minecraft:gravel"},{"item": "minecraft:gravel"},{"item": "minecraft:gravel"},
    {"item": "minecraft:red_dye"},
    {"fluid": "minecraft:water","amount": 1000}],
  "results": [
    {"fluid": "createdieselgenerators:red_cement","amount": 1000}],
  "heatRequirement": "none"
});

<recipetype:create:mixing>.addJsonRecipe("white_cement_sardelki", {
    "type": "create:mixing",
    "ingredients": [
    {"item": "minecraft:sand"},{"item": "minecraft:sand"},{"item": "minecraft:sand"},{"item": "minecraft:sand"},
    {"item": "minecraft:gravel"},{"item": "minecraft:gravel"},{"item": "minecraft:gravel"},{"item": "minecraft:gravel"},
    {"item": "minecraft:white_dye"},
    {"fluid": "minecraft:water","amount": 1000}],
  "results": [
    {"fluid": "createdieselgenerators:white_cement","amount": 1000}],
  "heatRequirement": "none"
});

<recipetype:create:mixing>.addJsonRecipe("yellow_cement_sardelki", {
    "type": "create:mixing",
    "ingredients": [
    {"item": "minecraft:sand"},{"item": "minecraft:sand"},{"item": "minecraft:sand"},{"item": "minecraft:sand"},
    {"item": "minecraft:gravel"},{"item": "minecraft:gravel"},{"item": "minecraft:gravel"},{"item": "minecraft:gravel"},
    {"item": "minecraft:yellow_dye"},
    {"fluid": "minecraft:water","amount": 1000}],
  "results": [
    {"fluid": "createdieselgenerators:yellow_cement","amount": 1000}],
  "heatRequirement": "none"
});