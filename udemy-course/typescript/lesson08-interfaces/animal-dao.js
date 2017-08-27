"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animal_1 = require("./../lesson07-classes/animal");
var AnimalDao = (function () {
    function AnimalDao() {
        this.tableName = 'animal';
    }
    AnimalDao.prototype.insert = function (object) {
        console.log('Inserting...');
        object.move(23);
        return true;
    };
    AnimalDao.prototype.update = function (object) {
        return true;
    };
    AnimalDao.prototype.delete = function (id) {
        return null;
    };
    AnimalDao.prototype.find = function (id) {
        return null;
    };
    AnimalDao.prototype.findAll = function () {
        return [new animal_1.Animal('juquinha')];
    };
    return AnimalDao;
}());
exports.AnimalDao = AnimalDao;
//# sourceMappingURL=animal-dao.js.map