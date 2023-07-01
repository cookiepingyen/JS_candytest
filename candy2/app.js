// 編號：CANDY-002
// 程式語言：JavaScript
// 題目：請寫一小段程式，印出連續陣列裡缺少的字元

const chars1 = ["a", "b", "c", "d", "f", "g"];
const chars2 = ["O", "Q", "R", "S"];

function missingChar(chars) {
  let head_num = chars[0].charCodeAt(0); //找出開頭數字的unicode
  if (65 <= head_num <= 90 || 97 <= head_num <= 122) {
    //列出連續陣列,再依序判斷哪個字元有缺少
    for (let i = head_num; i <= head_num + chars.length - 1; i++) {
      if (chars.includes(String.fromCharCode(i)) == false) {
        return String.fromCharCode(i);
      }
    }
  }
}

console.log(missingChar(chars1)); // 印出 e
console.log(missingChar(chars2)); // 印出 P

// 提示：
// 可使用字串的 charCodeAt 方法...

//  A~Z ：65~90
//  a~z ：97~122
