"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.basic_type = basic_type;
function basic_type() {
    var car = {
        id: '123',
        description: "Four wheeler with an engine.",
        energyOutput: 1000,
    };
    console.log("Car with ID: ".concat(car.id, " and desc.: ").concat(car.description, ", has an energy output of: ").concat(car.energyOutput));
}
basic_type();
