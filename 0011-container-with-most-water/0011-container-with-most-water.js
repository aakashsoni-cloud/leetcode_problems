/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;
    while (left < right) {
        maxArea = Math.max(maxArea, (right - left) * Math.min(height[right], height[left]));
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maxArea

};