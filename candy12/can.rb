# 編號：CANDY-012
# 程式語言：Ruby
# 題目：把數字加總，最終濃縮成個位數
# 範例：9527 => 9 + 5 + 2 + 7 => 23 => 2 + 3 => 5
#      1450 => 1 + 4 + 5 + 0 => 10 => 1 + 0 => 1

def numberReducer(num) 
  # 實作寫在這裡
  sum = 0 
  while (num >= 1) do
    sum += num % 10
    num = num / 10
  end
  return sum >= 10 ? numberReducer(sum) : sum;
end

p numberReducer(9527) # 印出 5
p numberReducer(1450) # 印出 1
p numberReducer(5566108) # 印出 4
p numberReducer(1234567890) # 印出 9
