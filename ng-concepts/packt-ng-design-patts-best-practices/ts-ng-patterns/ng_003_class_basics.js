"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.basic_class = basic_class;
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
        this.id = Math.floor(Math.random() * 1000);
    }
    Person.prototype.to_string = function () {
        return "Name: ".concat(this.name, " | Age: ").concat(this.age, " | ID: ").concat(this.id);
    };
    return Person;
}());
var Client = /** @class */ (function (_super) {
    __extends(Client, _super);
    function Client(name, age, address) {
        var _this = _super.call(this, name, age) || this; // inheritence
        _this.address = address;
        return _this;
    }
    Client.prototype.to_string = function () {
        return "".concat(_super.prototype.to_string.call(this), " | Address: ").concat(this.address);
    };
    return Client;
}(Person));
function basic_class() {
    var client = new Client('Mario', 20, 'Barcelona, Spain');
    console.log(client.to_string());
}
basic_class();
