import readlineSync from 'readline-sync';
import getRandomNumber from 'getrandomnumber';

import { name } from '../bin/brain-games.js';

let count = 0;

const even = () => {
  const greetings = 'Answer "yes" if the number is even, otherwise answer "no".';
  const randNum = getRandomNumber(1, 100);
  const isEven = () => randNum % 2 === 0;
  const expectedAnswer = isEven(randNum) ? 'yes' : 'no';

  console.log(greetings, `\nQuestion: ${randNum}`);
  const userAnswer = readlineSync.question('Your answer: ');

  if (expectedAnswer === userAnswer) {
    console.log('Correct!');
    count += 1;
    if (count !== 3) {
      even();
    } else {
      console.log(`Congratulations, ${name}!`);
    }
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'. \nLet's try again, ${name}!`);
  }
};

export default even;
