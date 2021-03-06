const retrieveData = require("./src/retrieve-data");
const transformData = require("./src/transform-data");
const retrieveItems = require("./src//retrieve-items");
const calculate = require("./src/calculate");
const displayResults = require("./src/display-results");
const validateArgs = require("./src/validate-args");
const { dataUrl } = require("./src/config");

const UNHANDLED_REJECTION = "unhandledRejection";

process.on(UNHANDLED_REJECTION, (err) => {
  console.error(err.message);
  process.exit(-1);
});

async function convertCurrency() {
  const { value, to } = validateArgs(process.argv);
  const data = await retrieveData(dataUrl);
  const json = await transformData(data);
  const items = retrieveItems(json);
  const result = calculate(value, to, items);

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
