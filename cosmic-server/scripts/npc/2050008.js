/*
    UmamiMS — Job Advancement NPC
    NPC ID: 9000003
    Place this NPC in the Free Market.

    - Advances jobs at correct levels (10/30/60/120)
    - Handles class & subclass selection menus
    - Fix AP option resets ability points to base stats
*/

var status = 0;
var mode_selected = -1;  // 0 = advance, 1 = fixAP
var next_jobs = null;
var chosen_job = -1;

// Returns the job tier (0=beginner, 1=1st, 2=2nd, 3=3rd, 4=4th)
function getJobTier(jobId) {
    if (jobId == 0) return 0;
    if (jobId % 100 == 0) return 1;
    if (jobId % 10 == 0) return 2;
    if (jobId % 10 == 1) return 3;
    if (jobId % 10 == 2) return 4;
    return -1;
}

function getLevelReq(tier) {
    if (tier == 0) return 10;
    if (tier == 1) return 30;
    if (tier == 2) return 60;
    if (tier == 3) return 120;
    return 999;
}

// Returns array of [jobId, name] choices for next advancement, or null if max
function getNextJobs(jobId) {
    switch (jobId) {
        // Beginner → 1st job (handled separately via class picker)
        case 0: return "pick_class";

        // 1st → 2nd job subclass choices
        case 100: return [[110, "Fighter"], [120, "Page"], [130, "Spearman"]];
        case 200: return [[210, "F/P Wizard"], [220, "I/L Wizard"], [230, "Cleric"]];
        case 300: return [[310, "Hunter"], [320, "Crossbowman"]];
        case 400: return [[410, "Assassin"], [420, "Bandit"]];
        case 500: return [[510, "Brawler"], [520, "Gunslinger"]];

        // 2nd → 3rd (auto, one path)
        case 110: return [[111, "Crusader"]];
        case 120: return [[121, "White Knight"]];
        case 130: return [[131, "Dragon Knight"]];
        case 210: return [[211, "F/P Mage"]];
        case 220: return [[221, "I/L Mage"]];
        case 230: return [[231, "Priest"]];
        case 310: return [[311, "Ranger"]];
        case 320: return [[321, "Sniper"]];
        case 410: return [[411, "Hermit"]];
        case 420: return [[421, "Chief Bandit"]];
        case 510: return [[511, "Marauder"]];
        case 520: return [[521, "Outlaw"]];

        // 3rd → 4th (auto, one path)
        case 111: return [[112, "Hero"]];
        case 121: return [[122, "Paladin"]];
        case 131: return [[132, "Dark Knight"]];
        case 211: return [[212, "F/P Arch Mage"]];
        case 221: return [[222, "I/L Arch Mage"]];
        case 231: return [[232, "Bishop"]];
        case 311: return [[312, "Bowmaster"]];
        case 321: return [[322, "Marksman"]];
        case 411: return [[412, "Night Lord"]];
        case 421: return [[422, "Shadower"]];
        case 511: return [[512, "Buccaneer"]];
        case 521: return [[522, "Corsair"]];

        default: return null; // max job or unknown
    }
}

function start() {
    status = 0;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode != 1) {
        cm.dispose();
        return;
    }

    var jobId = cm.getJobId();
    var level = cm.getLevel();
    var tier = getJobTier(jobId);

    if (status == 0) {
        cm.sendSimple("Hey #b#h ##k, I'm the Job Master. What can I do for you?\r\n#b\r\n#L0#Advance my job\r\n#L1#Fix my AP (reset ability points)\r\n#L2#Nothing, thanks");
        status++;

    } else if (status == 1) {
        if (selection == 2) { cm.dispose(); return; }
        mode_selected = selection;

        if (mode_selected == 1) {
            // Fix AP
            cm.resetStats();
            cm.sendOk("Done! Your ability points have been redistributed.");
            cm.dispose();
            return;
        }

        // Job advancement path
        if (tier == 4) {
            cm.sendOk("You've already reached your 4th job — you're at the top!");
            cm.dispose();
            return;
        }

        var levelReq = getLevelReq(tier);
        if (level < levelReq) {
            cm.sendOk("You need to be at least level #r" + levelReq + "#k to advance. Keep training!");
            cm.dispose();
            return;
        }

        if (jobId == 0) {
            // Beginner picking a class
            cm.sendSimple("Choose your path:#b\r\n#L0#Warrior\r\n#L1#Magician\r\n#L2#Archer\r\n#L3#Rogue\r\n#L4#Pirate");
            status++;
        } else {
            next_jobs = getNextJobs(jobId);
            if (next_jobs == null) {
                cm.sendOk("Something went wrong. Please contact an admin.");
                cm.dispose();
                return;
            }
            if (next_jobs.length == 1) {
                // Only one path — confirm directly
                chosen_job = next_jobs[0][0];
                cm.sendYesNo("Ready to advance to #b" + next_jobs[0][1] + "#k?");
                status = 10; // jump to confirm state
            } else {
                var str = "Choose your advancement:#b";
                for (var i = 0; i < next_jobs.length; i++) {
                    str += "\r\n#L" + i + "#" + next_jobs[i][1] + "#l";
                }
                cm.sendSimple(str);
                status++;
            }
        }

    } else if (status == 2) {
        // Came from Beginner class picker or multi-choice subclass
        if (jobId == 0) {
            // Beginner class selection
            var classJobs = [100, 200, 300, 400, 500];
            chosen_job = classJobs[selection];
        } else {
            next_jobs = getNextJobs(jobId);
            chosen_job = next_jobs[selection][0];
        }
        cm.sendYesNo("Ready to advance? This can't be undone.");
        status = 10;

    } else if (status == 10) {
        // Confirm and execute
        cm.changeJobById(chosen_job);
        cm.sendOk("Congratulations on your advancement! Make us proud, #b#h ##k.");
        cm.dispose();
    }
}
