/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {

    // OPTIMAL O(n)
    if (nums.length === 0) return 0;

    let numSet = new Set(nums);
    let longest = 0;

    console.log(numSet)

    for (const num of nums) {
        if (numSet.has(num + 1)) continue;

        console.log("123");

        let counter = 1;
        let currNum = num;

        while (numSet.has(--currNum)) {
            counter++;
        }
        longest = Math.max(longest, counter)
    }

    return longest;
    

    /* 
    BETTER O(nlogn + n)
    let longest = 1;
    let counter = 0;
    let lastSmaller = Number.MIN_VALUE;

    nums.sort((a,b) => a-b);

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] - 1 == lastSmaller) {
            counter += 1;
            lastSmaller = nums[i];
        }
        else if (lastSmaller != nums[i]) {
            counter = 1;
            lastSmaller = nums[i];
        }

        longest = Math.max(longest, counter);
    }
    return longest;

    */
};