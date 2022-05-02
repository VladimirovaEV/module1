const calculate = (sum, quantity, code) => {
    if (quantity > 10) {
        sum -= sum*0.03;
    }
    if (sum > 30000) {
        sum -= (sum-30000)*0.15;
    }
    if (code === 'METHED') {
        sum -= sum*0.1;
    }
    if (code === 'G3H2Z1' && sum > 2000) {
        sum = sum - 500;
    }
    return sum;
}
console.log(calculate(50000, 11, 'METHED'));