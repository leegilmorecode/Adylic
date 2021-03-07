const xml2js = require('xml2js');
const transformData = require('../transform-data');

describe('transform-data', () => {
  it('should return correct data on success', async () => {
    const results = [{ currency: 'USD', rate: 1.1938 }];
    const data = `<?xml version="1.0" encoding="UTF-8"?>
    <gesmes:Envelope xmlns:gesmes="http://www.gesmes.org/xml/2002-08-01" xmlns="http://www.ecb.int/vocabulary/2002-08-01/eurofxref">
            <gesmes:subject>Reference rates</gesmes:subject>
            <gesmes:Sender>
                    <gesmes:name>European Central Bank</gesmes:name>
            </gesmes:Sender>
            <Cube>
                    <Cube time='2021-03-05'>
                            <Cube currency='USD' rate='1.1938'/>
                    </Cube>
            </Cube>
    </gesmes:Envelope>`;
    expect(await transformData(data)).toEqual(results);
  });

  it('should throw an error if unable to transform data', async () => {
    xml2js.parseStringPromise = jest.fn(() => Promise.reject(new Error('error')));
    await expect(transformData('url')).rejects.toThrow(/Unable to transform data/);
  });
});
