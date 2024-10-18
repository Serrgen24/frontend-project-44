import getRandNumber from '../utils/rundNumber.js';
import startGame from '../index.js';

const greetings = 'Find the greatest common divisor of given numbers.';

const getGcdData = () => {
  const x = getRandNumber();
  const y = getRandNumber();
  const result = `${x} ${y}`;
  const arr = [];

  const getGcd = () => {
    for (let i = 1; i <= Math.min(x, y); i += 1) {
      if (x % i === 0 && y % i === 0) {
        arr.push(i);
      }
    }
    return arr;
  };
  getGcd();

  const expectedAnswer = arr.at(-1).toString();

  return [result, expectedAnswer];
};

const startGameGcd = () => {
  startGame(greetings, getGcdData);
};

export default startGameGcd;
