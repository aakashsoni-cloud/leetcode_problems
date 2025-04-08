/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (num) {
    let n = num.length;

    let posInd = 0;
    let negInd = 1;

    let ans = new Array(n);
    for (let i = 0; i < n; i++) {
        if (num[i] > 0) {
            ans[posInd] = num[i];
            posInd += 2;
        } else {
            ans[negInd] = num[i];
            negInd += 2;
        }
    }

    return ans;
};