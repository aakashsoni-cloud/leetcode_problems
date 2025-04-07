/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

function rotateArray(arr, low, high) {
    while (low <= high) {
        [arr[low], arr[high]] = [arr[high], arr[low]]
        low++;
        high--;
    }
    return arr;
}

function rotate(arr, k) {
    let n = arr.length;

    k = k % n; // to only rotate the remaining steps 

    rotateArray(arr, 0, n - 1)
    rotateArray(arr, 0, k - 1)
    rotateArray(arr, k, n - 1)
    return arr;
}