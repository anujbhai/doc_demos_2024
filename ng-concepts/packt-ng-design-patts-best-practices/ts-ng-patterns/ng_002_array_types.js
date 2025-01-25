"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arr_eg = arr_eg;
function arr_eg() {
    var names;
    var surnames;
    names = ['Mario', 'Pablo', 'Leo'];
    surnames = ['Costa', 'Gaviria'];
    names.forEach(function (name, i) { return console.log("".concat(i + 1, ". ").concat(name)); });
    surnames.forEach(function (surname, i) { return console.log("".concat(i + 1, ". ").concat(surname)); });
}
arr_eg();
