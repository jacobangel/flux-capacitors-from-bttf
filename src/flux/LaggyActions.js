import alt from './alt';


class LaggyActions {
  constructor() {
    this.generateActions('click', 'save', 'load');
  }

  makeNextPrime(n) {
    console.log('yay');
    window.transport.postMessage({
      payload: n, action: 'MAKE_NEXT_PRIME'
    });
  }
}

export default alt.createActions(LaggyActions);
