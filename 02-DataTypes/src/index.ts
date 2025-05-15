/*
    PRIMITIVE TYPES:
    - number
    - string
    - boolean
    - bigint
    - symbol
    - null & undefined

    OBJECT TYPES: 
    - objects
    - array
    - tuples [string, number]
    - enums

    SPECYAL TYPES:
    - any
    - unknown

    FUNCTION TYPES:
    - void (function doesn't return)
    - never (code that will not be executed)

    ADVANCED TYPES:
    - union (string | number)
    - intersection
    - literal 
    - interface
*/

function sayHello(message: string):void 
{
    console.log(message)
}
// sayHello("hello");

function add(a: number, b: number): number
{
    return a + b;
}
// console.log(add(5,10));


type logLevel = "INFO"|"ERROR"|"WARRNING";
type logEntryTypes = [number, number, logLevel];
const serversLogs: logEntryTypes[] = [
    [25, 440, "WARRNING"]
]
// console.log(serversLogs);

//name, location, zipCode, product, price, currency



// HOMEWORK

type currencyType = "RSD" | "EUR";

interface Order {
  firstName: string,
  lastName: string,
  city: string,
  country: string,
  zipCode: number,
  product: string,
  price: number,
  currency: currencyType,
}

function addOrder(name: string, place: string, zipCode: number, product: string, price: number, currency: currencyType): Order {
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






























































