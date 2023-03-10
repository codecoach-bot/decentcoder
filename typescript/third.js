"use strict";
/*
let BooleanValue: boolean = false;
console.log(BooleanValue);

let empName: string = "kiran bhoi";
let empId: number = 123;

console.log(`${empName} You have an experiece and your id is: ${empId}`);

let tempNull: void; // void return the undefined value.
let temp: any;  //  any data type can access any type of the data.


function helloUser(){
    alert("Hello...Count down is started..."+ tempNull);
}
helloUser();

// Array can be written in two ways .
let list: number[] = [1,2,3]; // by using [] bracket

let list1: Array<number> = [1,2,3];  // generic type.

//classes
class Student{
     roll: number;
     Uname: string;
    constructor(n: number, s: string ){
        this.roll = n;
        this.Uname = s;

    }
    details(){
        console.log(this.roll + " "+ this.Uname);
    }
}

let obj = new Student(12, "Gauresh");

obj.details();
console.log(obj);


//anonymous function
let sum = function(a: number, b: number): number{
    return a+b;
}
*/
/*
// Generic function we can assign diff data type in the one function and return diff data type.

function identity<T>(arg:T):T{
    return arg;
}

let output = identity<string>("Palavi");
let output1 = identity<number>(12);

console.log(output+ " "+ output1);

var a = null;
console.log(a);
console.log(typeof(a)); // it is return the object:

var b;
console.log(b);
*/
/*
// var scope globle scope we can use other function as well ...

function a(){
    var x =30;
    return function b(){
        var y = x +10;
        return y;
    }
    
}

var b = a(); // return the function b()
var c =b();
console.log(c);
*/
/*
function f(){

    var Y =50;  // globle scope in the function only.
    if(true){
        var X = 10;
        console.log(Y);
        console.log(X);

    }
console.log(X);
console.log(Y);

}
f();
// console.log(X);
// console.log(Y);
*/
/*
// ternary operator

let naum = 3;

let sam = (naum>2)? true: false;
console.log(sam);

*/
/*
// object declaration
var student: {
    name: string;
    roll: number;
};
//object initialization clear..
student = {
    name:"kiran",
    roll: 123

}
*/
/*
//type inference: compiler choose one sutaible algoritham for that type we check that

function piu(x:number, y:string){
    return x + y;

}
let mau:string =  piu(12, "kiran");
console.log(mau);

*/
/*
// Arrays

var array1: string[] = ["Apple", "ball", "cat", "dog"];
var array2: Array<number> = [12,33,44,56,88];
console.log(array1[0]);
console.log(array2[2]);

console.log(array1);
console.log(array2);
array1.push("sid");
console.log(array1.length);
console.log(array1.concat(array2)); // type is not compactible

    console.log(array1.fill("pallavi"));
    
  //  console.log(array1.findIndex());

const index = array2.findIndex(array2=> array2 == 12);
console.log("array index of my element :"+ index);


// multi-Dimension

var mArray: number[][] = [[1,2,3],[11,22,33]];

console.log(mArray[1][1]);
*/
// creating the array object 
let newArray = new Array("Javascript", "manisha", "kiran ", "201", "407");
// for(var i = 0; i<=newArray.length; i++){
//     console.log(newArray[i]);
// }
//let song:any;
// it is like foreach loop:
// for(song in newArray){
//     console.log(newArray[song]);
// }
/*

//passing array into the function.

let song:any;
function manisha(newArray:string[]){
    for(song in newArray){
         console.log(newArray[song]);
        }
}

manisha(newArray);
*/
/*
let arr1 = [5,1,2,3];
let arr2 = [11,22,33];

// create new array from existing array:

let copyArray = [...arr1];
console.log("CopiedArray: "+ copyArray);

//creating new array from existing one with additional elements

let newArray1 = [...arr1,4,5,6,7];
console.log("newArray : "+ newArray1);

// merging of arrays
let mergeArray = [...arr1, ...arr2];
console.log("new merge array: "+ mergeArray);

console.log(arr1.includes(1));
console.log(arr1.join("K")); // join method adding the separator bet the array values...

console.log(arr1.reverse());
console.log(arr1.map(Math.random));
console.log(mergeArray.sort());
console.log(arr1.sort());  // sorting the array accending order...

console.log(arr1.toString()); // its return the string values.

console.log(arr1.slice());

*/
/*
let arrTuple = [101, "kiran", 102, "pallavi"];  // we can assing diff data type in tuple.
//arrTuple = [];

function anyTuple(arrTuple:any[]){
    for(let i=0; i<arrTuple.length; i++ ){
        console.log(arrTuple[i]);
    }
}

anyTuple(arrTuple);

let[emp, student, emp1, student1] = arrTuple;

console.log(emp);
console.log(student);
console.log(emp1);
console.log(student1);

//console.log(arrTuple);

*/
/*
// Union : It is use for differet type of data in the union...


// let uniontype: string|number;
// uniontype = "mani";
// console.log(uniontype);
// uniontype = 10;
// console.log(uniontype);

function Adding(uniontype: string|number){
    if(uniontype === 123){
        console.log("your are printing the number: "+ uniontype);
    }else if(uniontype === "kiran") {
        console.log("You are on the right track.."+uniontype);
    }
}

Adding(123);
Adding("kiran");

*/
/*
let arrType:number[]|string[];
let i:number;

arrType = [1,2,3,4];
console.log("Numeric type array:");
  
for(i = 0;i<arrType.length;i++){
   console.log(arrType[i]);
}

arrType = ["India","America","England"];
console.log("printing the string: ");

for(i=0; i<arrType.length; i++){
    console.log(arrType[i]);
}

*/
/*
//enum
// This is not shorted so please ask our teacher...

export type Color = 'red' | 'white' | 'blue';
const myColor: Color = 'red';
console.log(myColor.toUpperCase());
*/
/*
//String object and string.
let uname = new String("hello pallavi...");
console.log("Message: "+ uname+ " "+ uname.length);

let username: string = "Kiranbhoi2157@gmail.com";
let password: string = "Kiran@123";

let details: string = `"my Username: ${username}  password: ${password}`;

console.log(details);

// string literals...
type Pet = 'dog'| 'cat' | 'animal';
let pet: Pet;

if(pet = 'dog'){
    console.log("your are putting multi string into the one variable.");
    console.log(pet);
}else if(pet = 'cat'){
    console.log(pet);
}else if(pet = 'animal'){
    console.log("Finally we got the final result: "+ pet);
}

type FruitName = "Apple"|"Mango"|"Orange";

function showFruitName(fruitsName: FruitName): void{
    console.log(fruitsName);
}

showFruitName("Mango");



let newString  = new String("kiran raju bhoi");

console.log(newString.search("kiran"));
console.log(newString.replace("kiran", "King"));
console.log(newString.toLocaleUpperCase());
console.log(newString.match("kiran"));
console.log(newString.lastIndexOf("kiran"));
console.log(newString.substring(0, 6));
console.log(newString.trim());
console.log(newString.charAt(6));
*/
// Switch statement:
/*
let a =10;
let b =11;

switch(a+b){

    case 5:{
        console.log("a+b is 5");
        break;
    }
    case 10:{
        console.log("a+b is 10");
        break;
    }
    case 15:{
        console.log("a +b is 15");
        break;
    }
    case 21:{
        console.log("a +b is 21");
        break;
    }
    default:{
        console.log("default case is running...");
    }
}

*/
/*
let num = 4;
let factorial =1;

while(num>=1){
    factorial = factorial * num;
    num--;
}

console.log("The factorial of the number is: "+ factorial);


// for..of loop

let arr1 = [1,2,3,4,5];
for(var val of arr1){
    console.log(val);
}

// for...in loop

let str:any = "JAVATPOINT";
for(let index in str){
    console.log(`index of ${str[index]}: ${index}`);
}
*/
/*
// enum: it is new datatype in the typescript. it is use to defined the set of named constant. i.e collection of the set value.

 enum direction{
    up,
    down,
    left,
    right,
 }

function check(status: direction){
    console.log(status);
}



check(direction.down);
check(direction.right);
console.log(direction);


enum weekend{
    friday =1,
    saturday = getDate('Dominoz'),
    sunday = saturday*40
}

function getDate(day: string):number{
    if(day === 'Dominoz'){
        return 3;
    }
}

console.log(weekend.saturday);
console.log(weekend.sunday);
*/
// var apps  = ["whatsapp", "instagram", "facebook"];
// var playstore = [];
// apps.forEach(function(item){
//     playstore.push(item);
// });
//console.log(playstore);
/*
// Map new datatype in typescript:
// putting the no of object in the map with key-value pair...

let map = new Map();

map.set(1, "kiran");
map.set(2, "sujata");
map.set(3, true);
map.set(4, 21);

console.log(map);
console.log(map.get(1));
console.log(map.size); // it is return the no of object .

for(let key of map.keys()){
    console.log("Map keys: "+ key);
}
*/
/*
// Set : it allows us to store distinct data into the list.

let mySet = new Set();

mySet.add("manisha");
mySet.add("sujata");
mySet.add("kiran");
mySet.add("varad");
console.log(mySet);


let diceEntries = new Set();

diceEntries.add(0).add(1).add(2).add(4).add(5);

for(let dice of diceEntries){
    console.log(dice);
    
}
*/
