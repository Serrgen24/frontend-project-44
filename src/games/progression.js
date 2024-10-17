import getRandNumber from '../utils/rundNumber.js';
import index from '../index.js';

const greetings = 'What number is missing in the progression?';

const gameProgression = () => {
  const start = getRandNumber(); // начало прогрессии
  const n = getRandNumber(1, 10); // шаг прогрессии
  const length = getRandNumber(5, 10); // количество элементов прогрессии
  const progression = []; // массив прогрессии

  progression[0] = start;
  for (let i = 1; i <= length; i += 1) {
    progression[i] = progression[i - 1] + n;
  }

  const randElemOfresult = getRandNumber(0, progression.length - 1);
  const expectedAnswer = progression.splice(randElemOfresult, 1, '..').toString();

  const result = progression.join(' ');

  return [result, expectedAnswer];
};

const startGameProgression = () => {
  index(greetings, gameProgression);
};

export default startGameProgression;
