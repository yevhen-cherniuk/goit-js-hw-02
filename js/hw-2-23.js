function filterArray(numbers, value) {
  // Пиши код ниже этой строки
const newNumbers = [];
  for ( const number of numbers){
  if (number > value){
   newNumbers.push(number);
  }
  }

return newNumbers;
  // Пиши код выше этой строки
}
console.log(filterArray([1, 2, 3, 4, 5], 3));
console.log(filterArray([1, 2, 3, 4, 5], 4));
console.log(filterArray([1, 2, 3, 4, 5], 5));
console.log(filterArray([12, 24, 8, 41, 76], 38));
console.log(filterArray([12, 24, 8, 41, 76], 20));