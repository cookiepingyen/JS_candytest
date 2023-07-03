// 編號：CANDY-008
// 程式語言：JavaScript
// 題目：傳入一字串，計算得分最高的字
//      英文字母 a 得 1 分、b 得 2 分、c 得 3 分，以此類推。
//      所有傳入的字都是小寫。

function highestScoreWord(input) {
  //將輸入的字串,轉成一個單字的字串陣列,並將每個單字轉成分數陣列
  let wordlist = input.split(" ");
  let scorelist = wordlist.map((word) => {
    let sum = 0;
    for (i = 0; i < word.length; i++) {
      sum += word.charCodeAt(i) - 96;
    }
    return sum;
  });
  //數字陣列中max的索引位置傳給單字陣列,並回傳對應到的單字
  let maxindex = scorelist.indexOf(Math.max(...scorelist));
  return wordlist[maxindex];
}

// function highestScoreWord(input) {
//   //直接將輸入的字串分成單字,轉成編碼值相加存進scorelist中
//   //將scorelist最大值的索引值傳給單字的索引並return
//   let scorelist = input.split(" ").map((word) => {
//     return word.split("").reduce((sum, letter) => {
//       return sum + letter.charCodeAt(0) - 96;
//     }, 0);
//   });
//   return input.split(" ")[scorelist.indexOf(Math.max(...scorelist))];
// }

console.log(highestScoreWord("lorem ipsum dolor sit amet")); // 印出 ipsum
console.log(highestScoreWord("heyn i need a rubygem up to build this")); // 印出 rubygem
console.log(highestScoreWord("in time machine there are some bugs")); // 印出 there
