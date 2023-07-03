// 編號：CANDY-017
// 程式語言：JavaScript
// 題目：計算數字的 2 進位裡有幾個 1
// 範例：5 -> 101 -> 2 個 1

function countBits(num) {
  // num如果是偶數則除2再做一次,如果是奇數就代表二進位會有一個1, 因此+1並且除2再做一次, 直到為0就回傳0
  if (num == 0) {
    return 0;
  }
  return num % 2 == 0 ? countBits(num / 2) : 1 + countBits((num - 1) / 2);
}

console.log(countBits(1234)); // 5
console.log(countBits(1450)); // 6
console.log(countBits(9527)); // 8
