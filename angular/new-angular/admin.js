"use strict";
exports.__esModule = true;
var student_1 = require("./student");
var teacher_1 = require("./teacher");
var Admin = /** @class */ (function () {
    function Admin() {
        this.t = new teacher_1.Teacher('milind', 'sir', 2);
        this.s = new student_1.Student('mohan', 'patil', 101);
        this.t.teachName();
        var tdata = this.t.teachData('angular', 20000);
        console.log(tdata);
        this.s.showData();
        this.s.assignment('angular', 35);
    }
    return Admin;
}());
var b = new Admin();
