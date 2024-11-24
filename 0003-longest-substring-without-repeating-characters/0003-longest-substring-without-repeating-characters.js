/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    // sliding window and set
    /*
    let set = new Set()
    let left = 0;
    let maxSize = 0;

    for (let right = 0; right < s.length; right++) {
        while (set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }
        set.add(s[right]);
        maxSize = Math.max(maxSize, right - left + 1);
    }
    */

    // SLiding Window and Hashing

    let output = {};
    let left = 0;

    let maxSize = 0;

    for (let rigth = 0; rigth < s.length; rigth++) {
        output[s[rigth]] = (output[s[rigth]] || 0) + 1;

        while (output[s[rigth]] > 1) {
            output[s[left]] -= 1;
            left++;
        }

        maxSize = Math.max(maxSize, rigth - left + 1)
    }

    return maxSize;
};