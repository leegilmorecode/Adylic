const xml2js = require('xml2js');
const { AppError, logLevels, errorTypes } = require('../common/errors');

async function transformData(data) {
  try {
    const records = await xml2js.parseStringPromise(data);
    const items = records['gesmes:Envelope'].Cube[0].Cube[0].Cube;

    return items.map((item) => {
      return {
        currency: item['$'].currency,
        rate: Number(item['$'].rate),
      };
    });
  } catch (error) {
    throw new AppError(
      'Unable to transform data',
      `Unable to transform data - error: ${error.message}`,
      errorTypes.INVALID_OPERATION,
      logLevels.ERROR,
    );
  }
}

module.exports = transformData;
