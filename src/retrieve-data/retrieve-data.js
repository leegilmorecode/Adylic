const axios = require('axios');

async function retrieveData(url, options = {}) {
  try {
    const { data } = await axios.get(url, { ...options });
    return data;
  } catch (error) {
    throw new Error('Unable to retrieve data');
  }
}

module.exports = retrieveData;
