import { Animal } from "./Animal.js";

export class Lion extends Animal{
    constructor (name, age) {
        super(name, age);
        this.legCount = 4;
        this.species = 'liutas';
        this.wantedFood = 'meat';
        this.sound = '🦁';
    }
}