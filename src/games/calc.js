import getRandNumber from '../utils/rundNumber.js';
import startGame from '../index.js';

const gameCalcRule = 'What is the result of the expression?';

const getExpressionResult = (randSign, x, y) => {
  switch (randSign) {
    case '+':
      return x + y;
    case '-':
      return x - y;
    case '*':
      return x * y;
    default:
      throw new Error(`Unknown order state: '${(randSign, x, y).state}'!`);
  }
};

const getCalcData = () => {
  const sign = ['+', '-', '*'];
  const arrayStartIndex = 0;
  const arrayEndIndex = sign.length - 1;

  const x = getRandNumber();
  const y = getRandNumber();
  const randSign = sign[getRandNumber(arrayStartIndex, arrayEndIndex)];
  const mathExpression = `${x} ${randSign} ${y}`;

  const expectedAnswer = getExpressionResult(randSign, x, y).toString();

  return [mathExpression, expectedAnswer];
};

const startGameCalc = () => {
  startGame(gameCalcRule, getCalcData);
};

export default startGameCalc;
