let generatedOTP = ''; // Variable to hold the generated OTP

// Function to simulate sending OTP to the email (in real-world this would be done server-side)
function sendOTP() {
    const email = document.getElementById('email').value;
    
    // Regular expression to check the BMU College ID format
    const regex = /^[a-z]+\.[a-z]+\.\d{2}[a-z]+@bmu\.edu\.in$/;

    if (!regex.test(email)) {
        alert("Please enter a valid BMU College Email ID.");
        return;
    }

    // Simulate OTP generation (In a real scenario, this would be done server-side)
    generatedOTP = Math.floor(100000 + Math.random() * 900000); // Generate a 6-digit OTP
    console.log("Generated OTP (for testing purposes):", generatedOTP); // Log OTP for testing
    
    // Simulate sending OTP to the user's email (this would be done on the server)
    alert(`An OTP has been sent to your email address: ${email}`);
    
    // Hide the email form and show OTP form
    document.getElementById('email-step').style.display = 'none';
    document.getElementById('otp-step').style.display = 'block';
}

// Function to validate the OTP entered by the user
function validateOTP() {
    const enteredOTP = document.getElementById('otp').value;

    // Check if the entered OTP matches the generated OTP
    if (enteredOTP === generatedOTP.toString()) {
        alert("OTP verified successfully! You are logged in.");
        window.location.href = "dashboard.html"; // Redirect to the dashboard or another page
    } else {
        alert("Invalid OTP. Please try again.");
    }
}
