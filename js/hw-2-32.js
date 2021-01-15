function includes(array, value) {
  // Пиши код ниже этой строки
for (const element of array){
if (element === value){
	return true;	
}
}

return   false;
  // Пиши код выше этой строки
}
console.log(includes([1, 2, 3, 4, 5], 3));
console.log(includes([1, 2, 3, 4, 5], 17));
console.log(includes(['Земля', 'Марс', 'Венера', 'Юпитер', 'Сатурн'], 'Юпитер'));
console.log(includes(['Земля', 'Марс', 'Венера', 'Юпитер', 'Сатурн'], 'Уран'));
console.log(includes(['яблоко', 'слива', 'груша', 'апельсин'], 'слива'));
console.log(includes(['яблоко', 'слива', 'груша', 'апельсин'], 'киви'));