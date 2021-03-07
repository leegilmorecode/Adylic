const axios = require('axios');
const { AppError, logLevels, errorTypes } = require('../common/errors');

async function retrieveData(url, options = {}) {
  try {
    const { data } = await axios.get(url, { ...options });
    return data;
  } catch (error) {
    throw new AppError(
      'Unable to retrieve data',
      `Unable to retrieve data - error: ${error.message}`,
      errorTypes.INVALID_OPERATION,
      logLevels.ERROR,
    );
  }
}

module.exports = retrieveData;
