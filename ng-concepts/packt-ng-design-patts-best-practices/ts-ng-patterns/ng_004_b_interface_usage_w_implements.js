"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dog = exports.Duck = void 0;
exports.animalDoSound = animalDoSound;
var Duck = /** @class */ (function () {
    function Duck(name) {
        this.name = '';
        this.name = name;
    }
    Duck.prototype.doASound = function () {
        return 'Quack';
    };
    return Duck;
}());
exports.Duck = Duck;
var Dog = /** @class */ (function () {
    function Dog(name) {
        this.name = '';
        this.name = name;
    }
    Dog.prototype.doASound = function () {
        return 'Woof';
    };
    return Dog;
}());
exports.Dog = Dog;
function makeSound(animal) {
    console.log("".concat(animal.name, " makes the ").concat(animal.doASound(), " sound!"));
}
function animalDoSound() {
    var duck = new Duck('Duck');
    var dog = new Dog('Dog');
    makeSound(duck);
    makeSound(dog);
}
animalDoSound();
