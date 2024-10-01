import readlineSync from 'readline-sync';
// Познакомимся и поприветствуем

const userName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};
export default userName;
