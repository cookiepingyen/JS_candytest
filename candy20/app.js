// 編號：CANDY-020
// 程式語言：JavaScript
// 題目：檢查字串的 x 跟 o 的數量是不是一樣多，不分大小寫

function xxoo(str) {
  // 實作寫在這裡
  const numOfX = str
    .split("")
    .filter((letter) => letter == "x" || letter == "X").length;
  const numOfY = str
    .split("")
    .filter((letter) => letter == "o" || letter == "O").length;
  return numOfX == numOfY;
}

console.log(xxoo("ooxx")); // true
console.log(xxoo("xxoo")); // true
console.log(xxoo("xxooo")); // false
console.log(xxoo("xoox")); // true
console.log(xxoo("ooAA")); // false
console.log(xxoo("xoXoA")); // true
