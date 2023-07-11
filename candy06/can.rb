# 編號：CANDY-006
# 程式語言：Ruby
# 題目：找出在數字陣列裡跟其它元素不一樣的值


def findDifferent(numbers) 
  
  different = numbers.select{|n| n != numbers[0]};
  return different.length == 1 ? different[0] : numbers[0];
  
end

puts findDifferent([1, 1, 1, 1, 3, 1, 1, 1]); # 印出 3
p findDifferent([2, 2, 2, 4, 2, 2]); # 印出 4
p findDifferent([8, 3, 3, 3, 3, 3, 3, 3]); # 印出 8