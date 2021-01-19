/** 
 * Splits the text because everyone like when it's splitted.
 * @param Text is an acutal text to split (add your separator by x number).
 * @param Number of letters before separator is added.
 * @param Separator it's the separator maintained higher, it is '\n' by default!
 * @return The actual text with the separator by the 'number of letters' joined.
*/

const separatist = (string, number, separator = '\n') => {
    const amount = parseInt(number);
    if (!Number.isInteger(amount)) return console.error(`Separatist's second parameter has to be number!`)

    let _field = "";
    let lines = Math.floor(string.length/number);
    for(let i = 0; i < lines + 1; i++) {
        _field += string.substr(i*number, number);
        if(i !== lines) _field += `${separator}`;
    }
    return _field;
};

module.exports = separatist