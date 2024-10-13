import readlineSync from 'readline-sync';

const getUserName = () => readlineSync.question('May I have your name? ');

export default getUserName;
