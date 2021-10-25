
'use strict';

//selecting elements

const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnhold = document.querySelector('.btn--hold');
const currentEl0 = document.getElementById('current--0');
const currentEl1 = document.getElementById('current--1');
const playerEl = document.querySelector('.player--0');
const playerEl1 = document.querySelector('.player--1');

//starting conditions


const scores = [0, 0];
let currentScore = 0;
let playerActive = 0;

score0El.textContent = 0;
score1El.textContent = 0;
currentEl0.innerHTML = 0;
currentEl1.innerHTML = 0;
diceEl.classList.add('hidden');



const init = function () {
    scores[1] = 0;
    scores[0] = 0;
    currentScore = 0;
    score0El.innerHTML = scores[0];
    score1El.innerHTML = scores[1];
    currentEl1.innerHTML = currentScore;
    currentEl0.innerHTML = currentScore;
    playerEl.classList.remove('player--winner');
    playerEl1.classList.remove('player--winner');
    playerEl1.classList.remove('player--active');
    playerEl.classList.add('player--active');
}
//Rolling button functionality

btnRoll.addEventListener('click', function () {
    
    const diceRoll = Math.trunc(Math.random() * 6) + 1;

    diceEl.classList.remove('hidden');
    diceEl.src = `/images/dice-${diceRoll}.png`;


    if (diceRoll !== 1) {
        currentScore += diceRoll;
        document.getElementById(`current--${playerActive}`).innerHTML = currentScore;
    } else {
        
        playerSwitch();
    }

})

// hold button functionality;


btnhold.addEventListener('click', function () {

    scores[playerActive] += currentScore;
    document.getElementById(`score--${playerActive}`).innerHTML = scores[playerActive];
    document.getElementById(`current--${playerActive}`).innerHTML = 0;
    
    if (scores[playerActive] >= 100) {
        document.getElementById(`score--${playerActive}`).innerHTML = 100;
        document.querySelector(`.player--${playerActive}`).classList.add('player--winner');
        document.querySelector(`.player--${playerActive}`).classList.remove('player--active');
        diceEl.classList.add('hidden');
        btnhold.disabled = true;
        btnRoll.disabled = true;
    } else {
        playerSwitch();
    }
})


function playerSwitch() {
    currentScore = 0;
    document.getElementById(`current--${playerActive}`).innerHTML = currentScore; 
    document.querySelector(`.player--${playerActive}`).classList.remove('player--active');
    playerActive = playerActive === 0 ? 1 : 0;
    document.querySelector(`.player--${playerActive}`).classList.add('player--active');
}

//new button functionality;

btnNew.addEventListener('click', function () {
    init();
})

