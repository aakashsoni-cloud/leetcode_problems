/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let hash = {};
    let n = s.length - 1;
    let l = 0;
    let r = 0;

    let maxLen = 0;

    while (r <= n) {
        hash[s[r]] = (hash[s[r]] + 1) || 0;

        while (hash[s[r]] > 0) {
            hash[s[l]]--;
            l++
        }

        maxLen = Math.max(maxLen, r - l + 1);
        r++;
    }
    return maxLen
};