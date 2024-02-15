const os = require('node:os');
console.log(os.freemem(), os.arch(), os.availableParallelism(),os.type(),
os.uptime(),

os.version());