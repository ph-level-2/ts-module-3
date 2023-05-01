// defaultValue
let defaultValue = (a: number, b: number = 234): number => {
	return a + b;
};
defaultValue(34);

// spread operator
const newMyArray: string[] = ['234', '231', '253'];
const newMyArray2: string[] = ['234', '653', '234'];
newMyArray.push(...newMyArray2);

// rest parameter
const restParameter = (...friends: string[]) => {
	return friends.forEach((e: string) => console.log(e));
};
restParameter('234', '2wer4', '2sd');

// array destructure
let arrayDestructure = [234, 23, 5443, 263];
const [dis] = arrayDestructure;

// object destructure
let ObjDestructure: {
	name2: string;
	age: number;
} = {
	name2: 'my name',
	age: 30,
};

const { name2 } = ObjDestructure;
