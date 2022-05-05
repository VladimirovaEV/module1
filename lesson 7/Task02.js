const allСashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];
const getAverageValue = (arr) => {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
		result += arr[i];
	}
    return Math.floor(result/arr.length);

}

console.log(getAverageValue(allСashbox));