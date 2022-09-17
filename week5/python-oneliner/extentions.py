# ex1: Factorial
import math

def factorial(num):
    return math.prod([i for i in range(1,num+1)])

print(factorial(6))

# ex2: Fibonacci
def fibonacci(num):
    return 1 if num<=2 else fibonacci(num-1) + fibonacci(num-2)

print(fibonacci(6))

# ex3: Remove Duplicates
def remove_duplicates(item_list):
    return list(set(item_list))

print(remove_duplicates([1,2,1,3,3,2,2]))