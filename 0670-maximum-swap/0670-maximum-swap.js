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

    num = num.toString().split("");
    let n = num.length;
    if (n == 1) return parseInt(num.join(""));

    let maxEle = Number.MIN_VALUE;
    let index = -1;

    for (let i = 0; i < n; i++) {
        maxEle = num[i]
        for (let j = i + 1; j < n; j++) {
            if (num[j] >= maxEle) {
                maxEle = num[j];
                index = j;
            }
        }
        if (index !== -1 && num[i] !== num[index] && i < index) {
            console.log(i, index)
            swap(num, i, index);
            break;
        }
    }


    return parseInt(num.join(""));
};