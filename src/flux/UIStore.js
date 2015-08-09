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
  }

  onGetPrime(n) {
    this.setState({
      prime: n,
      clicks: this.state.clicks,
    });
  }

  onClick() {
    const clicks = this.state.clicks + 1;

    this.setState({ clicks });
  }
}

export default alt.createStore(UIStore, 'UIStore');
