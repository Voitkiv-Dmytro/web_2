/*Task 3 Функція яка рахує факторіал числа*/
function factorial(n) {
	return (n != 1) ? n * factorial(n - 1) : 1;
}

console.log(factorial(5));