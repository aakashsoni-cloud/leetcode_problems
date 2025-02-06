/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(arr) {
    let l = 0;
  let r = 0;

  while (r < arr.length) {
    if (arr[r] !== 0) {
      [arr[l], arr[r]] = [arr[r], arr[l]];
      l++;
      r++;
    } else {
      r++;
    }
  }
  return arr;
};