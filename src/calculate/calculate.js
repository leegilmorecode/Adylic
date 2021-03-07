const Ajv = require('ajv');
const calculateSchema = require('./schema');
const { euro } = require('../config');
const { AppError, logLevels, errorTypes } = require('../common/errors');

const ajv = new Ajv({ allErrors: true });
const validate = ajv.compile(calculateSchema);

function calculate(value, from, to, data) {
  if (!validate(data) || data.length === 0) {
    throw new AppError(
      'Invalid data format',
      `Invalid data format ${JSON.stringify(data)}`,
      errorTypes.INVALID_PARAMETERS,
      logLevels.ERROR,
    );
  }

  if (to === from) {
    throw new AppError(
      'Cant convert from the same currencies',
      `Cant convert from the same currencies - to: ${to}, from: ${from}`,
      errorTypes.INVALID_PARAMETERS,
      logLevels.ERROR,
    );
  }

  // check if the exchange rate is from/to base euros (no conversation between currencies)
  if (to === euro || from === euro) {
    if (from === euro) {
      const { rate } = data.find((items) => items.currency === to);
      return value * rate;
    } else {
      const { rate } = data.find((items) => items.currency === from);
      return value / rate;
    }
  } // convert between the two currencies via the base euro exchange rates
  else {
    const { rate: fromRate } = data.find((items) => items.currency === from);
    const { rate: toRate } = data.find((items) => items.currency === to);
    const currentValue = value / fromRate;
    return toRate * currentValue;
  }
}

module.exports = calculate;
