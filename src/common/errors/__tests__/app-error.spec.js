const AppError = require('../app-error');

describe('AppError', () => {
  it('should use the default params', () => {
    const error = new AppError();
    expect(error.message).toEqual('An error occurred');
    expect(error.userMessage).toEqual('An error occurred');
    expect(error.internalMessage).toEqual('An error occurred');
    expect(error.loglevel).toEqual(1);
    expect(error.errorType).toEqual(1);
  });
});
