/**
 * @param {number} num
 * @return {number}
 */
var swap = function (num, start, end) {
    let temp = num[start];
    num[start] = num[end];
    num[end] = temp;
}
var maximumSwap = function (num) {

    let digits = num.toString().split('');

    for (let i = 0; i < digits.length; i++) {
        let maxDigit = digits[i];
        let maxIndex = i;

        // Check the rest of the digits to the right
        for (let j = i + 1; j < digits.length; j++) {
            // Find the biggest digit on the right (furthest one if duplicates)
            if (digits[j] >= maxDigit) {
                maxDigit = digits[j];
                maxIndex = j;
            }
        }

        // If a bigger digit is found later, swap it
        if (maxDigit > digits[i]) {
            [digits[i], digits[maxIndex]] = [digits[maxIndex], digits[i]];
            break;
        }
    }

    return parseInt(digits.join(''));
};