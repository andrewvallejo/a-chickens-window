const getRandomNum = () => {
	return Math.floor(Math.random() * 10);
};

export const getRandomPair = () => {
	const addend1 = getRandomNum();
	const addend2 = getRandomNum();
	return [ addend1, addend2 ];
};
