import calculator from './calculator'

test('Adds 1 + 2 to equal 3', () => {
    expect(calculator.add(1, 2)).toBe(3);
})

test('Adds 0.1 + 0.2 to equal 0.3', () => {
    expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
})

test('Adds 0 to Infinity to equal Infinity', () => {
    expect(calculator.add(0, Infinity)).toBe(Infinity);
})

test('Subtracts 4 from 10 to equal 6', () => {
    expect(calculator.subtract(10, 4)).toBe(6);
})

test('Subtracts -20 from -10 to equal 10', () => {
    expect(calculator.subtract(-10, -20)).toBe(10);
})

test('Divide 6 and 2 to equal 3', () => {
    expect(calculator.divide(6, 2)).toBe(3);
})

test('Divide 0.2 and 0.1 to equal 2', () => {
    expect(calculator.divide(0.2, 0.1)).toBeCloseTo(2);
})

test('Divide 0.2 and 0 to equal Infinity', () => {
    expect(calculator.divide(0.2, 0)).toBe(Infinity);
})

test('Divide 0.2 and Infinity to equal 0', () => {
    expect(calculator.divide(0.2, Infinity)).toBe(0);
})

test('Multiply 0.2 and 0.1 to equal 0.02', () => {
    expect(calculator.multiply(0.2, 0.1)).toBeCloseTo(0.02);
})

test('Multiply 0 and Infinity to equal NaN', () => {
    expect(calculator.multiply(0, Infinity)).toBeNaN();
})

