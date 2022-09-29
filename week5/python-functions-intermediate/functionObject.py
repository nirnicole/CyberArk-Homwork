# Functions are Objects.
# Here is a function:
def hello(name = "Margo"):
  """this is a greeting function"""
  print(f'Hello {name.capitalize()}!') 

# Let’s examine some cool properties:
print("Documentation: ", hello.__doc__)     #documentation of the function(doc)
print("Name: ", hello.__name__)             #the name of the function
print("Code at: ", hello.__code__)
print("defaults : ", hello.__defaults__)    #the default arguments
