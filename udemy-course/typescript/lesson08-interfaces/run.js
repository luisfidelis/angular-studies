"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animal_dao_1 = require("./animal-dao");
var animal_1 = require("./../lesson07-classes/animal");
var dao = new animal_dao_1.AnimalDao();
var animal = new animal_1.Animal('test');
dao.insert(animal);
//# sourceMappingURL=run.js.map