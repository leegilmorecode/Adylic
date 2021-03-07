function calculate(value, to, data) {
  try {
    const { rate } = data.find((items) => items.currency === to);
    return rate * value;
  } catch (error) {
    throw new Error('Unable to calculate conversion');
  }
}

module.exports = calculate;
