/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function (s, part) {
    let stack = [];
    let partLength = part.length;
    let partLastEle = part[partLength - 1];

    for (let char of s) {
        stack.push(char);

        if (char == partLastEle && stack.length >= partLength) {
            if (stack.slice(-partLength).join('') == part) {
                stack.length -= partLength;
            }
        }
    }

    return stack.join('')
};