const retrieveData = require('./src/retrieve-data');
const transformData = require('./src/transform-data');
const calculate = require('./src/calculate');
const displayResults = require('./src/display-results');
const validateArgs = require('./src/validate-args');
const { dataUrl } = require('./src/config');

const UNHANDLED_REJECTION = 'unhandledRejection';

process.on(UNHANDLED_REJECTION, (err) => {
  console.error(err.message);
  process.exit(-1);
});

async function convertCurrency() {
  const { value, from, to } = validateArgs(process.argv);
  const data = await retrieveData(dataUrl);
  const items = await transformData(data);
  const result = calculate(value, from, to, items);

  displayResults(result);
}

(async () => {
  try {
    await convertCurrency();
    process.exit(0);
  } catch (err) {
    throw err;
  }
})();
