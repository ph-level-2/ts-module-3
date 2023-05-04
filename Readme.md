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
