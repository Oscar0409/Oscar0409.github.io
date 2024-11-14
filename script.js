// script.js

document.getElementById('survey-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from refreshing page on submit

    const biasAwareness = document.querySelector('input[name="bias-awareness"]:checked').value;
    const mitigationActions = document.querySelector('textarea[name="mitigation-actions"]').value;
    const mitigationSuggestions = document.querySelector('textarea[name="mitigation-suggestions"]').value;

    // Display confirmation message
    alert('Thank you for your submission! Your responses have been recorded.');

    console.log('Bias Awareness:', biasAwareness);
    console.log('Mitigation Actions:', mitigationActions);
    console.log('Mitigation Suggestions:', mitigationSuggestions);

    // Redirect based on the answer to the first question
    if (biasAwareness === 'Yes') {
        window.location.href = 'AI_Bias.pdf';  // Redirect to Ai_biased.html
    } else if (biasAwareness === 'Haven’t yet') {
        window.location.href = 'Good_job.pdf';  // Redirect to Good_job.html
    }
});

