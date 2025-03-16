/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function (s, part) {
    let newStr
    let index;
    while (s.indexOf(part) >= 0) {
        index = s.indexOf(part);
        console.log(index)
        s = s.substring(0, index) + s.substring(index + part.length);
        console.log(s)
    }
    return s;

};