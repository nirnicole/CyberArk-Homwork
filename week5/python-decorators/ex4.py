from functools import wraps

def num_of_calls_function(some_func):
    @wraps(some_func)
    def wrapper(*args, **kwargs):
        wrapper.calls+=1
        print(wrapper.calls)
        return some_func(*args, **kwargs) # here we execute the function
    wrapper.calls = 0
    return wrapper  

@num_of_calls_function
def add(*args, **kwargs):
    # print("add is running")
    return 3


print("calling add")
add()
print("calling add")
add()
print("calling add")
add()
print("calling add")
add()
print("finish add")