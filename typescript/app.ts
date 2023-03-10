// this will refer the current object of the class.
/*
class Student{
    name: string;
    age: number;

    constructor(n: string, a:number){
        this.name = n;
        this.age = a;
    }
    detail(this: Student){
        console.log("student details: "+ this.name+ " "+ this.age);
    }
}

const obj = new Student('Kiran', 26);
obj.detail();

const objCopy = {name: "hello"};
*/
/*
class department{
    empName: string;
    employee: string[] = [];

    constructor(n: string){
        this.empName = n;
    }    
    departmentDetails(){
        console.log("Employee Details are:"+ this.employee.length);
        console.log("Employee Details are:"+ this.empName);
        
    }
    addEmployee(employee: string){
        this.employee.push(employee);
    }

}

class Employee extends department{
    get lastreport(){
        return this.report;
    }
    set lastreport(report){
        this.report = report;
    }

    constructor(public id: number, public name: string, private report: string) {
        super("Akshay");
        this.report = report;
        this.id = id;
        this.name = name;
    }

    empdetails(){
        console.log("Employee details:" + 
        `Empid: ${this.id}
        EmpName: ${this.name}`);
    }

}
const obj = new Employee(1, "yash");

obj.addEmployee("sona");
obj.empdetails();



// Emp.addEmployee("Max");
// Emp.addEmployee("san");
// Emp.addEmployee("axx");

// Emp.departmentDetails();

*/

// interface 

// interface can be use as the function okay.
/*
interface addMe{
    (a:number, b: number, c: string): number;

}


interface Person{
name: string;
age: number;
height: number;
info(phrase: string): void;

}

class Greed implements Person{
name: string;
age: number;
height: number;

constructor(n: string, a: number, h: number){
    this.name = n;
    this.age = a;
    this.height =h;
}

info(phrase: string){
    console.log(phrase+ " "+ this.name);
}

}

let user1: Person;
user1 = {
    name :"manisha",
    age: 23,
    height: 5.1,
    info(phrase: string){
        console.log(phrase+ " "+ this.name);
    }
};

// user1.info("today manisha is very serious mode...");
// console.log(user1);

user1 = new Greed('Manu', 22, 4);
console.log(user1);
*/




