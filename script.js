// const getWeekends = (string) => {
//   if (string === 'long') {
//       return ['saturday', 'sunday']
//   }
//   else if (string === 'short'){
//       return ['sat', 'sun']
//   } else {
//       return 'You write a wrong type'
//   }
// }
//
// console.log(getWeekends('who?'))

// const swap = (array) => {
//     let result = []
//     for (let i = 0; i < array.length; i++ ) {
//         result.push(array.length - i)
//     }
//     return result
// }
//
// console.log(swap([1, 2, 3]))

// const cities = ['moscow', 'london', 'berlin', 'porto']

// const arrayFunc = (array, index = null, string) => {
//   if (index < array.length) {
//       return array[index]
//   } else if (index > array.length && string || index < 0 && string) {
//       return string
//   } else {
//       return null
//   }
// }
//
// console.log(arrayFunc(cities, 3, 'string'))

// const names = ['john', 'smith', 'karl'];
//
// const addPrefix = (array, prefix) => {
//     let newArray = []
//     for (let i = 0; i < array.length; i++) {
//         newArray[i] = `${prefix} ` + array[i]
//     }
//     return newArray
// }
//
// const newNames = addPrefix(names, 'Mr');
// console.log(newNames);
// console.log(names);

// const names = ['john', 'smith', 'karl', 'j', 'k'];
//
// const reverse = (array) => {
//   let b = array.length
//   for (let i = array.length; i > 0; i--) {
//       array.push(array[i - 1])
//   }
//   array.splice(0, b)
// }
//
// reverse(names);
// console.log(names); // => ['karl', 'smith', 'john']
//
// reverse(names);
// console.log(names); // => ['john', 'smith', 'karl']

// const calculateSum = (array) => {
//     if (array.length === 0) {
//         return 0
//     } else {
//         let sum = 0;
//         for (let i = 0; i < array.length; i++) {
//             if (array[i] % 3 === 0) {
//                 sum += array[i]
//             }
//         }
//         return sum
//     }
// }
//
// const coll1 = [8, 9, 21, 19, 18, 22, 7];
// console.log(calculateSum(coll1)); // 48)
//
// const coll2 = [2, 0, 17, 3, 9, 15, 4];
// calculateSum(coll2); // 27
//
// const coll = [];
// calculateSum(coll); // 0

// const getTotalAmount = (array, currency) => {
//     let rub = [];
//     let eur = [];
//     let usd = [];
//
//     for (let item of array) {
//         if (item.slice(0, 3) === 'rub') {
//             rub.push(item.slice(4));
//         } else if (item.slice(0, 3) === 'eur') {
//             eur.push(item.slice(4));
//         } else if (item.slice(0, 3) === 'usd') {
//             usd.push(item.slice(4));
//         }
//     }
//     if (currency === 'rub') {
//         console.log(calculateArraySum(rub))
//     } else if (currency === 'eur') {
//         console.log(calculateArraySum(eur))
//     } else if (currency === 'usd') {
//         console.log(calculateArraySum(usd))
//     }
// }
//
// const calculateArraySum = (array) => {
//     if (array.length === 0) {
//         return 0
//     } else {
//         let sum = 0;
//         for (let i = 0; i < array.length; i++) {
//                 sum += +array[i]
//         }
//         return sum
//     }
// }
//
// const money1 = [
//     'eur 10', 'usd 1', 'usd 10', 'rub 50', 'usd 5',
// ];
// getTotalAmount(money1, 'usd') // 16
//
// const money2 = [
//     'eur 10', 'usd 1', 'eur 5', 'rub 100', 'eur 20', 'eur 100', 'rub 200',
// ];
// getTotalAmount(money2, 'eur') // 135
//
// const money3 = [
//     'eur 10', 'rub 50', 'eur 5', 'rub 10', 'rub 10', 'eur 100', 'rub 200',
// ];
// getTotalAmount(money3, 'rub') // 270

// const str = 'some text';
// str.slice(1, 6); // 'ome t'
// str.slice(7);    // 'xt'

// const getSuperSeriesWinner = (array) => {
//     let canadaScore = 0;
//     let ussrScore = 0;
//     for (let [canada, ussr] of array) {
//         canadaScore += canada > ussr;
//         ussrScore += ussr > canada;
//     }
//     return canadaScore > ussrScore ? 'canada' : ussrScore > canadaScore ? 'ussr' : null;
// };
//
// const scores = [
//     [3, 7], // Первая игра
//     [4, 1], // Вторая игра
//     [4, 4],
//     [3, 5],
//     [4, 5],
//     [3, 2],
//     [4, 3],
//     [6, 5],
// ];
//
// console.log(getSuperSeriesWinner(scores)); // 'canada'

