console.log('fluxxer');
const LaggyActions = require('./flux/LaggyActions');
/**
 * The object which will be renamed handles marshalling data. the idea is that
 * all actualy work gets hidden behind the webworkers.
 */
if (window.Worker) {
  const dapperWorker = require('worker!./dapper');
  const d = new dapperWorker();

  d.postMessage(2);
  d.onmessage = (e) => {
    console.log('got the message', e);
    console.log('esnding out ', e.data);
    LaggyActions.makeNextPrime(e.data);
  };

  window.transport = d;
}
