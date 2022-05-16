'use strict';
const rectangle = {
  width: 5,
  height: 5,
  set setWidth(num) {
    if (typeof num === 'number') {
      this.width = num;
    }
  },
  set setHeight(num) {
    if (typeof num === 'number') {
      this.width = num;
    }
  },
  get getPer() {
    return (this.width * 2) + (this.height * 2);
  },
  get getSq() {
    return this.width * this.height;
  },
};
rectangle.width = 25;
rectangle.height = 15;
console.log(rectangle);
console.log(rectangle.getPer);
console.log(rectangle.getSq);
