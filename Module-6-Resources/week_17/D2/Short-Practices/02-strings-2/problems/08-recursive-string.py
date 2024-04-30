# Create a function that reverses the string using recursion.

# Write your function here.
def recursive_string(str):
    if len(str) == 0:
        return str
    # return str[-1] + recursive_string(str[0:-1])
    return recursive_string(str[1:]) + str[0]



print(recursive_string("civic")) # civic
print(recursive_string("refer")) # refer
print(recursive_string("string")) # gnirts
print(recursive_string("avocado")) # odacova
print(recursive_string("application")) # noitacilppa