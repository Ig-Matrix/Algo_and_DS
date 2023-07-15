// Write a function to check if a number is a prime number
//The function should return true if the number is a prime number else return false

function isPrime(num) {
    //TODO
    if (num < 2) {
        return false;
    } else {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }
}
