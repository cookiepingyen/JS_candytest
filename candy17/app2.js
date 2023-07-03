// 編號：CANDY-017
// 程式語言：JavaScript
// 題目：計算數字的 2 進位裡有幾個 1
// 範例：5 -> 101 -> 2 個 1

function countBits(num) {
  //將數字轉成二進位的字串,在分割成陣列後, 回傳陣列=="1"的長度
  return num
    .toString(2)
    .split("")
    .filter((n) => n == "1").length;
}

console.log(countBits(1234)); // 5
console.log(countBits(1450)); // 6
console.log(countBits(9527)); // 8
