# 編號：CANDY-013
# 程式語言：Ruby
# 題目：根據台灣財政部所提供的公司統編驗證規則，計算統一編號是否正確
# https://www.fia.gov.tw/singlehtml/3?cntId=c4d9cff38c8642ef8872774ee9987283

def isValidVatNumber(vat) 
  #1.規定8碼數字才可進入判斷
  #2.聲明一個陣列紀錄每個數字的權重, 並將每個數字加權後的十位數與個位數加到sum變數
  #3.如果被10整除, 或是第7位數為7且sum+1可以被10整除, return true, 否則return false
  if (vat.length == 8) 
    ratio = [1, 2, 1, 2, 1, 2, 4, 1]
    sum = 0
    vat.split("").each_with_index do |num, i| 
      sum += (num.to_i * ratio[i]) % 10 + (num.to_i * ratio[i]) / 10
    end
    sum % 5 == 0 || (vat[6] == 7 && (sum + 1) % 5 == 0);
  end
end


p isValidVatNumber("10458575") # true
p isValidVatNumber("88117125") # true
p isValidVatNumber("53212539") # true
p isValidVatNumber("88117126") # false