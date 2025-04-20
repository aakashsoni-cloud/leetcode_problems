/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = [];
    for (let c of s) {
        if (c === '(' || c === '{' || c === '[') {
            stack.push(c);
        } else {
            var top = stack[stack.length - 1];
            if (c === ")" && top === "(" || c === "]" && top === "[" || c === "}" && top === "{")
                stack.pop();
            else
                return false;
        }
    }
    return stack.length === 0;
};