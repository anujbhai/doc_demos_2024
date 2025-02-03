"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.basic_interface = basic_interface;
function basic_interface() {
    var chicken = {
        kingdom: 'Animalia',
        species: 'Gallus',
        class: 'birds',
    };
    console.log("kingdom: ".concat(chicken.kingdom, ", species: ").concat(chicken.species, ", class: ").concat(chicken.class));
}
basic_interface();
