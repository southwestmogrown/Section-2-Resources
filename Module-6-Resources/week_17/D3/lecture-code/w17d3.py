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
# my_dict["hobby"] = "Plays Guitar"
# print(my_dict)
# my_dict["hobby"] = "Plays Drums"
# print(my_dict)

# del my_dict["hobby"]
# print(my_dict)

# Args and Kwargs

# *: single splat - **: double splat


new_dict = { **my_dict }
ls = [1,2,3]
new_ls = [ *ls ]

# print(new_dict == my_dict) # True
# print(new_dict is my_dict) # False
# print(new_ls == ls) # True
# print(new_ls is ls) # False

# def print_args_and_kwargs(*args, **kwargs):
#   print('args: ', args)
#   print("kwargs: ", kwargs)

# print_args_and_kwargs(1,2,3,4,5,6, key="value", random="sdlkjfsa;dlkfjdlk 203u3lkjsa", test=6)

# def print_tuple(*tup, key):
#   print(tup)
#   print(key)
#   # print(key2)

# print_tuple(1232,2,3,543,43, key='something', key2="value2")

# def print_objs(a, b, *args, **kwargs):
#   print(a)
#   print(b)
#   print(args)
#   print(kwargs)

# print_objs("hello", "world", 12,3,4,6,43,2,4,56, banana="banana", orange="orange")
# new_set = {} # this will be a dictionary
# new_set = set()
# set_with_elements = { 1, "hello", None }

# print(type(new_set))
# print(type(set_with_elements))

# set1 = {1,2,1,2,1,2,3,4,3,4,3,4,5,4,5,6,5,6,7,6,7,8,7,8,9,0,8,}
# set2 = set('Hello')
# set3 = set([1,2,3,3,3,4,5,4,4,4,6,7,5,4,7])
# my_dict = {"hello": "value", "goodbye": "value"}
# print(set(my_dict))    # {'goodbye', 'hello'}


# print(set1)
# print(set2)
# print(set3)

odds = {1,3,5,7,9,11,13,15,17,19}
nums = {1,2,3,4,5,6,7,8,9,10}

# print(odds | nums) # all elements in odds OR nums
# print(odds.union(nums)) 

# print(odds & nums) # all elements in odds AND nums
# print(odds.intersection(nums))

# print(odds - nums) # odds.difference(nums)
# print(nums - odds) # nums.difference(odds)

# print(nums ^ odds) # nums.symmetric_difference(odds) == (str1 - str2) | (str2 - str1)

# names = ["JAMES", "julie", "Ana", "Ria"]
# sorted_names = sorted(names)
# print(sorted_names)
 
# # ensure a case-insensitive sort with the `.lower` string method 
# # and sort in reverse order
# sorted_names = sorted(names, key=str.lower, reverse=True)
# print(sorted_names)
# print(names is sorted_names)

ls1 = [True, False, True, False, True, False, True]
ls2 = [False, False, False, False]
ls3 = [True, True, True, True]
ls4 = []

# print(all(ls1)) # False
# print(all(ls2)) # False
# print(all(ls3)) # True
# print(all(ls4)) # True

# print(any(ls1)) # True
# print(any(ls2)) # False
# print(any(ls3)) # True
# print(any(ls4)) # False

# scores = [90, 86, 75, 91, 62, 99, 88, 90]

# only_as = filter(lambda num: num >= 90, scores)
# print(only_as)        # <filter object at 0x10546ad30>
# print(list(only_as))  # [90, 91, 99, 90]

# def get_grade(num):
#     if (num >= 90):
#         return "A"
#     elif (num <90 and num >= 80):
#         return "B"
#     elif (num < 80 and num >= 70):
#         return "C"
#     elif (num < 70 and num >= 60):
#         return "D"
#     else:
#         return "F"
    

# scores = [90, 86, 75, 91, 62, 99, 88, 90]
# print(map(get_grade, scores))  # <map object at 0x106faffa0>
# grades = list(map(get_grade, scores))
# print(grades)                  # ['A', 'B', 'C', 'A', 'D', 'A', 'B', 'A']
 

scores = [90, 86, 75, 91, 62, 99, 88, 90, 100] # extra score won't get added to the zip object
grades = ["A", "B", "C", "A", "D", "A", "B", "A"]

combined = zip(scores, grades)
# combined = zip(grades, scores)
combined_list = list(combined)
combined_dict = dict(combined_list)
print(combined)       # <zip object at 0x1023a9600>
print(combined_list)  # [(90, 'A'), (86, 'B'), (75, 'C'), (91, 'A'), (62, 'D'), (99, 'A'), (88, 'B'), (90, 'A')]
print(combined_dict)  # {90: 'A', 86: 'B', 75: 'C', 91: 'A', 62: 'D', 99: 'A', 88: 'B'}

