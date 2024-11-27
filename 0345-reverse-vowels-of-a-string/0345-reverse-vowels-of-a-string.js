/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {

    const vowelChar = "aeiouAEIOU";
    s = s.split("")
    let l = 0;
    let r = s.length - 1;

    while (l <= r) {
        if (vowelChar.includes(s[l]) && vowelChar.includes(s[r])) {
            let temp = s[r];
            s[r] = s[l];
            s[l] = temp;
            l++;
            r--;
        } else if (vowelChar.includes(s[l])) {
            r--;
        } else {
            l++;
        }
    }

    return s.join("");
};