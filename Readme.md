## class 1

- install global ts
- install node version control nvm
- using >ts node dev for run ts file node environment

## class 2

**primitive type:**

- number
- string
- boolean
- null
- undefined

```javascript
let num: number = 234;
let bool: boolean = true;
let str: string = 'string';
let nu: null = null;
let un: undefined = undefined;
let a = undefined; // type is any
const a = undefined; // type is undefined
```

## class 3

**array**

- simple array
- tuple array

```javascript
let arr: number[] = [];
let arr: [number, string] = [234, 'sdf'];
```

## class 4

**object**

- simple object
- readonly object
- already defined value

```javascript
let simpleObj: {
	company: 'sdf',
	name: string,
} = {
	company: 'sdf',
	name: 'sdf',
};
```

```javascript
let readonlyObj: {
	readonly nwe: 'you cant not edit';
	company: 'sdf';

} = {
	nwe: 'you cant not edit ',
	company: 'sdf',

};

```

```javascript
let alreadyDefinedObj: {
	company: 'you can not change value',
	name: string,
} = {
	company: 'you can not change value',
	name: 'new value',
};
```

## class 5

**Function**

- simple function
- arrow function
- callback function
  function into object
- pass value

```javascript
function simpleFunction(a: number, b: number = 234): number {
	return a + b;
}
simpleFunction(234);
```

```javascript
function arrowFunction = (a: number, b: number): number => a + b;
newFunc(234, 234);

```

```javascript
let myArray = [23, 24, 234, 234];
function callbackFunction = myArray.map((e: number) => e * e);

```

```javascript
// function into object
const functionIntoObject: {
	name: string,
	balance: number,
	addBalance(money: number): number,
} = {
	name: 'Abdur Shobur',
	balance: 3,
	addBalance(money: number) {
		return this.balance + money;
	},
};
person.addBalance(234);
```

## class 6

**Spread Rest Default Value**
never use first value value as default value if more then one parameter

```javascript
let defaultValue = (a: number, b: number = 234): number => {
	return a + b;
};

defaultValue(34);
```

```javascript
// spread operator
const newMyArray: string[] = ['234', '231', '253'];
const newMyArray2: string[] = ['234', '653', '234'];
newMyArray.push(...newMyArray2);
```

```javascript
// rest parameter
const restParameter = (...friends: string[]) => {
	return friends.forEach((e: string) => console.log(e));
};
restParameter('234', '2wer4', '2sd');
```
