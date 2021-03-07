const { AppError, logLevels, errorTypes } = require('../common/errors');

function validateArgs(args) {
  if (args.length < 4)
    throw new AppError(
      'Invalid amount of arguments provided',
      `Invalid amount of arguments provided - args: ${args}`,
      errorTypes.INVALID_PARAMETERS,
      logLevels.ERROR,
    );

  const value = Number(args[2]);
  const from = args[3];
  const to = args[4];

  if (isNaN(value))
    throw new AppError(
      'Invalid number provided',
      `Invalid number provided - value: ${value}`,
      errorTypes.INVALID_PARAMETERS,
      logLevels.ERROR,
    );

  return {
    value,
    to: to.toUpperCase(),
    from: from.toUpperCase(),
  };
}

module.exports = validateArgs;
