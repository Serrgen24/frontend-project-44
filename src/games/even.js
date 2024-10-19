import startGame from '../index.js';
import getRandNumber from '../utils/rundNumber.js';

const gameEvenRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (randNumber) => randNumber % 2 === 0;

const getEvenData = () => {
  const randNumber = getRandNumber();
  const expectedAnswer = isEven(randNumber) ? 'yes' : 'no';

  return [randNumber, expectedAnswer];
};

const startGameEven = () => {
  startGame(gameEvenRule, getEvenData);
};

export default startGameEven;
