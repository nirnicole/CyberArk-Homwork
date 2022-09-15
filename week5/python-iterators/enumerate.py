numbers = [11,3,64,17,94] 

def find_index(items, item):
  for number in items:
    if number == item:
      return number 

def find_index2(items, item):
  for index, value in enumerate(items):
    if value == item:
      return index
    return -1 