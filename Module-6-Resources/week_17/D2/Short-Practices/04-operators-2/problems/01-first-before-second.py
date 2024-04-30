# You are given three inputs: a string, one letter, and a second letter.

# Write a function that returns `True` if every instance of the first letter
# occurs before every instance of the second letter.

# Look at the String Methods to possibly help you find some methods that can
# make this easier.
# https://docs.python.org/3.9/library/stdtypes.html?highlight=strings#string-methods

# Write your function here.
def first_before_second(str, char1, char2):
  return str.rindex(char1) < str.index(char2)

# naive version

def first_before_second_while(str, char1, char2):
  first_chars_last_index = 0
  second_chars_first_index = 0

  i = 0
  while i < len(str):
    if str[i] == char1:
      first_chars_last_index = i
    i += 1

  i = 0
  while i < len(str):
    if str[i] == char2:
      second_chars_first_index = i
      break
    i += 1
  
  return first_chars_last_index < second_chars_first_index
  



print(first_before_second("a rabbit jumps joyfully", "a", "j"))
#> True
# Every instance of "a" occurs before every instance of "j".

print(first_before_second("knaves knew about waterfalls", "k", "w"))
#> True

print(first_before_second("happy birthday", "a", "y"))
#> False
# The "a" in "birthday" occurs after the "y" in "happy".

print(first_before_second("precarious kangaroos", "k", "a"))
#> False

