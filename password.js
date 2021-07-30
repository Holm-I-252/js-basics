const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


rl.question("Welcome to the password validator! Please enter a password at least 10 characters long: ", function (answer) {
    if (answer.length >= 10) {
        console.log(`Success! ${answer} is validated!`);
    }
     else {
        console.log(`${answer} doesn't work. Please try again.`);
    }
    rl.close();
})

