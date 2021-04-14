'use strict'
alert("welcome  in my bage , we will play fun game called guessing game ");
let userName = prompt("what is your name ?");
console.log(userName);

alert("Hello " + userName + "this game will be about me ,lets start");

let fName = prompt("is my name ahmd ? pleas answer with yes or no ").toLowerCase();
console.log(fName);
const chickName = function (myNAME) {

    if (fName == "yes") {
        alert("good answer");

    }
    else {
        alert("sorry it is wrong answer");
    }

}
chickName(fName);

let cars = prompt("can i drive  ? pleas answer with yes or no ").toLowerCase();
console.log(cars);
const driveCar = function (myDrive) {
    if (cars == "no") {
        alert("good answer");
    }
    else {
        alert("sorry it is wrong answer");
    }

}
driveCar(cars);

let major = prompt("is english langage my studies  ? pleas answer with yes or no ").toLowerCase();
console.log(major);
const studyMajor = function (myMajor) {
    if (major == "yes") {
        alert("good answer");
    }
    else {
        alert("sorry it is wrong answer");
    }

}

studyMajor(major);

let age = prompt("is my age 29 ? pleas answer with yes or no ").toLowerCase();
console.log(age);
const older = function (myAge) {
    if (age == "yes") {
        alert("good answer");
    }
    else {
        alert("sorry it is wrong answer");
    }

}

older(age);


let experience = prompt("did i have 5 years ex ? pleas answer with yes or no ").toLowerCase();
console.log(experience);
const workexperience = function (myExperience) {
    if (experience == "yes") {
        alert("good answer");
    }
    else {
        alert("sorry it is wrong answer");
    }

    alert("Hello " + userName + "this game was fun and nice to meet you");


}

workexperience(experience);

let guissMyAge = prompt('guess my age ');
console.log(guissMyAge);
const guiss = function (howOld) {

    for (let index = 0; index < 4; index++) {

        if (guissMyAge == 29) {
            alert('correct answer');
            index = 89678;
        } else if (guissMyAge < 29) {
            alert('too low');
        } else {
            alert('too high');
        }

    }

}
guiss(guissMyAge);





let favCar = ['bmw', 'oudi'];
let guissMyCar = prompt('guess my favourite car').toLowerCase();

const favouriteCar = function (myCar) {

    for (let i = 0; i < 6; i++) {
        console.log (i);


        for (let j = 0; j < favCar.length; j++) {
            console.log(guissMyCar);

            if (guissMyCar == favCar[j]) {
                console.log(j);
                alert('correct answer');
                i = 500;
            }
        }

    }


}
favouriteCar (favCar);




















