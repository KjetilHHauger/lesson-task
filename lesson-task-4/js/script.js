console.log("This is script 4");


/*  
Question 1
Write a loop that logs the numbers 0 to 7.
*/ 


for (let loop = 0; loop <= 7; loop++) {
    console.log(loop);
};

/*
Question 2
Write a loop that logs the numbers 10 to 1. Count down from 10 to 1.
*/

for (let loopDown = 10; loopDown >= 1; loopDown--) {
    console.log(loopDown);
};

/*
Question 3
Write a loop that counts from 10 to 20, and log only the odd numbers. 11, 13, 15, etc
*/

for (let odd = 10; odd <= 20; odd++) {
    if (odd % 2 !== 0) {
        console.log(odd);
    }
}
