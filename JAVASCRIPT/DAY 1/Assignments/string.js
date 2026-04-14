let un = prompt("Enter username : ");
let email = prompt("Enter email : ");
let password = prompt("Enter password : ");

function check(un, email, password) {

    un = un.replaceAll(" ", "").toLowerCase();
    email = email.toLowerCase();

    if (email.includes("@") && email.includes(".")) {
        console.log("Valid Email");
    } else {
        console.log("Invalid Email");
    }

    if (password.length > 8 && (password.includes('@') || password.includes('/') || password.includesama('*'))) {
        console.log("Valid Password");
    } else {
        console.log("Password must be greater than 8 ");
    }

    console.log("Username:", un);
    console.log("Email:", email);
}

check(un, email, password);