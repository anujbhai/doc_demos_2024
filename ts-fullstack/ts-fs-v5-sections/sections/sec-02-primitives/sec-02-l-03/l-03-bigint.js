"use strict";
function primitive_l_03_bigint() {
    const safe_int = Number.MAX_SAFE_INTEGER;
    console.log('safe int:', safe_int);
    let big_int1 = BigInt(1234);
    let big_int2 = 123434543n;
    console.log('big int1:', big_int1);
    console.log('big int2:', big_int2);
}
module.exports = primitive_l_03_bigint;
