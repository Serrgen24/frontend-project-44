import readlineSync from 'readline-sync';
import getRandomNumber from 'getrandomnumber';

import { name } from '../index.js';

let gameCount = 0;

const gcd = () => {
  console.log('Find the greatest common divisor of given numbers.');
  const getRandNum = () => getRandomNumber(1, 20);
  const x = getRandNum();
  const y = getRandNum();
  const result = `${x} ${y}`;

  console.log(`Question: ${result}`);
  const userAnswer = Number(readlineSync.question('Your answer: '));

  const arr = [];
  for (let i = 1; i <= Math.min(x, y); i += 1) {
    if (x % i === 0 && y % i === 0) {
      arr.push(i);
    }
  }
  const expectedAnswer = arr.at(-1);

  if (expectedAnswer === userAnswer) {
    console.log('Correct!');
    gameCount += 1;
    if (gameCount !== 3) {
      gcd();
    } else {
      console.log(`Congratulations, ${name}!`);
    }
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
  }
};

export default gcd;
