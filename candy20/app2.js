// 編號：CANDY-020
// 程式語言：JavaScript
// 題目：檢查字串的 x 跟 o 的數量是不是一樣多，不分大小寫

function xxoo(str) {
  // 正則表達, g表示進行全域批配
  //i表示不區分大小寫
  numX = str.match(/x/gi) || [];
  numO = str.match(/o/gi) || [];
  return numX.length == numO.length;
}

console.log(xxoo("ooxx")); // true
console.log(xxoo("xxoo")); // true
console.log(xxoo("xxooo")); // false
console.log(xxoo("xoox")); // true
console.log(xxoo("ooAA")); // false
console.log(xxoo("xoXoA")); // true
