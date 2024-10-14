import getRandNum from '../utils/rundNumber.js';

const greetings = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const gamePrime = () => {
  const result = getRandNum();

  const isPrime = () => {
    for (let i = 2; i < result; i += 1) {
      if (result % i === 0) {
        return 'no';
      }
    }
    return 'yes';
  };

  const expectedAnswer = isPrime();
  
  return [result, expectedAnswer];
};

export { gamePrime, greetings };
