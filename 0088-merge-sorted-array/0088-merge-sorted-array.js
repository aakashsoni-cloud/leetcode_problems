/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let first = m - 1;
    let second = n - 1;
    let total = m + n - 1;

    if (n == 0) {
        nums1 = nums1
    } else {
        while (second >= 0) {
            if (nums1[first] >= nums2[second] && first >= 0) {
                nums1[total] = nums1[first];
                first--;
                total--;
            } else {
                nums1[total] = nums2[second];
                second--;
                total--;
            }
        }
    }

    return nums1;
};