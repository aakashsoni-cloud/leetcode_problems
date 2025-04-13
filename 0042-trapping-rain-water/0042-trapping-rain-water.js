/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let n = height.length;
    let maxLeft = 0, maxRight = 0, res = 0;
    let left = 0;
    let right = n - 1;

    while (left < right) {
        maxLeft = Math.max(maxLeft, height[left]);
        maxRight = Math.max(maxRight, height[right]);

        if (height[left] < height[right]) {
            res += maxLeft - height[left];
            left++
        } else {
            res += maxRight - height[right];
            right--;
        }
    }
    return res;
};