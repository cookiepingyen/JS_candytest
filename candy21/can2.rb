# 編號：CANDY-021
# Ruby
# 題目：實作 Stack 資料結構

class Stack 
  def initialize(item)
    @item = item
  end

  def push(num)
    @item.push(num) if num.any?
  end

  def pop()
    @item.pop
  end
  
  def size()
    @item.length
  end

end

stack = Stack.new
stack.push(123);
stack.push(456);
stack.push();
p stack.size; # 印出 2

item = stack.pop(); # 取出元素
p item; # 印出 456

stack.pop(); # 繼續取出元素
p stack.size; # 印出 0
