from primePy import primes

class Primes:

    def is_prime(self, number):
        return primes.check(number)

    def are_prime_numbers(self, *args):
        list_of_false = [False for val in args if not primes.check(val)]
        return True if len(list_of_false)==0 else False



# p = Primes()
# print(p.is_prime(1))
# print( p.are_prime_numbers(1,3,7) )