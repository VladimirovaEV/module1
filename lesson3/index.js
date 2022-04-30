{
    const productName = prompt("Введите наименование товара");
    const quantityOfProduct = prompt("Введите количество товара");
    if (typeof quantityOfProduct !== Number) {
        prompt("Вы ввели некорректные данные");
    }
    const categoryOfProduct = prompt("Введите категорию товара");
    const priceOfProduct = prompt("Введите цену товара");
    if (typeof priceOfProduct !== Number) {
        prompt("Вы ввели некорректные данные");
    }

    // или можно вывести сообщение о некорректных данных в конце
    // if (typeof quantityOfProduct !== Number || typeof priceOfProduct !== Number) {
    //    prompt("Вы ввели некорректные данные");
   // }

}

