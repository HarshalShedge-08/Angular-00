"use strict";
exports.__esModule = true;
var class_1 = require("./class");
var Teacher = /** @class */ (function () {
    function Teacher() {
        this.stud = new class_1.Student();
    }
    Teacher.prototype.collstud = function (id, firstName, lastName) {
        this.stud.userName(id, firstName, lastName);
    };
    return Teacher;
}());
var name = new Teacher();
name.collstud(1001, 'sai', 'patil');
name.collstud(1002, 'rohan', 'patil');
