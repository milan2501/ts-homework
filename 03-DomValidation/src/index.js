"use strict";
function addOrder(name, place, zipCode, product, price, currency) {
    const splitedName = name.split(" ");
    const splitedLocation = place.split(",");
    return {
        firstName: splitedName[0],
        lastName: splitedName[1],
        city: splitedLocation[0],
        country: splitedLocation[1],
        zipCode: zipCode,
        product: product,
        price: price,
        currency: currency
    };
}
console.log(addOrder("Milan Vasovic", "Belgrade, Serbia", 11000, "toy", 120, "EUR"));
