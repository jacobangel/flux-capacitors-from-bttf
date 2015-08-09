import alt from './alt';
import LaggyActions from './LaggyActions';

class UIActions {
  constructor() {
    this.generateActions('click', 'save', 'load');
  }

  getPrime(n) {
    LaggyActions.makeNextPrime(n);
  }
}

export default alt.createActions(UIActions);
