/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    // let count = 0;
    // let step = false;
    // for (let c of s) {
    //     if (c !== ' ') {
    //         if (!step) {
    //             step = true;
    //             count = 1;
    //         } else {
    //             count++
    //         }
    //     } else {
    //         step = false;
    //     }
    // }

    // return count;

    let end = s.length - 1;

    while (end >= 0 && s[end] == ' ') {
        end--;
    }

    let start = end;
    while (start >= 0 && s[start] !== ' ') {
        start--;
    }
    return end - start
};