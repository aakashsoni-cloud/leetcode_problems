/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
    let firstRow = "qwertyuiop";
    let secondRow = "asdfghjkl";
    let thirdRow = "zxcvbnm";
    let res = [];

    for (const word of words) {
        if (canBeType(word, firstRow) || canBeType(word, secondRow) || canBeType(word, thirdRow)) {
            res.push(word)
        }
    }
    return res;

    function canBeType(word, row) {
        for (const char of word) {
            if (!row.includes(char.toLowerCase())) {
                return false;
            }
        }
        return true;
    }
};
