console.log("This is script 3");


// Question 1

let firstNumber = 34;
let secondNumber = 89;

if (firstNumber < secondNumber) {
    console.log("The first number is smaller than the second");
};

// Question 2

let age = 11;
let minimumAge = "13";

if (age >= minimumAge) {
    console.log("Pass");
} else {
    console.log("Failed");
};

// Question 3

let income = "11.050";
let maximumIncome = "13.075";

let convertedIncome = parseFloat(income);
    console.log(convertedIncome);

let convertedMaximum = parseFloat(maximumIncome);
    console.log(convertedMaximum);

if( convertedIncome <= convertedMaximum) {
    console.log("Too little");
} else {
    console.log("Enough");
};

// Question 4

let colour = "blue";

if (colour == "orange") {
    console.log("This colour is a bit rubbish");
}

// Question 5

let invoicePaid = false;

if(invoicePaid == true) {
    console.log("Paid");
} else {
    console.log("Not paid")
};

// Question 6

let selectedNumber = 11;
let winningNumber = "15";

let convertedWinning = parseInt(winningNumber);
    console.log(convertedWinning);

if(selectedNumber === convertedWinning) {
    console.log("Winner");
} else {
    console.log("You lose again");
};

// Question 7

let dayOfTheWeek = 2;
let day;

switch (dayOfTheWeek) {
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
    case 7:
        day = "Sunday";
        break;
    default:
        day = "Invalid day number"
};

console.log(day);