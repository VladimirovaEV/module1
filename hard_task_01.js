
function NOD(a, b) {
    if (a > b) {
        if (a%b === 0) {
        return a%b;
    } else {
        while (b !== 0) {
            b = a % (a = b);
        }
        return a
     }
    } else if (b > a) {
        if (b%a === 0) {
        return b%a;
    } else {
        while (a !== 0) {
            a = b % (b = a);
        }
        return b
     }
    }
}
console.log(NOD(27, 12))