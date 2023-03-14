"use strict";
/// <reference path = "./main.ts" />
// including the namespace from differernt file 
var studentCal;
(function (studentCal) {
    class user extends studentCal.Akshay {
        getName() {
            return this.name;
        }
    }
    studentCal.user = user;
})(studentCal || (studentCal = {}));
let u1 = new studentCal.user();
u1.setName("rahul");
console.log(u1.getName());
