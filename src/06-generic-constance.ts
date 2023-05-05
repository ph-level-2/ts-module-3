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
