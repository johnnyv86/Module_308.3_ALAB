// PART ONE: FIZZ BUZZ

// Loop from 1 to 100
for (let i = 1; i <= 100; i++){
    if (i % 15 === 0) {
        console.log("Fizz Buzz");
    }   else if (i % 3 === 0) {
        console.log("Fizz");
    }   else if (i % 5 === 0) {
        console.log("Buzz");
    }   else {
        console.log(i);
    }
}

// PART TWO: PRIME TIME

// Find Prime Number (n)
function isPrime(num) {
    if (num <= 1) {
        return false;
    }

    for (let divisor = 2; divisor * divisor <= num; divisor++) {
        if (num % divisor ===0) {
            return false;
        }
    }

    return true;
}

let n = 9;
let candidate = n + 1;
console.log(`${candidate}`)

while (true) {
    if (isPrime(candidate)) {
        console.log(`Next prime number after ${n} is ${candidate}.`);
        break;
    }

    candidate++;
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


function parseCsvFourColumns(csvString) {
    let cell1 = "";
    let cell2 = "";
    let cell3 = "";
    let cell4 = "";
    let currentCellIndex = 1;

    console.log("=== New CSV ===");

    for (const char of csvString) {
        if (char === ",") {
            currentCellIndex++;
            continue;
        }

        if (char === "\n") {
            console.log(cell1, cell2, cell3, cell4);

            cell1 = "";
            cell2 = "";
            cell3 = "";
            cell4 = "";
            currentCellIndex = 1;
            continue;
        }

        if (currentCellIndex === 1) {
            cell1 += char;
        }   else if (currentCellIndex === 2) {
            cell2 += char;
        }   else if (currentCellIndex === 3) {
            cell3 += char;
        } else if (currentCellIndex === 4) {
            cell4 += char;
        }

        if (cell1 || cell2 || cell3 || cell4) {
            console.log(cell1, cell2, cell3, cell4);
        }
    }

}

parseCsvFourColumns(csv1);
parseCsvFourColumns(csv2);