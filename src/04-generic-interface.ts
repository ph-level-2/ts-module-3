// generic interface
interface NewGenInterface {
	name: string;
	age: number;
}

type GenInterFace<T> = T;

const NewValueGenInterface: GenInterFace<NewGenInterface> = {
	age: 234,
	name: 'New Name',
};

// generic interface using predefined type
interface GenPreIn<T> {
	name: string;
	out: T;
}

// or
type newGenType = { name: 'sd'; age: number };

// or GenPreIn:newGenType
const NewValue: GenPreIn<{ name: 'sd'; age: number }> = {
	name: 'New',
	out: {
		age: 324,
		name: 'sd',
	},
};

// optional chaining
interface GenType<T, U = null> {
	name: T;
	age?: U;
}
const NewValeX: GenType<string, string> = {
	name: 'sdf',
	age: 'sdf',
};
