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

// get data form api
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
