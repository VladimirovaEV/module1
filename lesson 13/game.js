'use strict';
(() => {
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];
  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const game = (language) => {
    const result = {
      player: 0,
      computer: 0,
    };
    return function start() {
      const computerFigure = (FIGURES_RUS[getRandomIntInclusive(0, 2)]);
      console.log(computerFigure);
      const playerFigure = ((prompt('камень, ножницы, бумага?')).toLowerCase()).trim();
      const outMessage = function() {
        confirm('Точно ли вы хотите выйти?')
        ? alert(`Результат:\nКомпьютер: ${result.computer}\nИгрок: ${result.player}`) : start();
        return;
      };
      const message = function() {
          confirm('Ещё?') ? start() : outMessage();
      };
      let playerFigureResult = FIGURES_RUS.find(item => item.charAt(0) === playerFigure.charAt(0));
      if (playerFigure === '') {
        start();
      };
      if (playerFigure === computerFigure) {
        alert(`Компьютер: ${computerFigure}\nВы: ${playerFigure}\nНичья`);
        start();
      }
      if ((computerFigure === FIGURES_RUS[0] && playerFigure.charAt(0) === FIGURES_RUS[2].charAt(0)) || (computerFigure === FIGURES_RUS[1] && playerFigure.charAt(0) === FIGURES_RUS[0].charAt(0)) || (computerFigure === FIGURES_RUS[2] && playerFigure.charAt(0) === FIGURES_RUS[1].charAt(0))) {
        result.player += 1;
        alert(`Компьютер: ${computerFigure}\nВы: ${playerFigureResult}\nВы выиграли`);
        message();
      } else {
        result.computer += 1;
        alert(`Компьютер: ${computerFigure}\nВы: ${playerFigureResult}\nКомпьютер выиграл`);
        message();
      }

      if (playerFigure === null) {
        outMessage();
      }
    };
  };
  window.RPS = game;
})();

