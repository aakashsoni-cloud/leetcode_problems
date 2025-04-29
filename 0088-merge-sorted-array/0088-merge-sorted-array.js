/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;

    let totalLength = m + n - 1;

    if (n == 0) {
        nums1 = nums1;
    } else {
        while (j >= 0) {
            if (nums1[i] >= nums2[j] && i >= 0) {
                nums1[totalLength] = nums1[i];
                i--;
                totalLength--;
            } else {
                nums1[totalLength] = nums2[j];
                j--;
                totalLength--;
            }
        }
    }

    return nums1;
};