// Iteration 1: Names and Input

const hacker1 = 'Ana';
console.log("The driver's name is " + hacker1);

const hacker2 = 'Pepe';
console.log("The navigator's name is " + hacker2)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(
        "The driver has the longest name, it has " + hacker1.length + " characters"
        );
    } else if (hacker2.length > hacker1.length) {
        console.log ("It seems that the navigator has the longest name, it has " + hacker2.length + " characters")
} else {
    console.log("You both have equally long names, " + hacker1.length + " characters!")
}

// Iteration 3: Loops

// 3.1 Print all the characters of the driver's name, separated by a space and in capitals
console.log(hacker1.toUpperCase());

let newName = ""

for (let i = 0; i< hacker1.length; i++) {
    newName += " " + hacker1[i].toUpperCase()
}

console.log(newName)

// 3.2 Print all the characters of the navigator's name, in reverse order

let reverseName = ""

for (let i = hacker2.length-1; i >= 0; i--) {
    reverseName += hacker2[i]
}

console.log(reverseName)

// 3.3 Depending on the lexicographic order print (order name)
console.log(hacker1.localeCompare(hacker2));

let firstName = hacker1.localeCompare(hacker2)
let output = ""

switch (firstName) {
    case -1:
        output = "The driver's name goes first.";
        break;
    case 0:
        output = "What?! You both have the same name?";
        break;
    case 1:
        output = "Yo, the navigator goes first definitely."
}

console.log(output)