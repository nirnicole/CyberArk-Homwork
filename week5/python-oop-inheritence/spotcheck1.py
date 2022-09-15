class Rectangle:
    def __init__(self, height, width):
        self.height = height
        self.width = width

    def calculate_area(self):
        return self.height*self.width

    def calculate_perimeter(self):
        return 2*self.height +2*self.width



class Square(Rectangle):
    def __init__(self, length):
        super().__init__(length, length)

    def calculate_perimeter(self):
        return 4*self.width


class Artist:
  def __init__(self, name, income):
    self.name = name
    self.income = income
  
class Actor(Artist):
  def __init__(self, name, income, most_known):
    super().__init__(name, income)
    self.most_known = most_known
    
class Singer(Artist):
  def perform(self):
    print(self.name + " is singing now")
    
s = Singer("Ellie", 400)
a = Actor("Jerome", 450, "Leob")
ar = Artist("Arnie", 210)
print(type(s))
print(type(a))
print(type(ar)) 

print(isinstance(s, Singer)) # outputs: True 