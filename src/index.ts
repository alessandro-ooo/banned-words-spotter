import {hasBannedWords, redactBannedWords} from "./helpers/functions";


console.log(redactBannedWords("Leave this badword outta my badwording face!"));
// Output: Leave this ***** outta my ***** face!

console.log(redactBannedWords("Leave this badword outta my badwording face!", "[REDACTED]"));
// Output: Leave this [REDACTED] outta my [REDACTED] face!

console.log(hasBannedWords("Badword"));
// Output: true

console.log(hasBannedWords("Hello world!"));
// Output: false