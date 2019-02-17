const isPrime = (number) => {
    let divisor = 2;
    let primeFlag = true;
    if (number >= divisor) {
        while (primeFlag && divisor < number) {
            if (number % divisor === 0) {
                primeFlag = false;
            }
            divisor++;
        }
        return primeFlag ? `${number} is prime`: `${number} is composite`;
    } else {
        return `${number} neither prime nor composite`;
    }
}
console.log('\nCheck the Number is prime or not');
console.log(isPrime(4));

console.log(isPrime(15));

console.log(isPrime(27));

console.log(isPrime(131));


console.log('\nCheck the List of Numbers are prime or not');
const primeList = (list) => list.map(item => console.log(isPrime(item)));
const myList = [1, 2, 3, 4, 6, 7, 9];
primeList(myList);

console.log('\nPrint prime numbers only in the sequence');

const LogPrime = (number) => [...Array(10).keys()].map(item => console.log(isPrime(item)));
LogPrime(10);