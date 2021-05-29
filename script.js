'use strict';
// let modal = document.querySelector('.modal');
let guessNumber = document.querySelector('.guess-number');
let pigGame = document.querySelector('.pig-game');
let openModal = document.querySelectorAll('.show-modal');
let closeModal = document.querySelectorAll('.close-modal');
let overlay = document.querySelector('.overlay');

let NumberGuess = function () {
  guessNumber.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

let PigGame = function () {
  pigGame.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

let closeWindow = function () {
  overlay.classList.add('hidden');
  pigGame.classList.add('hidden');
  guessNumber.classList.add('hidden');
};

openModal[0].addEventListener('click', NumberGuess);
openModal[1].addEventListener('click', PigGame);

for (let index = 0; index < closeModal.length; index++) {
  closeModal[index].addEventListener('click', closeWindow);
}

overlay.addEventListener('click', closeWindow);

document.addEventListener('keydown', function (event) {
  console.log(event.key);
  if (
    (event.key === 'Escape' && !guessNumber.classList.contains('hidden')) ||
    !pigGame.classList.contains('hidden')
  ) {
    closeWindow();
    console.log('key pressed');
  }
});
