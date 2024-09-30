#!/usr/bin/env node

import readlineSync from 'readline-sync';
import even from '../src/even.js';

console.log('Welcome to the Brain Games!');
// eslint-disable-next-line import/prefer-default-export
export const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

even();
