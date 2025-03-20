/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let letters = {};
    let n = s.length - 1;

    let l = 0;
    let r = 0;

    let maxLength = 0;

    while (r <= n) {
        letters[s[r]] = (letters[s[r]] + 1) || 1;

        while (letters[s[r]] > 1) {
            letters[s[l]]--;
            l++;
        }

        maxLength = Math.max(maxLength, r - l + 1);
        r++;
    }

    return maxLength
};