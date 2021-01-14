function slugify(title) {
  let slug
  // Пиши код ниже этой строки
 slug = title.toLowerCase().split(' ').join('-');
 
 return slug;
  // Пиши код выше этой строки
}
console.log(slugify('Массивы для новичков'));
console.log(slugify('Английский для разработчика'));
console.log(slugify('Десять секретов JavaScript'));
console.log(slugify('Как стать JUNIOR разработчиком за ДВЕ НЕДЕЛИ'));