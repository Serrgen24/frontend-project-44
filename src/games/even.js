import startGame from '../index.js';
import getRandNumber from '../utils/rundNumber.js';

const greetings = 'Answer "yes" if the number is even, otherwise answer "no".';

const getEvenData = () => {
  const randNumber = getRandNumber();
  const evenDivisor = 2;

  const isEven = () => randNumber % evenDivisor === 0;
  const expectedAnswer = isEven(randNumber) ? 'yes' : 'no';

  return [randNumber, expectedAnswer];
};

const startGameEven = () => {
  startGame(greetings, getEvenData);
};

export default startGameEven;
