const axios = require("axios");

async function retrieveData(url) {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    throw new Error("Unable to retrieve data");
  }
}

module.exports = retrieveData;
