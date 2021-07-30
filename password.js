const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


rl.question("Welcome to the password validator! Please enter a password at least 10 characters long and has a combination of at least one letter and digit: ", function (answer) {
    let allLetters = false;
    let allNumbers = false;
    if (/^[a-zA-Z]+$/.test(answer)) {
        allLetters = true;
    }

    if (/^\d+$/.test(answer)) {
        allNumbers = true;
    }

    if (answer.length >= 10 && allLetters === false && allNumbers === false) {
        console.log(`Success! ${answer} is accepted!`);
    }
    else {
        console.log(`${answer} doesn't work. Please try again.`);
    }

    rl.close();
})

