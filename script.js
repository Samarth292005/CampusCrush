let generatedOTP = "";
let otpExpiryTime = 0;
let attempts = 0;
const MAX_ATTEMPTS = 3;

function sendOTP() {
    const emailInput = document.getElementById("email");
    const email = emailInput.value.trim().toLowerCase();

    const regex = /^[a-z]+\.[a-z]+\.\d{2}[a-z]+@bmu\.edu\.in$/;

    if (!regex.test(email)) {
        alert("Please enter a valid BMU College Email ID.");
        return;
    }

    generatedOTP = Math.floor(100000 + Math.random() * 900000).toString();

    // OTP valid for 2 minutes
    otpExpiryTime = Date.now() + 2 * 60 * 1000;

    attempts = 0;

    alert(`OTP has been sent to ${email}`);

    // For demo/testing only
    console.log("OTP:", generatedOTP);

    document.getElementById("email-step").style.display = "none";
    document.getElementById("otp-step").style.display = "block";
}

function validateOTP() {
    const enteredOTP = document.getElementById("otp").value.trim();

    if (Date.now() > otpExpiryTime) {
        alert("OTP has expired. Please request a new OTP.");
        return;
    }

    if (attempts >= MAX_ATTEMPTS) {
        alert("Maximum attempts reached. Generate a new OTP.");
        return;
    }

    attempts++;

    if (enteredOTP === generatedOTP) {
        alert("Login Successful!");

        sessionStorage.setItem("loggedIn", "true");

        window.location.href = "dashboard.html";
    } else {
        const remaining = MAX_ATTEMPTS - attempts;
        alert(`Invalid OTP. ${remaining} attempt(s) remaining.`);
    }
}

function resendOTP() {
    generatedOTP = Math.floor(100000 + Math.random() * 900000).toString();

    otpExpiryTime = Date.now() + 2 * 60 * 1000;
    attempts = 0;

    alert("A new OTP has been generated.");

    // Demo only
    console.log("New OTP:", generatedOTP);
}
