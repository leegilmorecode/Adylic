function retrieveItems(records) {
  try {
    const items = records['gesmes:Envelope'].Cube[0].Cube[0].Cube;

    return items.map((item) => {
      return {
        currency: item['$'].currency,
        rate: item['$'].rate,
      };
    });
  } catch (error) {
    throw new Error('Unable to construct the correct data');
  }
}

module.exports = retrieveItems;
