# Adylic

Adylic tech test - Senior NodeJS Developer

## Summary

The online feed:

http://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml

contains some up-to-date Euro exchange rates.
Write a small command line NodeJS script to convert currencies supported in
the feed.
The layout of the command must be as follows:

```javascript
node currencyConverter.js [value] [from currency] [to currency]
```

**Examples**:

- node currencyConverter.js 100.00 GBP EUR prints 119.97 at the time of
  writing
- node currencyConverter.js 200.50 CFH CAD prints 267.85 at the time of
  writing

The code must be:

- Easy to read and extended (e.g. the currency exchange data should be easily
  replaceable with another source in the future).
- Shipped with 100% unit test coverage (Optional but desirable)

## Discussion Points

- Design choices and adopted patterns;
- How to run tests;
- How to use the command line (a non-coder must be able to run it).
- Feel free to use any library you want for dependency injection, linting, mocking
  etc, but do not over-engineer nor implement more than needed (caching, storage,
  REST interface etc..).
