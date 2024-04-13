export default function analyzeArray(arr) {
    const arrSorted = arr.slice().sort((a, b) => a - b);
    const obj = {};
    obj.length = arrSorted.length;
    obj.average = arrSorted.reduce((acc, cur) => acc + cur, 0) / obj.length;
    obj.max = arrSorted[obj.length - 1];
    obj.min = arrSorted[0];

    return obj;
}
