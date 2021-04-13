'use strict'
alert("welcome  in my bage , we will play fun game called guessing game ");
let userName=prompt("what is your name ?");
console.log(userName);

alert("Hello " +userName+ "this game will be about me ,lets start");

let fName = prompt("is my name ahmd ? pleas answer with yes or no ").toLowerCase();
console.log(fName);
if (fName=="yes"){
    alert("good answer");
    
}
else {
     alert("sorry it is wrong answer");
    }
let cars = prompt("can i drive  ? pleas answer with yes or no ").toLowerCase();
console.log(cars);
if (cars=="no"){
    alert("good answer");
}
else {
     alert("sorry it is wrong answer");
    }
    let major = prompt("is english langage my studies  ? pleas answer with yes or no ").toLowerCase();
    console.log(major);
if (major=="yes"){
    alert("good answer");
}
else {
     alert("sorry it is wrong answer");
    }

    let age = prompt("is my age 29 ? pleas answer with yes or no ").toLowerCase();
    console.log(age);
if (cars=="yes"){
    alert("good answer");
}
else {
     alert("sorry it is wrong answer");
    }

    let experens = prompt("did i have 5 years ex ? pleas answer with yes or no ").toLowerCase();
    console.log(experens);
if (cars=="yes"){
    alert("good answer");
}
else {
     alert("sorry it is wrong answer");
    }

    alert("Hello " +userName+ "this game was fun and nice to meet you");





for (let index = 0; index < 4; index++) {
   let sixthQ =prompt('guess my age ');
   console.log(sixthQ);
   if(sixthQ==29){
       alert('correct answer');
       index=89678;
   }else if(sixthQ<29){
       alert('too low');
   }else {
       alert('too high');
   }
    
}

let favCar= ['bmw','oudi'];
    
for (let i = 0 ; i<6 ; i++) {
    let seventhQ = prompt ('guess my favourite car').toLowerCase();
    for(let j=0 ; j<favCar.length;j++){
     console.log(seventhQ)

        if(seventhQ==favCar[j]){
            console.log(j)
            alert ('correct answer');
            i=500;
        }
    }
    
}




















