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
