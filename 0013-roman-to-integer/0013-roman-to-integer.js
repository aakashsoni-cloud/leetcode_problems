/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let romanNumber = { 'I': 1, "V": 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 };

    let sum = 0;

    for (let i = 0; i < s.length; i++) {
        if (romanNumber[s[i]] < romanNumber[s[i + 1]]) {
            sum -= romanNumber[s[i]]
        } else {
            sum += romanNumber[s[i]];
        }
    }

    return sum;

};