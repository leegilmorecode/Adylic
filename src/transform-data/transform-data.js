const xml2js = require('xml2js');

async function transformData(data) {
  try {
    return await xml2js.parseStringPromise(data);
  } catch (error) {
    throw new Error('Unable to transform data');
  }
}

module.exports = transformData;
