# Default parameter values are evaluated when the function definition is executed, not each time the function is called.
# Let’s take a look at the following function:
def add_to_list(value, nums=[]):
  nums.append(value)
  return nums

print(add_to_list(1))
print(add_to_list(2)) 
# You were probably expecting to see:
# [1] 
# [2] 
# But instead we get:
# [1] 
# [1, 2] 
# What happened?
# Default parameter values are evaluated when the function definition is executed, not each time the function is called
# This means that if you use a mutable default argument and mutate it, you have mutated that object for all future calls to the function.
# How can we solve it?
def add_to_list_fixed(value, nums=None):
  nums = nums or []
  nums.append(value)
  return nums 

#Flexible Arguments
# We can define a function with unlimited number of arguments:
def more_is_better(*args):
  print(args)

more_is_better(1, 2, 3, 4) 

# We can also define unlimited keyword arguments for a function as a dictionary:
def print_suitcase(**suitcase):
  for item,ammount in suitcase.items():
    print(item, ammount) 
# The ** means the function will receive the arguments packed in a dictionary.

# In a reverse manner we can do dictionary unpacking:
def print_bag(bananas=0, apples=0):
  print("bananas", bananas)
  print("apples", apples)
  print_bag(2,3)

fruits = {"apples": 4, "bananas": 5}
print_bag(**fruits) 

# If we want an unlimited number of keyword arguments we can use packing and unpacking like this:
def print_suitcase(**suitcase):
  for item, ammount in suitcase.items():
    print(item, ammount)

items = {
  "shirts": 2,
  "shoes": 8,
  "watermelon": 100
}

print_suitcase(**items) 