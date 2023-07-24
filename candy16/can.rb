# 編號：CANDY-016
# 程式語言：Ruby
# 題目：把原本 snake_case 的字轉換成 camelCase 格式
# 範例："hello_world" -> "helloWorld"

# def toCamelCase(str) 
#   str.split("_")
#      .map.with_index do |word , index| 
#         word.capitalize if index > 0
#         word
#       end 
#      .join("")
# end

# def toCamelCase(str) 
#   return str if str.split("_").length == 1
#   str.split("_").first + str.split("_")[1..-1].map(&:capitalize).join("")
# end

def toCamelCase(str) 
  str.split("_").map.with_index{ |word, i| i == 0? word : word.capitalize }.join
end


p toCamelCase("book") # book
p toCamelCase("book_store") # bookStore
p toCamelCase("get_good_score") # getGoodScore

