"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.basic_class = basic_class;
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.id = Math.floor(Math.random() * 1000);
    }
    to_string() {
        return `Name: ${this.name} | Age: ${this.age} | ID: ${this.id}`;
    }
}
class Client extends Person {
    constructor(name, age, address) {
        super(name, age); // inheritence
        this.address = address;
    }
    to_string() {
        return `${super.to_string()} | Address: ${this.address}`;
    }
}
function basic_class() {
    let client = new Client('Mario', 20, 'Barcelona, Spain');
    console.log(client.to_string());
}
basic_class();
