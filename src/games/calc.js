import getRandNumber from '../utils/rundNumber.js';
import startGame from '../index.js';

const greetings = 'What is the result of the expression?';

const getCalcData = () => {
  const sign = ['-', '+', '*'];
  const randSign = sign[getRandNumber(0, 2)];
  const result = `${getRandNumber()} ${randSign} ${getRandNumber()}`;
  // eslint-disable-next-line no-eval
  const expectedAnswer = eval(result).toString();

  return [result, expectedAnswer];
};

const startGameCalc = () => {
  startGame(greetings, getCalcData);
};

export default startGameCalc;
