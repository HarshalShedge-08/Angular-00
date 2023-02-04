"use strict";
exports.__esModule = true;
var employee_1 = require("./employee");
var Admin = /** @class */ (function () {
    function Admin() {
        this.emp = new employee_1.Employee(1001, 'rohan', 'patil');
    }
    Admin.prototype.getData = function () {
        this.emp.showData();
    };
    return Admin;
}());
var admin = new Admin();
admin.getData();
