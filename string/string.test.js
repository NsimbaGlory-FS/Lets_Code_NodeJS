discribe("Testing the string module", () => {
  test("should uppercase a string input", () => {
    expect(uppercase("bob")).toBe("BOB");
  });
});
