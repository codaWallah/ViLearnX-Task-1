function updateStrengthMeter(password) {
    let score = analyzePassword(password);
    let strengthBar = document.getElementById('strength-bar');
    let feedback = document.getElementById('feedback');
  
    if (score === 3) {
      strengthBar.style.width = '100%';
      strengthBar.style.backgroundColor = 'green';
      feedback.innerText = 'Strong Password';
    } else if (score === 2) {
      strengthBar.style.width = '66%';
      strengthBar.style.backgroundColor = 'yellow';
      feedback.innerText = 'Medium Strength Password';
    } else {
      strengthBar.style.width = '33%';
      strengthBar.style.backgroundColor = 'red';
      feedback.innerText = 'Weak Password';
    }
  }
  