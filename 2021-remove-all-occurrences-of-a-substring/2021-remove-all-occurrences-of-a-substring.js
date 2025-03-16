/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function (s, part) {
    let stack = [];
    let targetLength = part.length;
    let targetEndChar = part[part.length - 1];

    for (let char of s) {
        stack.push(char);

        if (char == targetEndChar && stack.length >= targetLength) {
            if (stack.slice(-targetLength).join('') == part) {
                stack.length -= targetLength
            }
        }
    }
    return stack.join('')
};