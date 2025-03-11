/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    // TC : O(logN)
    let binaryForm = BigInt(n);
    let ans = 1;

    if (n < 0) {
        x = 1 / x;
        binaryForm = -(binaryForm)
    }

    while (binaryForm > 0) {
        // only add to ans if the binary is 1
        if (binaryForm % 2n == 1n) {
            ans *= x;
        }

        // square if the binary number is 0 or 1 
        x *= x;
        binaryForm = binaryForm / 2n;
    }

    return ans;
};