const form = document.querySelector('#RegisterFrom');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    validateForm();
});
const formFields = ["Name", "EMail", "Password", "Confirm"];
function validateForm() {
    let name = document.forms["RegForm"]["Name"];
    let email = document.forms["RegForm"]["EMail"];
    let password = document.forms["RegForm"]["Password"];
    let confirm_password = document.forms["RegForm"]["Confirm"];

    if (name.value === "") {
        alert("Please enter your name");
        return false;
    }

    if (email.value === "") {
        alert("Please enter your email");
        return false;
    }

    if (password.value === "") {
        alert("Please enter your password");
        return false;
    }

    if (confirm_password.value === "") {
        alert("Please enter your confirm Password");
        return false;
    }

    if (password.value === confirm_password.value) {
        if (userExists(email.value)) {
            alert("User already exists");
            return false;
        } else {
            stroedInLocalStorage();
            formFields.forEach(field =>
                document.forms["RegForm"][field].value = "");
            alert("Registered Succesfully");
        }
    } else {
        alert("Password and Confirm Password do not match");
        return false;
    }
}
let arr = [];

function userExists(email) {
    return arr.some(user => user.email == email);
}

window.addEventListener("load", (event) => {
    let abc = localStorage.getItem("users");
    if (abc) {
        arr = JSON.parse(abc);
    }
});

function stroedInLocalStorage() {
    console.log("Stored in local storage!!!");
    let name = document.forms["RegForm"]["Name"].value;
    let email = document.forms["RegForm"]["EMail"].value;
    let password = document.forms["RegForm"]["Password"].value;
    let confirm_password = document.forms["RegForm"]["Confirm"].value;

    let userObj = {
        name: name,
        email: email,
        password: password,
        confirm_password: confirm_password
    }

    arr.push(userObj);

    let userArrString = JSON.stringify(arr);
    localStorage.setItem("users", userArrString);
}