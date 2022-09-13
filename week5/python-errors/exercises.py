# #ex1:
# dividend = float(input("Enter the dividend: "))     #maybe 0, maybe not a value
# divisor = float(input("Enter the divisor: "))       #here zero will be a problem
# quotient = dividend/divisor                         
# print(math.floor(quotient))                         #no math import


#ex2:

def get_list_element(my_list, index):
    try:
        print(my_list[index])
    except IndexError:
        print("ERROR!")  
 

#EX3:
try:
    age = int(input("How old are you? ")) 
except TypeError:
    print("ERrorrRREge!")

#ex4:
def divide(x, y):
  try:
    print(f'{x}/{y} is {x / y}')
  except ZeroDivisionError as e:
    print(e)
  except TypeError as e:
    print(e)
  except ValueError as e:
    print(e) 


    