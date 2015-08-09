import Alt from 'alt'

const alty = new Alt();
/**
 * The object which will be renamed handles marshalling data. the idea is that
 * all actualy work gets hidden behind the webworkers.
 */
const inWebworker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
if (window.Worker && !inWebworker) {
  console.log('initialize');
  window.transport.onmessage = (e) => {
    console.log(e);
    const pl = e.data;

    alty.dispatch(pl.action, pl.data, {source: 'worker'});
  };

  alty.dispatcher.register((event) => {
    console.log(event);
    if (event.data && event.data.source !== 'worker' && event.details.source !== 'worker') {
      console.log('passing to wokrer');
      window.transport.postMessage(event);
    } else {
      console.log('ignoring worker event');
    }
  });
}

export default alty;
