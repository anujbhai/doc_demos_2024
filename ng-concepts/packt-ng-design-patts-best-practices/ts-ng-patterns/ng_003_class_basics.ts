class Person {
    name: string;
    age: number;
    private id: number; // encapsulation

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this.id = Math.floor(Math.random() * 1000);
    }

    to_string() {
        return `Name: ${this.name} | Age: ${this.age} | ID: ${this.id}`;
    }
}

class Client extends Person {
    address: string;

    constructor(name: string, age: number, address: string) {
        super(name, age); // inheritence
        this.address = address;
    }

    to_string(): string {
        return `${super.to_string()} | Address: ${this.address}`;
    }
}

export function basic_class() {
    let client: Client = new Client('Mario', 20, 'Barcelona, Spain');

    console.log(client.to_string());
}
basic_class();
