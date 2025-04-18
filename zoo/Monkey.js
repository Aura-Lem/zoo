import { Animal } from "./Animal.js";

export class Monkey extends Animal{
    constructor (name, age) {
        super(name, age);
        this.legCount = 4;
        this,this.isHungry = false;
        this.species = 'bezdzione';
        this.wantedFood = 'bananas';
        this.sound = '🐒';
        
    } 

    trick(a, b) {
        if (this.energy < 10) {
            return false;
        }
        this.energy -= 10;
        if (a <= 5 && b <= 5) {
            return `${this.name} parodė ${a + b} pirštus`;
        } else {
            return `${this.name} į mus meta saują purvo`;
        }
    }
}