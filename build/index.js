"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var banned_words_spotter_1 = require("banned-words-spotter");
console.log((0, banned_words_spotter_1.redactBannedWords)("Leave this badword outta my badwording face!"));
// Output: Leave this ***** outta my ***** face!
console.log((0, banned_words_spotter_1.redactBannedWords)("Leave this badword outta my badwording face!", "[REDACTED]"));
// Output: Leave this [REDACTED] outta my [REDACTED] face!
console.log((0, banned_words_spotter_1.hasBannedWords)("Badword"));
// Output: true
console.log((0, banned_words_spotter_1.hasBannedWords)("Hello world!"));
// Output: false
