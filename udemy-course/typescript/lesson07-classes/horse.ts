import { Animal } from './animal';
export class Horse extends Animal {

    constructor(name: string){
        super(name);
    }

    public move(distance: number): void {
        console.log(`Galopando...`)
        super.move(distance);
    } 
}