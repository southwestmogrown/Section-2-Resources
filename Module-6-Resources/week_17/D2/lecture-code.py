# Booleans

# print(type(True)) # <class 'bool'>

true = True
false = False

# print(isinstance(true, bool)) # True
# print(isinstance(false, bool)) # True
# print(isinstance(true, int)) # True
# print(isinstance(false, int)) # True

# print(isinstance(1, bool)) # False
# print(1 == True) # True
# print(0 == False) # True

# print(bool("string")) # True
# print(bool("")) # False

# if bool(1):
#   print("1 is truthy")

# if "":
#   print("Won't see because empty strings are falsy")

# if []:
#   print("Won't see because empty lists are falsy")

# Falsey values in Python are:

# 0 (for any number type)
# 0, 0.0, 0j
# any empty collection
# "", [], set(), {}, range(0)
# False
# None
# All other values are truthy!

# print(None == False) # False
# print(bool(None) == bool(False)) # True
# print(None == None) # True
# print(0 == 0.0) # True
# print(1 == 1.0) # True
# print("0" == 0) # False
# print(1 == 0j + 1) # True

# print(int("1") == 1) # True

# print('alpaca' > 'ant') # False
# print('alpaca' > 'Ant') # True
# print('alpaca'.casefold() > 'Ant'.casefold()) # False

# print(True < False) # False

# print(help(str.casefold))

# print(False ^ True) # True
# print(True ^ False) # True
# print(True ^ True) # False
# print(False ^ False) # False

# print(bin(15)) # 1111
# print(bin(5)) # 0101
# print(bin(10)) # 1010
# print(15 ^ 5)

# print("somestring" ^ "someotherstring") # raises TypeError exception

# 1111
# 0101
# 1010

# print(help(str.index))

# print(True and True) # True
# print(True and False) # False

# print(1 or True) # 1
# print(10 or 0) # 10
# print(0 or 10) # 10
# print(0 or False) # False

# print("hello" or True) # hello
# print("hello" or False) # hello
# print("hello" and True) # hello
# print("hello" and False) # False

# print(True and not False) # True
# print(True or False) # True

# a = 6
# b = 20

# if b < a:
#   print("b is less than a")
# elif b == a:
#   print("b is equal to a")
# else:
#   print("b is greater than a")
#   if a == 6:
#     print('6 is a good number')
#   elif b == 20:
#     print("Doesn't matter, we won't get here")
#   else:
#     print("won't get here")

# Strings

# my_str = 'hello'
# my_str_double_quotes = "hello with doubles"
# my_str_with_apostrophes = "What's up"
# my_str_as_quotation = "'Hey how\'s it going'"
# my_bad_string = "\"Howdy\""
# my_multi_line_str = """Multi
# Line
# String"""

# print(my_str)
# print(my_str_double_quotes)
# print(my_str_with_apostrophes)
# print(my_str_as_quotation)
# print(my_bad_string)
# print(my_multi_line_str)

"""
Multi-line comment
"""

def multi():
  """
  Docstring for multi, returns None
  """
  return None

# print(help(multi))
# teachers = ["Shane", "Briana"]

# print("There are {0} teachers in Section 2".format(len(teachers))) # old school way
# print(f"There are {len(teachers)} teachers in Section 2") # new way as of 3.6

# a = "a"
# b = "b"
# an = "an"

# print(b + an*2 + a)
# print(b + an*9 + a + " batman")

# print("$1" + ",000"*2)

food = "Spaghetti"

# print(food[0]) # S
# print(food[4]) # h

# print(food[-1]) # i
# print(food[-8]) # p
# print(food[-9]) # S
# # print(food[-10]) # IndexError: string index out of range
# print(food[10]) # IndexError: string index out of range

# print(food[4:9]) # hetti
# print(food[0:-5]) # Spag
# print(food[-5:-3]) # he

# print(food[0:9:2]) # Sahti

# print(food[8:0:-1]) # ittehgap

# print(food[-1::-1]) # ittehgapS

# print(help(str.count))

# print(";asdkljf;ldskfjieieeijfkddsmnajkejejdlvijdlaesmnkdoijmel".count('e')) # 7
# print(";asdkljf;ldskfjieieeijfkddsmnajkejejdlvijdlaesmnkdoijmel".count('asdk')) # 1
# print(help(str.index))

# print("The quick brown fox jumps over the lazy dog".index("fox")) # 16
# print("The quick brown fox jumps over the lazy dog".index("e")) # 2
# print("The quick brown fox jumps over the lazy dog".index("o")) # 12
# print(len("The quick brown fox jumps over the lazy dog"))
# print("hello".index('z')) # ValueError: substring not found

# print(help(str.split))

# print("It is a very nice day in the Ozarks".split("v"))
# print(dir(str))

# print(" ".join(["i", "really", "like", "python"])) # i really like python
# print(", ".join(["i", "really", "like", "python"])) # i, really, like, python
# print("".join(["i", "really", "like", "python"])) # ireallylikepython

str = "heLlo woRld, how aRe you"

# print(str.upper())
# print(str.lower())
# print(str.title())
# print(str.capitalize())

