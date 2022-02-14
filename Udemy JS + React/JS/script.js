'use sctrict';

function showFirstMessage(text){
    console.log(text);
}

showFirstMessage("Hello");

function calc(a, b){
    return (a + b);
}

console.log(calc(1,2));


const logger = function(){
    console.log("Logger");
};

const mul = (a, b) => {return a * b};