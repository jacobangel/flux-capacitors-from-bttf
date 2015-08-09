const chai = require('chai');
const expect = chai.expect;
const should = chai.should();

const {
  getNthPrime,
  findNextPrime,
  isPrime,
} = require('../PrimeUtils');


describe('Prime nums', () => {
  describe('#isPrime()', () => {
    it('Catches small primes', () => {
      expect(isPrime(1)).to.be.false;
      expect(isPrime(2)).to.be.true;
      expect(isPrime(3)).to.be.true;
      expect(isPrime(4)).to.be.false;
      expect(isPrime(5)).to.be.true;
      expect(isPrime(6)).to.be.false;
    });

    it('Catches large primes', () => {
      expect(isPrime(102079)).to.be.true;
      expect(isPrime(102763)).to.be.true;
      expect(isPrime(1031712)).to.be.false;
    });

    it('Fails on negative numbers', () => {
      expect(isPrime(-102763)).to.be.false;
    });
  });

  describe('#findNextPrime', () => {
    it('finds the right primes with little primes', () => {
      expect(findNextPrime(1)).to.equal(2);
      expect(findNextPrime(2)).to.equal(3);
      expect(findNextPrime(3)).to.equal(5);
    });

    it('finds the right primes with larger ones', () => {
      expect(findNextPrime(11)).to.equal(13);
      expect(findNextPrime(12)).to.equal(13);
      expect(findNextPrime(102072)).to.equal(102077);
      expect(findNextPrime(102078)).to.equal(102079);
    });
  });

  describe('#getNthPrime', () => {
    it('finds a series of nth primes', () => {
      expect(getNthPrime(1)).to.equal(2);
      expect(getNthPrime(2)).to.equal(3);
      expect(getNthPrime(3)).to.equal(5);
      expect(getNthPrime(4)).to.equal(7);
      expect(getNthPrime(168)).to.equal(997);
    });
  });
});
