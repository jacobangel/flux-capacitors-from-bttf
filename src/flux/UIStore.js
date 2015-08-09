import alt from './alt';

import UIActions from './UIActions';

class UIStore {
  constructor() {
    this.state = {
      clicks: 0,
    };
    this.bindActions(UIActions);
  }

  onSave() {}

  onClick() {
    const clicks = this.state.clicks + 1;

    this.setState({ clicks });
  }

  onLoad() {
  }
}

export default alt.createStore(UIStore, 'UIStore');
