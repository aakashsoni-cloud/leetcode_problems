/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    let hashMap = {};

    let n = s.length;

    for (let i = 0; i < n; i++) {
        if (hashMap[s[i]]) {
            if (hashMap[s[i]] !== t[i]) {
                return false;
                break;
            }
        } else if (Object.values(hashMap).includes(t[i])) {
            return false;
            break;
        }
        hashMap[s[i]] = t[i];


    }
    return true;

};