# Example #1 Ternary Operators
# is_good = True
# # dragon = "Toothless" if is_good else "Smaug"

# if is_good:
#   dragon = "Toothless"
# else:
#   dragon = "Smaug"


# print(dragon)

# Example #2 Random Numbers
# import random
# from random import randint, choice
# dragons = ["Puff", "Toothless", "Falkor", "Draco"]
# rand_num = randint(0, 3)

# dragon_pick = dragons[rand_num]
# dragon_2 = choice(dragons)

# print(dragon_pick)
# print(dragon_2)

# Example #3 User Input

# user_input = input("Who is the coolest dragon? ")
# print(f"You thought {user_input} was the coolest dragon...")

# word = open("words.txt").read().split()

# print(word)

# Example #5 map method, lambda functions
# list1 = [1, 4, 9, 16]

# def multiply_by_two(n):
#   return n * 2

# multiply_by_three_lambda = lambda x: x * 3

# map1 = map(multiply_by_two, list1)
# # map2 = map(lambda banana: banana * 3, list1)
# map2 = map(multiply_by_three_lambda, list1)

# print(list(map1))
# print(list(map2))
# print(list1)

# Example #6 Classes
# class SomeClass:
#   pass

class Book:
  def __init__(self, title, series, author):
    self._title = title
    self.series = series
    self.author = author

  @property
  def title(self):
    return self._title
  
  def get_information(self):
    return f"{self.title} by {self.author}"




book = Book('Fight Club', 'N/A', 'Chuck Pahlaniuck')

print(book.get_information())

"""
Multiline
comment
"""

multiline_str = """
Have a 
Multiline
String
"""

print(multiline_str)