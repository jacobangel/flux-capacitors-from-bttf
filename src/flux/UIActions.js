import alt from './alt';

class UIActions {
  constructor() {
    this.generateActions('click', 'save', 'load');
  }

  getPrime(n) {
    window.transport.postMessage({
      payload: n, action: 'MAKE_NEXT_PRIME'
    });
  }
}

export default alt.createActions(UIActions);
