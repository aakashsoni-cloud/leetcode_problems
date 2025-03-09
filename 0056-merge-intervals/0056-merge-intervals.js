/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (arr) {
    let n = arr.length;
    arr.sort((a, b) => a[0] - b[0]);
    const ans = [];

    for (let i = 0; i < n; i++) {
        let start = arr[i][0];
        let end = arr[i][1];

        if (ans.length && end <= ans[ans.length - 1][1]) {
            continue;
        }

        for (let j = i + 1; j < n; j++) {
            if (arr[j][0] <= end) {
                end = Math.max(end, arr[j][1]);
            } else {
                break;
            }
        }
        ans.push([start, end]);
    }

    return ans;

};