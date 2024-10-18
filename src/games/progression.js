import getRandNumber from '../utils/rundNumber.js';
import startGame from '../index.js';

const greetings = 'What number is missing in the progression?';

const getProgressionData = () => {
  const start = getRandNumber(); // начало прогрессии
  const n = getRandNumber(1, 10); // шаг прогрессии от 1 до 10
  const length = getRandNumber(5, 10); // количество элементов прогрессии минимум 5, максимум 10
  const progression = [];

  const getProgression = () => {
    progression[0] = start;
    for (let i = 1; i <= length; i += 1) {
      progression[i] = progression[i - 1] + n;
    }
  };
  getProgression();

  const randElemOfresult = getRandNumber(0, progression.length - 1);
  const deleteCount = 1;
  const expectedAnswer = progression.splice(randElemOfresult, deleteCount, '..').toString();
  const result = progression.join(' ');

  return [result, expectedAnswer];
};

const startGameProgression = () => {
  startGame(greetings, getProgressionData);
};

export default startGameProgression;
