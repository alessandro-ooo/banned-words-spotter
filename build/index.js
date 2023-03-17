"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var functions_1 = require("./functions");
console.log((0, functions_1.redactBannedWords)("Leave this fuck outta my badwording face! "));
// Output: Leave this ***** outta my ***** face!
console.log((0, functions_1.redactBannedWords)("Leave this fuck outta my badwording face!", "[REDACTED]"));
// Output: Leave this [REDACTED] outta my [REDACTED] face!
console.log((0, functions_1.hasBannedWords)("jizz"));
// Output: true
console.log((0, functions_1.hasBannedWords)("Hello wor ld!"));
// Output: false
