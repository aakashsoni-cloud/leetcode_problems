/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function (s, k) {
    let maxLength = 0;
    const n = s.length;

    for (let targetUnique = 1; targetUnique <= 26; targetUnique++) {
        let freq = {};
        let l = 0, r = 0;
        let uniqueCount = 0;
        let countAtLeastK = 0;

        while (r < n) {
            // Expand right
            freq[s[r]] = (freq[s[r]] || 0) + 1;
            if (freq[s[r]] === 1) uniqueCount++;  // new unique char
            if (freq[s[r]] === k) countAtLeastK++;  // reached k frequency

            // Shrink if too many unique chars
            while (uniqueCount > targetUnique) {
                freq[s[l]]--;
                if (freq[s[l]] === k - 1) countAtLeastK--;  // dropped below k
                if (freq[s[l]] === 0) uniqueCount--;  // removed char
                l++;
            }

            // Check if current window is valid
            if (uniqueCount === countAtLeastK && uniqueCount === targetUnique) {
                maxLength = Math.max(maxLength, r - l + 1);
            }

            r++;
        }
    }

    return maxLength;
};