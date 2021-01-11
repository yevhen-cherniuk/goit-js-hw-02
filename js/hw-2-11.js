function calculateEngravingPrice(message, pricePerWord) {
    // Пиши код ниже этой строки
    
    const price = message.split(' ').length * pricePerWord;
  
    return price;
}
console.log(calculateEngravingPrice('JavaScript у меня в крови', 10));
console.log(calculateEngravingPrice('JavaScript у меня в крови', 20));
console.log(calculateEngravingPrice('Веб-разработка это творческая работа', 40));