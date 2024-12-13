/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
function subArray(nums, goal) {
    let l = 0;
    let r = 0;
    let count = 0;
    let sum = 0;

    while (r < nums.length) {
        sum += nums[r];

        while (l <= r && sum > goal) {
            sum -= nums[l];
            l++;
        }

        count = count + (r - l + 1);
        r++;
    }
    return count;
}
function numSubarraysWithSum(nums, goal) {
    return subArray(nums, goal) - subArray(nums, goal - 1);
}
