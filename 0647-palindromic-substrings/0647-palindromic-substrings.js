/**
 * @param {string} s
 * @return {number}
 */

function isPalindrom(s, l, r) {
    let count = 0;

    while ((l >= 0 && r <= s.length) && s[l] === s[r]) {
        count++;
        l--;
        r++;
    }
    return count;
}

var countSubstrings = function (s) {

    s = s.split("");
    let n = s.length, ans = 0;

    for (let i = 0; i < n; i++) {
        let even = isPalindrom(s, i, i + 1);
        let odd = isPalindrom(s, i, i);

        ans += even + odd;
    }

    return ans;


};