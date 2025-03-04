/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {

    let n = height.length;
    let l = 0;
    let r = n - 1;
    let maxWater = 0;

    while (l < r) {
        maxWater = Math.max(maxWater, (r - l) * Math.min(height[l], height[r]));
        if (height[l] < height[r]) {
            l++
        } else {
            r--
        }
    }

    return maxWater;
};