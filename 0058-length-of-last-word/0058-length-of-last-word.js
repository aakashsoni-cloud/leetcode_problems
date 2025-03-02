/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let count = 0;
    let step = false;
    for (let c of s) {
        if (c !== ' ') {
            if (!step) {
                step = true;
                count = 1;
            } else {
                count++
            }
        } else {
            step = false;
        }
    }

    return count;
};