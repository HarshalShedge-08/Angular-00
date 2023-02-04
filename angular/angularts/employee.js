"use strict";
exports.__esModule = true;
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee(id, firstName, lastName) {
        this.id = 1001;
        this.firstName = 'rohan';
        this.lastName = 'patil';
    }
    Employee.prototype.showData = function () {
        console.log(this.id);
        console.log(this.firstName);
        console.log(this.lastName);
    };
    Employee.prototype.user = function () {
        return (this.id + this.firstName + this.lastName);
    };
    return Employee;
}());
exports.Employee = Employee;
