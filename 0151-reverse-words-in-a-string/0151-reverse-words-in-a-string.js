/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    s = s.replace(/ +/g, " ").trim().split(" ");
    let i = 0, j = s.length - 1;
    while (i <= j) {
        let temp = s[i];
        s[i] = s[j];
        s[j] = temp;
        i++;
        j--;
    }

    return s.join(" ");
};