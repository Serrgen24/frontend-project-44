/*
import readlineSync from 'readline-sync';
import getRandomNumber from 'getrandomnumber';

import { name } from '../index.js';

let gameCount = 0;

const prime = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  const getRandNum = () => getRandomNumber(1, 100);
  const result = getRandNum();
  console.log(`Question: ${result}`);
  const userAnswer = readlineSync.question('Your answer: ');

  const isPrime = () => {
    for (let i = 2; i < result; i += 1) {
      if (result % i === 0) {
        return 'no';
      }
    }
    return 'yes';
  };
  const expectedAnswer = isPrime();

  if (expectedAnswer === userAnswer) {
    console.log('Correct!');
    gameCount += 1;
    if (gameCount !== 3) {
      prime();
    } else {
      console.log(`Congratulations, ${name}!`);
    }
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
  }
};

export default prime;
*/
