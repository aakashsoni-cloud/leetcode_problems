/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (arr) {
    let n = arr.length;
    // let count0 = 0;
    // let count1 = 0;
    // let count2 = 0;

    // for (let i = 0; i < n; i++) {
    //     if (nums[i] == 0) count0++
    //     else if (nums[i] == 1) count1++;
    //     else count2++;
    // }

    // for(let i=0;i<count0;i++) {
    //     nums[i] = 0;
    // }
    // for(let i=count0;i<count0+count1;i++) {
    //     nums[i] = 1;
    // }
    // for(let i=count0+count1;i<count0+count1+count2;i++) {
    //     nums[i] = 2;
    // }


    let low = 0;
    let mid = 0;
    let high = n - 1;

    while (mid <= high) {
        if (arr[mid] == 0) {
            [arr[low], arr[mid]] = [arr[mid], arr[low]]
            low++;
            mid++
        } else if (arr[mid] == 1) {
            mid++;
        } else {
            [arr[mid], arr[high]] = [arr[high], arr[mid]];
            high--;
        }
    }
};