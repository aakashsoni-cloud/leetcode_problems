/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    let n = intervals.length;
    intervals.sort((a, b) => a[0] - b[0]);

    let res = [];

    for (let i = 0; i < n; i++) {
        if (!res.length || intervals[i][0] > res[res.length - 1][1]) {
            res.push(intervals[i])
        } else {
            res[res.length - 1][1] = Math.max(res[res.length - 1][1], intervals[i][1])
        }
    }

    return res;
};