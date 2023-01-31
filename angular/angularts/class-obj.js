"use strict";
exports.__esModule = true;
exports.Stuud = void 0;
var Stuud = /** @class */ (function () {
    function Stuud() {
        this.id = 1001;
        this.firstName = 'sai';
        this.lastName = 'patil';
    }
    Stuud.prototype.useName = function (id, firstName, lastName) {
        return id + firstName + lastName;
    };
    return Stuud;
}());
exports.Stuud = Stuud;
// let user=new Stuud()
// let c=user.useName(1001,'sai','patil')
// console.log(c)
