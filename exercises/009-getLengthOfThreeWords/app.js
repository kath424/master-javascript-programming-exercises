function getLengthOfThreeWords(word1, word2, word3) {
  // your code here
  let palabra1 = word1.length;
  let palabra2 = word2.length;
  let palabra3 = word3.length;
  let cantidadTotal = palabra1 + palabra2 + palabra3
  
  return cantidadTotal
  
}

let output = getLengthOfThreeWords('some', 'other', 'words');
console.log(output); // --> 14
