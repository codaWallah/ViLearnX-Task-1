// 3.Feedback Mechanism
//     Real-time Feedback:

function provideFeedback(password) {
  let score = analyzePassword(password);
  let feedback = '';
  if (score === 3) {
    feedback = 'Strong Password';
  } else if (score === 2) {
    feedback = 'Medium Strength Password';
  } else {
    feedback = 'Weak Password';
  }
  return feedback;
}