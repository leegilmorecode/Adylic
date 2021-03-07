const calculateSchema = {
  type: 'array',
  default: [],
  items: {
    type: 'object',
    required: ['currency', 'rate'],
    properties: {
      currency: {
        type: 'string',
      },
      rate: {
        type: 'number',
      },
    },
  },
};

module.exports = calculateSchema;
