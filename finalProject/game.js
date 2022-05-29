'use strict';
(() => {
  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const game = () => {
    const result = {
      player: 5,
      computer: 5,
    };
    return function start() {
      const resultMessage = () => {
        alert(`Ваш результат - ${result.player}\nРезультат компьютера - ${result.computer}`);
      };
      const winner = () => {
        result.computer <= 0 ? alert(`Вы выиграли`) : alert(`Вы проиграли`);
      };
      const outMessage = function() {
        confirm('Точно ли вы хотите выйти?') ? null : start();
      };
      const message = function() {
          confirm('Ещё?') ? start() : outMessage();
      };
      const playerChoice = prompt(`Загадай число от 1 до ${result.player}`);
      const playerBall = Number(playerChoice);
      const computerBall = getRandomIntInclusive(1, result.computer);
      const computerChoice = function() {
        alert(`Компьютер загадал: ${computerBall}`);
      };
      if (playerChoice === '0') {
        alert(`Число должно быть больше 0`);
        start();
      }
      if (playerChoice === null) {
        outMessage();
        return;
      }
      if (computerBall === playerBall) {
        result.player -= computerBall;
        result.computer += computerBall;
      } else {
        result.player += computerBall;
        result.computer -= computerBall;
      }
      computerChoice();
      resultMessage();
      if (result.computer <= 0 || result.player <= 0) {
        winner();
        message();
      } else {
        start();
      }
    };
  };
  window.RPS = game();
})();
