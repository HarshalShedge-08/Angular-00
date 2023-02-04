"use strict";
exports.__esModule = true;
exports.Teacher = void 0;
var student_1 = require("./student");
var Teacher = /** @class */ (function () {
    function Teacher(tfn, tln, tid) {
        this.stud = new student_1.Student('mohan', 'patil', 101);
        this.teachFName = tfn;
        this.teachLName = tln;
        this.teachId = tid;
        this.stud.showData();
        this.stud.assignment('angular', 30);
    }
    Teacher.prototype.teachName = function () {
        console.log(this.teachFName);
        console.log(this.teachLName);
        console.log(this.teachId);
    };
    Teacher.prototype.teachData = function (subject, salary) {
        return subject + " " + salary;
    };
    return Teacher;
}());
exports.Teacher = Teacher;
// let a=new Teacher('milind','sir',2)
