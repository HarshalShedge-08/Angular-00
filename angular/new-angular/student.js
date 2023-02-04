"use strict";
exports.__esModule = true;
exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student(firstName, lastName, id) {
        this.firstName = 'mohan';
        this.lastName = 'patil';
        this.id = 101;
    }
    Student.prototype.assignment = function (sub, marks) {
        if (marks >= 35 && marks >= 45) {
            console.log('just pass');
        }
        else if (marks <= 35) {
            console.log('you are fail');
        }
        else if (marks >= 45 && marks <= 55) {
            console.log('grade D');
        }
        else if (marks >= 55 && marks <= 65) {
            console.log('grade C');
        }
        else if (marks >= 65 && marks <= 75) {
            console.log('grade B');
        }
        else if (marks >= 75 && marks <= 85) {
            console.log('grade A');
        }
        else {
            console.log('grade A+');
        }
        return sub + " " + marks;
    };
    Student.prototype.showData = function () {
        console.log(this.firstName);
        console.log(this.lastName);
        console.log(this.id);
    };
    return Student;
}());
exports.Student = Student;
