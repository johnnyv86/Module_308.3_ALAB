// PART ONE: FIZZ BUZZ


/* LOOP FROM 1 TO 100 --------------------------------------------------
	let i = 1 -> Starts at 1
    i <= 100 -> Continues while i is 1 - 100
    i++ -> Increment by 1 each iteration
    % -> Modulo Operator (remainder after division)
--------------------------------------------------------------------------- */
for (let i = 1; i <= 100; i++){
    if (i % 15 === 0) { // Check both 3 and 5 first (divisibleBy3 && divisibleBy5)
        console.log("Fizz Buzz");
    }   else if (i % 3 === 0) {  // Ensures only *one* branch runs per number.
        console.log("Fizz"); 
    }   else if (i % 5 === 0) { // is divisible by 5 (no remainder)
        console.log("Buzz");
    }   else { // Handles numbers that aren’t divisible by 3 or 5
        console.log(i);
    }
}

// PART TWO: PRIME TIME

// Find Prime Number (n)
let n = 50;
console.log(`Starting search for next prime after n = ${n}`);


// Reject numbers ≤ 1 outright
function isPrime(num) {
    if (num <= 1) { 
        return false;
    }
/* Try dividing (num) by all integers from 2 up to sqrt(num)------------------
    `divisor * divisor <= num` is equivalent to 
        `divisor <= Math.sqrt(num)` but avoids computing a square root repeatedly
--------------------------------------------------------------------------- */
    for (let divisor = 2; divisor * divisor <= num; divisor++) {
        if (num % divisor === 0) { // If any divisor divides evenly, `num` is not prime.
            return false;
        }
    }
    return true;
}


let candidate = n + 1; // To obtain the next prime after (n)
console.log(`${candidate}`)

while (true) { // Creates an creates an intentional infinite loop
    if (isPrime(candidate)) {
        console.log(`Next prime number after ${n} is ${candidate}.`); // Logs the result
        break; // Breaks/Exits the intentional infinite loop
    }
    candidate++; // Increment candidate and test the next number
}

console.log(`${candidate}`)


// PART THREE: FEELING LOOPY - CSV PARSING

const csv1 = 
    "ID,Name,Occupation,Age\n" +
    "42,Bruce,Knight,41\n" +
    "57,Bob,Fry Cook,19\n" +
    "63,Blaine,Quiz Master,58\n" +
    "98,Bill,Doctor’s Assistant,26";
const csv2 = 
    "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n" +
    "1,0.00,0.050,0.050\n" +
    "2,0.49,0.066,0.066\n" +
    "3,0.98,0.087,0.080\n" +
    "4,1.47,0.116,0.108\n" +
    "5,1.96,0.142,0.138\n" +
    "6,2.45,0.166,0.158\n" +
    "7,2.94,0.193,0.174\n" +
    "8,3.43,0.204,0.192\n" +
    "9,3.92,0.226,0.205\n" +
    "10,4.41,0.238,0.232";

// VARIABLES TO HOLD CELLS
function parseAndLogCsv(csvString) {
    let cell1 = "";
    let cell2 = "";
    let cell3 = "";
    let cell4 = "";
    let cellIndex = 1;

    console.log("=== New CSV ===");


for (const char of csvString) { // for...of iterates over each character in the string in order.
    if (char === ",") { // Comma means “move to next cell.”
        cellIndex++; // Increment cellIndex (1 → 2 → 3 → 4) and continue
        continue; // Skips the remainder of the loop body and goes to next character.
    }

    if (char === "\n") { // Newline means “end of row.”
        console.log(cell1, cell2, cell3, cell4);

        cell1 = ""; // Reset cells to empty strings for the next row.
        cell2 = "";
        cell3 = "";
        cell4 = "";
        cellIndex = 1; // Reset cellIndex back to 1.
        continue;
    }
/* Append the character to the appropriate cell string --------------
   Which cell to append to is based on `cellIndex`
-------------------------------------------------------------------*/
    if (cellIndex === 1) {
        cell1 += char;
    }   else if (cellIndex === 2) {
        cell2 += char;
    }   else if (cellIndex === 3) {
        cell3 += char;
    } else if (cellIndex === 4) {
        cell4 += char;
    }
}

// Logging the final row after the loop
    if (cell1 || cell2 || cell3 || cell4) {
        console.log(cell1, cell2, cell3, cell4);
    }
}

console.log("Parsing First CSV:\n");
parseCsvFourColumns(csv1);

console.log("Parsing Second CSV:\n");
parseCsvFourColumns(csv2);