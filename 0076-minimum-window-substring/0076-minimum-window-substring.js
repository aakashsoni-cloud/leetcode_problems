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

    // To Mark all alphabets as 0 
    for (let i = 0; i < 26; i++) {
        hash[String.fromCharCode(i)] = hash[String.fromCharCode(i)] || 0;
    }

    // To mark all alphabets in t as visited
    for (let i = 0; i < m; i++) {
        hash[t[i]] = (hash[t[i]] || 0) + 1
    }

    // To expand the window
    while (r < n) {
        // if the current one is greater than 0 means already visited hence increase count
        if (hash[s[r]] && hash[s[r]] > 0) {
            count++;
        }

        // And then mark as visted with means make it decrease the visited count
        hash[s[r]] = (hash[s[r]] || 0) - 1

        // Shrink the window
        while (count == m) {
            // If the window size is less the minLength then update and 
            // also mark the starting point as the start of min string with all
            // character from t
            if (r - l + 1 < minLength) {
                minLength = r - l + 1;
                sIndex = l;
            }

            // Make it increase the visited
            hash[s[l]]++;

            // it increase than zero means already character visited
            // Hence decrease the count;
            if (hash[s[l]] > 0) {
                count--;
            }

            l++;
        }
        // Move forward
        r++;
    }

    return minLength == Infinity ? "" : s.substring(sIndex, sIndex + minLength)
};