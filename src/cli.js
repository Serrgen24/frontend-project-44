import readlineSync from 'readline-sync';
// Познакомимся и поприветствуем
const userName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};
export default userName;
