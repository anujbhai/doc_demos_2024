"use strict";
function get_discount(value) {
    if (typeof value === "number") {
        console.log("numeric value", value);
        return value;
    }
    else {
        let parsed_num_val = parseInt(value);
        console.log("parsed numeric value", parsed_num_val);
        return parsed_num_val;
    }
}
get_discount('15');
