const SegfaultHandler = require("segfault-handler");
SegfaultHandler.registerHandler("crash.log");
const uws = require('uWebSockets.js');

console.log("hello");