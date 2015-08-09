import alt from './alt';

class UIActions {
  constructor() {
    this.generateActions('click', 'getPrime', 'save', 'load');
  }
}

export default alt.createActions(UIActions);
