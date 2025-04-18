import { Animal } from "./Animal.js";

export class Flamingo extends Animal{
    constructor (name, age) {
        super(name, age);
        this.legCount = 2;
        this.wingCount = 2;
        this,this.isHungry = false;
        this.species = 'flamingas';
        this.wantedFood = 'shrimp';
        this.sound = '🦩';
    } 
}