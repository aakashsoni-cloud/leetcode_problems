/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function (s, part) {
    let newStr
    let index = s.indexOf(part);
    while (index >= 0) {
        console.log(index)
        s = s.substring(0, index) + s.substring(index + part.length);
        index = s.indexOf(part);
        console.log(s)
    }
    return s;

};