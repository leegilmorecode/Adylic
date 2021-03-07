const calculate = require('../calculate');

describe('calculate', () => {
  describe('when converting between two non euro currencies', () => {
    it('should return correct result when going to euros', () => {
      const value = 1000;
      const from = 'GBP';
      const to = 'EUR';
      const data = [
        { currency: 'USD', rate: 1.1938 },
        { currency: 'GBP', rate: 0.843 },
      ];

      expect(calculate(value, from, to, data)).toEqual(1186.2396204033216);
    });

    it('should return correct result when going from euros', () => {
      const value = 1000;
      const from = 'EUR';
      const to = 'GBP';
      const data = [
        { currency: 'USD', rate: 1.1938 },
        { currency: 'GBP', rate: 0.843 },
      ];

      expect(calculate(value, from, to, data)).toEqual(843);
    });
  });

  describe('when converting between no euro currencies', () => {
    it('should return correct result on success', () => {
      const value = 1000;
      const from = 'GBP';
      const to = 'USD';
      const data = [
        { currency: 'USD', rate: 1.1938 },
        { currency: 'GBP', rate: 0.843 },
      ];

      expect(calculate(value, from, to, data)).toEqual(1416.1328588374854);
    });
  });

  it('should throw an error if the to and from currencies are the same', () => {
    const value = 1000;
    const to = 'USD';
    const from = 'USD';
    const data = [
      { currency: 'USD', rate: 1.1938 },
      { currency: 'GBP', rate: 0.843 },
    ];
    expect(() => calculate(value, from, to, data)).toThrow(
      'Cant convert from the same currencies - to: USD, from: USD',
    );
  });

  it('should throw an error if the data rate property is missing', () => {
    const value = 1000;
    const to = 'USD';
    const from = 'GBP';
    const data = [{ currency: 'USD' }]; // missing rate property
    expect(() => calculate(value, from, to, data)).toThrow('Invalid data format [{"currency":"USD"}]');
  });

  it('should throw an error if the data currency property is missing', () => {
    const value = 1000;
    const to = 'USD';
    const from = 'GBP';
    const data = [{ rate: 0.23 }]; // missing currency property
    expect(() => calculate(value, from, to, data)).toThrow('Invalid data format [{"rate":0.23}]');
  });

  it('should throw an error if the data property is an object and not an array of objects', () => {
    const value = 1000;
    const to = 'USD';
    const from = 'GBP';
    const data = {}; // wrong property shape
    expect(() => calculate(value, from, to, data)).toThrow('Invalid data format {}');
  });

  it('should throw an error if the data currency property is not a string', () => {
    const value = 1000;
    const to = 'USD';
    const from = 'GBP';
    const data = [
      { currency: 111, rate: 1.1938 }, // currency not a string
      { currency: 'GBP', rate: 0.843 },
    ];
    expect(() => calculate(value, from, to, data)).toThrow(
      'Invalid data format [{"currency":111,"rate":1.1938},{"currency":"GBP","rate":0.843}]',
    );
  });

  it('should throw an error if the data rate property is not a number', () => {
    const value = 1000;
    const to = 'USD';
    const from = 'GBP';
    const data = [
      { currency: 'USD', rate: '1.1938' }, // rate is a string
      { currency: 'GBP', rate: 0.843 },
    ];
    expect(() => calculate(value, from, to, data)).toThrow(
      'Invalid data format [{"currency":"USD","rate":"1.1938"},{"currency":"GBP","rate":0.843}]',
    );
  });

  it('should throw an error if unable to perform conversion', () => {
    const value = null; // invalid property
    const to = 'USD';
    const from = 'GBP';
    const data = []; // invalid data
    expect(() => calculate(value, from, to, data)).toThrow('Invalid data format []');
  });
});
