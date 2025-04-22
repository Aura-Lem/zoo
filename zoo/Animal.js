export class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.legCount = 0;
        this.isHungry = true;
        this.species = 'unknown';
        this.energy = 40;
    }

    feed(food) {
        if (this.isHungry === true && this.wantedFood === food) {
            this.isHungry = false;
            this.energy += 10;
               if (this.energy > 40){
                this.energy = 40;
               }
            return "Ačiū už pietus!"
        } else if (this.isHungry === true) {
            return "Duok tinkamo maisto!"
        } else  {
            return "Nenoriu valgyt."
        }
    }

    hi() {
        if (this.energy < 5) {
            return false;
        }
        this.energy -= 5;
        return `Hi, my name is ${this.name}.`;
    }

    voice() {
        const sound = (' ' + this.sound).repeat(2);
        return `${this.name}:${sound}!`;
    }

    sleep() {
        if (this.energy < 40 || this.energy === 0) {
            this.energy += 20;
        }
    }

    birthday(food) {
        return `Happy birthday ${this.name}! Now you are ${++this.age} years old! ${this.name} eats a ${food} cake`;
    }
}