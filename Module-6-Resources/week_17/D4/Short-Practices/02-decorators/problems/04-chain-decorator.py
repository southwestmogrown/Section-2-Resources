# Implement a decorator function called chain_decorator that will be used to
# chain function calls. The decorator function should take another function
# argument as a callback, implement two inner wrapper functions, and finally
# return the wrapper function object in each respective wrapper function.

# Implement the outer wrapper function with the following:
# - Takes a variable number of positional and keyword arguments
# - Initializes a variable that calls the callback function with arguments
#   passed to the wrapper
# - Returns the variable multiplied by itself.

# Implement another inner wrapper function with the following:
# - Takes a variable number of positional and keyword arguments
# - Initializes a variable that calls the callback function with arguments
#   passed to the wrapper
# - Returns the variable multiplied by 3
 
# Finally, be sure to decorate num function using the decorator syntax.

# Write your function here.
def chain_decorator(func):
    def outer_wrapper(*args, **kwargs):
        def inner_wrapper(*args, **kwargs):
            x = func(*args, **kwargs)
            return x * 3
        x = inner_wrapper(*args, **kwargs)
        return x * x
    return outer_wrapper

def square_decorator(func):
    def wrapper(a, b):
        x = func(a, b)
        return x ** 2
    return wrapper

def multiply_by_three(func):
    def wrapper(a, b):
        x = func(a, b)
        return x * 3
    return wrapper

@chain_decorator
@square_decorator
@multiply_by_three
def num(a, b):
    return a + b

print(num(5, 2))  #> 441
print(num(8, 2))  #> 900
print(num(4, 9))  #> 1521