import { hasBannedWords, redactBannedWords } from "banned-words-spotter";
// import { hasBannedWords, redactBannedWords } from "./helpers/functions";

// console.log(redactBannedWords("Leave this f!uck outta my fucking face! "));
// Output: Leave this ***** outta my ***** face!

console.log(redactBannedWords("Leave this fuuuuck outta my shit face!", "[REDACTED]"));
// Output: Leave this [REDACTED] outta my [REDACTED] face!

// console.log(hasBannedWords("fuuuuck")); 
// console.log(hasBannedWords("fu ck")); 
// console.log(hasBannedWords("fuck")); 

console.log(hasBannedWords("This fuuuuck")) 
// console.log(hasBannedWords("f uck"));   
// console.log(hasBannedWords("fuc k")); 
// console.log(hasBannedWords("f!uck")); 

// console.log(hasBannedWords("fuuuuuuck")); 
// Output: true

// console.log(hasBannedWords("Hello world!"));
// Output: false