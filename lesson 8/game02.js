function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
const game = () => {
    let check = true;
        const num1 = Number(prompt("введите первое число"));
        console.log(num1);
        const num2 = Number(prompt("Введите второе число"));
        console.log(num2);
        const numberOfBot = getRandomInt(num1, num2);
        console.log(numberOfBot)
        let quantityOfNumbers = 0;
        for (let i = num1; i <= num2; i++) {
            quantityOfNumbers += 1;
        }
        const numbersOfUser = [];
        const quantityOfCheck = Math.round(quantityOfNumbers * 0.3);
        console.log(quantityOfCheck);
        const numberOfUser = prompt(`Отгадайте число от ${num1} до ${num2}`);
        numbersOfUser.push(numberOfUser)
        console.log(numbersOfUser)
        // while (quantityOfCheck > 0 || check == true) {
        //     if (isNaN(numberOfUser) === true) {
        //         alert('Введи число!')
        //     } else {
        //         if (numberOfUser > numberOfBot && numberOfUser !== null) {
        //         alert('Меньше! Попробуй еще!');
        //         quantityOfNumbers -= 1;
        //         } else if(numberOfUser < numberOfBot && numberOfUser !== null) {
        //         alert('Больше! Попробуй еще!');
        //         quantityOfNumbers -= 1;
        //         } else if (numberOfUser == numberOfBot) {
        //             alert('Правильно!');
        //             check = false;
        //         } else {
        //             check = false;
        //         }
        //     }
        // }
            
    
}

game();