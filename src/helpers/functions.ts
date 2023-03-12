import bannedWords from "./banned-words.json";

/**
 * @description This function is useful when you need to **
 * @param word word to be checked if it is banned
 * @param censor (optional) string to replace the banned word with. Default is "*****"
 * @returns censor if word is banned, otherwise returns word.
 * 
 * @example console.log(hideBannedWord("badword"));
 * Output: *****
 * console.log(hideBannedWord("badword", "@#!"));
 * Output: @#!
 * Output: This word is banned.
 */
const hideBannedWord = (word: string, censor: string = "*****"): string => {

    if(isWordBanned(word)) {
        return censor;
    }

    return word;
}

/**
 * @description This function is useful when you need to sanitize a very long text.
 * @param text text to be sanitized
 * @param censor (optional) string to replace the banned word with. Default is "*****"
 * @returns text with banned words replaced with censor.
 * 
 * @example const vulgarSentence: string = sanitizeText("Leave this badword outta my badwording face!");
 * Output: Leave this ***** outta my ***** face!
 * const customVulgarSentence: string = sanitizeText("Leave this badword outta my badwording face!", "bobba");
 * Output: Leave this bobba outta my bobba face!
 *
 */
const sanitizeText = (text: string, censor: string = "*****"): string => {

    const words: string[] = text.split(" ");

    words.forEach((word, i) => {
        if (isWordBanned(word)) {
            words[i] = censor;
        }
    });

    return words.join(" ");

}

/**
 * @description This function is useful when you need to check if a long text contains a banned word but you don't want to edit it.
 * @param text text to be checked
 * @returns array of indexes of banned words in the text.
 * 
 * @example (doesTextContainBannedWord("Leave this badword outta my face!") ? console.log("It does") : console.log("It does not"));
 * Output: It does.
 * (doesTextContainBannedWord("Leave this thing outta my face!") ? console.log("It does") : console.log("It does not"));
 * Output: It does not.
 * 
 */
const doesTextContainBannedWord = (text: string): number[] => {

    const words: string[] = text.split(" ");
    const iBannedWords: number[] = [];

    words.forEach((word, i) => {
        if (isWordBanned(word)) {
            iBannedWords.push(i);
        }
    });

    return iBannedWords;
}

/**
 * @description This function is useful when you need to check if a word is banned.
 * @param word word to be checked if it is banned
 * @returns true if word is banned, otherwise returns false.
 * 
 * @example (isWordBanned("badword") ? console.log("This word is banned") : console.log("This word is not banned"));
 * Output: This word is banned.
 */
const isWordBanned = (word: string): boolean => {
    
    return bannedWords.words.includes(word);
}

export {isWordBanned, hideBannedWord, doesTextContainBannedWord, sanitizeText};
