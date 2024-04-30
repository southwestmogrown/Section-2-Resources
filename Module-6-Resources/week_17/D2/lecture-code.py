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

a = 6
b = 20

if b < a:
  print("b is less than a")
elif b == a:
  print("b is equal to a")
else:
  print("b is greater than a")
  if a == 6:
    print('6 is a good number')
  elif b == 20:
    print("Doesn't matter, we won't get here")
  else:
    print("won't get here")