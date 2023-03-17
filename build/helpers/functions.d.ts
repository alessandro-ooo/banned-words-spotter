/**
 * @description hasBannedWords checks if a word or a long text contains banned words.
 * @param text text to be checked if it contains banned words
 * @returns boolean
 *
 * @example hasBannedWords("Badword");
 * Output: true
 */
declare const hasBannedWords: (text: string) => boolean;
/**
 * @description redactBannedWords redacts banned words in a text and/or long text.
 * @param text text to be redacted
 * @param censor (optional) string to replace the banned word with. Default is "*****"
 * @returns text with banned words replaced with censor.
 *
 * @example redactBannedWords("Leave this badword outta my badwording face!");
 * Output: Leave this ***** outta my ***** face!
 *
 * @example redactBannedWords("Leave this badword outta my badwording face!", "[REDACTED]");
 * Output: Leave this [REDACTED] outta my [REDACTED] face!
 *
 */
declare const redactBannedWords: (text: string, censor?: string) => string;
export { hasBannedWords, redactBannedWords };
