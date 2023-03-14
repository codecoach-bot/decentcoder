// autobind decorator: no need to use bind 
/*
function autobind(
    _: any,
    _2: string,
    descriptor: PropertyDecorator
    ){
        const originalMethod = descriptor.value;
        const adjDescriptor: PropertyDecorator=  {
            configurable: true,
            get(){
                const boundFn = originalMethod.bind(this);
                return boundFn;
            }

        };
        return adjDescriptor; 
}





// project input class 
class ProjectInput{
    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement;
    element: HTMLFormElement;
    titleInputElement: HTMLInputElement;
    descriptionInputElement: HTMLInputElement;
    peopleInput: HTMLInputElement;


    constructor(){
        this.templateElement = document.getElementById('project-input')! as HTMLTemplateElement;
        this.hostElement = document.getElementById('app')! as HTMLDivElement;

        const importedNode = document.importNode(this.templateElement.content, true);
        this.element  = importedNode.firstElementChild as HTMLFormElement;
        this.element.id = 'user-input';
        this.titleInputElement = this.element.querySelector('#title') as HTMLInputElement;
        this.descriptionInputElement = this.element.querySelector('#description') as HTMLInputElement;this.peopleInput = this.element.querySelector('#people') as HTMLInputElement;

        this.configure();
        this.attach();
    }
    private gatherUserInput(): [string, string, number]| void {
        const entereTitle = this.titleInputElement.value;
        const enteredDescription = this.descriptionInputElement.value;
        const enteredPeople = this.peopleInputElement.value;

        if(
            entereTitle.trim().length === 0 || enteredDescription.trim().length === 0 || enteredPeople.trim().length === 0 
            ){
             alert("Invalid input, please try again.");
             return;    
        }else {
            return [entereTitle, enteredDescription, +enteredPeople];

        }

    }


    @autobind
    private submitHandler(event: Event){
        event.preventDefault();
        console.log(this.titleInputElement.value);
        const userInput = this.gatherUserInput();
        if(Array.isArray(userInput)){
            const[title, desc, people] = userInput;
            console.log(title, desc, people);
        }

    }

    private configure(){
        this.element.addEventListener('submit', this.submitHandler); // bind here bez this is not referthe the class property.

    }

    private attach(){
        this.hostElement.insertAdjacentElement('afterbegin', this.element );
    }

}

const prjInput = new ProjectInput();
*/
