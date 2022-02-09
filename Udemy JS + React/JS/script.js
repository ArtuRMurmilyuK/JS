'use sctrict';

if (4 == 9) {
    console.log("ok!");
}else{
    console.log("error");
}

const num = 50;

if(num < 49){
    console.log("error");
}else if(num > 100){
    console.log("Много");
}else{
    console.log("Ok");
}

(num == 50) ? console.log("Ok") : console.log("error");

switch(num){
    case 49:
        console.log("Error");
        break;
    case 50: 
        console.log("Ok");
        break;
    default:
        console.log("Not Number");
        break;
}