class Dog(object): # inherits implicitly from the object class, so the parentheses 
                   # and object are not necessary
    """This is the dog class. Dogs are pretty cool"""

    _demeanor = "Ready to party!!"

    def __init__(self, name, breed, size, age):
        self._name = name
        self._breed = breed
        self._size = size
        self._age = age

    @property
    def name(self):
        return self._name
    
    @name.setter
    def name(self, new_name):
        if (not isinstance(new_name, str)):
            raise ValueError("Name must be a string")
        self._name = new_name
        return 

    def speak(self):
        return f"{self._name} says bow-wow"
    
    @classmethod
    def dog_factory(cls, dogs):
        new_dogs = [cls(name, breed, size, age) for name, breed, size, age in dogs]
        return new_dogs
    
    @classmethod
    def say_hi(cls, dogs):
        for dog in dogs:
            print(dog.speak())
        return

    @classmethod
    def change_demeanor(cls, new_demeanor):
        cls._demeanor = new_demeanor
        return

    @staticmethod
    def dog_facts():
        return "Dogs are descendants of wolfs"
    
    def __repr__(self):
        return f"<{self.name} is a {self._age} year old doggo!>"
    
    
    

dogs_ls = [("Pepper", "Mutt", "Smedium", 3), ("Daisy", "Mutt", "Medium", 0.5)]

dogs = Dog.dog_factory(dogs_ls)

print(dogs)

# Dog.say_hi(dogs)

# # print(dogs[0].name)

# Dog.change_demeanor("Bark at squirrels")

# # print(Dog.demeanor)
# # print(dogs[0].demeanor)
# print(Dog.dog_facts())

# print(help(Dog)) # prints docstring

bloo = Dog("Bloo", "Beagle/mix", "medium", 4)

# print(bloo.__name) # AttributeError: 'Dog' object has no attribute '_name'
# print(bloo._Dog__name) # works
# bloo.name = "Blooregard Q Kazoo"
# print(bloo.name)

# print(bloo.breed)
# print(bloo.size)
# print(bloo.age)

# print(bloo.speak())
# print(Dog.speak(bloo)) # not really used, but functions the same as above

# print(Dog.demeanor)
# print(bloo.demeanor)
# Dog.demeanor = "Ready for a treat!!"

# print(Dog.demeanor)
# print(bloo.demeanor)

# bloo.demeanor = "Ready for a nap..."

# print(Dog.demeanor)
# print(bloo.demeanor)

# bloo.name = 8
# print(bloo.name)