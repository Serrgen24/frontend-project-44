import getRandNumber from '../utils/rundNumber.js';
import index from '../index.js';

const greetings = 'What is the result of the expression?';

const gameCalc = () => {
  const sign = ['-', '+', '*'];
  const randSign = sign[getRandNumber(0, 2)];
  const result = `${getRandNumber()} ${randSign} ${getRandNumber()}`;
  // eslint-disable-next-line no-eval
  const expectedAnswer = eval(result).toString();

  return [result, expectedAnswer];
};

const startGameCalc = () => {
  index(greetings, gameCalc);
};

export default startGameCalc;
