const getMinNumber = (a, b) => {
    return (a + b - Math.abs(a - b)) / 2
}
console.log(getMinNumber(10, 2))