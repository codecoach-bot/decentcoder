/// <reference path = "./main.ts" />
// including the namespace from differernt file 

namespace studentCal{
  export class user extends Akshay{
    getName()
    {
        return this.name;
    }
  }

}

let u1 = new studentCal.user();
u1.setName("rahul");
console.log(u1.getName());
