/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    let i = 0;

    while (i < haystack.length) {
        if (haystack[i] == needle[0]) {
            const substring = haystack.substring(i, i + needle.length);
            if (substring == needle) {
                return i;
            }
        }
        i++;
    }
    return -1
};