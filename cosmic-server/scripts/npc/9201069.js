/**
 * V. Isage - All-in-One Cosmetic Stylist (9201069)
 * Full hair, face & skin changer. No coupons required.
 *
 * Menu: Male Hair | Female Hair | Male Eyes | Female Eyes | Skin Tone
 * Each hair/face section lets you pick Style first, then Colour.
 */

var status    = -1;
var category  = -1;   // 0=mHair  1=fHair  2=mEyes  3=fEyes  4=skin
var subcat    = -1;   // 0=style  1=colour  (unused for skin)
var styleList = Array();

// ── Hair base IDs (last digit = colour, 0 = default black) ────────────────
var mHairBase = Array(
    30000, 30010, 30020, 30030, 30040, 30050, 30060, 30070, 30080, 30090,
    30100, 30110, 30120, 30130, 30140, 30150, 30160, 30170, 30180, 30190,
    30200, 30210, 30220, 30230, 30240, 30250, 30260, 30270, 30280, 30290,
    30300, 30310, 30320, 30330, 30340, 30350, 30360, 30370, 30380, 30390,
    30400, 30410, 30420, 30430, 30440, 30450, 30460, 30470, 30480, 30490,
    30500, 30510, 30520, 30530, 30540, 30550, 30560, 30570, 30580, 30590,
    30600, 30610, 30620, 30630, 30640, 30650, 30660, 30670, 30680, 30690,
    30700, 30710, 30720, 30730, 30740, 30750, 30760, 30770, 30780, 30790,
    30800, 30810, 30820, 30830, 30840, 30850, 30860, 30870, 30880, 30890,
    30900, 30910, 30920, 30930, 30940, 30950, 30960, 30970, 30980, 30990,
    33000, 33010, 33020, 33030, 33040, 33050, 33060, 33070, 33080, 33090,
    33100, 33110, 33120, 33130, 33140, 33150, 33160, 33170, 33180, 33190,
    33200, 33210, 33220, 33230, 33240, 33250, 33260, 33270, 33280, 33290
);

var fHairBase = Array(
    31000, 31010, 31020, 31030, 31040, 31050, 31060, 31070, 31080, 31090,
    31100, 31110, 31120, 31130, 31140, 31150, 31160, 31170, 31180, 31190,
    31200, 31210, 31220, 31230, 31240, 31250, 31260, 31270, 31280, 31290,
    31300, 31310, 31320, 31330, 31340, 31350, 31360, 31370, 31380, 31390,
    31400, 31410, 31420, 31430, 31440, 31450, 31460, 31470, 31480, 31490,
    31500, 31510, 31520, 31530, 31540, 31550, 31560, 31570, 31580, 31590,
    31600, 31610, 31620, 31630, 31640, 31650, 31660, 31670, 31680, 31690,
    31700, 31710, 31720, 31730, 31740, 31750, 31760, 31770, 31780, 31790,
    31800, 31810, 31820, 31830, 31840, 31850, 31860, 31870, 31880, 31890,
    31900, 31910, 31920, 31930, 31940, 31950, 31960, 31970, 31980, 31990,
    34000, 34010, 34020, 34030, 34040, 34050, 34060, 34070, 34080, 34090,
    34100, 34110, 34120, 34130, 34140, 34150, 34160, 34170, 34180, 34190,
    34200, 34210, 34220, 34230, 34240, 34250, 34260, 34270, 34280, 34290
);

// ── Face style numbers (style = faceId % 100, colour = floor offset by 100s) ─
// Male faces: 20000 + (colourIndex * 100) + styleNum
// Female faces: 21000 + (colourIndex * 100) + styleNum
var faceStyleNums = Array(
     0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    10,11,12,13,14,15,16,17,18,19,
    20,21,22,23,24,25,26,27,28,29,
    30,31,32,33,34,35,36,37,38,39,
    40,41,42,43,44,45,46,47,48,49,
    50,51,52,53,54,55,56,57,58,59
);

var faceColourOffsets = Array(0, 100, 200, 300, 400, 500, 600, 700);

// ── Skin ─────────────────────────────────────────────────────────────────────
var skinNames = Array("Light", "Tanned", "Dark", "Pale", "Blue", "Green", "White", "Pink", "Brown");
var skinIds   = Array(0,       1,        2,      3,      4,      5,       9,       10,     11     );

// ── Helpers ──────────────────────────────────────────────────────────────────

function buildHairStyleList(baseArr) {
    var list = Array();
    for (var i = 0; i < baseArr.length; i++) {
        var id = cm.getCosmeticItem(baseArr[i]);
        if (id != -1 && !cm.isCosmeticEquipped(id)) {
            list.push(id);
        }
    }
    return list;
}