// const buildDefinitionList = (array) => {
//     let result = [];
//     for (const item of array) {
//         result.push(`<dt>${item[0]}</dt><dd>${item[1]}</dd>`);
//     }
//     const dlResult = `<dl>${result}</dl>`
//     console.log(dlResult)
//     return dlResult;
// }
//
// const definitions = [
//     ['Блямба', 'Выпуклость, утолщения на поверхности чего-либо'],
//     ['Бобр', 'Животное из отряда грызунов'],
// ];
//
// buildDefinitionList(definitions);
// // '<dl><dt>Блямба</dt><dd>Выпуклость, утолщение на поверхности чего-либо</dd><dt>Бобр</dt><dd>Животное из отряда грызунов</dd></dl>';

// const makeCensored = (sentence, array) => {
//   const separator = ' ';
//   const words = sentence.split(separator);
//   let result = [];
//   for (const item of words) {
//     if (array.includes(item)) {
//       result.push('$#%!')
//     } else {
//       result.push(item)
//     }
//   }
//   result = result.join(separator);
//   result = `${result}`
//   console.log(result)
//   return result
// }
//
// const sentence = 'When you play the game of thrones, you win or you die';
// const result = makeCensored(sentence, ['die', 'play']);
// // When you $#%! the game of thrones, you win or you $#%!
//
// const sentence2 = 'chicken chicken? chicken! chicken';
// const result2 = makeCensored(sentence2, ['?', 'chicken']);
// // '$#%! chicken? chicken! $#%!';

// const countUniqChars = (string) => {
//     let checkString = ''
//     for (let i = 0; i < string.length; i++) {
//         if (string.length === 0){
//             return 0
//         } else if (!checkString.includes(string[i])) {
//             checkString += string[i]
//         }
//     }
//     console.log(checkString.length);
// }
//
// const text1 = 'yyab'; // y, a, b
// countUniqChars(text1); // 3
//
// const text2 = 'You know nothing Jon Snow';
// countUniqChars(text2); // 13
//
// // Если передана пустая строка, то функция должна вернуть `0`
// const text3 = '';
// countUniqChars(text3); // 0

// const checkIsBalancedAll = (expression) => {
//     const stack = [];
//
//     for (const symbol of expression) {
//         if (symbol === '(' || symbol === '[' || symbol === '{' || symbol === '<') {
//             stack.push(symbol);
//         } else if (symbol === ')' || symbol === ']' || symbol === '}' || symbol === '>') {
//             // Проверяем соответствие закрывающего и открывающего символов
//             const lastOpenSymbol = stack.pop();
//             if ((symbol === ')' && lastOpenSymbol !== '(') ||
//                 (symbol === ']' && lastOpenSymbol !== '[') ||
//                 (symbol === '}' && lastOpenSymbol !== '{') ||
//                 (symbol === '>' && lastOpenSymbol !== '<')) {
//                 return false;
//             }
//         }
//     }
//
//     return stack.length === 0;
// };
//
// console.log(checkIsBalancedAll('(<)')); // false
// console.log(checkIsBalancedAll('<(>)')); // true
// console.log(checkIsBalancedAll('(<{}>)')); // true

// const getDistance = (pointA, pointB) => {
//     const [x1, y1] = pointA;
//     const [x2, y2] = pointB;
//     return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
// };
//
// const getTheNearestLocation = (locations, point) => {
//     if (locations.length === 0) {
//         return null;
//     }
//
//     return locations.reduce((nearestLocation, location) => {
//         const [, locationPoint] = location;
//         const distanceToNearest = getDistance(point, nearestLocation[1]);
//         const distanceToLocation = getDistance(point, locationPoint);
//
//         return distanceToLocation < distanceToNearest ? location : nearestLocation;
//     }, locations[0]);
// };
//
// const locations = [
//     ['Park', [10, 5]],
//     ['Sea', [1, 3]],
//     ['Museum', [8, 4]],
// ];
// const currentPoint = [5, 5];
//
// console.log(getTheNearestLocation([], currentPoint)); // null
// console.log(getTheNearestLocation(locations, currentPoint)); // ['Museum', [8, 4]]

const getMax = (array) => {
  if (array.length === 0) return null;
  return Math.max(...array);
};

console.log(getMax([1, 10, 8])); // 10

/// hello
