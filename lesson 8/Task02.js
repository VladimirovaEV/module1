function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomNumberArray = (num, n, m) => {
    const arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(getRandomInt(n, m))
    }
    return arr
}

console.log(randomNumberArray(5, -10, 50));