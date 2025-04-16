/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
    let n1 = BigInt(num1);
    let n2 = BigInt(num2);
    if (n1 == 0 || n2 == 0) {
        return "0";
    }

    let product = n1 * n2;
    return product.toString();
};