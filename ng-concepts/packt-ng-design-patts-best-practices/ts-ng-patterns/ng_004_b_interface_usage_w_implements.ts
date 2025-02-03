import { DoSound } from "./ng_004_interfaces";

export class Duck implements DoSound { // implements => polymorphism
  name: string = '';

  constructor(name: string) {
    this.name = name;
  }

  public doASound() {
    return 'Quack';
  }
}

export class Dog implements DoSound { // implements => polymorphism
  name: string = '';

  constructor(name: string) {
    this.name = name;
  }

  public doASound() {
    return 'Woof';
  }
}

function makeSound(animal: DoSound) {
  console.log(`${animal.name} makes the ${animal.doASound()} sound!`);
}

export function animalDoSound() {
  let duck = new Duck('Duck');
  let dog = new Dog('Dog');

  makeSound(duck);
  makeSound(dog);
}
animalDoSound();

