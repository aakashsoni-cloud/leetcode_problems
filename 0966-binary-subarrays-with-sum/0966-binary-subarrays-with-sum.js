/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function (nums, goal) {
    // TC: O(N) SC: O(N);
    // PREFIX SUM
    /*
    
    let prefixSum = 0;
   let count = 0;
   const map = new Map();
   map.set(0, 1);


   for (let i = 0; i < nums.length; i++) {
       prefixSum += nums[i];
       let remove = prefixSum - goal;
       count += map.get(remove) || 0;
       map.set(prefixSum, (map.get(prefixSum) || 0) + 1);
   }
   return count;

   */


    // TWO POINTER 
    // TC: O(2N) SC: O(1);

    return atmostK(nums, goal) - atmostK(nums, goal - 1);
};

var atmostK = function (nums, goal) {
    let l = 0;
    let r = 0;
    let sum = 0;
    let count = 0;

    if (goal < 0) return 0;
    while (r <= nums.length - 1) {
        sum += nums[r];

        while (l <= r && sum > goal) {
            sum -= nums[l];
            l++;
        }

        count = count + (r - l + 1);
        r++;
    }

    return count;
}