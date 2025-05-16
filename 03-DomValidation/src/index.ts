type NameFormat = `${string} ${string}`;
type CurrencyType = "RSD" | "EUR";

type Orders = Order[];

interface Order {
  firstName: string,
  lastName: string,
  city: string,
  country: string,
  zipCode: number,
  product: string,
  price: number,
  currency: CurrencyType,
}

function addOrder(
    name: NameFormat, 
    place: string, 
    zipCode: number, 
    product: string, 
    price: number, 
    currency: CurrencyType
): Order|never {
    const splitedName = name.split(" ");
    const splitedLocation = place.split(", ");
    if (splitedName.length > 2 || splitedLocation.length > 2) {
        throw new Error("Wrong input!");
    }
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
};


const firstOrder = addOrder("Djordje Lelek", "Belgrade, Serbia", 11000, "toy", 120, "EUR");
const secondOrder = addOrder("Stefan Krivokapic", "Vranje, Serbia", 11000, "monitor", 300, "EUR");
const thirdOrder = addOrder("Milan Vasovic", "Leskovac, Serbia", 11000, "monitor", 440, "EUR");
const orders: Order[] = [];
orders.push(firstOrder, secondOrder, thirdOrder);


function listOrders(orderList: Order[]): void {
    const ordersDiv = <HTMLElement>document.getElementById('orders');
    if (!ordersDiv) return; 
    const userName: HTMLHeadElement = document.createElement("h1");
    const cityAndCountry: HTMLParagraphElement = document.createElement("p");
    const nameOfProduct: HTMLParagraphElement = document.createElement("p");
    const priceOfProduct: HTMLSpanElement = document.createElement("span");
    orderList.forEach((item) => {
        userName.textContent = item.firstName + " " + item.lastName;
        cityAndCountry.textContent = item.city + " " + item.country;
        nameOfProduct.textContent = item.product;
        priceOfProduct.innerHTML = `${item.price}`
        ordersDiv.append(userName, cityAndCountry, nameOfProduct, priceOfProduct)
    })
}
// listOrders(orders);


function findProduct(prod: string): void {
    const resultsContainer = document.getElementById("results") as HTMLDivElement;
    if (!resultsContainer) return;

    resultsContainer.innerHTML = ""; // Clear old results

    for (const i of orders) {
        if (i.product === prod) {
            const result = document.createElement("div");

            const userName = document.createElement("h1");
            userName.textContent = i.firstName + " " + i.lastName;

            const cityAndCountry = document.createElement("p");
            cityAndCountry.textContent = i.city + " " + i.country;

            const nameOfProduct = document.createElement("p");
            nameOfProduct.textContent = i.product;

            const priceOfProduct = document.createElement("span");
            priceOfProduct.innerHTML = `${i.price}`;

            result.append(userName, cityAndCountry, nameOfProduct, priceOfProduct);
            resultsContainer.appendChild(result);
        }
    }
}

findProduct("monitor");

















