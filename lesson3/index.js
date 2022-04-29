{
    const productName = prompt("Введите наименование товара");
    const quantityOfProduct = Number(prompt("Введите количество товара"));
    const categoryOfProduct = prompt("Введите категорию товара");
    const priceOfProduct = Number(prompt("Введите цену товара"));

    console.log(typeof quantityOfProduct);
    console.log(typeof priceOfProduct);
    console.log(`На складе ${quantityOfProduct} единиц товара ${productName} на сумму ${quantityOfProduct*priceOfProduct} деревянных`);
}

