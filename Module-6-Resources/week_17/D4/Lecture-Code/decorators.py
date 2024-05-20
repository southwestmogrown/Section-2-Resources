from datetime import datetime

def timer(func):
  def wrapper(*args, **kwargs):
    start = datetime.now()
    print(args)
    func(*args, **kwargs)
    # countdown_to_madness()
    end = datetime.now()
    return end - start
  return wrapper

# @timer
# def countdown_to_madness():
#   for _ in range(1000000):
#     print("I'm feeling pretty sane....")
#   print("AAAAAAAAAHHHHHHHHHHHHHHH!!!!!!!!!!")

# countdown_timer = timer(countdown_to_madness) # does essentially the same thing as using a decorator

# print(countdown_timer())

# print(countdown_to_madness())
@timer
def countdown_to_madness_x(n, a, key="value"):
  print(key)
  print(a)
  for _ in range(n):
    print("I'm feeling pretty sane....")
  print("AAAAAAAAAHHHHHHHHHHHHHHH!!!!!!!!!!")


print(countdown_to_madness_x(10, 'hello world', key="howdy"))