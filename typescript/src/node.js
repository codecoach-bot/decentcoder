"use strict";
// function overloading;
/*
function add(a: number, b:number ): number;
function add(a:string, b:string):string;

function add(a:any, b:any):any{
    return a+b;
}
console.log(add(12,33));
console.log(add("kiran", "yash"));

// Function overloading in a class:

class Student {
    public foo(s:string): number;
    public foo(n:number): string;
    public foo(arg:any): any{
        if(typeof(arg) === 'number'){
            return arg.toString();
        }
        if(typeof(arg) === 'string'){
            return arg.length;
        }
        
    }
    
}

let obj = new Student();
console.log("result :" +obj.foo(101));
console.log("length of string: "+ obj.foo(" Javatpoint"));
*/
/*
// optional parameter:

function showDetails(id:number, name:string, email?: string){
    console.log("id: "+ id, "Name: "+ name);
    // email is the optional parameter here.

    if(email!= undefined){
        console.log("email: "+ email);
    }
}
showDetails(101, "virat kohli");
showDetails(111, "sachin tendulkar", "sachin@123.gmail.com");


// default parameter
function display(name:string, greet:string= "hello"){
    return greet + " "+ name+ "!";
}
console.log(display("sachin"));
console.log(display("kiran", "nice")); // if u passing the second default parameter value so it passing value will be printed...



// Rest Parameter

function sum(a:number, ...b:number[]):number{
    let result = a;
    for(var i =0; i<b.length; i++){
        result += b[i];
    }
    return result;
}

let result1 = sum(3,5);
let result2 = sum(3,4,5,6,7);
console.log(result1+ "  "+ result2);
*/
/*
// class initializatio without the constructor
class Student{
    id: number=0;
    name: string='';

    // constructor(id:number, name: string){
    //     this.id = id;
    //     this.name = name;

    // }
}

let obj = new Student();

obj.id = 101;
obj.name = "Virat";

console.log("student id: "+ obj.id);
console.log("student name: "+ obj.name);
*/
/*
// inheritance:
// TypeScript supports only single and multilevel inheritance. It doesn't support multiple, hierarchical, and hybrid inheritance.
class Car{
    Color: string;
    constructor(color:string){
        this.Color = color;
    }
}

class Audi extends Car{
    Price:number;
    constructor(color:string , price:number ){
        super(color);
        this.Price = price;
    }

    display():void{
        console.log("Color: "+ this.Color);
        console.log("Price: "+ this.Price);
    }

}

let obj = new Audi("Black", 850000);
obj.display();

*/
/*
// Interface:

interface OS{
    name:string;
    language: string;
}

let OperatingSystem = (type:OS) => {
    console.log("Android " + type.name + " has "+ type.language+ " language.");
};

let Orea = {name:'O', language:"Java"};
OperatingSystem(Orea);


interface Person{
    name:string;
    age:number;
}

interface Employee extends Person{
    gender:string;
    empCode: number;
}


let empObj = <Employee>{};

empObj.name = "Abhishek"
empObj.age = 23
empObj.gender = "Male"
empObj.empCode = 45

console.log("Name "+ empObj.name + " Gender "+ empObj.gender+ " age "+ empObj.age + " Code "+ empObj.empCode);

// interface with the Array

interface nameArray{
    [index:number]:String

}

let myNames: nameArray;
myNames = ['kiran', 'jitu', 'rahul', 'sani'];
console.log("My name is : "+ myNames[1]);



// defining interface for class
interface Person {
    firstName: string;
    lastName: string;
    age: number;
    FullName():string;
    GetAge():number;
}
// implementing the interface
class Employee implements Person {
    firstName: string;
    lastName: string;
    age:number;
    FullName() {
        return this.firstName + ' ' + this.lastName;
    }
    GetAge() {
        return this.age;
    }
    constructor(firstN: string, lastN: string, getAge: number) {
        this.firstName = firstN;
        this.lastName = lastN;
        this.age = getAge;
    }
}
// using the class that implements interface
let myEmployee = new Employee('Abhishek', 'Mishra', 25);
let fullName = myEmployee.FullName();
let Age = myEmployee.GetAge();
console.log("Name of Person: " +fullName + '\nAge: ' + Age);
In an interface we can only declare properties and methods

*/
// Generic : provide you variety of data type:
/*
function identity<T>(t:T):T{
return t;
}

let out1 = identity("kiran");
console.log(out1);


function getArray<T>(item:T[]): T[]{
    return new Array<T>().concat(item);
}

let myNumArr = getArray([1,2,3,4]);
let myStrArr = getArray(['rahul', 'kiran', 'rohit']);
myNumArr.push(50);
myStrArr.push("sonu");
// myNumArr.push("manisha");
// myNumArr.push("kiran");
console.log(myNumArr);
//console.log(myStrArr);


function getName<T>(name:T[]):T[]{
    return name;
}

let arr2 = getName<number>([5,3,7,9,3]);
arr2.push(55);
arr2.unshift(11);
let arr3 = getName<string>(["kiran","parallel-minds"]);

console.log(arr2);
console.log(arr3);
console.log("length of the array: " +arr2.length);


// multi-type

function displayData<T, U>(id:T, name:U):void{
    console.log("Data type of id: "+typeof(id) + " data type of name: "+ typeof(name));
}

displayData<number, string>(111, "kiran");

// Generic class :

class StudenInfo<T, U>{
public id:T;
public name:U;

    constructor(id:T, name:U){
        this.id = id;
        this.name = name;
    }
    disp():void{
        console.log(`id = ${this.id}, Name = ${this.name}`);
    }
}

let st = new StudenInfo<number, string>(111, "Banchan...");
st.disp();
console.log(st);

*/
// let date:Date = new Date();
// console.log(date.toLocaleString());
// duck-typing: comparing the two objects with its type: 
/*
class Dog {
    sound = "barking";
}
class Lion {
    sound = "roaring";
}
class Goat {
    sound = "bleat";
    swim(){
        console.log("Cannot Swim!");
    }
}

let lion: Lion  = new Dog();
let dog: Dog = new Lion();

console.log("Lion sound like: "+ lion.sound);
console.log("Dog sound like: "+ dog.sound);

*/
/*
class Character {
    private _name: string;

    constructor(name: string) {
     this._name = name;
  
    }
  
    public get name(): string {
       return this._name;
  
    }
  
    public set name(value: string) {
  
      this._name = value;
  
    }
  
}
  
  
class Person extends Character{
  
 readonly credentials: string = ''
 
   //  private name: string = ''
 
   //  private department: string = ''
 
    constructor(name: string, value: string, ){
        super(name);
       console.log("constructor called.");
       this.credentials = value;
      
 
    }
}

let obj =  new Person("hello", "hello");
console.log(obj);
console.log(obj.credentials);
console.log(obj.name);

*/
/*
type MyInfo={name:string, age: number, email: string}
const user: {name:string, id:number, email:string}={
    name: "kiran",
    id: 101,
    email: "kiran123@gamil.com"
}


const user1:MyInfo ={
    name: "rohit",
    age: 12,
    email: "rohit@gmial.com"
}
console.log(user);
console.log(user1);

let random:[number, string, boolean]=[123, " kiran", true];

random[2] = false;
console.log(random);

enum role{
    admit,
    manager,
    employee,
}
console.log(role);
*/
function added(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    else if (typeof a === 'number' && typeof b === 'string') {
        return a + " " + b;
    }
    else if (typeof a === 'string' && typeof b === 'number') {
        return a + "  " + b;
    }
}
let sv = added(11, "Akshay");
console.log(sv);
// literal type:
let type = "raja"; //  in literal we can use fixed type. we can not use other values in that type.
let a = "kiran";
let b = 10;
let c = undefined;
