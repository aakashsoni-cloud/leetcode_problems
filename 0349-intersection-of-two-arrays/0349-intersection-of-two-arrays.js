/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (arr1, arr2) {
    let n = arr1.length;
    let m = arr2.length;

    let visited = Array.from(Array(m).fill(0));

    let inter = new Array();

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (arr1[i] == arr2[j] && visited[j] == 0 && !inter.includes(arr1[i])) {
                inter.push(arr1[i]);
                visited[j] = 1;
                break;
            }
        }
    }

    return inter;
};