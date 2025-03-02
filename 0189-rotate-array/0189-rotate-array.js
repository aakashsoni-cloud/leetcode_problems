/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function rotateArr(arr, start, end) {
    while (start <= end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }

    return arr;
}

function rotate(arr, k) {
    let n = arr.length;
    k = k % n; // the extra roatate than lenght;

    rotateArr(arr, 0, n - 1);
    rotateArr(arr, 0, k - 1);
    rotateArr(arr, k, n - 1);

    return arr;
}