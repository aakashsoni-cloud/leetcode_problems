/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    let split = haystack.split(needle);

    console.log(split)

    if (split.length == 1) {
        return -1;
    }

    return split[0].length;
};