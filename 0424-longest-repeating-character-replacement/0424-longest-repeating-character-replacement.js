/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
    let char = {}
    let l = 0;
    let maxLength = 0;
    let maxFreq = 0;

    for (let r = 0; r < s.length; r++) {
        char[s[r]] = (char[s[r]] || 0) + 1;

        maxFreq = Math.max(maxFreq, char[s[r]])

        if (r - l + 1 - maxFreq > k) {
            char[s[l]] -= 1;
            l++;
        }
        maxLength = Math.max(maxLength, r - l + 1)
    }
    return maxLength
};