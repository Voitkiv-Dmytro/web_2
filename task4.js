/*Task 4 Алгоритм бінарного пошуку*/
let binarySearch = (arr, target, start, finish) => {
	if (finish < 0) return null;
	let mid = Math.floor((start + finish) / 2);
	if (arr[mid] === target) {
		return mid;
	} else if (mid === start && mid === finish) return null;
	else if (target > arr[mid]) {
		return binarySearch(arr, target, mid + 1, finish);
	} else {
		return binarySearch(arr, target, start, mid - 1);
	}
};
const array = [-4, 0, 3, 5, 7, 8, 9];
console.log(binarySearch(array, 3, 0, array.length - 1));
