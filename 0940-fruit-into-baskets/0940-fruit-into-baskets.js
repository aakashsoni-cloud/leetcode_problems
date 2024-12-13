/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
    let l = 0;
    let r = 0;

    let maxLength = 0;
    let basket = new Map();

    while (r < fruits.length) {
        basket.set(fruits[r], (basket.get(fruits[r]) || 0) + 1);

        if (basket.size > 2) {
            basket.set(fruits[l], basket.get(fruits[l]) - 1);
            if (basket.get(fruits[l]) === 0) {
                basket.delete(fruits[l]);
            }
            l++;
        }
        if (basket.size <= 2) {
            maxLength = Math.max(maxLength, r - l + 1);
        }
        r++;
    }
    return maxLength;;
};