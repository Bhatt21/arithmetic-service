const { add } = require("../arithmetica")

test('2+3 is equal to 5', () => {
    expect(add(2, 3)).toBe(5);
});

test('4+3 is equal to 7', () => {
    expect(add(4, 3)).toBe(7);
});

test('1000+300 is equal to 1300', () => {
    expect(add(1000, 300)).toBe(1300);
});