import readlineSync from 'readline-sync';
import getUserName from './utils/userName.js';

let gameCount = 0;

const index = (greetings, gameParams) => {
  console.log('Welcome to the Brain Games!');
  const userName = getUserName();
  console.log(`Hello, ${userName}!`);
  console.log(greetings);

  const game = () => {
    const [userQuestion, expectedAnswer] = gameParams();
    console.log(`Question: ${userQuestion}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (expectedAnswer === userAnswer) {
      console.log('Correct!');
      gameCount += 1;
      if (gameCount !== 3) {
        game();
      } else {
        console.log(`Congratulations, ${userName}!`);
      }
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
    }
  };
  game();
};

export default index;
