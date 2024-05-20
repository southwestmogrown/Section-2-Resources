# Create a function that returns `True` if the first divided by the second value
# results in a remainder; otherwise return `False`.

# Write your function here.
def has_remainder(n1, n2):
    return n1 % n2 != 0

print(has_remainder(4, 2))   #>  False
print(has_remainder(57, 4))  #>  True
print(has_remainder(6, 3))   #>  False
print(has_remainder(81, 7))  #>  True
