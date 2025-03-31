export default {
	myVar1: [],
	myVar2: {},
	myFun1: async () => {
		const data = await basicJSON.run();
		const list = [];
		for(const iterator in data){
			if (typeof data[iterator] === 'string') {
				list.push({ label: data[iterator], value: iterator });
			}

		}
		console.log('list', list)
		return list;
	},
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}