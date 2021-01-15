function findLongestWord(string) {
  // Пиши код ниже этой строки
  const words = string.split(' ');
  let longestWord = words[0];
  
  for (const word of words) {
  if (word.length > longestWord.length) {
  longestWord = word;
  }
  }
  return longestWord; 

  // Пиши код выше этой строки
}
console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
console.log(findLongestWord('Google do a roll'));
console.log(findLongestWord('May the force be with you'));