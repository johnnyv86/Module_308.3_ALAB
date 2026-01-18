// PART ONE: FIZZ BUZZ

// Loop through all numbers from 1 to 100.
for (let i = i; i <= 100; i++) {

    // If a number is divisible by both 3 and 5, log “Fizz Buzz.”
    if (i % 3 === 0 && i % 5 === 0){
        console.log("Fizz Buzz");
    }

    // If a number is divisible by 3, log “Fizz.”
    else if (i % 3 === 0) {
        console.log("Fizz");
    }

    // If a number is divisible by 5, log “Buzz.”
    else if (i % 5 === 0) {
        console.log("Buzz");
    }

    // If a number is not divisible by either 3 or 5, log the number.
    else {
        console.log(i);
    }

}