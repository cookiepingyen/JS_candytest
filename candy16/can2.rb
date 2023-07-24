# 編號：CANDY-016
# 程式語言：Ruby
# 題目：把原本 snake_case 的字轉換成 camelCase 格式
# 範例："hello_world" -> "helloWorld"

# 使用 gsub 方法作字串的全局替換
# (_w) 用於批配一個字母,數字或_
# { $1.upcase } 是一個 Ruby 塊(block), $1 表示底線後的單詞字符

def toCamelCase(str)
  str.gsub(/_(\w)/)
end

p toCamelCase("book") # book
p toCamelCase("book_store") # bookStore
p toCamelCase("get_good_score") # getGoodScore

