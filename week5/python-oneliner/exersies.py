# ex1:Is Palindrome
def isPalindrome(str):
    return str == str[::-1]

print(isPalindrome("dood"))
print(isPalindrome("doodo"))

# ex2: Reverse Words in a Sentence
def revers_words_sent(sentence):
    return " ".join(word[::-1] for word in sentence.split())

print(revers_words_sent("hello world"))

# ex3: Swap Two Variables
def swap_two(var1, var2):
    return var2,var1

print(swap_two(1,2))

# ex4: Sum Even Items
def sum_even(item_list):
    return sum(item_list[1::2])

print(sum_even([1, 2, 1, 3, 1]))

# ex5: Duplicate
def duplicate(item_list):
    return item_list + item_list

print(duplicate([1,2,3]))

# ex6: Change Spaces
def change_spaces(string):
    return "@".join(string.split())

print(change_spaces("You got it"))

# ex7: Number of spaces
def number_of_spaces(string):
    return len(string.split())-1

print(number_of_spaces("my name is what"))

# ex8: Number of all spaces
def number_of_all_spaces(string):
    return len([c for c in string if c in [' ', '\t', '\n']])

test_str = "Here is\na new line"
print(number_of_all_spaces(test_str))

# ex9: Largest Lexicographically
def largest_lexicographically(sentence):
    # return sorted(("".join(sentence.split("."))).split(), reverse=True)[0]
    return max(sentence.replace('.',' ').split())

print(largest_lexicographically("Imagination is .more important than knowledge."))

# ex10: 
def longest_word(sentence):
    return len(sorted(("".join(sentence.split("."))).split(), key=str.__len__, reverse=True)[0])

print(longest_word("If you can't explain it simply you don't understand it well enough."))

# ex11: Reverse Sentence
def revers_sent(sentence):
    return sentence[::-1]

print(revers_sent("hello world"))


# ex12: Reverse Word Order
def revers_word_order(sentence):
    return " ".join(word for word in sentence.split()[::-1])

print(revers_word_order("hello dear world"))
