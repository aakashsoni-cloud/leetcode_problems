/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (arr) {
    let slow = arr[0];
    let fast = arr[0];

    do {
        slow = arr[slow];
        fast = arr[arr[fast]];
    }
    while (slow !== fast);

    console.log(slow, fast)

    fast = arr[0];
    while (slow !== fast) {
        slow = arr[slow];
        fast = arr[fast];
    }

    return slow;
};