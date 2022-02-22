"use strict";

let a = 5,
    b = a;

b = b + 5;

console.log(b);

const obj = {
    a: 5,
    b: 1
};

//const copy = obj;

//copy.a = 10;

//console.log(copy);
console.log(obj);

function copy(mainObj){
    let objCopy = {};

    let key;
    for(key in mainObj){
        objCopy[key] = mainObj [key];
    }

    return objCopy;
}

const numbers ={
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNum = copy(numbers);

newNum.a = 10;
console.log(newNum);

const add = {
    d:17,
    e:20
};

console.log(Object.assign({}, add));

const oldArr = ['a', 'b', 'c'];
const newArr = oldArr.slice();

newArr[1] = 'aaa';
console.log(newArr);
console.log(oldArr);

const video = ['toutube', 'vimeo', 'tube'],
    blogs = ['word', 'live', 'blog'],
    internet = [...video, ...blogs, 'face'];

console.log(internet);

function log(a,b,c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const numb = [2,5,7];

log(...numb);

const array = ["a", "b"];

const newArr = [...array];