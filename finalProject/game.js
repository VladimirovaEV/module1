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
      }
      const winner = () => {
        result.computer <= 0 ? alert(`Вы выиграли`) : alert(`Вы проиграли`);
      }
      const playerBall = Number(prompt(`Загадай число от 1 до ${result.player}`));
      const computerBall = getRandomIntInclusive(1, result.computer);
      alert(`Компьютер: ${computerBall}`);
      if (computerBall === playerBall) {
        result.player -= computerBall;
        result.computer += computerBall;
        resultMessage();
      } else {
        result.player += computerBall;
        result.computer -= computerBall;
        resultMessage();
      }
      if (result.computer <= 0 || result.player <= 0) {
        winner();
        return;
      } else {
        start();
      }
    };
};
window.RPS = game();
})();