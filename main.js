// Exercise: Using Javascript, create a variable to hold your last name. Then, if your last name has 7 or more letters, console log "I can't pronounce this last name". If your last name has less than 7 characters, console log your last name.
// Challenge: Create a new repository on Github and push the code your wrote up to Github.
var lastName = "Miller";
var numCharacters = lastName.length;
if (numCharacters < 7 ) {
    console.log(lastName);
}
    else {
        console.log("I cant pronouce this last name");
}
