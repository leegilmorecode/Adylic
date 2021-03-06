function displayResults(result) {
  if (isNaN(result)) throw new Error("An error has occurred");

  console.log(Number(result).toFixed(2));
}

module.exports = displayResults;
