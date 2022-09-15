import pytest

def test_fibo():
    assert fibonaci(5)==5

@pytest.mark.parametrize("index, value", [(2,1), (5,4)]) 
def test_fibo_indexVal(index, value):
    assert fibonaci(index)==value


def fibonaci(num):
    if num<1:
        return 0
    elif num <= 2:
        return 1
    else:
        return fibonaci(num-1) + fibonaci(num-2)


