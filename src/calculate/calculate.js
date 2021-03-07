const Ajv = require('ajv');
const calculateSchema = require('./schema');
const { euro } = require('../config');

const ajv = new Ajv({ allErrors: true });
const validate = ajv.compile(calculateSchema);

function calculate(value, from, to, data) {
  try {
    if (!validate(data)) throw new Error('Invalid data format');

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
  } catch (error) {
    throw new Error('Unable to calculate conversion');
  }
}

module.exports = calculate;
