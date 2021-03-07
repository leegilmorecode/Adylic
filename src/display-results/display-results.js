const { AppError, logLevels, errorTypes } = require('../common/errors');

function displayResults(result) {
  if (isNaN(result))
    throw new AppError(
      'An error has occurred',
      `An error has occurred - result: ${result}`,
      errorTypes.INVALID_PARAMETERS,
      logLevels.ERROR,
    );

  console.log(Number(result).toFixed(2));
}

module.exports = displayResults;
