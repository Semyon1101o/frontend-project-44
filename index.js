#!/usr/bin/env node
import readlineSync from 'readline-sync';

const roundsCount = 3;

const playGame = (rule, getQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(rule);
  let correctAnswersCount = 0;

  while (correctAnswersCount < roundsCount) {
    const correctAnswer = getQuestionAndAnswer();
    console.log(`Question: ${correctAnswer[0]}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (correctAnswer[1].toString() === userAnswer) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer[1]}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default playGame;
