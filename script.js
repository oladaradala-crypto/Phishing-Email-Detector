const emailText = document.getElementById("emailText");
const scanBtn = document.getElementById("scanBtn");
const clearBtn = document.getElementById("clearBtn");
const riskLevel = document.getElementById("riskLevel");
const results = document.getElementById("results");


// Scan Email Button
scanBtn.addEventListener("click", scanEmail);


// Clear Button
clearBtn.addEventListener("click", () => {
    emailText.value = "";
    riskLevel.textContent = "Risk Level:";
    riskLevel.style.color = "black";
    results.innerHTML = "";
});


// Scan Function
function scanEmail() {

    const email = emailText.value.toLowerCase();

    let score = 0;
    let warnings = [];

    // Suspicious words and phrases
    if (email.includes("urgent") || email.includes("immediately")) {
        score++;
        warnings.push("Urgent language detected.");
    }

    if (email.includes("click here") || email.includes("login now")) {
        score++;
        warnings.push("Suspicious link detected.");
    }

    if (
        email.includes("password") ||
        email.includes("bank details") ||
        email.includes("account number")
    ) {
        score++;
        warnings.push("Sensitive information requested.");
    }

    if (
        email.includes("winner") ||
        email.includes("lottery") ||
        email.includes("free money") ||
        email.includes("prize")
    ) {
        score++;
        warnings.push("Possible prize or lottery scam.");
    }

    // Display Results
    results.innerHTML = "";

    warnings.forEach((warning) => {
        const li = document.createElement("li");
        li.textContent = warning;
        results.appendChild(li);
    });


    // Risk Levels
    if (score === 0) {
        riskLevel.textContent = "Risk Level: LOW";
        riskLevel.style.color = "green";

        const li = document.createElement("li");
        li.textContent = "No phishing indicators detected.";
        results.appendChild(li);

    } else if (score <= 2) {
        riskLevel.textContent = "Risk Level: MEDIUM";
        riskLevel.style.color = "orange";

    } else {
        riskLevel.textContent = "Risk Level: HIGH";
        riskLevel.style.color = "red";
    }

}