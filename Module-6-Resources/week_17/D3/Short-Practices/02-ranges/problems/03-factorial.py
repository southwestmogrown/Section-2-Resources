# Write the factorial function. Remember, for a number n, the factorial is all
# numbers from 1 to n multiplied together.

# Write your function here.
# def factorial(n):
#   if n <= 1:
#     return n
#   else:
#     return n * factorial(n - 1)

def factorial(n):
  fact = 1
  for num in range(1, n + 1):
    fact *= num
  return fact

print(factorial(1))     #> 1
print(factorial(8))     #> 40320
print(factorial(12))    #> 479001600