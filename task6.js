/*Task 6 Сортування бульбашкою*/

let Bubble_sort= (mas) => {
	const size = mas.length
	for (i=0; i<size-1;i++){
		for (j=0; j<(size-1)-i;j++){
			if (mas[j]>mas[j+1]){
				let swap = mas[j];
				mas[j]=mas[j+1];
				mas[j+1]=swap;
			}
		}
	}
	return mas
}
let mas = [4,7,3,1,8,2]
console.log(Bubble_sort(mas))
