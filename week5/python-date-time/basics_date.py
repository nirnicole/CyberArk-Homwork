import datetime

print(datetime.date.today())
# Output: 2020-02-11 

print(datetime.datetime.today())
  # Output: 2020-01-12 10:40:38.367704   WITH TZ
print(datetime.datetime.now())
  # Output: 2020-01-12 10:40:38.367704  WITHOUT TZ
print(datetime.datetime.today().strftime("%Y%m%d"))
  # Output: 20200312
print(datetime.datetime.today().strftime("%m/%d/%Y"))
  # Output: 03/12/2020
print(datetime.datetime.today().strftime("%Y-%m-%d-%H.%M.%S"))
  # Output: 2020-03-12-10.59.53  