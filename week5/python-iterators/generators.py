# what is this generator?
# A generator is a function that returns an object (iterator) which we can iterate over (one value at a time).
#
# 'Yield' statement pauses the function saving all its states and later continues from there on successive calls.

def plus1(stop):
  for i in range(stop):
    yield i 


#For example, let’s look at a generator function named my_gen that contains several yield statements:
def my_gen():
  n = 1
  print('This is printed in the first call')
  yield n
  n += 1
  print('This is printed second')
  yield n
  n += 1
  print('This is printed at last')
  yield n 

#  it returns a generator object but does not start execution immediately
iter_gen = my_gen() 

# example of a generator that reverses a string:
def reverse(iterable):
  length = len(iterable)
  for i in range(length - 1, -1, -1):
    yield iterable[i]    # For loop to print the reversed string

for item in reverse("hello"):
  print(item) 

# example can generate all the even numbers (at least in theory):
def all_even():
  n = 0
  while True:
    yield n
    n += 2 