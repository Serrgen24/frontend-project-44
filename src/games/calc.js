import getRandNumber from '../utils/rundNumber.js';
import startGame from '../index.js';

const gameCalcRule = 'What is the result of the expression?';

const getExpressionResult = (randSign, x, y) => {
  let result;
  switch (randSign) {
    case '+':
      result = x + y;
      break;
    case '-':
      result = x - y;
      break;
    case '*':
      result = x * y;
      break;
    default:
      // ничего не выполняем
  }
  return result;
};

const getCalcData = () => {
  const sign = ['+', '-', '*'];
  const arrayStartIndex = 0;
  const arrayEndIndex = 2;

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
