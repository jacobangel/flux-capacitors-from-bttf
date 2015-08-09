const primer = [2, 3, 5, 7, 11, 13];

const isPrime = (n) => {
  if (n < 3) {
    return (n === 2);
  }

  for (let i = 2; i <= Math.ceil(n / 2); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};

const findNextPrime = (currentPrime) => {
  let curr = currentPrime;
  if (curr === 1) {
    return 2;
  }

  if (curr % 2 === 0) {
    curr = currentPrime + 1;
  } else {
    curr += 2;
  }

  while (!isPrime(curr)) {
    curr += 2;
  }

  return curr;
};

const getNthPrime = (n) => {
  if (primer[n - 1]) {
    return primer[n - 1];
  }

  while (primer.length < n) {
    primer.push(findNextPrime(primer[primer.length - 1]));
  }

  return primer[n - 1];
};

module.exports = {
  getNthPrime,
  findNextPrime,
  isPrime,
};
