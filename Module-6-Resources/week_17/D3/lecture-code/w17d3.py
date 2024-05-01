from pprint import pprint
# Lists
empty_lst = []
str_lst = list("banana")

# print(str_lst)

nums = [1,2,3,4,5]

# print(nums[0]) # 1
# print(nums[17]) # IndexError: list index out of range
# print(nums[-2]) 4

# print(nums[2:4]) # [3,4]

# print(nums[0::2]) # [1, 3, 5]

# array.length

# print(len(nums)) # 5

# print(nums.__len__()) # 5
# print(dir(list))

# nums.append(6) # [1, 2, 3, 4, 5, 6]

# nums.append([6,7,8,9]) # [1, 2, 3, 4, 5, [6, 7, 8, 9]]

# print(dir(list))

# nums.extend([6,7,8,9]) # [1,2,3,4,5,6,7,8,9]

# nums.insert(3, 400) # [1, 2, 3, 400, 4, 5]

# nums.remove(3) # [1, 2, 4, 5]

# nums.pop() # [1, 2, 3, 4]
# nums.pop(2) # [1, 2, 4, 5]

# print(nums)

# random_nums = [0.1, 6,3,8,2,9,10,400,2,555]

# print(random_nums)
# random_nums.sort(reverse=True)

# print(random_nums)

# instructors = ["Shane", "Briana", "brad", "keegan"]

# def lower_str(str):
#   return str.lower()

# # instructors.sort(key=lower_str) # ['brad', 'Briana', 'keegan', 'Shane']

# # print(instructors)

# sorted_instructors = sorted(instructors, key=lower_str) # ['brad', 'Briana', 'keegan', 'Shane']

# print(sorted_instructors)

# Tuples

# bare_tuple = 1,2,3,4,5,6

# b = ('a', 'b', 'c', 'd', 'e')
# print(b)

# # print(bare_tuple)

# singleton_tuple = 1,

# print(singleton_tuple) # (1)

# empty_tup = tuple()
# empty_with_parens = ()
# tup_from_list = tuple([1,2,3,4,5,6])

# print(empty_tup)
# print(empty_with_parens)
# print(tup_from_list)

# tup = ("red", "blue")
# tup = ("yellow", "green")  # no error, this works
# print(tup)                 # ("yellow", "green")
# tup += ("red", "blue")     # no error, this works
# tup += "orange",
# print(tup)                 # ("yellow", "green", "red", "blue")

# singleton_with_out_comma = (1)
# singleton_with_comma = (1,)

# print(type(singleton_with_out_comma)) # <class 'int'>
# print(type(singleton_with_comma)) # <class 'tuple'>

fruits = "banana", "avocado", "apple", "orange"


sorted_fruits = tuple(sorted(fruits))

# print(fruits)
# print(sorted_fruits)

# print(fruits[1:4:2]) # ('avocado', 'orange')

# Range

# range = list(range(0, 10, 2)) # [0, 2, 4, 6, 8]

# print(range)

# for idx in range(10, -1, -1):
#   print(idx)

# for idx in range(len(fruits)): # 0,1,2,3
#   print(fruits[idx])

# for idx in range(len(fruits)-1, -1, -1):
#   print(fruits[idx])

# squared_nums = []

# for num in range(-100, 101, 3):
#   squared_nums.append(num ** 2)

# print(squared_nums)

# items = ['a', 'b', 'c']
 
# enumerated_items = enumerate(items)
# print(enumerated_items) # <enumerate object at 0x7f443e30bf00>
 
# enumerated_list = list(enumerated_items)
# print(enumerated_list) # [(0, 'a'), (1, 'b'), (2, 'c')]
 
# for i, element in enumerated_list:
#     print(i, element) # 0 a => 1 b => 2 c

# Dictionaries

# const pojo = {
#   name: "shane",
#   age: 42
# }

def factorial(n):
  fact = 1
  for num in range(1, n + 1):
    fact *= num
  return fact

crazy_dict = {
  None: 'none',
  True: False,
  ("goat", 8): "tuple",
  "string": lambda x : x,
  factorial: 'factorial',
  1004: 'integer',
  "obj": {1: 2, 3: 4}
}

# print(crazy_dict['obj'])

# print(crazy_dict.string)

# print(dir(dict))
# keys = list(crazy_dict.keys())
# values = list(crazy_dict.values())
# items = list(crazy_dict.items())
# pprint(keys)
# pprint(values)
# pprint(items)

my_dict = { "name": "Shane", "age": 42, "role": "Section 2 Lead Instructor"}

# pprint(my_dict)
# print(my_dict["age"])
# print(my_dict.name) # AttributeError: 'dict' object has no attribute 'name'
# print(my_dict["none"]) # KeyError: 'none'
# print(my_dict.get("name"))
# print(my_dict.get("one", None))
# print(my_dict.get("banana", "Nope"))
my_dict["hobby"] = "Plays Guitar"
print(my_dict)
my_dict["hobby"] = "Plays Drums"
print(my_dict)

del my_dict["hobby"]
print(my_dict)