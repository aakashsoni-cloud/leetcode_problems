/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (arr1, arr2) {
    let mp = {};

    for (let num of arr1) {
        mp[num] = (mp[num] || 0) + 1;
    }

    let res = [];

    for (let num of arr2) {
        if (mp[num]) {
            res.push(num);
            delete mp[num]
        }
    }
    return res;
};