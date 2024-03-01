// let books = 7;
// alert(books);

// let country = 'Italy';
// alert(country);

// let messages = 100;
// messages = 200;
// messages = 500;
// console.log(messages);

// let followers = 1200;
// followers = 1334;
// followers = 3000;
// console.log(followers);

// let tomatoes = 4;
// let cucumbers = 3;
// let milk = 6;
// let cheese = 7;
// let wine = 12;
// let sum = tomatoes + cucumbers + milk + cheese + wine;
// console.log(sum);

// let message = "Hello Steve!";
// let text = " I hope you like it here!";
// alert(message + text);

// let groceries = 100;
// let clothes = 30;
// let toys = 20;
// let total = groceries + clothes + toys;
// alert(result = `You spent ${total} dollars.`);

//homework#2 modul 2
// let question = prompt ('What is your first name?');
// let questionOne = prompt('What is your last name?');
// let questionTwo = prompt('Where are you from?');
// alert(`My name is ${question}  ${questionOne}, I am from ${questionTwo}`);

//homework#3 modul 2
// let user = prompt('what is your name?');
// let year = prompt ('what year were you born?');
// alert (`My name is ${user}. I was born in ${year}`);

//homework#4
// function age(){
//    let user = prompt('How old are you?');
//    alert(`You are ${user} years old.`);
// }

// age();

//homework#6
// function calculateAge(){
//     let question = prompt(`How old are you?`);
//     let answer = question * 12;
//     alert(`You are ${answer} months old`);
// }

// calculateAge();

const listParent = document.querySelector('.list');

const elementTwo = document.createElement('li');
elementTwo.innerText = 'Two';
elementTwo.classList.add('.header');

const elementThree = document.createElement('li');
elementThree.innerText = 'Three';
elementThree.classList.add('.header');

listParent.appendChild(elementTwo);
listParent.appendChild(elementThree);

const button = document.querySelector('.btn');

button.addEventListener('click', function(){
    document.body.style.backgroundColor = 'orange';
})