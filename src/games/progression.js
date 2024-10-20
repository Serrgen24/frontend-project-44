import getRandNumber from '../utils/rundNumber.js';
import startGame from '../index.js';

const gameProgressionRule = 'What number is missing in the progression?';

const getProgression = (start, n, length) => {
  const progression = [];
  progression[0] = start;
  for (let i = 1; i <= length; i += 1) {
    progression[i] = progression[i - 1] + n;
  }
  return progression;
};

const getProgressionData = () => {
  const progressionStart = 2;
  const progressionEnd = 10;
  const minProgressionElems = 5;
  const maxProgressionElems = 10;
  const start = getRandNumber();
  const n = getRandNumber(progressionStart, progressionEnd);
  const length = getRandNumber(minProgressionElems, maxProgressionElems);

  const arrOfProgression = getProgression(start, n, length);

  const randElemOfresult = getRandNumber(0, length - 1);
  const deleteCount = 1;
  const expectedAnswer = arrOfProgression.splice(randElemOfresult, deleteCount, '..').toString();
  const result = arrOfProgression.join(' ');

  return [result, expectedAnswer];
};

const startGameProgression = () => {
  startGame(gameProgressionRule, getProgressionData);
};

export default startGameProgression;
