/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    // let map = new Map(Array.from({ length: 256 }, (_, i) => [String.fromCharCode(97 + i), 0]));

    let map = {};

    let n = s.length;
    let m = t.length;

    if (n < m) return "";

    for (let i = 0; i < 256; i++) {
        map[String.fromCharCode(i)] = (map[String.fromCharCode(i)] || 0);
    }

    let l = 0;
    let r = 0;

    let count = 0;
    let minLength = Number.MAX_SAFE_INTEGER;
    let sIndex = -1;

    for (let i = 0; i < m; i++) { // o(m)
        map[t[i]] = (map[t[i]] || 0) + 1
    }

    while (r < n) { // O(n)
        if (map[s[r]] && map[s[r]] > 0) count++;
        map[s[r]] = (map[s[r]] || 0) - 1;

        while (count == m) {
            if (r - l + 1 < minLength) {
                minLength = r - l + 1;
                sIndex = l;
            }

            map[s[l]]++;
            if (map[s[l]] > 0) {
                count--;
            }
            l++;
        }
        r++;
    }

    console.log(sIndex, minLength)

    return sIndex == -1 ? "" : s.substring(sIndex, sIndex + minLength)
};