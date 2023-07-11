# 編號：CANDY-001
# 程式語言：Ruby
# 題目：找出陣列裡最小的兩個值的總和
list1 = [19, 5, 42, 2, 77]
list2 = [23, 15, 59, 4, 17]

def sumOfSmallestValues(list) 
   list.sort.first(2).sum
end

p (sumOfSmallestValues(list1)) #印出 7
p (sumOfSmallestValues(list2)) #印出 19

