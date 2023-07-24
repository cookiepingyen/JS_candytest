# 編號：CANDY-022
# Ruby
# 題目：實作 Queue 資料結構

class Queue
  def initialize(item)
    @item = item
  end

  def enqueue(num)
    @item.push(num) if num.any?
  end

  def dequeue()
    @item.shift
  end
  
  def length()
    @item.length
  end

end

queue = Queue.new;
queue.enqueue(123);
queue.enqueue(456);
queue.enqueue();
p queue.length; # 印出 2

item = queue.dequeue(); # 取出元素
p item; # 印出 123

queue.dequeue(); # 繼續取出元素
p queue.length; # 印出 0