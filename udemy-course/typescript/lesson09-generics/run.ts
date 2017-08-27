import { Dao } from './dao';
import { Animal } from './../lesson07-classes/animal';
import { Horse } from './../lesson07-classes/horse';

let dao: Dao<Animal> = new Dao<Animal>();

let animal: Animal = new Animal('juuca');
let horse: Horse = new Horse('Veloz');

dao.insert(horse);