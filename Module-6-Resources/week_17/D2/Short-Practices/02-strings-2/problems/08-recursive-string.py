# Create a function that reverses the string using recursion.

# Write your function here.
def recursive_string(word):
  if word == "":
    return word
  # return word[-1] + recursive_string(word[0:-1])
  return recursive_string(word[1:]) + word[0]

print(recursive_string("civic")) # civic
print(recursive_string("refer")) # refer
print(recursive_string("string")) # gnirts
print(recursive_string("avocado")) # odacova
print(recursive_string("application")) # noitacilppa