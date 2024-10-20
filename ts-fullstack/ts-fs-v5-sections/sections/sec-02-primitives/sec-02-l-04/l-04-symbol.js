"use strict";
function primitive_l_03_symbol() {
    let id = Symbol(1234);
    let user = {
        [id]: "1234",
        name: "John",
        getId: function () {
            return this[id];
        },
    };
    console.log('symbol id:', id);
    console.log('symbol id:', user.getId());
}
module.exports = primitive_l_03_symbol;
