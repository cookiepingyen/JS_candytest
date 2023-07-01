// 編號：CANDY-010
// 程式語言：JavaScript
// 題目：把數字以 10 進位展開式呈現，數字均為大於 0 的正整數
// 範例：9527 變成 "1000 x 9 + 100 x 5 + 10 x 2 + 7"

function expandedForm(num) {
  // 將num轉成字元的陣列
  let str = String(num).split("");
  //將陣列的數字先去除0,再用map轉成讓特定格式, 並加上條件最後一位只回傳數值
  return str
    .filter((n) => n != 0)
    .map((n, i) => {
      return i == str.length - 1 ? n : `${10 ** (str.length - 1 - i)} x ${n}`;
    })
    .join(" + ");
}

console.log(expandedForm(8)); // 印出 8
console.log(expandedForm(25)); // 印出 10 x 2 + 5
console.log(expandedForm(148)); // 印出 100 x 1 + 10 x 4 + 8
console.log(expandedForm(1450)); // 印出 1000 x 1 + 100 x 4 + 10 x 5
console.log(expandedForm(60308)); // 印出 10000 x 6 + 100 x 3 + 8
