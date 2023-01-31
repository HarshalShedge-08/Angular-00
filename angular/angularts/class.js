"use strict";
//class-object
exports.__esModule = true;
exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student() {
        this.id = 1001;
        this.firstName = 'sai';
        this.lastName = 'patil';
    }
    Student.prototype.userName = function (id, firstName, lastName) {
        this.id = id,
            this.firstName = firstName,
            this.lastName = lastName,
            console.log(id, firstName, lastName);
    };
    return Student;
}());
exports.Student = Student;
// let user=new Student()
// user.userName(1001,'sai','patil')
