import pytest

@pytest.fixture
def store():
  items = ("apple", "banana", "orange")
  amount = (2, 2, 1)
  return dict(zip(items, amount)) 


def test_buy_banana(store):
  assert store["banana"]-1 == buy_banana(store)
  
def test_buy_two_banana(store):
  assert store["banana"]-2 == buy_two_bananas(store)



def buy_banana(my_store):
  my_store["banana"]-=1
  return my_store["banana"]

def buy_two_bananas(my_store):
  my_store["banana"]-=2
  return my_store["banana"]

