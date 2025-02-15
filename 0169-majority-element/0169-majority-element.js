/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    // nums.sort((a, b) => a - b);// O(nlogn)
    // let n = nums.length;
    // let l = 0;
    // let r = 0;

    // let count = 0;

    // while (r <= n) { // O(N)
    //     let item = nums[l];
    //     if (item == nums[r]) {
    //         count++;
    //         r++;
    //     }

    //     if (item !== nums[r]) {
    //         l = r;
    //         count = 0;
    //     }

    //     if (count > Math.floor(n / 2)) {
    //         return item;
    //     }

    // }


    // Hashing

    // let map = {};
    // let n = nums.length;

    // for (let i = 0; i < n; i++) {
    //     map[nums[i]] = (map[nums[i]] || 0) + 1
    // }

    // for (let key of Object.keys(map)) {
    //     if (map[key] > Math.floor(n / 2)) {
    //         return parseInt(key)
    //     }
    // }

    // Moore's Vooting Alogo

    let n = nums.length;
    let count = 0;
    let elem;

    for (let i = 0; i < n; i++) {
        if (count == 0) {
            count = 1;
            elem = nums[i];
        } else if (elem == nums[i]) {
            count++;
        } else {
            count--;
        }
    }

    let count1 = 0;
    for (let i = 0; i < n; i++) {
        if (elem == nums[i]) count1++;
    }

    if (count1 > Math.floor(n / 2)) {
        return elem;
    }
};