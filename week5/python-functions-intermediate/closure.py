# A Closure is an inner function that has access to variables in
# the outer (enclosing) functions even after the outer function
# finish its execution.
def foo():
  x = 1
  
  def inner():
    print(x)    # notice this inner function using the outer function's variable
  
  return inner

baz = foo()     #out here, x doesn't exist
baz()           #but when we invoke baz, we're printing x! 

# Let’s look at another example:
def setCounter(step):
  counter = 0
  def count():
    nonlocal counter
    counter += step
    print(counter)
  return count

increment = setCounter(2)
increment() 
# 2 will be printed, that makes sense. Try to invoke the increment() function again. This time 4 is printed. 
# The counter variable has been remembered via the closure.

# Now, try to print counter in the global scope:
def setCounter(step):
  counter = 0
  
  def count():
    nonlocal counter
    counter += step
    print(counter)
  
  return count
  
# print(counter) 
# What happens?
# Again, you get an error because counter is only available inside the setCounter scope except through our closure.