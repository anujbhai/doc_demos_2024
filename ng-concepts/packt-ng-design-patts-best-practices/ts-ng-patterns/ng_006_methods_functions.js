"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.invoice_example = invoice_example;
function get_total_invoice(invoice) {
    var invoice_total = invoice.reduce(function (total, item) { return total + item.quantity * item.price; }, 0);
    return invoice_total;
}
function apply_discount(invoice, discount_value, product_of_discount) {
    discount_value = discount_value / 100;
    var new_invoice = invoice.map(function (item) {
        if (product_of_discount === undefined || item.product === product_of_discount) {
            return __assign(__assign({}, item), { price: item.price - item.price * discount_value });
        }
        return item;
    });
    return new_invoice;
}
function invoice_example() {
    var example = [
        {
            product: 'Banana',
            quantity: 12,
            price: 1.5,
        },
        {
            product: 'Apple',
            quantity: 6,
            price: 0.5,
        },
        {
            product: 'Grapes',
            quantity: 25,
            price: 50,
        },
    ];
    var discounted_invoice = apply_discount(example, 10, 'Banana');
    console.log("Invoice Total: ".concat(get_total_invoice(example)));
    console.log('Discounted invoice:');
    // console.table(JSON.stringify(discounted_invoice, null, 2))
    console.table(discounted_invoice);
    console.log("New invoice Total: ".concat(get_total_invoice(discounted_invoice)));
}
invoice_example();
// apply_discount(invoice_example(), 20);
