from functools import wraps
import time

def slow_functions(some_func):
    @wraps(some_func)
    def wrapper(*args, **kwargs):
        time.sleep(1)
        return some_func(*args, **kwargs) # here we execute the function
    return wrapper  

@slow_functions
def add(*args, **kwargs):
    print("add is running")
    return 3


print("calling add")
print(add())
print("finish add")
