const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


rl.question("Welcome to the password validator! Please enter a password at least 10 characters long and has one special character or number: ", function (answer) {
    let allLetters = false
    if (/^[a-zA-Z]+$/.test(answer)) {
        allLetters = true;
    }

    if (answer.length >= 10 && allLetters === false) {
        console.log(`Success! ${answer} is validated!`);
    }
    else {
        console.log(`${answer} doesn't work. Please try again.`);
    }
    
    rl.close();
})

