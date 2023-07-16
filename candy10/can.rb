# 編號：CANDY-010
# 程式語言：Ruby
# 題目：把數字以 10 進位展開式呈現，數字均為大於 0 的正整數
# 範例：9527 變成 "1000 x 9 + 100 x 5 + 10 x 2 + 7"

#將陣列的數字先去除0,再用map轉成讓特定格式, 並加上條件最後一位只回傳數值
def expandedForm(num) 
  numlist = num.to_s.split("")
  numlist.select{ |n| n != "0" }.map.with_index do |n, i|
    (i == numlist.length - 1) ? n : "#{10 ** (numlist.length - 1 - i)} x #{n}"
  end.join(" + ")
end


p expandedForm(8); # 印出 8
p expandedForm(25); # 印出 10 x 2 + 5
p expandedForm(148); # 印出 100 x 1 + 10 x 4 + 8
p expandedForm(1450); # 印出 1000 x 1 + 100 x 4 + 10 x 5
p expandedForm(60308); # 印出 10000 x 6 + 100 x 3 + 8