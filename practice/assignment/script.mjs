const alertFunction = () => {
    const name = prompt("What is your name?", "Name" );
    if (name) {
        document.write(`My name is ${name}.<br>`);
    }

    const age = prompt("What is your age?", "18");
    if (age < 18) {
         document.write(` i am ${age} years old and is a minor. <br>`);
    }
    if (age > 18) {
         document.write(` i am  ${age} years old and is an adult. <br>`);
    }

    const hobbies = prompt("What are your hobbies?","hobbies");

    if (hobbies) {
        document.write(` my hobbies are ${hobbies}.<br>`);
    }

    const nationality = prompt("what is your nationality?","nationality");

    if (nationality) {
        document.write(` my nationality is ${nationality}.<br>`)
    }


    const surName = prompt("what is your surName?","surName")
    if (surName) {
        document.write(`my surName is ${surName}.<br>`)
    }
};