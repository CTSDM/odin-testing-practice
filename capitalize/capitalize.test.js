import capitalize from './capitalize'

test('azucar is converted to Azucar', () => {
    expect(capitalize('azucar')).toMatch(/Azucar/);
})

test('paella is converted to Paella', () => {
    expect(capitalize('paella')).toMatch(/Paella/);
})

test('Mar is converted to Mar', () => {
    expect(capitalize('Mar')).toMatch(/Mar/);
})

test('3p is converted to 3p', () => {
    expect(capitalize('3p')).toMatch(/3p/);
})
