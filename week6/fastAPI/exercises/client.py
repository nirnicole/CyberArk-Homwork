import requests 
import sched, time

class Client:

    def __init__(self):
        self.money = 200
        self.last_item_price = 0

    #ex3:
    def get_price(self, user_input=None):
        if user_input== None:
            user_input = input("pick a furniture:")
        res = requests.get('http://localhost:8000/item/{}'.format(user_input))
        item, self.last_item_price = res.json().popitem()
        return res.json()


    # ex5:
    def buy_item(self, user_input=None):
        if user_input== None:
            user_input = input("pick a furniture:")
        res = requests.get(f"http://localhost:8000/buy/optionalParameters?item={user_input}")
        return res.json()
    

    #extention 1:   
    def user_buy_protocol(self):
        user_input = input("pick a furniture:")
        item, price = self.get_price(user_input).popitem()
        price = int(price)
        if self.money >= price:
            print("buy", user_input)
            print(self.buy_item(user_input))
            self.money= self.money-price
        else:
            print(f"You dont have enough money to buy {user_input} (cost: {price}, you have: {self.money})")


# user_buy_protocol()
# user_buy_protocol()
# user_buy_protocol()


# extention2:

s = sched.scheduler(time.time, time.sleep)
user = Client()

def print_time(a='default'):
    print("From print_time", time.time(), a)

def print_some_times():
    while 1:
        last_price = user.last_item_price
        s.enter(3, 1, user.get_price, kwargs={'user_input': 'chair'})
        s.run()
        if last_price > user.last_item_price:
            print(f"price change! (from{last_price} to {user.last_item_price})")
            print(user.buy_item("chair"))
            print("that was cheaper!")
        else:
            print("still waiting for a price drop...")

print_some_times()