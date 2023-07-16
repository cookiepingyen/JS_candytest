# 編號：CANDY-014
# 程式語言：Ruby
# 題目：把鄰近的重複值去除，但仍照原本的順序排序
# 範例："AAABBBDDDAABBBCC" -> ['A', 'B', 'D', 'A', 'B', 'C']

# 如果是字串就分割成陣列,然後篩選出第一個或是跟前一比不同的值
# def uniqueOrder(sequence) 
#   sequence = sequence.split("") if sequence.class == String
#   sequence.select.with_index {|n , i| i == 0 || n != sequence[i-1] }
# end

def uniqueOrder(sequence) 
  sequence = sequence.join("") if sequence.is_a?(Array)
  sequence.squeeze.split('')
end



p uniqueOrder("AABCC") # [ 'A', 'B', 'C']
p uniqueOrder("AAABBBCCBCC") # [ 'A', 'B', 'C', 'B', 'C']
p uniqueOrder([1, 2, 1, 2, 1]) # [ 1, 2, 1, 2, 1 ]
p uniqueOrder([1, 1, 1, 2, 2, 2, 1]) # [1, 2, 1]