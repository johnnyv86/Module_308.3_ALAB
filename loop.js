// PART ONE: FIZZ BUZZ

// Loop through all numbers from 1 to 100.
for (let i = 1; i <= 100; i++) {

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

// PART TWO: PRIME TIME

let n = 4;
let nextPrime;
let i = n + 1;

while (true) {
    let isPrime = true;

    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        nextPrime = i;
        console.log(`The next prime umber after ${n} is ${nextPrime}`);
        break;
    }
    i++;
}

// PART THREE: FEELING LOOPY

const csvString = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26";

let currentCell = "";
let cell1 = "";
let cell2 = "";
let cell3 = "";
let cell4 = "";

let cellNum = 1;

for (let i = 0; i <csvString.length; i++) {
    let char = csvString[i];

    if (char === ",") {
        if (cellNum === 1) {
            cell1 = currentCell;
        } else if (cellNum === 2) {
            cell2 = currentCell;
        } else if (cellNum === 3) {
            cell3 = currentCell;
        } else if (cellNum === 4) {
            cell4 = currentCell;
        }

        currentCell = "";
        cellNum++;
    }

    else if (char === "\n") {
        if (cellNum === 4) {
            cell4 = currentCell;
        }

        console.log(cell1, cell2, cell3, cell4);

        currentCell = "";
        cell1 = "";
        cell2 = "";
        cell3 = "";
        cell4 = "";
        cellNum = 1;
    }

    else {
        currentCell += char;
    }
}

if (currentCell || cell1) {
    cell4 = currentCell;
    console.log(cell1, cell2, cell3, cell4);
}

