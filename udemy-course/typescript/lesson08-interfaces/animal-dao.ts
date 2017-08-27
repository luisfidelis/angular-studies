import { DaoInterface } from './dao.interface';
import { Animal } from './../lesson07-classes/animal';

export class AnimalDao implements DaoInterface{

    tableName: string = 'animal';

    insert(object: Animal): boolean {
        console.log('Inserting...');
        object.move(23)
        return true;
    }

    update(object: Animal): boolean {
        return true;
    }
    
    delete(id: number): Animal {
        return null;
    }
    
    find(id: number): Animal {
        return null;
    }

    findAll(): [Animal] {
        return [new Animal('juquinha')];
    }

}