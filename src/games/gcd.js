import getRandNumber from '../utils/rundNumber.js';
import startGame from '../index.js';

const gameGcdRule = 'Find the greatest common divisor of given numbers.';

const getGcd = (x, y) => {
  let answer = 0;
  for (let i = 1; i <= Math.min(x, y); i += 1) {
    if (x % i === 0 && y % i === 0) {
      answer = i;
    }
  }
  return answer;
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
