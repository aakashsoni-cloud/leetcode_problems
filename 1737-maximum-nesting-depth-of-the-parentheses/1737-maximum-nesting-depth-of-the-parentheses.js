/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
    let maxPar = 0;
    let stack = [];
    if (s.length < 2) return 0;
    for (let char in s) {
        if (s[char] === "(") {
            stack.push(s[char]);
        } else if (s[char] === ")") {
            stack.pop();
        }
        maxPar = Math.max(maxPar, stack.length)
    }
    return maxPar;
};