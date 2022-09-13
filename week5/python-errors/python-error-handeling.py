# import warnings
# # warnings.warn('This is a warning message') 

# # import warnings

# # def recur_fibo(n):
# #   warnings.warn("Soon will be removed from this module \ and moved to math package", DeprecationWarning)
# #   if n <= 1:
# #     return n
# #   else:
# #     return(recur_fibo(n-1) + recur_fibo(n-2))

# # recur_fibo(10)

# warnings.warn("This is ignored", ImportWarning) 

# import warnings
# # Cause all warnings to always be triggered.
# warnings.simplefilter("always")
# warnings.warn("This is ignored NO MORE", ImportWarning) 

import warnings
warnings.filterwarnings("always",r".*NO MORE", ImportWarning)
warnings.warn("This is ignored NO MORE", ImportWarning) 

try:
  raise ValueError("It is a common hobby to terminate Python programs!")
except ValueError:
  print("Caught you!")
print("Caught you!") 

try:
  raise ValueError("It is a common hobby to terminate Python programs!")
except ValueError as exp:
  print("Caught ValueError exception: ", exp.args) 

try:
  raise ValueError("It is a common hobby to terminate Python programs!")
except Exception as exp:
  print("Caught any type of exception object: ", exp.args) 

#very bad practice, some other componenet shold get the error and handle it! (leave it!@!!())
try:
    raise 4 
except:
    print("Caught any kind of Python object, not necessarily an exception object")  


class NoMoneyLeft(Exception):
  """That what happens when you use credit card"""
  pass

class DogAteHomework(Exception):
  """Kids use it all the time, but it happens!"""
  pass

class NothingExceptionalHappend(Exception):
  """Just a normal afternoon"""
  pass
    
try:
    raise NoMoneyLeft
  # raise DogAteHomework
  # raise NothingExceptionalHappend
except NoMoneyLeft:
    print("Call mommy")
except DogAteHomework:
    print("Call daddy")
except NothingExceptionalHappend:
    print("Call the cops")