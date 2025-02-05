"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arr_eg = arr_eg;
function arr_eg() {
    let names;
    let surnames;
    names = ['Mario', 'Pablo', 'Leo'];
    surnames = ['Costa', 'Gaviria'];
    names.forEach((name, i) => console.log(`${i + 1}. ${name}`));
    surnames.forEach((surname, i) => console.log(`${i + 1}. ${surname}`));
}
arr_eg();
