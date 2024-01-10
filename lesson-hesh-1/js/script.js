function createList(list) {

    let myListItems = "";

    for (let i = 0; i < list.length; i++) {
        myListItems += `
            <ul class="list">
                <li>
                    ${list[i].title}
                </li>
                <li>
                    ${list[i].description}
                </li>
                <li>
                    ${list[i].color}
                </li>
                <li>
                    ${list[i].amount}
                </li>
            </ul>
        `
    }
    return myListItems;
}

let listItems = [
    {
        title: "Banana",
        description: "Fruit",
        color: "Yellow",
        amount: 2
    },
    {
        title: "Orange",
        description: "Fruit",
        color: "Orange",
        amount: 1
    },
    {
        title: "Cucumber",
        description: "Vegetable",
        color: "Green",
        amount: 1
    },
    {
        title: "Coca Cola",
        description: "Soda",
        color: "Red",
        amount: 2
    }
]

const listItemsContainer = document.querySelector(".container");
console.log(listItems);

listItemsContainer.innerHTML = createList(listItems);

let listItems2 = [
    {
        title: "The Hobbit",
        description: "Tiny person on big journey",
        amount: 1
    },
    {
        title: "Lord of the rings",
        description: " More tiny people on a bigger journey",
        amount: 3
    }
   
]

const listItemsContainer2 = document.querySelector(".container2");

listItemsContainer2.innerHTML = createList(listItems2);