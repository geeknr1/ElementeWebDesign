function validateForm() {
    let firstName = document.getElementById("first_name").value;
    let lastName = document.getElementById("last_name").value;
    let gender = document.querySelector('input[name="Gender"]:checked');
    let email = document.getElementById("email").value;
    let birthDate = document.getElementById("birthDate").value;
    let address = document.getElementById("address").value;

    let correct = 1;

    if (firstName == "" || lastName == "" || !gender || email == "" || birthDate == "" || address == "") {
        alert("All fields are required.");
        correct = 0;
        return false;
    }

    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        correct = 0;
        return false;
    }

    if (correct == 1) {
        alert("Success!");
    }