const calculate = require('../calculate');

describe('calculate', () => {
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
