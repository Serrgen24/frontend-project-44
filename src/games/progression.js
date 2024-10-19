import getRandNumber from '../utils/rundNumber.js';
import startGame from '../index.js';

const gameProgressionRule = 'What number is missing in the progression?';

const getProgression = (progression, start, n, length) => {
  const arrayOfProgression = progression;
  arrayOfProgression[0] = start;
  for (let i = 1; i <= length; i += 1) {
    arrayOfProgression[i] = progression[i - 1] + n;
  }
  return arrayOfProgression;
};

const getProgressionData = () => {
  const progressionStart = 2;
  const progressionEnd = 10;
  const minProgressionElems = 5;
  const maxProgressionElems = 10;
  const start = getRandNumber();
  const n = getRandNumber(progressionStart, progressionEnd);
  const length = getRandNumber(minProgressionElems, maxProgressionElems);
  const progression = [];

  getProgression(progression, start, n, length);

  const randElemOfresult = getRandNumber(0, progression.length - 1);
  const deleteCount = 1;
  const expectedAnswer = progression.splice(randElemOfresult, deleteCount, '..').toString();
  const result = progression.join(' ');

  return [result, expectedAnswer];
};

const startGameProgression = () => {
  startGame(gameProgressionRule, getProgressionData);
};

export default startGameProgression;
