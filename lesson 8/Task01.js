function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomNumberArray = (num) => {
    const arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(getRandomInt(0, 100))
    }
    return arr
}

console.log(randomNumberArray(5));
