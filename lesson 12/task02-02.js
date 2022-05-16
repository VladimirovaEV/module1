'use strict';
const cart = {
  items: [],
  totalPrice: 0,
  count: 0,
  discount: 0,
  set setDiscount(promocode) {
    if (promocode === 'METHED') {
        return this.discount = 15;
    } else if (promocode === 'NEWYEAR') {
        return this.discount = 21;
    }
  },
  get totalPriceAll() {
    return this.totalPrice = this.calculateItemPrice();
  },
  add(itemName, itemPrice, itemQuantity = 1) {
    const item = {
      itemName,
      itemPrice,
      itemQuantity,
    };
    this.items.push(item);
    this.increaseCount(itemQuantity);
    cart.totalPrice;
    return this.items;
  },
  increaseCount(num) {
    this.count += num;
    return this.count;
  },
  calculateItemPrice() {
    let value = 0;
    let totalValue = 0;
    this.items.forEach((item) => {
      value += item.itemPrice * item.itemQuantity;
    });
    return totalValue = value - (value/100*this.discount);
  },
  clear() {
    const keys = Object.values(cart);
    // eslint-disable-next-line no-unused-vars
    for (const key of keys) {
      this.items.length = 0;
      this.totalPrice = 0;
      this.count = 0;
    }
  },
  print() {
    console.log(JSON.stringify(this.items));
    console.log(cart.totalPriceAll);
  },
};

cart.add('apple', 2, 3);
cart.add('book', 10, 2);
cart.add('pen', 3, 5);
cart.setDiscount = 'METHED';
console.log(cart);
cart.print();
// cart.clear();
