# import random
# # from random import randint, shuffle
# from random import randint as ri, shuffle as sh
# import sys

# # print(random.randint(1, 10)) # when import entire module must use dot notation to get function
# # print(ri(1, 10)) # when

# ls = [1,2,3,4,5,6,7,8,9]

# sh(ls)

# # print(ls)
# print(sys.path)

# import mod6

# print(mod6.say_hello())

from mod6 import say_hello
from package import mod6_hello, mod7_hello

print(say_hello())
print(mod6_hello())
print(mod7_hello())

print("main.py: ", __name__)