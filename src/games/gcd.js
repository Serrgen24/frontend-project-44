import getRandNumber from '../utils/rundNumber.js';
import startGame from '../index.js';

const gameGcdRule = 'Find the greatest common divisor of given numbers.';

const getGcd = (x, y) => {
  for (let i = Math.min(x, y); i >= 1; i -= 1) {
    if (x % i === 0 && y % i === 0) {
      return i;
    }
  }
  return 1;
};

const getGcdData = () => {
  const x = getRandNumber();
  const y = getRandNumber();
  const result = `${x} ${y}`;

  const expectedAnswer = getGcd(x, y).toString();

  return [result, expectedAnswer];
};

const startGameGcd = () => {
  startGame(gameGcdRule, getGcdData);
};

export default startGameGcd;
