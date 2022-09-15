#ex1: The enumerate() method adds a counter to an iterable and returns it (the enumerate object).
def my_enumerate(iterable, start =0):
    for val in iterable:
        yield start, val
        start+=1


for index, elem in my_enumerate([10, 20, 30, 40]):
  print(index, elem) 

for index, elem in my_enumerate([10, 20, 30, 40], 10):
  print(index, elem)  


# Exercise #2 : My Accumulate

def my_accumulate(iterable):
    sum = 0
    for i in iterable:
        sum+=i
        yield sum


for elem in my_accumulate([1,2,3,4,5]):
  print(elem) 

# Exercise #3 : Prime Factors Generator
def get_prime_factors_generator(number):
    my_gen = get_next_prime()
    fact = next(my_gen)
    while (fact <= number):
        if number % fact == 0:
            number = number / fact
            yield fact
        else:
            fact = next(my_gen)


def get_next_prime(number=2):
    while True:
        if is_prime(number):
            yield number
        number += 1


def is_prime(number):
    return 0 == len([False for n in range(2, int(number / 2) + 1) if (number % n == 0)])


for x in get_prime_factors_generator(100):
  print(x) 


# Exercise #4 : Circle Iterator
class CircleIter:
  def __init__(self, iterable, size):
    self.iterable = list(iterable)
    self.size = int(size)

  def __iter__(self):
    self.counter = 0
    return self
    
  def __next__(self):
    if self.counter >= self.size:
      raise StopIteration
    res =  self.iterable[self.counter % len(self.iterable)] 
    self.counter += 1
    return res


for x in CircleIter([1,2],5):
  print(x, end=" ") 

print() 

for x in CircleIter([1,2,3],4):
    print(x, end=" ")
    for y in CircleIter([5,6],3):
        print(y, end=" ")
    print() 