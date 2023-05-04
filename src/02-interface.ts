interface IUser {
	name: string;
	age: number;
}

const useValue: IUser = {
	age: 24,
	name: 'New Name',
};

interface INewUser extends IUser {
	position: string;
	location: string;
}

const CreateUser: INewUser = {
	age: 32,
	location: 'Bangladesh',
	name: 'new',
	position: 'new Create User',
};

// function type alias
type FunTypeAlias = (num: number, num2: number) => number;
const AddNum: FunTypeAlias = (num: number, num2: number) => num + num2;
console.log(AddNum(23, 43));

// function interface
interface AdMember {
	(num: number, num2: number): number;
}

const AddNewNum: AdMember = (num, num2) => num + num2;

// interface Array
interface IArrayNum {
	[index: number]: string;
}
const RollNumber: IArrayNum = ['name 1', 'name 2'];
