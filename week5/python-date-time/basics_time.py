import time

print(time.time())
  # Output: 1583755084.906643
print(time.ctime())
  # Output: Mon Mar  9 13:58:04 2010  

# In the code above:
# time.time() gives the seconds passed since 12:00 am, January 1, 1970
# time.ctime() gives the current time and date

# First “1” appeared in the screen and after 5 seconds number “2” appeared.
print(1)
time.sleep(5)
print(2) 