const primer = [1, 2, 3, 5, 7, 11, 13];

const isDivisible = (n) => {
  for (let i = 2; i < Math.ceil(n / 2); i++) {
    if (n % i === 0) {
      return true;
    }
  }

  return false;
};

const findPrime = (currentPrime) => {
  let curr = currentPrime;

  if (curr % 2 === 0) {
    curr = currentPrime + 1;
  }

  while (!isDivisible(curr)) {
    curr += 2;
  }

  return curr;
};

const getNthPrime = (n) => {
  if (primer[n]) {
    return primer[n];
  }

  const prime = findPrime(primer[primer.length - 1]);
  primer[n] = prime;

  return prime;
};

module.exports = {
  getNthPrime,
};
