// 編號：CANDY-013
// 程式語言：JavaScript
// 題目：根據台灣財政部所提供的公司統編驗證規則，計算統一編號是否正確
// https://www.fia.gov.tw/singlehtml/3?cntId=c4d9cff38c8642ef8872774ee9987283

function isValidVatNumber(vat) {
  //1.規定8碼數字才可進入判斷
  //2.聲明一個陣列紀錄每個數字的權重, 並將每個數字加權後的十位數與個位數加到sum變數
  //3.如果被10整除, 或是第7位數為7且sum+1可以被10整除, return true, 否則return false
  if (vat.length == 8) {
    const ratio = [1, 2, 1, 2, 1, 2, 4, 1];
    let sum = vat.split("").reduce((sum, num, i) => {
      return (
        sum +
        ((Number(num) * ratio[i]) % 10) + //個位數
        Math.trunc((Number(num) * ratio[i]) / 10) //十位數
      );
    }, 0);

    return sum % 10 == 0 || (vat[6] == 7 && (sum + 1) % 10 == 0);
  }
}





console.log(isValidVatNumber("10458575")); // true
console.log(isValidVatNumber("88117125")); // true
console.log(isValidVatNumber("53212539")); // true
console.log(isValidVatNumber("88117126")); // false

// 先將統編每位數乘以一個固定數字固定值

//   5   3   2   1   2   5   3   9
// x 1   2   1   2   1   2   4   1
// ================================
//   5   6   2   2   2  10  12   9

// 接著將所得值分成十位數及個位數十位數 個位數

//  十位數 個位數
//   0      5
//   0      6
//   0      2
//   0      2
//   0      2
//   1      0
//   1      2
//   0      9

// 將十位數與個位數全部結果值加總

// 判斷結果

// 第一種: 加總之後的值可以被 10 整除即是正確的統編。
// 第二種: 或是，如果統編的第 7 碼是 7 的話，再把總值加 1 之後可 10 整除也是正確的統編。
