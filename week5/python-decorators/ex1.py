# Exercise #1 : Timer Decorator
import datetime
from functools import wraps
from time import ctime, time


print(time())

# Second Example: We wanted to type the parameters of the function.
def time_to_execute(func):
    @wraps(func)
    def inner(*args, **kwargs):
        start = time()
        func(*args)
        end = time()
        res = f"function '{func.__name__}' runtime: {datetime.timedelta(seconds=(end-start))}"
        return res
    return inner 

@time_to_execute
def sum_many(val):
    sum = 0
    for i in range(val):
        sum += i
    return sum

@time_to_execute
def sum_many_more(val):
    sum = 0
    for i in range(val):
        sum += i
    return sum

sum1 = sum_many(10000000)
sum2 = sum_many_more(5000000) 

print(sum1)
print(sum2)
