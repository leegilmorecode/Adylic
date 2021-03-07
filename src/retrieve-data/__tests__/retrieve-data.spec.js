const axios = require('axios');
const retrieveData = require('../retrieve-data');

jest.mock('axios');

describe('retrieve-data', () => {
  beforeEach(() => {
    axios.get.mockRestore();
  });

  it('should return correct data on success', async () => {
    const data = { to: 'USD', value: 1000.45 };
    axios.get.mockImplementationOnce(() => Promise.resolve({ data }));
    expect(await retrieveData('url')).toEqual(data);
  });

  it('should pass through additional options to axios get to future proof', async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve({}));
    await retrieveData('url', { prop: 'test' });
    expect(axios.get.mock.calls).toMatchInlineSnapshot(`
      Array [
        Array [
          "url",
          Object {
            "prop": "test",
          },
        ],
      ]
    `);
  });

  it('should throw an error when unable to retrieve data', async () => {
    axios.get.mockImplementationOnce(() => Promise.reject(new Error('error')));
    await expect(retrieveData('url')).rejects.toThrow('Unable to retrieve data - error: error');
  });
});
