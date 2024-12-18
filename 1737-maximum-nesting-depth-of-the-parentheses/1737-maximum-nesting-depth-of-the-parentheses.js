/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
    let count = 0;
    let maxPar = 0;
    for (let char in s) {
        console.log(s[char])
        if (s[char] === "(") {
            count++;
        } else if (s[char] === ")") {
            count--;
        }

        maxPar = Math.max(maxPar, count)
    }

    return maxPar;
};