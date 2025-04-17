/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    let n = nums.length;

    let res = [];

    nums.sort((a, b) => a - b)

    for (let i = 0; i < n; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) continue;

        for (let j = i + 1; j < n; j++) {

            if (j > i + 1 && nums[j] == nums[j - 1]) continue;

            let l = j + 1;
            let r = n - 1;

            while (l < r) {
                let sum = nums[i] + nums[j] + nums[l] + nums[r];

                if (sum == target) {
                    res.push([nums[i], nums[j], nums[l], nums[r]])
                    l++;
                    r--;

                    while (l > 0 && nums[l] == nums[l - 1]) l++;
                    while (r > 0 && nums[r] == nums[r + 1]) r--;
                } else if (sum < target) {
                    l++;
                } else {
                    r--;
                }
            }
        }
    }

    return res;

};