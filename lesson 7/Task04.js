const allСashbox = [
  [12, 4500], 
  [7, 3210], 
  [4, 650], 
  [3, 1250], 
  [9, 7830], 
  [1, 990], 
  [6, 13900], 
  [1, 370]
];

const getAveragePriceGoods = (arr) => {
    let quantity = 0;
    let amount = 0;
    for (let elem of arr) {
        quantity += elem[0];
        amount += elem[1];
    }
    return amount / quantity;
}

console.log(getAveragePriceGoods(allСashbox));