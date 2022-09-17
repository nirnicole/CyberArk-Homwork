from functools import wraps

def my_decorator(some_func):
    @wraps(some_func)
    def wrapper():
        print("1. before executing some_func()")
        some_func() # here we execute the function
        print("2. after executing some_func()")
    return wrapper  

@my_decorator
def just_print():
  print("** some function that uses the decorator")


print(just_print.__name__) 
