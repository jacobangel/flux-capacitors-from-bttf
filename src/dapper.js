/**
 * The actual worker dude.
 */
onmessage = function(e) {
  // Route things out.
  // route (e)
  console.log('Message received from main script', e);
  route(e.data);
};

const UIActions = require('./flux/UIActions');

const PrimeUtils = require('./utils/PrimeUtils');

const nextPrime = (data) => {
  const result = PrimeUtils.getNthPrime(data);
  postMessage(result);
};

const registeredAction = {
  'MAKE_NEXT_PRIME': nextPrime,
};

const route = (data) => {
  if (!registeredAction[data.action]) {
    postMessage(data);
  } else {
    registeredAction[data.action].call(null, data.payload);
  }
};
