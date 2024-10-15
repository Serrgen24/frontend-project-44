import readlineSync from 'readline-sync';
import getUserName from './utils/userName.js';

// import { gameEven, greetings } from './games/even.js';

let gameCount = 0;

const index = (greetings, gameParams) => {
  console.log('Welcome to the Brain Games!');
  const userName = getUserName();
  console.log(`Hello, ${userName}!`);

  console.log(greetings);

  // ----------------- плохо работает -----------------
  const func = () => {
    const num = gameParams[0];
    const expectedAnswer = gameParams[1];
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
