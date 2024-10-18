import getRandNumber from '../utils/rundNumber.js';
import startGame from '../index.js';

const greetings = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getPrimeData = () => {
  const randNumber = getRandNumber();

  const isPrime = () => {
    for (let i = 2; i < randNumber; i += 1) {
      if (randNumber % i === 0) {
        return false;
      }
    }
    return true;
  };

  const result = isPrime() ? 'yes' : 'no';
  const expectedAnswer = result.toString();

  return [randNumber, expectedAnswer];
};

const startGamePrime = () => {
  startGame(greetings, getPrimeData);
};

export default startGamePrime;
