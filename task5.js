/*Task 5 Функція, яка знайде максимальну дату у масиві */
const arr = [{
	id: 1,
	time_update: "Sunday March 13 2021"
},
	{
		id: 2,
		time_update: "Thursday March 17 2021"
	},
	{
		id: 3,
		time_update: "Friday March 11 2021"
	},
	{
		id: 4,
		time_update: "Monday March 28 2021"
	},
];

function sortAndReduceArray(data, index) {
	return data.sort((a, b) => {
		return new Date(a['time_update']).getTime() > new Date(b['time_update']).getTime() ? -1 : 1;
	})
		.filter((_, elIdx) => {
			return elIdx < index
		})
}

console.log(sortAndReduceArray(arr, 1))
