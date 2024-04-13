const ALPHABET_LENGTH = 26;
const ASCII_CODE_a_LOWERCASE = 96;
const ASCII_CODE_A_UPPERCASE = 65;


export default function caesarCipher(message, key) {
    // message is a string
    // key is an integer
    // for all the letters in message we shift them by key in the alphabet
    // we keep the lower and upper case letters
    let cipheredMessage = '';
    for (let letter of message) {
        cipheredMessage += getNewChar(letter, key);
    }
    return cipheredMessage;
}

function getNewChar(letter, key) {
    if (letter.toLowerCase() === letter.toUpperCase())
        return letter;
    const charCode = letter.charCodeAt();
    // if the letter is lower case we will use a as the 0 index letter
    const baseCode = charCode > ASCII_CODE_a_LOWERCASE ? ASCII_CODE_a_LOWERCASE : ASCII_CODE_A_UPPERCASE;
    let newCode = charCode + key;
    if (newCode > baseCode + ALPHABET_LENGTH)
        newCode = newCode % (baseCode + ALPHABET_LENGTH) + baseCode;
    return String.fromCharCode(newCode);
}
