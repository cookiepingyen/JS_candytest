# 編號：CANDY-008
# 程式語言：Ruby
# 題目：傳入一字串，計算得分最高的字
#      英文字母 a 得 1 分、b 得 2 分、c 得 3 分，以此類推。
#      所有傳入的字都是小寫。

def highestScoreWord(input) 
  wordlist = input.split(" ");
  numberlist = wordlist.map  {|word|  
    sum = 0
    word.chars.each do |letter|
      sum += letter.ord - 96
    end
    sum #這邊不可以return 會提前回傳整個function的回傳值
  }
  return wordlist[numberlist.index(numberlist.max)]

end



p highestScoreWord("lorem ipsum dolor sit amet"); # 印出 ipsum
p highestScoreWord("heyn i need a rubygem up to build this"); # 印出 rubygem
p highestScoreWord("in time machine there are some bugs"); # 印出 there
