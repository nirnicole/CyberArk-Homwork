from pyclbr import Function
from typing import Iterable

# Reduce
def reduce(foo: Function, iterable: Iterable, initializer=None):
    items = iter(iterable)
    result = next(items) if initializer is None else initializer
    for element in items:
        result = foo(result, element)
    return result

def sum(x,y):
    return x+y

print(reduce(sum, [1,2,3,4,5]))

# Max Arguments 
def max_arguments():
    closure_counter = 0
    def inner(*args):
        nonlocal closure_counter
        closure_counter = len(args) if len(args)>closure_counter else closure_counter
        return closure_counter
    return inner


#tests:
func = max_arguments()
print(func())           # 0
print(func(1,2,3,7))    # 4
print(func(9,2))        # 4
print(func(1,2,3,4,5))  # 5 

# Increase

def increase(key, amount=1):
    def inner(obj):
        obj[key] += amount
        return obj

    return inner

inc_age = increase("age", 1)
inc_salary = increase("salary", 1000)
employee = {
  "name": "Momo",
  "age": 61,
  "salary": 10000
} 
while(employee["age"]<70):
    inc_age(employee)
    if employee["age"]%2 ==1:
        inc_salary(employee)
print(employee)