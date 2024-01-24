#!/usr/bin/env node
import greeting from '../src/cli.js';
import readlineSync from 'readline-sync';

const userName = greeting();

console.log('What is the result of the expression?');

const expression = () => {
const a = Math.round(Math.random() * 100);
const b = Math.round(Math.random() * 100);
   return(`${a} + ${b}`);
};


let mark = 0;
for (let i = 1; i <= 3; i += 1) {
    const step = expression();
    console.log(`Question ${step[0]}`);
    const answer = readlineSync.question('Answer: ');
    if (answer === step[1]) {
        console.log('Correct!');
        mark += 1;
      } if (answer !== step[1]) {
        console.log(`${answer} is wrong answer ;(. Correct answer was ${step[1]}.`);
        console.log(`Let's try again, ${userName}`);
        break;
      }
}
if (mark === 3) {
    console.log(`Congratulations, ${userName}!`);
  }