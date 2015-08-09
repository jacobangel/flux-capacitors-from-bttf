import alt from './alt';

import UIActions from './UIActions';
import LaggyActions from './LaggyActions';

class UIStore {
  constructor() {
    this.state = {
      clicks: 0,
      prime: 0,
    };

    this.bindActions(UIActions);
    this.bindListeners({
      onMakeNextPrime: LaggyActions.makeNextPrime,
    });
  }

  onMakeNextPrime(n) {
    console.log('got it bro', n);
    this.setState({
      prime: n,
    });
  }

  onClick() {
    const clicks = this.state.clicks + 1;

    this.setState({ clicks, prime: this.state.prime });
  }
}

export default alt.createStore(UIStore, 'UIStore');
