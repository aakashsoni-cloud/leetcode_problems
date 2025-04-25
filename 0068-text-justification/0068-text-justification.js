/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
    const result = [];
    let i = 0;

    while (i < words.length) {
        let lineLen = words[i].length;
        let j = i + 1;

        // Determine how many words can fit in the current line
        while (j < words.length && lineLen + 1 + words[j].length <= maxWidth) {
            lineLen += 1 + words[j].length;
            j++;
        }

        const lineWords = words.slice(i, j);
        const isLastLine = j === words.length;
        const numWords = lineWords.length;
        const totalChars = lineWords.reduce((sum, word) => sum + word.length, 0);
        const spacesNeeded = maxWidth - totalChars;

        let line = '';

        if (isLastLine || numWords === 1) {
            // Left justify
            line = lineWords.join(' ');
            line += ' '.repeat(maxWidth - line.length);
        } else {
            // Fully justify
            const spaceBetween = Math.floor(spacesNeeded / (numWords - 1));
            const extraSpaces = spacesNeeded % (numWords - 1);

            for (let k = 0; k < numWords - 1; k++) {
                line += lineWords[k];
                line += ' '.repeat(spaceBetween + (k < extraSpaces ? 1 : 0));
            }
            line += lineWords[numWords - 1]; // Add the last word
        }

        result.push(line);
        i = j;
    }

    return result;
};