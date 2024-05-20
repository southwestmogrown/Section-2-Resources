# Create a function which adds spaces before every capital in a word. Lower case
# the whole string afterwards.

# Write your function here.
def cap_space(s):
  new_str = ''
  for ele in s:
    if ele.isupper():
      new_str += " " + ele.lower()
    else:
      new_str += ele
  return new_str

print(cap_space("helloWorld"))     #> "hello world"
print(cap_space("iLoveMyTeapot"))  #> "i love my teapot"
print(cap_space("stayIndoors"))    #> "stay indoors"