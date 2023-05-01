// simple function
function newFUn(a: number, b: number = 234): number {
	return a + b;
}
newFUn(234);

// arrow function
const newFunc = (a: number, b: number): number => a + b;
newFunc(234, 234);

// callback function
let myArray = [23, 24, 234, 234];
const ar = myArray.map((e: number) => e * e);

// function into object
const person: {
	name: string;
	balance: number;
	addBalance(money: number): number;
} = {
	name: 'Abdur Shobur',
	balance: 3,
	addBalance(money: number) {
		return this.balance + money;
	},
};
person.addBalance(234);
