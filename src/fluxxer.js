console.log('fluxxer');
/**
 * The object which will be renamed handles marshalling data. the idea is that
 * all actualy work gets hidden behind the webworkers.
 */
if (window.Worker) {
  const dapperWorker = require('worker!./dapper');
  const d = new dapperWorker();
  d.postMessage({hello: 'world'});
  d.onmessage = (e) => console.log('got the message');
}
