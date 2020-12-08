'use strict';

export class Calculator{
    constructor(){

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

btnNum('+','operator');
btnNum('-','operator');
btnNum('x','operator');
btnNum('/', 'operator');
btnNum('7', 'num');
btnNum('8', 'num');
btnNum('9', 'num');
btnNum('4', 'num');
btnNum('5', 'num');
btnNum('6', 'num');
btnNum('1', 'num');
btnNum('2', 'num');
btnNum('3', 'num');
btnNum('0', 'num');
btnNum('.', 'num');
btnNum('AC', 'clear');
btnNum('=',"equal-btn");

}

}
