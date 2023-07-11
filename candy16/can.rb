# 編號：CANDY-016
# 程式語言：JavaScript
# 題目：把原本 snake_case 的字轉換成 camelCase 格式
# 範例："hello_world" -> "helloWorld"

def toCamelCase(str) 
  # 實作寫在這裡
  return str.split("_")
            .map.with_index do |word , index| 
              word.capitalize if index > 0
              word
            end 
            .join("");
  end

p toCamelCase("book") # book
p toCamelCase("book_store") # bookStore
p toCamelCase("get_good_score") # getGoodScore

