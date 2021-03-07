const retrieveItems = require('../retrieve-items');

describe('retrieve-items', () => {
  it('should return correct data on success', () => {
    const results = [{ currency: 'USD', rate: '1.1938' }];
    const data = {
      'gesmes:Envelope': {
        $: {
          'xmlns:gesmes': 'http://www.gesmes.org/xml/2002-08-01',
          xmlns: 'http://www.ecb.int/vocabulary/2002-08-01/eurofxref',
        },
        'gesmes:subject': ['Reference rates'],
        'gesmes:Sender': [{ 'gesmes:name': ['European Central Bank'] }],
        Cube: [
          {
            Cube: [
              {
                $: { time: '2021-03-05' },
                Cube: [{ $: { currency: 'USD', rate: '1.1938' } }],
              },
            ],
          },
        ],
      },
    };
    expect(retrieveItems(data)).toEqual(results);
  });

  it('should throw an error if unable to retrieve the items', () => {
    expect(() => retrieveItems({})).toThrow(/Unable to construct the correct data/);
  });
});
