"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.redactBannedWords = exports.hasBannedWords = void 0;
var banned_words_json_1 = __importDefault(require("./helpers/banned-words.json"));
/**
 * @description hasBannedWords checks if a word or a long text contains banned words.
 * @param text text to be checked if it contains banned words
 * @returns boolean
 *
 * @example hasBannedWords("Badword");
 * Output: true
 */
var hasBannedWords = function (text) {
    if (text.length == 1) {
        if (banned_words_json_1.default.words.includes(text)) {
            return true;
        }
    }
    if (text.length > 1) {
        var words = text.split(" ");
        for (var i = 0; i < words.length; i++) {
            if (banned_words_json_1.default.words.includes(words[i])) {
                return true;
            }
        }
    }
    return false;
};
exports.hasBannedWords = hasBannedWords;
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
var redactBannedWords = function (text, censor) {
    if (censor === void 0) { censor = "******"; }
    if (text.length == 1) {
        if (banned_words_json_1.default.words.includes(text)) {
            return censor;
        }
    }
    if (text.length > 1) {
        var words_1 = text.split(" ");
        words_1.forEach(function (word, i) {
            if (hasBannedWords(word)) {
                words_1[i] = censor;
            }
        });
        return words_1.join(" ");
    }
    return text;
};
exports.redactBannedWords = redactBannedWords;
