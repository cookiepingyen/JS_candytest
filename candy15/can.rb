# 編號：CANDY-015
# 程式語言：Ruby
# 題目：把原本的字串拆解成 2 個字元一組，若不足 2 個字則補上底線
# 範例：
#      "abcdef" -> ['ab', 'cd', 'ef']
#      "abcdefg" -> ['ab', 'cd', 'ef', 'g_']

# #.表示批配任意單個字符
# #{1,2} 表示匹配前面的元素至少1 次，最多 2 次。
# #g 表示進行全域批配

def splitString(str) 
  # 用scan方法與正則表達把引數分成1~2個字元為一組的陣列,沒有會回傳[]
  # 如果輸入字串長度為奇數, 陣列最後一個值加上"_"
  result = str.scan(/.{1,2}/);
  result[-1] = result[-1].ljust(2, '_') if str.length.odd?
  result;
end

p splitString("abcdef") #["ab", "cd", "ef"]
p splitString("abcdefg") #["ab", "cd", "ef", "g_"]
p splitString("") #[]

