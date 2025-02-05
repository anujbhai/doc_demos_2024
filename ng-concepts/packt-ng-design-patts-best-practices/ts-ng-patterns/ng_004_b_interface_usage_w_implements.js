"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dog = exports.Duck = void 0;
exports.animalDoSound = animalDoSound;
class Duck {
    constructor(name) {
        this.name = '';
        this.name = name;
    }
    doASound() {
        return 'Quack';
    }
}
exports.Duck = Duck;
class Dog {
    constructor(name) {
        this.name = '';
        this.name = name;
    }
    doASound() {
        return 'Woof';
    }
}
exports.Dog = Dog;
function makeSound(animal) {
    console.log(`${animal.name} makes the ${animal.doASound()} sound!`);
}
function animalDoSound() {
    let duck = new Duck('Duck');
    let dog = new Dog('Dog');
    makeSound(duck);
    makeSound(dog);
}
animalDoSound();
