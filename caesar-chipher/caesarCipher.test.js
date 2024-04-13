import caesarCipher from './caesarCipher'

test('/azucar/, key = 10 to be ciphered to /kjemkb/', () => {
    expect(caesarCipher('azucar', 10)).toMatch(/kjemkb/);
});

test('/azucar/, key = 0 to be ciphered to /azucar/', () => {
    expect(caesarCipher('azucar', 0)).toMatch(/azucar/);
});

test('/azucar, salad!/, key = 15 to be ciphered to /pojrpg, hpaps!/', () => {
    expect(caesarCipher('azucar', 0)).toMatch(/azucar/);
});

test('/pataTA/, key = 0 to be ciphered to /pataTA/', () => {
    expect(caesarCipher('pataTA', 0)).toMatch(/pataTA/);
});

test('/pataTA/, key = 11 to be ciphered to /pataTA/', () => {
    expect(caesarCipher('pataTA', 11)).toMatch(/alelEL/);
});
