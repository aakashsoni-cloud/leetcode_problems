/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {

    let n = strs.length;
    let prefix = strs[0];
    let preflen = prefix.length;

    for (let i = 1; i < n; i++) {
        let word = strs[i];

        while (prefix !== word.substring(0, preflen)) {
            preflen--;

            if (preflen == 0) {
                prefix = "";
            }
            prefix = prefix.substring(0, preflen);
        }
    }
    return prefix
};