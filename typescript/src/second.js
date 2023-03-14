"use strict";
//var age = 30;
// how to compile the all ts file in the folder structure.
// use tsc --init command.
// then tsc --watch -> continously tracking the change the of the file.
//console.log("we are trying to compile all file in the folder.");
// const myName = "kiran";
// Arrow function
/*
var added = (a: number, b: number) => a + b;

const printOutput = (a: string | number) => void = output => console.log(output);

const button = document.querySelector('button');

if(button){
    button.addEventListener('click', event => console.log(event) );
}
printOutput(added(2,2));

const hobbies = ['sport', 'cooking'];
const activehobbies = ['hiking', ...hobbies];

activehobbies.push(...hobbies);

const person = {
name: 'max',
age: 30
};

const cpPerson  = {...person};
const pront = (...numbers: number[] => {
return numbers.reduce((result2, result1) =>{
    return result2 + result1;
}, 0);
};

const addNumber = pront(5,7,8,5);
console.log(pront);

// let and const both have block scope.
// console.log(added(3,3));

// if(age >20){
//     var old= true;
//     console.log(old);
    
// }
*/
// square bracket array .
const arr = ['Apple', 'Ball', 'Cat'];
// syntax of generic array. 
const A = ['Akashay', 'Yash', 'Kiran'];
A.push('Swapnil');
console.log(arr, A);
