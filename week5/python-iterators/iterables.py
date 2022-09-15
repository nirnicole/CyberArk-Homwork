# lists
for num in [1,2,3]:
  print(num)

# tuples
for num in (1,2,3):
  print(num) 

# strings
for char in "wonders":
  print(char)

# dictionaries:
for key in {"name": "momo", "age": 33}:
  print(key) 

# We can get the iterator using the built-in function iter
string_iterator = iter("Python is great")
list_iterator = iter([2,4,6]) 

#After we got the iterator we can call the next method to go through all the items:
string_iterator = iter("Python")

print(next(string_iterator))
print(next(string_iterator))
print(next(string_iterator))
print(next(string_iterator))
print(next(string_iterator))
print(next(string_iterator)) 

#We can also pass a default value to the next method:
print(next(string_iterator, None)) 

#When the iterator has no more elements it will throw a StopIteration Error.
list_iterator = iter([])
next(list_iterator) # throws StopIteration exception 

#We can catch it of course:
try:
  print(next(list_iterator))
except StopIteration as e:
  print("no more items") 