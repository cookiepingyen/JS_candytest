# 編號：CANDY-019
# 程式語言：JavaScript
# 題目：檢查是否為某個數字的平方數

def isSquare(num) 
  # 實作寫在這裡
  return num ** 0.5 % 1 == 0 if num > 0
  false
end

p isSquare(0)  # true
p isSquare(4)  # true
p isSquare(5)  # false
p isSquare(100)  # true
p isSquare(-4)  # false
p isSquare(-1)  # false
