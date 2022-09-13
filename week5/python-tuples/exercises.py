#ex1:
my_tuple = (1,"2",{3:3},4,5,6,7,8)
my_tuple2 = tuple( [1,"2",{3:3},4,5,6,7,8])
my_tuple3 = 1,"2",{3:3},4,5,6,7,8

#ex2:
print(my_tuple[4])
print(my_tuple[-4])

#ex3:
days = ("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday")
def not_tuesday(string):
    return string!="Tuesday"
tupleRes = tuple(filter(not_tuesday, days))
tupleRes2 = tuple(x for x in days if x != "Tuesday")
print(days)
print(tupleRes)
print(tupleRes2)

#ex4:
numbers = (1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
reversedNumbers = numbers[::-1]
print(numbers)
print(reversedNumbers)

#ex5:
def reverse_noFirst(list):
    return list[:0:-1]

print(reverse_noFirst(numbers))

def reverse_noLast(list):
    return list[-2::-1]

print(reverse_noLast(numbers))
