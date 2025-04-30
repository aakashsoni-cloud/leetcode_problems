/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    let n = s.length;
    let m = t.length;
    let hash = {};

    let l = 0;
    let r = 0;

    let count = 0;
    let minLength = Infinity;
    let sIndex = -1;

    for (let i = 0; i < 26; i++) {
        hash[String.fromCharCode(i)] = hash[String.fromCharCode(i)] || 0;
    }

    for (let i = 0; i < m; i++) {
        hash[t[i]] = (hash[t[i]] || 0) + 1
    }

    while (r < n) {
        if (hash[s[r]] && hash[s[r]] > 0) {
            count++;
        }


        hash[s[r]] = (hash[s[r]] || 0) - 1

        // Shrink
        while (count == m) {
            if (r - l + 1 < minLength) {
                minLength = r - l + 1;
                sIndex = l;
            }

            hash[s[l]]++;

            if (hash[s[l]] > 0) {
                count--;
            }
            l++;
        }
        r++;
    }

    return minLength == Infinity ? "" : s.substring(sIndex, sIndex + minLength)
};