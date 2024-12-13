/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let hashMap = {};
    let l = 0;
    let r = 0;

    let maxLength = 0;

    if (s.length == 1) return 1;
    while (r < s.length) {
        let rightChar = s[r];
        hashMap[rightChar] = hashMap[rightChar] + 1 || 1;

        while (hashMap[rightChar] > 1) {
            let leftChar = s[l];
            hashMap[leftChar]--;
            l++;
        }
        maxLength = Math.max(maxLength, r - l + 1);

        r++;
    }

    return maxLength;
};