function buildHairColourList(hairId) {
    var base = hairId - (hairId % 10);
    var list = Array();
    for (var c = 0; c <= 7; c++) {
        var id = cm.getCosmeticItem(base + c);
        if (id != -1) {
            list.push(id);
        }
    }
    return list;
}

function buildFaceStyleList(genderBase) {
    var list = Array();
    for (var i = 0; i < faceStyleNums.length; i++) {
        var id = cm.getCosmeticItem(genderBase + faceStyleNums[i]);
        if (id != -1 && !cm.isCosmeticEquipped(id)) {
            list.push(id);
        }
    }
    return list;
}

function buildFaceColourList(faceId, genderBase) {
    var styleNum = faceId % 100;
    var list = Array();
    for (var c = 0; c < faceColourOffsets.length; c++) {
        var id = cm.getCosmeticItem(genderBase + faceColourOffsets[c] + styleNum);
        if (id != -1) {
            list.push(id);
        }
    }
    return list;
}

// ── Main script ───────────────────────────────────────────────────────────────

function start() {
    status    = -1;
    category  = -1;
    subcat    = -1;
    styleList = Array();
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode < 1) {
        cm.dispose();
        return;
    }
    status++;

    // ── STATUS 0: Main menu ──────────────────────────────────────────────────
    if (status == 0) {
        cm.sendSimple(
            "Hey there~! I'm #bV. Isage#k, your personal stylist!\r\n" +
            "No coupons, no charge — just pick what you'd like to change.\r\n\r\n" +
            "#b" +
            "#L0# Male Hair#l\r\n" +
            "#L1# Female Hair#l\r\n" +
            "#L2# Male Eyes#l\r\n" +
            "#L3# Female Eyes#l\r\n" +
            "#L4# Skin Tone#l"
        );

    // ── STATUS 1: Sub-menu (style vs colour) or skin direct ─────────────────
    } else if (status == 1) {
        category = selection;

        if (category == 4) {
            // Skin: list all colour options directly
            var text = "Choose your new skin tone:\r\n\r\n#b";
            for (var i = 0; i < skinNames.length; i++) {
                text += "#L" + i + "# " + skinNames[i] + "#l\r\n";
            }
            cm.sendSimple(text);
        } else {
            cm.sendSimple(
                "What would you like to change?\r\n\r\n" +
                "#b#L0# Style#l\r\n" +
                "#L1# Colour#l"
            );
        }

    // ── STATUS 2: Build styleList and show sendStyle (or apply skin) ─────────
    } else if (status == 2) {

        if (category == 4) {
            // Apply skin and done
            if (selection >= 0 && selection < skinIds.length) {
                cm.setSkin(skinIds[selection]);
                cm.sendOk("Glowing! Enjoy your new skin tone~");
            } else {
                cm.sendOk("Hmm, that didn't work. Try again!");
            }
            cm.dispose();
            return;
        }

        subcat = selection; // 0=style, 1=colour

        if (category == 0) {                        // Male Hair
            styleList = (subcat == 0)
                ? buildHairStyleList(mHairBase)
                : buildHairColourList(cm.getPlayer().getHair());

        } else if (category == 1) {                 // Female Hair
            styleList = (subcat == 0)
                ? buildHairStyleList(fHairBase)
                : buildHairColourList(cm.getPlayer().getHair());

        } else if (category == 2) {                 // Male Eyes
            styleList = (subcat == 0)
                ? buildFaceStyleList(20000)
                : buildFaceColourList(cm.getPlayer().getFace(), 20000);

        } else if (category == 3) {                 // Female Eyes
            styleList = (subcat == 0)
                ? buildFaceStyleList(21000)
                : buildFaceColourList(cm.getPlayer().getFace(), 21000);

        } else {
            cm.dispose();
            return;
        }

        if (styleList.length == 0) {
            cm.sendOk("Sorry, I couldn't find any options for that right now. Try again!");
            cm.dispose();
            return;
        }

        var prompt = (subcat == 0) ? "Pick your new style!" : "Pick your new colour!";
        cm.sendStyle(prompt, styleList);

    // ── STATUS 3: Apply hair or face change ──────────────────────────────────
    } else if (status == 3) {
        if (selection < 0 || selection >= styleList.length) {
            cm.sendOk("Invalid selection — come back and try again!");
            cm.dispose();
            return;
        }

        if (category == 0 || category == 1) {
            cm.setHair(styleList[selection]);
            cm.sendOk("Looking fresh! Enjoy your new hair~");
        } else if (category == 2 || category == 3) {
            cm.setFace(styleList[selection]);
            cm.sendOk("Beautiful! Enjoy your new look~");
        }
        cm.dispose();

    } else {
        cm.dispose();
    }
}
