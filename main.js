//Task 1: Attendee Badge:

function generateBadge(Name, Role) {
    return(`Name: ${Name}, Role: ${Role}`);
}

console.log(generateBadge("Kimi", "Product Administrator"));

//Task 2: Calculating Cost:

function calculateCost(numberOfAttendees, costPerAttendee) {
    if (numberOfAttendees > 100) {
        return (costPerAttendee * numberOfAttendees) * 0.90;
     } 
     else {
       return costPerAttendee * numberOfAttendees;
    }
}

console.log(calculateCost(120,25));

//Task 3: Validating Email:

function validateEmail (email) {
    let checkForAt = false;
    let checkForDot = false;
    let emailString = email;
    if (emailString.includes("@")) {
        checkForAt = true;
    }
    if (emailString.includes(".")) {
        checkForDot = true;
    }
    return checkForAt && checkForDot;
}

console.log(validateEmail('alice@email.com'));
console.log(validateEmail('alice.'));
console.log(validateEmail('Alice'))