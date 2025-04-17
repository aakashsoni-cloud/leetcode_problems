/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    // Brute Froce Merge Sort and then find the median
    let n1 = nums1.length;
    let n2 = nums2.length;

    let nums3 = [];
    let i = 0, j = 0;

    while (i < n1 && j < n2) {
        if (nums1[i] < nums2[j]) {
            nums3.push(nums1[i++])
        } else {
            nums3.push(nums2[j++])
        }
    }


    while (i < n1) nums3.push(nums1[i++])
    while (j < n2) nums3.push(nums2[j++])


    let n = n1 + n2;

    if (n % 2 !== 0) {
        return nums3[Math.floor(n / 2)]
    }

    const median = (nums3[n / 2] + nums3[(n / 2) - 1]) / 2.0
    return median;
};