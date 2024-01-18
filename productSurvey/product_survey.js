function submitFeedback() {
    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;

    // Displaying the feedback values
    document.getElementById('userName').innerHTML = username;
    document.getElementById('userAge').innerHTML = age;
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductChoice').innerHTML = productType;
    document.getElementById('userFeedback').innerHTML = feedback;

    // Displaying a thank you message
    alert('Thank you for your valuable feedback');

    // Displaying the user information div
    document.getElementById('userInfo').style.display = 'block';
}

// Fetching the submit button and attaching the submitFeedback function
const submitButton = document.getElementById('submitBtn');
submitButton.onclick = submitFeedback;

// Adding keydown event listener for the entire document
document.addEventListener('keydown', function(event) {
    // Check if the pressed key is 'Enter'
    if (event.key === 'Enter') {
        submitFeedback();
    }
});
