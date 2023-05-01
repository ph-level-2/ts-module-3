// type alias
type MyType = {
	name: string;
	age?: number;
	home: string;
};

// create 1
const name01: MyType = {
	name: 'Name 1',
	age: 234,
	home: 'Home 1',
};

//  function add alias
type operationType = (x: number, y: number) => number;
const functionAddAlias = (
	num1: number,
	num2: number,
	operation: operationType
) => {
	return operation(num1, num2);
};

functionAddAlias(23, 53, (x, y) => x + y);
