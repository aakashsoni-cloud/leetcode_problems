/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    let n = nums.length;
    let seen = new Set(nums);
    let maxSeq = 0

    for (const num of seen) {
        if (!seen.has(num - 1)) {
            let count = 1;
            let x = num;

            while (seen.has(x + 1)) {
                x++;
                count++;
            }

            maxSeq = Math.max(maxSeq, count);
        }

    }

    return maxSeq;
};