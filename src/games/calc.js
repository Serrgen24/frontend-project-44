import readlineSync from 'readline-sync';
import getRandomNumber from 'getrandomnumber';

import { name } from '../index.js';

let gameCount = 0;

const calc = () => {
  console.log('What is the result of the expression?');
  const sign = ['-', '+', '*'];
  const randSign = sign[getRandomNumber(0, 2)];
  const getRandNum = () => getRandomNumber(1, 20);
  const result = `${getRandNum()} ${randSign} ${getRandNum()}`;
  const expectedAnswer = eval(result);

  console.log(`Question: ${result}`);
  const userAnswer = Number(readlineSync.question('Your answer: '));

  if (expectedAnswer === userAnswer) {
    console.log('Correct!');
    gameCount += 1;
    if (gameCount !== 3) {
      calc();
    } else {
      console.log(`Congratulations, ${name}!`);
    }
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
  }
};
export default calc;
