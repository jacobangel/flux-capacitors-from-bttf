import alt from './alt';


class LaggyActions {
    constructor() {
      this.createActions('click', 'save', 'load');
    }
}

export default alt.createActions(LaggyActions);
