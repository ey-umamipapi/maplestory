/*
    UmamiMS — Spinel Warp NPC
    Replaces the default Spinel script with a free full-world warp menu.
    Categories: Towns | Bosses | Party Quests
*/

var status = 0;
var category = -1;
var selectedMap = -1;

var towns = [
    ["Henesys",          100000000],
    ["Ellinia",          101000000],
    ["Perion",           102000000],
    ["Kerning City",     103000000],
    ["Lith Harbour",     104000000],
    ["Sleepywood",       105040300],
    ["Nautilus Harbour", 120000000],
    ["Orbis",            200000000],
    ["El Nath",          211000000],
    ["Ludibrium",        220000000],
    ["Omega Sector",     221000000],
    ["Korean Folk Town", 222000000],
    ["Aquarium",         230000000],
    ["Leafre",           240000000],
    ["Ariant",           260000000],
    ["Magatia",          261000000],
    ["Mu Lung",          250000000],
    ["Herb Town",        251000000],
    ["Amoria",           680000000],
    ["Free Market",      910000000],
];

var bosses = [
    ["Zakum Altar",             280030000],
    ["Cave of Life (Horntail)", 240050000],
    ["Papulatus Clock Tower",   220080001],
    ["Pianus (Left)",           230040420],
    ["Pink Bean Temple",        270050100],
];

var pqs = [
    ["Kerning PQ",   103000800],
    ["Ludibrium PQ", 221024400],
    ["Orbis PQ",     200080101],
    ["Magatia PQ",   261000021],
];

function start() {
    status = 0;
    action(1, 0, 0);
}

function buildMenu(list) {
    var str = "Select your destination:#b";
    for (var i = 0; i < list.length; i++) {
        str += "\r\n#L" + i + "#" + list[i][0] + "#l";
    }
    return str;
}

function action(mode, type, selection) {
    if (mode != 1) {
        cm.dispose();
        return;
    }

    if (status == 0) {
        cm.sendSimple("Hey there, #b#h ##k! I'm #rSpinel#k. Where would you like to go? Warps are #rfree#k — my treat.\r\n#b\r\n#L0#Towns & Cities\r\n#L1#Boss Entrances\r\n#L2#Party Quests#l");
        status++;

    } else if (status == 1) {
        category = selection;
        var list = category == 0 ? towns : category == 1 ? bosses : pqs;
        cm.sendSimple(buildMenu(list));
        status++;

    } else if (status == 2) {
        var list = category == 0 ? towns : category == 1 ? bosses : pqs;
        selectedMap = list[selection][1];
        cm.warp(selectedMap, 0);
        cm.dispose();
    }
}
