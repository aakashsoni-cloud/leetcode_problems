/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    // sliding window and set
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
    
    return maxSize;
};