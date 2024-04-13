export default function reverseString(stringSequence) {
    let strToReturn = '';
    for (let i = stringSequence.length - 1; i >= 0; --i)
        strToReturn += stringSequence[i];
    return strToReturn;
}
