def get_name():
  return "Shoobert"

def test_get_name1():
  assert get_name() == "Shoobert"

def test_get_name2():
  assert get_name() == "shoobert" 

# assert True # successful assertion
# assert False # assertion failure 