// VARIABLES declared with var, let, and const
var textVariable = "Initialising a string with var"; 
let numericVariable = 99; 
const statusArray = ["active", "pending", "cancelled"]; 

// FUNCTIONS: Named, anonymous, and built-in

// Named function
function displayProgrammeStatus() {
    console.log("The formal named function has executed.");
}
displayProgrammeStatus();

// Anonymous function assigned to a variable
let calculateTotal = function() {
    console.log("The anonymous function calculation is complete.");
};
calculateTotal();

// Built-in function (example: parseInt)
let currencyString = "450";
let formalisedInteger = parseInt(currencyString);
console.log("The parsed output using parseInt is:", formalisedInteger);

// CONDITIONAL STATEMENTS: If/else and switch

// If/else conditional statement
let systemInitialised = true;
if (systemInitialised) {
    console.log("System configuration authorised.");
} else {
    console.log("System configuration rejected.");
}

// Switch conditional statement
let chosenFlavour = 2;
switch (chosenFlavour) {
    case 1:
        console.log("Flavour selection: Vanilla");
        break;
    case 2:
        console.log("Flavour selection: Chocolate");
        break;
    case 3:
        console.log("Flavour selection: Strawberry");
        break;
    default:
        console.log("Alternative selection chosen");
}

// ARRAYS of different data types
let colourArray = ["grey", "green", "blue"]; 
let primeNumbers = [2, 3, 5, 7, 11]; 
let blendedArray = ["UK", 2026, true]; 

// LOOPS through an array
for (let i = 0; i < colourArray.length; i++) {
    console.log("Current colour array index contains:", colourArray[i]);
}

// OBJECTS: Creating and using objects
let userProfile = {
    firstName: "Arthur",
    lastName: "Pendelton",
    organisation: "Tech London",
    generateFullTitle: function() {
        return this.firstName + " " + this.lastName + " of " + this.organisation;
    }
};

// Accessing object properties
console.log("Extracted profile first name:", userProfile.firstName); 
console.log("Generated comprehensive identity title:", userProfile.generateFullTitle());
