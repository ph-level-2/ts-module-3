let any: any;
any = 'This is any text';
(any as string).length;

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

// check try catch error
type customError = {
	message: string;
};
try {
} catch (err) {
	console.log((err as customError).message);
}

// type assertion short hand property or our custom set type
// using <string> like this
let num: string | number;
num = 'new value';
(<string>num).length;
