function makeArray(firstArray, secondArray, maxLength) {
    // Пиши код ниже этой строки
const newArray = firstArray.concat(secondArray);
  if (newArray.length > maxLength) {
    return newArray.slice(0,maxLength);
  }
  return newArray
    
    // Пиши код выше этой строки
  }
console.log(makeArray(['Манго', 'Поли'], ['Аякс', 'Челси'], 3));
console.log(makeArray(['Манго', 'Поли', 'Хьюстон'], ['Аякс', 'Челси'], 4));
console.log(makeArray(['Манго'], ['Аякс', 'Челси', 'Поли', 'Хьюстон'], 3));
console.log(makeArray(['Земля', 'Юпитер'], ['Нептун', 'Уран'], 2));
console.log(makeArray(['Земля', 'Юпитер'], ['Нептун', 'Уран'], 4));
console.log(makeArray(['Земля', 'Юпитер'], ['Нептун', 'Уран', 'Венера'], 0));
