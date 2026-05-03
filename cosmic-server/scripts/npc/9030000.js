/**
 * UmamiMS AIO Shop (9030000)
 * Uses explicit shop ID mappings so removing categories never shifts other IDs.
 **/
var name = "#bUmamiMS Shop#k";
var talk = "What would you like to browse?\r\n\r\n";

// Each category: [label, shopId]
var categories = [
    ["Common",   [
        ["Hats",                    6000],
        ["Earrings",                6001],
        ["Necklaces & Accessories", 6002],
        ["Capes",                   6003],
        ["Overalls",                6004],
        ["Gloves",                  6005],
        ["Shields",                 6006],
        ["Shoes",                   6007],
        ["Maple Weapons",           6008],
        ["Level 0 Weapons",         6009],
    ]],
    ["Warrior",  [
        ["Hats",        6100],
        ["Tops",        6101],
        ["Bottoms",     6102],
        ["Overalls",    6103],
        ["Gloves",      6104],
        ["Shields",     6105],
        ["Shoes",       6106],
        ["1H Axes",     6107],
        ["2H Axes",     6108],
        ["1H BWs",      6109],
        ["2H BWs",      6110],
        ["1H Swords",   6111],
        ["2H Swords",   6112],
        ["Spears",      6113],
        ["Pole Arms",   6114],
    ]],
    ["Magician", [
        ["Hats",        6200],
        ["Tops",        6207],
        ["Bottoms",     6208],
        ["Overalls",    6201],
        ["Gloves",      6202],
        ["Shields",     6203],
        ["Shoes",       6204],
        ["Wands",       6205],
        ["Staffs",      6206],
    ]],
    ["Archer",   [
        ["Hats",        6300],
        ["Tops",        6308],
        ["Bottoms",     6309],
        ["Overalls",    6301],
        ["Gloves",      6302],
        ["Shoes",       6303],
        ["Bows",        6304],
        ["CrossBows",   6305],
        ["Arrows",      6306],
        ["Bolts",       6307],
    ]],
    ["Thief",    [
        ["Hats",            6400],
        ["Tops",            6401],
        ["Bottoms",         6402],
        ["Overalls",        6403],
        ["Gloves",          6404],
        ["Shields",         6405],
        ["Shoes",           6406],
        ["Daggers",         6407],
        ["Claws",           6408],
        ["Throwing Stars",  6409],
    ]],
    ["Pirate",   [
        ["Hats",                6500],
        ["Tops",                6506],
        ["Bottoms",             6507],
        ["Overalls",            6501],
        ["Gloves",              6502],
        ["Shoes",               6503],
        ["Weapons",             6504],
        ["Bullets and Capsules",6505],
    ]],
    ["NX Items", [
        ["Hats",            6600],
        ["Earrings",        6601],
        ["Face",            6602],
        ["Tops",            6603],
        ["Bottoms",         6604],
        ["Capes",           6605],
        ["Overalls",        6606],
        ["Rings",           6607],
        ["Gloves",          6608],
        ["Shields",         6609],
        ["Shoes",           6610],
        ["Weapons",         6611],
        // Throwing Stars (6612), Pets (6613), Emotions (6615), Effects (6616),
        // FM Stores (6618) disabled — cash/USE items unstable in NPC shops
        ["Pet Misc",        6614],
        ["Accessories",     6617],
    ]],
    ["ETC",      [
        ["Messengers",              6700],
        ["Mega/Gach/Rocks/Morphs",  6701],
        ["Buffs and Potions",       6703],
        ["Scrolls",                 6704],
        ["Summoning Sacks",         6705],
        ["Chairs",                  6706],
        ["Mounts",                  11000],
    ]],
];

var colors = ["#g","#r","#d","#b"];
var rand  = Math.floor(Math.random() * 4);
var rand2 = Math.floor(Math.random() * 4);
var selectedCat = 0;
var npc = 0;

function start() {
    var text = "Hello #e#d#h ##k#n. Welcome to the " + name + "!\r\n\r\n" + talk;
    for (var z = 0; z < categories.length; z++)
        text += "#L" + z + "##e" + colors[rand] + categories[z][0] + "#k#l\r\n";
    cm.sendSimple(text);
}

function action(m, t, s) {
    if (m != 1) { cm.dispose(); return; }
    npc++;

    if (npc == 1) {
        selectedCat = s;
        var subs = categories[s][1];
        var text = "Select a subcategory:\r\n\r\n";
        for (var i = 0; i < subs.length; i++)
            text += "#L" + i + "##e" + colors[rand2] + subs[i][0] + "#k#l\r\n";
        cm.sendSimple(text);
    } else if (npc == 2) {
        var shopId = categories[selectedCat][1][s][1];
        cm.openShopNPC(shopId);
        cm.dispose();
    }
}
