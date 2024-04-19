# You are given three inputs: a string, one letter, and a second letter.

# Write a function that returns `True` if every instance of the first letter
# occurs before every instance of the second letter.

# Look at the String Methods to possibly help you find some methods that can
# make this easier.
# https://docs.python.org/3.9/library/stdtypes.html?highlight=strings#string-methods

# Write your function here.


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

