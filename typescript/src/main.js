"use strict";
var studentCal;
(function (studentCal) {
    class Akshay {
        constructor() {
            this.name = '';
        }
        setName(name) {
            return this.name = name;
        }
    }
    studentCal.Akshay = Akshay;
})(studentCal || (studentCal = {}));
