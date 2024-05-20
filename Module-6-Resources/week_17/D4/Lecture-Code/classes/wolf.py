from dog import Dog

class Wolf(Dog):
  
  def __init__(self, name, breed, size, age, enemy):
    super().__init__(name, breed, size, age)
    self.enemy = enemy

  
  def speak(self):
    return f"{self.name} howls at the moon. Awooooooo!!!!"


fenrir = Wolf("Fenrir", "Wolf", "Giant", 1000000000000, "Odin")

# print(fenrir.name)
# print(fenrir._size)
# print(fenrir._age)
# print(fenrir.enemy)

print(fenrir.speak())