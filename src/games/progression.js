/* eslint-disable linebreak-style */
import readlineSync from 'readline-sync';
import getRandomNumber from 'getrandomnumber';

const progression = () => {
  console.log('Find the greatest common divisor of given numbers.');

  const progressionArr = []; // массив прогрессии
  const progressionStart = getRandomNumber(1, 100); // начало прогрессии с:
  const progressionN = getRandomNumber(1, 20); // шаг прогрессии
  const progressionLength = getRandomNumber(5, 15); // количество элементов прогрессии
  let count = 1;

  const func = () => {
    progressionArr.push(progressionStart + progressionN);
    if (count !== progressionLength) {
      count += 1;
      func();
    }
    console.log(progressionArr);
  };
  console.log(progressionArr);
};

progression();

export default progression;
