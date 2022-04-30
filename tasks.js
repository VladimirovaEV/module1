const rain = Math.round(Math.random());
if (rain === 1) {
    console.log('Пошёл дождь. Возьмите зонт!');
} else if (rain === 0) {
    console.log('Дождя нет!');
}


const mathematicsResult = Number(prompt("Введите кол-во баллов по математике"));
const russianLanguageResult = Number(prompt("Введите кол-во баллов по русскому языку"));
const InformatiсsResult = Number(prompt("Введите кол-во баллов по информатике"));
const result = mathematicsResult + russianLanguageResult + InformatiсsResult;
if (result >= 265) {
    prompt("Поздравляю, вы поступили на бюджет!");
} else {
    prompt("Вы не поступили на бюджет");
}


const banknote = 100;
const sum = Number(prompt("Сколько денег вы хотите снять?"));
if(sum > banknote && sum % banknote == 0) {
    console.log(`Сумма ${sum} доступна к снятию`);
} else if (sum < banknote || sum % banknote > 0) {
    console.log(`Сумма ${sum} не доступна к снятию`)
}


