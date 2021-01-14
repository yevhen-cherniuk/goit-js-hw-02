function makeStringFromArray(array, delimeter) {
  let string;
  // Пиши код ниже этой строки
 string = array.join(delimeter);
 
 
  // Пиши код выше этой строки
  return string;
}
console.log(makeStringFromArray(['Манго', 'спешит', 'на', 'поезд'], ' '));
console.log(makeStringFromArray(['М', 'а', 'н', 'г', 'о'], ''));
console.log(makeStringFromArray(['лучшее', 'за', 'неделю'], '_'));
