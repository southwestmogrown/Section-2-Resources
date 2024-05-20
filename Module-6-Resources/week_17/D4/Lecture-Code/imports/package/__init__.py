# from mod7 import say_hello as mod7_hello # ModuleNotFoundError: No module named 'mod7'
from .mod7 import say_hello as mod7_hello 
from .mod6 import say_hello as mod6_hello

print("name of __init__.py: ", __name__)