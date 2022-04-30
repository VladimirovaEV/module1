const salary = prompt('Укажите ваш доход');
let tax = 0;
if(salary < 15000) {
    tax = salary * 0.13;
} else if (salary >= 15000 && salary <= 50000) {
    tax = (salary - 15000) * 0.2;
} else if (salary > 50000) {
    tax = (salary - 50000) * 0.3;
}
console.log('tax:', tax);