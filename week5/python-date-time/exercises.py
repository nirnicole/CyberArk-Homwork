from datetime import datetime

# Ex1:
print(datetime.now() , "\t", datetime.today())

# Ex2:
print(datetime.today().strftime("%m/%d/%Y"))
print(datetime.today().strftime("%d/%m/%Y"))

# Ex3:
day = datetime.today().strftime("%A")
year = datetime.today().strftime("%Y")
print(f"Current year is: {year}")
print(f"Current day is: {day}")

# Extention
# 03.02.97
user_input = input("please enter your birthday as input from the user in DD-MM-YYYY format (e.g. 25-03-1995):")
# Considering date is in dd/mm/yyyy format
dt_object1 = datetime.strptime(user_input, "%d-%m-%Y")
current_date = datetime.strptime(datetime.today().strftime("%d-%m-%Y"), "%d-%m-%Y")
diff = (current_date - dt_object1).days

print(f"Your age:{diff/365}")