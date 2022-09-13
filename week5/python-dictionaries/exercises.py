#ex1:

state = "France"

heads_of_states = {
    "Italy": {
        "president": "Sergio Mattarella",
        "prime minister": "Giuseppe Conte"
    },
    "India": {
        "president": "Ram Nath Kovind",
        "prime minister": "Narendra Modi"
    },
    "France": {
        "president": "Emmanuel Macron",
        "prime minister": "Edouard Philippe"
    }
}

print("The president of France is Emmanuel Macron and the prime minister is Edouard Philippe")
print(f"The president of {state} is {heads_of_states[state]['president']} and the prime minister is {heads_of_states[state]['prime minister']}")

#ex2:
#absurd

#ex3:
BIG_COUNTRY = 50

country_populations = dict()

country_populations["Ghana"] = 28
country_populations["Brazil"] = 209
country_populations["Mongolia"] = 3

country = "Brazil"
 
print(country, "is a big country") if country_populations[country] >= BIG_COUNTRY else print(country, "is a small country")


#ex4:
tomato = "Tomato Soup"
onion = "Onion Soup"
carrot = "Carrot Soup"

user_preferences = {
    "Sarah": tomato,
    "Sheila": carrot,
    "Fernando": tomato,
    "Jovan": onion,
    "Simona": carrot
}

soup_recipes = {
    tomato: "Get a bunch of tomatoes, cut them up, and throw them in boiling water",
    onion: "Be prepared to cry",
    carrot: "Find a rabbit, ask him how to make a carrot soup"
}

user = "Jovan"

print(soup_recipes[user_preferences[user]])


#extention

# def get_5common(line):
#     map = {}
#     map =  { map[word] = (map[word]+1 if map.get(word) else 1) for word in line.split()}
#     return map

# def helper(map){
#     return map[word] = (map[word]+1 if map.get(word) else 1)
# }

line = "wee wee goo koo goo doo doo so go go yo yo yo yo fo zo"
print(get_5common(line))