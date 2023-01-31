"use strict";
exports.__esModule = true;
var class_obj_1 = require("./class-obj");
var Teach = /** @class */ (function () {
    function Teach() {
        this.prof = new class_obj_1.Stuud();
    }
    Teach.prototype.collprof = function (id, firstName, lastName) {
        var a = this.prof.useName(id, firstName, lastName);
        console.log(a);
    };
    return Teach;
}());
var p = new Teach();
p.collprof(1001, 'nik', 'patil');
