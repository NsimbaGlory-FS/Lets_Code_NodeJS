const { uppercase, lowercase } = require("./string");

discribe("Testing the string module", () => {
  test("should uppercase a string input", () => {
    expect(uppercase("bob")).toBe("BOB");
  });

  test("should lowercase a string input", () => {
    expect(lowercase("FULL Sail")).toBe("full sail");
  });
});

const { add, mul, sub, div } = require("./arith");

test("4 + 5 = 9", () => {
  expect(add(4, 5)).toBe(9);
});

test("4 * 5 = 20", () => {
  expect(mul(4, 5)).toBe(20);
});

test("5 - 6 = -1", () => {
  expect(sub(5, 6)).toBe(-1);
});

test("10 / 2 = 5", () => {
  expect(div(10, 2)).toBe(5);
});
