import index from '../index.js';

import getRandNum from '../utils/rundNumber.js';

const greetings = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameEven = () => {
  const result = getRandNum();
  const isEven = () => result % 2 === 0;
  const expectedAnswer = isEven(result) ? 'yes' : 'no';

  return [result, expectedAnswer];
};

const startGameEven = () => {
  index(greetings, gameEven());
};

export default startGameEven;

// export { gameEven, greetings };
