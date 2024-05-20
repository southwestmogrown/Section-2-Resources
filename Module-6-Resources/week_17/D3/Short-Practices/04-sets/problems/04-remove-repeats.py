# Given two strings, write a function, `remove_repeats` that returns a set of
# the uncommon characters from both strings. Do NOT use the `^` operator.

# Write your code here.
def remove_repeats(str1, str2):
    set1 = set(str1)
    set2 = set(str2)
    return (set1 - set2) | (set2 - set1)  # return set1 ^ set2

str1 = 'aloha'
str2 = 'bonjour'

print(remove_repeats(str1, str2))    # {'r', 'a', 'l', 'h', 'n', 'b', 'j', 'u'}