import alt from './alt';

class UIActions {
    constructor() {
      this.generateActions('click', 'save', 'load');
    }
}

export default alt.createActions(UIActions);
