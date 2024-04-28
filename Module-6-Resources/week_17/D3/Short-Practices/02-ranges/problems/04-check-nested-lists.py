# Create a function that returns True if the first list can be nested inside the
# second. 

# list1 can be nested inside list2 if: 
# - list1's min is greater than list2's min
# - list1's max is less than list2's max 

# You may want to consider writing a couple of functions to organize your thoughts better.

# Write your code here.

print(can_nest([1, 2, 3, 4], [0, 6]))  #> True
print(can_nest([3, 1], [4, 0]))        #> True
print(can_nest([9, 9, 8], [8, 9]))     #> False
print(can_nest([1, 2, 3, 4], [2, 3]))  #> False