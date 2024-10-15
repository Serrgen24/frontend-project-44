import readlineSync from 'readline-sync';
import getUserName from './utils/userName.js';
// import { gameEven, greetings } from './games/even.js';
// import { gameCalc, greetings } from './games/calc.js';
// import { gameGcd, greetings } from './games/gcd.js';
// import { gamePrime, greetings } from './games/prime.js';
import { gameProgression, greetings } from './games/progression.js';

let gameCount = 0;

const index = () => {
  console.log('Welcome to the Brain Games!');
  const userName = getUserName();
  console.log(`Hello, ${userName}!`);

  console.log(greetings);

  // ----------------- плохо работает -----------------
  const func = () => {
    const res = gameProgression();
    const num = res[0];
    const expectedAnswer = res[1];
    console.log(`Question: ${num}`);
    // ----------------- плохо работает -----------------

    const userAnswer = readlineSync.question('Your answer: ');

    // ответ пользователя возвращает строку, поэтому пока использую == в условии
    console.log('Correct!');
    if (expectedAnswer == userAnswer) {
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
