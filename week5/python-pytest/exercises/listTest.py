my_list = ['I', 2, 'Love', 4, 56, 'Coding', "Python", "in", [8,9,10]]

def test_number():
#   assert 3 in my_list
  assert 56 in my_list

def test_str():
    assert all(item in my_list for item in ["I", "Love", "Coding"] )

def test_upper_str():
    # assert len(my_list) == len([val for val in my_list if (not isinstance(val, str)) or ( val.isupper())])
    assert 0 == len([val for val in my_list if (isinstance(val, str) and not val.isupper())])

def test_negative():
    assert not (6 in my_list)

print([val for val in my_list if (isinstance(val, str) and not val.isupper())])