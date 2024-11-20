/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    if (nums.length === 0) return 0;

    let numSet = new Set(nums);
    let longest = 0;

    for (const num of nums) {
        if (numSet.has(num + 1)) continue;

        let counter = 1;
        let currNum = num;

        while (numSet.has(--currNum)) {
            counter++;
        }
        longest = Math.max(longest, counter)
    }


    return longest;
};