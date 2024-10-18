import getRandNumber from '../utils/rundNumber.js';
import startGame from '../index.js';

const greetings = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getPrimeData = () => {
  const result = getRandNumber();

  const isPrime = () => {
    for (let i = 2; i < result; i += 1) {
      if (result % i === 0) {
        return false;
      }
    }
    return true;
  };

  const expectedAnswer = isPrime() ? 'yes' : 'no';

  return [result, expectedAnswer.toString()];
};

const startGamePrime = () => {
  startGame(greetings, getPrimeData);
};

export default startGamePrime;
