const os = require("os");

// OS platform
console.log("Platform:", os.platform());

// OS architecture
console.log("Architecture:", os.arch());

// CPU information
console.log("CPU Info:", os.cpus()[0].model);

// Total memory
console.log("Total Memory (GB):", (os.totalmem() / 1024 / 1024 / 1024).toFixed(2));

// Free memory
console.log("Free Memory (GB):", (os.freemem() / 1024 / 1024 / 1024).toFixed(2));

// Hostname
console.log("Hostname:", os.hostname());

// Home directory
console.log("Home Directory:", os.homedir());

// Uptime
console.log("System Uptime (seconds):", os.uptime());

// OS type
console.log("OS Type:", os.type());
