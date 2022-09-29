# If global is specified, func will affect the global g:
# If we want to update a global variable from within a function we will have to specify the global keyword:
g = 'I am global'

def func():
  global g
  g = 'overrideing global'
  print('func: ', g)

func()
print('outside: ', g)   #  g = 'overrideing global'!!!




# each function has its own version of local_var.
# If we would remove local_var = 21 in inner_func,
# the value will be 11:
def outer_func():
  local_var = 11
  
  def inner_func():
    print("inner_func local_var = ", local_var)
  
  inner_func()
  print("outer_func local_var = ", local_var)

outer_func() 
# If we want the inner_func to change the local_var in the
# outer_func we must use a special keyword nonlocal.
# local_var variable is considered nonlocal,
# as it is not completely local,
# and it is not GLOBAL either.
def outer_func():
  local_var = 11
  def inner_func():
    nonlocal local_var
    local_var = 21
    print("inner_func local_var = ", local_var)
  inner_func()
  print("outer_func local_var = ", local_var)

outer_func() 
# Now we will get 21 twice.

# We can still use global keyword in nested function:
global_var = 10

def outer_func():
  local_var = 11
  def inner_func():
    global global_var
    global_var = 21
    print("inner_func global_var = ", global_var) 
  inner_func()
  print("outer_func global_var = ", global_var)

outer_func()
print('outside global_var = ', global_var) 
# In this case we will update the global variable.