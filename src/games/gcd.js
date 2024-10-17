import getRandNumber from '../utils/rundNumber.js';
import index from '../index.js';

const greetings = 'Find the greatest common divisor of given numbers.';

const gameGcd = () => {
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
  index(greetings, gameGcd);
};

export default startGameGcd;
