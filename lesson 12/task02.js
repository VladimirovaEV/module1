'use strict';
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const foo = (arr) => {
  const num = getRandomInt(1, 10);
  arr.push(num);
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
  		result += arr[i];
  	}
  if (result < 50) {
    return foo(arr);
  }
  return arr;
};
const arr = [];
console.log(foo(arr));
