// script.js

document.getElementById('survey-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from refreshing page on submit

    const biasAwareness = document.querySelector('input[name="bias-awareness"]:checked').value;
    const mitigationActions = document.querySelector('textarea[name="mitigation-actions"]').value;
    const mitigationSuggestions = document.querySelector('textarea[name="mitigation-suggestions"]').value;

    // Display confirmation message
    alert('Thank you for your submission!');

    console.log('Bias Awareness:', biasAwareness);
    console.log('Mitigation Actions:', mitigationActions);
    console.log('Mitigation Suggestions:', mitigationSuggestions);

    // Redirect based on the answer to the first question
    if (biasAwareness === 'Haven’t yet') {
        window.location.href = 'educatorFull.html';  // Redirect to Ai_biased.html
    } else if (biasAwareness === 'Yes') {
        window.location.href = 'educatorPart.html';  // Redirect to Good_job.html
    }
});

