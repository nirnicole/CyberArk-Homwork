#ex1:

def to_upper(string):
    res = ""

    for c in string:
        c = ord(c)
        if (c>=ord('a') and c<=ord('z')):
            c-= (ord('a')-ord('A'))
        res += chr(c)
    return res

#extention:
def to_lower(string):
    res = ""
    for c in string:
        c = ord(c)
        if (c>=ord('A') and c<=ord('Z')):
            c+= (ord('a')-ord('A'))
        res += chr(c)
    return res

print(to_upper("d"))    # "D"
print(to_upper("Q"))    # "Q" (no change)
print(to_upper("!"))    # "!" (no change) 

#Exercise: Unicode Encryption
def encode(msg):
    return "".join([(str(ord(c))+" ") for c in msg])

print(encode("Hello"))    # "72 101 108 108 111" 

def decode(msg):
    return "".join([(chr(int(c))) for c in msg.split()])

print(decode("72 101 108 108 111"))   # "Hello"
print(decode(encode("Hello")))        # "Hello" 

#Exercise: Word value
def get_word_value(string):
    return sum([(int(ord(c))-int(ord('a'))+1) for c in string])

print(get_word_value("day"))    # 4 + 1 + 25 = 30 

#Exercise: Caesar cipher

def encodeCypher(msg, val):
    return "".join([(chr(int(ord('A')) + ((int(ord(c))+val)-int(ord('A')) )%26)) for c in msg])

print(encodeCypher("ABXYZ", 3))   # "DEABC" 



#2exs skipped