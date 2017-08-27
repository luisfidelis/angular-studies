"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Animal = (function () {
    function Animal(name) {
        this.name = name;
    }
    ;
    Animal.prototype.move = function (distance) {
        console.log(this.name + " moveu " + distance + "m.");
    };
    return Animal;
}());
exports.Animal = Animal;
//# sourceMappingURL=animal.js.map