const xml2js = require('xml2js');

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
    throw new Error('Unable to transform data');
  }
}

module.exports = transformData;
