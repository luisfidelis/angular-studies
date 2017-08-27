"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dao_1 = require("./dao");
var animal_1 = require("./../lesson07-classes/animal");
var horse_1 = require("./../lesson07-classes/horse");
var dao = new dao_1.Dao();
var animal = new animal_1.Animal('juuca');
var horse = new horse_1.Horse('Veloz');
dao.insert(horse);
//# sourceMappingURL=run.js.map