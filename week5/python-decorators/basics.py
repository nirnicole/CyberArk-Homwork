# This is how the current wrapping  solution looks like:
from functools import wraps

def my_decorator(some_func):
    def wrapper():
        print("1. before executing some_func()")
        some_func() # here we execute the function
        print("2. after executing some_func()")
        return wrapper   
    return wrapper

  
def just_print():
  print("** some function that uses the decorator")
  
my_func = my_decorator(just_print)
my_func() 
# In fact what we are doing here is wrapping our just_print function with the my_decorator function.​
# Instead of doing: my_func = my_decorator(just_print)
# we can use the @:
# same as just_print = my_decorator(just_print)
@my_decorator
def just_print():
  print("** some function that uses the decorator")

just_print() 
# We can even store the decorator in another module, say utils and use it like that



# Second Example: We wanted to type the parameters of the function.
def print_args(func):
    @wraps(func)
    def inner(*args, **kwargs):
        print("args: ", end=" ")
        for x in args:
            print(x, end=" ")
        print()
        res = func(*args, **kwargs)
        print(res)
        return res
    return inner 

# but where do we get the parameters from?
@print_args
def add2(x, y):
  return x+y
  
@print_args
def add3(x, y, z):
  return x+y+z

@print_args
def add4(w, x, y, z):
  return w+x+y+z

add2(1,2)
add3(1, 2, 3)
add4(1,2, 2, 4) 

print("hi")
print(add2(1,2)) 
