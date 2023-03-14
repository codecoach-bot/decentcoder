"use strict";
// All oops concept verification:
/*
class Student {
    public studname: string | undefined; // if u defined properties it showing red line u want to defined with the undefined...

    studroll: number| undefined;
    message(){
        console.log("hello message...");
    }
}
  
let s = new Student();
s.studname = "kiran";
s.studroll = 11;

console.log(s.studname+ " "+ s.studroll);

s.message();

class salary{
  private name:string ='';
    salId:number =0;

    set setname(n:string){
        this.name = n;
    }
    get getname(){
        return this.name;
    }
}

let sal = new salary();
sal.salId = 123;
sal.setname = "leena";
let nam =sal.getname;
console.log(nam);
console.log(sal);
*/
/*
class Emp{
    name:string='';
    roll:number=0;

    constructor(name:string, roll:number){
       this.name = name;
       this.roll = roll;
        console.log("constructor calling..."+this.name+" "+this.roll);
        
        
    }
    hello(){
        console.log("hello my dear..fried");
        
    }
}
let e = new Emp("good", 11);
*/
/*
class Employee{
    public empName:string ="";
    protected emproll: number= 0;
    private empAddarNo: number = 0;

    constructor(empName:string, emproll:number, empAddarNo: number){
        this.empName = empName;
        this.emproll = emproll;
        this.empAddarNo = empAddarNo;
    }

    found(){
        console.log(this.empName+ " "+ this.emproll+ " "+ this.empAddarNo);
    }
    set setempAddarNo(addar:number){
        this.empAddarNo = addar;
    }
    get getempAddarNo(){
        return this.empAddarNo;
    }

}

class manager extends Employee{
 // in child class only public and protected accessible here
    public testprop:string  = "P";
    private testprop2:string  = "K";
    hello(){
    
        console.log(this.empName+ " "+ this.emproll+ " "+this.testprop2);
    }

    getEmpRoll(){
        return this.emproll;
    }
}

let mag = new manager("kiran", 123, 12345223445);
mag.getEmpRoll();
mag.setempAddarNo;
let d = mag.getempAddarNo;
console.log(d);
*/
//we assing property this way...
/*
class student{
    stName: string;

    constructor(s:string){
        this.stName = s;
    }
}
let s = new student("kiran");
console.log(s.stName);
*/
/*
class Student{
    public studCode: number;
    protected studName: string;
    constructor(code:number, name:string){
        this.studCode = code;
        this.studName = name;

    }

}

class Person extends Student{
    private department: string;
    constructor(code:number, name:string, depart:string){
        super(code, name);
        this.department = depart;

    }
    public getElevatorPitch(){
        return (`My unique code: ${this.studCode}, my name: ${this.studName} i am in ${this.department} branch`);
    }
}

let Root:Person = new Person(1, "Kiran", "Mechanical");
console.log(Root.getElevatorPitch());

*/
/*
// if u use the readonly variable it necessary to assign it into the constructor...

class Company{
    readonly country: string = "India";
    readonly name: string;
    // readonly initialized only within constructor...

    constructor(countName:string, n:string){
        this.country = countName;
        this.name = n;
    }

    showDetails(){
        console.log(this.name+ " "+ this.country);
    }
}

let comp = new Company("typescript", "Good programih language.");

comp.showDetails();
// comp.name = "tsc"; // Error...
*/
/*
// getter and setter

class MyDrawing{
    length: number = 20;
    breath:number = 15;

    get rectangle(){
        return this.length * this.breath;
    }
}
let m = new MyDrawing();
console.log(m);
let sam =m.rectangle;
console.log(sam);

//console.log(new MyDrawing());
*/
/*
let passcode = "secret passcode";
  
class Student {
    private fullName: string='';
  
    get getFullName(): string {
        return this.fullName;
    }
  
    set setFullName(newName: string) {
        this.fullName = newName;
        if (this.fullName === "secret") {
            this.fullName = newName;
        }
        else {
            console.log("Unauthorized update of student detail!");
        }
    }
}
  
let stud = new Student();
stud.setFullName = "secrete";

let password = stud.getFullName;
console.log("your password is correct and safe : "+password);
*/
// const userinput = document.getElementById('user-input') ! as HTMLInputElement
// userinput.value ='Parallel Minds pvt ltd.';
/*
// optional paramerts :
function showDet(id:number, name:string, emialId?:string ){
    console.log("ID: "+ id+ " "+ "Name: "+ name);

    if(emialId!= undefined){
        console.log("Email id: "+ emialId);
    }
}
showDet(101, "vijay", "Kiranbhoi2157@gmail.com");


// default parameters

function displayName(name:string, greet:string = "Hello"): string{
return greet + " "+ name;
}
console.log(displayName("java"));
console.log(displayName("Machine learning", "Better"));


// rest parameter
function sum(a: number, ...b:number[]): number{
    // rest of parameter become a array.

    let result =a; // 3
    for(var i=0; i<b.length; i++){
        result += b[i];
    }
    return result;
}

let result1 = sum(2,2);
let result2 = sum(3,4,5,6);

console.log(result1+ "\n"+ result2);
*/
// Arrow function:
/*
var getResult = (username:string, point:number):string => {
    return `${username} scored ${point} points!`;
}

let sam = getResult("kiran", 123);
console.log(sam);

// let cool = (a, b) => {
//     return a + b;
// };
// console.log(cool(10,22));

let Print =()=> console.log("hello");
Print();
*/ 
