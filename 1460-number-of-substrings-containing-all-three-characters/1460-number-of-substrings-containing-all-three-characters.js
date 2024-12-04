/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function (s) {
    let lastSeen = [-1, -1, -1];
    let cnt = 0;

    for (let i = 0; i < s.length; i++) {
        lastSeen[s.charCodeAt(i) - 'a'.charCodeAt(0)] = i;

        if (lastSeen[0] != -1 && lastSeen[1] != -1 && lastSeen[2] != -1) {
            let min1 = Math.min(lastSeen[0], lastSeen[1]);
            let min2 = Math.min(lastSeen[1], lastSeen[2]);
            let res = min1;
            if (min1 > min2) {
                res = min2;
            }
            cnt = cnt + (1 + res)
        }
    }
    return cnt;

};