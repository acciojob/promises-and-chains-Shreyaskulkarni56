//your JS code here. If required.

const form = document.getElementById("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const age = document.getElementById("age").value;
    const name = document.getElementById("name").value;

    // Validation
    if (age === "" || name.trim() === "") {
        alert("Please enter valid details.");
        return;
    }

    // Creating a Promise
    const checkAge = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Number(age) > 18) {
                resolve(`Welcome, ${name}. You can vote.`);
            } else {
                reject(`Oh sorry ${name}. You aren't old enough.`);
            }
        }, 4000);
    });

    // Promise chaining
    checkAge
        .then((message) => {
            alert(message);
        })
        .catch((error) => {
            alert(error);
        });
});
