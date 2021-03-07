const Ajv = require('ajv');
const calculateSchema = require('./schema');

const ajv = new Ajv({ allErrors: true });

function calculate(value, from, to, data) {
  try {
    const validate = ajv.compile(calculateSchema);

    if (!validate(data)) throw new Error('Invalid data format');

    const { rate: fromRate } = data.find((items) => items.currency === from);
    const { rate: toRate } = data.find((items) => items.currency === to);

    const currentValue = value / fromRate;
    return toRate * currentValue;
  } catch (error) {
    throw new Error('Unable to calculate conversion');
  }
}

module.exports = calculate;
