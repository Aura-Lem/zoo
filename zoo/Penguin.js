import { Animal } from "./Animal.js";

export class Penguin extends Animal{
    constructor (name, age) {
        super(name, age);
        this.legCount = 2;
        this.wingCount = 2;
        this,this.isHungry = false;
        this.species = 'pingvinas';
        this.wantedFood = 'fish';
        this.sound = '🐧';
    } 

    trick (word) {
        if (this.energy < 10) {
            return false;
        }
        if (word === 'hi' || word === 'hello' || word === 'labas') {
            this.energy -= 10;
            return this.hi();
        } else {
            this.energy -= 5;
            return `${this.name} ploja ir mojuoja`;
        }
    }
}