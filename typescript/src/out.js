var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var studentCal;
(function (studentCal) {
    var Akshay = /** @class */ (function () {
        function Akshay() {
            this.name = '';
        }
        Akshay.prototype.setName = function (name) {
            return this.name = name;
        };
        return Akshay;
    }());
    studentCal.Akshay = Akshay;
})(studentCal || (studentCal = {}));
/// <reference path = "./main.ts" />
// including the namespace from differernt file 
var studentCal;
(function (studentCal) {
    var user = /** @class */ (function (_super) {
        __extends(user, _super);
        function user() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        user.prototype.getName = function () {
            return this.name;
        };
        return user;
    }(studentCal.Akshay));
    studentCal.user = user;
})(studentCal || (studentCal = {}));
var u1 = new studentCal.user();
u1.setName("rahul");
console.log(u1.getName());
