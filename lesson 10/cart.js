const cart = {
    items: [],
    totalPrice: 0,
    count: 0,
    get totalPrice() {
        return this.totalPrice = this.calculateItemPrice();
    },
    add(itemName, itemPrice, itemQuantity = 1) {
        const item = {itemName: itemName, itemPrice: itemPrice, itemQuantity: itemQuantity};
        this.items.push(item);
        this.increaseCount(itemQuantity);
        cart.totalPrice;
        return this.items
        
    },
    increaseCount(num) {
        this.count = this.count + num;
        return this.count;
    },
    calculateItemPrice() {
        let value = 0;
        this.items.forEach((item) => {
            value += item.itemPrice * item.itemQuantity;
        })
        return value;
    },
    clear() {
        const keys = Object.values(cart);
        for (const key of keys) {
            this.items.length = 0;
            this.totalPrice = 0;
            this.count = 0;
        }
    },
    print() {
        console.log(JSON.stringify(this.items));
        console.log(cart.totalPrice);
    }
}

cart.add('apple', 2, 3);
cart.add('book', 10, 2);
cart.add('pen', 3, 5);
cart.print();
//cart.clear();