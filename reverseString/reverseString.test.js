import reverseString from './reverseString.js'

test('azucar is converted to racuza', () => {
    expect(reverseString('azucar')).toMatch(/racuza/);
})

test('paella is converted to alleap', () => {
    expect(reverseString('paella')).toMatch(/alleap/);
})

test('Mar is converted to raM', () => {
    expect(reverseString('Mar')).toMatch(/raM/);
})

test('3p is converted to p3', () => {
    expect(reverseString('3p')).toMatch(/p3/);
})
