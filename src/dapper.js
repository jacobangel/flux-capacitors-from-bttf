/**
 * The actual worker dude.
 */
onmessage = function(e) {
  console.log('Message received from main script', e);
  route(e.data);
};

const PrimeUtils = require('./utils/PrimeUtils');

const nextPrime = (data) => {
  const result = PrimeUtils.getNthPrime(data);
  return result;
};

const registeredAction = {
  'UIActions.getPrime': nextPrime,
};

const route = (data) => {
  console.log('received');
  if (!registeredAction[data.action]) {
    console.log('ignored action');
  } else {
    const result = registeredAction[data.action].call(null, data.data);
    postMessage({
      data: result,
      action: data.action,
      source: 'worker', // add port or id...
    });
  }
};
