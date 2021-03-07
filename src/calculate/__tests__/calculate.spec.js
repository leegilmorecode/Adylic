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

  it('should throw an error if the data input is in the wrong shape', () => {
    const value = 1000;
    const to = 'USD';
    const data = [{ currency: 'USD' }]; // missing rate property
    expect(() => calculate(value, to, data)).toThrow(/Unable to calculate conversion/);
  });

  it('should throw an error if unable to perform conversion', () => {
    const value = null; // invalid property
    const to = 'USD';
    const data = []; // invalid data
    expect(() => calculate(value, to, data)).toThrow(/Unable to calculate conversion/);
  });
});
