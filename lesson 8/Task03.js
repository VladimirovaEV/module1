function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomNumberArray = (num, n, m, str) => {
    const arr = [];
    const result = [];
    for (let i = 0; i < num; i++) {
        arr.push(getRandomInt(n, m))
    }
    if (str === "even") {
        arr.map((item) => {
            if (item % 2 === 0) {
                result.push(item)
            };
        })
        return result;
    } else if (str === "odd") {
        arr.map((item) => {
            if (item % 2 !== 0) {
                result.push(item)
            };
        })
        return result
    }

    }

console.log(randomNumberArray(5, -10, 50, 'even'));