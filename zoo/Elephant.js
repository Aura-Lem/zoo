import { Animal } from "./Animal.js";

export class Elephant extends Animal{
    constructor (name, age) {
        super(name, age);
        this.legCount = 4;
        this,this.isHungry = false;
        this.species = 'dramblys';
        this.wantedFood = 'fruit';
        this.sound = '🐘';
    } 

    trick (weather) {
        if (this.energy < 10) {
            return false;
        }
        this.energy -= 10;
       if (weather === 'sunny') {
        return '🌈';
       } else if (weather === 'cloudy') {
        return '💧';
       } else if (weather === 'cold') {
        return '🥶';
       }
    }
}