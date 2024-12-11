/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    s = s.replace(/ +/g, " ").trim().split(" ");
    let i = 0, j = s.length - 1;
    while (i <= j) {
        [s[i], s[j]] = [s[j], s[i]]
        i++;
        j--;
    }

    return s.join(" ");
};