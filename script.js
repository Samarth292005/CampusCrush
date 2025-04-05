function validateEmail() {
    const email = document.getElementById('email').value;
    // Updated regex for the email format: firstname.surname.admissionyearcourse@bmu.edu.in
    const regex = /^[a-z]+\.[a-z]+\.\d{2}[a-z]+@bmu\.edu\.in$/;

    if (!regex.test(email)) {
        alert("Please enter a valid BMU College ID email.");
        return false;
    }

    // If valid email, show success message and redirect
    alert("Login Successful!");
    window.location.href = "dashboard.html"; // Redirect to another page after successful login
    return false; // Prevent form from submitting
}
