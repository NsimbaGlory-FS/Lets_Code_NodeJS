const { uppercase, lowercase } = require("./string");

discribe("Testing the string module", () => {
  test("should uppercase a string input", () => {
    expect(uppercase("bob")).toBe("BOB");
  });

  test("should lowercase a string input", () => {
    expect(lowercase("FULL Sail")).toBe("full sail");
  });
});

const mathOperations = require("./calculator");

describe("Calculator tests", () => {
  test("adding 2 + 2 should return 4", () => {
    // arrange and act
    const result = mathOperations.sum(2, 2);

    // assert
    expect(result).toBe(4);
  });

  test("subtracting 8 from 2 should return 6", () => {
    // arrange and act
    const result = mathOperations.diff(8, 2);

    // assert
    expect(result).toBe(6);
  });

  test("multiplying 2 and 5 should return 10", () => {
    // arrange and act
    const result = mathOperations.product(2, 5);

    // assert
    expect(result).toBe(10);
  });

  test("divide 12 and 2 should return 6", () => {
    // arrange and act
    const result = mathOperations.product(12, 2);

    // assert
    expect(result).toBe(6);
  });
});
