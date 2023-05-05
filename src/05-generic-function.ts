// return array function
const ReturnFunction = (params: string): [string] => {
	return [params];
};

const result = ReturnFunction('sdf');

// return  array generic function
const ReturnFunction2 = <T>(params: T): T[] => {
	return [params];
};

const result2 = ReturnFunction2<string>('sdf');

// using spreed operator
const MySpreedFun = <T>(myData: T) => {
	const abc = 'new ';
	const newAdd = { ...myData, abc };
	return newAdd;
};

const data = {
	name: 'My Name',
	age: 32,
	location: 'what',
};

const FunCall = MySpreedFun(data);
FunCall.age;
FunCall.location;
