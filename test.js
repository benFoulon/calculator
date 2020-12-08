'use strict';

/* Création des blocs */

const calc = document.createElement('div');
calc.className = 'calculator';
calc.id = 'calculator';
document.body.append(calc);

const calcDisplay = document.createElement('div');
calcDisplay.className = "output";
calcDisplay.innerHTML="";
calc.prepend(calcDisplay);


/* Création des bouton */

function btnNum(text, className){
    const btn = document.createElement('button');
    btn.innerHTML = text;
    btn.className = className;
    calc.append(btn);
}

btnNum('+','btn operator');
btnNum('-','btn operator');
btnNum('*','btn operator');
btnNum('/', 'btn operator');
btnNum('7', 'btn num');
btnNum('8', 'btn num');
btnNum('9', 'btn num');
btnNum('4', 'btn num');
btnNum('5', 'btn num');
btnNum('6', 'btn num');
btnNum('1', 'btn num');
btnNum('2', 'btn num');
btnNum('3', 'btn num');
btnNum('0', 'btn num');
btnNum('.', 'btn num');
btnNum('AC', 'btn clear');
btnNum('=',"btn equal-btn");


/* Fonctions de calcul */
const clear = document.querySelector('.clear');
const equal = document.querySelector('.equal-btn');


calc.addEventListener('click', getResult);

function getResult(event){
    calcDisplay.innerHTML += event.target.textContent;
    console.log(eval(calcDisplay.innerHTML));
}

