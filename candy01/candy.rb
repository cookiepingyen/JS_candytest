
list1 = [19, 5, 42, 2, 77]
list2 = [23, 15, 59, 4, 17]

def sumOfSmallestValues(list) 
    # 實作程式碼寫在這裡
  return list.sort.first(2).sum
end




p (sumOfSmallestValues(list1)) #印出 7
p (sumOfSmallestValues(list2)) #

