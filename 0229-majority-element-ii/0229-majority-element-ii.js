/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
    let n = nums.length;

    let count1 = 0;
    let count2 = 0;
    let major1 = 0;
    let major2 = 0;

    for (const num of nums) {
        if (num === major1) {
            count1++;
        } else if (num === major2) {
            count2++;
        } else if (count1 === 0) {
            count1++;
            major1 = num;
        } else if (count2 === 0) {
            count2++;
            major2 = num;
        } else {
            count1--;
            count2--;
        }
    }

    count1 = 0;
    count2 = 0;

    for (let i = 0; i < n; i++) {
        if (nums[i] == major1) {
            count1++;
        } else if (nums[i] == major2) {
            count2++;
        }
    }

    let res = [];

    if (count1 > Math.floor(n / 3)) {
        res.push(major1);
    }

    if (count2 > Math.floor(n / 3)) {
        res.push(major2);
    }

    return res;
};