const myName: string = 'Steve';
const message: string = `Hello ${myName}`;

console.log(message);
console.log(message.toLocaleUpperCase());

const count: number = 10;
const price: number = 9.99;
const temperature: number = -15;
const distance: number = 3.4e-5;

const total: number = count * price;
console.log(total);

const infinity: number = Infinity;
const minusInfinity: number = -Infinity;
const notANunber: number = NaN;

const isOpen: boolean = true;

if (isOpen) {
  console.log('open!');
}

let user: string | null = null;

function login(userName: string) {
  user = userName;
  console.log(`Logged in as ${user}`);
}

function logout() {
  user = null;
  console.log('Logged out');
}
login('joey');
logout();

let someValue: any;

someValue.toString();
someValue = false;
someValue.toFixed();
