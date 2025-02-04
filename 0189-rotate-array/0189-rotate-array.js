/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function rotateArr(arr, left, right) {
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr;
}
function rotate(arr, k) {
  let n = arr.length;
  k = k % n;

  rotateArr(arr, 0, n - 1);
  rotateArr(arr, 0, k - 1);
  rotateArr(arr, k, n - 1);

  return arr;
}