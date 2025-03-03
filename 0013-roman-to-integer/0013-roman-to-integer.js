/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let romanNumber = { 'I': 1, "V": 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 };

    let sum = 0;

    for (let i = 0; i < s.length; i++) {

        if ((s[i + 1] == 'V' || s[i + 1] == 'X') && s[i] == 'I') {
            sum += (romanNumber[s[i + 1]] - romanNumber[s[i]]);
            i += 1
        } else if ((s[i + 1] == 'L' || s[i + 1] == 'C') && s[i] == 'X') {
            sum += (romanNumber[s[i + 1]] - romanNumber[s[i]]);
            i += 1
        } else if ((s[i + 1] == 'D' || s[i + 1] == 'M') && s[i] == 'C') {
            sum += (romanNumber[s[i + 1]] - romanNumber[s[i]]);
            i += 1;
        } else if (s[i] == 'I' || s[i] == 'V' || s[i] == 'X' || s[i] == 'L' || s[i] == 'C' || s[i] == 'D' || s[i] == 'M') {
            sum += romanNumber[s[i]];
        }
        console.log(sum)

    }

    return sum;

};