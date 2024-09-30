import readlineSync from 'readline-sync';

let name = '';

const userName = () => {
  name = readlineSync.question('May I have your name? ');
  return name;
};

export default userName;