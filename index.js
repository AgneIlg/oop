import { Dog } from "./js/Dog.js";
import { Cat } from "./js/Cat.js";

const rexas = new Dog("Rexas", "black");
const brisius = new Dog("Brisius", "white");
console.log(rexas.intro());
console.log(brisius.intro());

const garfildas = new Cat('Garfildas', 'orange');
console.log(garfildas.voice());
console.log(garfildas.intro());