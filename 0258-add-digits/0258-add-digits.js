/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
    if (Math.floor(num / 10) == 0) return num;
    let rem = Math.floor(num / 10);
    num = (num % 10) + rem;
    return addDigits(num);
};