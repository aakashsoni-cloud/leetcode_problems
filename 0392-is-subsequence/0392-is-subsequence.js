/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    if (s.length > t.length) return false;

    let index = 0;

    for(let i=0;i<t.length;i++) {
        if(s[index] === t[i]) {
            index++;
        }
    }

return index==s.length
};