## previous start script way 01

- install typescript =>

```bash
 npm i -g typescript
```

- create {script.ts} file
- run tsc script.ts in terminal

```bash
tsc script.ts
```

- index.html have connect script.js
- automatic create script.js
- i'm fetch .ps1 security error solution in nodemon or search in youtube

**folder structure**
init type script =>

```bash
tsc --init
```

- tsconfig.json file have outDir and rootDir for folder
- rootDir have .ts
- outDir have .js and connect html
- now =>

```bash
tsc
```

- or watch mode =>

```bash
tsc -w
```

## class 1 & start script way 02

**install Type Script**

- install global ts
- install node version control nvm
- using >ts node dev for run ts file node environment

we can run 3 way ts file

- first compile {tsc} then run {node file.js} file
- using nodemon for js file and {tsc -w} flag
- using ts-node-dev

```bash
npm i ts-node-dev --save-dev
```

```javascript
// if you have folder you have to change dir like this  {./src/index.ts}
"scripts": {
"start": "ts-node-dev --respawn --transpile-only index.ts",
"test": "echo \"Error: no test specified\" && exit 1"
},

```

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

```javascript
// array destructure
let arrayDestructure = [234, 23, 5443, 263];
const [dis] = arrayDestructure;
```

```javascript
// object destructure
let ObjDestructure: {
	name2: string,
	age: number,
} = {
	name2: 'my name',
	age: 30,
};

const { name2 } = ObjDestructure;

// you can not add type like this at obj destructure
const { name2: string } = ObjDestructure;
```

## class 7

**type alias**

- type alias
- function type alias

```javascript
// type alias
type MyType = {
	name: string,
	age?: number,
	home: string,
};
```

- function add alias

```javascript
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
```

## class 8

**Union Intersection**

- add two type using type union
- add intersection for use common type

```javascript
// union
type first = {
	name: string,
};
type second = {
	name: string,
	exp: string,
	yr: number,
};

const newDev: first | second = {
	name: 'sdf',
	exp: 'sdf',
	yr: 324,
};
```

```javascript
// intersection
type first2 = {
	name: string,
};
type second2 = first2 & {
	exp: string,
	yr: number,
};

const newDev2: second2 = {
	name: 'dev2',
	exp: '2 x ',
	yr: 324,
};
```

## class 9

- null

```javascript
// null
const searchName = (value: string | null) => {
	if (value === null) {
		console.log('get result');
	} else {
		console.log('not get');
	}
};
searchName(null);
```

```javascript
// unknown type
const getMySpeed = (value: unknown) => {
	if (typeof value === 'number') {
		return (value * 1000) / 3600;
	}
	if (typeof value === 'string') {
		const [spd, unit] = value.split(' ');
		return (parseInt(spd) * 1000) / 3600;
	}
};

getMySpeed(234);
getMySpeed('sdf kh-1');
```

```javascript
// never
// if did not any return we can use never
function throwError(message: string): never {
	throw new Error(message);
}
throwError('this is error');
```

## class 10

```javascript
// ternary operator
let age = 24;
const adult = age >= 18 ? 'Yes' : 'no';

// Nullish operator
// only work for null and undefined

const isAuth = '';
const userName = isAuth ?? 'gest';
const userName2 = isAuth ? isAuth : 'gest';
```
