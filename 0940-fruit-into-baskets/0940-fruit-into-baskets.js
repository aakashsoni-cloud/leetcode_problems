/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {

    let n = fruits.length;
    let map = new Map();
    let l = 0;
    let maxLength = 0;

    for (let r = 0; r < n; r++) {
        const rigthFruit = fruits[r];
        map.set(rigthFruit, map.get(rigthFruit) + 1 || 0);

        if (map.size > 2) {
            const leftFruit = fruits[l];
            if (map.get(leftFruit) === 0) {
                map.delete(leftFruit);
            } else {
                map.set(leftFruit, map.get(leftFruit) - 1)
            }
            l++;
        }

        if (map.size <= 2) {
            maxLength = Math.max(maxLength, r - l + 1)
        }
    }

    return maxLength
};