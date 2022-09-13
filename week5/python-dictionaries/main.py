
# fridge = {
#     "milk": 3,
#     "bananas": 4,
#     "juice": 2
# }

# amount = fridge["milk"]

# if fridge["milk"]==1:
#     print("There is one bottle of milk left")
# elif fridge["milk"]>1 :
#     print(f"there are {amount} left")
# else:
#     None

# print("ein", "al", "Orya")

closet = {
    "shirts": {
        "blue": 4,
        "black": 1,
        "white": 13,
        "flamingo-pink": 2
    },
    "pants": {
        "shorts": {
            "purple": 1,
            "red": 2,
            "flamingo-pink": 3
        },
        "jeans": {
            "denim": 8,
            "organic": 1
        }
    },
    "jackets": {}
}

# 1. There are 3 keys in the closet: shirts, pants, jackets

# 2.
print(closet["shirts"]["white"])

# 3.
print(closet["pants"]["shorts"]["flamingo-pink"])

# 4.
closet["pants"]["jeans"]["organic"] = 7

# 5.
closet["pants"]["jeans"]["denim"] -= 4

# 6.
pink_shorts = closet["pants"]["shorts"]["flamingo-pink"]
pink_shirts = closet["shirts"]["flamingo-pink"]

if pink_shirts > pink_shorts:
    print("top")
else:
    print("bottom")


person = {
    "name": "koko",
    "age": 17,
    "is vegan": True
}


for key in person:
    print(key)

for key,value in person.items():
    print(key, value)

student = {
    "name": "koko",
    "age": 42,
    "level": "A"
}


del student["level"]

names = ["koko", "mimi", "bobo", "fifi"]

{"n"+ str(i): names[i] for i in range(len(names)) if names[i][1] == "i"}


# {'n1': 'mimi', 'n3': 'fifi'}

def get_squares_dictionary(num):
    return {x: x**2 for x in range(1,num+1)}


print (get_squares_dictionary(5)) 