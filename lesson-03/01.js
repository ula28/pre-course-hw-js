const colors = ['синий', 'черный', 'зеленый', 'красный', 'желтый', 'зеленый'];

function createColorString () {
	// фильтруем массив, чтобы оставить только требуемые цвета
		const germanColors = colors.filter(color => color === 'черный' || color === 'красный' || color === 'желтый');

		// обьединяем отфильтрованные цвета в строку с разделителем
		return germanColors.join('-');
}
console.log(createColorString ());