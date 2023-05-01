// null
const searchName = (value: string | null) => {
	if (value === null) {
		console.log('get result');
	} else {
		console.log('not get');
	}
};
searchName(null);

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

// never
function throwError(message: string): never {
	throw new Error(message);
}
throwError('this is error');
