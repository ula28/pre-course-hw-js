// Составь программу для let rule = "Еще не родился тот человек, который, поставил бы цель, и не смог бы стать программистом." Используй конструкцию switch case: если в строке знаков меньше 25 выдай в консоль "Все таки нет правил без исключения" и если больше 25 "У меня 100 пудов все получится", а если ровно 25, то «50 на 50»

// для проверки длины строки используем свойство length для переменной rule.и теперь в зависимотсти от длины строки выведется опеределеное сообщение
// let rule = "Еще не родился тот человек, который поставил бы цель и не смог бы стать программистом.";
// switch (rule.length) {
// 	case 24:
// 		console.log("Все таки нет правил без исключения");
// 		break;
// 	case 25:
// 		console.log("50 на 50");
// 		break;
// 	case 26:
// 		console.log("У меня 100 пудов все получится");
// 		break;
//    default:
// 		console.log("Длина строки не равна 24, 25 или 26");
// 		break;

// }

// когда вызываем функцию switch(true), она будет сравнивать "true" с условиями в каждом case и выполнять сооьветствующий блок кода, в зависимости от дли ны строки "rule "

let rule = "Еще не родился человек ко";

switch(true) {
	case rule.length > 25:
		console.log("У меня 100 пудов все получится");
		break;
	case rule.length < 25:
		console.log("Все таки нет правил без исключения");
		break;
	case rule.length === 25:
		console.log("50 на 50");
		break;
	

}

// let rule = "Еще не родился тот человек, который поставил бы цель и не смог бы стать программистом.";

// // создадим функцию, чтобы динамически менялась длина строки.в функции аргумент закинули, в него,при вызове этой функции, впишутся данные(здесь-rule), которые мы передадим : checkStringLength(rule)

// const checkStringLength = (string) => {
// 	// проверbм обьект на дллину символов
// 	switch(string.length) {
// 		case  string.length < 25:
// 			 console.log("Все таки нет правил без исключения");
// 			 break;
// 		case  string.length === 25:
// 			 console.log("50 на 50");
// 			 break;
// 		default:
// 			 console.log("У меня 100 пудов все получится")
//   }
// }
// checkStringLength(rule);

// let rule = "Еще не.";

// const checkStringLength = (string) => {
// 	// проверяем длину строки
// 	switch (string.length) {
// 	  case string.length < 25:
// 		 console.log("Все таки нет правил без исключения");
// 		 break;
// 	  case  string.length === 25:
// 		 console.log("50 на 50");
// 		 break;
// 	  default:
// 		 console.log("У меня 100 пудов все получится");
// 	}
//  };
 
 
//  checkStringLength(rule);



// let rule = "Еще не родился ";

// const length = function(string){
// 	// проверяем длину строки
// 	switch (string.length) {
// 	  case string.length < 25:
// 		 console.log("Все таки нет правил без исключения");
// 		 break;
// 	  case  string.length === 25:
// 		 console.log("50 на 50");
// 		 break;
// 	  default:
// 		 console.log("У меня 100 пудов все получится");
// 	}
//  };
 
 
//  length(rule);
 



