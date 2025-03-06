/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    // let n = nums.length;
    // let res = [];
    // let result = new Set()

    // for (let i = 0; i < n; i++) {
    //     let seen = new Set();
    //     for (let j = i + 1; j < n; j++) {
    //         let target = -(nums[i] + nums[j]);

    //         if (!hashSet.has(target)) {
    //             seen.add(nums[j]);
    //         } else {
    //             let temp = [nums[i], nums[j], a];
    //             temp.sort((a, b) => a - b)
    //             result.add(JSON.stringify(temp))
    //         }
    //     }
    // }
    // return [...result].map(JSON.parse);
    let n = nums.length;
    let res = [];
    nums.sort((a, b) => a - b)

    for (let i = 0; i < n; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) continue; // conitnue of already visted

        let l = i + 1, r = n - 1;

        while (l < r) {
            let sum = nums[i] + nums[l] + nums[r];

            if (sum == 0) {
                res.push([nums[i], nums[l], nums[r]])
                l++;
                r--;
                while (l < r && nums[l] == nums[l - 1]) l++; // move forward if have same on previous position
                while (l < r && nums[r] == nums[r + 1]) r--; // move backward if have same on previous position

            } else if (sum < 0) {
                l++; // Increase to rigth if sum is less than 0 to make it 0
            } else {
                r--; // Decrease to left if sum is more than 0 to make it 0
            }
        }
    }

    return res;
};