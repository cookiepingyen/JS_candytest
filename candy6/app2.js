// 編號：CANDY-006
// 程式語言：JavaScript
// 題目：找出在數字陣列裡跟其它元素不一樣的值

// function findDifferent(numbers) {
//   return numbers.filter((n) => {
//     numbers.indexOf(n) === numbers.lastIndexOf(n);
//   })[0];
// }

function findDifferent(numbers) {
  let different = numbers.filter((n) => n != numbers[0]);
  return different.length == 1 ? different[0] : numbers[0];
}

console.log(findDifferent([1, 1, 1, 1, 3, 1, 1, 1])); // 印出 3
console.log(findDifferent([2, 2, 2, 4, 2, 2])); // 印出 4
console.log(findDifferent([8, 3, 3, 3, 3, 3, 3, 3])); // 印出 8
