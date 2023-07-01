// 編號：CANDY-007
// 程式語言：JavaScript
// 題目：在某個數字陣列裡，可能藏有某個不合群的奇數或偶數，試著找出它！

// 1
function findSomeDifferent(numbers) {
  //如果偶數只有一個,回傳偶數值第一個,如果偶數多個就回傳奇數
  let even = numbers.filter((n) => n % 2 == 0);
  return even.length == 1 ? even[0] : numbers.find((n) => n % 2 != 0);
}

// 2
// function findSomeDifferent(numbers) {
//   //如果偶數只有一個,回傳偶數值,否則就回傳奇數
//   return numbers.filter((n) => n % 2 == 0).length == 1
//     ? numbers.find((n) => n % 2 == 0)
//     : numbers.find((n) => n % 2 != 0);
// }

function findSomeDifferent(numbers) {
  // 實作寫在這裡
  const evenList = numbers.filter((n) => n % 2 == 0);
  const oddList = numbers.filter((n) => n % 2 == 1);
  if (evenList.length == 1) {
    return evenList[0];
  } else {
    return oddList[0];
  }
}
console.log(findSomeDifferent([2, 4, 0, 100, 4, 11, 2602, 36])); // 印出 11
console.log(findSomeDifferent([160, 3, 1719, 19, 11, 13, -21])); // 印出 160
