# Given a list, `lst` of dictionaries, write a function,
# `concatenate_dictionaries` that concatenates the contents of each dictionary
# into a single dictionary. If multiple dictionaries share the same key, use the
# value of the higher indexed dictionary in the list.

# Write your code here.
# Very Manual solution
# def concatenate_dictionaries(lst):
#     new_dict = {}
#     for dict in lst:
#         for key in dict.keys():
#             new_dict[key] = dict[key]
#     return new_dict

# Using .update
# def concatenate_dictionaries(lst):
#   new_dict = {}
#   for dict in lst:
#     new_dict.update(dict)
#   return new_dict

# Use kwargs
def concatenate_dictionaries(lst):
  new_dict = {}
  for dict in lst:
    new_dict = { **new_dict, **dict}
  return new_dict

lst = [
    {
        'a': 'this',
        'b': 'is'
    },
    {
        'c': 'the',
        'd': 'merged'
    },
    {
        'd': 'dictionary'
    }
]

print(concatenate_dictionaries(lst))
"""
Prints: 
{
    'a': 'this',
    'b': 'is',
    'c': 'the',
    'd': 'dictionary'
}
"""