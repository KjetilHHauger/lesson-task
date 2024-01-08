console.log("This is script 5");

/*
Question 1
Console log the 3rd item in this array.
*/

let winningNumbers = [1, 76, 2, 78, 16, 7];

console.log(winningNumbers[2])

/*
Question 2
Add a new item to this array using the push method and console log the new amount of items.
*/

let vegetables = ["rice", "potatoes", "porridge", "cake", "spinach"];
    console.log(vegetables);
    console.log(vegetables.length);


vegetables.push("Cheeze doodles");
    console.log(vegetables);
    console.log(vegetables.length);

/*
Question 3
Console log each item in this array using a for loop.
*/

let randomThings = ["pumpkin", false, 23, true, "tomato"];

for (let i = 0; i < randomThings.length; i++) {
    let rand = randomThings[i];
    console.log(rand);
}

/*
Question 4
Loop through this array but only log the item if it is a number value.
*/

let moreThings = [14, "cat", true, 29, "fox", true, 34, 19];

for (let t = 0; t < moreThings.length; t++) {
    let typeOfItem = typeof moreThings[t];

    if (typeOfItem === "number") {
        console.log(moreThings[t]);
    }
}

/*
Question 5
Order this array alphabetically and then loop through it and log each item.
*/

let ingredients = ["water", "flour", "toothpaste", "fish lips"];

let result = ingredients.sort();
    console.log(result);
for (e = 0; e < result.length; e++) {
    console.log(result[e]);
}



/*
Question 6
Loop through this array and log every second item.
*/

let characters = ["Gob", "Michael", "George Michael", "Lindsay", "Buster", "Maeby", "Tobias", "Lucille"];

for (let c = 0; c < characters.length; c++) {

    if (c % 2 === 1) {
        console.log(c)
    }
}