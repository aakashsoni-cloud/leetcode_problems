/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (num) {
    let findIndex = -1;
    let n = num.length;

    for (let i = n - 2; i >= 0; i--) {
        if (num[i] < num[i + 1]) {
            findIndex = i;
            break;
        }
    }

    // last lexicographical largest
    if (findIndex == -1) {
        num.reverse();
        return num;
    }

    for (let i = n - 1; i > findIndex; i--) {
        if (num[i] > num[findIndex]) {
            [num[i], num[findIndex]] = [num[findIndex], num[i]];
            break;
        }
    }

    num.splice(
        findIndex + 1,
        n - findIndex - 1,
        ...num.slice(findIndex + 1).reverse()
    );

    return num;
};