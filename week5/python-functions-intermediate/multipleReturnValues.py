# Multiple assignment
m, n = 7, 10 
print(m) 
print(n)
# We can assign 2 values in 1 line.

# When combined with Python’s ability to return multiple values, we get this wonderful behaviour:
def go_right(x,y):     
  return x + 1, y   

x, y = go_right(2,2) 