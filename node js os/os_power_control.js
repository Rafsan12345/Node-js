/*****************************************
 * NODE.JS SYSTEM POWER CONTROL
 * Key Press → Shutdown / Restart / Exit
 *****************************************/

const os = require("os");
const { exec } = require("child_process");
const readline = require("readline");

console.log("================================");
console.log(" NODE.JS SYSTEM POWER CONTROLLER ");
console.log("================================");
console.log("Press keys:");
console.log(" [S] → Shutdown");
console.log(" [R] → Restart");
console.log(" [C] → Cancel / Exit");
console.log("--------------------------------");

// Enable keypress
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

process.stdin.on("keypress", (str, key) => {

    if (key.ctrl && key.name === "c") {
        console.log("\nCTRL + C detected. Exiting...");
        process.exit();
    }

    switch (key.name.toLowerCase()) {

        case "s":
            console.log("⚠️ Shutdown command triggered...");
            shutdownSystem();
            break;

        case "r":
            console.log("🔄 Restart command triggered...");
            restartSystem();
            break;

        case "c":
            console.log("❌ Cancelled. Exiting program...");
            process.exit();
            break;
    }
});

// ===============================
// SYSTEM SHUTDOWN FUNCTION
// ===============================
function shutdownSystem() {
    let cmd = "";

    if (os.platform() === "win32") {
        cmd = "shutdown /s /t 5";
    } else {
        cmd = "shutdown -h now";
    }

    exec(cmd, (err) => {
        if (err) {
            console.log("Shutdown Error:", err.message);
        }
    });
}

// ===============================
// SYSTEM RESTART FUNCTION
// ===============================
function restartSystem() {
    let cmd = "";

    if (os.platform() === "win32") {
        cmd = "shutdown /r /t 5";
    } else {
        cmd = "reboot";
    }

    exec(cmd, (err) => {
        if (err) {
            console.log("Restart Error:", err.message);
        }
    });
}
