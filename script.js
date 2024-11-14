// script.js

document.getElementById('survey-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from refreshing page on submit

    const biasAwareness = document.querySelector('input[name="bias-awareness"]:checked').value;
    const mitigationActions = document.querySelector('textarea[name="mitigation-actions"]').value;
    const mitigationSuggestions = document.querySelector('textarea[name="mitigation-suggestions"]').value;

    // Display confirmation message and submitted data in the console (can be modified for actual submission)
    alert('Thank you for your submission! Your responses have been recorded.');

    console.log('Bias Awareness:', biasAwareness);
    console.log('Mitigation Actions:', mitigationActions);
    console.log('Mitigation Suggestions:', mitigationSuggestions);

    // Optionally, send this data to a server or store it as needed (e.g., using fetch or AJAX).
});
