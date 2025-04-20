/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let hashMap = {};

    let n = s.length - 1;
    let l = 0;
    let r = 0;
    let maxLength = 0;

    while (r <= n) {
        if (!hashMap[s[r]]) {
            hashMap[s[r]] = 1
        } else {
            hashMap[s[r]]++
        }

        while (hashMap[s[r]] > 1) {
            hashMap[s[l]]--;
            l++;
        }

        maxLength = Math.max(maxLength, r - l + 1)
        r++;
    }

    return maxLength;
};