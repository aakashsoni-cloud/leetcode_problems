/**
 * @param {string} s
 * @return {string}
 */

var valid = function (s, l, r) {

    while (l >= 0 && r < s.length && s[l] === s[r]) {
        r++;
        l--;
    }
    return s.slice(l + 1, r);
}
var longestPalindrome = function (s) {
    let longest = "";
    s = s.split("");

    for (let i = 0; i < s.length; i++) {
        let str1 = valid(s, i, i);
        let str2 = valid(s, i, i + 1);

        let longestPalindrom = str1.length > str2.length ? str1 : str2;

        if(longestPalindrom.length > longest.length) {
            longest = longestPalindrom;
        }
    }

    return longest.join("");
};