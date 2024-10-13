import readlineSync from 'readline-sync';
import getUserName from './utils/userName.js';
import { gameEven, greetings } from './games/even.js';

let gameCount = 0;

const index = () => {
  console.log('Welcome to the Brain Games!');
  const userName = getUserName();
  console.log(`Hello, ${userName}!`);

  console.log(greetings);

  // ----------------- плохо работает -----------------
  // -Shpongle - Ineffable Mysteries from Shpongleland-
  const func = () => {
    const res = gameEven();
    const num = res[0];
    const expectedAnswer = res[1];
    console.log(`Question: ${num}`);

    // ----------------- плохо работает -----------------

    const userAnswer = readlineSync.question('Your answer: ');

    if (expectedAnswer === userAnswer) {
      console.log('Correct!');
      gameCount += 1;
      if (gameCount !== 3) {
        func();
      } else {
        console.log(`Congratulations, ${userName}!`);
      }
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
    }
  };
  func();
};

export default index;

/*
import { name } from './utils/userName.js';
import even from './games/even.js';
import calc from './games/calc.js';
import gcd from './games/gcd.js';
import progression from './games/progression.js';
import prime from './games/prime.js';

const startGame = () => {
  console.log('Welcome to the Brain Games!');
  console.log(`Hello, ${name}!`);
  even();
  calc();
  gcd();
  progression();
  prime();
};

export default startGame;
*/
