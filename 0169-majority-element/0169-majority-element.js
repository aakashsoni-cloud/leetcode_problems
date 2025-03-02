/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (arr) {
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

    // let n = nums.length;
    // let count = 0;
    // let elem;

    // for (let i = 0; i < n; i++) {
    //     if (count == 0) {
    //         count = 1;
    //         elem = nums[i];
    //     } else if (elem == nums[i]) {
    //         count++;
    //     } else {
    //         count--;
    //     }
    // }

    // let count1 = 0;
    // for (let i = 0; i < n; i++) {
    //     if (elem == nums[i]) count1++;
    //     if (count1 > Math.floor(n / 2)) {
    //         return elem;
    //     }
    // }

    // let n = arr.length;
    // let el = -1;
    // for (let i = 0; i < n; i++) {
    //     let count = 1;
    //     for (let j = i+1; j < n; j++) {
    //         // console.log(arr[i], arr[j])
    //         if (arr[i] == arr[j]) {
    //             count++;
    //         }
    //     }
    //     // console.log(count);

    //     if(count > Math.floor(n/2)) {
    //         return arr[i];
    //     }
    // }

    // hashing 
    let n = arr.length;
    let hash = {};

    for (let i = 0; i < n; i++) {
        hash[arr[i]] = (hash[arr[i]] || 0) + 1;
    }

    for (let key of Object.keys(hash)) {
        if (hash[key] > Math.floor(n / 2)) {
            return parseInt(key);
        }
    }
};