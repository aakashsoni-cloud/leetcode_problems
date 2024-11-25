/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s1) {
    let s2 = s1.split("").reverse().join("");
    let dp = Array.from(Array(s1.length + 1).fill(0), () =>
        Array(s2.length + 1).fill(0)
    );

    for (let i = 1; i <= s1.length; i++) {
        for (let j = 1; j <= s2.length; j++) {
            if (s1[i - 1] === s2[j - 1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    return dp[s1.length][s2.length];
};