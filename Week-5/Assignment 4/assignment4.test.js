const mathOperations = require('./assignment4');

test('test addition', () => {
    expect(mathOperations.sum(1, 2)).toBe(3);
});

test('test diff', () => {
    expect(mathOperations.diff(3.1, 2.1)).toBe(1);
});

test('test product', () => {
    expect(mathOperations.product(5, 2)).toBe(10);
});
