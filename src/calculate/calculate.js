const Ajv = require('ajv');
const calculateSchema = require('./schema');

const ajv = new Ajv({ allErrors: true });

function calculate(value, to, data) {
  try {
    const validate = ajv.compile(calculateSchema);

    if (!validate(data)) throw new Error('Invalid data format');

    const { rate } = data.find((items) => items.currency === to);
    return rate * value;
  } catch (error) {
    throw new Error('Unable to calculate conversion');
  }
}

module.exports = calculate;
