/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let maxLength = 0;
    let map = {};
    let n = s.length;

    let l = 0;
    let r = 0;
    while (r < n) {
        map[s[r]] = (map[s[r]] + 1) || 1;

        while (map[s[r]] > 1) {
            map[s[l]]--;
            l++;
        }

        maxLength = Math.max(maxLength, r - l + 1)
        r++;
    }

    return maxLength;
};