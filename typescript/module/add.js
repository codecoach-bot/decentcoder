"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getNameAge() {
        return this.name + " " + this.age;
    }
}
exports.Student = Student;
