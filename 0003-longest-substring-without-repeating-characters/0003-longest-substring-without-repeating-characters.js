/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let hash = {}
    let n = s.length - 1;
    let maxLength = 0;

    let l = 0;
    let r = 0;

    while (r <= n) {
        hash[s[r]] = (hash[s[r]] + 1) || 1;

        while (hash[s[r]] > 1) {
            hash[s[l]]--;
            l++;
        }

        maxLength = Math.max(maxLength, r - l + 1);
        r++;
    }

    return maxLength;
};