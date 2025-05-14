interface Greetable {
    name: string;
}

interface Printable {
    print(): void;
}

class User implements Greetable, Printable {
    constructor (public name: string, public age: number) {}

    print() {
        console.log(this.name);
    }
}

class Admin extends User {
    constructor (name: string, age: number, private permissions: string[]) {
        super(name, age)
    }
}

let user = new Admin("Max", 35, ['write, ride']);
console.log(user.name, user.age);

interface CalculationContainer {
    res: number;
    print(): void;
}


const num1Input = document.getElementById('num1') as HTMLInputElement;
const num2Input = <HTMLInputElement>document.getElementById('num2');
const buttonElement = document.querySelector('button');

function add(a: number, b: number) {
    return a + b;
}

type PrintMode = 'console' | 'alert';
enum OutputMode { CONSOLE, ALERT };

function printResult(result: string | number, printMode: OutputMode) {
    if (printMode === OutputMode.CONSOLE) {
        console.log(result);
    } else if (printMode === OutputMode.ALERT) {
        alert(result)
    }
}
type CalculationResult = CalculationContainer[];
let results: Array<CalculationContainer> = [];

buttonElement.addEventListener('click', () => {
    const num1 = +num1Input.value;
    const num2 = +num2Input.value;
    const result = add(num1, num2);
    const resultContainer = {
        res: result,
        print() {
            console.log(this.res);
        }
    };
    results.push(resultContainer);
    // results[0].print();
    printResult(result, OutputMode.CONSOLE);
    printResult(result, OutputMode.ALERT);
})

function logAndEcho<val>(val: T) {
    console.log(val);
    return val;
}
logAndEcho<string>("Hi there!").split(" ");













