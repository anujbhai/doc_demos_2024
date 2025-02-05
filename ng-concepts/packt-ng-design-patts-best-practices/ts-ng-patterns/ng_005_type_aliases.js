"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.basic_type = basic_type;
function basic_type() {
    let car = {
        id: '123',
        description: "Four wheeler with an engine.",
        energyOutput: 1000,
    };
    console.log(`Car with ID: ${car.id} and desc.: ${car.description}, has an energy output of: ${car.energyOutput}`);
}
basic_type();
