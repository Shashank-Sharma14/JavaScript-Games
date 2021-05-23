'use strict';

let secrateNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  let checkNumber = Number(document.querySelector('.guess').value);

  if (!checkNumber) {
    document.querySelector('.message').textContent = '⛔ No Number!';
  } else if (score <= 1) {
    document.querySelector('.message').textContent = '🙁 Game Over! You Loose';
    document.querySelector('.score').textContent = score - 1;
  } else if (checkNumber !== secrateNumber) {
    document.querySelector('.message').textContent =
      checkNumber > secrateNumber ? '🙄 Too High!' : '🙄 Too Low!';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (checkNumber === secrateNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secrateNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.getElementById('disable').disabled = true;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
});

//Reset Button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secrateNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = score;
  document.getElementById('disable').disabled = false;
});
