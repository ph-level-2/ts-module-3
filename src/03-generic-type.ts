const NewArrayData: Array<string> = ['sdf', 'dsf'];
const NewArrayData2: Array<number> = [1, 5, 8];
let NewVal: Array<{ name: string; age: number }> = [
	{
		age: 23,
		name: '2345',
	},
];

// pass type by generic value
type GenericType<T> = Array<T>;

let numX: GenericType<number> = [34, 234];
let nameX: GenericType<string> = ['Str', 'New Str'];

// Generic Tuple
type GenericTuple<X, Y> = [X, Y];
const GenTupleValue: GenericTuple<number, string> = [23, '234'];

// write generic  object
type GenObj<T, Y> = [T, Y];
const NewGenObj: GenObj<object, string> = [
	{
		name: 'xyz',
		age: 23,
	},
	'asd',
];

// but we can change object property,so it is not good practice

// Best practice is specify the property
type GenObj2<T, Y> = [T, Y];
const NewGenObj2: GenObj<{ name: string; age: number }, string> = [
	{
		name: 'xyz',
		age: 23,
	},
	'asd',
];
