import {DaoInterface} from './dao.interface';
import {AnimalDao} from './animal-dao';
import {Animal} from './../lesson07-classes/animal';

let dao: DaoInterface = new AnimalDao();
let animal: Animal = new Animal('test');

dao.insert(animal);