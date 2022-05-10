const cart = {
    items: [],
    totalPrice: 0,
    count: 0,
    add(itemName, itemPrice, itemQuantity = 1) {
        const item = {itemName: itemName, itemPrice: itemPrice, itemQuantity: itemQuantity};
        this.items.push(item);
        this.increaseCount(itemQuantity);
        this.getTotalPrice();
        return this.items
        
    },
    increaseCount(num) {
        this.count = this.count + num;
        return this.count;
    },
    calculateItemPrice() {
        this.items.forEach((item) => {
            let value = item.itemPrice * item.itemQuantity;
            this.totalPrice = value;
        })  
        return this.totalPrice;   

    },
    getTotalPrice() {
        this.totalPrice += this.calculateItemPrice();
        return this.totalPrice;
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
        console.log(this.totalPrice);
    }
}

cart.add('apple', 2, 3);
cart.add('book', 10, 2);
cart.add('pen', 3, 5);
cart.print();
cart.clear();
console.log(cart)
