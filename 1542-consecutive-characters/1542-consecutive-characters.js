/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function (s) {
    s = s.split("");
    let conse = 1;

    let start = 0;

    for (let end = 1; end < s.length; end++) {
        if (s[start] !== s[end]) {
            start = end;
        }
                                                                                                                                                                                                                 
        conse = Math.max(conse, end - start + 1)

    }
    return conse;
};