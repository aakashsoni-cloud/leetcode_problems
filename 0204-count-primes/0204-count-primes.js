/**
 * @param {number} n
 * @return {number}
 */

var countPrimes = function (n) {
    if (n < 2) return 0;

    let count = 0;
    let res = [];
    for (let i = 2; i < n; i++) {
        if (res[i]) continue;
        count++;
         if (i > Math.sqrt(n)) continue;
        for (let j = i * i; j < n; j += i) {
           res[j] = 1;
        }
    }
    return count;
};