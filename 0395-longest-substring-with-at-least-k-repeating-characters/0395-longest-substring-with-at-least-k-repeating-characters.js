/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function (s, k) {
    let maxLength = 0;
    let n = s.length - 1;

    for (let target = 1; target <= 26; target++) {
        let hash = {};
        let l = 0;
        let r = 0;
        let countUnique = 0;
        let countFreq = 0;

        while (r <= n) {
            hash[s[r]] = (hash[s[r]] || 0) + 1;
            if (hash[s[r]] == k) countFreq++;
            if (hash[s[r]] == 1) countUnique++


            while (countUnique > target) {
                hash[s[l]]--;
                if (hash[s[l]] == k - 1) countFreq--;
                if (hash[s[l]] == 0) countUnique--
                l++
            }

            if (countUnique == target && countUnique == countFreq) {
                maxLength = Math.max(maxLength, r - l + 1)
            }
            r++
        }
    }

    return maxLength;
};