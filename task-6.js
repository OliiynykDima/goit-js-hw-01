let total = 0;
let input = +prompt('Введите любое число');
while(input){
	total += input;
	input = +prompt('Введите любое число');
};
alert(`Общая сумма чисел равна ${+total}`);

console.log(Boolean("false"));