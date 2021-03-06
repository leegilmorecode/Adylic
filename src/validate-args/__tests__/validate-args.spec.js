const validateArgs = require("../validate-args");

describe("validate-args", () => {
  it("should return args on success", () => {
    const args = ["node-version", "path", "1000.45", "GBP", "USD"];
    expect(validateArgs(args)).toEqual({ to: "USD", value: 1000.45 });
  });

  it("should throw an error if invalid amount of args", () => {
    const args = ["node-version", "path"];
    expect(() => validateArgs(args)).toThrow(
      /Invalid amount of arguments provided/
    );
  });

  it("should throw an error if invalid number provided", () => {
    const args = ["node-version", "path", "invalid-number", "GBP", "USD"];
    expect(() => validateArgs(args)).toThrow(/Invalid number provided/);
  });
});
