/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let newStr = s.split(" ");
    let maxLength = Number.MIN_VALUE;
    console.log(newStr);

    for (let i = newStr.length-1; i >= 0; i--) {
        if (newStr[i] !== "") {
            maxLength = Math.max(maxLength, newStr[i].length);
            return maxLength
            console.log(maxLength)
        }
    }

};