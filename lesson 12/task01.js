'use strict';
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const game = () => {
  const numberOfBot = getRandomInt(1, 100);
  console.log(numberOfBot);
  const foo = (numberOfUsers) => {
    const numberOfUser = Number(prompt('Отгадайте число от 1 до 100'));
    if (isNaN(numberOfUser) === true) {
      alert('Введи число!');
      foo();
    }
    if (numberOfUser > numberOfBot && numberOfUser !== null) {
      alert('Меньше! Попробуй еще!');
      foo();
    }
    if(numberOfUser < numberOfBot && numberOfUser !== null) {
      alert('Больше! Попробуй еще!');
      foo();
    }
    if (numberOfUser === numberOfBot) {
      alert('Правильно!');
      numberOfUser;
    }
  }
  foo();
};

game();
