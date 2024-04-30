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

x = 15

# x -= 10 # x = x - 10 = 5
# x += 10 # x = x + 10 = 25
# x *= 10 # x = x * 10 = 150
# x /= 10 # x = x / 10 = 1.5
# x //= 10 # x = x // 10 = 1
# x **= 10 # x = x ** 10 = 576650390625
x %= 10 # x = x % 10 = 5


print(x)