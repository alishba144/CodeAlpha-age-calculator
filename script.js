function calculateAge() {
  const dobInput = document.getElementById("dob");
  const result = document.getElementById("result");
  const dob = dobInput.value.trim();
  
  // Clear previous result animation
  result.classList.remove("pulse");

  if (!dob) {
    showError("Please enter your birth date", dobInput);
    return;
  }

  const birthDate = new Date(dob);
  const today = new Date();

  // Validate date input
  if (isNaN(birthDate.getTime())) {
    showError("Please enter a valid date", dobInput);
    return;
  }

  // Check if birth date is in the future
  if (birthDate > today) {
    showError("Birth date cannot be in the future", dobInput);
    return;
  }

  // Calculate age
  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  // Handle negative days
  if (days < 0) {
    months--;
    const daysInLastMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    days += daysInLastMonth;
  }

  // Handle negative months
  if (months < 0) {
    years--;
    months += 12;
  }

  // Format the output based on age
  let ageMessage;
  if (years === 0 && months === 0) {
    ageMessage = `🎊 You're just <strong>${days}</strong> day${days !== 1 ? 's' : ''} old! Welcome to the world! 👶`;
  } else if (years === 0) {
    ageMessage = `👶 You're <strong>${months}</strong> month${months !== 1 ? 's' : ''} and <strong>${days}</strong> day${days !== 1 ? 's' : ''} old!`;
  } else {
    ageMessage = `🎉 You are <strong>${years}</strong> year${years !== 1 ? 's' : ''}, <strong>${months}</strong> month${months !== 1 ? 's' : ''}, and <strong>${days}</strong> day${days !== 1 ? 's' : ''} old!`;
  }

  // Add special messages for milestones
  if (years === 1) {
    ageMessage += "<br>Happy 1st birthday! 🎂";
  } else if (years === 18) {
    ageMessage += "<br>Congratulations on becoming an adult! 🎓";
  } else if (years === 21) {
    ageMessage += "<br>Welcome to full adulthood! 🍾";
  } else if (years === 30 || years === 40 || years === 50) {
    ageMessage += `<br>Welcome to your ${years}s! 🎈`;
  } else if (years >= 100) {
    ageMessage += "<br>Wow! A centenarian! 🌟";
  }

  // Display result with animation
  result.innerHTML = ageMessage;
  result.classList.add("pulse");
  dobInput.classList.remove("error");
}

function showError(message, inputElement) {
  const result = document.getElementById("result");
  result.innerHTML = `⚠️ ${message}`;
  result.classList.add("error-message");
  inputElement.classList.add("error");
  inputElement.focus();
}

// Add this CSS to your stylesheet:
/*
.pulse {
  animation: pulse 0.5s ease-in-out;
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.03); }
  100% { transform: scale(1); }
}

.error-message {
  color: #d63031;
  animation: shake 0.5s ease-in-out;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  20%, 60% { transform: translateX(-3px); }
  40%, 80% { transform: translateX(3px); }
}

.error {
  border-color: #d63031 !important;
  background-color: #fff9f9 !important;
}
*/