/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
    // num = 154
    if (Math.floor(num / 10) == 0) return num;
    let pre = Math.floor(num / 10); //  15
    num = (num % 10) + pre; // (4) + 15
    return addDigits(num);
};