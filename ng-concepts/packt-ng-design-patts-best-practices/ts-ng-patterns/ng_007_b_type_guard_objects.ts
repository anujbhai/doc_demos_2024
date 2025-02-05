interface Person {
  socialSecurityNumber: number;
  name: string;
}

interface Company {
  corporateNumber: number;
  name: string;
}

type Client = Person | Company;

function is_person(client: Client): client is Person {
  return (client as Person).socialSecurityNumber !== undefined;
}

function get_id(client: Client) {
  if (is_person(client)) {
    return client.socialSecurityNumber;
  } else {
    return client.corporateNumber;
  }
}

let client1: Person = {
  socialSecurityNumber: 123,
  name: 'Subash',
}
let client2: Company = {
  corporateNumber: 456,
  name: 'Mongoose Studio LLC.'
}
console.log('Client 1 ID:', get_id(client1));
console.log('Client 2 ID:', get_id(client2));

