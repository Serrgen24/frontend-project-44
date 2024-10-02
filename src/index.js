import { name } from './utils/userName.js';
import even from './games/even.js';
import calc from './games/calc.js';

console.log('Welcome to the Brain Games!');
console.log(`Hello, ${name}!`);
even();
calc();

export { name };
