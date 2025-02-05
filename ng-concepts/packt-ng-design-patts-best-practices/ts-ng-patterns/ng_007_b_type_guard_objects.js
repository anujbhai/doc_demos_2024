"use strict";
function is_person(client) {
    return client.socialSecurityNumber !== undefined;
}
function get_id(client) {
    if (is_person(client)) {
        return client.socialSecurityNumber;
    }
    else {
        return client.corporateNumber;
    }
}
let client1 = {
    socialSecurityNumber: 123,
    name: 'Subash',
};
let client2 = {
    corporateNumber: 456,
    name: 'Mongoose Studio LLC.'
};
console.log('Client 1 ID:', get_id(client1));
console.log('Client 2 ID:', get_id(client2));
