/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    if (nums.length === 0) return 0;

    nums.sort((a, b) => a - b) // nlogn

    let consecutive = 1;
    let maxCon = 1;

    for (let end = 1; end < nums.length; end++) {
        console.log(nums[end], nums[end - 1]);
        if ((nums[end] - nums[end - 1]) == 1) {
            consecutive++;
            maxCon = Math.max(maxCon, consecutive);
        } else if (nums[end] === nums[end - 1]) {
            continue;
        } else {
            consecutive = 1;
        }
    }

    // n

    // TC : O(nlogn)

    return maxCon;
};