# import string # alternative to str.title()

# print(string.capwords(str))


# print(help(str.capitalize))

# Numbers

# print(27.85 // 5)

# def long_division(num, div):
#   return num // div, num % div

# print(long_division(100, 30))

# x = 15

# x -= 10 # x = x - 10 = 5
# x += 10 # x = x + 10 = 25
# x *= 10 # x = x * 10 = 150
# x /= 10 # x = x / 10 = 1.5
# x //= 10 # x = x // 10 = 1
# x **= 10 # x = x ** 10 = 576650390625
# x %= 10 # x = x % 10 = 5


# print(x)

# x = 0
# y = 0

# print(x == y)
# print(x is y)

# name = "Shane Wilkey"
# # full_name = "Shane Wilkey"

# first_name = "Shane "
# last_name = "Wilkey"

# full_name = first_name + last_name

# print(name, full_name)

# print(name == full_name)
# print(name is full_name)

# my_int = 4
# my_float = 4.0
 
# # check if the values are the same
# print(my_int == my_float)  # True
 
# # check if the values are the same and check type
# print(my_int == my_float and isinstance(my_int, float))  # False



# Identity vs Equality/Operators

# lst1 = [1,2,3,4,5]
# lst2 = [1,2,3,4,5]

# # print(lst1 == lst2) # True
# # print(lst1 is lst2) # False

# print(id(lst1)) # 139757527005696
# # print(id(lst2))

# lst3 = lst1


# print(id(lst3)) # 139757527005696

# lst3[0] = 5000

# print(lst1) # [5000, 2, 3, 4, 5]
# print(lst3) # [5000, 2, 3, 4, 5]

# a = []
 
# if a is not None:
#     print("a is not None")  # prints "a is not None"
# else:
#     print("a is None")

# a = 1
# print(a == True)  # don't do this, in Python 1 is equal in value to True
# print(a is True)

# print([] == [])  # True
# print([] is [])  # False
# a = []
# b = a
# print(a is b)    # True
# b.append(5)
# print(a)         # [5]

# a = 5
# b = 5
# print(a is b) # True
 
# c = "hey"
# d = "hey"
# print(c is d) # True

# f = 'fizz'
# b = 'buzz'
# fb = f + b
# fzbz = 'fizzbuzz'

# print(fb)
# print(fzbz)
# print("equivalence: ", fb == fzbz)
# print("identity: ", fb is fzbz)
# print("id equivalence: ", id(fb) == id(fzbz))
# print("id identity: ", id(fb) is id(fzbz))

# i = 0
# while i < 5:
#     print(f"{i}. Hello, world.")
#     i += 1
 
# print("You've printed 5 times. Goodbye.")


# i = 0
# while True:
#     print(f"{i}. Hello, world.")
#     if i < 4:
#         i += 1
#         continue
#     print("You've printed 5 times. Goodbye.")
#     break

items = ['a', 'b', 'c', 'd']

# # for banana in items:
# #   print(banana)
# #   print(items.index(banana))

# for i in range(1,4,2):
#   print(items[i])

# print(dict(enumerate(items)))

# for idx, el in enumerate(items):
#     print(idx, el)
#     # el = 5 # does not mutate
#     items[idx] = 5 # does mutate

# print(items)

# hello = 'hello'

# print("a" in items)
# print("A" in items)

# print('hel' in hello)

# prompt = True

# while prompt is not None:
#   prompt = input("Give me a number!!!!! ")
#   if prompt == 0:
#     break
#   try:
#     prompt = int(prompt)
#     # x = y
#   except ValueError as error:
#     # print(error)
#     print("That's not a number!")
#   else:
#     if prompt > 10:
#       print('10 is too large of a number')
#       continue
#     print(f"{prompt} is a good number")
#   finally:
#     prompt = None
  

# print(int('a'))

# while True:
#   try:
#       num = int(input("say a number "))
#       print(num)
#       break
#   except:
#       print("try again")


# def is_even(num):
#   return num % 2 == 0
 
# print(is_even(5)) # False
# print(is_even(2)) # True

# is_even = lambda num: num % 2 == 0 # not a desirable way to use lambda functions
 
# print(is_even(8)) # True

# ls = [1,2,3,4,5]

# squared_ls = list(map(lambda x: x ** 2, ls))

# print(squared_ls)

# is_even = 3

# print(is_even(5)) # TypeError: 'int' object is not callable

# y = 0

# def make_a_five():
#   y = 5 # this is not the same 'y' as the globally defined 'y'
#   return y

# x = make_a_five()
# print(y)
# print(x)

# def make_a_six():
#   global y # this is the globally defined 'y'
#   y = 6
#   return y

# z = make_a_six()
# print(z)
# print(y)

# if True:
#   x = 10

# print(x)

# def no_w():
#   w = 10
#   return w

# print(w) # NameError: name 'w' is not defined

# fruits = ["banana", "apple", "kiwi"]
# print(fruits)  # ["banana", "apple", "kiwi"]

ls1 = [1,2,3,4,5]
ls2 = [6,7,8,9]

ls2.extend(ls1)
# ls1.remove(8)

ls2.sort()

print(ls2)