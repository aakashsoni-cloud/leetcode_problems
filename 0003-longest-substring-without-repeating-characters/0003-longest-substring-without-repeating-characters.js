/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let letters = new Set;
    let n = s.length - 1;
    let l = 0;
    let r = 0;
    let maxLength = 0;

    while (r <= n) {

        while (letters.has(s[r])) {
            letters.delete(s[l])
            l++;
        }

        letters.add(s[r]);

        maxLength = Math.max(maxLength, r - l + 1);
        r++;
    }

    return maxLength
};