function createArrayOfNumbers(min, max) {
  let numbers = [];
  // Пиши код ниже этой строки
for ( let i = min; i <= max; i += 1)
   numbers.push(i);


  // Пиши код выше этой строки
  return numbers;
}
console.log(createArrayOfNumbers(1, 3));
console.log(createArrayOfNumbers(14, 17));
console.log(createArrayOfNumbers(29, 34));