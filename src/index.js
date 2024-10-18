import readlineSync from 'readline-sync';
import getUserName from './utils/userName.js';

let gameCount = 0;

const startGame = (greetings, gameParams) => {
  console.log('Welcome to the Brain Games!');
  const userName = getUserName();
  console.log(`Hello, ${userName}!`);
  console.log(greetings);

  const checkGameConditions = () => {
    const [userQuestion, expectedAnswer] = gameParams();
    console.log(`Question: ${userQuestion}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (expectedAnswer === userAnswer) {
      console.log('Correct!');
      gameCount += 1;
      if (gameCount !== 3) {
        checkGameConditions();
      } else {
        console.log(`Congratulations, ${userName}!`);
      }
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
    }
  };
  checkGameConditions();
};

export default startGame;
