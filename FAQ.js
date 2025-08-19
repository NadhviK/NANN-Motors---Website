// Get all FAQ questions
const faqQuestions = document.querySelectorAll('.faq-question');

// Add event listener to each question button
faqQuestions.forEach(question => {
  question.addEventListener('click', function() {
    // Toggle the answer visibility
    const answer = this.nextElementSibling;
    if (answer.style.display === 'block') {
      answer.style.display = 'none';
    } else {
      answer.style.display = 'block';
    }
  });
});
