const displayResults = require('../display-results');

describe('display-results', () => {
  it('should write the correct value to the console with two decimal places', () => {
    console.log = jest.fn();
    displayResults(999.9);

    expect(console.log.mock.calls[0][0]).toBe('999.90');
  });

  it('should throw an error if not a valid number', () => {
    expect(() => displayResults('test')).toThrow('An error has occurred - result: test');
  });
});
