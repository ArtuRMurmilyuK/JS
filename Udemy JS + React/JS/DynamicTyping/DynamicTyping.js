"use strict";

console.log(typeof(String(null)));

console.log(typeof(5 + ''));

const num = 5;

console.log("https://googlePhoto/" + num);

const fontSize = 26 + 'px';

console.log(typeof(Number('4')));

let answ = +prompt("Hello", "");

let switcher = null;

if(switcher){
    console.log('working...');
}

switcher = 1;

if(switcher){
    console.log('working...');
}

console.log(typeof(Boolean('4')));

console.log(typeof(!!"444"));