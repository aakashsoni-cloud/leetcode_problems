/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
    let map = new Map();
    let res = []

    let min = Number.MAX_VALUE;

    for (let i = 0; i < list1.length; i++) {
        const list1Item = list1[i];
        map.set(list1Item, i);
    }

    for (let j = 0; j < list2.length; j++) {
        const list2Item = list2[j];
        if (map.has(list2Item)) {
            let index1 = map.get(list2Item);
            let index2 = j;
            res.push({ val: list2Item, index: index1 + index2 })
            min = Math.min(min, index1 + index2);
        }
    }
    return res.filter((item) => item.index === min).map(item => item.val);
};