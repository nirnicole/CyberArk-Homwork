import primes

class TestPrimes:

    def test_is_three_prime(self):
        assert primes.Primes().is_prime(3)

    def test_five_six_seven(self):
        assert primes.Primes().are_prime_numbers(5,6,7)

    def test_one(self):
        assert not primes.Primes().is_prime(0)


TestPrimes()