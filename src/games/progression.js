import getRandomNumber from 'getrandomnumber';
import getRandNum from '../utils/rundNumber.js';
import index from '../index.js';

const greetings = 'What number is missing in the progression?';

const gameProgression = () => {
  const start = getRandNum(); // начало прогрессии
  const n = getRandomNumber(1, 10); // шаг прогрессии
  const length = getRandomNumber(5, 10); // количество элементов прогрессии
  const result = []; // массив прогрессии

  result[0] = start;
  for (let i = 1; i <= length; i += 1) {
    result[i] = result[i - 1] + n;
  }

  const randElemOfresult = getRandomNumber(0, result.length - 1);
  const expectedAnswer = Number(result.splice(randElemOfresult, 1, '..'));

  return [result, expectedAnswer];
};

const startGameProgression = () => {
  index(greetings, gameProgression);
};

export default startGameProgression;
