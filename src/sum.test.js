const sum = require('./sum')

test("2 plus 3 must be equal 5", () => {
     expect(sum(2,3)).toBe(5);
});