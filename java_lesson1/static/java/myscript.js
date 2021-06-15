let myName = "Neil Tarar";
let myAge = 34;
const myHometown = "Syney, Australia";

let number = 1;
number += 1;

console.log("My name is "+myName+" and I am "+myAge+" years old.");
console.log("1 + 1  is " + number);
console.log(typeof(myHometown));

const luckyNumbers = [13, 42, 7, 28];
luckyNumbers[0] = 99;
luckyNumbers[2] = luckyNumbers[0] - luckyNumbers[2];
console.log(luckyNumbers[2]);
console.log(luckyNumbers);

let favoriteFoods = ["Bacon & Egg Roll","Eggs Benedict", "Tost", "Coffee"]

favoriteFoods.push("Tea", "Hamburger");
console.log(favoriteFoods);
favoriteFoods.pop(1);
console.log(favoriteFoods.length);

let aboutMe = {
    name : "Anil",
    age : 34,
    address: "6/3 Rayner St, Lilyfield, NSW 2040",
    favouriteLanguages: [
        "Python", 
        "C++",
        "JavaScript"
    ]
}

console.log(aboutMe.favouriteLanguages[0]);

const aboutMe_2 = {};
aboutMe_2.name = "Neil";
aboutMe_2.age = 34;

console.log("Hello! My name is " + aboutMe_2.name + " and I am " + aboutMe_2.age + " years old.")

const breakfast = ["Biscuits and Gravy", "Pancakes", "Huevos Rancheros"];

console.log(breakfast[breakfast.length - 1]);
breakfast.pop();
console.log(breakfast[breakfast.length - 1]);
breakfast.pop();
console.log(breakfast[breakfast.length - 1]);
breakfast.pop();

const player = {
    health: 50,
    points: 750
  }
  player.health = 0;
  console.log(player.health);

  const choices = [
    "R", 
    "P", 
    "S"
];

let compChoice = 
choices[Math.trunc(Math.random()*choices.length)];

console.log(compChoice);