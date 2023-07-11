# 編號：CANDY-014
# 程式語言：Ruby
# 題目：把鄰近的重複值去除，但仍照原本的順序排序
# 範例："AAABBBDDDAABBBCC" -> ['A', 'B', 'D', 'A', 'B', 'C']

# 先聲明一個空陣列且放入第一個element, 在從第二個開始判段是不是跟前一個相同
def uniqueOrder(sequence) 
  sequence = sequence.split("") if (sequence.class == String)
  return sequence.select.with_index {|n , index| index == 0 || n != sequence[index-1] }
end

p uniqueOrder("AABCC") # [ 'A', 'B', 'C']
p uniqueOrder("AAABBBCCBCC") # [ 'A', 'B', 'C', 'B', 'C']
p uniqueOrder([1, 2, 1, 2, 1]) # [ 1, 2, 1, 2, 1 ]
p uniqueOrder([1, 1, 1, 2, 2, 2, 1]) # [1, 2, 1]