const asFor = (collection, cb) => {
	const newCollection = [];
	for (let i = 0; i < collection.length; i++) {
		const item = collection[i];
		const calledItem = cb(item);
		calledItem !== undefined && newCollection.push(calledItem);
	}

	return newCollection;
};

export default asFor;

