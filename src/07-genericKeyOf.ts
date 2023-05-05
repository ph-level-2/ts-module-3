type MyNEWobj = {
	name: string;
	location: string;
	age: number;
};

type KeyOf = keyof MyNEWobj;
const B: KeyOf = 'location';

// using function
const GenKeyOfFunction = <X, Y extends keyof X>(Obj: X, Key: Y) => {
	Obj[Key];
};

const property = GenKeyOfFunction({ name: 'sdf', age: 24 }, 'age');
