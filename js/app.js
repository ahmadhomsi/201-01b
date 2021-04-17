'use strict'
alert("welcome  in my bage , we will play fun game called guessing game ");
let userName = prompt("what is your name ?");



alert("Hello " + userName + "this game will be about me ,lets start");

let fName = prompt("is my name ahmd ? pleas answer with yes or no ").toLowerCase();
if (fName == "yes") {
    alert("good answer");

}
else {
    alert("sorry it is wrong answer");
}

let cars = prompt("can i drive  ? pleas answer with yes or no ").toLowerCase();
if (cars == "no") {
    alert("good answer");
}
else {
    alert("sorry it is wrong answer");
}

let major = prompt("is english langage my studies  ? pleas answer with yes or no ").toLowerCase();
if (major == "yes") {
    alert("good answer");
}
else {
    alert("sorry it is wrong answer");
}

let age = prompt("is my age 29 ? pleas answer with yes or no ").toLowerCase();
if (cars == "yes") {
    alert("good answer");
}
else {
    alert("sorry it is wrong answer");
}

let experens = prompt("did i have 5 years ex ? pleas answer with yes or no ").toLowerCase();
if (cars == "yes") {
    alert("good answer");
}
else {
    alert("sorry it is wrong answer");
}

alert("Hello " + userName + "this game was fun and nice to meet you");



alert("Hello " + userName + "this game will be about me ,lets start");

let fName = prompt("is my name ahmd ? pleas answer with yes or no ").toLowerCase();

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


for (let index = 0; index < 4; index++) {
    let sixthQ = prompt('guess my age ');
    if (sixthQ == 29) {
        alert('correct answer');
        index = 89678;
    } else if (sixthQ < 29) {
        alert('too low');
    } else {
        alert('too high');
    }


}
guiss(guissMyAge);





let favCar = ['bmw', 'oudi'];

const favouriteCar = function () {
for (let i = 0; i < 6; i++) {
    let seventhQ = prompt('guess my favourite car').toLowerCase();
    for (let j = 0; j < favCar.length; j++) {

        if (seventhQ == favCar[j]) {
            alert('correct answer');
            i = 500;
        } else {
            alert('wrong answe , try again');
        }
    }
   }
   
}
favouriteCar ();




















