from functools import wraps

def memoize_results(some_func):
    @wraps(some_func)
    def wrapper(*args, **kwargs):
        if wrapper.results.get(args[0]) != None:
            # print("using res:", wrapper.results.get(args[0]))
            return wrapper.results.get(args[0])
        res = some_func(*args, **kwargs)
        wrapper.results[args[0]] = res
        print(wrapper.results)
        return res
    wrapper.results = {}
    return wrapper  

@memoize_results
def fibonacci(*args, **kwargs):
    num = args[0]
    if num<1:
        return 0
    elif num <= 2:
        return 1
    else:
        return fibonacci(num-1) + fibonacci(num-2)

@memoize_results
def add(x, *, addition=0, more=0):
  print("running  add")
  return x + 1 + addition + more 

print("calling fibonacci")
print(fibonacci(10))

add(1, addition=0, more=0)
add(1, more=0, addition=0)
add(1, more=0)
add(1) 