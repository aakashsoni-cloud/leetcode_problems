/**
 * @param {string[]} strs
 * @return {string[][]}
 */

var groupAnagrams = function (strs) {
    let output = {};

    // Solution 1 (m*nlogn) with sort 
    /*
    for (let s of strs) {
        let key = s.split("").sort().join("");
        if (!output[key]) {
            output[key] = [];
        }
        output[key].push(s);
    }

    return Object.values(output);
    */

    // Solution 2 (m*n)
    let map = new Map();
    for (let s of strs) {
        let characterFreq = new Array(26).fill(0);

        for (let c in s) {
            characterFreq[s.charCodeAt(c) - 97]++;
        }

        let key = characterFreq.toString();

        if (!map.has(key)) {
            map.set(key, []);
        }

        map.get(key).push(s)
    }

    return Array.from(map.values());
};