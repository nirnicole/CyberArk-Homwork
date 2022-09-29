# example:
import math


def generate_add(x):
  def inner(y):
    return x + y

  return inner 
# Here we have a function that generates functions that add a constant number.
# We can use the same generate_add function to create a function that adds 1 and a function that adds 2:
add_1 = generate_add(1)
add_2 = generate_add(2)
print(add_1(5)) #6 
print(add_2(5)) #7 

# 5. Spot Check



def get_power_of(power):
    # write your code here
    def inner(number):
        return number ** power
    return inner

calc_power_of_2 = get_power_of(2)
calc_power_of_4 = get_power_of(4)
print(calc_power_of_2(5))    # 5^2 = 25
print(calc_power_of_2(7))    # 7^2 = 49
print(calc_power_of_4(2))    # 2^4 = 16
print(calc_power_of_4(3))    # 3^4 = 81 