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
const Emp = new department("Sunil");
Emp.addEmployee("Max");
Emp.addEmployee("san");
Emp.addEmployee("axx");

Emp.departmentDetails();


