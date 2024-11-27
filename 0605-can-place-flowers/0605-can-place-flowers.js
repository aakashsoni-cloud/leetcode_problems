/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {

    if (n === 0) return true;
    let count = 0;
    for (let i = 0; i < flowerbed.length; i += 2) {
        if (flowerbed[i] === 0) {
            if (i === flowerbed.length - 1 || flowerbed[i + 1] === 0) {
                count++;
            } else {
                i++;
            }
        }
    }

    return count >= n
};