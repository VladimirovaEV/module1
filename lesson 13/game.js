'use strict';
(() => {
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];
  const FIGURES_LETTER = ['к', 'н', 'б'];
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
        ? alert(`Результат:\nКомпьютер: ${result.computer}\nИгрок: ${result.player}`) : start()
      };
      const message = function() {
          confirm('Ещё?') ? start() : outMessage();
      };
      if ((playerFigure === '') || (FIGURES_RUS.includes(playerFigure) === false)) {
        start();
      };
      if (playerFigure === computerFigure) {
        alert(`Компьютер: ${computerFigure}\nВы: ${playerFigure}\nНичья`);
        start();
      }
      if (computerFigure === 'камень') {
        if (playerFigure === 'бумага') {
          FIGURES_LETTER.forEach((item) => {
            if (playerFigure.charAt(0) === item) {
              result.player += 1;
              alert(`Компьютер: ${computerFigure}\nВы: ${playerFigure}\nВы выиграли`);
              message();
            }
          });
        };
        if (playerFigure === 'ножницы') {
          FIGURES_LETTER.forEach((item) => {
            if (playerFigure.charAt(0) === item) {
              result.computer += 1;
              alert(`Компьютер: ${computerFigure}\nВы: ${playerFigure}\nКомпьютер выиграл`);
              message();
            }
          });
        };
      }
      if (computerFigure === 'ножницы') {
        if (playerFigure === 'бумага') {
          FIGURES_LETTER.forEach((item) => {
            if (playerFigure.charAt(0) === item) {
              result.computer += 1;
              alert(`Компьютер: ${computerFigure}\nВы: ${playerFigure}\nКомпьютер выиграл`);
              message();
            }
          });
        };
        if (playerFigure === 'камень') {
          FIGURES_LETTER.forEach((item) => {
            if (playerFigure.charAt(0) === item) {
              result.player += 1;
              alert(`Компьютер: ${computerFigure}\nВы: ${playerFigure}\nВы выиграли`);
              message();
            }
          });
        };
      }
      if (computerFigure === 'бумага') {
        if (playerFigure === 'камень') {
          FIGURES_LETTER.forEach((item) => {
            if (playerFigure.charAt(0) === item) {
              result.computer += 1;
              alert(`Компьютер: ${computerFigure}\nВы: ${playerFigure}\nКомпьютер выиграл`);
              message();
            }
          });
        };
        if (playerFigure === 'ножницы') {
          FIGURES_LETTER.forEach((item) => {
            if (playerFigure.charAt(0) === item) {
              result.player += 1;
              alert(`Компьютер: ${computerFigure}\nВы: ${playerFigure}\nВы выиграли`);
              message();
            }
          });
        };
      }
      if (playerFigure === null) {
        outMessage();
      }
    };
  };
  window.RPS = game;
})();

// if (computerFigure === 'камень') {
//           if (playerFigure === 'бумага') {
//             result.player += 1;
//             alert(`Компьютер: ${computerFigure}\nВы: ${playerFigure}\nВы выиграли`);
//             message();
//           } else if (playerFigure === 'ножницы') {
//             result.computer += 1;
//             alert(`Компьютер: ${computerFigure}\nВы: ${playerFigure}\nКомпьютер выиграл`);
//             message();
//           }
//         }
//         if (computerFigure === 'ножницы') {
//           if (playerFigure === 'бумага') {
//             result.computer += 1;
//             alert(`Компьютер: ${computerFigure}\nВы: ${playerFigure}\nКомпьютер выиграл`);
//             message();
//           } else if (playerFigure === 'камень') {
//             result.player += 1;
//             alert(`Компьютер: ${computerFigure}\nВы: ${playerFigure}\nВы выиграли`);
//             message();
//           }
//         }
//         if (computerFigure === 'бумага') {
//           if (playerFigure === 'камень') {
//             result.computer += 1;
//             alert(`Компьютер: ${computerFigure}\nВы: ${playerFigure}\nКомпьютер выиграл`);
//             message();
//           } else if (playerFigure === 'ножницы') {
//             result.player += 1;
//             alert(`Компьютер: ${computerFigure}\nВы: ${playerFigure}\nВы выиграли`);
//             message();
//           }
//         }