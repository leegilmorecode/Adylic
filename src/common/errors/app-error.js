const { errorTypes, logLevels } = require('./error-constants');

class AppError extends Error {
  constructor(
    userMessage = 'An error occurred',
    internalMessage = 'An error occurred',
    errorType = errorTypes.ERROR,
    loglevel = logLevels.ERROR,
  ) {
    super(internalMessage);

    this.userMessage = userMessage;
    this.internalMessage = internalMessage;
    this.errorType = errorType;
    this.loglevel = loglevel;
  }
}

module.exports = AppError;
