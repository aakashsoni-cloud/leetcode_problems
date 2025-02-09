/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (num) {
    let n = num.length;
    let map = {};

    for (let i = 0; i <= n - 1; i++) {
        map[num[i]] = (map[num[i]] || 0) + 1;
    }

    console.log(map)

    for (let key of Object.keys(map)) {
        if (map[key] == 1) {
            return parseInt(key);
        }
    }
};