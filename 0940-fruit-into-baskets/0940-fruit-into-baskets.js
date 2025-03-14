/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
    let n = fruits.length - 1;
    let basket = new Map();
    let l = 0;
    let r = 0;
    let maxItem = 0;

    while (r <= n) {
        basket.set(fruits[r], (basket.get(fruits[r]) || 0) + 1);

        console.log(basket)

        while (basket.size > 2) {
            basket.set(fruits[l], basket.get(fruits[l]) - 1);
            if (basket.get(fruits[l]) == 0) {
                basket.delete(fruits[l]);
            }
            l++;
        }

        maxItem = Math.max(maxItem, r - l + 1);
        r++;
    }
    return maxItem
};