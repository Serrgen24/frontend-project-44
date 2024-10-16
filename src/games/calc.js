import getRandomNumber from 'getrandomnumber';
import getRandNum from '../utils/rundNumber.js';
import index from '../index.js';

const greetings = 'What is the result of the expression?';

const gameCalc = () => {
  const sign = ['-', '+', '*'];
  const randSign = sign[getRandomNumber(0, 2)];
  const result = `${getRandNum()} ${randSign} ${getRandNum()}`;
  // eslint-disable-next-line no-eval
  const expectedAnswer = eval(result);

  return [result, expectedAnswer];
};

const startGameCalc = () => {
  index(greetings, gameCalc);
};

export default startGameCalc;
