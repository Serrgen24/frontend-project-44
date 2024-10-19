import getRandNumber from '../utils/rundNumber.js';
import startGame from '../index.js';

const gamePrimeRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (randNumber) => {
  for (let i = 2; i < randNumber; i += 1) {
    if (randNumber % i === 0) {
      return false;
    }
  }
  return true;
};

const getPrimeData = () => {
  const randNumber = getRandNumber();
  const result = isPrime(randNumber) ? 'yes' : 'no';
  const expectedAnswer = result.toString();

  return [randNumber, expectedAnswer];
};

const startGamePrime = () => {
  startGame(gamePrimeRule, getPrimeData);
};

export default startGamePrime;
