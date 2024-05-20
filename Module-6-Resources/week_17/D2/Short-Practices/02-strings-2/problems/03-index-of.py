# Create a function that returns the index of a given letter in the string.

# Write your function here.
def index_of(s1, s2):
    return s1.lower().index(s2)

print(index_of("Arm", "a"))  #> 0
print(index_of("Pie", "e"))  #> 2
print(index_of("Lucid", "i"))  #> 3
print(index_of("Obvious","u"))  #> 5
