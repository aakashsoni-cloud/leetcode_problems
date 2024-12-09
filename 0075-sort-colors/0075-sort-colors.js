/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let i = 1, n = nums.length
    // nums = nums.sort((a, b) => a - b)

    let colors = { 0: 0, 1: 0, 2: 0 };

    for (let i = 0; i < n; i++) {
        colors[nums[i]]++;
    }

    console.log(colors)

    let ind = 0;
    for (let color = 0; color < 3; color++) {
        let freq = colors[color];
        for (let k = 0; k < freq; k++) {
            nums[ind] = color;
            ind++;
        }
    }

};