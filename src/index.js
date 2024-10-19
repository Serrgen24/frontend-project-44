import readlineSync from 'readline-sync';
import getUserName from './utils/userName.js';

const gameCount = 3;

const startGame = (gameRule, getGameParams) => {
  console.log('Welcome to the Brain Games!');
  const userName = getUserName();
  console.log(`Hello, ${userName}!`);
  console.log(gameRule);

  for (let i = 0; i < gameCount; i += 1) {
    const [userQuestion, expectedAnswer] = getGameParams();
    console.log(`Question: ${userQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ');
    console.log('Correct!');

    if (userAnswer !== expectedAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
};

export default startGame;
