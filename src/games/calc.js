import getRandNumber from '../utils/rundNumber.js';
import startGame from '../index.js';

const greetings = 'What is the expectedAnswer of the expression?';

const getCalcData = () => {
  const sign = ['+', '-', '*'];
  const arrayStartIndex = 0;
  const arrayEndIndex = 2;

  const x = getRandNumber();
  const y = getRandNumber();
  const randSign = sign[getRandNumber(arrayStartIndex, arrayEndIndex)];
  const mathExpression = `${x} ${randSign} ${y}`;

  let result = 0;
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

  const expectedAnswer = result.toString();

  return [mathExpression, expectedAnswer];
};

const startGameCalc = () => {
  startGame(greetings, getCalcData);
};

export default startGameCalc;
