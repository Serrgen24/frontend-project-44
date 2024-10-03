import readlineSync from 'readline-sync';
import getRandomNumber from 'getrandomnumber';

import { name } from '../index.js';

let gameCount = 0;

const progression = () => {
  console.log('What number is missing in the progression?');

  const start = getRandomNumber(1, 20); // начало прогрессии
  const n = getRandomNumber(1, 10); // шаг прогрессии
  const length = getRandomNumber(5, 10); // количество элементов прогрессии
  const arr = []; // массив прогрессии

  arr[0] = start;
  for (let i = 1; i <= length; i += 1) {
    arr[i] = arr[i - 1] + n;
  }

  const rundElemOfArr = getRandomNumber(0, arr.length - 1);
  const expectedAnswer = Number(arr.splice(rundElemOfArr, 1, '..'));

  console.log(`Question: ${arr}`);

  const userAnswer = Number(readlineSync.question('Your answer: '));

  if (expectedAnswer === userAnswer) {
    console.log('Correct!');
    gameCount += 1;
    if (gameCount !== 3) {
      progression();
    } else {
      console.log(`Congratulations, ${name}!`);
    }
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
  }
};

export default progression;
