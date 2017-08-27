export class Animal {

    private name: string;

    constructor(name: string){
        this.name = name;
    };

    public move(distance: number): void {
        console.log(`${this.name} moveu ${distance}m.` );
    }
    
}