/*Task 2 Функція яка повертає чи входить шукана стрічка у задану*/
let small_sentence = "Ukraine is the largest country in Europe."
let false_sentence = "Hello world!"
let big_sentence = "Ukraine is the largest country in Europe. At 603,628 sq. km."

console.log(big_sentence.toLowerCase().includes(small_sentence.toLowerCase()))
console.log(big_sentence.toLowerCase().includes(false_sentence.toLowerCase()))