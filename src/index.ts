import {isWordBanned, hideBannedWord, doesTextContainBannedWord, sanitizeText} from "./helpers/functions";


(isWordBanned("shit") ? console.log("This word is banned") : console.log("This word is not banned"));
// Output: This word is banned.
(isWordBanned("thing") ? console.log("This word is banned") : console.log("This word is not banned"));
// Output: This word is not banned.

console.log(hideBannedWord("shit"));
// Output: *****
console.log(hideBannedWord("shit", "@#!"));
// Output: @#!

(doesTextContainBannedWord("Leave this shit outta my face!") ? console.log("It does") : console.log("It does not"));
// Output: It does.
(doesTextContainBannedWord("Leave this thing outta my face!") ? console.log("It does") : console.log("It does not"));
// Output: It does not.

const vulgarSentence: string = sanitizeText("Leave this shit outta my fucking face!");
console.log(vulgarSentence);
// Output: Leave this ***** outta my ***** face! 

const customVulgarSentence: string = sanitizeText("Leave this shit outta my fucking face!", "bobba");
console.log(customVulgarSentence);
// Output: Leave this bobba outta my bobba face!
