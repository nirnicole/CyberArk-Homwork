import pytest

@pytest.mark.sanity
def test_sum1():
    for i in range(10000000):
        i+=1
    assert 1 + 2 == 3
  
@pytest.mark.low3
def test_sum2():
    for i in range(10000000):
        i+=1
    assert 1 + 1 == 2

@pytest.mark.sanity
@pytest.mark.low3
def test_sum3():
    for i in range(10000000):
        i+=1
    assert 1 + 0 == 1

@pytest.mark.orya
def test_sum4():
    for i in range(10000000):
        i+=1
    assert 1 + 5 == 6 

  