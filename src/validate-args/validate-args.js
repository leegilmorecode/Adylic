function validateArgs(args) {
  if (args.length < 4) throw new Error("Invalid amount of arguments provided");

  const value = Number(args[2]);
  const to = args[4];

  if (isNaN(value)) throw new Error("Invalid number provided");

  return {
    value,
    to,
  };
}

module.exports = validateArgs;
