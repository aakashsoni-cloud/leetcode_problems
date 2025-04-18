/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
    return arr.reduce((acc, curr, index) => {
        acc[index] = fn(curr, index)
        return acc;
    }, [])
};