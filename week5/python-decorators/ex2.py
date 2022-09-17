
from functools import wraps

def data_on_execution(func):
    @wraps(func)
    def inner(*args, **kwargs):
        func_name = func.__name__
        func_args = list(args)
        func_kwargs = list(kwargs)

        func_res = func(args)
        res = {
                'func name': f"{func_name}",
                'args': f"{func_args}",
                'kwargs': f"{func_kwargs}",
                'return value': f"{func_res}",
                'return type': f"{func_res.__class__}",
            }
        print("\n".join([f"{key}: {value}" for key,value in res.items()]))
        return res
    return inner 

@data_on_execution
def add(*args, **kwargs):
    print("add is running")
    return 3

res = add(1, 2, age=3, text="hello")