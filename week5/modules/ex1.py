import calendar

print(calendar.isleap(2010))
print(calendar.isleap(2020))
print(sum([1 if calendar.isleap(y) else 0 for y in range(2020,2080)]))
print(calendar.weekday(2028,3,14))