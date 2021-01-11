function checkStorage(available, ordered) {
  // Пиши код ниже этой строки
   if (ordered === 0) {
    return 'В заказе еще нет товаров';
  } if (ordered > available) {
    return 'Слишком большой заказ, на складе недостаточно товаров!';
  } 
  
  return 'Заказ оформлен, с вами свяжется менеджер';
  // Пиши код выше этой строки
}
console.log(checkStorage(100, 50));
console.log(checkStorage(100, 130));
console.log(checkStorage(70, 0));
console.log(checkStorage(200, 20));
console.log(checkStorage(200, 250));
console.log(checkStorage(150, 0));