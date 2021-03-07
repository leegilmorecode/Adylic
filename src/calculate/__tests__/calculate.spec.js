const calculate = require('../calculate');

describe('calculate', () => {
  it('should return correct result on success', () => {
    const value = 1000;
    const to = 'USD';
    const data = [{ currency: 'USD', rate: '1.1938' }];

    expect(calculate(value, to, data)).toEqual(Number(1193.8));
  });

  it('should throw an error if unable to perform conversion', () => {
    const value = null; // invalid property
    const to = 'USD';
    const data = []; // invalid property
    expect(() => calculate(value, to, data)).toThrow(/Unable to calculate conversion/);
  });
});
