import { Lion } from "./zoo/Lion.js";
import { Penguin } from "./zoo/Penguin.js";
import { Flamingo } from "./zoo/Flamingo.js";
import { Elephant } from "./zoo/Elephant.js";
import { Monkey } from "./zoo/Monkey.js";


const simba = new Lion('Simba', 4);
const kowalski = new Penguin('Kowalski', 10);
const pink = new Flamingo('Pink', 2);
const horton = new Elephant('Horton', 3);
const cici = new Monkey('Cici', 5);

console.log(simba.hi());
console.log(kowalski.hi());
console.log(pink.hi());
console.log(horton.hi());
console.log(cici.hi());
console.log(simba.voice());
console.log(horton.voice());
console.log(cici.trick(2, 2));
console.log(cici.trick(7, 2));
console.log(horton.trick('sunny'));
console.log(horton.trick('cold'));
console.log(kowalski.trick('hello'));
console.log(kowalski.trick('hey'));
console.log(cici.trick(2, 2));
console.log(kowalski);
console.log(cici);
console.log(simba);
console.log(simba.feed('meat'));
console.log(simba);
console.log(pink.birthday());

