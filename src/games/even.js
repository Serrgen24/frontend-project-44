import startGame from '../index.js';
import getRandNumber from '../utils/rundNumber.js';

const greetings = 'Answer "yes" if the number is even, otherwise answer "no".';

const getEvenData = () => {
  const result = getRandNumber();
  const isEven = () => result % 2 === 0;
  const expectedAnswer = isEven(result) ? 'yes' : 'no';

  return [result, expectedAnswer];
};

const startGameEven = () => {
  startGame(greetings, getEvenData);
};

export default startGameEven;
