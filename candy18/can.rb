# 編號：CANDY-018
# 程式語言：Ruby
# 題目：實作一個可以印出隨機整數的函數


#引數如果只有一個就回傳
# def randomNumber(*args) 
#   return (0..args.first-1).to_a.sample if args.length ==1
#   (args.first..args[1]-1).to_a.sample
# end



# def randomNumber(*args) 
#   return rand(0...args.first) if args.length ==1
#   rand(args.first...args[1])
# end


def randomNumber(*args) 
  rand(args.one? ? args.first : args.first...args[1])
end

p randomNumber(50) # 隨機印出 0 ~ 49 之間的任何一個數字
p randomNumber(5, 30) # 隨機印出 5 ~ 29 之間的任何一個數字
