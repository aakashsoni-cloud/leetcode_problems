/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let maxLength = 0;
    let set = new Set();
    let n = s.length;

    let l = 0;
    let r = 0;
    while (r < n) {
        while (set.has(s[r])) {
            set.delete(s[l])
            l++;
        }
        set.add(s[r]);

        maxLength = Math.max(maxLength, r - l + 1)
        r++;
    }

    return maxLength;
};