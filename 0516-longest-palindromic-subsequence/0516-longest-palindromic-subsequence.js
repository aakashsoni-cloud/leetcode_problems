/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
    let t = s.split("").reverse().join("");
    let dp = Array.from(Array(s.length + 1).fill(0), () =>
        Array(t.length + 1).fill(0)
    );


    for (let i = 1; i <= s.length; i++) {
        for (let j = 1; j <= t.length; j++) {
            if (s[i - 1] === t[j - 1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
            }
        }
    }

    return dp[s.length][t.length];

    // let ans = [];
    // let len = dp[s.length][t.length];
    // let max = 0
    // let index = len - 1;
    // let i = s.length - 1;
    // let j = t.length - 1;

    // while (i >= 0 && j >= 0) {
    //     if (s[i - 1] == t[j - 1]) {
    //         ans[index] = s[i - 1];
    //         i--;
    //         j--;
    //         index--;
    //     } else if (dp[i - 1][j] > dp[i][j - 1]) {
    //         i--;
    //     } else {
    //         j--
    //     }
    // }

    // return ans;

};