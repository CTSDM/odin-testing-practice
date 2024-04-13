import analyzeArray from './analyzeArray'

test('The object has the correct properties', () => {
    expect(analyzeArray([1, 2, 3, 4, 5])).toEqual(expect.objectContaining({
        average: expect.any(Number),
        min: expect.any(Number),
        max: expect.any(Number),
        length: expect.any(Number),
    }));
});

const arrZeros = [0, 0, 0, 0, 0, 0];
const expectedArrZeros = {
    average: expect.closeTo(0),
    min: expect.closeTo(0),
    max: expect.closeTo(0),
    length: expect.closeTo(6),
};

test('Array with six zeros', () => {
    expect(analyzeArray(arrZeros)).toEqual(expectedArrZeros);
});

const arrOnes = [1, 1, 1];
const expectedArrOnes = {
    average: expect.closeTo(1),
    min: expect.closeTo(1),
    max: expect.closeTo(1),
    length: expect.closeTo(3),
};

test('Array with three ones', () => {
    expect(analyzeArray(arrOnes)).toEqual(expectedArrOnes);
})

const arr1 = [10, -10, 5];
const expectedArr1 = {
    average: expect.closeTo(5 / 3),
    min: expect.closeTo(-10),
    max: expect.closeTo(10),
    length: expect.closeTo(3),
};

test('Array with 3 numbers [10, -10, 5]', () => {
    expect(analyzeArray(arr1)).toEqual(expectedArr1);
});
