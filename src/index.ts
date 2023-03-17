import { hasBannedWords, redactBannedWords } from "banned-words-spotter";

console.log(redactBannedWords("Leave this fuck outta my badwording face!"));
// Output: Leave this ***** outta my ***** face!

console.log(redactBannedWords("Leave this fuck outta my badwording face!", "[REDACTED]"));
// Output: Leave this [REDACTED] outta my [REDACTED] face!

console.log(hasBannedWords("jizz"));
// Output: true

console.log(hasBannedWords("Hello world!"));
// Output: false