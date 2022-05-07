const randomLeapYearArray = (n, m) => {
    const arr = [];
    for (let i = n; i <= m; i++) {
        if ((i % 4 === 0 && i % 100 !== 0) || i % 400 === 0) {
            arr.push(i);
        }
    }
    return arr
}

console.log(randomLeapYearArray(2000, 2020));