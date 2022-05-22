'use strict';
(() => {
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];
  const FIGURES_ENG = ['rock', 'scissors', 'paper'];
  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  let language = confirm('ENG') ? 'ENG' : '';

  const game = (language) => {
    const result = {
      player: 0,
      computer: 0,
    };

    const lang = language === 'EN' || language === 'ENG' ?
      FIGURES_ENG : FIGURES_RUS;

    return function start() {
      const computerFigure = (lang[getRandomIntInclusive(0, 2)]);
      console.log(computerFigure);
      const playerFigure = ((prompt(lang)).toLowerCase()).trim();
      const outMessage = function(language) {
        if (language === 'ENG') {
          confirm('Are you sure you want to get out?')
        ? alert(`Result:\nComputer: ${result.computer}\nPlayer: ${result.player}`) : start();
        return;
        } else {
          confirm('Точно ли вы хотите выйти?')
        ? alert(`Результат:\nКомпьютер: ${result.computer}\nИгрок: ${result.player}`) : start();
        return;
        };
      };
      const message = function(language) {
        if (language === 'ENG') {
          confirm('Continue?') ? start() : outMessage(language);
        } else {
          confirm('Ещё?') ? start() : outMessage(language);
        }
      };
      let playerFigureResult = lang.find(item => item.charAt(0) === playerFigure.charAt(0));
      if (playerFigure === '') {
        start();
      };
      if (playerFigure === computerFigure) {
        if (language === 'ENG') {
           alert(`Computer: ${computerFigure}\nYou: ${playerFigure}\nDraw`);
        } else {
           alert(`Компьютер: ${computerFigure}\nВы: ${playerFigure}\nНичья`);
        }
        start();
      }
      if ((computerFigure === lang[0] && playerFigure.charAt(0) === lang[2].charAt(0)) || (computerFigure === FIGURES_RUS[1] && playerFigure.charAt(0) === lang[0].charAt(0)) || (computerFigure === lang[2] && playerFigure.charAt(0) === lang[1].charAt(0))) {
        result.player += 1;
        if (language === 'ENG') {
          alert(`Computer: ${computerFigure}\nYou: ${playerFigureResult}\nYou win`);
        } else {
          alert(`Компьютер: ${computerFigure}\nВы: ${playerFigureResult}\nВы выиграли`);
        }
        message(language);
      } else {
        result.computer += 1;
        if (language === 'ENG') {
          alert(`Computer: ${computerFigure}\nYou: ${playerFigureResult}\nComputer win`);
        } else {
          alert(`Компьютер: ${computerFigure}\nВы: ${playerFigureResult}\nКомпьютер выиграл`);
        }
        message(language);
      }
      if (playerFigure === null) {
        outMessage(language);
      }
    };
  };
  window.RPS = game(language);
})();

