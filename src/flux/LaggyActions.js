const alt = require('./alt');

class LaggyActions {
  constructor() { }

  makeNextPrime(n) {
    this.dispatch(n);
  }
}

module.exports = alt.createActions(LaggyActions);
