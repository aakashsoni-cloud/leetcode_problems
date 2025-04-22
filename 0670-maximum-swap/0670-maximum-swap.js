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


    for (let i = 0; i < n; i++) {
        let maxEle = num[i];
        let maxIndex = -1;

        for (let j = i + 1; j < n; j++) {
            if (num[j] >= maxEle) {
                maxEle = num[j];
                maxIndex = j;
            }
        }
        if (maxIndex !== -1 && num[i] !== num[maxIndex] && i < maxIndex) {
            swap(num, i, maxIndex);
            break;
        }
    }


    return parseInt(num.join(""));
};