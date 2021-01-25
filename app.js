/* 3 different solves to check for a prime. */

/*The first method - You can write a program to find prime numbers
   using the label for the outer loop, this is a less
   preferred method */

function showPrimes(n) {
    nextPrime:
    for(let i = 2; i < n; i++) {

        // check for a prime
        for(let j = 2; j < i; j++) {
            if(i % j == 0) continue nextPrime;
        }

        alert(i);
    }
}

//Better method – use the separate function checkPrime:

//show Prime
function showPrimes(n) {
    for(let i = 2; i < n; i++) {
        if(!isPrime(i)) continue;
        
        console.log(i);
    }
}

//get Prime
function getPrime(n) {
    for(let j = 2; j < n; j++) {
        if(n % j == 0) return false;
    }

    return true;
}

showPrimes(18)

//Okey, we can spectate that it method looks like better than first.


/* There is another one option looking for a primes.
We can to enter by hand any number, and program will back our prime number.
If number was is not prime, program write us - "It's not a prime".
Also program write us that number "It's prime" if number will be prime. */

function getPrime(num) {
    for(let i = 2; i < 10; i++) {
      if(!isPrime(num)) {
        console.log(`${num} It's not a prime number.`);

        return;
      } else {

      console.log(`${num} It's a prime number.`)

      return;
      }
    }
  } 
    
  function checkPrime(num) {
    for(let i = 2; i < num; i++) {
      return (num % i == 0) ? false : true;
    }
  }          
             
  let num = prompt("Please, write number, and check it on prime: ", 0);    

  getPrime(num);