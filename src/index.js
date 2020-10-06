const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // for(let item in MORSE_TABLE) {
    //     let itemNewValue = item.split('').map((symbol) => {
    //         return symbol === '-' ? '11' : '10';
    //     }).join('');
    //     if (itemNewValue.length < 10) {
    //         itemNewValue = '0'.repeat(10 - itemNewValue.length) + itemNewValue;
    //     }
    //     MORSE_TABLE[itemNewValue] = MORSE_TABLE[item];
    // }
    let result = '';
    for (let i = 0; i < expr.length; i += 10) {
        if(expr[i] === '*') {
            result += ' ';
        } else {
           let symb = expr.substr(i, 10);
           let letterCode = '';
           for (let i = 0; i < symb.length; i += 2) {
               if (symb[i] + symb[i + 1] == '10') {
                letterCode += '.';
               }
               if (symb[i] + symb[i + 1] == '11') {
                letterCode += '-';
               }
           }
            result += MORSE_TABLE[letterCode];
        }
    }
    return result;
    // expr.split('').map(item => {
    //     console.log(expr);
    //     console.log(item);
    //     if (item === ' ') {
    //         return '**********';
    //     } else {
    //         return this.MORSE_TABLE[item]
    //     }
    // }).join('');
}

module.exports = {
    decode
}