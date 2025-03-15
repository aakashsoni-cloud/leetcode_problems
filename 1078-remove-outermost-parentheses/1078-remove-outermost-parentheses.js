/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
    let n = s.length - 1;
    let ans = "";
    let count = 0;
    for (let i = 0; i < n; i++) {
        if (s[i] === '(') {
            if (count !== 0) {
                ans += s[i];
            }
            count++;
        } else {
            if (count > 1) {
                ans += s[i];
            }
            count--;
        }
    }
    return ans;
};