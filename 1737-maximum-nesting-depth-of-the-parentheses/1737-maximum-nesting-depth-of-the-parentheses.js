/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
    let count = 0;
    let maxPar = 0;
    let stack = [];
    for (let char in s) {
        if (s[char] === "(") {
            stack.push(s[char]);
        } else if (s[char] === ")") {
            stack.pop();
        }
        maxPar = Math.max(maxPar, stack.length)
    }

    console.log(stack);

    return maxPar;
};