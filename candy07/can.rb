# 編號：CANDY-007
# 程式語言：Ruby
# 題目：在某個數字陣列裡，可能藏有某個不合群的奇數或偶數，試著找出它！

#1
# def findSomeDifferent(numbers) 
#    #如果偶數只有一個,回傳偶數值第一個,如果偶數多個就回傳奇數
#   even = numbers.select{|n|n.even?}
#   odd = numbers.select{|n|n.odd?}
#   odd.length ==1 ? odd[0] : even[0]
# end

#2
# def findSomeDifferent(numbers)
#   odd, even = numbers.partition(&:odd?)
#   odd.length == 1 ? odd[0] : even[0]
# end


def findSomeDifferent(numbers)
  numbers.partition(&:odd?).find(&:one?).first
end


p findSomeDifferent([2, 4, 0, 100, 4, 11, 2602, 36]); # 印出 11
p findSomeDifferent([160, 3, 1719, 19, 11, 13, -21]); # 印出 160