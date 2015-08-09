import alt from './alt';

import LaggyActions from './actions';

class LaggyStore {
  constructor() {
      this.state = {};
      this.bindActions(LaggyActions);
  }

  onSave(data) {
  }

  onClick() {
  }

  onLoad() {
  }
}

export default alt.createStore(LaggyStore, 'LaggyStore');
