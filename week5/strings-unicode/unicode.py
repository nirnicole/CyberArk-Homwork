def print_unicode_table(start, end):
      for i in range(start, end + 1):
        print(f"{i}: {chr(i)}")

print_unicode_table(200, 1000) 

#raw strings
print("This is a new\n dawn") 
print(r"This is a new\n dawn") 

#byte strings
byte_string = b'ABC' 
print(bytes([65,66,67])) # ABC 
print(b'ABC'.hex()) # 414243 
print("ABC".encode('ascii'))
print("ABC".encode('utf-8')) 