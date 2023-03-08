"use strict";
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
class department {
    constructor(n) {
        this.employee = [];
        this.empName = n;
    }
    departmentDetails() {
        console.log("Employee Details are:" + this.empName);
        console.log("Employee Details are:" + this.employee.length);
    }
    addEmployee(employee) {
        this.employee.push(employee);
    }
}
const Emp = new department("Sunil");
Emp.addEmployee("Max");
Emp.addEmployee("san");
Emp.addEmployee("axx");
Emp.departmentDetails();
