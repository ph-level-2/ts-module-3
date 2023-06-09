## Class 1

**Type Assertion**

- there is a problem in any type=> does not support intellisense

```javascript
let any:any
any='This is any text'
any. // no support js method
```

- Type script is give access for human write type that is type assertion
- we have full access to write type assertion

```javascript
// Function
function kgToGram(params: string | number): string | number | undefined {
	if (typeof params === 'string') {
		const value = parseFloat(params) * 1000;
		return `The converted result is ${value} gram`;
	}
	if (typeof params === 'number') {
		const value = params * 1000;
		return `The Result is ${value}`;
	}
}

console.log(kgToGram(234) as number);
console.log(kgToGram('234') as string);
```

**Try Catch**

```javascript
// check try catch error
type customError = {
	message: string;
};
try {
} catch (err) {
	console.log((err as customError).message);
}
```

**Using <> for Type assertion**

## Class 2

**Interface**

- interface have some simple solution like this

```javascript
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

console.log(CreateUser);
```

**Function Type Alias And Interface**

```javascript
// function type alias
type FunTypeAlias = (num: number, num2: number) => number;
const AddNum: FunTypeAlias = (num: number, num2: number) => num + num2;
console.log(AddNum(23, 43));

// function interface
interface AdMember {
	(num: number, num2: number): number;
}

const AddNewNum: AdMember = (num, num2) => num + num2;
```

**Interface Array**

```javascript
// interface Array
interface IArrayNum {
	[index: number]: string;
}
const RollNumber: IArrayNum = ['name 1', 'name 2'];
```

## Class 3

**Generic Type**

- Use Angle <> For Write Type

```javascript
const NewArrayData: Array<string> = ['sdf', 'dsf'];
const NewArrayData2: Array<number> = [1, 5, 8];
let NewVal: Array<{ name: string, age: number }> = [
	{
		age: 23,
		name: '2345',
	},
];
```

- Pass Type when we need ass like function parameter

```javascript
// pass type by generic value
type GenericType<T> = Array<T>;

let numX: GenericType<number> = [34, 234];
let nameX: GenericType<string> = ['Str', 'New Str'];
```

- Generic Tuple

```javascript
// Generic Tuple
type GenericTuple<X, Y> = [X, Y];
const GenTupleValue: GenericTuple<number, string> = [23, '234'];
```

- Write Generic Object

```javascript
// write generic  object
type GenObj<T, Y> = [T, Y];
const NewGenObj: GenObj<object, string> = [
	{
		name: 'xyz',
		age: 23,
	},
	'asd',
];
```

- Generic Object Best Practice

```javascript
// but we can change object property,so it is not good practice

// Best practice is specify the property
type GenObj2<T, Y> = [T, Y];
const NewGenObj2: GenObj<{ name: string, age: number }, string> = [
	{
		name: 'xyz',
		age: 23,
	},
	'asd',
];
```

## Class 4

**Generic Interface**

- Simple generic Interface

```javascript
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
```

- Generic interface predefined

```javascript
// generic interface using predefined type
interface GenPreIn<T> {
	name: string;
	out: T;
}

// or
type newGenType = { name: 'sd', age: number };

// or GenPreIn:newGenType
const NewValue: GenPreIn<{ name: 'sd', age: number }> = {
	name: 'New',
	out: {
		age: 324,
		name: 'sd',
	},
};
```

- Optional chining

```javascript
// optional chaining
interface GenType<T, U = null> {
	name: T;
	age?: U;
}
const NewValeX: GenType<string, string> = {
	name: 'sdf',
	age: 'sdf',
};
```

## Class 5

**GENERIC FUNCTION**

- Return Array Function

```javascript
// return array function
const ReturnFunction = (params: string): [string] => {
	return [params];
};

const result = ReturnFunction('sdf');
```

- Generic Function

```javascript
// return  array generic function
const ReturnFunction2 = <T>(params: T): T[] => {
	return [params];
};

const result2 = ReturnFunction2 < string > 'sdf';
```

- Using Spread Operator
- <T> for get Object Type otherwise you can not get
  FunCall.age;
  FunCall.location;

```javascript
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
```

## Class 6

**Generic Constance**

- Some property will fixed

```javascript
const newFunGenConstant = <T extends { name: string; age: number }>(
	params: T
) => {
	return params;
};

const dataX = {
	name: 'name',
	age: 234,
	loc: 'sdf',
};
const GenConstantFunction = newFunGenConstant(dataX);


```

## Class 7

**KEY OF GENERIC**

- Create New Type Using Key Of another Type

```javascript
type MyNEWobj = {
	name: string;
	location: string;
	age: number;
};

type KeyOf = keyof MyNEWobj;
const B: KeyOf = 'location';

```

- using function key of

```javascript
// using function
const GenKeyOfFunction = <X, Y extends keyof X>(Obj: X, Key: Y) => {
	Obj[Key];
};

const property = GenKeyOfFunction({ name: 'sdf', age: 24 }, 'age');

```

## Class 8

**Async Function**

- create promise data
- we can use type or interface etc

```javascript
// create Promise
const GetPromiseFun = (): Promise<string> => {
	return new Promise((resolved, rejected) => {
		const data = 'Test';
		if (data) {
			resolved('data is get');
		} else {
			rejected('Data not Get');
		}
	});
};
const GetPromiseData = async (): Promise<string> => {
	const data = await GetPromiseFun();
	return data;
};
```

- Get Data from Api

```javascript
/ get data form api
interface I_ToDo {
	userId: string;
	id: string;
	title: string;
	completed: string;
}

const GetTodo = async (): Promise<I_ToDo> => {
	const data = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
	return await data.json();
};

const getTodoData = async (): Promise<void> => {
	const data = await GetTodo();
	console.log(data);
};

getTodoData();
```
