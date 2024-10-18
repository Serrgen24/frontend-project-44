// По умолчанию случайное число от 1 до 30

const getRandNumber = (min = 1, max = 30) => {
  const randNumber = (Math.floor(Math.random() * (max - min + 1)) + min);
  return randNumber;
};

export default getRandNumber;
