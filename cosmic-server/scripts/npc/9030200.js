/**
 * UmamiMS Skill NPC (9030200)
 * Teaches utility cross-class movement skills at max level.
 * Skills: Flash Jump, Haste, Teleport
 */

// [skillId, name, description]
var skills = [
    [4111006, "Flash Jump",         "Double jump used by Hermits. Great for movement."],
    [4101004, "Haste",              "Increases speed and jump. Used by Assassins."],
    [2101002, "Teleport (F/P)",     "Blink in any direction. Fire/Poison Wizard version."],
    [2201002, "Teleport (I/L)",     "Blink in any direction. Ice/Lightning Wizard version."],
    [2301001, "Teleport (Cleric)",  "Blink in any direction. Cleric version."],
];

var keymap = [
    [59,"F1"],[60,"F2"],[61,"F3"],[62,"F4"],[63,"F5"],[64,"F6"],[65,"F7"],[66,"F8"],[67,"F9"],
    [68,"F10"],[87,"F11"],[88,"F12"],
    [2,"1"],[3,"2"],[4,"3"],[5,"4"],[6,"5"],[7,"6"],[8,"7"],[9,"8"],[10,"9"],[11,"0"],
    [16,"Q"],[17,"W"],[18,"E"],[19,"R"],[20,"T"],[21,"Y"],[22,"U"],[23,"I"],[24,"O"],[25,"P"],
    [30,"A"],[31,"S"],[32,"D"],[33,"F"],[34,"G"],[35,"H"],[36,"J"],[37,"K"],[38,"L"],
    [44,"Z"],[45,"X"],[46,"C"],[47,"V"],[48,"B"],[49,"N"],[50,"M"],
    [42,"Shift"],[29,"Ctrl"],[56,"Alt"],[57,"Space"],
    [82,"Insert"],[71,"Home"],[73,"Page Up"],[83,"Delete"],[79,"End"],[81,"Page Down"],
];

var status = -1;
var selectedSkill = -1;

function start() {
    status = -1;
    selectedSkill = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode < 1) { cm.dispose(); return; }
    status++;

    if (status == 0) {
        var text = "Hey! I can teach you some handy movement skills from other classes — for free.\r\n\r\n#b";
        for (var i = 0; i < skills.length; i++) {
            text += "#L" + i + "##s" + skills[i][0] + "# " + skills[i][1] + "#l\r\n";
        }
        cm.sendSimple(text);

    } else if (status == 1) {
        selectedSkill = selection;
        cm.sendNextPrev("#s" + skills[selectedSkill][0] + "# #b" + skills[selectedSkill][1] + "#k\r\n\r\n" + skills[selectedSkill][2] + "\r\n\r\nWant me to teach you this skill?");

    } else if (status == 2) {
        var text = "Which key do you want to bind #b" + skills[selectedSkill][1] + "#k to?\r\n\r\n#b";
        for (var i = 0; i < keymap.length; i++) {
            text += "#L" + i + "# " + keymap[i][1] + "#l  ";
        }
        cm.sendSimple(text);

    } else if (status == 3) {
        cm.teachSkillMax(skills[selectedSkill][0]);
        cm.changeKeyBinding(keymap[selection][0], 1, skills[selectedSkill][0]);
        cm.sendOk("Done! #b" + skills[selectedSkill][1] + "#k has been taught and bound to #b" + keymap[selection][1] + "#k. Enjoy!");
        cm.dispose();
    }
}
