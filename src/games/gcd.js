import getRandNum from '../utils/rundNumber.js';

const greetings = 'Find the greatest common divisor of given numbers.';

const gameGcd = () => {
  const x = getRandNum();
  const y = getRandNum();
  const result = `${x} ${y}`;

  const arr = [];
  for (let i = 1; i <= Math.min(x, y); i += 1) {
    if (x % i === 0 && y % i === 0) {
      arr.push(i);
    }
  }

  const expectedAnswer = arr.at(-1);

  return [result, expectedAnswer];
};

export { gameGcd, greetings };
