class Restaurant:

    def __init__(self, name, ratings, is_veg):
        self.name = name
        self.ratings = ratings
        self.is_veg = is_veg

    def get_menu(self):
        if self.is_veg: 
            print("we have meet")
        else:
            print("we have vegies")


r1 = Restaurant("Zoozaazo", 4, False)
r2 = Restaurant("Top La Pompei", 3, False)
r3 = Restaurant("El Viego", 5, True)
r1.get_menu() # outputs: We have meat
r3.get_menu() # outputs: We have vegetables