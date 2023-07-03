// 編號：CANDY-018
// 程式語言：JavaScript
// 題目：實作一個可以印出隨機整數的函數

function randomNumber(num1, num2) {
  // 實作寫在這裡
  // if (typeof num2 === "undefined") {
  //   return Math.floor(Math.random() * num1);
  // } else {
  //   return Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
  // }

  return typeof num2 === "undefined"
    ? Math.floor(Math.random() * num1)
    : Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
}

console.log(randomNumber(50)); // 隨機印出 0 ~ 49 之間的任何一個數字
console.log(randomNumber(5, 30)); // 隨機印出 5 ~ 29 之間的任何一個數字
