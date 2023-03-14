// Advance type script code and concept


/*
// type : typescript support some type you may know.

type Admin = {
    name: string;
    roll: number;
}

type Majar = {
    name: string;
    id: number;
}

type combine = Admin & Majar;

const e1: combine ={
    name: "rahul",
    roll: 123,
    id: 55
}
console.log(e1);

function add(a:string, b:string){
    if(typeof a === "string" || typeof b === "string"){
        return a.toString() + b.toString();

    }
    return a + b;
}

console.log(add("rohit", "naman"));

function printInformationCombine(emp: combine){
    console.log("Name: "+ emp.name);
    if('Name' in emp){
        console.log("Name: "+ emp.name);
        console.log("roll: "+ emp.roll);
        
    }
    if('id' in emp){
        console.log("Id : "+ emp.id);
    }
}

printInformationCombine(e1);

class Car{
    drive(){
        console.log("Driving...");
    }
}

class Truck{
    drive(){
        console.log("Driving a truck.");
        
    }
    loadCargo(amount: number){
        console.log("Loading cargo: "+ amount);
        
    }
}

type Vechile = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVechile(vehicle: Vechile){
    vehicle.drive();
    if('loadCargo' in vehicle){
        vehicle.loadCargo(1000);
    }
    // cant access loadCargo here 
}

useVechile(v1);
useVechile(v2);
*/


/*
// Discriminated Unions: 

interface Bird{
    type: 'bird';
    flyingSpeed: number;
}

interface Horse {
    type: 'horse';
    runnigSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal){
    // if('flyingSpeed' in animal){
    //     console.log('Moving with speed: '+ animal.flyingSpeed);
        
    // }
    let speed;
    switch(animal.type){
        case 'bird':
        speed = animal.flyingSpeed;
        break;

        case 'horse':
            speed = animal.runnigSpeed;
        
    }
    console.log('Moving at speed: '+ speed);
    
}

moveAnimal({type: 'bird', flyingSpeed: 10});
*/

/*
//type Casting:

//const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
//other way 

const userInputElement = document.getElementById('user-input')! as HTMLInputElement;
if(userInputElement){
    (userInputElement as HTMLInputElement).value = "Hello Guys...";
}
userInputElement.value ="Welcome to Parallel Minds";
*/

/*
//index prperty:

interface ErrorContainer{
    // { emial: 'not a valid email', username: 'Must starter!'}
    [prop: string]: string;
    
}

const errorBag: ErrorContainer = {
    email: 'Not a valid email!',
    username: 'Must start with a capital character'
};

*/

/*
//Generics : Flexible and reuseble code: angle bracket

const myName:Array<string> = [];  // string[]

const promise:Promise<number> = new Promise((resolve, reject)=> {
    setTimeout(() => {
        resolve(10);

    }, 2000);
});

// Own generic 

function merge<T extends object, U extends object>(objA: T, objB: U){
    return Object.assign(objA, objB);
}
const mergedObj = merge({name:'max', hobbies: ['sports']}, {age: 30});
console.log(mergedObj.age);

// some function:

interface Lengthy{
    length: number,
}

function countAndPrint<T extends Lengthy>(element: T):[T, string]{
    let descriptionText = 'Got no value. ';
    if(element.length === 1){
        descriptionText = 'Got 1 element.';
    }else if(element.length >1){
        descriptionText = 'Got ' + element.length + ' element';
    }
    
    return [element, descriptionText];
}

console.log(countAndPrint(['sport', 'cooking']));

function extractAndConvert<T extends object, U extends keyof T>(
    obj: T,
    key: U
    ){
    return 'value: '+ obj[key];
}

extractAndConvert({name: 'Kiran'}, 'name');

*/

/*
// Generic Classes:

class DataStorage<T>{
    private data: T[] = [];

    addItem(item: T){
        this.data.push(item);
    }
    removeItem(item: T){
        if(this.data.indexOf(item) === -1){
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);  //-1

    }
    getItems(){
        return [...this.data ];
    }

}

const textStrorage = new DataStorage<string>();

textStrorage.addItem('max');
textStrorage.addItem('manu');
textStrorage.removeItem('max');
console.log(textStrorage.getItems());

const numberStorage = new DataStorage<number>();

const objStorage = new DataStorage<object>();
objStorage.addItem({name: 'max'});
objStorage.addItem({name: 'manu'});

//..
objStorage.removeItem({name: 'max'});
console.log(objStorage.getItems());
*/


/*
// Decorator:Meta-Programming. decorator is the special type of function. if u want to call the decorator u dont need to intantiate the class and no need of object. there is a special type of symbol use to call decorator is @

function Logger(logString: string){
    return function(constructor: Function){
        console.log(logString);
        console.log(constructor);

    }
}

function withTemplate(template: string, hookId: string){
    return function(constructor: any){

        const hookEl = document.getElementById(hookId);
        const p = new constructor();
        
        if(hookEl){
            hookEl.innerHTML = template;
            hookEl.querySelector('h2')!.textContent = p.name;

        }
    }
}


//@Logger('Logging- Person')
@withTemplate('<h2>My Person Object</h2>', 'app')
class Person{
     name:string;
    constructor(name:string){
         this.name = name;
        console.log("creating person object.");
    }
}

const pers = new Person("kiran");
console.log(pers);



function Autobind(_:any, _2: string, descriptor: PropertyDecorator){
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDecorator = {
        configurable: true,

        enumerable: false,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };
    return adjDescriptor;
}


class Printer{
    message = "Hii its working..";
    @Autobind
    showMessage(){
        console.log(this.message);
    }
}

const p = new Printer();

const button =  document.querySelector('button')!;
button.addEventListener('click', p.showMessage);
*/

// validation decorator:


interface ValidatorConfig{
    [property: string]: {
        [validatebleProp: string]: string[] // ['required', 'property']

    }
}
const registeredValidators: ValidatorConfig = {};

function Required(target: any, propName: string){
    registeredValidators[target.constructor.name]= {
        ...registeredValidators[target.constructor.name],
        [propName]: ['required']
    };
}

function PositiveNumber(target:any, propName: string) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: ['positive']
    }
}

function validate(obj: any) {
    const objValidatorConfig = registeredValidators[obj.constructor.name];
    if(!objValidatorConfig){
        return true;
    }
    let isValid =  true;
    for(const prop in objValidatorConfig){
        for(const validator of objValidatorConfig[prop]){
            switch(validator){
                case 'required':
                    isValid = isValid && !!obj[prop];
                    break;
                case 'positive':
                    isValid = isValid && obj[prop]> 0; 
                    break;   
            }
        }
    }
    return true;
}

class Course{
    @Required
    title: string;
    @PositiveNumber
    price: number;

    constructor(t:string, p:number){
        this.title = t;
        this.price = p;
    }

}

const courseForm = document.querySelector('form')!;
courseForm.addEventListener('submit', event =>{
    event.preventDefault();
    const titleEl = document.getElementById('title') as HTMLInputElement;
    const priceEl = document.getElementById('price') as HTMLInputElement;

    const title = titleEl.value;
    const price = +priceEl.value;

    const createdCourse = new Course(title, price);
    
    if(!validate(createdCourse)){
        alert('Invalid input, Please try again! ' );
    }
     console.log(createdCourse);
    // console.log(createdCourse.title);
    // console.log(createdCourse.price);
});



