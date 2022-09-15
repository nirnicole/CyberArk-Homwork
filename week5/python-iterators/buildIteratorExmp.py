class PrintNumbers:
  def __init__(self, size):
    self.max = size

  def __iter__(self):
    self.numbers = list(range(self.max + 1))
    self.counter = 0
    return self
    
  def __next__(self):
    if self.counter >= self.max:
      raise StopIteration
    self.counter += 1
    return self.numbers[self.counter] 

iterable = PrintNumbers(3)
for num in iterable:
  print(num) 