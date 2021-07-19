
'use strict';

//selecting elements

const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnhold = document.querySelector('.btn--hold');

//starting conditions

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

//Rolling button functionality

btnRoll.addEventListener('click', () => {
// 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

// 2. display the dice 
    diceEl.classList.remove('hidden');
    diceEl.src = `/images/dice-${dice}.png`;
// 3. check for rolled 1: if true, switch to the next player
})