function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
const game = () => {
    const numberOfBot = getRandomInt(1, 100);
    console.log(numberOfBot);
    let check = true;
    while(check) {
        const numberOfUser = prompt('Отгадайте число от 1 до 100');
            if (isNaN(numberOfUser) === true) {
                alert('Введи число!')
            } else {
                if (numberOfUser > numberOfBot && numberOfUser !== null) {
                alert('Меньше! Попробуй еще!')
                } else if(numberOfUser < numberOfBot && numberOfUser !== null) {
                alert('Больше! Попробуй еще!')
                } else if (numberOfUser == numberOfBot) {
                    alert('Правильно!');
                    check = false;
                } else {
                    check = false;
                }
            }
    }
    
}

game();