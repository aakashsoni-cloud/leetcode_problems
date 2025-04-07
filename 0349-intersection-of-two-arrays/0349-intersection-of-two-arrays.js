/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (arr1, arr2) {
    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);

    let i = 0, j = 0;
    let res = [];

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            i++;
        } else if (arr1[i] > arr2[j]) {
            j++;
        } else {
            if (res.length === 0 || res[res.length - 1] !== arr1[i]) {
                res.push(arr1[i]);
            }
            i++;
            j++;
        }
    }

    return res;
};